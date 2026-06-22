/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SPOED DAK SERVICE — centrale instellingen
 *  Pas ALLES wat met je bedrijf te maken heeft hier aan. Eén plek.
 *  Regels met  // TODO  moet je nog invullen met echte gegevens.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  // Definitieve domeinnaam (advies: spoeddakservice.nl). Gebruikt voor sitemap + canonical.
  url: "https://spoeddakservice.nl", // TODO: bevestig domein

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

  // Google Bedrijfsprofiel review-link (uit je Business Profile → "Get more reviews").
  reviewLink: "https://g.page/r/JOUW_PLACE_ID/review", // TODO

  // Echte reviewscore — pas aan zodra je reviews hebt (laat anders weg uit schema).
  reviews: {
    score: 4.8,   // sterrenscore zoals op je flyer (Werkspot 4,8)
    aantal: 0,    // echt aantal GOOGLE-reviews — bij 0 geen sterren-schema (vul in zodra je Google-reviews hebt)
  },

  kvk: "", // TODO: KvK-nummer

  // Openingstijden voor schema (24/7 voor spoed; pas aan naar wens).
  openingstijden: "Ma-Za 07:00-20:00, spoed 24/7",

  // Geo van de standplaats (Den Bosch). Voor LocalBusiness-schema.
  geo: { lat: 51.6904, lon: 5.2935 },

  // Optioneel: foto van Rens op /over (bv. "/img/rens-aan-het-werk.jpg"). Leeg = nette placeholder.
  overFoto: "/img/rens-aan-het-werk.jpg",
} as const;

/** Kant-en-klare tel: link */
export const telHref = `tel:+${SITE.telefoonE164}`;

/** WhatsApp-link met optioneel vooringevuld bericht */
export function waHref(bericht = "Hoi Rens, ik heb een vraag over mijn dak."): string {
  return `https://wa.me/${SITE.telefoonE164}?text=${encodeURIComponent(bericht)}`;
}

/** Hoofd-navigatie */
export const NAV = [
  { label: "Diensten", href: "/diensten" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Kennisbank", href: "/kennisbank" },
  { label: "Over Rens", href: "/over" },
  { label: "Contact", href: "/contact" },
] as const;
