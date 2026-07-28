/**
 * Centrale richtprijzen — DE enige plek waar prijzen staan.
 * Wordt gebruikt door /prijzen, /dak-apk en de homepage, zodat de site
 * zichzelf nooit meer tegenspreekt. Prijs wijzigen? Alleen hier.
 */

export interface PrijsRij {
  dienst: string;
  prijs: string;
  uitleg: string;
  /** ook tonen in de compacte tabel op /dak-apk */
  opDakApk?: boolean;
}

export const PRIJZEN: PrijsRij[] = [
  { dienst: "Dakgoot reinigen", prijs: "€99 all-in", uitleg: "Rijtjeswoning, beide goten, afvoer doorgespoeld. Groter/hoger huis: vaste prijs vooraf.", opDakApk: true },
  { dienst: "Schoorsteen vegen", prijs: "€70", uitleg: "Hele schoorsteen, netjes en zonder roetzooi in huis." },
  { dienst: "Dakkapel poetsen", prijs: "vanaf €70", uitleg: "Reinigen plus controle van kit en aansluitingen." },
  { dienst: "Zonnepanelen reinigen", prijs: "vanaf €10 p/paneel", uitleg: "Streepvrij schoon voor maximale opbrengst." },
  { dienst: "Dak reinigen / ontmossen", prijs: "€8 – €15 p/m²", uitleg: "Afhankelijk van oppervlak en vervuiling. Vaste prijs vooraf.", opDakApk: true },
  { dienst: "Dak / pannen coaten", prijs: "vaste prijs na inspectie", uitleg: "Veel goedkoper dan vervangen — prijs na een Dak-APK of bezoek." },
  { dienst: "Nieuw dak / dakbedekking vervangen", prijs: "€50 – €170 p/m²", uitleg: "Bitumen €50–90 · EPDM €95–120 · pannendak €60–170 per m², materiaal + werk.", opDakApk: true },
  { dienst: "Kleine reparatie (losse pan, nokvorst)", prijs: "€100 – €250", uitleg: "Kort klusje, vaste prijs vooraf.", opDakApk: true },
  { dienst: "Daklekkage (punctueel)", prijs: "€200 – €500", uitleg: "Eén lek opsporen en dichten, incl. materiaal.", opDakApk: true },
  { dienst: "Dakisolatie (schuin dak of zoldervloer)", prijs: "vaste prijs na bezoek", uitleg: "Gratis opname, prijs vooraf. Vaak ISDE-subsidie mogelijk." },
  { dienst: "Spoed buiten kantooruren", prijs: "+20 – 30%", uitleg: "Toeslag voor 's avonds, weekend en feestdagen." },
  { dienst: "Dak-APK (keuring + fotorapport)", prijs: "€49", uitleg: "Compleet keuringsrapport binnen een dagdeel — zie de Dak-APK-pagina." },
];

/** Compacte selectie voor de vervolgklussen-tabel op /dak-apk */
export const PRIJZEN_DAK_APK = PRIJZEN.filter((r) => r.opDakApk);
