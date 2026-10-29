/**
 * Centrale prijzen: DE enige plek waar prijzen staan.
 * Wordt gebruikt door /prijzen, /dak-apk, de homepage, de diensten en de kennisbank, zodat de site
 * zichzelf nooit tegenspreekt. Prijs wijzigen? Alleen hier.
 *
 * Stand 29-10-2026 (quiz-plan.md, besproken met Rens 28-10): alles INCLUSIEF btw, alleen kleine "vanaf"-bedragen.
 * Groter werk, goot vervangen, nokvorsten vervangen en loodwerk: geen bedrag, "stuur een foto".
 * Van de site af: schoorsteen vegen, ontmossen, zonnepanelen, dakisolatie, dakkapel poetsen (doet Rens niet).
 */

export interface PrijsRij {
  /** vaste sleutel om de prijs in teksten op te zoeken (prijsVan / inclBtw) */
  sleutel: string;
  dienst: string;
  prijs: string;
  uitleg: string;
  /** ook tonen in de compacte tabel op /dak-apk */
  opDakApk?: boolean;
  /** true = geen bedrag: "stuur een foto" voorop */
  fotoEerst?: boolean;
  /** optioneel: dienstpagina bij deze rij */
  href?: string;
}

export const FOTO_PRIJS = "stuur een foto";

export const PRIJZEN: PrijsRij[] = [
  { sleutel: "goot_reinigen", dienst: "Dakgoot reinigen", prijs: "vanaf €99", uitleg: "Eén goot, bijvoorbeeld alleen de voorgoot. Beide goten of een groter huis: je hoort de prijs vooraf.", opDakApk: true, href: "/diensten/goten-reinigen/" },
  { sleutel: "dakpan", dienst: "Dakpan vervangen", prijs: "vanaf €150", uitleg: "Een paar losse pannen, of een nokvorst weer vastzetten. Meer pannen of verder rijden: dan wordt het meer.", opDakApk: true, href: "/diensten/dakpannen-vervangen/" },
  { sleutel: "goot_plakken", dienst: "Dakgoot plakken (lek dichtzetten)", prijs: "vanaf €275", uitleg: "Een lek in de goot dichtzetten, bijvoorbeeld bij een naad of een hoek.", opDakApk: true, href: "/diensten/dakgoot-vervangen/" },
  { sleutel: "goot_solderen", dienst: "Dakgoot solderen", prijs: "vanaf €375", uitleg: "Een lekke naad in een zinken goot opnieuw solderen.", href: "/diensten/dakgoot-vervangen/" },
  { sleutel: "regenpijp", dienst: "Regenpijp vervangen", prijs: "vanaf €425", uitleg: "Kunststof regenpijp vervangen. Zink vanaf €525.", href: "/diensten/regenpijp-vervangen/" },
  { sleutel: "daklekkage", dienst: "Daklekkage opsporen en repareren", prijs: "vanaf €450", uitleg: "Zoeken waar het water binnenkomt en het lek dichtmaken.", opDakApk: true, href: "/diensten/daklekkage/" },
  { sleutel: "platdak", dienst: "Klein plat dak repareren", prijs: "vanaf €450", uitleg: "Een lek in een plat dak van een aanbouw, garage of berging.", opDakApk: true, href: "/diensten/platte-daken/" },
  { sleutel: "nok_repareren", dienst: "Nokvorsten repareren", prijs: "vanaf €550", uitleg: "De nokvorsten opnieuw aansmeren met dakmortel.", opDakApk: true, href: "/diensten/nokvorsten-vervangen/" },
  { sleutel: "goot_coaten", dienst: "Dakgoot coaten", prijs: "vanaf €550", uitleg: "De binnenkant van een goot die nog goed is opnieuw waterdicht maken.", href: "/diensten/dakgoot-vervangen/" },
  { sleutel: "goot_vervangen", dienst: "Dakgoot vervangen", prijs: FOTO_PRIJS, uitleg: "Stuur een foto van de goot, dan hoor je wat het kost.", fotoEerst: true, href: "/diensten/dakgoot-vervangen/" },
  { sleutel: "nok_vervangen", dienst: "Nokvorsten vervangen", prijs: FOTO_PRIJS, uitleg: "Stuur een foto van de nok, dan hoor je wat het kost.", fotoEerst: true, href: "/diensten/nokvorsten-vervangen/" },
  { sleutel: "lood", dienst: "Loodwerk (schoorsteen, muur, dakraam)", prijs: FOTO_PRIJS, uitleg: "Stuur een foto van het lood, dan hoor je wat het kost.", fotoEerst: true, href: "/diensten/lood-vervangen/" },
  { sleutel: "groot", dienst: "Groter werk (hele dakbedekking, dakrenovatie)", prijs: FOTO_PRIJS, uitleg: "Stuur een foto, dan hoor je wat het ongeveer kost. Voor grotere klussen plannen we een paar weken vooruit.", fotoEerst: true, href: "/diensten/dakrenovatie/" },
  { sleutel: "spoed", dienst: "Spoed 's avonds, 's nachts of in het weekend", prijs: "toeslag, prijs vooraf", uitleg: "Dag en nacht bereikbaar. Je hoort de vaste prijs voordat ik kom, ook midden in de nacht.", href: "/spoed/" },
  { sleutel: "apk", dienst: "Dak-APK (keuring + fotorapport)", prijs: "€49", uitleg: "Compleet keuringsrapport binnen een dagdeel. Zie de Dak-APK-pagina.", href: "/dak-apk/" },
];

/** Prijs van een rij, bijvoorbeeld prijsVan("daklekkage") = "vanaf €450" */
export function prijsVan(sleutel: string): string {
  const r = PRIJZEN.find((x) => x.sleutel === sleutel);
  if (!r) throw new Error(`Onbekende prijs-sleutel: ${sleutel}`);
  return r.prijs;
}

/** Prijs met "incl. btw" erachter, voor in lopende tekst: "vanaf €450 incl. btw" */
export const inclBtw = (sleutel: string) => `${prijsVan(sleutel)} incl. btw`;

/** Vaste zin onder elke prijstabel of elk prijsblok */
export const BTW_REGEL = "Alle bedragen zijn inclusief btw en vanaf-prijzen: je hoort de vaste prijs voordat ik begin.";

/** Compacte selectie voor de vervolgklussen-tabel op /dak-apk */
export const PRIJZEN_DAK_APK = PRIJZEN.filter((r) => r.opDakApk);
