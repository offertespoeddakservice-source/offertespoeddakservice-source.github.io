/**
 * Diensten — sturen de /diensten/[slug] pagina's én de homepage-grid.
 * Volgorde = volgorde op de site. De Dak-APK (eigen pagina /dak-apk) is de opener.
 * Prijzen komen uit src/data/prijzen.ts (alles incl. btw). Diensten die Rens niet doet staan op verborgen: true
 * (schoorsteen vegen, dak reinigen, dakkapel reinigen, zonnepanelen, dakisolatie, dakcoating).
 */

import { prijsVan, inclBtw } from "./prijzen";

const GOTEN_PRIJS = prijsVan("goot_reinigen");
const LEK_PRIJS = prijsVan("daklekkage");
const PAN_PRIJS = prijsVan("dakpan");
const KLEIN_PRIJS = inclBtw("dakpan");
const PLATDAK_PRIJS = prijsVan("platdak");

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
  geenAfbeelding?: boolean; // true = geen grote foto bovenaan (er is nog geen passende foto)
  zieOok?: { label: string; href: string }[]; // optioneel: links naar verwante dienstpagina's
  fotos?: string[];       // optioneel: precies deze echte foto's (bestandsnaam uit src/data/fotos.ts) in plaats van de standaardkeuze
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
      `Goten laten reinigen in de regio Den Bosch: ${inclBtw("goot_reinigen")} voor één goot, vaste prijs vooraf. Netjes werk en eerlijk advies over je dak. Stuur een foto of app Rens.`,
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
        a: `Eén goot, bijvoorbeeld alleen de voorgoot, kost ${inclBtw("goot_reinigen")}: goot leeg, uitloop naar de regenpijp vrijgemaakt, troep mee. Beide goten of een groter huis? Dan hoor je vooraf de vaste prijs.`,
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
      {
        v: "Maak je ook goten schoon buiten Den Bosch?",
        a: "Ja, in mijn hele werkgebied rond Den Bosch, onder andere in Rosmalen, Vught, Oss, Oisterwijk, Boxtel, Drunen en Veghel. Op de werkgebiedpagina zie je of jouw plaats erbij staat. Stuur gerust een foto van je huis via WhatsApp, dan hoor je vooraf de vaste prijs.",
      },
      {
        v: "Er liggen zonnepanelen tot vlak boven mijn goot. Kun je die goot dan nog leegmaken?",
        a: "Meestal wel. Ik werk dan vanaf de ladder langs de goot en ga niet op de panelen staan. Onder panelen die tot aan de goot liggen, blijft vaak blad of nestmateriaal hangen, en dat haal ik er meteen uit voor zover ik erbij kan. Nestelen er duiven onder, dan kan ik de rand rond de panelen afsluiten met vogelwering.",
      },
      {
        v: "Reken je per meter goot?",
        a: `Nee. Je hoort één vaste prijs voor de hele klus, voordat ik begin. Voor een rijtjeswoning is dat ${GOTEN_PRIJS}: beide goten leeg, de uitloop naar de regenpijp vrij en de troep gaat mee. Heb je een hoekhuis, een twee-onder-een-kap of een vrijstaand huis, of zitten je goten hoog, dan noem ik vooraf de vaste prijs. Stuur gerust een foto van je huis vanaf de straat via WhatsApp, dan kan ik die vaak meteen noemen.`,
      },
      {
        v: "Neem je de goot van mijn garage, aanbouw of schuur ook mee?",
        a: "Ja, als ik er veilig bij kan. Aan een garage, aanbouw of schuur hangt vaak een lage goot die net zo vol blad zit als die van het huis, en die wordt vaak vergeten. Zeg het erbij als je een foto stuurt, dan hoor je vooraf de prijs voor alles samen. Ligt er een plat dak op met een afvoer, dan kijk ik meteen of die afvoer nog vrij is.",
      },
    ],
  },
  {
    slug: "daklekkage",
    titel: "Daklekkage & spoed",
    vanafPrijs: LEK_PRIJS,
    h1: "Daklekkage verhelpen: vaak dezelfde dag langs in de regio Den Bosch",
    kort: "Lek opsporen zonder sloopwerk en snel dichten, ook bij spoed.",
    metaTitle: "Daklekkage spoed: lek dichten Den Bosch | Spoed Dak Service",
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
        a: `Een lek opsporen en repareren kost ${inclBtw("daklekkage")}, inclusief materiaal. Bij spoed buiten kantooruren komt daar een toeslag bij. Je hoort het bedrag voordat ik begin. Stuur gerust eerst een foto.`,
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
      {
        v: "Ik heb het lek zelf al dichtgekit of afgeplakt, maar het lekt nog. Wat nu?",
        a: "Dat zie ik vaak, en dat is helemaal niet gek. Kit of tape hecht slecht op een nat of vuil dak, en vaak zit het echte lek een stuk hoger dan de plek die je hebt dichtgemaakt. Zet er geen nieuwe laag overheen. Ik zoek waar het water echt binnenkomt, haal oude kit weg waar die in de weg zit en maak het lek daarna goed dicht. Stuur me een foto van de plek die je hebt dichtgemaakt en van de natte plek binnen. Je hoort vooraf wat het kost.",
      },
    ],
  },
  {
    slug: "dakreparatie",
    titel: "Dakreparatie",
    vanafPrijs: PAN_PRIJS,
    zieOok: [
      { label: "Nokvorsten repareren of vervangen", href: "/diensten/nokvorsten-vervangen/" },
      { label: "Lood bij schoorsteen, muur of dakraam vervangen", href: "/diensten/lood-vervangen/" },
      { label: "Dakdoorvoer plaatsen", href: "/diensten/dakdoorvoer/" },
    ],
    h1: "Dakreparatie, ook met spoed: pannen, lood en nokvorsten hersteld",
    kort: "Gebroken pannen, lood bij schoorsteen of dakraam, losse nokvorsten.",
    metaTitle: "Spoed dakreparatie regio Den Bosch | Spoed Dak Service",
    metaDescription:
      "Losse pan, lood bij de schoorsteen of een nokvorst die los zit? Ik repareer het, bij spoed vaak nog dezelfde dag in de regio Den Bosch. Vaste prijs vooraf.",
    icoon: "🧰",
    intro:
      "Veel daklekkages beginnen klein: een gebroken pan, loslatend lood bij de schoorsteen of een losgewaaide nokvorst. Ik herstel het voordat het een groot probleem wordt, met materiaal dat bij je dak past. Is het spoed, omdat het binnen druppelt of er na een storm iets open ligt? Bel of app me dan meteen. Stuur er een foto bij die je vanaf de straat maakt, dan zie ik vaak al wat er los zit en wat ik mee moet nemen.",
    punten: [
      "Bij spoed eerst dichtmaken of afdekken, daarna de nette reparatie",
      "Gebroken of verschoven dakpannen vervangen",
      "Lood/loodslabben bij schoorsteen, dakkapel en dakraam",
      "Nokvorsten opnieuw vastzetten of vervangen",
      "Kitwerk en aansluitingen waterdicht maken",
    ],
    faq: [
      {
        v: "Wat kost het vervangen van een dakpan?",
        a: `Een paar losse pannen vervangen is vaak een kort klusje: ${inclBtw("dakpan")}. Meer pannen of verder rijden, dan wordt het meer. Je hoort vooraf de vaste prijs.`,
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
      {
        v: "Kun je ook een dakreparatie doen als het regent of hard waait?",
        a: "Bij een stortbui of harde wind ga ik niet op een nat, glad dak staan, dat is te gevaarlijk. Lekt het, dan dek ik af wat veilig kan, zodat het binnen droog blijft. De nette reparatie volgt als het droog is. Wanneer ik kan komen, hoor je als je belt of appt.",
      },
      {
        v: "Er heeft eerder een andere dakdekker aan mijn dak gewerkt. Kun je het dan nog repareren?",
        a: "Ja. Ik kijk wat er toen gedaan is en waar het nu lekt of loszit, en ik zeg je eerlijk wat ik zie. Is het werk pas gedaan, neem dan eerst contact op met die dakdekker, want dan hoort hij het in de regel zelf op te lossen. Je hoort vooraf wat mijn reparatie kost.",
      },
      { v: "Wat kost een spoed dakreparatie 's avonds of in het weekend?", a: `Een losse pan of nokvorst vastzetten of vervangen valt meestal onder een kleine reparatie: ${PAN_PRIJS} incl. btw. Moet ik 's avonds, 's nachts of in het weekend komen, dan komt daar een spoedtoeslag bij. Hoeveel dat is, hoor je voordat ik kom, ook midden in de nacht. Kan het veilig wachten tot een werkdag, bijvoorbeeld omdat het binnen droog blijft, dan zeg ik dat eerlijk. Dat scheelt je de toeslag.` },
      { v: "Moet ik thuis zijn als je komt voor een losse pan of nokvorst?", a: "Niet altijd. Kan ik er van buiten goed bij, bijvoorbeeld vanaf de straat of via een open tuinpad, en hebben we de prijs vooraf afgesproken, dan kan ik een losse pan of nokvorst ook repareren als je niet thuis bent. Stuur me vooraf een foto van je dak vanaf de straat en zeg waar ik mijn ladder kan zetten. Moet ik op zolder kijken waar het water binnenkomt, dan spreken we een moment af dat er iemand thuis is." },
      { v: "Kun je een oude antenne of schotel van mijn dak halen?", a: "Ja. Ik haal de mast, de beugel en de kabel weg en maak het dak daarna weer dicht. Op de plek waar de beugel onder de pan zat, komt een pan die past. Zat de mast met een band aan de schoorsteen, dan kijk ik meteen of het lood daar nog goed is. Een oude mast die bij storm heen en weer gaat, haal je het best weg voor de winter. Stuur een foto vanaf de straat, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "platte-daken",
    titel: "Platte daken (EPDM)",
    vanafPrijs: PLATDAK_PRIJS,
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
      { v: "Wat kost het om een lek in een plat dak te repareren?", a: `Een klein plat dak repareren kost ${inclBtw("platdak")}. Het hangt af van waar het lek zit en hoeveel er beschadigd is. Moet de hele dakbedekking eraf, stuur dan een foto, dan hoor je wat het ongeveer kost. Je hoort de vaste prijs voordat ik begin.` },
      { v: "Kun je dakleer op een schuur of tuinhuis repareren?", a: "Ja. Op veel schuren en tuinhuizen ligt dakleer, een dunne laag bitumen. Zit er één scheur of een losse naad in, dan is een gerichte reparatie vaak genoeg. Is het dakleer overal bros, staan er blazen in of lekt het op meer plekken, dan is een nieuwe laag slimmer. Stuur een foto, dan zeg ik eerlijk wat het wordt." },
      { v: "Hoe vaak moet een plat dak worden nagekeken?", a: "Eén keer per jaar is meestal genoeg, het liefst in het najaar. Ik haal dan blad en mos weg bij de afvoer en in de hoeken, en kijk naar de naden, de randen, de aansluiting tegen de muur en de rand van een lichtkoepel. Zit er een naad los, dan hoor je wat het kost om die dicht te maken voordat er in de winter een lek ontstaat. Na een zware storm, of als er na een bui dagen water blijft staan, laat je het beter eerder bekijken." },
      { v: "Kun je ook buiten Den Bosch naar een plat dak kijken?", a: "Ja, in mijn hele werkgebied, onder andere in Rosmalen, Vught, Vlijmen, Oisterwijk, Veghel en Waalwijk. Meestal gaat het om het platte dak van een aanbouw, garage of berging. Ik kijk eerst of een gerichte reparatie genoeg is, of dat de dakbedekking over het hele dak versleten is en vervangen beter is. Je hoort vooraf wat er nodig is en wat het kost." },
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
      "Daarna een nette reparatie, met materiaal dat bij je dak past",
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
      { v: "Mijn dakgoot is bij de storm losgeraakt, wat nu?", a: "Ga er niet onder staan en trek er niet aan. Een goot die half los hangt, kan verder afscheuren, en een zinken goot is zwaar. Maak vanaf de grond een foto en stuur die via WhatsApp. Vaak zijn er een paar beugels losgetrokken, en dan hang ik de goot weer vast en op afschot. Is de goot zelf geknikt of gescheurd, dan vervang ik dat stuk. Je hoort vooraf wat het kost." },
      { v: "Kun je komen terwijl het nog stormt?", a: "Bellen of appen kan altijd, ook midden in de storm. Op het dak kan ik pas als het veilig is, want bij zware windstoten is dat voor niemand verstandig. Tot die tijd zeg ik je via de telefoon of WhatsApp wat je binnen kunt doen om de schade te beperken. Na een storm krijg ik veel vragen tegelijk. Een dak dat open ligt of waar het binnen nat wordt, gaat dan voor. Stuur daarom meteen een foto, dan hoor je wanneer ik kan komen." },
      { v: "Moet ik mijn dak na een storm laten nakijken, ook als het binnen droog blijft?", a: "Niet altijd. Kijk eerst zelf vanaf de straat en vanuit de tuin: ligt er een pan scheef, mist er een, staat de nok niet meer recht of ligt er een stuk pan of specie op de grond? Kijk bij de eerste flinke bui daarna ook even op zolder. Zie je niets en blijft het droog, dan is er meestal niets aan de hand. Zie je wel iets, of twijfel je, maak dan een foto vanaf de grond en stuur die via WhatsApp. Dan zeg ik eerlijk of het moet en hoe snel." },
      { v: "De plank langs de zijkant van mijn dak is losgewaaid. Doe je dat ook?", a: "Ja. Die plank heet de windveer. Een goede windveer zet ik weer stevig vast, en is hij rot of gebroken, dan vervang ik hem. Daarna leg ik de pannen langs de rand weer goed, want de windveer houdt die op hun plek. Hangt hij half los boven de stoep of je tuin, blijf er dan onder weg en stuur me een foto vanaf de straat. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "dakgoot-vervangen",
    titel: "Dakgoot vervangen",
    vanafPrijs: "stuur een foto",
    zieOok: [
      { label: "Regenpijp vervangen", href: "/diensten/regenpijp-vervangen/" },
      { label: "Goten reinigen", href: "/diensten/goten-reinigen/" },
    ],
    h1: "Dakgoot repareren of vervangen: bij lekkende naden, roest of een goot die blijft overlopen",
    kort: "Versleten of lekkende goot? Nieuwe zinken, kunststof of pvc goot, netjes gemonteerd.",
    metaTitle: "Dakgoot repareren of vervangen Den Bosch | Spoed Dak Service",
    metaDescription:
      "Lekkende of roestige dakgoot repareren of vervangen in de regio Den Bosch. Zink, kunststof of pvc, inclusief afvoer. Vaste prijs vooraf, troep gaat mee.",
    icoon: "🛠",
    intro:
      "Lekt je dakgoot bij een naad, een hoek of de uitloop naar de regenpijp, of hangt hij door? Vaak is dat nog te repareren: ik herstel dat ene stuk of hang de goot weer op afschot naar de regenpijp. Is de goot doorgeroest, bros of op veel plekken lek, dan vervang ik hem in zink, kunststof of pvc, passend bij je huis, zodat je gevel en fundering droog blijven. Je hoort eerlijk wat het wordt, en vooraf wat het kost.",
    punten: [
      "Lekkende naad, hoek of uitloop herstellen waar dat kan",
      "Oude, roestige of lekkende goten vervangen",
      "Zink, kunststof of pvc, wat bij je dak past",
      "Inclusief beugels en hemelwaterafvoer",
      "Vaste prijs vooraf, troep gaat mee",
    ],
    faq: [
      { v: "Wat kost een dakgoot repareren of vervangen?", a: "Dat hangt af van wat er mis is. Een lekkende naad plakken of solderen, een goot die nog goed is van binnen coaten of de hele goot vervangen: dat zijn verschillende klussen. Stuur een foto van de plek waar het lekt en van de goot vanaf de straat, dan hoor je wat het kost. Je weet de prijs voordat ik begin." },
      { v: "Reinigen of vervangen?", a: "Zit er alleen blad in, dan volstaat reinigen. Is de goot doorgeroest of lek op de naden, dan is vervangen op termijn goedkoper. Ik zeg eerlijk wat in jouw geval slim is." },
      { v: "Welk materiaal kies ik?", a: "Zink gaat het langst mee en oogt klassiek; kunststof/pvc is voordeliger en onderhoudsarm. Ik help je kiezen wat bij je huis past." },
      { v: "Kun je een lekkende dakgoot ook repareren in plaats van vervangen?", a: "Vaak wel. Een lekkende naad, een losse hoek, een losse beugel of een lekkende uitloop naar de regenpijp is meestal goed te herstellen. Is de goot op meerdere plekken lek of doorgeroest, dan zeg ik eerlijk dat vervangen slimmer is." },
      { v: "Mijn dakgoot lekt bij de regenpijp, wat is dat?", a: "Meestal zit de uitloop los, het stuk waar de goot overgaat in de regenpijp, of lekt de verbinding. Soms zit de uitloop gewoon vol blad. Ik kijk wat het is en maak het weer dicht." },
      { v: "Mijn goot hangt door, moet hij dan vervangen worden?", a: "Niet altijd. Vaak zit er een beugel los of is er een gebroken. Dan zet ik de goot weer goed op afschot, zodat het water naar de regenpijp loopt in plaats van over de rand." },
      { v: "Het water loopt achter mijn dakgoot langs de muur. Moet de goot dan vervangen worden?", a: "Meestal niet. Vaak hangt de goot te laag of scheef, of komt het water van onder de pannen niet in de goot terecht. Dan hang ik de goot weer op de goede hoogte en op afschot naar de regenpijp, of zorg ik dat het water van de folie onder de pannen weer in de goot loopt. Vervangen is pas nodig als de goot zelf op is. Je hoort vooraf wat het kost." },
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
    verborgen: true,
    titel: "Dak reinigen",
    h1: "Dak reinigen: mos, vuil en groene aanslag eraf",
    kort: "Mos en aanslag verwijderen zodat je dak weer ademt en langer meegaat.",
    metaTitle: "Dak reinigen & mos verwijderen Den Bosch | Spoed Dak Service",
    metaDescription:
      "Mos, vuil en groene aanslag op je dak. Zo lopen je goten minder snel vol.",
    icoon: "🧽",
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
      { v: "Neem je de goten meteen mee?", a: "Ja. Het mos dat loskomt, valt voor een groot deel in de goot. Daarom maak ik na het reinigen de goten en de uitloop naar de regenpijp meteen leeg, anders zit je goot bij de eerste flinke bui vol. Wat het samen kost, hoor je vooraf." },
      { v: "Kun je mijn dak ook in de herfst of winter reinigen?", a: "Ja, op een droge dag zonder vorst. Is het dak nat en glad of vriest het, dan wacht ik even, want dan is het op het dak niet veilig. Een dikke laag mos laat je liever niet de hele winter liggen: mos houdt water vast, en als dat bevriest kan een oude pan gaan scheuren. Je hoort vooraf wat het kost." },
      { v: "Hoe lang blijft mijn dak schoon na het reinigen?", a: "Dat hangt vooral af van zon en schaduw. Een dakvlak dat veel zon krijgt, blijft vaak jaren schoon. Op de noordkant en onder bomen blijft een dak na een bui langer nat, en daar komt het mos eerder terug. Een groene waas komt meestal sneller terug dan dikke kussens mos. Houd je goten elk najaar leeg en laat het mos weghalen voordat het weer dik wordt, dan blijft het meestal goed in de hand. Stuur gerust een foto van je dak, dan zeg ik eerlijk wat ik verwacht." },
    ],
  },
  {
    slug: "dakpannen-vervangen",
    titel: "Dakpannen vervangen",
    vanafPrijs: PAN_PRIJS,
    zieOok: [
      { label: "Nokvorsten repareren of vervangen", href: "/diensten/nokvorsten-vervangen/" },
    ],
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
      { v: "Wat kost een dakpan vervangen?", a: `Een paar losse pannen vervangen, of een nokvorst weer vastzetten, kost ${inclBtw("dakpan")}. Meer pannen of verder rijden, dan wordt het meer. Stuur een foto, dan hoor je de prijs vooraf.` },
      { v: "Heb je mijn type pan nog?", a: "Voor de meeste daken vind ik passende pannen, ook bij oudere of bijzondere modellen. Lukt het echt niet, dan kijken we samen naar de beste oplossing." },
      { v: "Er is een dakpan kapot of verschoven, is dat spoed?", a: "Lekt het al of zit er een gat in je dak, dan is het spoed: bel of WhatsApp me met een foto. Is het één verschoven pan en blijft het binnen droog, dan kan het meestal een paar dagen wachten. Wacht alleen niet tot de volgende storm, want dan waaien er vaak meer los." },
      { v: "Waarom verschuiven dakpannen?", a: "Door harde wind, door een losse of rotte panlat eronder, of doordat er iemand op het dak heeft gelopen, bijvoorbeeld bij het plaatsen van zonnepanelen of een antenne. Ik leg ze recht en kijk meteen of de oorzaak eronder zit." },
      { v: "Kan ik zelf een dakpan terugleggen?", a: "Liever niet. Op een schuin, nat dak ben je zo uitgegleden, en een pan die niet goed in de sluiting ligt, schuift bij de volgende bui weer. Stuur een foto, dan zeg ik wat er nodig is." },
      { v: "Wat kost het om een paar dakpannen te laten vervangen?", a: `Eén of een paar pannen vervangen valt bij mij onder een kleine reparatie: ${KLEIN_PRIJS}. Gaat het om een hele rij, een groter stuk dak of een pan die lastig te krijgen is, dan hoor je vooraf de vaste prijs.` },
      { v: "Vervang je ook dakpannen buiten Den Bosch?", a: "Ja, in mijn hele werkgebied rond Den Bosch, onder andere in Rosmalen, Vught, Oss, Veghel en Waalwijk. Stuur een foto van je dak vanaf de straat via WhatsApp, dan zie ik vaak al wat voor pan het is en hoor je wanneer ik kan komen." },
      { v: "Er ligt een kapotte pan onder mijn zonnepanelen. Kun je die vervangen?", a: "Vaak wel. Ligt de pan aan de rand van de panelen, dan kan ik er meestal bij zonder iets aan de panelen te doen. Ligt hij er midden onder, dan moet eerst een paneel los, en dat laat je doen door je installateur. Daarna vervang ik de pan en kijk ik meteen of er bij de dakhaken nog meer pannen gebroken zijn. Stuur me een foto van je dak vanaf de straat en, als het binnen nat is, van de natte plek." },
      { v: "Na de vorst liggen er schilfers van mijn dakpannen in de goot. Moeten ze vervangen worden?", a: "Niet meteen allemaal. Een paar schilfers betekent vaak dat er bij oude pannen een laagje van de bovenkant is gesprongen, omdat er water in zat dat bevroor. Zolang de pan heel is en niet lekt, kan hij meestal blijven liggen. Is een pan gescheurd of mist er een hoek, dan vervang ik die. Zie ik op veel plekken schilfers en scheuren, dan zeg ik eerlijk of het slimmer is om een groter stuk te vervangen. Stuur een foto van je dak en van wat er in de goot ligt." },
    ],
  },
  {
    slug: "nokvorsten-vervangen",
    titel: "Nokvorsten repareren of vervangen",
    vanafPrijs: `repareren ${prijsVan("nok_repareren")}`,
    h1: "Nokvorsten repareren of vervangen: weer een dichte nok",
    kort: "Losse of kapotte nokvorsten opnieuw aansmeren met dakmortel, of de hele nok vernieuwen.",
    metaTitle: "Nokvorsten vervangen of repareren | Spoed Dak Service",
    metaDescription:
      `Nokvorsten los of kapot? Opnieuw aansmeren met dakmortel ${inclBtw("nok_repareren")}, of de hele nok vernieuwen. Stuur een foto, dan hoor je vooraf wat het kost.`,
    icoon: "🏠",
    geenAfbeelding: true,
    fotos: ["/fotos/nette-nok-met-nokvorsten-a56a3a.webp", "/fotos/nokvorsten-bij-schoorsteen-bef73b.webp"],
    zieOok: [
      { label: "Dakpannen vervangen", href: "/diensten/dakpannen-vervangen/" },
      { label: "Dakreparatie", href: "/diensten/dakreparatie/" },
    ],
    intro:
      "De nok is het hoogste stuk van je dak, en daar trekt de wind het hardst aan. Is de specie onder de vorsten oud, dan brokkelt hij af en gaan de vorsten los liggen. Dan komt er regen onder de nok. Ik zet ze weer vast met dakmortel, of ik vervang de nok als dat beter is. Je hoort vooraf wat het wordt.",
    punten: [
      "Losse nokvorsten opnieuw aansmeren met dakmortel",
      "Kapotte vorsten vervangen door passende",
      "Is de hele nok op, dan in één keer goed vernieuwd",
      "Meteen een blik op de bovenste rijen pannen",
    ],
    faq: [
      { v: "Wat kost nokvorsten repareren?", a: `Opnieuw aansmeren met dakmortel kost ${inclBtw("nok_repareren")}. Zitten er maar een of twee los, dan valt het vaak onder een dakpan vervangen (${inclBtw("dakpan")}). Moet de hele nok vervangen worden, stuur dan een foto, dan hoor je wat het kost.` },
      { v: "Hoe zie ik of mijn nokvorsten los zitten?", a: "Kijk vanaf de straat naar de bovenste rand van je dak. Een vorst die scheef ligt, een kier tussen twee vorsten of stukjes specie in de goot of de tuin: dan is het tijd. Maak een foto en stuur hem op, dan kijk ik mee." },
      { v: "Repareren of de hele nok vervangen?", a: "Zitten er een paar los, dan is opnieuw aansmeren prima. Is de specie overal op of zijn veel vorsten kapot, dan is de hele nok in één keer slimmer. Ik zeg eerlijk wat bij jouw dak past." },
      { v: "Kan het wachten tot het voorjaar?", a: "Liever niet. Bij een storm kan een losse vorst van het dak waaien, en dan komt er water onder de pannen. Vastzetten is een kleine klus, de schade erna vaak niet." },
    ],
  },
  {
    slug: "lood-vervangen",
    titel: "Lood vervangen",
    vanafPrijs: "stuur een foto",
    h1: "Lood vervangen bij je schoorsteen, muur of dakraam",
    kort: "Los, gescheurd of opgekruld lood vastzetten of vervangen, zodat het water weer over de pannen loopt.",
    metaTitle: "Lood vervangen bij schoorsteen, muur of dakraam | Spoed Dak Service",
    metaDescription:
      "Lekt het bij je schoorsteen, langs de muur of bij een dakraam? Vaak zit het lood los of is het gescheurd. Ik zet het vast of vervang het. Stuur een foto, dan hoor je wat het kost.",
    icoon: "🧰",
    geenAfbeelding: true,
    fotos: ["/fotos/open-dak-gescheurd-zink-5927e8.webp", "/fotos/schoorsteen-met-loodslabben-173c1a.webp"],
    zieOok: [
      { label: "Daklekkage opsporen en repareren", href: "/diensten/daklekkage/" },
      { label: "Dakreparatie", href: "/diensten/dakreparatie/" },
    ],
    intro:
      "Waar je dak tegen iets aan komt, een schoorsteen, een muur of een dakraam, ligt lood. Dat lood zorgt dat het water over de pannen wegloopt. Na jaren gaat het scheuren, krult het omhoog of komt het los. Dan loopt het water erachter en zie je binnen een natte plek. Ik zet het lood weer vast of vervang het.",
    punten: [
      "Lood rond de schoorsteen vastzetten of vervangen",
      "Lood langs de muur waar een lager dak tegen het huis zit",
      "Lood rond een dakraam of dakkapel",
      "Meteen een blik op de pannen eromheen",
    ],
    faq: [
      { v: "Wat kost lood vervangen?", a: "Dat hangt af van hoeveel lood het is en hoe goed ik erbij kan. Stuur een foto van de schoorsteen, de muur of het dakraam, dan hoor je wat het kost. Je weet de prijs voordat ik begin." },
      { v: "Hoe weet ik of het het lood is?", a: "Een natte plek op zolder vlak naast de schoorsteen of het dakraam, of strepen op de muur onder het lood, wijzen vaak naar het lood. Kijk ook vanaf de straat: krult het omhoog of zit er een kier, dan is het meestal raak." },
      { v: "Moet al het lood eraf?", a: "Niet altijd. Een losse strook kan vaak opnieuw vastgezet worden. Is het lood gescheurd of op, dan komt er nieuw lood. Je hoort vooraf welke van de twee het wordt." },
      { v: "Doe je ook het voegwerk van de schoorsteen?", a: "Nee, voegwerk en metselen doe ik niet. Ik herstel het lood en de aansluiting op het dak. Zie ik dat de stenen of de voegen slecht zijn, dan zeg ik dat eerlijk, zodat je daar iemand anders voor kunt vragen." },
    ],
  },
  {
    slug: "regenpijp-vervangen",
    titel: "Regenpijp vervangen",
    vanafPrijs: prijsVan("regenpijp"),
    h1: "Regenpijp vervangen of repareren",
    kort: "Gescheurde, losse of lekkende regenpijp vervangen, in kunststof of zink.",
    metaTitle: "Regenpijp vervangen of repareren | Spoed Dak Service",
    metaDescription:
      `Regenpijp gescheurd, los of lek? Ik vervang hem, kunststof ${inclBtw("regenpijp")} en zink vanaf €525 incl. btw. Vaste prijs vooraf, stuur gerust een foto.`,
    icoon: "🛠",
    geenAfbeelding: true,
    fotos: ["/fotos/regenpijp-met-aftakking-72b9bb.webp", "/fotos/regenpijp-aansluiten-bestrating-open-6d4a97.webp", "/fotos/regenpijp-aftakking-plat-dak-98b289.webp"],
    zieOok: [
      { label: "Dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
      { label: "Goten reinigen", href: "/diensten/goten-reinigen/" },
    ],
    intro:
      "Een regenpijp die gescheurd is, los van de muur hangt of bij de verbindingen lekt, laat het water langs je gevel lopen. Dan wordt de muur nat en groen. Ik vervang de regenpijp, in kunststof of zink, en kijk meteen of de goot erboven het water goed kwijt kan.",
    punten: [
      "Gescheurde of kapotte regenpijp vervangen",
      "Kunststof of zink, passend bij je goot",
      "Beugels weer stevig aan de muur",
      "Aansluiting op de goot meteen nagekeken",
    ],
    faq: [
      { v: "Wat kost een regenpijp vervangen?", a: `Een kunststof regenpijp vervangen kost ${inclBtw("regenpijp")}. Zink kost vanaf €525 incl. btw. Is hij heel lang of lastig te bereiken, dan hoor je de prijs vooraf.` },
      { v: "Kunststof of zink?", a: "Kunststof is voordeliger en je hoeft er weinig aan te doen. Zink gaat lang mee en past mooi bij een zinken goot. Ik kijk wat bij je huis past." },
      { v: "Mijn regenpijp lekt alleen bij een verbinding, moet hij dan helemaal nieuw?", a: "Niet altijd. Soms is alleen een stuk of een bocht kapot. Ik kijk wat er nodig is en zeg eerlijk of een stuk vervangen genoeg is." },
      { v: "Kijk je ook naar de goot?", a: "Ja. Loopt de goot over of lekt hij bij de uitloop naar de regenpijp, dan zie ik dat meteen. Dan hoor je wat dat erbij kost, voordat ik iets doe." },
      { v: "Mijn regenpijp is bij de storm losgeraakt van de muur. Is dat erg?", a: "Laat hem niet te lang zo hangen. Bij wind slaat een losse pijp tegen de gevel en kan hij breken, en vaak schiet hij dan ook uit de uitloop van de goot, zodat het water langs je muur loopt. Ga er niet zelf op een ladder aan trekken. Meestal is de pijp nog goed en zijn alleen de beugels los of afgebroken. Dan zet ik hem weer goed in de uitloop en maak ik hem vast met nieuwe beugels. Is er een stuk gebroken, dan vervang ik dat stuk. Stuur een foto via WhatsApp, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "dakdoorvoer",
    titel: "Dakdoorvoer plaatsen",
    vanafPrijs: "stuur een foto",
    h1: "Dakdoorvoer plaatsen voor ventilatie, afzuiging of WTW",
    kort: "Een nieuwe doorvoer door je pannendak, netjes en waterdicht aangesloten op de pannen.",
    metaTitle: "Dakdoorvoer plaatsen of vervangen | Spoed Dak Service",
    metaDescription:
      "Een dakdoorvoer nodig voor ventilatie, een afzuigkap, een WTW-unit of een rookgasafvoer? Ik plaats hem door je pannendak en sluit hem waterdicht aan. Stuur een foto voor de prijs.",
    icoon: "🧰",
    geenAfbeelding: true,
    fotos: ["/fotos/rookgasafvoer-door-pannendak-653b84.webp"],
    zieOok: [
      { label: "Lood vervangen", href: "/diensten/lood-vervangen/" },
      { label: "Daklekkage opsporen en repareren", href: "/diensten/daklekkage/" },
    ],
    intro:
      "Voor ventilatie, een afzuigkap, een WTW-unit of een rookgasafvoer moet er een pijp door het dak. Ik plaats een doorvoerpan tussen je pannen, zodat de pijp er netjes doorheen kan en het regenwater er gewoon omheen loopt. Lekt een bestaande doorvoer, dan kijk ik of de kraag of de pan vervangen moet worden.",
    punten: [
      "Nieuwe doorvoerpan, passend bij je dakpannen",
      "Voor ventilatie, afzuiging, WTW of rookgasafvoer",
      "Waterdicht aangesloten op de pannen eromheen",
      "Lekkende doorvoer nagekeken en hersteld",
    ],
    faq: [
      { v: "Wat kost een dakdoorvoer plaatsen?", a: "Dat hangt af van je pannen, de dikte van de pijp en waar hij door het dak moet. Stuur een foto van je dak en vertel waar de doorvoer voor is, dan hoor je wat het kost. Je weet de prijs voordat ik begin." },
      { v: "Sluit je de pijp ook aan op de ketel of de WTW-unit?", a: "Nee, ik doe het stuk door het dak: de doorvoerpan en de aansluiting op de pannen. De aansluiting op je ketel, afzuigkap of WTW-unit doet je installateur. We kunnen samen afspreken wie wat doet." },
      { v: "Mijn doorvoer lekt, wat kan het zijn?", a: "Vaak is de kraag rond de pijp uitgedroogd of gescheurd, of ligt de doorvoerpan niet meer goed tussen de andere pannen. Dan loopt het water langs de pijp naar binnen. Ik kijk wat het is en maak het dicht." },
      { v: "Kan dat ook op een plat dak?", a: "Stuur een foto van het dak en de plek, dan kijk ik mee. Op een pannendak doe ik het het vaakst." },
      { v: "Er komt een warmtepomp of airco. Kun je de leiding door het dak laten gaan?", a: "Ja, het stuk door het dak doe ik. Ik plaats een doorvoerpan die past bij je pannen, zodat de leiding er netjes doorheen kan en het water er omheen loopt. Dan hoeft er geen gat in een gewone pan geboord of gezaagd te worden, want daar begint later vaak een lek. De leiding zelf en de aansluiting op de warmtepomp of airco doet je installateur. Stuur een foto van je dak en vertel waar de leiding naar binnen moet, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "schoorsteen-vegen",
    verborgen: true,
    titel: "Schoorsteen vegen",
    h1: "Schoorsteen vegen: veilig, netjes en zonder roetzooi",
    kort: "De hele schoorsteen geveegd, plus een blik op het lood en de aansluiting.",
    metaTitle: "Schoorsteenveger Den Bosch en omgeving | Spoed Dak Service",
    metaDescription:
      "Schoorsteen laten vegen: veilig, netjes en zonder roet in huis.",
    icoon: "🧹",
    intro:
      "Een schone schoorsteen is veiliger (minder kans op schoorsteenbrand) en trekt beter. Ik veeg de hele schoorsteen, netjes en zonder roet in huis, en kijk meteen of het lood en de aansluiting nog goed zijn, dat is vaak een lekbron.",
    punten: [
      "Hele schoorsteen geveegd, netjes afgedekt binnen",
      "Veiliger: minder kans op schoorsteenbrand",
      "Controle op lood en aansluiting (lekbron)",
      "Kap of afdekplaat op de schoorsteen als er regen in het kanaal komt",
    ],
    faq: [
      { v: "Hoe vaak moet de schoorsteen geveegd?", a: "Bij regelmatig stoken één keer per jaar, het beste vóór het stookseizoen. Zo voorkom je schoorsteenbrand en houd je een goede trek." },
      { v: "Kom je ook buiten Den Bosch schoorsteen vegen?", a: "Ja, in mijn hele werkgebied rond Den Bosch, zoals Rosmalen, Vught, Oss, Veghel, Boxtel en Schijndel. Op de werkgebied-pagina zie je of jouw plaats erbij staat." },
      { v: "Het lekt bij mijn schoorsteen, kun je dat ook bekijken?", a: "Ja. Bij het vegen kijk ik meteen naar het lood en de aansluiting op het dak, want daar begint lekkage bij de schoorsteen meestal. Zie ik iets, dan hoor je dat eerlijk, en wat het kost om te herstellen." },
      { v: "Wat moet ik doen voordat je komt?", a: "Stook de dag ervoor liever niet, zodat de kachel of haard koud is. Maak de ruimte rond de haard een beetje vrij. Het afdekken doe ik zelf." },
      { v: "Er zit een vogelnest in mijn schoorsteen, wat nu?", a: "Stook dan niet, want met een nest in het kanaal kan de rook, en daarmee koolmonoxide, je huis in komen. Vooral kauwen bouwen in het voorjaar graag een nest in een schoorsteen. Buiten het broedseizoen haal ik het nest eruit als ik kom vegen. Daarna kan er een kap op de schoorsteen, zodat ze er niet meer in kunnen. Twijfel je of er iets in zit, stuur dan een foto van de schoorsteen via WhatsApp." },
      { v: "Moet mijn schoorsteen geveegd worden als ik alleen een cv-ketel heb?", a: "Meestal niet. Heb je alleen een moderne cv-ketel op gas met een eigen afvoer, dan is er niets te vegen. Dat onderhoud doet je installateur, samen met de ketel. Gaat de afvoer van je ketel door een oud gemetseld kanaal, laat dat dan ook door je installateur nakijken. Stook je daarnaast hout in een kachel of open haard, dan moet dat kanaal wel geveegd worden, het liefst voor het stookseizoen. Weet je niet zeker wat er op je schoorsteen is aangesloten, stuur me dan een foto via WhatsApp." },
      { v: "Het stookseizoen is al begonnen. Kun je nu nog komen vegen?", a: "Ja, dat kan gewoon. Voor het stookseizoen is het fijnst, maar heb je dit jaar nog niet laten vegen, wacht dan niet tot het voorjaar. In de winter stook je het meest, en dan zet zich ook het meeste roet af. Laat je kachel of haard de dag ervoor uit, zodat hij koud is als ik kom. Bel of app me, dan plannen we een moment." },
    ],
  },
  {
    slug: "dakkapel-reinigen",
    verborgen: true,
    titel: "Dakkapel reinigen",
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
      { v: "Mijn dakkapel lekt bij de kitnaden, wat doe je dan?", a: "Oude kit die hard is of loslaat, haal ik eruit, en ik zet er nieuwe kit in. Ik kijk ook naar het lood onder de voorkant en langs de zijkanten, want daar komt het water vaak binnen. Druppelt het nu al binnen, kijk dan op de spoedpagina wat je meteen kunt doen, of stuur me een foto." },
      { v: "Hoe vaak moet een dakkapel schoongemaakt worden?", a: "Meestal is eens per jaar of om het jaar genoeg. Staat hij op het noorden of onder bomen, dan wordt hij sneller groen. Na de herfst is een goed moment: dan kijk ik meteen of de naden de winter aankunnen." },
      { v: "Kom je ook in Oss en omgeving een dakkapel schoonmaken?", a: "Ja, in mijn hele werkgebied rond Den Bosch, zoals Oss, Rosmalen, Vught en Veghel. Op de werkgebiedpagina zie je of jouw plaats erbij staat." },
    ],
  },
  {
    slug: "zonnepanelen-reinigen",
    verborgen: true,
    titel: "Zonnepanelen reinigen",
    h1: "Zonnepanelen reinigen: meer opbrengst uit je panelen",
    kort: "Vuile panelen leveren minder op. Ik maak ze voorzichtig schoon en kijk meteen naar de pannen eronder.",
    metaTitle: "Zonnepanelen schoonmaken Den Bosch | Spoed Dak Service",
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
    vanafPrijs: "stuur een foto",
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
      { v: "Wat kost een dakrenovatie?", a: "Dat hangt af van hoe groot je dak is en wat er moet gebeuren. Stuur een paar foto's, dan hoor je wat het ongeveer kost. Daarna kom ik kijken en krijg je een vaste prijs voordat ik begin. Voor grotere klussen plannen we een paar weken vooruit." },
      { v: "Renoveren of een heel nieuw dak?", a: "Vaak stelt een grondige renovatie een nieuw dak jaren uit tegen veel lagere kosten. Is de onderconstructie slecht, dan is vervangen verstandiger. Ik kom kijken en zeg eerlijk wat loont." },
      { v: "Hoe weet ik of mijn dak aan renovatie toe is?", a: "Let op scheve of gebroken pannen, mos dat tussen de pannen groeit, specie uit de nok die in de goot ligt en lood dat los zit of scheurt. Zie je dat op meer plekken tegelijk, dan is steeds een losse reparatie vaak duurder dan alles in één keer aanpakken. Met de Dak-APK krijg je een fotorapport van je hele dak, dan zie je zelf hoe het ervoor staat." },
      { v: "Heb ik voor een dakrenovatie een vergunning nodig?", a: "Voor het vervangen van pannen, lood en goten in dezelfde soort en kleur is meestal geen vergunning nodig. Woon je in een monument of in een beschermd stadsgezicht, zoals de binnenstad van Den Bosch of vesting Heusden, vraag het dan eerst na bij de gemeente. Ik denk daar graag in mee." },
      { v: "Doe je ook dakrenovatie buiten Den Bosch?", a: "Ja, in mijn hele werkgebied rond Den Bosch, onder andere in Vught, Rosmalen, Oisterwijk, Veghel en Waalwijk. Een renovatie plan ik vooraf met je in. Ik kom eerst kijken, en je hoort de vaste prijs voordat ik begin." },
      { v: "Kan een dakrenovatie ook in de herfst of winter?", a: "Meestal wel. Ik plan het werk op droge dagen, en bij vorst, ijs of harde wind wacht ik even, want dan is het op het dak niet veilig. Wachten tot het voorjaar heeft ook een nadeel: losse pannen en een nok die al brokkelt, krijgen dan eerst nog de winterstormen te verduren. Soms is het slim om nu het dringendste te laten doen en de rest in het voorjaar. Je hoort vooraf wat het kost en wanneer ik kan beginnen." },
      { v: "Leg je bij een renovatie ook nieuwe folie en panlatten onder de pannen?", a: "Als je dat wilt, ja. Dan gaan de pannen eraf, komt er nieuwe folie op het dak en nieuwe panlatten, en daarna gaan de pannen er weer op, aangevuld met nieuwe waar oude kapot zijn. Het is niet bij elk dak nodig. Ligt er geen folie onder je pannen, of is de oude folie bros of gescheurd, dan is het vaak slim om het meteen mee te nemen. Ik zeg eerlijk wat ik zie, en jij kiest. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "dakisolatie",
    verborgen: true,
    titel: "Dakisolatie",
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
      {
        v: "Mijn oude huis heeft geen folie onder de pannen. Kan het dak dan van binnen geïsoleerd worden?",
        a: "Vaak wel, maar dan moet het goed gebeuren. Bij veel huizen van voor de oorlog liggen de pannen direct op de latten, zonder folie eronder. Tussen de pannen en de isolatie hoort dan ruimte te blijven waar lucht langs kan, en aan de binnenkant een laag die het vocht uit huis tegenhoudt. Anders kan er vocht in de isolatie neerslaan. Ik kijk eerst of de pannen goed liggen en nergens water doorlaten, want zonder folie komt een lekje meteen op de isolatie terecht. Daarna hoor je wat er kan en wat het kost.",
      },
      {
        v: "Isoleer je ook buiten Den Bosch, bijvoorbeeld in Sint-Michielsgestel?",
        a: "Ja, in mijn werkgebied rond Den Bosch, onder andere in Sint-Michielsgestel, Rosmalen, Vught en Berlicum. Vooral bij oudere huizen, zoals die uit de jaren '20 en '30 in Den Bosch of de huizen van voor de oorlog in Gestel, kijk ik eerst of het dak droog en dicht is voordat er isolatie in komt. Ik kom eerst kijken, en je krijgt een vaste prijs vooraf.",
      },
    ],
  },
];

export const getDienst = (slug: string) => DIENSTEN.find((d) => d.slug === slug);
