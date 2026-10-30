/**
 * Diensten — sturen de /diensten/[slug] pagina's én de homepage-grid.
 * Volgorde = volgorde op de site. De Dak-APK (eigen pagina /dak-apk) is de opener;
 * goten-reinigen is een gewone upsell-klus (marktprijs €75-225, Fase 3-prijstabel).
 */

import { PRIJZEN } from "./prijzen";

const GOTEN_PRIJS = PRIJZEN.find((r) => r.dienst === "Dakgoot reinigen")?.prijs ?? "";
const VEEG_PRIJS = PRIJZEN.find((r) => r.dienst === "Schoorsteen vegen")?.prijs ?? "";
const DAKKAPEL_PRIJS = PRIJZEN.find((r) => r.dienst === "Dakkapel poetsen")?.prijs ?? "";
const ONTMOS_PRIJS = PRIJZEN.find((r) => r.dienst.startsWith("Dak reinigen"))?.prijs ?? "";
const LEK_PRIJS = PRIJZEN.find((r) => r.dienst.startsWith("Daklekkage"))?.prijs ?? "";
const KLEIN_PRIJS = PRIJZEN.find((r) => r.dienst.startsWith("Kleine reparatie"))?.prijs ?? "";
const ZON_PRIJS = PRIJZEN.find((r) => r.dienst === "Zonnepanelen reinigen")?.prijs ?? "";
const NIEUWDAK_PRIJS = PRIJZEN.find((r) => r.dienst.startsWith("Nieuw dak"))?.prijs ?? "";

export interface Dienst {
  slug: string;
  titel: string;          // korte naam (nav / kaart)
  h1: string;             // pagina-H1 (met intentie)
  kort: string;           // 1 zin voor de homepage-kaart
  metaTitle: string;
  metaDescription: string;
  icoon: string;          // emoji als simpel icoon (later vervangbaar door SVG)
  vanafPrijs?: string;    // optionele prijsindicatie
  afbeelding?: string;    // optioneel: pad naar foto in /public/img (bv. "/img/dak-coaten.jpg")
  verborgen?: boolean;    // true = dienst die ik niet doe: geen kaart, geen links, niet in Google
  intro: string;          // openingsalinea op de dienstpagina
  punten: string[];       // bullets: wat je doet / waarom jij
  faq: { v: string; a: string }[];
}

export const DIENSTEN: Dienst[] = [
  {
    slug: "goten-reinigen",
    titel: "Goten reinigen",
    h1: "Dakgoot schoonmaken: snel, netjes en met eerlijk advies",
    kort: "Verstopte of volle goten leeg, en ik meld het eerlijk als er meer speelt op je dak.",
    metaTitle: `Dakgoot schoonmaken: ${GOTEN_PRIJS} | Spoed Dak Service`,
    metaDescription:
      `Goten laten reinigen in de regio Den Bosch: ${GOTEN_PRIJS} voor een rijtjeswoning, vaste prijs vooraf. Snel langs, netjes werk en eerlijk advies over je dak. Bel of WhatsApp Rens.`,
    icoon: "🪣",
    vanafPrijs: GOTEN_PRIJS,
    intro:
      "Volle of verstopte dakgoten zorgen voor overlopend water, vochtige muren en op den duur lekkage. Ik maak je goten leeg, controleer de afvoer en kijk meteen of er nog iets aan je dak speelt. Geen verrassingen: je weet vooraf wat het kost.",
    punten: [
      "Goten leeg, blad en mos eruit, uitloop naar de regenpijp vrijgemaakt",
      "Meteen een eerlijke blik op pannen, lood en kitwerk",
      "Vaste prijs vooraf, geen verrassingen achteraf",
      "Werk netjes achtergelaten, troep mee",
    ],
    faq: [
      {
        v: "Wat kost goten reinigen?",
        a: `Voor een rijtjeswoning ${GOTEN_PRIJS}: beide goten leeg, uitloop naar de regenpijp vrijgemaakt, troep mee. Groter of hoger huis? Dan hoor je vooraf de vaste prijs, nooit achteraf verrassingen.`,
      },
      {
        v: "Hoe vaak moet ik mijn goten laten reinigen?",
        a: "Eén keer per jaar is meestal genoeg, het beste in het najaar als het blad gevallen is. Staan er bomen vlakbij, dan soms twee keer.",
      },
      {
        v: "Mijn regenpijp is verstopt, kijk je daar ook naar?",
        a: "Ja. Ik haal blad en vuil weg bij de uitloop van de goot naar de regenpijp en kijk of het water weer wegloopt. Zit de verstopping dieper in de pijp, dan zeg ik eerlijk wat er nodig is.",
      },
      {
        v: "Mijn dakgoot lekt, komt dat door verstopping?",
        a: "Vaak wel: een volle of verstopte goot loopt over langs de muur, wat op lekkage lijkt. Soms zit het in een naad of het zinkwerk. Bij het schoonmaken kijk ik meteen waar het 'm in zit en zeg ik eerlijk of er meer nodig is.",
      },
      {
        v: "Maak je ook de afvoer en bladvangers schoon?",
        a: "Bij dakgoot schoonmaken hoort de hele goot: blad en mos eruit, bladvangers gecontroleerd en de uitloop naar de regenpijp vrijgemaakt. Klaar is klaar.",
      },
    ],
  },
  {
    slug: "daklekkage",
    titel: "Daklekkage & spoed",
    vanafPrijs: LEK_PRIJS,
    h1: "Daklekkage verhelpen: vaak dezelfde dag langs in de regio Den Bosch",
    kort: "Lek opsporen zonder sloopwerk en snel dichten, ook bij spoed.",
    metaTitle: "Daklekkage repareren regio Den Bosch | Spoed Dak Service",
    metaDescription:
      "Daklekkage? Ik spoor het lek op zonder onnodig sloopwerk en dicht het, bij spoed vaak nog dezelfde dag in de regio Den Bosch. Bel of WhatsApp me.",
    icoon: "💧",
    intro:
      "Een lek wacht niet. Ik kom snel langs, spoor de oorzaak op (de natte plek zit zelden recht onder het echte lek) en dicht het vakkundig. Eerst de schade beperken, dan de oorzaak aanpakken, en je hoort eerlijk of het een reparatie is of dat er meer nodig is.",
    punten: [
      "Vaak dezelfde dag langs bij spoed in de regio",
      "Lek opsporen zonder onnodig sloopwerk",
      "Tijdelijk dichten kan direct, daarna nette reparatie",
      "Heldere foto's en uitleg van wat ik vind",
    ],
    faq: [
      {
        v: "Wat kost een daklekkage repareren?",
        a: `Een punctuele reparatie kost meestal ${LEK_PRIJS}, inclusief materiaal. Bij spoed buiten kantooruren komt daar een toeslag bij. Je hoort het bedrag voordat ik begin.`,
      },
      {
        v: "Kun je vandaag nog komen?",
        a: "Bij spoed in de regio Den Bosch lukt dat vaak. Bel of WhatsApp me, dan hoor je meteen wanneer ik kan.",
      },
      {
        v: "Hoe wordt een daklekkage opgespoord?",
        a: "Daklekkage opsporen doe ik van buiten naar binnen: ik volg de waterweg terug naar de échte oorzaak (vaak lood, een scheur of een verschoven pan), want de natte plek binnen ligt zelden recht onder het lek. Zo voorkom ik onnodig sloopwerk.",
      },
      {
        v: "Mijn platte dak lekt, kun je dat ook repareren?",
        a: "Ja, lekkage in een plat dak (bitumen of EPDM) spoor ik op en repareer ik gericht. Soms volstaat een gerichte reparatie, soms is een nieuwe baan of de hele bedekking beter, je hoort eerlijk wat verstandig is.",
      },
      {
        v: "Mijn dak lekt, wat moet ik nu eerst doen?",
        a: "Vang het water op, zet spullen droog en bel of WhatsApp me. Ik kan vaak snel langskomen om de lekkage eerst te stoppen; de nette reparatie volgt daarna.",
      },
      {
        v: "Mijn dak lekt alleen bij harde wind of een flinke bui, hoe kan dat?",
        a: "Dan komt het water binnen op een plek die bij gewone regen droog blijft. Harde wind blaast de regen onder een verschoven pan, langs de nok of achter het lood bij de schoorsteen of het dakraam. Ik kijk gericht op die plekken, ook als het op dat moment droog is.",
      },
      {
        v: "Betaalt de verzekering de reparatie van mijn dak?",
        a: "Dat hangt af van je polis en van de oorzaak. De schade binnen, zoals aan een plafond of een vloer, wordt vaak vergoed. De reparatie van het dak zelf niet altijd, zeker niet als het lek door slijtage komt. Maak foto's van de schade voordat je iets opruimt en bel je verzekeraar.",
      },
      {
        v: "Kun je het lek eerst tijdelijk dichtmaken?",
        a: "Ja. Lukt een nette reparatie niet meteen, bijvoorbeeld omdat het hard regent of omdat er materiaal besteld moet worden, dan dek ik het eerst tijdelijk af, zodat het binnen droog blijft. De echte reparatie volgt daarna, en ook daarvan hoor je vooraf de prijs.",
      },
      {
        v: "Het lekt ook als het droog is. Kan dat van het dak komen?",
        a: "Meestal niet. Druppelt het na een paar droge dagen nog steeds, dan komt het vaker van een leiding, de cv-ketel of de badkamer erboven. Zie je op zolder na een koude nacht druppels verspreid over de folie of het hout, dan is het vaak condens. En na een sneeuwbui kan er sneeuw op zolder liggen die later smelt, en dat lijkt ook op een lek. Stuur een foto van de plek en vertel wanneer het nat wordt, dan zeg ik eerlijk of het bij het dak hoort of bij een loodgieter.",
      },
      {
        v: "Ik woon in een rijtjeshuis. Kan het lek ook bij de buren zitten?",
        a: "Dat kan. Bij een rij huizen lopen het pannendak, de goot of een plat dak vaak gewoon door van het ene huis naar het andere, en een schoorsteen staat soms op de scheidingsmuur. Het water zoekt zijn eigen weg en komt dan bij jou binnen, terwijl het lek aan de kant van de buren zit. Daarom kijk ik ook naar het stuk dak naast het jouwe. Zit het aan hun kant, dan hoor je dat van me, en dan is het slim om het samen op te lossen.",
      },
    ],
  },
  {
    slug: "dakreparatie",
    titel: "Dakreparatie",
    vanafPrijs: KLEIN_PRIJS,
    h1: "Dakreparatie, ook met spoed: pannen, lood en nokvorsten hersteld",
    kort: "Gebroken pannen, lood bij schoorsteen of dakraam, losse nokvorsten.",
    metaTitle: "Spoed dakreparatie regio Den Bosch | Spoed Dak Service",
    metaDescription:
      "Losse pan, lood bij de schoorsteen of een nokvorst die los zit? Ik repareer het, bij spoed vaak nog dezelfde dag in de regio Den Bosch. Vaste prijs vooraf.",
    icoon: "🧰",
    intro:
      "Veel daklekkages beginnen klein: een gebroken pan, loslatend lood bij de schoorsteen of een losgewaaide nokvorst. Ik herstel het voordat het een groot probleem wordt, met materiaal dat bij je dak past.",
    punten: [
      "Gebroken of verschoven dakpannen vervangen",
      "Lood/loodslabben bij schoorsteen, dakkapel en dakraam",
      "Nokvorsten opnieuw vastzetten of vervangen",
      "Kitwerk en aansluitingen waterdicht maken",
    ],
    faq: [
      {
        v: "Wat kost het vervangen van een dakpan?",
        a: `Een paar losse pannen vervangen is vaak een kort klusje: reken ${KLEIN_PRIJS}. Je hoort vooraf de vaste prijs.`,
      },
      {
        v: "Kun je met spoed een dakreparatie doen?",
        a: "Ja. Lekt het of ligt er iets open, bijvoorbeeld na een storm, dan is het spoed. Bel of WhatsApp me met een foto, dan hoor je meteen wanneer ik kan. In de regio Den Bosch lukt dat vaak nog dezelfde dag. Eerst maak ik het dicht, daarna volgt de nette reparatie.",
      },
      {
        v: "Wat doe je bij een losse nokvorst?",
        a: "Ik kijk hoe de vorsten liggen en zet de losse weer goed vast. Kapotte vorsten vervang ik door passende. Is de specie over de hele nok op, dan zeg ik eerlijk dat het slimmer is om de hele nok in één keer te doen.",
      },
      {
        v: "Kun je het lood bij de schoorsteen of het dakraam repareren?",
        a: "Ja. Lood dat los zit zet ik weer goed vast, en gescheurd of versleten lood vervang ik. Dat is een van de plekken waar een dak het vaakst gaat lekken.",
      },
      {
        v: "Wanneer is repareren niet meer genoeg?",
        a: "Als er op veel plekken pannen kapot of poreus zijn, of als het dak op meerdere plekken lekt. Dan is blijven repareren duurder dan het dak in één keer goed aanpakken. Ik zeg eerlijk wat in jouw geval verstandig is.",
      },
    ],
  },
  {
    slug: "platte-daken",
    titel: "Platte daken (EPDM)",
    vanafPrijs: `lek vanaf ${LEK_PRIJS.split(" - ")[0]}`,
    h1: "Plat dak repareren of vervangen: EPDM en bitumen",
    kort: "Lekkage in plat dak opsporen en herstellen, of de hele bedekking vernieuwen.",
    metaTitle: "Lekkend plat dak repareren Den Bosch | Spoed Dak Service",
    metaDescription:
      "Lekkage in een plat dak? EPDM- en bitumendaken repareren of vervangen in de regio Den Bosch. Eerlijke prijs, 1 jaar garantie op reparatie en 2 jaar op vervangen.",
    icoon: "🏠",
    intro:
      "Platte daken lekken het vaakst bij naden en aansluitingen, en het water loopt vaak verderop naar binnen dan waar het lek zit. Ik spoor het op en herstel met EPDM of bitumen, of vervang de hele bedekking als dat verstandiger is.",
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
      { v: "EPDM of bitumen, wat is beter?", a: "Beide zijn prima. EPDM is één flexibel, naadloos vel; bitumen is vertrouwd en sterk. Ik adviseer wat bij jouw dak en budget past." },
      { v: "Mijn platte dak lekt, hoe snel kun je komen?", a: "Druppelt het binnen, dan is het spoed. Bel of WhatsApp me met een foto van de natte plek. In de regio Den Bosch lukt het vaak nog dezelfde dag." },
      { v: "Het lekt bij mijn uitbouw of garage, doe je dat ook?", a: "Ja. De meeste uitbouwen, garages en bergingen hebben een plat dak, en daar zie ik veel lekkage. Vaak zit het bij de aansluiting met de gevel, bij de daktrim aan de rand of bij de afvoer. Die plekken kijk ik als eerste na." },
      { v: "Wat kost het om een lek in een plat dak te repareren?", a: "Dat hangt af van waar het lek zit en hoeveel er beschadigd is. Een gerichte reparatie is meestal het goedkoopst. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de prijzenpagina." },
      { v: "Kun je dakleer op een schuur of tuinhuis repareren?", a: "Ja. Op veel schuren en tuinhuizen ligt dakleer, een dunne laag bitumen. Zit er één scheur of een losse naad in, dan is een gerichte reparatie vaak genoeg. Is het dakleer overal bros, staan er blazen in of lekt het op meer plekken, dan is een nieuwe laag slimmer. Stuur een foto, dan zeg ik eerlijk wat het wordt." },
    ],
  },
  {
    slug: "stormschade",
    titel: "Stormschade",
    vanafPrijs: "spoed, prijs vooraf",
    h1: "Stormschade aan je dak? Bel direct, ik beperk eerst de schade",
    kort: "Weggewaaide pannen, losse delen of lekkage na storm? Snel actie.",
    metaTitle: "Stormschade dak: noodreparatie Den Bosch | Spoed Dak Service",
    metaDescription:
      "Stormschade aan je dak: weggewaaide pannen of lekkage? Ik kom snel langs voor noodreparatie in de regio Den Bosch en help met foto's voor de verzekering.",
    icoon: "🌬️",
    intro:
      "Na een storm telt elk uur. Losse of weggewaaide pannen en open plekken laten regen binnen. Ik beperk eerst de schade (afdekken/dichten) en herstel daarna netjes, en maak duidelijke foto's die je kunt gebruiken voor je verzekering.",
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
      {
        v: "Er zijn dakpannen weggewaaid, kun je met spoed komen?",
        a: "Ja. Weggewaaide of verschoven dakpannen laten regen binnen, dus dat is spoed. Ik kom snel langs voor een noodreparatie: eerst dichten en afdekken, daarna netjes herstellen.",
      },
      {
        v: "Doe je ook noodreparatie 's avonds of in het weekend?",
        a: "Bij echte stormschade wel, open plekken kunnen niet wachten. Bel of WhatsApp 06 10 18 53 57, dan hoor je meteen wanneer ik kan.",
      },
      { v: "Wat kost een noodreparatie na een storm?", a: "Dat hangt af van de schade. Een paar pannen terugleggen is iets anders dan een open stuk dak afdekken. Je hoort vooraf wat het kost, voordat ik begin. Is het 's avonds, 's nachts of in het weekend, dan komt er een toeslag bij, en ook die hoor je vooraf." },
      { v: "Er ligt na de storm een stuk dakpan of specie in mijn tuin, is dat erg?", a: "Het betekent dat er iets los zit op je dak, vaak een pan of een nokvorst. Ook als het binnen nog droog is, kan de volgende bui of windstoot water binnenlaten of meer pannen lostrekken. Blijf uit de buurt van de plek waar het naar beneden kwam, maak vanaf de straat een foto van je dak en stuur die via WhatsApp." },
    ],
  },
  {
    slug: "dakgoot-vervangen",
    titel: "Dakgoot vervangen",
    vanafPrijs: "vaste prijs vooraf",
    h1: "Dakgoot repareren of vervangen: bij lekkende naden, roest of een goot die blijft overlopen",
    kort: "Versleten of lekkende goot? Nieuwe zinken, kunststof of pvc goot, netjes gemonteerd.",
    metaTitle: "Dakgoot repareren of vervangen Den Bosch | Spoed Dak Service",
    metaDescription:
      "Lekkende of roestige dakgoot repareren of vervangen in de regio Den Bosch. Zink, kunststof of pvc, inclusief afvoer. Vaste prijs vooraf, troep gaat mee.",
    icoon: "🛠",
    intro:
      "Een goot die roest, op de naden lekt of blijft overlopen krijg je met reinigen niet meer dicht. Dan vervang ik 'm, in zink, kunststof of pvc, passend bij je huis, zodat je gevel en fundering droog blijven.",
    punten: [
      "Oude, roestige of lekkende goten vervangen",
      "Zink, kunststof of pvc, wat bij je dak past",
      "Inclusief beugels en hemelwaterafvoer",
      "Vaste prijs vooraf, troep gaat mee",
    ],
    faq: [
      { v: "Reinigen of vervangen?", a: "Zit er alleen blad in, dan volstaat reinigen. Is de goot doorgeroest of lek op de naden, dan is vervangen op termijn goedkoper. Ik zeg eerlijk wat in jouw geval slim is." },
      { v: "Welk materiaal kies ik?", a: "Zink gaat het langst mee en oogt klassiek; kunststof/pvc is voordeliger en onderhoudsarm. Ik help je kiezen wat bij je huis past." },
      { v: "Kun je een lekkende dakgoot ook repareren in plaats van vervangen?", a: "Vaak wel. Een lekkende naad, een losse hoek, een losse beugel of een lekkende uitloop naar de regenpijp is meestal goed te herstellen. Is de goot op meerdere plekken lek of doorgeroest, dan zeg ik eerlijk dat vervangen slimmer is." },
      { v: "Mijn dakgoot lekt bij de regenpijp, wat is dat?", a: "Meestal zit de uitloop los, het stuk waar de goot overgaat in de regenpijp, of lekt de verbinding. Soms zit de uitloop gewoon vol blad. Ik kijk wat het is en maak het weer dicht." },
      { v: "Mijn goot hangt door, moet hij dan vervangen worden?", a: "Niet altijd. Vaak zit er een beugel los of is er een gebroken. Dan zet ik de goot weer goed op afschot, zodat het water naar de regenpijp loopt in plaats van over de rand." },
    ],
  },
  {
    slug: "dakcoating",
    verborgen: true,
    titel: "Dak coaten",
    vanafPrijs: "prijs na inspectie",
    h1: "Dak coaten: bescherm je pannen en goten, veel goedkoper dan vervangen",
    kort: "Coating beschermt pannen en goten die nog goed zijn tegen mos, vuil en slijtage.",
    metaTitle: "Dak coaten & dakcoating Den Bosch | Spoed Dak Service",
    metaDescription:
      "Dakpannen of dakgoot coaten in de regio Den Bosch: beschermt wat nog goed is en is veel goedkoper dan vervangen. Vaste prijs vooraf. Bel of WhatsApp Rens.",
    icoon: "🛡",
    intro:
      "Zijn je pannen of goot nog goed maar verweerd? Dan hoef je ze niet te vervangen. Een coating beschermt tegen mos, vuil en slijtage en geeft je dak jaren extra, voor een fractie van de prijs van vervangen.",
    punten: [
      "Eerst reinigen, dan coaten, netjes en grondig",
      "Voor pannen die nog goed zijn (geen poreuze/versleten)",
      "Veel goedkoper dan vervangen",
      "Eerlijk advies: coaten of toch vervangen?",
    ],
    faq: [
      { v: "Wanneer is coaten zinvol?", a: "Als je pannen of goot nog stevig zijn maar verweerd. Zijn ze poreus of versleten, dan is coaten zonde. Dan adviseer ik vervangen. Ik kom kijken en zeg het eerlijk." },
      { v: "Kun je ook de dakgoot coaten?", a: "Ja. Een goot die nog goed is maar verweerd kun je coaten tegen roest en slijtage, veel goedkoper dan vervangen." },
    ],
  },
  {
    slug: "dak-reinigen",
    titel: "Dak reinigen",
    h1: "Dak reinigen: mos, vuil en groene aanslag eraf",
    kort: "Mos en aanslag verwijderen zodat je dak weer ademt en langer meegaat.",
    metaTitle: "Dak reinigen & mos verwijderen Den Bosch | Spoed Dak Service",
    metaDescription:
      `Dak laten reinigen in de regio Den Bosch: mos, vuil en groene aanslag eraf voor ${ONTMOS_PRIJS}. Zo lopen je goten minder snel vol. Vaste prijs vooraf. Bel of WhatsApp Rens.`,
    icoon: "🧽",
    vanafPrijs: ONTMOS_PRIJS,
    intro:
      "Mos en aanslag houden vocht vast, verstoppen je goten en tasten op den duur de pannen aan. Ik maak je dak weer schoon en kijk meteen of er pannen los of beschadigd zijn.",
    punten: [
      "Mos, vuil en groene aanslag verwijderen",
      "Goten meteen mee schoon",
      "Controle op losse of kapotte pannen",
      "Netjes achtergelaten, troep mee",
    ],
    faq: [
      { v: "Gaat dat niet met een hogedrukspuit kapot?", a: "Op kwetsbare pannen werk ik voorzichtig en op de juiste druk, zodat de toplaag heel blijft. Daar zit 'm juist het vakwerk in." },
      { v: "Wat kost dak reinigen?", a: `Dak reinigen kost ${ONTMOS_PRIJS}, afhankelijk van hoe groot je dak is en hoe dik het mos erop zit. Je hoort vooraf de vaste prijs voor de hele klus. Stuur gerust een foto van je dak via WhatsApp, dan kan ik je vaak snel een prijs noemen.` },
      { v: "Neem je de goten meteen mee?", a: "Ja. Het mos dat loskomt, valt voor een groot deel in de goot. Daarom maak ik na het reinigen de goten en de uitloop naar de regenpijp meteen leeg, anders zit je goot bij de eerste flinke bui vol. Wat het samen kost, hoor je vooraf." },
    ],
  },
  {
    slug: "dakpannen-vervangen",
    titel: "Dakpannen vervangen",
    vanafPrijs: KLEIN_PRIJS,
    h1: "Dakpannen vervangen of recht leggen: voorkom lekkage",
    kort: "Gebroken, verschoven of versleten pannen vervangen of opnieuw recht leggen.",
    metaTitle: "Dakpannen vervangen Den Bosch | Spoed Dak Service",
    metaDescription:
      "Gebroken of verschoven dakpannen vervangen en recht leggen in de regio Den Bosch. Voorkomt lekkage en tocht. Vaste prijs vooraf. Bel of WhatsApp Rens.",
    icoon: "🧱",
    intro:
      "Losse of kapotte pannen zijn de meest voorkomende oorzaak van lekkage. Ik vervang gebroken pannen, leg verschoven pannen recht en zorg dat alles weer waterdicht ligt, voordat het een groot probleem wordt.",
    punten: [
      "Gebroken of poreuze pannen vervangen",
      "Verschoven pannen recht leggen",
      "Passende pannen, ook bij oudere daken",
      "Meteen een blik op nok, lood en goten",
    ],
    faq: [
      { v: "Heb je mijn type pan nog?", a: "Voor de meeste daken vind ik passende pannen, ook bij oudere of bijzondere modellen. Lukt het echt niet, dan kijken we samen naar de beste oplossing." },
      { v: "Er is een dakpan kapot of verschoven, is dat spoed?", a: "Lekt het al of zit er een gat in je dak, dan is het spoed: bel of WhatsApp me met een foto. Is het één verschoven pan en blijft het binnen droog, dan kan het meestal een paar dagen wachten. Wacht alleen niet tot de volgende storm, want dan waaien er vaak meer los." },
      { v: "Waarom verschuiven dakpannen?", a: "Door harde wind, door een losse of rotte panlat eronder, of doordat er iemand op het dak heeft gelopen, bijvoorbeeld bij het plaatsen van zonnepanelen of een antenne. Ik leg ze recht en kijk meteen of de oorzaak eronder zit." },
      { v: "Kan ik zelf een dakpan terugleggen?", a: "Liever niet. Op een schuin, nat dak ben je zo uitgegleden, en een pan die niet goed in de sluiting ligt, schuift bij de volgende bui weer. Stuur een foto, dan zeg ik wat er nodig is." },
    ],
  },
  {
    slug: "schoorsteen-vegen",
    titel: "Schoorsteen vegen",
    vanafPrijs: VEEG_PRIJS,
    h1: "Schoorsteen vegen: veilig, netjes en zonder roetzooi",
    kort: "De hele schoorsteen geveegd, plus een blik op het lood en de aansluiting.",
    metaTitle: "Schoorsteenveger Den Bosch en omgeving | Spoed Dak Service",
    metaDescription:
      `Schoorsteen laten vegen in de regio Den Bosch, ${VEEG_PRIJS}: veilig, netjes en zonder roet in huis. Meteen een blik op het lood en de aansluiting.`,
    icoon: "🧹",
    intro:
      "Een schone schoorsteen is veiliger (minder kans op schoorsteenbrand) en trekt beter. Ik veeg de hele schoorsteen, netjes en zonder roet in huis, en kijk meteen of het lood en de aansluiting nog goed zijn, dat is vaak een lekbron.",
    punten: [
      "Hele schoorsteen geveegd, netjes afgedekt binnen",
      "Veiliger: minder kans op schoorsteenbrand",
      "Controle op lood en aansluiting (lekbron)",
      "Kap of afdekplaat op de schoorsteen als er regen in het kanaal komt",
      "Vaste prijs vooraf",
    ],
    faq: [
      { v: "Hoe vaak moet de schoorsteen geveegd?", a: "Bij regelmatig stoken één keer per jaar, het beste vóór het stookseizoen. Zo voorkom je schoorsteenbrand en houd je een goede trek." },
      { v: "Kom je ook buiten Den Bosch schoorsteen vegen?", a: "Ja, in mijn hele werkgebied rond Den Bosch, zoals Rosmalen, Vught, Oss, Veghel, Boxtel en Schijndel. Op de werkgebied-pagina zie je of jouw plaats erbij staat." },
      { v: "Het lekt bij mijn schoorsteen, kun je dat ook bekijken?", a: "Ja. Bij het vegen kijk ik meteen naar het lood en de aansluiting op het dak, want daar begint lekkage bij de schoorsteen meestal. Zie ik iets, dan hoor je dat eerlijk, en wat het kost om te herstellen." },
      { v: "Wat moet ik doen voordat je komt?", a: "Stook de dag ervoor liever niet, zodat de kachel of haard koud is. Maak de ruimte rond de haard een beetje vrij. Het afdekken doe ik zelf." },
      { v: "Er zit een vogelnest in mijn schoorsteen, wat nu?", a: "Stook dan niet, want met een nest in het kanaal kan de rook, en daarmee koolmonoxide, je huis in komen. Vooral kauwen bouwen in het voorjaar graag een nest in een schoorsteen. Buiten het broedseizoen haal ik het nest eruit als ik kom vegen. Daarna kan er een kap op de schoorsteen, zodat ze er niet meer in kunnen. Twijfel je of er iets in zit, stuur dan een foto van de schoorsteen via WhatsApp." },
    ],
  },
  {
    slug: "dakkapel-reinigen",
    titel: "Dakkapel reinigen",
    vanafPrijs: DAKKAPEL_PRIJS,
    h1: "Dakkapel reinigen en onderhouden: weer schoon en waterdicht",
    kort: "Dakkapel schoonmaken, kitwerk en aansluitingen nakijken zodat hij niet gaat lekken.",
    metaTitle: "Dakkapel reinigen en onderhoud Den Bosch | Spoed Dak Service",
    metaDescription:
      "Dakkapel laten schoonmaken in de regio Den Bosch en Oss: groene aanslag eraf en meteen de kit, het lood en de aansluitingen nagekeken tegen lekkage.",
    icoon: "🏠",
    intro:
      "Een dakkapel wordt snel groen en grauw, en juist bij de kitnaden en de aansluiting op het dak begint lekkage. Ik maak hem weer schoon en kijk meteen of de naden, het lood en de zijkanten nog dicht zijn.",
    punten: [
      "Dakkapel schoonmaken: groene aanslag en vuil eraf",
      "Kitwerk en aansluitingen nakijken",
      "Lood en zijwangen controleren",
      "Klein onderhoud voorkomt dure lekkage",
    ],
    faq: [
      { v: "Doe je ook dakkapellen plaatsen?", a: "Ik richt me op poetsen, onderhoud en lekkage van bestaande dakkapellen. Wil je een nieuwe laten plaatsen, dan denk ik mee over wie je daarvoor het beste kunt hebben." },
      { v: "Wat kost een dakkapel laten reinigen?", a: `Een dakkapel reinigen kost ${DAKKAPEL_PRIJS}, inclusief een controle van de kit en de aansluitingen. Is hij groot of lastig te bereiken, dan hoor je vooraf de vaste prijs.` },
      { v: "Mijn dakkapel lekt bij de kitnaden, wat doe je dan?", a: "Oude kit die hard is of loslaat, haal ik eruit, en ik zet er nieuwe kit in. Ik kijk ook naar het lood onder de voorkant en langs de zijkanten, want daar komt het water vaak binnen. Druppelt het nu al binnen, kijk dan op de spoedpagina wat je meteen kunt doen, of stuur me een foto." },
      { v: "Hoe vaak moet een dakkapel schoongemaakt worden?", a: "Meestal is eens per jaar of om het jaar genoeg. Staat hij op het noorden of onder bomen, dan wordt hij sneller groen. Na de herfst is een goed moment: dan kijk ik meteen of de naden de winter aankunnen." },
      { v: "Kom je ook in Oss en omgeving een dakkapel schoonmaken?", a: "Ja, in mijn hele werkgebied rond Den Bosch, zoals Oss, Rosmalen, Vught en Veghel. Op de werkgebiedpagina zie je of jouw plaats erbij staat." },
    ],
  },
  {
    slug: "zonnepanelen-reinigen",
    titel: "Zonnepanelen reinigen",
    vanafPrijs: ZON_PRIJS,
    h1: "Zonnepanelen reinigen: meer opbrengst uit je panelen",
    kort: "Vuile panelen leveren minder op. Ik maak ze voorzichtig schoon en kijk meteen naar de pannen eronder.",
    metaTitle: "Zonnepanelen reinigen Den Bosch | Spoed Dak Service",
    metaDescription:
      "Zonnepanelen laten schoonmaken in de regio Den Bosch: vuil en vogelpoep eraf, en ik kijk meteen even naar de pannen onder de panelen. Vaste prijs vooraf.",
    icoon: "🔆",
    intro:
      "Stof, mos en vogelpoep op je panelen houden zonlicht tegen. Omdat ik toch op het dak sta, maak ik ze voorzichtig schoon en kijk ik meteen of de bevestiging en de pannen eronder nog goed zijn.",
    punten: [
      "Veilig vanaf het dak, voorzichtig met het glas",
      "Stof, mos en vogelpoep eraf",
      "Controle op bevestiging en vogelnesten eronder",
      "Vaak te combineren met goten reinigen",
    ],
    faq: [
      { v: "Hoe vaak is reinigen nodig?", a: "Eens per 1 tot 2 jaar is meestal genoeg, vaker als er veel bomen of vogels in de buurt zijn. Dan haal je het meeste uit je panelen." },
      { v: "Kijk je bij het reinigen ook naar lekkage onder de panelen?", a: "Ja. Omdat ik toch op het dak sta, kijk ik naar de bevestiging en de pannen eronder. Een pan die bij een dakhaak niet meer goed ligt, zie je zo vaak al voordat het binnen nat wordt." },
      { v: "Kan ik het combineren met goten reinigen?", a: "Ja, dat kan prima in één keer. Dan sta ik maar één keer op je dak en zijn de panelen en de goten allebei weer schoon." },
      { v: "Wat kost zonnepanelen reinigen?", a: "Dat hangt af van het aantal panelen en hoe goed ze bereikbaar zijn. Bovenaan deze pagina staat de prijsindicatie, en je hoort de vaste prijs vooraf." },
    ],
  },
  {
    slug: "vogelwering",
    titel: "Vogelwering",
    vanafPrijs: "vaste prijs vooraf",
    h1: "Vogelwering onder je pannen en zonnepanelen",
    kort: "Nette vogelwering tegen schade aan panlatten, isolatie en kabels.",
    metaTitle: "Vogelwering dak & zonnepanelen Den Bosch | Spoed Dak Service",
    metaDescription:
      "Vogelwering plaatsen onder dakpannen en zonnepanelen in de regio Den Bosch. Voorkomt schade aan panlatten, isolatie en bekabeling. Vaste prijs vooraf.",
    icoon: "🐦",
    intro:
      "Vogels (en hun nesten) onder je pannen of zonnepanelen beschadigen panlatten, isolatie en bekabeling, en geven overlast. Ik plaats nette vogelwering die het netjes afsluit, zonder dat het lelijk wordt.",
    punten: [
      "Vogelwering onder dakpannen en zonnepanelen",
      "Voorkomt schade aan latten, isolatie en kabels",
      "Netjes weggewerkt, niet zichtbaar lelijk",
      "Bestaande nesten eerst veilig verwijderd",
    ],
    faq: [
      { v: "Werkt vogelwering blijvend?", a: "Als de vogelwering goed geplaatst is en de hele rij onder de pannen afsluit, komen vogels er in de regel niet meer onder. Daarom kijk ik naar de hele dakvoet, niet alleen naar de plek waar je ze ziet." },
      { v: "Van welk materiaal is de vogelwering?", a: "Ik gebruik standaard kunststof vogelwering. Die komt onder de onderste rij pannen, zodat vogels er niet meer tussen kunnen, terwijl er nog wel lucht onder je pannen blijft. Vanaf de straat zie je er weinig van." },
      { v: "Kan er ook vogelwering onder mijn zonnepanelen?", a: "Ja, dat kan. Onder zonnepanelen nestelen vaak duiven, en die laten veel troep achter op je dak en in de goot. Ik sluit de rand rond de panelen af, zodat ze er niet meer onder komen." },
      { v: "Wanneer kun je vogelwering het beste laten plaatsen?", a: "Het liefst in de herfst of de winter. In het voorjaar en de zomer broeden er vaak vogels onder de pannen, en een nest waarin vogels broeden mag je niet zomaar weghalen. Hoor of zie je in die tijd vogels onder je dak, dan is het beter te wachten tot de jongen uitgevlogen zijn. Daarna sluit ik de rij onder de pannen af. Vogelwering is bij mij standaard van kunststof." },
    ],
  },
  {
    slug: "dakrenovatie",
    titel: "Dakrenovatie",
    vanafPrijs: NIEUWDAK_PRIJS,
    h1: "Dakrenovatie: versleten pannen, lood, nok en goten in één keer aangepakt",
    kort: "Versleten dak grondig opknappen: pannen, lood, nok en goten in één keer aangepakt.",
    metaTitle: "Dakrenovatie Den Bosch & regio | Spoed Dak Service",
    metaDescription:
      "Dakrenovatie in de regio Den Bosch: versleten pannen vervangen, lood en nok vernieuwen en de goten meteen mee. Eerlijk advies of renoveren genoeg is, vaste prijs vooraf.",
    icoon: "🏚",
    intro:
      "Is onderhoud niet meer genoeg, maar een compleet nieuw dak overdreven? Dan knap ik je dak grondig op: versleten pannen vervangen, lood en nok herstellen, goten aanpakken, in één keer, zodat je dak er weer jaren tegen kan.",
    punten: [
      "Versleten pannen vervangen, goede pannen laten liggen",
      "Lood, nokvorsten en aansluitingen vernieuwen",
      "Goten meteen mee aangepakt",
      "Eerlijk advies: renoveren of (deels) vervangen",
    ],
    faq: [
      { v: "Renoveren of een heel nieuw dak?", a: "Vaak stelt een grondige renovatie een nieuw dak jaren uit tegen veel lagere kosten. Is de onderconstructie slecht, dan is vervangen verstandiger. Ik kom kijken en zeg eerlijk wat loont." },
      { v: "Hoe weet ik of mijn dak aan renovatie toe is?", a: "Let op scheve of gebroken pannen, mos dat tussen de pannen groeit, specie uit de nok die in de goot ligt en lood dat los zit of scheurt. Zie je dat op meer plekken tegelijk, dan is steeds een losse reparatie vaak duurder dan alles in één keer aanpakken. Met de Dak-APK krijg je een fotorapport van je hele dak, dan zie je zelf hoe het ervoor staat." },
      { v: "Heb ik voor een dakrenovatie een vergunning nodig?", a: "Voor het vervangen van pannen, lood en goten in dezelfde soort en kleur is meestal geen vergunning nodig. Woon je in een monument of in een beschermd stadsgezicht, zoals de binnenstad van Den Bosch of vesting Heusden, vraag het dan eerst na bij de gemeente. Ik denk daar graag in mee." },
      { v: "Doe je ook dakrenovatie buiten Den Bosch?", a: "Ja, in mijn hele werkgebied rond Den Bosch, onder andere in Vught, Rosmalen, Oisterwijk, Veghel en Waalwijk. Een renovatie plan ik vooraf met je in. Ik kom eerst kijken, en je hoort de vaste prijs voordat ik begin." },
    ],
  },
  {
    slug: "dakisolatie",
    titel: "Dakisolatie",
    vanafPrijs: "vaste prijs na bezoek",
    h1: "Dakisolatie: minder stoken, meer comfort",
    kort: "Zolder of schuin dak isoleren: meestal minder stookkosten, vaak met subsidie.",
    metaTitle: "Dakisolatie Den Bosch en subsidie-advies | Spoed Dak Service",
    metaDescription:
      "Dak of zolder laten isoleren in de regio Den Bosch? Vaak minder stookkosten en meer comfort, en soms ISDE-subsidie. Vaste prijs vooraf. Bel of WhatsApp Rens.",
    icoon: "🧊",
    afbeelding: "/img/dakrenovatie.jpg",
    intro:
      "Via een slecht geïsoleerd dak verdwijnt een flink deel van je stookwarmte, en dat is zo'n beetje de duurste warmte die je hebt. Isoleren merk je meestal snel: minder stoken in de winter, een koelere zolder in de zomer. Ik kom kijken wat bij jouw dak past, het schuine dak aan de binnenkant of de zoldervloer, en je krijgt een vaste prijs vooraf. Als huiseigenaar krijg je er vaak ISDE-subsidie op.",
    punten: [
      "Schuin dak aan de binnenkant of zoldervloer isoleren",
      "Vaak goed merkbaar: lagere stookkosten, meer comfort",
      "Eerst check of je dak droog en gezond is: isoleren op een lek dak maakt het erger",
      "Eerlijk advies over ISDE-subsidie: wat kan er in jouw geval",
    ],
    faq: [
      {
        v: "Krijg ik subsidie op dakisolatie?",
        a: "Vaak wel: via de ISDE-regeling krijg je als huiseigenaar een deel van de kosten terug, en bij twee isolatiemaatregelen tegelijk is het bedrag hoger. De voorwaarden veranderen regelmatig. Ik kijk met je mee wat er in jouw geval mogelijk is en welke papieren je daarvoor nodig hebt.",
      },
      {
        v: "Wat kost dakisolatie?",
        a: "Dat hangt af van de oppervlakte en wat we isoleren (schuin dak of zoldervloer). Ik kom gratis kijken en je krijgt een vaste prijs vooraf, met een eerlijk advies of isoleren in jouw situatie uit kan.",
      },
      {
        v: "Is mijn dak geschikt om te isoleren?",
        a: "Meestal wel, maar het dak moet éérst droog en gezond zijn: isoleren over een lek of vochtprobleem heen maakt de schade alleen maar groter. Dat controleer ik vooraf, bijvoorbeeld met de Dak-APK, en daarna isoleer ik.",
      },
    ],
  },
];

export const getDienst = (slug: string) => DIENSTEN.find((d) => d.slug === slug);
