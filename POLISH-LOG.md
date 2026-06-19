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
