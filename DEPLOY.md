# Online zetten — Spoed Dak Service

De site is een statische Astro-site. Bouwen en hosten is **gratis**.

## 1. Bouwen (lokaal testen)
```bash
cd ~/spoeddakservice
npm install      # eenmalig
npm run dev      # lokaal bekijken op http://localhost:4321
npm run build    # productie-build → map dist/
```

## 2. Online zetten (gratis) — kies één
**Cloudflare Pages (aanrader):**
- Maak een gratis account op pages.cloudflare.com
- "Create project" → upload de map `dist/`, of koppel een GitHub-repo
- Build command: `npm run build` · Output: `dist`

**Netlify (net zo simpel):**
- app.netlify.com → "Add new site" → sleep de map `dist/` erin
- Of koppel GitHub; build `npm run build`, publish `dist`

## 3. Domein
- Advies: **spoeddakservice.nl** (staat al ingesteld in `src/site.config.ts` → `SITE.url`).
- Koop 'm bij bv. TransIP/Versio en koppel 'm aan Cloudflare/Netlify (zij leggen DNS uit).
- HTTPS gaat automatisch.

## 4. Wat je zelf nog moet aanleveren (alleen jij hebt dit)
Pas aan in **`src/site.config.ts`**:
- [ ] **KvK-nummer** (`kvk`) — verschijnt dan netjes in de footer.
- [ ] **Google review-link** (`reviewLink`) — uit je Google Bedrijfsprofiel.
- [ ] Domein bevestigen (`url`) als het géén spoeddakservice.nl wordt.

En losse bestanden:
- [ ] **Foto's**: 1 foto van jezelf (→ `/over`) + 5–10 vóór/na-foto's. Zet ze in `public/`
      en ik (of jij) verwerkt ze op de homepage, dienst- en over-pagina.
- [ ] Optioneel: echte **OG-deelafbeelding** (`public/og.svg` is nu een nette placeholder).

## 5. Na livegang (SEO aanzetten)
1. **Google Search Console**: domein verifiëren + sitemap insturen: `https://spoeddakservice.nl/sitemap-index.xml`
2. **Google Bedrijfsprofiel**: aanmaken (zie GBP-PLAN.md) + website-link erin.
3. **Reviews vragen** na elke klus (QR + WhatsApp uit je dak-flyer-tool).

> Alle data, keyword-onderzoek en strategie staan in: `TARGETING-RAPPORT.md`,
> `KEYWORD-ONDERZOEK.md`, `GBP-PLAN.md`, `STRATEGIE.md`, `MASTER-PROMPT.md`.
