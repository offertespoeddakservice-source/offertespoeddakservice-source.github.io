/**
 * Diensten — sturen de /diensten/[slug] pagina's én de homepage-grid.
 * Volgorde = volgorde op de site. "goten-reinigen" staat bewust voorop (de opener).
 */

export interface Dienst {
  slug: string;
  titel: string;          // korte naam (nav / kaart)
  h1: string;             // pagina-H1 (met intentie)
  kort: string;           // 1 zin voor de homepage-kaart
  metaTitle: string;
  metaDescription: string;
  icoon: string;          // emoji als simpel icoon (later vervangbaar door SVG)
  vanafPrijs?: string;    // optionele prijsindicatie
  intro: string;          // openingsalinea op de dienstpagina
  punten: string[];       // bullets: wat je doet / waarom jij
  faq: { v: string; a: string }[];
}

export const DIENSTEN: Dienst[] = [
  {
    slug: "goten-reinigen",
    titel: "Goten reinigen",
    h1: "Dakgoot reinigen vanaf €25 — snel, netjes en met eerlijk advies",
    kort: "Verstopte of volle goten leeg, plus een gratis blik of er meer speelt.",
    metaTitle: "Dakgoot reinigen vanaf €25 | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Goten laten reinigen vanaf €25 in de regio Den Bosch. Snel langs, netjes werk en eerlijk advies over je dak. Bel of WhatsApp Rens.",
    icoon: "🪣",
    vanafPrijs: "vanaf €25",
    intro:
      "Volle of verstopte dakgoten zorgen voor overlopend water, vochtige muren en op den duur lekkage. Ik maak je goten leeg, controleer de afvoer en kijk meteen of er nog iets aan je dak speelt. Geen verrassingen: je weet vooraf wat het kost.",
    punten: [
      "Goten leeg, blad en mos eruit, afvoer doorgespoeld",
      "Meteen een eerlijke blik op pannen, lood en kitwerk",
      "Vaste prijs vooraf, vanaf €25 — geen voorrijkosten",
      "Werk netjes achtergelaten, troep mee",
    ],
    faq: [
      {
        v: "Wat kost goten reinigen?",
        a: "€25 per kant, €40 voor beide kanten bij een doorsnee rijtjeswoning. Bij een groter of hoger huis hoor je vooraf de vaste prijs — nooit achteraf verrassingen.",
      },
      {
        v: "Hoe vaak moet ik mijn goten laten reinigen?",
        a: "Eén keer per jaar is meestal genoeg, het beste in het najaar als het blad gevallen is. Staan er bomen vlakbij, dan soms twee keer.",
      },
    ],
  },
  {
    slug: "daklekkage",
    titel: "Daklekkage & spoed",
    h1: "Daklekkage verhelpen — vaak dezelfde dag langs in de regio Den Bosch",
    kort: "Lek opsporen zonder sloopwerk en snel dichten, ook bij spoed.",
    metaTitle: "Daklekkage repareren & spoed | Spoed Dak Service Den Bosch",
    metaDescription:
      "Daklekkage? Ik spoor het lek op zonder sloopwerk en repareer het snel — vaak nog dezelfde dag in de regio Den Bosch. Bel of WhatsApp direct.",
    icoon: "💧",
    intro:
      "Een lek wacht niet. Ik kom snel langs, spoor de oorzaak op (de natte plek zit zelden recht onder het echte lek) en dicht het vakkundig. Eerst de schade beperken, dan de oorzaak aanpakken — en je hoort eerlijk of het een reparatie is of dat er meer nodig is.",
    punten: [
      "Vaak dezelfde dag langs bij spoed in de regio",
      "Lek opsporen zonder onnodig sloopwerk",
      "Tijdelijk dichten kan direct, daarna nette reparatie",
      "Heldere foto's en uitleg van wat ik vind",
    ],
    faq: [
      {
        v: "Wat kost een daklekkage repareren?",
        a: "Een punctuele reparatie kost meestal €200 tot €500, inclusief materiaal. Bij spoed buiten kantooruren komt daar een toeslag bij. Je hoort het bedrag voordat ik begin.",
      },
      {
        v: "Kun je vandaag nog komen?",
        a: "Bij spoed in de regio Den Bosch lukt dat vaak. Bel of WhatsApp me, dan hoor je meteen wanneer ik kan.",
      },
    ],
  },
  {
    slug: "dakreparatie",
    titel: "Dakreparatie",
    h1: "Dakreparatie — pannen, lood en kitwerk vakkundig hersteld",
    kort: "Gebroken pannen, lood bij schoorsteen of dakraam, losse nokvorsten.",
    metaTitle: "Dakreparatie: dakpannen, lood & nokvorst | Spoed Dak Service",
    metaDescription:
      "Dakpannen vervangen, lood bij schoorsteen en dakraam herstellen, nokvorsten vastzetten. Vakkundige dakreparatie in de regio Den Bosch.",
    icoon: "🧰",
    intro:
      "Veel daklekkages beginnen klein: een gebroken pan, loslatend lood bij de schoorsteen of een losgewaaide nokvorst. Ik herstel het voordat het een groot probleem wordt — met materiaal dat bij je dak past.",
    punten: [
      "Gebroken of verschoven dakpannen vervangen",
      "Lood/loodslabben bij schoorsteen, dakkapel en dakraam",
      "Nokvorsten opnieuw vastzetten of vervangen",
      "Kitwerk en aansluitingen waterdicht maken",
    ],
    faq: [
      {
        v: "Wat kost het vervangen van een dakpan?",
        a: "Een paar losse pannen vervangen is vaak een kort klusje en valt onder het uurtarief (€35–€50). Je hoort vooraf een vaste prijs.",
      },
    ],
  },
  {
    slug: "platte-daken",
    titel: "Platte daken (EPDM)",
    h1: "Plat dak repareren of vervangen — EPDM en bitumen",
    kort: "Lekkage in plat dak opsporen en herstellen, of de hele bedekking vernieuwen.",
    metaTitle: "Plat dak repareren & EPDM | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Lekkage in een plat dak? EPDM- en bitumendaken repareren of vervangen in de regio Den Bosch. Eerlijke prijs en garantie op het werk.",
    icoon: "🏠",
    intro:
      "Platte daken lekken het vaakst bij naden en aansluitingen, en het water loopt vaak verderop naar binnen dan waar het lek zit. Ik spoor het op en herstel met EPDM of bitumen — of vervang de hele bedekking als dat verstandiger is.",
    punten: [
      "Lekkage in plat dak gericht opsporen",
      "EPDM- en bitumenreparaties",
      "Hele dakbedekking vervangen waar nodig",
      "Eerlijk advies: repareren of vervangen?",
    ],
    faq: [
      {
        v: "Repareren of het hele dak vervangen?",
        a: "Bij een enkel lek op een verder gezond dak is repareren prima. Is de bedekking op meerdere plekken versleten, dan is vervangen op termijn goedkoper. Ik vertel je eerlijk wat in jouw geval slim is.",
      },
    ],
  },
  {
    slug: "stormschade",
    titel: "Stormschade",
    h1: "Stormschade aan je dak — bel direct, ik beperk de schade",
    kort: "Weggewaaide pannen, losse delen of lekkage na storm? Snel actie.",
    metaTitle: "Stormschade dak — noodreparatie | Spoed Dak Service Den Bosch",
    metaDescription:
      "Stormschade aan je dak: weggewaaide pannen of lekkage? Ik kom snel langs voor noodreparatie in de regio Den Bosch en help met foto's voor de verzekering.",
    icoon: "🌬️",
    intro:
      "Na een storm telt elk uur. Losse of weggewaaide pannen en open plekken laten regen binnen. Ik beperk eerst de schade (afdekken/dichten) en herstel daarna netjes — en maak duidelijke foto's die je kunt gebruiken voor je verzekering.",
    punten: [
      "Snelle noodreparatie: eerst de schade stoppen",
      "Weggewaaide pannen en nokvorsten herstellen",
      "Foto's en omschrijving voor je verzekeraar",
      "Daarna nette, blijvende reparatie",
    ],
    faq: [
      {
        v: "Vergoedt mijn verzekering stormschade?",
        a: "Storm- en hagelschade valt vaak onder je opstalverzekering. Ik lever duidelijke foto's en een omschrijving aan zodat je het kunt indienen.",
      },
    ],
  },
  {
    slug: "dakgoot-vervangen",
    titel: "Dakgoot vervangen",
    h1: "Dakgoot vervangen — bij roest, scheuren of een goot die blijft overlopen",
    kort: "Versleten of lekkende goot? Nieuwe zinken, kunststof of pvc goot, netjes gemonteerd.",
    metaTitle: "Dakgoot vervangen | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Lekkende of roestige dakgoot vervangen in de regio Den Bosch. Zink, kunststof of pvc, inclusief afvoer. Vaste prijs vooraf, geen voorrijkosten. Bel of WhatsApp Rens.",
    icoon: "🛠",
    intro:
      "Een goot die roest, op de naden lekt of blijft overlopen krijg je met reinigen niet meer dicht. Dan vervang ik 'm — in zink, kunststof of pvc, passend bij je huis — zodat je gevel en fundering droog blijven.",
    punten: [
      "Oude, roestige of lekkende goten vervangen",
      "Zink, kunststof of pvc — wat bij je dak past",
      "Inclusief beugels en hemelwaterafvoer",
      "Vaste prijs vooraf, troep gaat mee",
    ],
    faq: [
      { v: "Reinigen of vervangen?", a: "Zit er alleen blad in, dan volstaat reinigen. Is de goot doorgeroest of lek op de naden, dan is vervangen op termijn goedkoper. Ik zeg eerlijk wat in jouw geval slim is." },
    ],
  },
  {
    slug: "dakcoating",
    titel: "Dak coaten",
    h1: "Dak coaten — bescherm je pannen en goten, veel goedkoper dan vervangen",
    kort: "Coating beschermt pannen en goten die nog goed zijn tegen mos, vuil en slijtage.",
    metaTitle: "Dak coaten & dakcoating | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Dakpannen of dakgoot coaten in de regio Den Bosch — beschermt wat nog goed is en is veel goedkoper dan vervangen. Vaste prijs vooraf. Bel of WhatsApp Rens.",
    icoon: "🛡",
    intro:
      "Zijn je pannen of goot nog goed maar verweerd? Dan hoef je ze niet te vervangen. Een coating beschermt tegen mos, vuil en slijtage en geeft je dak jaren extra — voor een fractie van de prijs van vervangen.",
    punten: [
      "Eerst reinigen, dan coaten — netjes en grondig",
      "Voor pannen die nog goed zijn (geen poreuze/versleten)",
      "Veel goedkoper dan vervangen",
      "Eerlijk advies: coaten of toch vervangen?",
    ],
    faq: [
      { v: "Wanneer is coaten zinvol?", a: "Als je pannen of goot nog stevig zijn maar verweerd. Zijn ze poreus of versleten, dan is coaten zonde — dan adviseer ik vervangen. Ik kom kijken en zeg het eerlijk." },
    ],
  },
  {
    slug: "dak-reinigen",
    titel: "Dak reinigen",
    h1: "Dak reinigen — mos, vuil en groene aanslag eraf",
    kort: "Mos en aanslag verwijderen zodat je dak weer ademt en langer meegaat.",
    metaTitle: "Dak reinigen & mos verwijderen | Spoed Dak Service Den Bosch",
    metaDescription:
      "Dak laten reinigen in de regio Den Bosch: mos, vuil en groene aanslag eraf. Voorkomt verstopping en schade. Vaste prijs vooraf. Bel of WhatsApp Rens.",
    icoon: "🧽",
    intro:
      "Mos en aanslag houden vocht vast, verstoppen je goten en tasten op den duur de pannen aan. Ik maak je dak weer schoon en kijk meteen of er pannen los of beschadigd zijn — vaak een mooi moment om er ook een coating overheen te doen.",
    punten: [
      "Mos, vuil en groene aanslag verwijderen",
      "Goten meteen mee schoon",
      "Controle op losse of kapotte pannen",
      "Optioneel: coating erna voor langdurige bescherming",
    ],
    faq: [
      { v: "Gaat dat niet met een hogedrukspuit kapot?", a: "Op kwetsbare pannen werk ik voorzichtig en op de juiste druk, zodat de toplaag heel blijft. Daar zit 'm juist het vakwerk in." },
    ],
  },
  {
    slug: "dakpannen-vervangen",
    titel: "Dakpannen vervangen",
    h1: "Dakpannen vervangen of recht leggen — voorkom lekkage",
    kort: "Gebroken, verschoven of versleten pannen vervangen of opnieuw recht leggen.",
    metaTitle: "Dakpannen vervangen | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Gebroken of verschoven dakpannen vervangen en recht leggen in de regio Den Bosch. Voorkomt lekkage en tocht. Vaste prijs vooraf. Bel of WhatsApp Rens.",
    icoon: "🧱",
    intro:
      "Losse of kapotte pannen zijn de meest voorkomende oorzaak van lekkage. Ik vervang gebroken pannen, leg verschoven pannen recht en zorg dat alles weer waterdicht ligt — voordat het een groot probleem wordt.",
    punten: [
      "Gebroken of poreuze pannen vervangen",
      "Verschoven pannen recht leggen",
      "Passende pannen, ook bij oudere daken",
      "Meteen een blik op nok, lood en goten",
    ],
    faq: [
      { v: "Heb je mijn type pan nog?", a: "Voor de meeste daken vind ik passende pannen, ook bij oudere of bijzondere modellen. Lukt het echt niet, dan kijken we samen naar de beste oplossing." },
    ],
  },
  {
    slug: "schoorsteen-vegen",
    titel: "Schoorsteen vegen",
    h1: "Schoorsteen vegen — veilig, netjes en zonder roetzooi",
    kort: "De hele schoorsteen geveegd, plus een blik op het lood en de aansluiting.",
    metaTitle: "Schoorsteen vegen | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Schoorsteen laten vegen in de regio Den Bosch — veilig, netjes en zonder roetzooi in huis. Meteen controle op lood en aansluiting. Bel of WhatsApp Rens.",
    icoon: "🧹",
    intro:
      "Een schone schoorsteen is veiliger (minder kans op schoorsteenbrand) en trekt beter. Ik veeg de hele schoorsteen, netjes en zonder roet in huis, en kijk meteen of het lood en de aansluiting nog goed zijn — dat is vaak een lekbron.",
    punten: [
      "Hele schoorsteen geveegd, netjes afgedekt binnen",
      "Veiliger: minder kans op schoorsteenbrand",
      "Controle op lood en aansluiting (lekbron)",
      "Vaste prijs vooraf",
    ],
    faq: [
      { v: "Hoe vaak moet de schoorsteen geveegd?", a: "Bij regelmatig stoken één keer per jaar, het beste vóór het stookseizoen. Zo voorkom je schoorsteenbrand en houd je een goede trek." },
    ],
  },
  {
    slug: "dakkapel-reinigen",
    titel: "Dakkapel poetsen",
    h1: "Dakkapel poetsen en onderhouden — weer fris en waterdicht",
    kort: "Dakkapel reinigen, kitwerk en aansluitingen nakijken zodat 'ie niet gaat lekken.",
    metaTitle: "Dakkapel poetsen & onderhoud | Spoed Dak Service Den Bosch",
    metaDescription:
      "Dakkapel laten poetsen en onderhouden in de regio Den Bosch. Reinigen plus controle van kit en aansluitingen tegen lekkage. Vaste prijs vooraf. Bel Rens.",
    icoon: "🏠",
    intro:
      "Een dakkapel wordt snel groen en grauw, en juist bij de aansluitingen en het kitwerk begint lekkage. Ik poets 'm weer fris en controleer meteen de naden en het lood zodat 'ie waterdicht blijft.",
    punten: [
      "Dakkapel reinigen — weer fris",
      "Kitwerk en aansluitingen nakijken",
      "Lood en zijwangen controleren",
      "Klein onderhoud voorkomt dure lekkage",
    ],
    faq: [
      { v: "Doe je ook dakkapellen plaatsen?", a: "Ik richt me op poetsen, onderhoud en lekkage van bestaande dakkapellen. Wil je een nieuwe laten plaatsen, dan denk ik mee over wie je daarvoor het beste kunt hebben." },
    ],
  },
  {
    slug: "zonnepanelen-reinigen",
    titel: "Zonnepanelen reinigen",
    h1: "Zonnepanelen reinigen — meer opbrengst uit je panelen",
    kort: "Vuile panelen leveren minder op. Ik maak ze veilig en streepvrij schoon.",
    metaTitle: "Zonnepanelen reinigen | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Zonnepanelen laten reinigen in de regio Den Bosch voor maximale opbrengst. Veilig vanaf het dak, streepvrij schoon. Vaste prijs vooraf. Bel of WhatsApp Rens.",
    icoon: "🔆",
    intro:
      "Stof, mos en vogelpoep op je panelen kosten zo enkele procenten opbrengst per jaar. Omdat ik toch op het dak sta, maak ik ze veilig en streepvrij schoon — en kijk meteen of de bevestiging en de pannen eronder nog goed zijn.",
    punten: [
      "Veilig vanaf het dak, geen krassen",
      "Streepvrij schoon = meer opbrengst",
      "Controle op bevestiging en vogelnesten eronder",
      "Vaak te combineren met goten reinigen",
    ],
    faq: [
      { v: "Hoe vaak is reinigen nodig?", a: "Eens per 1–2 jaar is meestal genoeg, vaker als er veel bomen of vogels in de buurt zijn. Dan haal je het meeste uit je panelen." },
    ],
  },
  {
    slug: "vogelwering",
    titel: "Vogelwering",
    h1: "Vogelwering — geen vogels meer onder je pannen of zonnepanelen",
    kort: "Nette vogelwering tegen schade aan panlatten, isolatie en kabels.",
    metaTitle: "Vogelwering dak & zonnepanelen | Spoed Dak Service Den Bosch",
    metaDescription:
      "Vogelwering plaatsen onder dakpannen en zonnepanelen in de regio Den Bosch. Voorkomt schade aan panlatten, isolatie en bekabeling. Vaste prijs vooraf. Bel Rens.",
    icoon: "🐦",
    intro:
      "Vogels (en hun nesten) onder je pannen of zonnepanelen beschadigen panlatten, isolatie en bekabeling, en geven overlast. Ik plaats nette vogelwering die het netjes en blijvend afsluit — zonder dat het lelijk wordt.",
    punten: [
      "Vogelwering onder dakpannen en zonnepanelen",
      "Voorkomt schade aan latten, isolatie en kabels",
      "Netjes weggewerkt, niet zichtbaar lelijk",
      "Bestaande nesten eerst veilig verwijderd",
    ],
    faq: [
      { v: "Werkt vogelwering blijvend?", a: "Ja — mits goed geplaatst sluit het de hele rij af zodat vogels er niet meer onder kunnen. Ik controleer de hele dakvoet, niet alleen de plek waar je ze ziet." },
    ],
  },
  {
    slug: "dakrenovatie",
    titel: "Dakrenovatie",
    h1: "Dakrenovatie — je dak weer jaren mee, zonder meteen een compleet nieuw dak",
    kort: "Versleten dak grondig opknappen: pannen, lood, nok en goten in één keer aangepakt.",
    metaTitle: "Dakrenovatie | Spoed Dak Service regio Den Bosch",
    metaDescription:
      "Dakrenovatie in de regio Den Bosch: pannen, lood, nok en goten in één keer aangepakt zodat je dak weer jaren meegaat. Eerlijk advies, vaste prijs vooraf. Bel Rens.",
    icoon: "🏚",
    intro:
      "Is onderhoud niet meer genoeg, maar een compleet nieuw dak overdreven? Dan knap ik je dak grondig op: versleten pannen vervangen, lood en nok herstellen, goten aanpakken — in één keer, zodat je dak er weer jaren tegen kan.",
    punten: [
      "Versleten pannen vervangen, goede pannen behouden of coaten",
      "Lood, nokvorsten en aansluitingen vernieuwen",
      "Goten meteen mee aangepakt",
      "Eerlijk advies: renoveren of (deels) vervangen",
    ],
    faq: [
      { v: "Renoveren of een heel nieuw dak?", a: "Vaak stelt een grondige renovatie een nieuw dak jaren uit tegen veel lagere kosten. Is de onderconstructie slecht, dan is vervangen verstandiger. Ik kom kijken en zeg eerlijk wat loont." },
    ],
  },
];

export const getDienst = (slug: string) => DIENSTEN.find((d) => d.slug === slug);
