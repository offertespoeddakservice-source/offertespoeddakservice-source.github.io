# WERK-LOG — nachtelijke SEO-bouw (branch `nacht-seo`)

> Append-only. De `/dak`-loop schrijft hier elke iteratie een regel.
> 's Ochtends lees jij dit + bekijk je de diff: `git -C ~/spoeddakservice diff master..nacht-seo`.

## ⚠️ VOOR RENS — alleen jij kunt dit (de loop bouwt de rest)
- [ ] **Prijs knopen:** €25 of €30 voor goten reinigen? De site zegt nu overal €25, je model/flyer €30. Kies één getal — de loop laat de bestaande prijs-tekst staan tot jij beslist.
- [ ] **Deployen:** domein + hosting kiezen (advies: spoeddakservice.nl + Cloudflare Pages). De loop pusht/deployt niks.
- [ ] **GBP live + verifiëren:** Google wil jóuw identiteit (video met bus/gereedschap). Niemand anders kan dit.
- [ ] **Echte foto's:** vóór/na per klus — de visuele bewijslast. De loop kan ze niet maken, alleen de plekken klaarzetten.

---

## Log

**2026-06-22 — Taak 3 ✅ Keyword-clusters op money-pagina's**
- Aanpak: secundaire termen als natuurlijke FAQ-vragen (geen stuffing) → ze voeden ook de
  FAQPage-schema. 8 nieuwe FAQ's over 3 pagina's:
  - daklekkage (+3): "daklekkage opsporen", "lekkage plat dak", "dak lekt wat nu".
  - goten (+3): "verstopte regenpijp", "lekkende dakgoot", "dakgoot schoonmaken/afvoer".
  - stormschade (+2): "dakpannen weggewaaid", "noodreparatie avond/weekend".
- Termen gekozen op lage comp + huur-intentie uit PRIORITEIT.md.
- Geverifieerd: build 55 pag. groen; cluster-tekst aanwezig in dist; daklekkage-schema nu 5 FAQ's.
- Volgende: taak 4 — voice/-map (Rens' schrijfstem).

**2026-06-22 — Taak 2 🟡 Matrix-route (Tier A klaar)**
- Gebouwd: `src/data/matrix.ts` (selectieve combo-lijst met per combinatie een UNIEKE hook)
  + route `src/pages/werkgebied/[plaats]/[dienst].astro`.
- Tier A = 10 pagina's: `daklekkage` + `goten-reinigen` × {Oss, Den Bosch, Rosmalen, Vught, Berlicum}.
- Elke pagina: eigen H1 "dienst in plaats", unieke lokale hook, dienst-intro + punten, gecombineerde
  FAQ (plaats- én dienst-specifiek), Service+FAQPage JSON-LD, interne links ↑plaats ↑dienst, CTA.
- Geverifieerd met `npm run build`: **55 pagina's, 0 errors**, 10 matrix-pagina's aanwezig in dist.
  Steekproef bevestigt unieke content (oss/daklekkage ≠ vught/goten) → geen thin content.
- Opgesplitst: Tier B (14) + Tier C stormschade (12) → nieuwe taak **2b** in backlog.
- Volgende: taak 3 — keyword-clusters op de money-dienstpagina's.

**2026-06-22 — Taak 1 ✅ PRIORITEIT.md**
- Gevonden: het grote zoekvolume zit in product/DIY-termen die Rens niet bedient
  (`gootdrains` 27.100, `dakkapel` 22.200, `velux dakraam` 22.200, `dakpannen` 8.100) →
  bewust genegeerd. De waarde zit in huur-intentie: hoge CPC + lage comp.
- Top money-termen: `daklekkage repareren` (880, Laag, €5,46), `daklekkage` (1000, €5,86),
  `verstopte regenpijp` (720, Laag), `lekkende dakgoot` (480), `dakgoot schoonmaken` (2400).
- Belangrijk inzicht: dorpsvolume valt op `dakdekkers oss` (480) na onder de KP-meetdrempel
  → matrix-pagina's zijn een local-pack/relevantie-zet, niet een volumejacht.
- Gebouwd: `PRIORITEIT.md` met money-ranking, matrix-bouwvolgorde (Tier A/B/C ≈ 36 pag.),
  4 artikelen, ads-starter (alleen huur-termen) en een "niet bouwen"-valkuil.
- Geverifieerd: alle genoemde cijfers komen 1-op-1 uit `KEYWORD-ONDERZOEK.md`.
- Nieuwe kans voor VOOR RENS: ads-starter is direct bruikbaar zodra de site live is — kleine
  €/dag op `daklekkage`/`goten`, nooit op de product-termen.
- Volgende: taak 2 — matrix-route bouwen (`/werkgebied/[plaats]/[dienst]`), start Tier A.
