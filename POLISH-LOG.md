# Kwaliteitscontrole & verbeterrondes — Spoed Dak Service website

Per ronde: een kritische vraag → bevinding → actie. ✅ = gedaan, 🔲 = alleen jij kunt aanleveren.

| # | Vraag (wat kan beter?) | Bevinding | Actie |
|---|---|---|---|
| 1 | Klopt het telefoonnummer overal? | Stond een placeholder (06 12 34 56 78) | ✅ Echt nummer **06 10 18 53 57** overal (uit je flyer) |
| 2 | Doet het contactformulier iets? | `action` was een placeholder → deed niets | ✅ Werkende **mailto-fallback** (bel/WhatsApp blijven hoofd-CTA) |
| 3 | Klopt de nummering op de servicekaarten? | Toonde "010–014" i.p.v. 10–14 | ✅ Gefixt (01–14) |
| 4 | Dekt de site al je diensten (boekje + flyer)? | Slechts 5 dienstpagina's | ✅ Uitgebreid naar **14** — alleen wat je écht doet |
| 5 | Is er interne SEO-linkstructuur? | Zwak | ✅ Elke dienstpagina → alle 20 plaatsen; plaatspagina's → diensten + andere plaatsen |
| 6 | Is de structured data compleet voor SEO? | Basis aanwezig | ✅ RoofingContractor + Service + FAQ + **BreadcrumbList** + **openingstijden** |
| 7 | Social share / OG-afbeelding? | `/og.jpg` bestond niet (kapotte share) | ✅ Branded **og.svg** + Twitter-cards |
| 8 | Foutpagina / app-manifest? | Ontbraken | ✅ **404-pagina** + webmanifest + apple-touch-icon |
| 9 | Toegankelijkheid? | Geen skip-link | ✅ Skip-link, `lang=nl`, semantische koppen, aria op navigatie |
| 10 | Is de prijstransparantie compleet? | Paar diensten | ✅ **Volledige prijstabel** (goten, schoorsteen, coaten, vervangen, lekkage, spoed…) |
| 11 | Oogt "Over Rens" volwaardig? | Was dun, één kolom | ✅ Twee koloms: verhaal + nette **foto-placeholder** |
| 12 | Geen dunne/doorway-pagina's (Google-straf)? | Risico bij massa-combo's | ✅ Bewust **géén** 850 combo-pagina's; elke pagina uniek, alleen echte diensten/plaatsen |
| 13 | Te "AI"/generiek? | — | ✅ Geen emoji-iconen, platte stoere kleurvlakken, eigen lettertype, persoonlijke "ik"-toon |
| 14 | Mobiel goed? | — | ✅ Responsive + vaste bel/WhatsApp-balk onderaan |
| 15 | Snelheid (Core Web Vitals)? | — | ✅ Statisch gegenereerd, 1 webfont met `display=swap`, inline CSS, geen zware JS |

## Eindstatus
- **41 pagina's**, foutloze build, sitemap + robots, git-repo klaar om te pushen.
- Volledig in je flyer-huisstijl (navy + oranje), consistent, mobiel-first.
- SEO-fundament staat: unieke titels/meta per pagina, schema, interne links, brede dekking.

## Wat alleen jij nog kunt aanleveren (zie DEPLOY.md)
🔲 Foto van jezelf + 5–10 vóór/na-foto's · 🔲 KvK-nummer · 🔲 Google review-link ·
🔲 Domein bevestigen (nu: spoeddakservice.nl) · 🔲 Online zetten (gratis, stappen in DEPLOY.md)

---

## De verbeterrondes (10 vragen per ronde)

**Ronde 1 — Basisaudit:** zie de tabel hierboven (15 controlepunten → fixes).

**Ronde 2 — Navigatie & oriëntatie (grafisch/UX)**
1. Weet bezoeker waar hij is? → ✅ kruimelpad op subpagina's · 2. Actief menu-item zichtbaar? → ✅ · 3. Toetsenbord-focus zichtbaar? → ✅ focus-states · 4. Skip-link? → ✅ · 5. Proces duidelijk? → ✅ "Zo werkt het"-stappen · 6. Kruimelpad in schema? → ✅ BreadcrumbList · 7. 1× h1 per pagina? → ✅ · 8. Knopstijlen consistent? → ✅ · 9. Mobiel kruimelpad? → ✅ wrapt · 10. Verwarrende links? → ✅ opgeschoond.

**Ronde 3 — SEO-techniek**
1. WebSite-schema? → ✅ · 2. Logo in schema? → ✅ · 3. Openingstijden-schema? → ✅ · 4. Sitemap-datums? → ✅ lastmod · 5. Hoofdterm goten→**dakgoot reinigen** (590 vs 70)? → ✅ · 6. Canonical? → ✅ · 7. robots+sitemap? → ✅ · 8. Unieke titels/meta? → ✅ · 9. Taal (lang/inLanguage)? → ✅ · 10. OG/Twitter? → ✅.

**Ronde 4 — Content/longtail (informatief)**
1. Pakken we info-zoekers? → ✅ kennisbank · 2. Cornerstone-artikelen? → ✅ 3 · 3. Article-schema? → ✅ · 4. Interne link artikel→dienst? → ✅ · 5. Kennisbank in menu? → ✅ · 6. Eerlijk, geen verkooppraat? → ✅ · 7. Echte data-termen? → ✅ · 8. FAQ per artikel? → ✅ · 9. CTA per artikel? → ✅ · 10. Geen dunne artikelen? → ✅.

**Ronde 5 — Merkconsistentie (grafisch)**
1. Emoji-iconen weg (AI-tell)? → ✅ · 2. Consistente CTA-tekst? → ✅ · 3. Eén lettertype? → ✅ Archivo · 4. Kleuren consistent? → ✅ · 5. Kaart-nummering (010→10)? → ✅ · 6. Platte vlakken, geen gradients? → ✅ · 7. Persoonlijke toon? → ✅ · 8. Nette foto-placeholder? → ✅ · 9. Trust-balk overal? → ✅ · 10. Geen stockclichés? → ✅.

**Ronde 6 — Crawlbaarheid & footer**
1. Footer dekt hoofdpagina's? → ✅ uitgebreid · 2. "Alle diensten"-link? → ✅ · 3. Dienst↔plaats links? → ✅ · 4. Plaats↔plaats? → ✅ · 5. Ankertekst-variatie? → ✅ · 6. Sticky CTA aria-label? → ✅ · 7. Geen verweesde pagina's? → ✅ · 8. 404 leidt terug? → ✅ · 9. Sitemap compleet? → ✅ 45 · 10. tel/e-mail als links? → ✅.

**Ronde 7 — Contentdiepte diensten**
1. Dunne diensten extra FAQ? → ✅ 2e FAQ op kerndiensten · 2. Unieke intro? → ✅ · 3. Concrete bullets? → ✅ · 4. Prijsindicatie? → ✅ · 5. Werkgebied-chips op dienst? → ✅ · 6. Cross-sell? → ✅ · 7. Alleen echte diensten? → ✅ · 8. Geen keyword-stuffing? → ✅ · 9. FAQ-schema overal? → ✅ · 10. Geen duplicate content? → ✅.

**Ronde 8 — Homepage-compleetheid**
1. Toont breedte (14 diensten)? → ✅ · 2. Sociale proof (4,8)? → ✅ · 3. Proces? → ✅ · 4. Werkgebied? → ✅ · 5. Kennisbank-teaser? → ✅ · 6. FAQ? → ✅ · 7. Duidelijke hoofd-CTA? → ✅ · 8. €25-haak prominent? → ✅ · 9. Lokale plaatsing? → ✅ · 10. Mobiel boven-de-vouw? → ✅.

**Ronde 9 — Toegankelijkheid & snelheid**
1. 1× h1? → ✅ · 2. Semantische landmarks? → ✅ · 3. Focus zichtbaar? → ✅ · 4. Skip-link? → ✅ · 5. Contrast? → ✅ · 6. Font display=swap? → ✅ · 7. Statisch + inline CSS? → ✅ · 8. Geen zware JS? → ✅ · 9. Lichte assets? → ✅ SVG · 10. Formulierlabels? → ✅.

**Ronde 10 — Eindcontrole & livegang**
1. Build foutloos? → ✅ 45 pagina's · 2. Console-fouten? → ✅ geen · 3. Echt telefoonnummer? → ✅ · 4. Formulier functioneel? → ✅ mailto · 5. Mobiel+desktop? → ✅ · 6. Kruimelpad+nav+kennisbank live? → ✅ visueel bevestigd · 7. Sitemap/robots/schema? → ✅ · 8. Git klaar om te pushen? → ✅ · 9. Deploy-gids? → ✅ DEPLOY.md · 10. Mens-input gedocumenteerd? → ✅ (foto's, KvK, review-link, domein).
