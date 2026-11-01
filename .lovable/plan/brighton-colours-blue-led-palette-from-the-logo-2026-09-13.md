# Brighton colours: blue-led palette from the logo

The current violet + coral scheme is replaced with a palette built from the logo's own blues, with a marigold accent taking over the "action" role coral holds today. The cream page stays. The logo itself goes into the site header and footer, and becomes the browser tab icon.

## New palette

| Role | Now | New |
| --- | --- | --- |
| Primary (headers, banners, buttons) | Violet | Brighton deep blue `#123C7A` |
| Bright support (motifs, icon tiles) | Yellow | Logo cyan-blue `#1B93D8` |
| Action / CTA | Coral red | Marigold `#F5A623` with deep-blue text |
| Soft tint bands ("blush") | Pink | Pale blue `#E8F2FB` |
| Highlight | Yellow | Warm marigold light `#FFD680` |
| Page / cards | Cream | Cream, unchanged |
| Body ink | Navy-violet | Logo navy `#0E2A56` |

The logo's red is retired, as agreed. Marigold carries the same warm energy without competing with the blue.

## What changes visually

- Section banners, the sidebar menu, Apply Now, the admissions tabs and the journey infographic all pick up the blue/marigold pairing.
- The three-phase admission flow keeps its colour coding, now deep blue / cyan / marigold instead of violet / coral / navy.
- Card borders, tints and geometric decorations shift to cool blue tones so they sit on cream without looking muddy.
- Contrast is checked on every filled band so text stays readable, especially marigold buttons (dark navy text, not white).

## Logo placement

- Logo shown at the top of the left sidebar menu and in the footer, linking home.
- A square, padded copy set as the browser tab icon, replacing the default.
- Existing generated photographs stay as they are.

## Technical notes

- All values are already centralised as tokens in `src/styles.css` (`--primary`, `--coral`, `--blush`, `--highlight`, `--accent`, `--surface`, `--border`, `--ring`), so the recolour is one token edit plus targeted fixes.
- Token names stay the same to avoid churn across 36 files; `--coral` now holds marigold and gets a dark foreground. Any place assuming light-on-coral text (`text-coral-foreground` on buttons, the welcome band CTA, `text-coral` accents on cream) is reviewed individually.
- Uploaded logo referenced via a Lovable asset pointer; the favicon is written as a real square PNG in `public/` and wired through `head().links` in `src/routes/__root.tsx`.
- Pages spot-checked after the change: home, admissions and its five sub-pages, curriculum, about, life, events, blogs, contact.
