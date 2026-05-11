# STYLE — Exuma destination copywriting

The editorial voice for destination pages. Read this before writing any copy. The proof-of-voice excerpts at the end are non-negotiable cadence references.

> **Where copy lives.** A destination page mentions experiences and hotels through `entityList` sections that reference slugs. The card title, blurb, and image come from `Experience` and `Accommodation` entity files under `src/content/experiences/` and `src/content/accommodations/` — **not** from the destination file. When the destination says "Trois expériences", the three blurbs are written on three entity files. The destination only owns its own sections (hero, textColumns, fullImage, etc.) and the slug references.

---

## Core principles

1. **Start with a thing, not a feeling.** Open every paragraph on a concrete observation — a place, an object, a person, a number, a sound. Never on "Découvrez", "Imaginez", "Plongez dans", "Laissez-vous".
2. **Show by detail, not by adjective.** A hotel earns its register from what's named (the technique, the material, the gesture), not from "exceptionnel" or "luxe".
3. **The reader is intelligent and skeptical.** Don't sell. Observe. Confidence is built by precision.
4. **Negation is proof.** State what something is *not* as a way to define what it is. ("Ce n'est pas un détail de brochure." "Ce n'est pas une démonstration.")
5. **End paragraphs on an observation, not a CTA.** The CTA lives in its own block.

---

## Sentence rhythm

- Vary length deliberately: a short declarative (4–8 words) followed by a longer cadenced sentence (15–30 words) followed by something in between.
- Use the colon (`:`) to introduce a concrete list or example. Use parentheses for true asides; a comma for a light pause. **No em dashes** (see `.claude/STYLE.md`).
- Use periods over commas where you can. Two sentences are often clearer than one with two clauses joined by "et".
- Lists of three are the default cadence: "Tetiaroa, Bora Bora, Moorea". Four max.

**Example of cadence (Polynésie):**
> "Le bateau quitte Bora Bora au moment précis où le ciel commence à changer de couleur. Pas au coucher du soleil officiel. Avant. Quand le bleu se teinte d'orange sur le bord et que le lagon prend la couleur qu'il ne montrera jamais en plein jour."

Three short ones (16, 5, 1, 27). The "Avant." standing alone does the work of an entire paragraph.

---

## Tense, register, person

- **Present tense.** Not future ("vous découvrirez") or conditional ("vous pourriez").
- **Third person or impersonal `on`.** Not direct address ("vous"). The voice observes; it doesn't sell.
  - OK: "On accoste sur le motu à la nuit tombée."
  - OK: "Le guide coupe le moteur et dit : regardez le fond."
  - Avoid: "Vous accosterez sur un motu de rêve."
- Direct address is allowed in: CTAs, FAQ answers, the practical info-grid, tips items addressed to the reader.

---

## Vocabulary

### Encouraged

Concrete nouns of place, gesture, material:
- Geography: lagon, motu, atoll, archipel, marae, passe, vallée, crête, calanque, maquis, golfe, presqu'île, baie
- People: pêcheur, guide, navigateur, vigneron, berger, conservateur, famille, équipe
- Verbs of motion + observation: voir, montrer, descendre, accoster, partir, lancer, tendre, gravir, traverser, longer
- Light + sense: lumière, ombre, parfum, chaleur, silence, eau

Numbers carry authority. Use them: "soixante-quatorze îles", "quarante mètres", "trente-cinq villas", "21 à 23 heures". Spell out numbers ≤ vingt; use digits beyond. Never round to "des centaines" if you can name the count.

Real or plausibly-real names build trust. Tupaia, Marlon Brando, Dominique Auroy, Tetautiare, Nick — name the chef, the village, the hotel, the boat. If you invent, mark with `// TODO: verify`.

French guillemets « » for quoted speech. No em dashes (see `.claude/STYLE.md`).

### Forbidden

- **Cliché luxury vocabulary**: paradis, paradisiaque, idyllique, féérique, magique, exceptionnel, incroyable, sublime, mythique, légendaire, incontournable, prestigieux, exclusif (in body copy — fine in eyebrow/blurb), raffiné, somptueux.
- **Empty intensifiers**: vraiment, complètement, absolument, tout simplement, véritablement, infiniment.
- **Sales verbs at sentence-start**: Découvrez, Imaginez, Plongez, Laissez-vous, Évadez-vous, Profitez de.
- **Travel-brochure metaphors**: joyau, perle, écrin, bijou, paradis, écrin de verdure, havre de paix.
- **The word "luxe"** in body copy. The register is implicit; saying it cheapens it. (Allowed in: meta titles, blurb fields, page eyebrows.)
- **"Authentique"** — especially "expérience authentique". The word is exhausted. Show authenticity by detail.
- **"Vivre une expérience"** — verb-noun pleonasm. Just describe what happens.
- **Vous + future tense** as the default register (see "Tense" above).

### Anti-examples → rewrites

| Brochure (no) | Editorial (yes) |
|---|---|
| "Découvrez ce paradis aux eaux cristallines" | "À Fakarava, le fond du lagon est visible à quarante mètres de profondeur." |
| "Une expérience inoubliable et authentique" | "Tetautiare prépare le poisson cru à sa façon, citron vert et lait de coco pressé à la main, une technique qui demande vingt minutes." |
| "Un cadre exceptionnel et idyllique" | "Depuis aucune terrasse on ne voit d'autre terrasse." |
| "Laissez-vous envoûter par la magie de l'île" | "Le silence qui suit l'extinction du moteur est un silence vrai, sans trafic, sans fond sonore." |
| "Imaginez-vous sur cette plage de rêve" | "On accoste sur le motu à la nuit tombée. Il n'y a aucune lumière artificielle visible depuis la plage." |
| "Notre offre exclusive vous propose" | "Nous construisons cette logique depuis plus de dix ans." |

---

## SEO discipline

Destination pages exist to rank in French Google for high-intent travel queries. The voice rules above are not in tension with that goal — they *are* the SEO advantage. Competitors stuff "exceptionnel", "paradis", "incontournable" and rank thinly; we rank on topical depth and named entities. Keep the voice; add the discipline below.

### Primary keyword

Each destination has **one primary keyword**: `voyage en <Destination>` (e.g. `voyage en Polynésie`, `voyage à Marrakech` — the preposition follows French usage). Two acceptable secondary forms: `séjour sur mesure à <Destination>`, `voyage de luxe en <Destination>`. Use the primary form on surfaces that allow only one phrasing (meta description, eyebrow); use the secondaries to vary body copy.

### Required placements

The primary keyword (or a near-variant) must appear in:

- The eyebrow above `hero.heading` (already conventional — keep it).
- The first sentence of `textColumns.columns[0]` (the intro).
- The `metaDescription` (≤ 160 chars).
- At least one `<h2>` in the page (any section heading).
- The `alt` of `hero.images[0]` and of `fullImage.image`.

The H1 (`hero.heading`) stays evocative — it does **not** carry the primary keyword. The eyebrow above it does. This is deliberate: the H1 is the editorial sentence; the eyebrow is the SEO surface. Do not invert this.

### Named-entity density beats keyword density

Google ranks on topical depth, not phrase repetition. Every named place (`Bonifacio`, `Sartène`, `le golfe de Porto`), every named operator (`Domaine de Murtoli`, `Casadelmar`), every named region or food (`bergerie`, `prisuttu`, `cap Pertusato`) is a long-tail signal. Five named entities beat three repetitions of `voyage de luxe`. The forbidden-vocabulary list is itself an SEO advantage — keep using it.

Target: at least **20 distinct named entities** across the page (places, hotels, dishes, people, regions, neighborhoods). The `placesMap`, `entityList`, and `bento` sections already produce most of them; `textColumns` and `textImagesSplit` should each contribute 3–5 more.

### FAQ questions = "People Also Ask" surface

The 6 `faq.items[].question` strings are the single most leveraged long-tail SEO surface on the page. Each must be a real Google query in French, written verbatim as a user would type it. Canonical patterns to mix from:

- "Quelle est la meilleure période pour partir à <Destination> ?"
- "Combien coûte un voyage à <Destination> ?"
- "Faut-il un visa pour aller à <Destination> ?"
- "Combien de temps dure le vol depuis Paris ?"
- "Que faire à <Destination> en X jours ?"
- "<Destination>, quelle saison éviter ?"
- "Où dormir à <Destination> ?" (or destination-specific: "Quels quartiers à Marrakech ?")

Mix travel basics with one or two destination-specific questions. Phrasing should mirror how users type, not how we'd write — keep contractions, prefer explicit destination names over pronouns. Answers must be plain strings (not JSX) — JSX answers are skipped by the FAQPage JSON-LD.

### Meta description

`Destination.metaDescription` is 150–160 characters, one factual sentence. Includes the primary keyword and one geographic anchor (country or region). No CTA, no sales talk. Falls back to a generic template when missing — but every destination should fill it explicitly. Example for Marrakech: *"Voyage à Marrakech sur mesure : médina, Atlas, riads d'exception. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7."*

### Meta title

`Destination.metaTitle` is the `<title>` tag prefix — the layout appends `" | Exuma"` automatically. Default: `"<Destination> — Voyage sur mesure"` (the helper generates this if the field is empty). Override only when the destination's display name differs from the keyword you want to rank on (rare).

### Image alt text

Already covered globally — but for SEO specifically:

- `hero.images[0].alt` and `fullImage.image.alt` include the destination name.
- `placesMap.places[].image.alt` includes the place name.
- Experience and accommodation `heroImage.alt` name the activity or property explicitly.
- Never repeat the same alt twice on the page.

### Heading uniqueness

Each `<h2>` must be unique on the page. The canonical section list already produces unique headings; if you add an extra `featureCards` block, double-check its heading isn't a near-duplicate of an existing one.

### What NOT to do

- No "Top 10", "Meilleur", "Guide ultime", "Tout ce que vous devez savoir" — competitive on Google but voice-killing. Depth and named entities outrank these patterns anyway.
- No keyword stuffing: never repeat the destination name in two consecutive sentences of the same paragraph.
- No meta-description CTAs ("Contactez-nous dès maintenant") — meta is factual, the CTA lives on the page.
- No JSX in `faq.items[].answer` if it can be a string. FAQ JSON-LD only includes string answers.

---

## Per-section voice rules

> **Length is in REFERENCE.md.** This block carries voice and structure only — sentence counts, character caps, and item counts live next to each section's skeleton in [REFERENCE.md](REFERENCE.md). Don't restate them here.

- **`hero.heading`** — evocative, no all-caps, no exclamation. The most editorial sentence on the page.
- **`hero.description`** — names the islands/regions/numbers. Ends on a quiet claim, not a CTA.
- **`textColumns.columns[]`** — don't repeat the heading's claim.
- **`textImagesSplit.paragraphs[]`** — narrative voice. Tense the rhythm. The last paragraph is a single observation.
- **`Experience.blurb` (in `src/content/experiences/<exp-slug>.tsx`)** — sensory; opens on a moment ("Au lever du jour…"), closes on a detail. Same anti-cliché list as the rest of the page. Same `Experience.name` rule as a heading subject ("Pêche et cuisine en famille à Moorea" — no all-caps, no em dash). **Length target: 2–3 sentences, ~25 words, ≤ 60 words hard cap.** The FeatureCard does NOT truncate — long blurbs simply make the card taller and break the row's visual rhythm. Write tight for the row, not for the component.
- **`Accommodation.blurb` (in `src/content/accommodations/<hotel-slug>.tsx`)** — open on what the place *names* ("Un motu privé dans le lagon de Taha'a…"), close on a single non-obvious fact ("Bora Bora est visible de la terrasse — on en a la beauté sans en partager la densité."). The hotel's category never gets stated — never use "palace", "5 étoiles", "luxe". The level is implicit. Same length target as `Experience.blurb`.
- **`featureCards.cards[].description`** — same length target as the entity blurbs above (2–3 sentences, ~25 words, ≤ 60 words). When a destination uses an inline `featureCards` block (see REFERENCE.md "Adding an extra section"), the descriptions live in that block; when the cards come from an `entityList`, the descriptions come from each entity's `blurb`. Same rule either way.
- **`bento.cards[].description`** — concrete, almost a tagline.
- **`placesMap.places[].description`** — open on a fact about the place; close on what makes it different.
- **`tips.items[].shortDescription`** — no period at end is fine.
- **`testimonials.testimonials[].quote`** — first-person voice (the traveller). Real-customer texture: small details, slightly imperfect rhythm. **Always flag with `// TODO: replace with real testimonial`.**
- **`faq.items[].answer`** — direct, factual, no sensory copy. The only place "vous" is fully natural.

---

## Headings

- Always lowercase or sentence case. Never Title Case English-style.
- ≤ 70 characters.
- Evocative > descriptive. "Le soir où le ciel change de sens" beats "Une croisière au coucher du soleil".
- Negation works: "Un archipel, pas une destination", "Pas un programme. Une cohérence."
- Subtitles use a comma, not an em dash: "Tetiaroa, l'atoll privé".

---

## Eyebrows

- 9–18 characters typically. ALL CAPS rendering is handled by CSS — write them in normal case.
- Categorical, not narrative: "Ouverture", "Hébergements", "Avant le départ", "Trois expériences", "FAQ".
- Avoid sales eyebrows: "Notre offre", "Notre exclusivité", "Voyage de rêve".

---

## CTAs (project-wide)

Two canonical CTAs, used everywhere:
- "Construire ce voyage" → `/reserver`  *(preferred for Polynésie/v8-style pages)*
- "Créer votre voyage" → `/reserver`  *(historical, still in use)*
- "Contactez-nous" → `/contact`

Plus the local link CTAs: "Découvrir", "Voir tout {region}", "Voir tous les hébergements", "Voir l'ensemble de nos expériences". No exclamation marks. No "→" in the label string (the component adds it).

---

## Image alt text

- French. Sensory but factual. ≤ 100 chars.
- Open on the subject, close on the place.
- "Pirogue traditionnelle sur un lagon au coucher du soleil" — yes.
- "Une magnifique plage paradisiaque" — no.

---

## Placeholder discipline

When a fact is invented (flight time, coordinates, hotel name, testimonial quote, country/continent assignment in ambiguous cases), flag with `// TODO: verify` on the same line. For testimonials specifically: every quote, name, and role gets `// TODO: replace with real testimonial` — testimonials are real-customer content and must never be silently invented.

---

## Proof-of-voice excerpts (cadence references)

These three short passages, lifted from shipped pages, are the canonical "this is the sound". When in doubt, read them aloud and match the rhythm.

**1 — Opening register (Polynésie)**
> "À Fakarava, le fond du lagon est visible à quarante mètres de profondeur. On voit son ombre sur le sable avant même d'avoir sauté du bateau. Cette clarté n'est pas un détail de brochure. C'est la mesure de ce que la Polynésie française a encore préservé, et de ce que le reste du monde a, depuis longtemps, perdu de vue."

**2 — Sensory / narrative register (Polynésie, étoiles)**
> "Le bateau quitte Bora Bora au moment précis où le ciel commence à changer de couleur. Pas au coucher du soleil officiel. Avant. Quand le bleu se teinte d'orange sur le bord et que le lagon prend la couleur qu'il ne montrera jamais en plein jour."

**3 — Place register (Corse, intro)**
> "Il existe des îles que l'on regarde, et d'autres que l'on écoute. La Corse appartient à la seconde famille. Des crêtes du GR20 aux calanques rouges de Piana, du désert blanc des Agriates aux ruelles silencieuses de Sartène, chaque vallée garde une langue, un parfum, une lumière qui n'appartiennent qu'à elle."

If a paragraph you've drafted couldn't sit next to one of these without feeling generic, rewrite it.
