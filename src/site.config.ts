/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SPOED DAK SERVICE — centrale instellingen
 *  Pas ALLES wat met je bedrijf te maken heeft hier aan. Eén plek.
 *  Regels met  // TODO  moet je nog invullen met echte gegevens.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  // Definitieve domeinnaam. Gebruikt voor sitemap + canonical.
  url: "https://spoeddakservice.nl",

  bedrijfsnaam: "Spoed Dak Service",
  eigenaar: "Rens",
  slogan: "Vakkundig dakwerk door één vaste man — uit de regio Den Bosch.",

  // Contact — telefoon/WhatsApp is je primaire kanaal.
  telefoonWeergave: "06 10 18 53 57", // echt nummer (van je flyer)
  telefoonE164: "31610185357",        // zelfde nummer, formaat voor tel:/wa.me (zonder +)
  email: "offerte.spoeddakservice@gmail.com",

  // Standplaats + werkgebied (service-area business — adres hoeft niet publiek).
  basisplaats: "'s-Hertogenbosch",
  regioOmschrijving: "regio Den Bosch en omstreken (± 45 minuten)",

  // Google Bedrijfsprofiel review-link (uit Business Profile → "Get more reviews", opgehaald 2026-07-28).
  reviewLink: "https://g.page/r/CdIYfisQX73IEBM/review",

  // Echte reviewscore — pas aan zodra je reviews hebt (laat anders weg uit schema).
  reviews: {
    score: 4.8,   // Werkspot-score (13 reviews) — zie werkspotUrl
    aantal: 0,    // echt aantal GOOGLE-reviews — bij 0 geen sterren-schema (vul in zodra je Google-reviews hebt)
  },

  kvk: "64779890",

  // Werkspot-profiel — bron van de 4,8-score (13 reviews).
  werkspotUrl: "https://www.werkspot.nl/profiel/spoed-dak-service",

  // Storm-banner (Master Builder "klantwerving-v2", Fase 3 R6 + Fase 4 R9 dv.2a — Grote Doorloop-fix 2026-07-03).
  // Zet op true zodra de storm-watcher-mail (scripts/storm_watcher.py) een actieve storm meldt, terug op false zodra het overwaait.
  // Handmatige toggle — geen extra build-stap of account nodig.
  stormActief: false,

  // Dag en nacht bereikbaar — spoed 's nachts is een inkomstenbron (toeslag, maar geen vast percentage beloven).
  openingstijden: "24/7 bereikbaar",

  // Geo van de standplaats (Den Bosch). Voor LocalBusiness-schema.
  geo: { lat: 51.6904, lon: 5.2935 },

  // Optioneel: foto van Rens op /over (bv. "/img/rens-aan-het-werk.jpg"). Leeg = nette placeholder.
  overFoto: "/img/rens.jpg",
} as const;

/** Kant-en-klare tel: link */
export const telHref = `tel:+${SITE.telefoonE164}`;

/** WhatsApp-link met optioneel vooringevuld bericht */
export function waHref(bericht = "Hoi Rens, ik heb een vraag over mijn dak."): string {
  return `https://wa.me/${SITE.telefoonE164}?text=${encodeURIComponent(bericht)}`;
}

/** Hoofd-navigatie */
export const NAV = [
  { label: "Spoed", href: "/spoed" },
  { label: "Dak-APK", href: "/dak-apk" },
  { label: "Diensten", href: "/diensten" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Kennisbank", href: "/kennisbank" },
  { label: "Over Rens", href: "/over" },
  { label: "Contact", href: "/contact" },
] as const;
