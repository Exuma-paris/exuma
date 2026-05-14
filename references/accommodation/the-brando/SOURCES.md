# Reference images — The Brando, Tetiaroa

Each generated image in `public/accommodation/the-brando/` is produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.py` to Gemini 2.5 alongside the reference saved here.

Run with:
```
GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --root accommodation the-brando
```

| Output         | Reference file        | Source URL                                                                                                          | License            | Notes                                                |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------- |
| hero.png       | hero-ref.jpg          | https://thebrando.com/wp-content/uploads/2023/02/Aerial_DSC0094-resample-scaled-e1676446341955.jpg                  | © The Brando       | Official press aerial of Onetahi motu                |
| split-1.png    | split-1-ref.jpg       | https://i0.wp.com/thekeystotravel.com/wp-content/uploads/2024/05/Sunset-in-Private-Villa-at-The-Brando.jpg          | © The Keys to Travel | Golden-hour villa pool, deck → lagoon              |
| split-2.png    | split-2-ref.webp      | https://thebrando.com/wp-content/uploads/2023/01/palms-1.png                                                        | © The Brando       | Coconut palm grove on Onetahi (served as WebP)       |
| gallery-1.png  | gallery-1-ref.jpg     | https://commons.wikimedia.org/wiki/File:Motus_%C3%A0_Tetiaroa.jpg                                                   | CC BY-SA 4.0 (Saga70) | Aerial of Tetiaroa motus                          |
| gallery-2.png  | gallery-2-ref.webp    | https://thebrando.com/wp-content/uploads/2023/02/BRANDO_3Bedroom-Living-B-6.jpg                                     | © The Brando       | 3-bedroom villa living room, warm wood (WebP)        |
| gallery-3.png  | gallery-3-ref.webp    | https://thebrando.com/wp-content/uploads/2023/02/Brando_Bobs-Bar-02-copy.jpg                                        | © The Brando       | Bob's Bar, the named open-air eatery (WebP)          |
| gallery-4.png  | gallery-4-ref.jpg     | https://commons.wikimedia.org/wiki/File:Green_sea_turtle_(Chelonia_mydas)_Moorea.jpg                                | CC BY-SA 4.0 (Charles J. Sharp) | Wikimedia featured pic, French Polynesia |
| villa-1.png    | villa-1-ref.webp      | https://thebrando.com/wp-content/uploads/2023/02/Exterior-01.jpg                                                    | © The Brando       | 1-bedroom villa exterior (Brando default category)   |
| villa-2.png    | villa-2-ref.jpg       | https://thebrando.com/wp-content/uploads/2023/02/BRANDO_2Bedroom-Rear-C.jpg                                         | © The Brando       | 2-bedroom villa, rear elevation with garden          |
| villa-3.png    | villa-3-ref.webp      | https://thebrando.com/wp-content/uploads/2023/02/BRANDO_3Bedroom-Pool-2.jpg                                         | © The Brando       | 3-bedroom Residence (Teremoana) pool & lounge (WebP) |

**License note.** 7 of 10 references are © The Brando press kit, used as composition references for the gen-images.py "preserve + grade" pipeline (which restyles, not republishes). 1 is editorial (© The Keys to Travel). 2 are CC-BY-SA Wikimedia. Ask `press@thebrando.com` for explicit permission before publishing the restyled outputs at scale.
