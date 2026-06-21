# WERK-LOG — autonome SEO-loop (branch `nacht-seo`)

> Append-only, **nieuwste ronde bovenaan**. Elke ronde: 10 tips (STAP B) + uitvoering
> (STAP C: kans → gebouwd → geverifieerd), met timestamp. Voortgang overleeft elke
> herstart: bij (her)start leest de loop dit en gaat verder waar hij was.
> "Alleen Rens kan dit" → niet hier, maar in `BESLISSING-NODIG.md`.
> Diff bekijken: `git -C ~/spoeddakservice diff master..nacht-seo`.

---

## Reeds gedaan (vóór de ronde-structuur — al gecommit op `nacht-seo`)
- ✅ **PRIORITEIT.md** — data-gedreven bouwvolgorde uit 9.494 keywords. Kerninzicht: volume
  zit in product/DIY-termen (negeren), geld in laag-volume hoge-CPC huurtermen (daklekkage-
  repareren, goten-opener). Dorpsvolume flinterdun → matrix = local-pack/relevantie-zet.
- ✅ **Matrix Tier A (10 pag.)** — `src/data/matrix.ts` + route `werkgebied/[plaats]/[dienst].astro`.
  daklekkage + goten × {Oss, Den Bosch, Rosmalen, Vught, Berlicum}, elk unieke hook. Build groen.
- ✅ **Keyword-clusters** — 8 cluster-FAQ's op daklekkage/goten/stormschade (renderen + FAQPage-schema).

**Verder gaan bij:** matrix Tier B/C, kennisbank-artikelen, voice/-map, GBP-content, citaties
(zie `BACKLOG.md`). Vanaf hier ronde-gewijs loggen.

---

## Rondes
- _(Ronde 1 begint zodra de loop start — STAP A research, dan 10 tips hier.)_
