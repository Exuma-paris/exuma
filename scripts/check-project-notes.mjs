#!/usr/bin/env node
/**
 * Vérifie la longueur des `projectNote` des fiches destination.
 *
 *   node scripts/check-project-notes.mjs
 *
 * La note s'affiche sous le champ du formulaire « Créer votre voyage », à la
 * suite de « <Destination>, très beau choix. ». Au-delà de 220 caractères elle
 * passe à quatre lignes sur mobile et pousse le bouton « Continuer » sous la
 * ligne de flottaison. 160 est la cible : deux lignes pleines.
 *
 * Sort en 1 si une note dépasse la limite dure, en 0 sinon. Les notes
 * manquantes et les notes longues mais tolérables sont signalées sans faire
 * échouer la vérification.
 */
import fs from "node:fs";
import path from "node:path";

const MAX = 220;
const TARGET = 160;
const DIR = "src/content/destinations";

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".tsx"));
const over = [];
const long = [];
const missing = [];

for (const file of files) {
  const source = fs.readFileSync(path.join(DIR, file), "utf8");
  const slug = source.match(/\n {2}slug: "([^"]+)"/)?.[1] ?? file;
  // La note est écrite sur une seule chaîne, éventuellement sur plusieurs
  // lignes par Prettier : on repart de la propriété jusqu'au guillemet fermant.
  const raw = source.match(/\n {2}projectNote:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
  if (!raw) {
    missing.push(slug);
    continue;
  }
  const note = raw[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  if (note.length > MAX) over.push([slug, note.length]);
  else if (note.length > TARGET) long.push([slug, note.length]);
}

if (missing.length) {
  console.log(
    `\nSans note (${missing.length}/${files.length}) : ${missing.join(", ")}`,
  );
}
if (long.length) {
  console.log(`\nAu-dessus de la cible de ${TARGET} caractères, tolérées :`);
  for (const [slug, n] of long) console.log(`  ${slug} — ${n}`);
}
if (over.length) {
  console.error(`\nTrop longues (limite ${MAX} caractères) :`);
  for (const [slug, n] of over) console.error(`  ${slug} — ${n}`);
  process.exit(1);
}

console.log(
  `\n${files.length - missing.length}/${files.length} fiches ont une note, toutes sous ${MAX} caractères.`,
);
