/**
 * Landingspagina's voor betaalde advertenties (Meta en Google), 27-10-2026.
 * Eén klus per pagina, op /ads/<slug>/. De pagina's zijn noindex, staan niet in de sitemap en niet in het menu.
 * De kop herhaalt wat de advertentie belooft (zie ~/Downloads/claude new/meta-ads/ads.json).
 *
 * Spelregels (Rens):
 * - geen prijzen op deze pagina's (die worden nog bepaald)
 * - geen plaatsnamen als "dakdekker uit Den Bosch" (de plaats zit in de targeting van de advertentie)
 * - geen absolute beloftes (geen woorden die alles beloven, geen "binnen 30 minuten"); wel: "vrijblijvende prijsindicatie binnen 24 uur, vaak dezelfde dag"
 * - Rens doet geen branderwerk, geen voegwerk, geen coaten en geen hele dakkapellen
 * - geen lange streepjes in de tekst
 */

export type AdPagina = {
  slug: string;
  /** welke advertenties uit ads.json hier op landen */
  advertenties: string[];
  /** korte naam voor de titel van het tabblad */
  titel: string;
  /** regel boven de kop */
  kicker: string;
  /** de kop: herhaalt de advertentie */
  kop: string;
  /** één of twee zinnen onder de kop */
  sub: string;
  /** de 3 vinkjes in de hero */
  vinkjes: [string, string, string];
  /** tekst van de WhatsApp-knop en het vooringevulde bericht */
  waKnop: string;
  waBericht: string;
  /** waarde van het veld "service" in de aanvraag (komt zo in het klantenboek) */
  service: string;
  /** voorbeeldtekst in het vak "Wat is er aan de hand?" */
  voorbeeld: string;
  /** blok "Wat ik doe" */
  doeKop: string;
  doe: string[];
  /** eerlijk: wat Rens hier niet doet (leeg = geen regel) */
  nietDoe?: string;
  /** welke echte foto's (soort uit src/data/fotos.ts) */
  fotoSoort: string;
  fotoTitel: string;
  /** korte vragen onderaan */
  vragen: { v: string; a: string }[];
};

export const AD_PAGINAS: AdPagina[] = [
  {
    slug: "daklekkage",
    advertenties: ["L1"],
    titel: "Vlek op het plafond?",
    kicker: "Lekkage of vochtplek",
    kop: "Vlek op het plafond?",
    sub: "Een vochtplek bovenin hoeft niet van het dak te komen. Het kan ook condens zijn of een leiding. Stuur een foto, ik denk mee. Is het wel het dak, dan hoor je vooraf wat het kost.",
    vinkjes: ["Vrijblijvende prijsindicatie binnen 24 uur, vaak dezelfde dag", "Vooraf een vaste prijs, geen uurtje-factuurtje", "1 jaar garantie op reparatie, 2 jaar op vervangen"],
    waKnop: "WhatsApp een foto",
    waBericht: "Hallo Rens, ik heb een vochtplek binnen. Ik stuur zo een foto mee.",
    service: "Daklekkage / spoed",
    voorbeeld: "Bijvoorbeeld: vlek op het plafond van de slaapkamer, alleen bij harde regen",
    doeKop: "Wat ik doe bij een lekkage",
    doe: [
      "Ik zoek waar het water echt binnenkomt. Dat is zelden recht boven de natte plek.",
      "Kapotte of verschoven pan, los lood, kier bij de nok of een lekke goot: ik maak het dicht.",
      "Je hoort vooraf wat het kost en wat ik ga doen. Daarna pas aan de slag.",
      "Is het condens of een leiding? Dan zeg ik dat eerlijk, dan heb je geen dakdekker nodig.",
    ],
    nietDoe: "Een plat dak met de brander, voegwerk, coaten of een hele dakkapel doe ik niet. Dat zeg ik meteen, dan weet je waar je aan toe bent.",
    fotoSoort: "pannen",
    fotoTitel: "Zo klein kan de oorzaak zijn",
    vragen: [
      { v: "Lekt het nu? Wat kan ik zelf doen?", a: "Zet een emmer onder de druppel, leg een handdoek neer en schuif meubels opzij. Ga niet zelf het dak op, zeker niet als het nat is. Bel of app, dan hoor je meteen wat je nog meer kunt doen." },
      { v: "Is de natte plek binnen ook de plek van het lek?", a: "Zelden. Water loopt langs balken en folie en komt vaak een stuk verderop naar binnen. Daarom kijk ik op het dak zelf waar het vandaan komt." },
      { v: "Lekt het alleen bij harde wind?", a: "Dan zit het meestal in een losse pan, een nokvorst of lood dat omhoog krult. Bij een gewone bui blijft het dan droog. Vertel erbij wanneer het lekt, dat helpt bij het zoeken." },
    ],
  },
  {
    slug: "dakgoot",
    advertenties: ["G2", "G1"],
    titel: "Loopt je goot over?",
    kicker: "Dakgoot",
    kop: "Loopt je goot over?",
    sub: "Loopt het water bij een bui over de rand? Dan zit de goot vol. De muur wordt nat en het hout achter de goot gaat rotten. Ik maak hem schoon en kijk meteen of hij nog goed afloopt.",
    vinkjes: ["Kleine klus? Je betaalt als het klaar is, via iDEAL", "Vooraf een vaste prijs", "Verzekerd en ingeschreven bij de KvK"],
    waKnop: "WhatsApp Rens",
    waBericht: "Hallo Rens, mijn dakgoot loopt over. Ik stuur zo een foto mee.",
    service: "Dakgoot",
    voorbeeld: "Bijvoorbeeld: goot aan de achterkant loopt over, er groeit gras in",
    doeKop: "Wat ik doe aan je goot",
    doe: [
      "Goot leegscheppen en de afvoer weer vrij maken, zonder rommel op je terras of in de tuin.",
      "Kijken of de goot nog goed afloopt en of de regenpijp het water kwijt kan.",
      "Lekke naad, losse beugel of een kapot stuk goot: repareren waar dat kan, vervangen als het moet.",
      "Vogelwering of bladvanger erbij als je dat wilt, dan blijft hij langer schoon.",
    ],
    fotoSoort: "goot",
    fotoTitel: "Goten uit mijn werk",
    vragen: [
      { v: "Hoe vaak moet een goot schoon?", a: "Meestal één keer per jaar, na de bladval in het najaar. Staan er veel bomen bij je huis, dan vaker." },
      { v: "Kan de goot nog gerepareerd worden of moet hij nieuw?", a: "Dat zie ik pas goed als ik erbij ben. Een lekke naad of losse beugel is vaak zo gemaakt. Is het zink of kunststof op, dan hoor je dat eerlijk, met een vaste prijs voor beide opties." },
      { v: "Moet ik thuis zijn?", a: "Niet per se. Als ik met de ladder bij de goot kan, kan ik het werk doen terwijl jij weg bent. We spreken vooraf af wat er gebeurt." },
    ],
  },
  {
    slug: "dakpannen",
    advertenties: ["K2", "K1"],
    titel: "Eén kapotte pan? Daar kom ik ook voor",
    kicker: "Dakpannen",
    kop: "Eén kapotte pan? Daar kom ik ook voor",
    sub: "Je hoeft geen heel nieuw dak nodig te hebben. Een losse pan, een verschoven pan of een stukje lood: ook kleine klussen doe ik gewoon. Laat het maken zolang het nog één pan is.",
    vinkjes: ["Kleine klus? Je betaalt als het klaar is, via iDEAL", "Vooraf een vaste prijs", "1 jaar garantie op reparatie, 2 jaar op vervangen"],
    waKnop: "WhatsApp een foto",
    waBericht: "Hallo Rens, er ligt een kapotte of losse pan op mijn dak. Ik stuur zo een foto mee.",
    service: "Dakpannen",
    voorbeeld: "Bijvoorbeeld: één pan ligt scheef, rechts naast het dakraam",
    doeKop: "Wat ik doe aan je pannen",
    doe: [
      "Kapotte of verschoven pannen vervangen of rechtleggen, ook als het er maar één is.",
      "Ik kijk meteen de rest van het dak na: nok, lood en goot. Zie ik iets, dan hoor je het.",
      "Pannen die na storm los liggen weer vastzetten.",
      "Meer pannen kapot? Dan hoor je vooraf één vaste prijs voor het hele stuk.",
    ],
    fotoSoort: "pannen",
    fotoTitel: "Pannen uit mijn werk",
    vragen: [
      { v: "Is één kapotte pan echt erg?", a: "Ja, want daar komt het water onder de pannen en op het dakbeschot. Je merkt dat pas als er binnen een vlek zit. Eén pan vervangen is een kleine klus, de schade erachter niet." },
      { v: "Heb je dezelfde pan wel?", a: "Meestal wel. Stuur een foto van je dak, dan zie ik welk type het is. Oude of zeldzame pannen zoek ik na, dat kan soms wat langer duren." },
      { v: "Kan ik het zelf doen?", a: "Vanaf een ladder bij een pan onderaan het dak kan het soms. Hoger op het dak is het gevaarlijk werk. Ik werk met een dakladder die over de nok hangt." },
    ],
  },
  {
    slug: "nokvorsten",
    advertenties: ["N2", "N1"],
    titel: "Nokvorsten los?",
    kicker: "Nokvorsten",
    kop: "Nokvorsten los?",
    sub: "Veel dakproblemen beginnen bij de nok. Losse of scheve vorsten laten wind en water onder de pannen komen. Zie je vanaf de straat een scheve vorst of brokkelige specie? Laat het vastzetten zolang het nog klein is.",
    vinkjes: ["Vooraf een vaste prijs", "1 jaar garantie op reparatie, 2 jaar op vervangen", "Verzekerd en ingeschreven bij de KvK"],
    waKnop: "WhatsApp een foto",
    waBericht: "Hallo Rens, de nokvorsten van mijn dak zitten los of scheef. Ik stuur zo een foto mee.",
    service: "Nokvorsten",
    voorbeeld: "Bijvoorbeeld: twee vorsten liggen scheef, er valt specie naar beneden",
    doeKop: "Wat ik doe aan je nok",
    doe: [
      "Losse nokvorsten opnieuw vastzetten, zodat wind en water er niet meer onder kunnen.",
      "Kapotte of gescheurde vorsten vervangen door passende nieuwe.",
      "Oude, brokkelige specie weghalen en de nok netjes afwerken.",
      "Ik kijk meteen de bovenste rijen pannen na, daar zit vaak ook iets los.",
    ],
    fotoSoort: "pannen",
    fotoTitel: "Zo zie je het vanaf de straat",
    vragen: [
      { v: "Hoe zie ik of mijn nokvorsten los zitten?", a: "Kijk vanaf de straat naar de bovenste rand van je dak. Een vorst die scheef ligt, een kier tussen twee vorsten of specie die eruit valt: dan is het tijd. Stuur een foto, dan kijk ik mee." },
      { v: "Kan het wachten tot het voorjaar?", a: "Liever niet. Bij harde wind gaat een losse vorst het dak af en komt er water onder de pannen. Vastzetten is een kleine klus, de schade erna niet." },
      { v: "Doe je ook de hele nok opnieuw?", a: "Ja. Zijn de meeste vorsten los of is de specie overal op, dan hoor je vooraf één vaste prijs voor de hele nok." },
    ],
  },
  {
    slug: "schoorsteen",
    advertenties: ["S2", "S1"],
    titel: "Los lood bij de schoorsteen?",
    kicker: "Lood en schoorsteen",
    kop: "Los lood bij de schoorsteen?",
    sub: "Gescheurd of los lood rond de schoorsteen is een bekende oorzaak van een natte plek binnen. Kijk eens vanaf de straat: krult het lood omhoog of zit er een kier? Ik herstel het lood en kijk meteen of de rest nog goed zit.",
    vinkjes: ["Vooraf een vaste prijs", "1 jaar garantie op reparatie, 2 jaar op vervangen", "Verzekerd en ingeschreven bij de KvK"],
    waKnop: "WhatsApp een foto",
    waBericht: "Hallo Rens, het lood bij mijn schoorsteen zit los of is gescheurd. Ik stuur zo een foto mee.",
    service: "Schoorsteen / lood",
    voorbeeld: "Bijvoorbeeld: natte plek op zolder naast de schoorsteen, lood krult omhoog",
    doeKop: "Wat ik doe bij je schoorsteen",
    doe: [
      "Los, gescheurd of opgekruld lood opnieuw vastzetten of vervangen, zodat het water weer over de pannen loopt.",
      "Ik kijk meteen naar de pannen rondom en de kap bovenop, daar zit vaak ook iets.",
      "Schoorsteen vegen kan ik in dezelfde afspraak meenemen.",
      "Zie ik dat de schoorsteen zelf (de stenen of de voegen) slecht is, dan zeg ik dat eerlijk.",
    ],
    nietDoe: "Voegwerk opnieuw doen of de schoorsteen metselen doe ik niet. Ik herstel het lood en de aansluiting op het dak.",
    fotoSoort: "schoorsteen",
    fotoTitel: "Uit mijn werk",
    vragen: [
      { v: "Hoe weet ik of het het lood is?", a: "Een natte plek op zolder vlak naast de schoorsteen, of streepjes op de stenen onder het lood, wijzen meestal naar het lood. Stuur een foto van de schoorsteen vanaf de straat, dan kijk ik mee." },
      { v: "Gaat het lood er helemaal af?", a: "Niet per se. Een losse strook kan vaak opnieuw worden vastgezet. Is het lood op of gescheurd, dan komt er nieuw lood. Je hoort vooraf welke van de twee het wordt en wat het kost." },
      { v: "Kun je de schoorsteen ook vegen?", a: "Ja, dat neem ik in dezelfde afspraak mee als je dat wilt. Zeg het erbij in het formulier." },
    ],
  },
  {
    slug: "dak-apk",
    advertenties: ["D1", "Z2", "O1", "Z1", "R1"],
    titel: "Binnen 24 uur weten wat het kost",
    kicker: "Iets aan je dak? Of gewoon weten hoe het ervoor staat",
    kop: "Binnen 24 uur weten wat het kost",
    sub: "Iets aan je dak, je goot of je schoorsteen? Vertel kort wat er is. Je krijgt binnen 24 uur een vrijblijvende prijsindicatie, vaak dezelfde dag nog. Twijfel je wat er precies speelt? Dan loop ik met de Dak-APK je hele dak na, met foto's van elke risicoplek.",
    vinkjes: ["Vrijblijvende prijsindicatie binnen 24 uur, vaak dezelfde dag", "Vooraf een vaste prijs, geen verrassing achteraf", "1 jaar garantie op reparatie, 2 jaar op vervangen"],
    waKnop: "WhatsApp Rens",
    waBericht: "Hallo Rens, ik wil graag weten wat het kost om iets aan mijn dak te laten doen. Ik stuur zo een foto mee.",
    service: "Dak-APK / prijsindicatie",
    voorbeeld: "Bijvoorbeeld: ik wil weten of mijn dak nog goed is, het huis is van 1975",
    doeKop: "Wat de Dak-APK is",
    doe: [
      "Ik loop je hele dak na: pannen, nokvorsten, goot, lood, mos en plekken waar vocht kan komen.",
      "Je krijgt een rapport met foto's van elke risicoplek, in gewone taal. Ook als iets gewoon goed is.",
      "Moet er iets gebeuren? Dan hoor je vooraf een vaste prijs. Niks nodig? Dan hoor je dat ook.",
      "Weet je al wat er is? Dan hoef je geen keuring: stuur een foto en je krijgt een prijsindicatie.",
    ],
    nietDoe: "Branderwerk op platte daken, voegwerk, coaten en hele dakkapellen doe ik niet. Dat hoor je meteen, dan verlies je geen tijd.",
    fotoSoort: "pannen",
    fotoTitel: "Wat ik op een dak tegenkom",
    vragen: [
      { v: "Wat gebeurt er nadat ik het formulier heb ingevuld?", a: "Ik neem contact met je op, meestal dezelfde dag. Je hoort binnen 24 uur een vrijblijvende prijsindicatie. Wil je daarna verder, dan plannen we een dag." },
      { v: "Zit ik ergens aan vast?", a: "Nee. De prijsindicatie is vrijblijvend. Je beslist zelf of ik kom." },
      { v: "Wie komt er?", a: "Ik, Rens. Geen callcenter en geen doorverkopen. Ik kom kijken, doe het werk zelf en je hebt één aanspreekpunt." },
    ],
  },
];

/** Letterlijke Werkspot-reviews die al op de homepage staan (src/pages/index.astro). Niets nieuws verzonnen. */
export const AD_REVIEWS = [
  { tekst: "Dakgoten keurig netjes schoongemaakt zonder de rommel uit de goten op het terras of in de tuin te morsen. Aanrader!", wie: "Ard-Jan, Tiel · goten reinigen" },
  { tekst: "Snel en mooi dak geplaatst voor een hele nette prijs. Blij mee!", wie: "F. Spolders, Zoetermeer · dakreparatie" },
  { tekst: "Prima werk geleverd. Was flexibel in het plannen, dacht mee en kwam met oplossingen.", wie: "Roos, Oosterbeek · regenpijp vervangen" },
] as const;

export const getAdPagina = (slug: string) => AD_PAGINAS.find((p) => p.slug === slug);
