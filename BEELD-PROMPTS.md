# Beeld-kit — AI-foto's voor Spoed Dak Service (iPhone-realistisch, in bulk)

Doel: snel ~20 realistische beelden genereren die lijken op **gewone iPhone-kiekjes**
van echt dakwerk in de regio Den Bosch — geen stock/AI-look. Later vervang je ze door
echte foto's.

> **"Claude Design" maakt géén foto's.** Gebruik een image-model (zie §4). Claude (ik)
> kan ze hier niet genereren — ik lever de prompts + maak de site image-ready.

---

## 1. De realisme-formule (waarom het op een iPhone-foto lijkt)

Plak deze **stijl-staart** achter ELKE scène-prompt:

> *"Candid amateur snapshot taken on an iPhone, handheld, slightly imperfect framing,
> natural overcast Dutch daylight, true-to-life muted colors, mild smartphone HDR,
> realistic textures, a little sensor noise, 4:3, ordinary everyday moment. Typical
> Dutch suburban brick house in Noord-Brabant."*

**Gebruik NIET** (dit maakt het juist nep/stock): *professional photography, studio
lighting, cinematic, 8k, hyperdetailed, award-winning, DSLR, bokeh, glossy, dramatic.*

**Negatieve prompt** (waar het tool dat ondersteunt):
> *oversaturated, glossy, plastic skin, perfect studio lighting, watermark, text, logo,
> stock photo, deformed hands, extra fingers, cartoon, illustration.*

**Pro-tip iPhone-look:** voeg toe *"shot from chest height, casual angle, slight lens
distortion of a phone wide camera"* en houd het licht **bewolkt/zacht** (NL-weer).

---

## 2. Eerlijk advies (lees dit even)

- **Generieke werkfoto's** (daken, goten, gereedschap, vóór/na) als AI-beeld → prima en
  normaal om de site te vullen.
- **Géén nep-"echte klus"-claim:** zet AI-vóór/na niet bij als "dit dak heb ík gedaan".
  Gebruik het illustratief. Als een klant doorheeft dat het nep is, schaadt dat juist je
  vertrouwen.
- **De foto van "Rens":** een verzonnen gezicht ondermijnt je hele USP ("echte vakman").
  Beter: een shot **van opzij/achter of handen-aan-het-werk** (geen herkenbaar nep-gezicht),
  en vervang dit z.s.m. door een échte selfie (leen één keer een telefoon — je hebt er maar
  één nodig).

---

## 3. De shotlijst (≈20 beelden) + kant-en-klare prompts

Bestandsnaam → in `public/img/...`. Master = scène + de stijl-staart uit §1.

### Merk / mensen
- **`img/rens-aan-het-werk.jpg`** — *"A roofer in dark work clothes seen from the side,
  kneeling on a pitched red-tile roof of a Dutch house, focused on the tiles, holding a
  tool, no clear face."* + stijl-staart.
- **`img/bus.jpg`** — *"A plain white work van parked in front of a Dutch brick row house
  on a quiet residential street, ladders on the roof rack."* + stijl-staart.

### Goten (opener — vóór/na)
- **`img/goot-vol.jpg`** — *"Close-up of a roof gutter completely full of wet leaves and
  green moss, overflowing slightly, on a Dutch house."* + stijl-staart.
- **`img/goot-schoon.jpg`** — *"Close-up of the same clean empty roof gutter after
  cleaning, water draining freely."* + stijl-staart.

### Dak reinigen / mos (vóór/na)
- **`img/dak-mos.jpg`** — *"A pitched red-tile roof heavily covered in green moss and dark
  algae, Dutch suburban house, grey sky."* + stijl-staart.
- **`img/dak-schoon.jpg`** — *"The same red-tile roof cleaned, moss removed, tiles visible
  again."* + stijl-staart.

### Coating
- **`img/dak-coaten.jpg`** — *"A roofer applying protective coating to red roof tiles with
  a low-pressure sprayer, close view of wet-coated tiles."* + stijl-staart.

### Daklekkage / reparatie
- **`img/daklekkage.jpg`** — *"A damp brown water stain on a white interior ceiling near a
  corner, lived-in Dutch home."* + stijl-staart.
- **`img/pan-kapot.jpg`** — *"A single cracked/broken red roof tile among intact tiles on a
  pitched roof."* + stijl-staart.
- **`img/pan-vervangen.jpg`** — *"Hands placing a new matching red roof tile into a pitched
  tile roof."* + stijl-staart.

### Goot vervangen / lood / nok
- **`img/goot-nieuw.jpg`** — *"A freshly installed zinc roof gutter along the edge of a
  Dutch house roof."* + stijl-staart.
- **`img/lood-schoorsteen.jpg`** — *"New grey lead flashing fitted around the base of a
  brick chimney on a tile roof."* + stijl-staart.

### Platte daken / EPDM
- **`img/epdm-dak.jpg`** — *"A flat roof covered with smooth black EPDM rubber membrane,
  edges neatly finished, small Dutch extension roof, view from above."* + stijl-staart.

### Schoorsteen / dakkapel / zonnepanelen / vogelwering / storm
- **`img/schoorsteen.jpg`** — *"A brick chimney on a Dutch tile roof being swept, brush
  visible."* + stijl-staart.
- **`img/dakkapel.jpg`** — *"A dormer window (dakkapel) on a Dutch house roof, being
  cleaned."* + stijl-staart.
- **`img/zonnepanelen.jpg`** — *"Solar panels on a Dutch pitched roof being cleaned with a
  soft brush, water sheeting off."* + stijl-staart.
- **`img/vogelwering.jpg`** — *"Close-up of bird-mesh comb filler fitted along the bottom
  row of red roof tiles."* + stijl-staart.
- **`img/stormschade.jpg`** — *"A few red roof tiles blown loose and shifted after a storm
  on a Dutch house roof, grey windy sky."* + stijl-staart.
- **`img/dakrenovatie-voor.jpg`** / **`-na.jpg`** — *"A tired old Dutch tile roof"* / *"the
  same roof fully renovated with fresh tiles."* + stijl-staart.

---

## 4. Welk tool (voor iPhone-realisme)

- **Google Gemini-image ("Nano Banana" / Gemini 2.5 Flash Image)** — gratis in de Gemini-app
  / AI Studio. Top in realisme én in **vóór/na op hetzelfde dak** (geef de "vóór" als input,
  vraag "maak dit dak schoon"). **Aanrader.**
- **Midjourney v7** — zeer realistisch; gebruik `--style raw --ar 4:3` en mijd cinematische
  woorden.
- **Flux 1.1** (via Freepik/Replicate/Krea) — sterk fotorealisme.
- **ChatGPT-beeld / Ideogram / Leonardo** — prima alternatief.

**Batch-workflow:** plak de stijl-staart vast, genereer per shot 3–4 varianten, kies de
minst-perfecte (die lijkt het echtst), exporteer als JPG met de naam hierboven, zet in
`public/img/`. In een uur heb je alle 20.

---

## 5. Hoe ze op de site komen (ik heb 't image-ready gemaakt)

- Map **`public/img/`** bestaat. Zet je JPG's daar met de naam uit §3.
- Elke **dienst** heeft nu een optioneel veld `afbeelding` in `src/data/diensten.ts`. Vul
  bv. `afbeelding: "/img/dak-coaten.jpg"` → de foto verschijnt automatisch boven op die
  dienstpagina. Leeg = huidige nette opmaak (geen kapotte plaatjes).
- Voor **Over Rens**: zet `overFoto: "/img/rens-aan-het-werk.jpg"` in `src/site.config.ts`.
- Stuur me de bestanden of zeg "ze staan erin", dan koppel ik alles in één keer en zet ik
  ze ook op de homepage (hero + vóór/na-blok).

> Alt-teksten en `loading="lazy"` regel ik automatisch bij het inladen — goed voor SEO en snelheid.
