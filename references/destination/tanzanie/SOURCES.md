# Reference images — Tanzanie

Every image in `public/destination/tanzanie/` except `bento-map.webp` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.mjs` to Gemini 3 Pro Image (Nano Banana Pro) alongside the reference below. Stored as 4096px WebP at quality 96.

## Rights status

**`--inspire` is used for the eighteen landscape and experience images.** The reference is passed as a mood and content brief only; the model composes an original frame of a comparable scene, with a different camera position, subject arrangement and framing. Where the client asked for specific elements to survive (a river's course, a mountain's silhouette, a landmark's rock strata, an island's shape and water depths), those were written into the caption in detail rather than left to the model.

**Grade-only (no flag) — used for the seven property photographs.** Their composition is preserved exactly and only the Exuma colour grade is applied. This reverses an earlier decision: the seven had been recomposed with `--inspire` precisely because the client flagged the risk of a hotel recognising its own photograph. The client then asked for the original photographs back, as supplied. **⚠️ These seven are therefore reproductions of third-party press photographs (&Beyond, Laba Laba, Singita) and Exuma has no verified licence for them.** Two of them additionally show identifiable people with no image-rights release. To undo this, regenerate the seven with `--inspire`; the captions that produced the recomposed versions are in the session history.

**`bento-map.webp` involves no AI at all** — see its row.

| Output | Reference | Mode | Source / rights |
| --- | --- | --- | --- |
| `hero-1.webp` | `hero-1-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `hero-2.webp` | `hero-2-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `hero-3.webp` | `hero-3-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `full-image.webp` | `full-image-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `split-1.webp` | `split-1-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `split-2.webp` | `split-2-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `xp-traversee-grumeti-1.webp` | `xp-traversee-grumeti-1-ref.png` | inspire, lodge retiré à la demande du client | Capture d'écran client, origine non documentée |
| `xp-traversee-grumeti-2.webp` | `xp-traversee-grumeti-2-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `xp-olduvai.webp` | `xp-olduvai-ref.png` | inspire, monolithe conservé fidèle | Site naturel, pas un sujet protégeable |
| `xp-hadzabe.webp` | `xp-hadzabe-ref.png` | inspire | Capture d'écran client, origine non documentée |
| `xp-fly-camp.webp` | `xp-fly-camp-ref.png` | **grade-only** | Photo d hotel reproduite. Licence non verifiee |
| `hotel-grumeti-river-lodge.webp` | `hotel-grumeti-river-lodge-ref.jpg` | **grade-only** | Photo &Beyond reproduite. Licence non verifiee |
| `hotel-laba-mama-simba.webp` | `hotel-laba-mama-simba-ref.jpg` | **grade-only** | Photo Laba Laba reproduite. Licence non verifiee |
| `hotel-singita-sasakwa.webp` | `hotel-singita-sasakwa-ref.png` | **grade-only** | Photo Singita reproduite. Licence non verifiee |
| `bento-map.webp` | `geo/*.json` | **programme, aucune IA** | Tracés OpenStreetMap (Tanzanie, Unguja, Pemba) via Nominatim, simplifiés puis rendus en SVG. Palette relevée au pixel sur `public/destination/maurice/bento-map.png`. Construit par `.claude/skills/destination-generator/build-bento-map.mjs`. © OpenStreetMap contributors, ODbL |
| `bento-adresses.webp` | `bento-adresses-ref.jpg` | **grade-only** | Photo d hotel reproduite. Licence non verifiee |
| `bento-hebergements.webp` | `bento-hebergements-ref.jpg` | **grade-only** | Photo d hotel reproduite. Licence non verifiee. Personne identifiable, sans autorisation de droit a l image |
| `bento-conciergerie.webp` | `bento-conciergerie-ref.jpg` | inspire, immatriculation supprimée | La référence montre l'immatriculation réelle `A2-SAA` ; la consigne interdit toute immatriculation lisible |
| `bento-experiences.webp` | `bento-experiences-ref.jpg` | **grade-only** | Photo d hotel reproduite. Licence non verifiee. Personnes identifiables, sans autorisation de droit a l image |
| `map-grumeti.webp` | `map-grumeti-ref.png` | inspire, tracé de la rivière décrit méandre par méandre | Capture d'écran client, origine non documentée |
| `map-serengeti.webp` | `map-serengeti-ref.png` | inspire, lion recomposé | Capture d'écran client, origine non documentée |
| `map-ngorongoro.webp` | `map-ngorongoro-ref.jpg` | inspire, étagement conservé | Capture d'écran client, origine non documentée |
| `map-olduvai.webp` | `map-olduvai-ref.png` | inspire, détails de la roche conservés | Site naturel, pas un sujet protégeable |
| `map-arusha.webp` | `map-arusha-ref.png` | inspire, silhouette du Meru conservée | Relief naturel, pas un sujet protégeable |
| `map-zanzibar.webp` | `map-zanzibar-ref.png` | inspire, forme de l'île et profondeurs conservées | Capture d'écran client, origine non documentée |

Testimonial portraits reuse `hero-1.webp`, `hero-2.webp` and `hero-3.webp` — no separate files.

## Reste à faire

- **Confirmer les droits sur les sept photos passées en grade-only.** C est le seul risque juridique de la page, et il a ete accepte en connaissance de cause.

- La provenance des références reste indocumentée : ce sont pour l'essentiel des captures d'écran. En mode `--inspire` la sortie n'est pas une reproduction, mais on ne sait pas d'où viennent les briefs.
- Les descriptifs du Grumeti River Lodge et du Laba Mama Simba reposent désormais sur des données fournies par le client (brochure &Beyond, page Laba Laba) : dix suites dont une famille, 700 hectares à North Dolly, six garden cottages. Les deux sites bloquent la consultation automatisée, ces chiffres n'ont donc pas été recoupés à la source.
- Les trois témoignages de la page sont des textes d'attente, à remplacer par de vrais retours clients avant publication.
