import { HONEYPOT_FIELD } from "@/lib/contact/submit";
import { isValidEmail, isValidPhone } from "@/lib/contact/types";

/**
 * Réception des demandes des six formulaires, relayées vers le scénario Make
 * qui les distribue (e-mail interne, CRM). L'URL du webhook ne vit que dans la
 * variable d'environnement `MAKE_WEBHOOK_URL`, côté serveur : le dépôt est
 * public et un webhook Make accepte tout ce qu'on lui envoie.
 *
 * Le corps attendu est un `ContactSubmission` (voir `lib/contact/submit.ts`).
 * On vérifie ici le minimum qui rend une demande exploitable : un formulaire
 * identifié et des coordonnées complètes. Le reste part tel quel.
 *
 * Une demande dont le champ piège est rempli vient d'un robot : on répond
 * comme si tout allait bien, sans rien relayer, pour ne pas lui apprendre
 * quoi corriger. La limite de débit, elle, se règle dans le pare-feu Vercel
 * (règle sur `/api/contact`), pas ici.
 */

const PRODUCT_PATTERN = /^[a-z0-9-]{2,40}$/;
/** Au-delà, ce n'est pas une demande de voyage. */
const MAX_BODY_BYTES = 32_000;
const WEBHOOK_TIMEOUT_MS = 8_000;

type Submission = {
  product?: unknown;
  [HONEYPOT_FIELD]?: unknown;
  contact?: {
    first_name?: unknown;
    last_name?: unknown;
    email?: unknown;
    phone?: unknown;
  };
};

export async function POST(request: Request) {
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[contact] MAKE_WEBHOOK_URL n'est pas définie");
    return Response.json({ error: "webhook_not_configured" }, { status: 503 });
  }

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return Response.json({ error: "payload_too_large" }, { status: 413 });
  }

  let body: Submission;
  try {
    body = JSON.parse(text) as Submission;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  if (isNonEmptyString(body[HONEYPOT_FIELD])) {
    console.warn("[contact] champ piège rempli, demande ignorée");
    return Response.json({ ok: true });
  }
  delete body[HONEYPOT_FIELD];

  const problem = validate(body);
  if (problem) {
    return Response.json({ error: problem }, { status: 422 });
  }

  const forwarded = {
    ...body,
    received_at: new Date().toISOString(),
    user_agent: request.headers.get("user-agent") ?? "",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forwarded),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
    if (!response.ok) {
      console.error(`[contact] Make a répondu ${response.status}`);
      return Response.json({ error: "webhook_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] Make injoignable", error);
    return Response.json({ error: "webhook_unreachable" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

function validate(body: Submission): string | null {
  if (typeof body.product !== "string" || !PRODUCT_PATTERN.test(body.product)) {
    return "invalid_product";
  }
  const c = body.contact;
  if (!c || typeof c !== "object") return "missing_contact";
  if (!isNonEmptyString(c.first_name) || !isNonEmptyString(c.last_name)) {
    return "missing_name";
  }
  if (!isNonEmptyString(c.email) || !isValidEmail(c.email)) return "invalid_email";
  if (!isNonEmptyString(c.phone) || !isValidPhone(c.phone)) return "invalid_phone";
  return null;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
