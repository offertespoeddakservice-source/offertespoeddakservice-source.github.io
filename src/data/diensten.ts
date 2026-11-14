/**
 * Diensten — sturen de /diensten/[slug] pagina's én de homepage-grid.
 * Volgorde = volgorde op de site. De Dak-APK (eigen pagina /dak-apk) is de opener.
 * Prijzen komen uit src/data/prijzen.ts (alles incl. btw). Diensten die Rens niet doet staan op verborgen: true
 * (schoorsteen vegen, dak reinigen, dakkapel reinigen, zonnepanelen, dakisolatie, dakcoating).
 */

import { PRIJZEN, prijsVan, inclBtw } from "./prijzen";

const GOTEN_PRIJS = prijsVan("goot_reinigen");
const LEK_PRIJS = prijsVan("daklekkage");
const PAN_PRIJS = prijsVan("dakpan");
const KLEIN_PRIJS = inclBtw("dakpan");
const PLATDAK_PRIJS = prijsVan("platdak");
// Zink-regenpijp: het bedrag staat in de uitleg van de regenpijp-rij in prijzen.ts, zo blijft er één bron.
const ZINK_REGENPIJP = PRIJZEN.find((r) => r.sleutel === "regenpijp")?.uitleg.match(/Zink (vanaf [^\s.]+)/)?.[1];

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
    zieOok: [
      { label: "Dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
      { label: "Zinken dakgoot solderen", href: "/diensten/dakgoot-solderen/" },
      { label: "Regenpijp vervangen of repareren", href: "/diensten/regenpijp-vervangen/" },
    ],
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
        a: `Nee. Je hoort één vaste prijs voor de hele klus, voordat ik begin. Eén goot, bijvoorbeeld alleen de voorgoot, kost ${GOTEN_PRIJS}: goot leeg, de uitloop naar de regenpijp vrij en de troep gaat mee. Moeten beide goten schoon, heb je een hoekhuis, een twee-onder-een-kap of een vrijstaand huis, of zitten je goten hoog, dan noem ik vooraf de vaste prijs. Stuur gerust een foto van je huis vanaf de straat via WhatsApp, dan kan ik die vaak meteen noemen.`,
      },
      {
        v: "Neem je de goot van mijn garage, aanbouw of schuur ook mee?",
        a: "Ja, als ik er veilig bij kan. Aan een garage, aanbouw of schuur hangt vaak een lage goot die net zo vol blad zit als die van het huis, en die wordt vaak vergeten. Zeg het erbij als je een foto stuurt, dan hoor je vooraf de prijs voor alles samen. Ligt er een plat dak op met een afvoer, dan kijk ik meteen of die afvoer nog vrij is.",
      },
      {
        v: "Er ligt een gaas of een borstel in mijn goot. Maak je die ook schoon?",
        a: "Ja, als ik er goed bij kan. Onder een gaas of in een borstel blijven naalden, mos en zand toch hangen, en op het gaas zelf blijft nat blad liggen. Ik haal het gaas of de borstel eruit, maak de goot en de uitloop naar de regenpijp leeg en leg het daarna terug. Zit er een bolletje in de uitloop, dan maak ik dat ook schoon. Zeg het erbij als je een foto stuurt, dan hoor je vooraf de prijs.",
      },
      {
        v: "Mijn goot zit nog vol, maar het gaat vriezen. Kun je hem nu nog leegmaken?",
        a: "Ja, op een droge dag waarop er geen ijs in de goot zit. Wacht er liever niet mee tot het voorjaar. Nat blad dat in de goot blijft liggen, bevriest tot een harde prop, en dan kan het smeltwater bij de dooi nergens heen. Het loopt dan over de rand langs je gevel, of het ijs duwt een naad of hoek van de goot open. Zit de goot op dit moment vol ijs, dan wacht ik tot het dooit, want ijs eruit hakken beschadigt de goot. Stuur me een foto van je goot vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.",
      },
      {
        v: "Er ligt zand of grijs gruis in mijn goot. Komt dat van mijn dak?",
        a: "Meestal wel. Bij betonnen dakpannen slijt de bovenste laag na veel jaren, en dat zand spoelt bij elke bui de goot in. Een dun laagje is normaal, maar het zakt naar de uitloop en zet die samen met blad dicht. Bij het leegmaken haal ik het eruit en kijk ik meteen naar de pannen erboven. Liggen er brokjes specie of een stuk pan in de goot, dan zeg ik je waar die vandaan komen. Stuur gerust een foto van wat je vond.",
      },
      {
        v: "Zie je bij het leegmaken dat mijn goot lekt? Kun je het dan meteen maken?",
        a: "Vaak wel, als het een kleine reparatie is en de goot droog genoeg is. Pas als de goot leeg is, zie ik goed of een naad, een hoek of de uitloop lekt. Een losse verbinding of een hoekstuk van een kunststof goot vervang ik vaak in dezelfde keer, en een lekke naad in een zinken goot kan ik solderen als hij droog is. Dat doe ik niet ongevraagd: je hoort eerst wat ik zie en wat het kost, en dan beslis jij. Van binnen coaten doe ik op een droge dag zonder vorst, dus dat plannen we soms apart. Stuur gerust vooraf een foto van de plek waar het druppelt.",
      },
    ],
  },
  {
    slug: "daklekkage",
    titel: "Daklekkage & spoed",
    vanafPrijs: LEK_PRIJS,
    h1: "Daklekkage met spoed verhelpen: vaak dezelfde dag langs in de regio Den Bosch",
    kort: "Lek opsporen zonder sloopwerk en snel dichten, ook bij spoed.",
    metaTitle: "Daklekkage spoed: lek dichten Den Bosch | Spoed Dak Service",
    metaDescription:
      "Daklekkage? Ik spoor het lek op zonder onnodig sloopwerk en dicht het, bij spoed vaak nog dezelfde dag in de regio Den Bosch. Bel of WhatsApp me.",
    icoon: "💧",
    intro:
      "Een lek wacht niet. Bel of app me met een foto, dan hoor je wanneer ik kan komen. Ik spoor de oorzaak op (de natte plek zit zelden recht onder het echte lek) en dicht het vakkundig. Eerst de schade beperken, dan de oorzaak aanpakken, en je hoort eerlijk of het een reparatie is of dat er meer nodig is.",
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
        a: "Dat hangt af van je polis en van de oorzaak. De schade binnen, zoals aan een plafond of een vloer, wordt vaak vergoed. De reparatie van het dak zelf niet altijd, zeker niet als het lek door slijtage komt. Maak foto's van de schade voordat je iets opruimt en bel je verzekeraar. Zelf maak ik foto's van wat ik op je dak aantref en van de reparatie, met een korte omschrijving. Die kun je meesturen naar je verzekeraar.",
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
      { v: "Ik woon in een appartement en het lekt door het plafond. Kom je dan ook?", a: "Ja. Woon je op de bovenste verdieping, dan komt het water vaak van het platte dak of de dakrand boven je. Woon je lager, dan kan het ook van een balkon, een leiding of de woning boven je komen. Het dak van een appartementengebouw is meestal van de VvE. Meld het lek daarom meteen bij het bestuur of de beheerder van de VvE, en huur je, ook bij je verhuurder, want zij moeten meestal akkoord geven voor de reparatie. Ik kijk waar het water binnenkomt en maak foto's die je aan de VvE kunt laten zien. Stuur me eerst een foto van de natte plek via WhatsApp." },
      { v: "Moet ik iets klaarzetten voordat je komt voor een lek?", a: "Een paar dingen helpen. Maak het zolderluik vrij en de plek onder de natte plek, zodat ik er met een lamp bij kan. Laat de emmer en de handdoeken gewoon staan, dan zie ik waar het druppelt. Zeg vooraf of ik bij de achterkant van je huis kan, bijvoorbeeld via een achterom of een poort, en of er voor de deur plek is voor mijn bus en ladder. Heb je foto's van de natte plek of van je dak vanaf de straat, stuur die dan alvast via WhatsApp. Dan weet ik wat ik mee moet nemen." },
      { v: "Mijn dakraam lekt. Repareer je dat, of moet er een nieuw raam in?", a: "Meestal hoeft het raam er niet uit. Bij een lekkend dakraam zit het water vaak in de aansluiting met het dak: het gootstuk onder het raam, het lood of de strook langs de zijkanten, of een pan naast het raam die niet meer goed aansluit. Ook blad dat boven het raam blijft liggen, kan het water opzij onder de pannen sturen. Die aansluiting herstel ik. Druppelt het alleen op koude ochtenden op de vensterbank, dan is het vaak condens en geen lek. Is het hout van het kozijn zacht of zit er een barst in het glas, dan zeg ik eerlijk dat het raam zelf op is. Stuur me een foto van het raam van binnen en, als het lukt, van buiten vanaf de straat. Je hoort vooraf wat het kost." },
      { v: "Het lekt boven mijn bed of in de kinderkamer. Kan daar vannacht nog iemand slapen?", a: "Schuif het bed weg van de natte plek en zet er een emmer onder, met een handdoek erin zodat het niet spat. Slaap er niet als het plafond opbolt, scheurt of doorhangt, of als het water bij een lamp, rookmelder of stopcontact komt. Zet dan de groep van die kamer uit in de meterkast en slaap in een andere kamer. Blijft het bij een paar druppels op één plek en is het plafond verder strak en droog, dan is een andere plek in de kamer meestal genoeg tot het gemaakt is. Stuur een foto van de natte plek via WhatsApp, ook 's avonds. Dan zeg ik wat ik ervan denk en wanneer ik kan komen." },
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
    h1: "Spoed dakreparatie: pannen, lood en nokvorsten hersteld",
    kort: "Gebroken pannen, lood bij schoorsteen of dakraam, losse nokvorsten.",
    metaTitle: "Spoed dakreparatie regio Den Bosch | Spoed Dak Service",
    metaDescription:
      `Spoed dakreparatie: losse pan, lood of nokvorst? Vaak nog dezelfde dag in de regio Den Bosch. Een losse pan of nokvorst ${KLEIN_PRIJS}.`,
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
      { v: "Wat kost een dakreparatie?", a: `Dat hangt af van wat er kapot is. Een paar losse of gebroken pannen vervangen, of een nokvorst weer vastzetten: ${KLEIN_PRIJS}. Een lek opsporen en dichtmaken: ${inclBtw("daklekkage")}. De nokvorsten opnieuw aansmeren met dakmortel: ${inclBtw("nok_repareren")}. Gaat het om lood of een groter stuk dak, stuur dan een foto, dan hoor je wat het kost. Je hoort de vaste prijs voordat ik begin.` },
      { v: "Er komt een storm aan en er ligt al een pan scheef. Kun je die voor de storm nog vastzetten?", a: "Is er voor de storm nog een droge dag, dan lukt dat vaak. Stuur meteen een foto van je dak vanaf de straat via WhatsApp, dan zeg ik eerlijk of het nog voor de storm kan en wat het kost. Vlak voor een storm krijg ik veel vragen tegelijk, en een dak dat al open ligt of waar het binnen nat wordt, gaat dan voor. Lukt het niet meer, ga dan zelf niet het dak op en blijf bij harde wind uit de buurt van die kant van het huis. Kijk na de storm vanaf de straat of de pan er nog ligt, en stuur me een nieuwe foto." },
      { v: "Er is een oude schoorsteen van mijn dak gehaald en nu lekt het op die plek. Kun je dat dichtmaken?", a: "Ja. Vaak zijn er in het gat pannen gelegd die net niet passen, of sluiten de panlatten niet goed aan op de rest van het dak. Soms ligt er nog oud lood van de schoorsteen. Ik kijk op zolder en buiten waar het water binnenkomt, leg er pannen in die bij je dak passen en maak de aansluiting weer goed. Is het weghalen pas gedaan, vraag dan eerst aan wie het deed of die het oplost. Stuur een foto van de plek vanaf de straat en van de natte plek binnen, dan hoor je vooraf wat het kost." },
      { v: "De pannen langs de zijkant van mijn dak zitten los. Kun je die vastzetten?", a: "Ja. De pannen langs de zijkant, boven de kopgevel, heten gevelpannen. Ze hebben een omgezette rand die over de windveer valt, en juist daar trekt de wind bij een storm het hardst aan. Een losse gevelpan zet ik weer op zijn plek vast, en een kapotte vervang ik door een die bij je dak past. Ik kijk daarbij ook of de windveer eronder nog stevig is, want is die zacht of los, dan houdt een gevelpan het niet lang. Ligt er een pan half over de rand, blijf dan bij harde wind uit de buurt van die kant van het huis. Stuur een foto van de zijkant van je dak vanaf de straat, dan hoor je vooraf wat het kost." },
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
    zieOok: [ { label: "Rot dakbeschot vervangen", href: "/diensten/dakbeschot-vervangen/" } ],
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
      { v: "Er ligt grind op mijn platte dak. Kun je dan wel zien waar het lekt?", a: "Ja, maar het kost wat meer zoekwerk. Het grind ligt los op de dakbedekking en beschermt die tegen de zon. Het lek zelf zit eronder, bij een naad, de rand, de afvoer of tegen de muur. Op de plekken waar ik het lek verwacht, schuif ik het grind opzij, maak ik de bedekking schoon en repareer ik het. Daarna gaat het grind er weer op. Zit de afvoer vol grind of slib, dan maak ik die meteen vrij. Je hoort vooraf wat het kost." },
      { v: "Het hout onder de dakbedekking van mijn aanbouw of garage is zacht of rot. Vervang je dat ook?", a: "Ja, als het nodig is. Heeft een plat dak lang gelekt, dan kan het houten dakbeschot onder de dakbedekking zacht worden of gaan rotten. Je ziet dat soms aan een kuil in het dak waar na een bui water blijft staan, of binnen aan een donkere plek op de onderkant van het hout. Ik haal de dakbedekking op die plek weg, vervang de rotte platen en leg er daarna weer nieuwe dakbedekking op. Is het hout nog stevig, dan is dat niet nodig. Stuur een foto van het dak en, als je die kunt zien, van de onderkant, dan hoor je vooraf wat het kost." },
      { v: "Mijn schuine dak komt uit op het platte dak van mijn aanbouw, en precies daar lekt het. Doe je dat ook?", a: "Ja. Waar de onderste rij pannen boven een plat dak eindigt, ligt meestal een strook lood of loodvervanger die het water van de pannen over de rand van het platte dak leidt, en daar loopt de dakbedekking een stukje omhoog. Is die strook gescheurd of te kort, of zit de dakbedekking er niet meer goed tegenaan, dan loopt het water bij een flinke bui precies in die hoek naar binnen. Ik kijk eerst waar het water binnenkomt en maak daarna die aansluiting weer dicht. Stuur een foto van die plek en van de natte plek binnen, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "dakbeschot-vervangen",
    titel: "Rot dakbeschot vervangen",
    h1: "Rot dakbeschot vervangen onder het platte dak van je schuur, garage of aanbouw",
    kort: "Zacht of rot hout onder de dakbedekking van je schuur, garage of aanbouw vervangen, en het dak weer dicht.",
    metaTitle: "Rot dakbeschot vervangen (plat dak) | Spoed Dak Service",
    metaDescription:
      "Veert het platte dak van je schuur, garage of aanbouw, of is het hout eronder zacht? Dan vervang ik het rotte dakbeschot en maak ik het dak weer dicht. Stuur een foto.",
    icoon: "🪵",
    geenAfbeelding: true,
    zieOok: [ { label: "Platte daken repareren", href: "/diensten/platte-daken/" } ],
    intro:
      "Het dakbeschot is de laag planken of platen waar de dakbedekking van een plat dak op ligt. Heeft het dak een tijd op één plek gelekt, dan wordt dat hout nat, en na een tijd zacht of rot. Een lapje op de dakbedekking helpt dan niet meer, want daaronder blijft het hout wegrotten. Ik haal de bedekking op die plek weg, vervang het rotte hout en maak het dak daarna weer dicht. Je hoort vooraf wat het kost.",
    punten: [
      "Rot of zacht dakbeschot onder dakleer of een andere dakbedekking vervangen",
      "Op het platte dak van een schuur, garage, berging of aanbouw",
      "Eerst kijken hoe groot de rotte plek is, ook van binnen",
      "Daarna de dakbedekking op die plek weer dicht",
      "Eerlijk advies: een stuk vervangen of het hele dak opnieuw",
    ],
    faq: [
      { v: "Hoe weet ik of het dakbeschot rot is?", a: "Van binnen zie je het vaak het eerst: planken of platen die donker zijn, vlekken hebben of schimmelig ruiken. Van buiten merk je het aan een plek die veert of inzakt, of aan een kuil waar na elke bui water blijft liggen. Ga niet op een dak staan dat doorzakt. Kijk liever met een zaklamp van binnen naar de onderkant van het dak en stuur me daar een foto van." },
      { v: "Moet het hele dak eraf als er een stuk rot is?", a: "Niet altijd. Is het hout op één plek rot, bijvoorbeeld rond een lek bij de rand of de afvoer, dan vervang ik alleen dat stuk en maak ik de dakbedekking daar weer dicht. Is het hout op veel plekken zacht, of is de dakbedekking zelf ook op, dan zeg ik eerlijk dat het slimmer is om het dak in één keer opnieuw te doen." },
      { v: "Hoe komt het dat het hout rot is geworden?", a: "Meestal door een lek dat lang niet is opgemerkt: een scheur of losse naad in de dakbedekking, een rand die loslaat of een afvoer die verstopt zat, waardoor er water bleef staan. Ook condens kan het hout van binnen nat houden, zeker in een schuur of garage zonder ventilatie. Daarom kijk ik bij het vervangen ook waar het water vandaan kwam." },
      { v: "Wat kost het om dakbeschot te vervangen?", a: "Dat hangt af van hoe groot de rotte plek is, hoe goed ik erbij kan en wat er op het dak ligt. Stuur een foto van het dak en, als het kan, van de binnenkant van je schuur of garage via WhatsApp. Dan hoor je vooraf wat het kost." },
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
      "Stormschade aan je dak: weggewaaide pannen, een losse nok of lekkage? Ik dek eerst af en herstel daarna netjes, met foto's voor je verzekering. Regio Den Bosch.",
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
        a: "Weggewaaide of verschoven dakpannen laten regen binnen, dus dat is spoed. Bel of app me met een foto, dan hoor je wanneer ik kan komen. Eerst dicht ik de open plek en dek ik af, daarna herstel ik het netjes.",
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
      { v: "Na een hagelbui is er iets kapot op mijn dak. Kom je daar ook voor?", a: "Ja. Gewone dakpannen kunnen meestal flink wat hagel hebben, maar een lichtkoepel, een glazen pan, een dakraam of het dak van een veranda raakt sneller beschadigd. Kijk na de bui vanaf de straat en vanuit een raam boven of je scheuren, gaten of losse stukken ziet, en kijk bij de volgende bui op zolder of het droog blijft. Lekt het, zet dan een emmer neer en stuur me een foto. Een gebroken koepel of een open plek dek ik eerst af, zodat het binnen droog blijft. Is het glas van een dakraam gebroken, dan dek ik het af en zeg ik eerlijk wie het glas het beste kan vervangen. Hagelschade valt vaak onder je opstalverzekering, dus maak foto's voordat er iets wordt weggehaald." },
      { v: "Bel ik na een storm eerst mijn verzekeraar of eerst jou?", a: "Ligt je dak open of komt er water binnen, bel of app dan eerst mij, want de schade beperken gaat voor. Je mag de schade in de regel eerst laten beperken, ook voordat je verzekeraar ernaar heeft gekeken. Maak wel eerst foto's van de schade, binnen en vanaf de straat, voordat er iets wordt weggehaald. Meld het daarna zo snel als je kunt bij je verzekeraar. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je kunt meesturen. Is het binnen droog en ligt er alleen een pan scheef, dan kun je ook eerst je verzekeraar bellen en vragen hoe zij het willen. Sommige verzekeraars sturen een eigen herstelbedrijf." },
      { v: "Na de storm ligt een zonnepaneel scheef of is het losgeraakt. Kom je daarvoor?", a: "Aan de panelen zelf kom ik niet, dat doet je installateur. Hangt een paneel los boven de stoep, de oprit of de tuin, blijf er dan onder weg en zorg dat niemand eronder loopt. Bel bij direct gevaar 112. Is er bij de storm ook een pan onder of naast de panelen gebroken of verschoven, of lekt het sinds de storm op zolder, dan kijk ik daarnaar. Ligt die pan onder een paneel, dan moet het paneel eerst los, en dat doet je installateur. Stuur me een foto van je dak vanaf de straat en, als het binnen nat is, van de natte plek." },
      { v: "Wanneer telt het voor mijn verzekering als storm?", a: "Dat staat in je polis. Bij veel verzekeraars is het pas storm bij windkracht 7 of meer, een windsnelheid van zo'n 14 meter per seconde. Waait er bij zo'n storm een pan van je dak of raakt de nok los, dan valt de schade vaak onder je opstalverzekering, en de schade binnen door de regen die daarna binnenkwam meestal ook. Lag een pan al lang scheef of was het lood al op, dan zien ze dat eerder als slijtage. Maak meteen foto's van je dak vanaf de straat en van de schade binnen, en schrijf de datum van de storm erbij. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving die je kunt meesturen." },
      { v: "Na de storm staat mijn oude antenne of schotel scheef. Haal je die weg?", a: "Ja. Een mast die scheef staat, kan bij de volgende windstoot verder losscheuren en pannen of het lood rond de schoorsteen beschadigen. Blijf uit de buurt van de kant van het huis waar hij naar beneden kan komen, en ga niet zelf het dak op. Gebruik je de antenne of schotel niet meer, dan haal ik de mast, de beugel en de kabel weg en maak ik het dak op die plek weer dicht met een pan die past. Zat de mast met een band aan de schoorsteen vast, dan kijk ik meteen naar het lood daar. Een foto vanaf de straat laat zien hoe hij erbij staat." },
    ],
  },
  {
    slug: "dakgoot-vervangen",
    titel: "Dakgoot vervangen",
    vanafPrijs: "stuur een foto",
    zieOok: [
      { label: "Regenpijp vervangen", href: "/diensten/regenpijp-vervangen/" },
      { label: "Goten reinigen", href: "/diensten/goten-reinigen/" },
      { label: "Dakgoot solderen", href: "/diensten/dakgoot-solderen/" },
      { label: "Bakgoot repareren", href: "/diensten/bakgoot-repareren/" },
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
      { v: "Kun je een lekkende goot ook van binnen coaten in plaats van hem te vervangen?", a: "Vaak wel, als de goot zelf nog stevig is en goed hangt. Lekt een zinken goot op een paar plekken of wordt het zink dun, dan maak ik de goot schoon en droog en breng ik er van binnen een coating op. Dan blijft het water in de goot. Lekt hij alleen bij één naad, dan is solderen vaak genoeg. Is de goot doorgeroest, hangt hij door of zit hij los van de beugels, dan helpt coaten niet, en dan zeg ik eerlijk dat repareren of vervangen beter is. Coaten doe ik op een droge dag, want op een natte goot hecht het niet. Stuur een foto van de goot vanaf de straat en van de plek waar het druppelt, dan hoor je vooraf wat het kost." },
      { v: "Kun je ook alleen één stuk van mijn dakgoot vervangen?", a: "Vaak wel. Is de goot op één plek doorgeroest, gescheurd of geknikt, bijvoorbeeld na een storm of door een ladder, en is de rest nog goed, dan vervang ik alleen dat stuk. Bij een zinken goot soldeer ik het nieuwe stuk aan de rest vast, bij kunststof gaat het met een passend verbindingsstuk. Is de goot over een groot stuk dun, bros of lek, dan houdt een nieuw stuk het niet lang, en dan zeg ik eerlijk dat een nieuwe goot slimmer is. Stuur een foto van de plek en van de hele goot vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Mijn dakgoot loopt door naar de buren en lekt op de grens. Wie regelt de reparatie?", a: "Dat regel je het best samen. Bij rijtjeshuizen hangt de goot vaak in één lijn over meerdere huizen, met een naad op de grens. Lekt het precies daar, dan gaat de reparatie over het stuk van jullie allebei, en dan is het handig om vooraf met je buren af te spreken wie wat betaalt. Ik kijk over de hele lengte waar het lek zit, maak foto's die je aan je buren kunt laten zien en zeg eerlijk aan welke kant het zit. Jullie horen vooraf wat de reparatie kost. Stuur me een foto van de goot vanaf de straat via WhatsApp." },
      { v: "Mijn oude goot is grijs en hard, geen zink en geen kunststof. Kan daar asbest in zitten?", a: "Dat kan. Bij huizen van voor 1994 hangt soms nog een goot of bakgoot van asbestcement. Die is grijs, voelt hard en wat ruw aan, en is vaak dikker dan een goot van zink of kunststof. In zo'n goot boor of zaag ik niet. Laat hem eerst onderzoeken, en laat het weghalen het liefst over aan een gecertificeerd asbestbedrijf. Bij je gemeente hoor je wat er voor jou geldt. Is de oude goot weg, dan hang ik er een nieuwe goot van zink of kunststof op, met nieuwe beugels en een goede aansluiting op de regenpijp. Twijfel je, stuur me dan een foto van de goot en van een uiteinde of naad. Je hoort vooraf wat het kost." },
      { v: "Kun je een dakgoot ook in de winter repareren of vervangen?", a: "Meestal wel, op een droge dag. Een nieuwe goot ophangen of een stuk vervangen kan ook als het koud is. Solderen, lijmen of coaten gaat alleen op een droge goot zonder ijs, dus bij regen, sneeuw of vorst wacht ik met dat deel. Lekt je goot nu en is het te nat, dan maak ik hem vaak eerst leeg, zodat het water weer naar de regenpijp loopt, en kom ik op een droge dag terug voor de reparatie. Wacht liever niet tot het voorjaar: water dat in een lekke of doorgezakte goot blijft staan, bevriest en duwt een naad of hoek verder open. Stuur een foto van de goot vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Mijn dakgoot lekt. Wat kan ik doen tot je er bent?", a: "Zet een bak of emmer onder de plek waar het druppelt, zeker boven een voordeur, pad of oprit, want bij vorst wordt het daar glad. Komt het water binnen, bovenin de muur of langs een kozijn, haal dan spullen weg van die muur en stuur me meteen een foto. Ga niet zelf met een ladder tegen de goot staan en smeer de naad niet dicht met kit, want die moet er bij de reparatie weer uit. Maak tijdens of vlak na een bui een foto van de plek waar het druppelt, daar heb ik het meest aan. Meer tips staan in het artikel over een lekkende dakgoot tijdelijk oplossen. Je hoort vooraf wat de reparatie kost." },
      { v: "Mijn goot lekt maar een klein beetje. Kan dat wachten?", a: "Valt de druppel buiten langs de gevel op de stoep of het terras, en blijft het binnen droog, dan kan het meestal een paar weken wachten. Wacht niet tot na de winter: water dat bij een lekke naad of hoek in de goot blijft staan, bevriest en duwt die verder open, en dan wordt een kleine druppel een straal langs je muur. Zie je al een donkere of groene streep op de gevel, of wordt de muur binnen vochtig, dan lekt het al langer. Druppelt het boven een voordeur of pad, zet er dan een bak onder, want bij vorst wordt het daar glad. Stuur een foto van de plek waar het druppelt, het liefst tijdens een bui. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "dakgoot-coaten",
    titel: "Dakgoot coaten",
    vanafPrijs: "stuur een foto",
    h1: "Dakgoot van binnen coaten: een lekkende goot weer dicht, zonder nieuwe goot",
    kort: "Een goot die nog stevig hangt maar op een paar plekken lekt of dun wordt, van binnen gecoat, zodat het water weer in de goot blijft.",
    metaTitle: "Dakgoot coaten bij lekkage | Spoed Dak Service",
    metaDescription:
      "Lekt je zinken goot of bakgoot op een paar plekken, of wordt het zink dun? Vaak kan hij van binnen gecoat worden in plaats van vervangen. Stuur een foto voor de prijs.",
    icoon: "🛠",
    geenAfbeelding: true,
    zieOok: [
      { label: "Dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
      { label: "Goten reinigen", href: "/diensten/goten-reinigen/" },
      { label: "Dakgoot solderen", href: "/diensten/dakgoot-solderen/" },
      { label: "Bakgoot repareren", href: "/diensten/bakgoot-repareren/" },
    ],
    intro:
      "Lekt je zinken goot op een paar plekken, of wordt het zink dun op de plek waar altijd water en blad bleven liggen, terwijl de goot zelf nog stevig hangt? Dan hoeft hij er vaak niet uit. Ik maak de goot leeg, schoon en droog, en breng er van binnen een coating op, over het stuk dat lekt of over de hele lengte. Zo blijft het regenwater in de goot en loopt het niet meer langs je gevel naar beneden. Hangt de goot door, zit hij los van de beugels of is het zink op, dan helpt coaten niet, en dat zeg ik je eerlijk.",
    punten: [
      "Goot eerst leeg, schoon en droog, zodat de coating goed hecht",
      "Goot van binnen gecoat over het stuk dat lekt, of over de hele lengte",
      "Ook voor een zinken bakgoot in de rand van het dak",
      "Eerlijk advies: solderen, coaten of toch een nieuwe goot",
      "Je hoort vooraf wat het kost, de troep gaat mee",
    ],
    faq: [
      { v: "Wat kost het om een dakgoot te laten coaten?", a: "Dat hangt af van hoe lang de goot is, of ik alleen een stuk of de hele lengte coat en hoe goed ik erbij kan. Stuur een foto van de goot vanaf de straat en van de plek waar het druppelt via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Coaten of solderen?", a: "Lekt een zinken goot alleen bij één naad, dan is solderen vaak genoeg. Lekt hij op meer plekken, of wordt het zink over een stuk dun, dan is coaten vaak slimmer, omdat ik dan dat hele stuk in één keer dichtmaak. Ik kijk eerst wat er aan de hand is en zeg eerlijk wat ik zou doen." },
      { v: "Wanneer helpt coaten niet?", a: "Als de goot doorhangt, los zit van de beugels of zo dun is dat er gaten in vallen. Dan blijft het water op de verkeerde plek staan of houdt de ondergrond de coating niet. Dan hang ik de goot eerst weer op afschot naar de regenpijp, of zeg ik eerlijk dat een nieuwe goot beter is. Is het hout achter of onder de goot zacht, dan moet dat eerst hersteld worden." },
      { v: "Kun je een goot ook in de winter coaten?", a: "Alleen op een droge dag zonder vorst, want op een natte of bevroren goot hecht het niet. Lekt het nu en is het te koud of te nat, dan kan ik de goot vaak eerst leegmaken, zodat het water weer naar de regenpijp loopt, en kom ik op een droge dag terug om te coaten." },
      { v: "Kun je ook een zinken bakgoot van binnen coaten?", a: "Vaak wel. Een bakgoot ligt in de rand van het dak, en lekt hij, dan komt het water vaak binnen in de muur of in de kamer eronder. Is het zink nog stevig, dan kan coaten een goede reparatie zijn. Ik kijk eerst of het hout eronder nog gezond is." },
      { v: "Kom je ook buiten Den Bosch om een goot te coaten?", a: "Ja, in mijn werkgebied, onder andere in Boxtel, Veghel, Vught, Rosmalen en Oss. Coaten plan ik met je in op een droge dag. Stuur eerst een foto van de goot, dan hoor je wanneer ik kan komen." },
      { v: "Hoe gaat het coaten van een dakgoot in zijn werk?", a: "Eerst maak ik de goot leeg, ook de uitloop naar de regenpijp, en maak ik de binnenkant schoon. Daarna moet de goot goed droog zijn. Dan breng ik aan de binnenkant een laag aan die de goot weer waterdicht maakt, op het stuk dat lekt of over de hele lengte. Die laag moet drogen voordat er weer water door mag lopen, daarom doe ik dit op een droge dag zonder vorst. Stuur een foto van de goot vanaf de straat en van de plek waar het druppelt, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "dakgoot-solderen",
    titel: "Dakgoot solderen",
    vanafPrijs: "stuur een foto",
    h1: "Zinken dakgoot solderen: een lekkende naad, hoek of uitloop weer dicht",
    kort: "Lekt je zinken goot of bakgoot bij een naad, een hoek of de uitloop? Vaak is opnieuw solderen genoeg en hoeft de goot er niet uit.",
    metaTitle: "Zinken dakgoot solderen bij lekkage | Spoed Dak Service",
    metaDescription:
      "Lekt je zinken dakgoot of bakgoot bij een naad, een hoek of de uitloop? Vaak is opnieuw solderen genoeg en hoeft de goot er niet uit. Stuur een foto voor de prijs.",
    icoon: "🛠",
    geenAfbeelding: true,
    zieOok: [
      { label: "Dakgoot van binnen coaten", href: "/diensten/dakgoot-coaten/" },
      { label: "Dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
      { label: "Bakgoot repareren", href: "/diensten/bakgoot-repareren/" },
    ],
    intro:
      "Druppelt je zinken goot bij elke bui op dezelfde plek, bij een naad, een hoek of de uitloop naar de regenpijp? Dan is daar meestal de soldeernaad opengegaan. Zink zet uit als het warm is en krimpt als het koud is, en na jaren laat zo'n naad los. Vaak hoeft de goot er dan niet uit: ik maak de goot leeg en droog, schuur de naad schoon en soldeer hem opnieuw dicht. Lekt de goot op veel plekken of is het zink over een groot stuk dun, dan helpt solderen niet meer. Is de goot verder nog stevig, dan kan van binnen coaten nog, en is het zink echt op, dan is een nieuwe goot beter. Dat zeg ik je eerlijk als ik heb gekeken. Je hoort vooraf wat het kost.",
    punten: [
      "Lekkende naad, hoek, eindstuk of uitloop in een zinken goot opnieuw solderen",
      "Ook in een zinken bakgoot in de rand van het dak",
      "Goot eerst leeg en droog, naad schoon geschuurd, zodat het soldeer goed hecht",
      "Eerlijk advies: solderen, van binnen coaten of toch een nieuwe goot",
      "Je hoort vooraf wat het kost, de troep gaat mee",
    ],
    faq: [
      { v: "Wat kost een dakgoot solderen?", a: "Dat hangt af van hoeveel naden of hoeken lek zijn, hoe lang de goot is en hoe goed ik erbij kan. Stuur een foto van de plek waar het druppelt en van de goot vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Hoe zie ik dat een naad lekt en de goot niet gewoon vol zit?", a: "Een volle goot loopt bij een bui over de voorkant over, vaak over een groot stuk. Een lekke naad druppelt op één vaste plek onder de goot, en blijft dat vaak nog een tijd doen als de bui al voorbij is. Daar zie je soms ook een donkere streep of groene aanslag op de gevel. Twijfel je, maak dan tijdens of vlak na een bui een foto vanaf de straat." },
      { v: "Kun je een kunststof goot ook solderen?", a: "Nee, solderen kan alleen bij zink. Bij een kunststof goot lekt het meestal bij een verbinding, een hoek of het eindstuk, en dan maak ik die verbinding opnieuw of vervang ik dat stuk. Twijfel je of je goot van zink of kunststof is, stuur dan een foto." },
      { v: "Kan ik de naad niet zelf met kit dichtmaken?", a: "Op een natte of vuile goot hecht kit slecht, en vaak lekt het na een paar maanden weer. Bovendien moet de kit er helemaal af voordat ik kan solderen, en dat is extra werk. Wil je tot de reparatie het ergste opvangen, zet dan een emmer onder de druppel. Ga er niet zelf voor op een ladder staan." },
      { v: "Kun je ook in de winter solderen?", a: "Op een droge dag meestal wel. De goot moet leeg en droog zijn, en bij regen, sneeuw of ijs in de goot gaat het niet. Lekt het nu en is het te nat, dan maak ik de goot vaak eerst leeg, zodat het water weer naar de regenpijp loopt, en kom ik op een droge dag terug om te solderen." },
      { v: "Wanneer helpt solderen niet meer?", a: "Als het zink over een groot stuk dun is, als er gaatjes in de bodem zitten of als de goot op veel plekken lekt. Dan komt er na het solderen steeds ergens anders een lek bij. Is de goot verder nog stevig, dan kan van binnen coaten een oplossing zijn. Is het zink echt op, dan is een nieuwe goot slimmer. Dat zeg ik je eerlijk als ik heb gekeken." },
    ],
  },
  {
    slug: "bakgoot-repareren",
    titel: "Bakgoot repareren",
    vanafPrijs: "stuur een foto",
    h1: "Bakgoot repareren: een lekkende zinken bakgoot weer dicht",
    kort: "Lekt je bakgoot in de rand van het dak? Ik soldeer de naad of uitloop, of coat de goot van binnen, zodat het water niet meer de muur in loopt.",
    metaTitle: "Bakgoot lekt? Bakgoot repareren | Spoed Dak Service",
    metaDescription:
      "Lekt je zinken bakgoot en is het nat bovenin de muur? Vaak is een naad solderen of de goot van binnen coaten genoeg. Stuur een foto, dan hoor je de prijs.",
    icoon: "🛠",
    geenAfbeelding: true,
    zieOok: [
      { label: "Dakgoot solderen", href: "/diensten/dakgoot-solderen/" },
      { label: "Dakgoot van binnen coaten", href: "/diensten/dakgoot-coaten/" },
      { label: "Goten reinigen", href: "/diensten/goten-reinigen/" },
    ],
    intro:
      "Een bakgoot hangt niet aan beugels voor het dak, maar zit in de rand van het dak zelf, bovenop de muur: een houten bak met zink erin. Lekt zo'n goot, dan loopt het water niet langs de buitenkant naar beneden, maar vaak de muur of het plafond in. Je ziet dan een natte plek bovenin de muur, vlak onder het plafond, of een vochtige rand op zolder bij de voet van het dak. Meestal zit het lek bij een naad, een hoek of de uitloop naar de regenpijp. Die soldeer ik opnieuw, of ik coat de goot van binnen als het zink op meer plekken dun wordt. Is het zink op of het hout eronder zacht geworden, dan zeg ik dat eerlijk, want dan helpt solderen of coaten niet lang.",
    punten: [
      "Lekkende naad, hoek of uitloop in een zinken bakgoot opnieuw solderen",
      "Een bakgoot die op meer plekken dun wordt van binnen coaten",
      "Goot eerst leeg en droog, zodat soldeer en coating goed hechten",
      "Meteen een blik op de onderste pannen en het lood boven de goot",
      "Je hoort vooraf wat het kost, de troep gaat mee",
    ],
    faq: [
      { v: "Wat kost een bakgoot repareren?", a: "Dat hangt af van wat er lek is, hoe lang de goot is en hoe goed ik erbij kan. Eén naad solderen is een andere klus dan de hele bak van binnen coaten. Stuur een foto van de goot vanaf de straat en van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Het is nat bovenin mijn muur, vlak onder het plafond. Komt dat van de bakgoot?", a: "Dat kan. Een bakgoot ligt bovenop de muur, dus als hij lekt, trekt het water vaak eerst in de muur en zie je het binnen bovenin, of op zolder langs de voet van het dak. Het kan ook water zijn dat achter een gewone goot langs loopt, of lood boven een raam dat los zit. Kijk tijdens of vlak na een bui of de plek groter wordt, en of het buiten op dezelfde hoogte nat is. Stuur me een foto van binnen en van buiten, dan zeg ik eerlijk wat ik denk dat het is." },
      { v: "Solderen of van binnen coaten?", a: "Lekt de bakgoot op één of twee plekken, bij een naad, een hoek of de uitloop, en is het zink verder nog stevig, dan is solderen meestal genoeg. Lekt hij op meer plekken een beetje, of wordt het zink dun op de plek waar altijd water bleef staan, dan maak ik de goot schoon en droog en coat ik hem van binnen. Is het zink op of het hout eronder zacht, dan helpt geen van beide lang, en dan zeg ik dat eerlijk." },
      { v: "Kan een lekkende bakgoot wachten tot het voorjaar?", a: "Liever niet. Het water loopt bij een bakgoot niet naar buiten maar de muur of het hout in, en bij vorst kan water dat in een naad staat die naad verder openduwen. Solderen en coaten doe ik op een droge dag. Is het nu te nat, dan maak ik de goot vaak eerst leeg, zodat het water weer naar de regenpijp loopt, en kom ik op een droge dag terug voor de reparatie." },
      { v: "Maak je een bakgoot ook schoon?", a: "Ja. Een bakgoot maak ik net zo leeg als een gewone goot, met de uitloop naar de regenpijp vrij. Juist bij een bakgoot is dat belangrijk: blijft er blad liggen, dan staat het water hoger en zoekt het sneller een weg de muur in. Bij het leegmaken kijk ik meteen naar de naden en de hoeken. Zie ik iets wat lekt, dan laat ik het je zien met een foto, en hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "dakcoating",
    verborgen: true,
    titel: "Verweerde dakpannen",
    vanafPrijs: "stuur een foto",
    h1: "Verweerde of poreuze dakpannen: vervangen of renoveren",
    kort: "Pannen die op zijn vervangen, en eerlijk advies over de rest van je dak.",
    metaTitle: "Verweerde dakpannen vervangen | Spoed Dak Service",
    metaDescription:
      "Zijn je dakpannen verweerd, poreus of gebroken? Dan vervang ik de pannen die op zijn, of adviseer ik eerlijk een renovatie. Stuur een foto van je dak.",
    icoon: "🛡",
    intro:
      "Zijn je dakpannen verweerd, nemen ze water op of laten ze schilfers los? Dan kijk ik eerlijk wat er nodig is. Pannen die op zijn vervang ik, en is het hele dak aan het eind, dan is een renovatie de betere stap. Een lekkende dakgoot kan ik van binnen coaten.",
    punten: [
      "Poreuze of gebroken pannen vervangen",
      "Een losse nok of los lood weer vast",
      "Een lekkende dakgoot van binnen coaten of solderen",
      "Eerlijk advies: repareren, vervangen of renoveren",
    ],
    faq: [
      { v: "Mijn pannen zijn verweerd. Moeten ze allemaal vervangen worden?", a: "Niet altijd. Vaak zijn een paar pannen echt op en is de rest nog goed. Dan vervang ik alleen die pannen. Nemen veel pannen water op, of breken ze bij vorst, dan is een renovatie van het dakvlak slimmer. Hoe je dat ziet, lees je in het artikel over poreuze dakpannen. Stuur me gerust een foto van je dak vanaf de straat." },
      { v: "Kun je een lekkende dakgoot van binnen coaten?", a: "Ja. Is een zinken goot of bakgoot verder nog stevig maar lekt hij op een paar plekken, dan kan ik de dakgoot van binnen coaten of een naad solderen. Meer lees je op de pagina over dakgoot coaten." },
    ],
  },
  {
    slug: "dak-reinigen",
    verborgen: true,
    titel: "Dak reinigen",
    h1: "Daken schoonmaken of ontmossen doe ik niet, wel je goten en de reparatie",
    kort: "Ontmossen doe ik niet. Wel de goten leegmaken, en pannen, nok of lood repareren die door mos of vorst kapot zijn.",
    metaTitle: "Dak ontmossen doe ik niet | Spoed Dak Service",
    metaDescription:
      "Daken schoonmaken of ontmossen doe ik zelf niet. Wel maak ik je goten leeg en repareer ik pannen, de nok of het lood als die door mos of vorst kapot of los zijn.",
    icoon: "🧽",
    intro:
      "Daken schoonmaken of ontmossen doe ik zelf niet. Wat ik wel doe: je goten en de uitloop naar de regenpijp leegmaken, zodat het mos dat van je dak spoelt het water niet tegenhoudt, en pannen, de nok of het lood repareren of vervangen als die kapot of los zijn. Laat je je dak door iemand anders schoonmaken, vraag dan of die met lage druk werkt.",
    punten: [
      "Goten en de uitloop naar de regenpijp leegmaken",
      "Gebroken of poreuze pannen vervangen",
      "Een losse nok of los lood weer vast",
      "Daken schoonmaken of ontmossen: dat doe ik niet",
    ],
    faq: [
      { v: `Haal jij het mos van mijn dak?`, a: `Nee, daken schoonmaken of ontmossen doe ik niet. Wel maak ik je goten leeg, en repareer ik pannen, de nok of het lood als die door mos of vorst kapot of los zijn. Stuur me een foto van je dak vanaf de straat, dan zeg ik eerlijk wat ik zie.` },
      { v: `Mijn dak is net schoongespoten en nu lekt het. Kom je daarvoor?`, a: `Ja. Bij schoonspuiten kan een pan breken, kan de specie onder de nok losraken of komt er water onder de pannen. Ik zoek waar het water binnenkomt en maak het dicht. Je hoort vooraf wat het kost.` },
      { v: `Zit mijn goot vol mos van het dak?`, a: `Dat gebeurt vaak, zeker aan de noordkant en onder bomen. Brokjes mos spoelen bij elke bui de goot in en zetten de uitloop naar de regenpijp dicht. Eén goot leegmaken, bijvoorbeeld alleen de voorgoot, kost ${inclBtw("goot_reinigen")}. Voor beide goten hoor je vooraf de prijs.` },
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
      { v: "Heb je een passende pan bij je, of moet die besteld worden?", a: "Stuur vooraf een foto van je dak vanaf de straat en, als het lukt, een foto van dichtbij vanuit een raam of op zolder. Dan zie ik meestal welke pan het is en neem ik een passende pan mee. Bij oudere daken is niet elke pan nog te koop. Dan zoek ik een pan die in vorm en maat past, en die kan een iets andere kleur hebben dan de oude. Moet de pan besteld worden en lekt het nu, dan maak ik het eerst waterdicht en kom ik terug voor de nette reparatie." },
      { v: "Mijn ventilatiepan is kapot of er komt regen door. Kun je die vervangen?", a: "Ja. Een ventilatiepan is een pan met een rooster of sleuven, zodat er lucht onder de pannen kan. Is hij gebroken, zit het rooster los of ligt hij niet goed in de pannen ernaast, dan kan er bij harde wind regen of stuifsneeuw door naar binnen waaien. Ik vervang hem door een ventilatiepan die bij je dak past. Ik haal hem niet zomaar weg, want hij zit er meestal voor de ventilatie. Een paar druppels onder een hele ventilatiepan na een sneeuwstorm zijn vaak geen lek. Stuur een foto van de pan vanaf de straat en van de plek op zolder, dan hoor je vooraf wat het kost." },
      { v: "Ik heb nog een paar oude dakpannen op zolder of in de schuur liggen. Kun je die gebruiken?", a: "Graag, als ze heel zijn en hetzelfde model zijn als de pannen op je dak. Vaak liggen er nog pannen van de bouw of van een eerdere reparatie, en die passen in vorm en meestal ook in kleur het best bij de rest. Maak er een foto van als je me een foto van je dak stuurt, dan zie ik of ze passen. Zijn ze gebarsten of is het een ander model, dan neem ik een passende pan mee. Je hoort vooraf wat het kost." },
      { v: "Er komen binnenkort zonnepanelen op mijn dak. Kun je eerst de kapotte pannen vervangen?", a: "Ja, en dat is slim om voor het leggen te doen. Onder de panelen kom je later alleen bij een pan als je installateur eerst een paneel losmaakt. Ik vervang gebroken of gescheurde pannen, leg verschoven pannen terug en kijk meteen naar de nok en het lood op dat dakvlak. Plan het een paar weken voordat de installateur komt. Stuur me een foto van je dak vanaf de straat, dan hoor je vooraf wat het kost." },
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
      { v: "Er liggen zonnepanelen tot vlak onder mijn nok. Kun je de nokvorsten dan nog repareren?", a: "Meestal wel. Ik werk dan langs de panelen en ga er niet op staan. Liggen ze zo dicht onder de nok dat ik er niet veilig bij kan, dan moet er eerst een paneel los, en dat laat je doen door je installateur. Daarna zet ik de vorsten vast of vervang ik ze, en kijk ik meteen of de bovenste rij pannen nog goed ligt. Stuur me een foto van je dak vanaf de straat, dan zie ik hoe dicht de panelen bij de nok liggen. Je hoort vooraf wat het kost." },
      { v: "Er ligt na de storm een nokvorst op straat of in de tuin. Is dat spoed?", a: "Ja, bel of app me dan meteen. Mist er een nokvorst, dan ligt het hoogste punt van je dak open, en bij de volgende bui regent het daar naar binnen. Zet op zolder een emmer onder de nok als je daar kunt komen, en kijk vanaf de straat of er nog meer vorsten scheef liggen. Maak daar een foto van. Bewaar de vorst of de stukken, dan zie ik welk type er op je dak ligt. Ga zelf niet het dak op. Is het nodig, dan dek ik de nok eerst af, en daarna zet ik de vorsten weer vast of vervang ik de kapotte. Je hoort vooraf wat het kost." },
      { v: "Mijn huis heeft een schilddak. Repareer je ook de vorsten op de schuine hoeken?", a: "Ja. Bij een schilddak lopen er vanaf de nok schuine hoeken naar beneden, de hoekkepers, en daarop liggen ook vorsten: de hoekvorsten. Die liggen net als de nokvorsten in specie of droog met een klem, en ze kunnen net zo goed losraken. Omdat ze schuin liggen, schuift een losse hoekvorst sneller een stukje naar beneden, en dan zie je vanaf de straat een kier in de rij. Losse hoekvorsten zet ik weer vast of smeer ik opnieuw aan, en een kapotte vervang ik door een die past. Stuur een foto van de hoek vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Moet ik thuis zijn als je mijn nokvorsten komt vastzetten?", a: "Niet altijd. Kan ik er van buiten goed bij, bijvoorbeeld via de straat of een open tuinpad, en hebben we de prijs vooraf afgesproken, dan kan ik een losse nokvorst ook vastzetten terwijl jij aan het werk bent. Stuur me vooraf een foto van je dak vanaf de straat en zeg waar ik mijn ladder kan neerzetten. Wil je dat ik op zolder kijk of het onder de nok al nat is geworden, dan spreken we een moment af dat er iemand thuis is." },
      { v: "Kun je nokvorsten ook aansmeren als het vriest?", a: "Liever niet. Dakmortel moet uitharden zonder vorst, anders hecht hij slecht en brokkelt hij er snel weer af. Ligt er nu een vorst los of mist er een, dan zorg ik eerst dat de nok dicht is, zodat het niet binnen regent, en smeer ik de vorsten op een dag zonder vorst opnieuw aan. Ligt je nok droog, met een strook eronder en een klem per vorst, dan kan ik een losse vorst ook bij koud weer vastzetten, als het dak droog en niet glad is. Stuur een foto van de nok vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Er is één nokvorst gebroken, maar dat model wordt niet meer gemaakt. Wat nu?", a: "Dan zoek ik eerst een vorst die in vorm en kleur zo goed mogelijk past. Lukt dat niet, dan bespreek ik met je wat kan, bijvoorbeeld een vorst van een plek die je vanaf de straat niet ziet naar voren halen en daar een nieuwe neerleggen. Tot die tijd maak ik de open plek in de nok waterdicht, zodat het binnen droog blijft. Bewaar de stukken van de gebroken vorst, dan zie ik welk model het is. Stuur een foto van de nok vanaf de straat via WhatsApp. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "lood-vervangen",
    titel: "Lood vervangen",
    vanafPrijs: "stuur een foto",
    h1: "Lood vervangen bij je schoorsteen, muur of dakraam",
    kort: "Los, gescheurd of opgekruld lood vastzetten of vervangen, zodat het water weer over de pannen loopt.",
    metaTitle: "Schoorsteen lekt? Lood vervangen | Spoed Dak Service",
    metaDescription:
      "Lekt het bij je schoorsteen, langs de muur of bij een dakraam? Vaak zit het lood los of is het gescheurd. Ik zet het vast of vervang het. Stuur een foto, dan hoor je wat het kost.",
    icoon: "🧰",
    geenAfbeelding: true,
    fotos: ["/fotos/open-dak-gescheurd-zink-5927e8.webp", "/fotos/schoorsteen-met-loodslabben-173c1a.webp"],
    zieOok: [
      { label: "Daklekkage opsporen en repareren", href: "/diensten/daklekkage/" },
      { label: "Dakreparatie", href: "/diensten/dakreparatie/" },
      { label: "Lekkend dakraam repareren", href: "/diensten/dakraam-lekkage/" },
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
      { v: "Gebruik je echt lood of loodvervanger?", a: "Meestal loodvervanger. Dat weegt minder dan lood en is goed te vormen rond een schoorsteen, langs een muur of om een dakraam. Wil je liever echt lood, bijvoorbeeld omdat er op je dak al lood ligt of omdat het beter bij een oud huis of een monument past, zeg het dan als je een foto stuurt. Dan werk ik met lood, en je hoort vooraf wat het kost." },
      { v: "Het lekt bij mijn schoorsteen alleen als het hard waait en regent. Is het dan het lood?", a: "Vaak wel. Bij regen met harde wind uit één richting slaat het water tegen de schoorsteen en waait het achter lood dat een stukje los staat, omhoog is gekruld of uit de voeg is gekomen. Bij gewone regen blijft het dan droog. Kijk na zo'n bui op zolder aan welke kant van de schoorsteen het nat is: aan de kant van de goot, langs een zijkant of aan de kant van de nok. Dat zegt vaak al welk stuk lood het is. Soms zit het in de stenen of de voegen zelf, en dat zeg ik dan eerlijk, want metselwerk doe ik niet. Stuur me een foto van de schoorsteen vanaf de straat en van de natte plek, dan hoor je vooraf wat het kost." },
      { v: "Er is lood van mijn dak gestolen. Kun je dat vervangen?", a: "Ja. Ontbreekt er lood rond de schoorsteen, langs een muur of onder een dakraam, dan ligt je dak daar open en loopt het water bij de volgende bui naar binnen. Lekt het al, dan maak ik de plek eerst dicht. Daarna leg ik nieuwe stroken en leg ik de pannen eromheen weer goed. Meestal neem ik loodvervanger, want dat is voor dieven niet interessant. Wil je liever echt lood, dan kan dat ook. Maak foto's van de plek voordat ik begin en doe aangifte, want daar vraagt je verzekeraar vaak om. Stuur me een foto vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Het lekt boven mijn erker of bij de luifel boven de voordeur. Is dat ook lood?", a: "Vaak wel. Waar het dakje van een erker of luifel tegen de gevel zit, ligt een strook lood of zink die met de bovenrand in de muur vastzit en over het dakje valt. Komt die bovenrand los of scheurt de strook in een hoek, dan loopt het water van de gevel erachter naar binnen, en dat zie je boven het raam of naast de deur. Zit de strook los, dan zet ik hem weer vast in de muur. Is hij op, dan vervang ik hem, meestal met loodvervanger en op wens met echt lood. Is het dakje zelf lek of zit het gootje vol, dan kijk ik daar meteen ook naar. Stuur me een foto van het dakje vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Mijn aanbouw heeft een schuin dakje met pannen, en het lekt waar dat dakje tegen het huis zit. Doe je dat ook?", a: "Ja. Op die plek ligt een strook lood of loodvervanger die het water van de gevel over de pannen stuurt. Is de bovenrand uit de muur gekomen of zit er een scheur in, dan herstel ik die strook of leg ik een nieuwe, meestal van loodvervanger en als je dat liever hebt van echt lood. In dezelfde keer leg ik de pannen eronder weer goed. Maak vanuit een raam boven een foto van het dakje en stuur die via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Mijn schoorsteenveger zag dat het lood rond mijn schoorsteen los zit. Kun je dat maken?", a: "Ja. Een schoorsteenveger die vanaf het dak werkt, ziet het lood aan de voet van de schoorsteen van dichtbij, en een strook die los staat, omhoog krult of gescheurd is, valt hem dan op. Vraag of hij er een foto van heeft gemaakt, of maak er zelf een vanaf de straat met de zoom van je telefoon. Zit het lood alleen los, dan zet ik het weer vast. Is het gescheurd of op, dan vervang ik het, meestal met loodvervanger en op wens met echt lood. Is het binnen naast de schoorsteen nog droog, dan is het meestal geen spoed, maar laat het niet de hele winter liggen. Stuur me de foto via WhatsApp, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "dakraam-lekkage",
    titel: "Dakraam lekkage",
    vanafPrijs: "stuur een foto",
    h1: "Lekkend dakraam repareren: de aansluiting op je dak weer dicht",
    kort: "Lekt het bij je dakraam? Meestal zit het in het gootstuk, het lood of een pan ernaast, en die aansluiting maak ik weer dicht.",
    metaTitle: "Dakraam lekt? Lekkage dakraam repareren | Spoed Dak Service",
    metaDescription:
      "Lekt het bij je dakraam? Meestal zit het in het gootstuk, het lood of een pan ernaast, niet in het raam zelf. Ik maak de aansluiting weer dicht. Stuur een foto.",
    icoon: "🪟",
    geenAfbeelding: true,
    zieOok: [
      { label: "Dakraam lekt: zo herken je het", href: "/kennisbank/dakraam-lekt/" },
      { label: "Lood vervangen", href: "/diensten/lood-vervangen/" },
      { label: "Daklekkage opsporen en repareren", href: "/diensten/daklekkage/" },
    ],
    intro:
      "Lekt het bij je dakraam, dan zit het water zelden in het raam zelf. Meestal komt het binnen in de aansluiting tussen het raam en je dak: het gootstuk onder het raam, de stroken langs de zijkanten, het stuk boven het raam of een pan ernaast die niet meer goed aansluit. Ik zoek waar het water binnenkomt en maak die aansluiting weer dicht, zodat het raam er meestal gewoon in kan blijven.",
    punten: [
      "Lek rond het dakraam opgespoord, van buiten en op zolder",
      "Gootstuk, lood of loodvervanger rond het raam vastgezet of vervangen",
      "Pannen naast en boven het raam goed gelegd of vervangen",
      "Blad en vuil boven het raam weggehaald, zodat het water weer om het raam heen loopt",
    ],
    faq: [
      { v: "Wat kost het om een lekkend dakraam te laten repareren?", a: `Zit het lek in de aansluiting rond het raam, dan is het meestal een gerichte lekreparatie: ${inclBtw("daklekkage")}, inclusief het zoeken en het materiaal. Moet er rond het raam nieuw lood of loodvervanger komen, dan hoor je de prijs als je een foto hebt gestuurd. Je weet wat het kost voordat ik begin.` },
      { v: "Moet mijn dakraam eruit als het lekt?", a: "Meestal niet. Vaak zit het in het gootstuk, het lood of een pan naast het raam, en dat herstel ik zonder dat het raam eruit hoeft. Is het hout van het kozijn zacht, of zit er een barst in het glas, dan zeg ik eerlijk dat het raam zelf op is. Dan hoor je wat de mogelijkheden zijn." },
      { v: "Hoe weet ik of het lekt of dat het condens is?", a: "Druppels op het glas of de vensterbank op koude ochtenden, ook als het droog is geweest, zijn meestal condens. Wordt het alleen nat tijdens of na regen, en vooral aan de bovenkant of langs de zijkanten van de betimmering, dan is het eerder een lek. Maak een foto als je het ziet en zeg erbij wat voor weer het was." },
      { v: "Het lekt alleen bij harde regen met wind. Hoe kan dat?", a: "Dan komt het water binnen op een plek die bij gewone regen droog blijft. Harde wind blaast de regen onder een strook langs de zijkant, of onder een pan naast het raam die een klein stukje omhoog staat. Ligt er boven het raam blad of mos, dan kan het water ook opzij onder de pannen worden gestuurd. Ik kijk gericht op die plekken, ook als het op dat moment droog is." },
      { v: "Bij de storm is mijn dakraam opengewaaid of staat het scheef. Wat nu?", a: "Doe het raam van binnen dicht als dat veilig kan, en ga niet het dak op. Maak een foto van binnen en vanaf de straat. Kan het niet meer dicht of komt er regen binnen, bel of app me dan. Ik zorg eerst dat het binnen droog blijft, en kijk daarna of de aansluiting en de pannen rond het raam weer goed liggen. Is een scharnier of het glas kapot, dan hoor je eerlijk dat er een onderdeel of een nieuw raam nodig is. Wat ik doe en wat het kost, hoor je vooraf." },
      { v: "Is een lekkend dakraam spoed?", a: "Druppelt het binnen, of zit de natte plek bij een lamp of stopcontact, dan wel: zet er een emmer onder, zet zo nodig de groep in de meterkast uit en bel of app me met een foto. Is het een vlek die na de bui weer opdroogt, dan kan het vaak een paar dagen wachten." },
      { v: "Het gaat om een raam in een plat dak. Doe je dat ook?", a: "Een raam in een plat dak is meestal een lichtkoepel of lichtstraat. Lekt het daar, dan zit het vaak in de aansluiting op de dakbedekking. Stuur een foto, dan kijk ik mee. In de kennisbank lees je meer over een lekkende lichtkoepel." },
      { v: "Mijn dakraam lekt alleen als er sneeuw op het dak ligt. Hoe kan dat?", a: "Een dakraam steekt een stukje boven de pannen uit, en daar blijft sneeuw tegenaan liggen. Overdag wordt die sneeuw van onderen wat warm en smelt hij, en als het 's nachts weer vriest, ontstaat er boven het raam een randje ijs. Het dooiwater erachter kan dan niet weg en zoekt een weg over de bovenrand van het gootstuk of opzij onder de pannen. Bij gewone regen blijft het dan vaak droog. Veeg de sneeuw niet zelf weg en hak geen ijs los. Vang het water binnen op en stuur me een foto van de natte plek en van het raam vanaf de straat. Na de dooi kijk ik of het gootstuk boven het raam nog goed aansluit en of er blad boven het raam ligt. Je hoort vooraf wat het kost." },
      { v: "Het is alleen nat onder mijn dakraam, op de vensterbank of de muur eronder. Waar zit het dan?", a: "Kijk eerst wanneer het nat wordt. Op koude ochtenden, ook als het droog is geweest, is het vaak condens die langs het glas naar beneden loopt. Wordt het alleen nat tijdens of na regen, dan zit het meestal aan de buitenkant, onder het raam: het gootstuk dat daar over de pannen ligt kan omhoog staan of beschadigd zijn, of de pan eronder is gaan schuiven. Ligt er boven het raam blad of mos, dan kan het water ook langs de zijkant naar de onderkant lopen. Maak bij de volgende bui een foto van de natte plek binnen en, als het lukt, van het raam vanaf de straat. Dan kijk ik gericht onder het raam. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "kilgoot-repareren",
    titel: "Kilgoot repareren",
    vanafPrijs: "stuur een foto",
    h1: "Kilgoot repareren of vervangen: weer een droge hoek",
    kort: "Lekkende kilgoot leeggemaakt, een scheur in het lood of zink hersteld of een versleten kil vervangen, met de pannen erlangs weer goed gelegd.",
    metaTitle: "Kilgoot repareren of vervangen | Spoed Dak Service",
    metaDescription:
      "Lekt het in de hoek waar twee daken samenkomen? Ik maak de kilgoot leeg, herstel het lood of zink of vervang een versleten kil. Stuur een foto voor de prijs.",
    icoon: "🧰",
    geenAfbeelding: true,
    zieOok: [
      { label: "Kilgoot lekt: zo herken je het", href: "/kennisbank/kilgoot-lekt/" },
      { label: "Lood vervangen", href: "/diensten/lood-vervangen/" },
      { label: "Spoed dakreparatie", href: "/diensten/dakreparatie/" },
    ],
    intro:
      "Een kilgoot, of kortweg de kil, ligt in de hoek waar twee schuine dakvlakken samenkomen, bijvoorbeeld bij een L-vormig huis, een aanbouw met een schuin dak of een schuur die tegen je huis staat. Al het water van die twee dakvlakken loopt erdoorheen. Daarom gaat een kil sneller lekken dan de rest van het dak als er blad in ligt of als het lood of zink na veel jaren op is. Ik maak de kil leeg, zoek waar het water onder de pannen door loopt en herstel die plek. Is de kil over een groot stuk op, dan vervang ik dat stuk en leg ik de pannen erlangs weer goed.",
    punten: [
      "Kilgoot leeggemaakt, ook een gesloten kil die onder de pannen ligt",
      "Een scheur of gaatje in het lood of zink van de kil hersteld",
      "Een versleten stuk kil vervangen, meestal met loodvervanger en op wens met echt lood",
      "De pannen langs de kil weer goed gelegd, en meteen een blik op het lood eromheen",
    ],
    faq: [
      { v: "Wat kost het om een kilgoot te repareren?", a: "Dat hangt af van wat er nodig is: alleen leegmaken, een scheur op één plek herstellen of een stuk kil vervangen. Ook telt mee hoe lang de kil is en hoe goed ik erbij kan. Stuur een foto van de natte plek binnen en van de kil vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Hoe weet ik of het lek in de kilgoot zit?", a: "Zit de natte plek binnen in de hoek, onder de plek waar twee dakvlakken samenkomen, dan is het vaak de kil. Lekt het vooral bij een stortbui of in de herfst, als er veel blad valt, dan nog eerder. Vanaf de straat zie je soms blad of mos in de kil liggen, of pannen langs de kil die scheef liggen. Hoe je het verder herkent, lees je in het artikel over een lekkende kilgoot in de kennisbank." },
      { v: "Kan een kilgoot gerepareerd worden, of moet hij er helemaal uit?", a: "Vaak kan hij gerepareerd worden. Ligt hij vol, dan maak ik hem leeg. Zit er op één plek een scheur of een gaatje, dan herstel ik die plek. Is het lood of zink over een groot stuk dun of gescheurd, dan vervang ik dat stuk. Daarvoor moeten de pannen langs de kil eraf, en daarna leg ik ze weer goed. Ik zeg eerlijk wat bij jouw dak nodig is." },
      { v: "Is een lekkende kilgoot spoed?", a: "Druppelt het binnen, of wordt het plafond in de hoek bol, dan wel: zet een emmer neer en bel of app me met een foto. Is het een oude, droge vlek in de hoek die niet groter wordt, dan kan het vaak een paar dagen wachten. Laat de kil wel voor de winter nakijken, want blad en sneeuw blijven juist in de kil liggen." },
      { v: "Mijn huis heeft een gesloten kil. Kun je die ook nakijken?", a: "Ja. Bij een gesloten kil liggen de pannen van beide kanten bijna tegen elkaar en zit het lood of zink eronder, dus vanaf de straat zie je niet of er iets in ligt. Ik haal waar het nodig is een paar pannen langs de kil weg, maak de kil eronder leeg en kijk of het lood of zink nog heel is. Daarna leg ik de pannen weer terug. Je hoort vooraf wat het kost." },
      { v: "Kom je ook buiten Den Bosch voor een kilgoot?", a: "Ja. Ik kom in de hele regio Den Bosch, en verder in Brabant plan ik zo'n klus vooraf met je in. Bij oudere villa's, zoals je die in Vught veel ziet, ligt de kil vaak al tientallen jaren en is het lood of zink dun geworden. Stuur een foto van de kil vanaf de straat, dan hoor je wanneer ik kan komen." },
      { v: "Kun je de kilgoot meteen leegmaken als je mijn dakgoten komt schoonmaken?", a: "Vaak wel, als ik er veilig bij kan. In een kilgoot blijft in de herfst net zoveel blad liggen als in de goot eronder, en juist daar loopt het bij een flinke bui naar binnen in plaats van langs de gevel. Zeg het erbij als je een foto stuurt, dan neem ik de kil in dezelfde keer mee en kijk ik meteen of het lood of zink nog heel is. Ligt de kil onder de pannen, een gesloten kil, dan moeten er een paar pannen weg en is het meer werk. Je hoort vooraf wat het samen kost." },
      { v: "Er ligt sneeuw of ijs in mijn kilgoot. Moet dat eruit?", a: "Meestal niet. Sneeuw in een kil smelt vanzelf weg, zolang de kil en de goot eronder vrij zijn. Ligt er nog blad onder, of zit de goot eronder vol, dan kan het smeltwater nergens heen en zoekt het langs de kil een weg onder de pannen door naar binnen. Ga niet zelf het dak op en hak geen ijs uit de kil, want daarmee beschadig je het lood of zink. Wordt het binnen nat in de hoek onder de kil, zet er dan een emmer onder en stuur me een foto. Laat de kil daarna op een droge dag zonder ijs leegmaken en nakijken. Je hoort vooraf wat het kost." },
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
      `Regenpijp gescheurd, los of lek? Ik vervang hem, kunststof ${inclBtw("regenpijp")}${ZINK_REGENPIJP ? ` en zink ${ZINK_REGENPIJP} incl. btw` : ""}. Vaste prijs vooraf, stuur gerust een foto.`,
    icoon: "🛠",
    geenAfbeelding: true,
    fotos: ["/fotos/regenpijp-met-aftakking-72b9bb.webp", "/fotos/regenpijp-aansluiten-bestrating-open-6d4a97.webp", "/fotos/regenpijp-aftakking-plat-dak-98b289.webp"],
    zieOok: [
      { label: "Dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
      { label: "Goten reinigen", href: "/diensten/goten-reinigen/" },
      { label: "Zinken dakgoot solderen", href: "/diensten/dakgoot-solderen/" },
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
      { v: "Wat kost een regenpijp vervangen?", a: `Een kunststof regenpijp vervangen kost ${inclBtw("regenpijp")}.${ZINK_REGENPIJP ? ` Zink kost ${ZINK_REGENPIJP} incl. btw.` : ""} Is hij heel lang of lastig te bereiken, dan hoor je de prijs vooraf.` },
      { v: "Kunststof of zink?", a: "Kunststof is voordeliger en je hoeft er weinig aan te doen. Zink gaat lang mee en past mooi bij een zinken goot. Ik kijk wat bij je huis past." },
      { v: "Mijn regenpijp lekt alleen bij een verbinding, moet hij dan helemaal nieuw?", a: "Niet altijd. Vaak is er maar één stuk mis: een bocht die gescheurd is, of een stuk pijp dat een eindje uit de verbinding is gezakt omdat een beugel losgeraakt is. Dan loopt het water bij een bui langs de buitenkant van de pijp naar beneden, precies onder die verbinding. Een gezakt stuk schuif ik terug in de verbinding en zet ik weer vast, en een kapotte bocht of een kapot stuk pijp vervang ik. Kijk tijdens een bui waar het water naar buiten komt en stuur me daar een foto van via WhatsApp. Je hoort vooraf wat het kost." },
      { v: "Kijk je ook naar de goot?", a: "Ja. Loopt de goot over of lekt hij bij de uitloop naar de regenpijp, dan zie ik dat meteen. Dan hoor je wat dat erbij kost, voordat ik iets doe." },
      { v: "Mijn regenpijp is bij de storm losgeraakt van de muur. Is dat erg?", a: "Laat hem niet te lang zo hangen. Bij wind slaat een losse pijp tegen de gevel en kan hij breken, en vaak schiet hij dan ook uit de uitloop van de goot, zodat het water langs je muur loopt. Ga er niet zelf op een ladder aan trekken. Meestal is de pijp nog goed en zijn alleen de beugels los of afgebroken. Dan zet ik hem weer goed in de uitloop en maak ik hem vast met nieuwe beugels. Is er een stuk gebroken, dan vervang ik dat stuk. Stuur een foto via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Mijn goot loopt bij elke flinke bui over, terwijl hij schoon is. Helpt een extra regenpijp?", a: "Soms wel. Zit er aan een lange goot maar één regenpijp, dan kan die bij een stortbui het water niet bijhouden, en loopt de goot over aan de kant waar geen pijp zit. Een tweede uitloop met een eigen regenpijp kan dat oplossen, zonder dat er een nieuwe goot nodig is. Eerst kijk ik of de goot echt leeg is, goed afloopt naar de pijp en nergens doorhangt, want vaak zit het daar. Het water moet onderaan ook ergens heen kunnen, en dat bekijk ik vooraf met je. Stuur een filmpje van de goot tijdens een bui en een foto van je gevel vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Mijn regenpijp loost op de tegels. Kun je hem onder de grond aansluiten?", a: "Vaak wel. Loopt het water nu uit de regenpijp over je tegels of tegen de muur, dan kan ik de pijp onderaan aansluiten op een buis onder de bestrating. Daarvoor haal ik bij de voet van de pijp de tegels weg en leg ik nieuwe pvc-buis aan. Waar die buis op aansluit, hangt af van wat er bij jouw huis onder de grond ligt, en dat bekijk ik eerst samen met je. Stuur een foto van de voet van je regenpijp en de bestrating eromheen, dan hoor je vooraf wat het kost." },
      { v: "Mijn regenpijp zit verstopt. Kun je hem vrijmaken?", a: "Vaak wel, als het bovenin of in het stuk langs de gevel zit. Bij de uitloop, waar de goot overgaat in de pijp, blijft het meeste blad hangen, en dat maak ik vrij als ik de goot leegmaak. Zit de prop lager in een bocht of verbinding die ik kan bereiken, dan kijk ik of dat stuk los kan om het leeg te maken, of vervang ik het. Zit de verstopping onder de grond of in het riool, dan kom ik daar van boven niet bij. Dat zeg ik dan eerlijk, want daarvoor heb je een ontstoppingsbedrijf nodig. Stuur een foto van de goot en van de onderkant van de pijp, dan hoor je vooraf wat het kost." },
      { v: "De regenpijp van mijn bovenste goot komt uit op het dak van mijn aanbouw of garage. Is dat erg?", a: "Niet altijd, maar het is wel een plek om in de gaten te houden. Bij elke bui komt daar al het water van je bovenste goot op één plek terecht. Op een pannendak kan het dan onder de pannen spatten of een pan laten schuiven, en op een plat dak slijt de dakbedekking op die plek sneller of spoelt het grind weg. Vaak is het slim om de pijp door te trekken tot in de goot of de afvoer van het lagere dak, of er een bocht onder te zetten zodat het water er netjes in loopt. Stuur een foto van de plek waar de pijp uitkomt, dan hoor je vooraf wat het kost." },
      { v: "Mijn regenpijp is na de vorst gescheurd. Moet de hele pijp eruit?", a: "Meestal niet. Een regenpijp scheurt bij vorst als er water in bleef staan dat bevroor, en dat gebeurt als de pijp lager dicht zit, vaak in de bocht onderaan of in de aansluiting onder de tegels. Het ijs zet uit en duwt de pijp in de lengte open, of drukt een bocht uit de verbinding. Dan vervang ik het gescheurde stuk. Eerst kijk ik of het water onderaan weer weg kan, want anders staat het nieuwe stuk de volgende winter weer vol. Zit de verstopping dieper onder de grond of in het riool, dan zeg ik eerlijk dat je daarvoor een ontstoppingsbedrijf nodig hebt. Stuur een foto van de scheur en van de onderkant van de pijp via WhatsApp. Je hoort vooraf wat het kost." },
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
      { v: "Mijn afzuigkap of ventilatie blaast uit op zolder. Kan die afvoer door het dak naar buiten?", a: "Ja, het stuk door het dak doe ik. Komt de vochtige lucht van een afzuigkap of een ventilatiebox op zolder terecht, bijvoorbeeld omdat de slang daar ophoudt of los is geschoten, dan slaat dat vocht neer tegen het koude dak. Dat geeft druppels en natte plekken die op een lek lijken, en op den duur schimmel op het hout. Ik plaats een doorvoerpan die past bij je pannen, zodat de afvoer er netjes door naar buiten kan en het regenwater eromheen loopt. De slang of het kanaal aansluiten op de kap of de ventilatie doet je installateur. Stuur een foto van de plek op zolder en van je dak vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "De kabel van mijn zonnepanelen loopt onder een pan door naar binnen. Kan daar een nette doorvoer komen?", a: "Vaak wel, het stuk door het dak doe ik. Een kabel die onder een pan door naar binnen loopt, tilt die pan vaak een klein stukje op, en bij harde wind en regen waait het water daar onder door. Ik leg op die plek een doorvoerpan die bij je pannen past, zodat de kabel er netjes door kan en het water eromheen loopt. De kabel losmaken en weer aansluiten op de panelen of de omvormer doet je installateur, dus dat stemmen we vooraf af. Lekt het al op zolder bij de kabel, stuur me dan een foto van die plek en van je dak vanaf de straat. Je hoort vooraf wat het kost." },
      { v: "Als het regent, druppelt er water bij mijn cv-ketel of uit mijn afzuigkap. Komt dat door de doorvoer?", a: "Vaak wel, als het alleen bij regen gebeurt. Dan loopt het water langs de buitenkant van de pijp naar binnen, omdat de kraag rond de pijp is uitgedroogd of gescheurd, of omdat de doorvoerpan niet meer goed tussen de pannen ligt. Op zolder zie je dan een natte plek rond de pijp. Druppelt het ook bij droog weer, of alleen na het koken of als de ketel brandt, dan zit het eerder in de ketel, het condenswater of het kanaal binnen, en dat is werk voor je installateur. De kraag en de doorvoerpan op het dak maak ik weer dicht. Stuur een foto van de pijp op je dak vanaf de straat en van de natte plek binnen, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "windveer-vervangen",
    titel: "Windveer vervangen",
    vanafPrijs: "stuur een foto",
    h1: "Windveer vervangen of vastzetten: de plank langs de zijkant van je dak",
    kort: "Losse of rotte windveer langs de zijkant van je dak vastzetten of vervangen, en de pannen erboven weer goed gelegd.",
    metaTitle: "Windveer vervangen of vastzetten | Spoed Dak Service",
    metaDescription:
      "Windveer los na een storm of rot? Ik zet hem weer vast of vervang hem en leg de pannen langs de rand weer goed. Regio Den Bosch. Stuur een foto voor de prijs.",
    icoon: "🧰",
    geenAfbeelding: true,
    zieOok: [
      { label: "Stormschade", href: "/diensten/stormschade/" },
      { label: "Dakpannen vervangen", href: "/diensten/dakpannen-vervangen/" },
    ],
    intro:
      "Langs de schuine zijkant van je dak, bij de kopgevel, zit een lange plank: de windveer. Hij sluit de rand van het dak af, zodat de wind er niet onder kan, en houdt de pannen aan de zijkant op hun plek. Na een storm hangt hij soms los, en na jaren regen kan het hout gaan rotten, vaak eerst onderaan, vlak boven de goot. Een goede windveer zet ik weer stevig vast. Is hij rot of gebroken, dan vervang ik hem, en daarna leg ik de pannen langs de rand weer goed.",
    punten: [
      "Losse windveer weer stevig vastzetten",
      "Rotte of gebroken windveer vervangen",
      "Pannen langs de zijkant weer goed gelegd, een gebroken pan vervangen",
      "Meteen een blik op de uiteinden van de panlatten eronder",
    ],
    faq: [
      { v: "Wat kost een windveer vervangen?", a: "Dat hangt af van hoe lang de windveer is, hoe hoog hij zit, of het om één kant of beide kanten van het huis gaat en of ik hem vastzet of vervang. Stuur een foto van de zijkant van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Moet de hele windveer eruit, of kan een stuk vervangen worden?", a: "Dat hangt af van hoe ver het rot zit. Zit een goede windveer alleen los, dan zet ik hem weer vast. Is alleen het onderste stuk boven de goot zacht, dan kijk ik of dat stuk vervangen kan worden. Is het hout over de hele lengte zacht of gespleten, dan is een nieuwe windveer beter. Je hoort eerlijk wat ik zie." },
      { v: "Mijn windveer klappert bij wind tegen de gevel. Wat doe ik nu?", a: "Blijf uit de buurt van de gevel onder de plank en zet er als het kan iets neer, zodat niemand eronder loopt. Trek er niet aan en zet geen ladder tegen de muur. Maak vanaf de straat een foto en stuur die via WhatsApp. Hangt hij half los boven de stoep, de oprit of je tuin, dan is het spoed: bel of app me meteen." },
      { v: "Valt een losgewaaide windveer onder mijn verzekering?", a: "Waait een goede windveer los bij een storm, dan valt het herstel vaak onder je opstalverzekering. Was het hout al rot, dan meestal niet. Dat verschilt per polis. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je naar je verzekeraar kunt sturen." },
      { v: "Kom je ook buiten Den Bosch voor een windveer?", a: "Ja, in mijn werkgebied rond Den Bosch, onder andere in Rosmalen, Vught, Oss, Veghel en Boxtel. Een klus verder weg plan ik vooraf met je in. Stuur eerst een foto van de zijkant van je dak, dan hoor je wanneer ik kan komen." },
      { v: "De verf op mijn windveer bladdert. Moet hij dan vervangen worden?", a: "Niet altijd. Bladdert alleen de verf en is het hout eronder nog hard, dan is het vaak een klus voor de schilder. Is het hout zacht, gespleten of zitten er donkere plekken in, vooral onderaan bij de goot, dan is het aan het rotten. Een nieuwe laag verf houdt het dan niet meer tegen, en dan vervang ik de windveer of het rotte stuk. Je ziet het vaak al vanaf de straat met de zoom van je telefoon. Stuur me een foto van de zijkant van je dak, dan zeg ik eerlijk wat ik zie. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "antenne-verwijderen",
    titel: "Antenne of schotel weghalen",
    vanafPrijs: "stuur een foto",
    h1: "Oude antenne of schotel van je dak halen, en het dak weer dicht",
    kort: "Een oude antenne of schotel van je dak gehaald, met mast, beugel en kabel, en het dak op die plek weer dicht.",
    metaTitle: "Antenne of schotel van het dak halen | Spoed Dak Service",
    metaDescription:
      "Oude antenne of schotel op je dak? Ik haal mast, beugel en kabel weg en maak het dak daarna weer dicht. Regio Den Bosch. Stuur een foto voor de prijs.",
    icoon: "🧰",
    geenAfbeelding: true,
    zieOok: [
      { label: "Lood vervangen", href: "/diensten/lood-vervangen/" },
      { label: "Spoed dakreparatie", href: "/diensten/dakreparatie/" },
    ],
    intro:
      "Op veel daken staat nog een antenne die al jaren niets meer doet, of een schotel die niet meer wordt gebruikt. Bij elke storm gaat zo'n mast heen en weer. Dat schuurt aan de pannen en het lood, en een mast die omwaait, komt vaak op de nok of de pannen terecht. Ik haal de mast, de beugel en de kabel weg en maak het dak op die plek weer dicht, zodat er geen gat of losse pan achterblijft.",
    punten: [
      "Mast, beugel en kabel van het dak gehaald",
      "Een pan die past op de plek waar de beugel onder de pannen zat",
      "Lood rond de schoorsteen nagekeken als er een band om de schoorsteen zat",
      "Het dak op die plek weer dicht, zonder losse of kapotte pan",
    ],
    faq: [
      { v: "Wat kost het om een antenne of schotel van het dak te halen?", a: "Dat hangt af van hoe de mast vastzit, aan een beugel onder de pannen, met een band om de schoorsteen of aan de muur, en hoe hoog en bereikbaar hij staat. Stuur een foto van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost." },
      { v: "Moet er daarna iets aan mijn dak gebeuren?", a: "Meestal een beetje. Waar de beugel onder een pan door ging, ligt die pan vaak niet meer plat of is er een stuk uit gezaagd. Die vervang ik door een pan die past. Zat de mast met een band om de schoorsteen, dan kijk ik of het lood daar nog goed is en herstel ik het waar dat nodig is. Zo blijft er geen plek achter waar het later gaat lekken." },
      { v: "De antenne staat na de storm scheef. Is dat spoed?", a: "Hangt de mast over de rand van het dak of boven de stoep, de oprit of je tuin, dan wel: blijf eronder weg en bel of app me met een foto. Staat hij alleen een beetje scheef en blijft het binnen droog, dan kan het meestal een paar dagen wachten. Wacht niet tot de volgende storm, want een scheve mast trekt bij elke windstoot verder aan de pannen of de schoorsteen." },
      { v: "Mijn schotel doet het nog. Kun je hem ook verplaatsen of opnieuw richten?", a: "Nee, verplaatsen en richten laat je doen door een installateur. Lekt het bij de beugel of de kabel van een schotel die je wel gebruikt, dan maak ik het dak op die plek weer dicht. Stuur me een foto van de natte plek en van de schotel vanaf de straat." },
      { v: "Haal je ook de oude kabel weg die langs mijn gevel of over het dak loopt?", a: "Ja. De kabel van de oude antenne of schotel haal ik mee weg, ook het stuk langs de gevel waar ik veilig bij kan. Loopt de kabel onder de pannen door naar binnen, dan haal ik hem eruit en leg ik die pannen weer goed, zodat daar geen kier blijft. Een gat in de muur of in een kozijn waar de kabel naar binnen ging, laat je dichtmaken door een timmerman of metselaar. Stuur een foto van je dak en je gevel vanaf de straat, dan hoor je vooraf wat het kost." },
      { v: "Er komen zonnepanelen op mijn dak en mijn oude antenne of schotel staat in de weg. Kun je die eerst weghalen?", a: "Ja. Ik haal de mast, de beugel en de kabel weg en maak het dak op die plek weer dicht, met een pan die past. Doe het het liefst voordat de installateur komt, dan ligt het dak er bij het leggen van de panelen weer goed bij. Zat de mast met een band aan de schoorsteen, dan kijk ik meteen naar het lood daar. Stuur een foto van je dak vanaf de straat en zeg wanneer de panelen komen, dan stemmen we af wanneer ik kom. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "schoorsteen-vegen",
    verborgen: true,
    titel: "Schoorsteen vegen",
    h1: "Schoorsteen vegen doe ik niet, wel het lood en de kap op je schoorsteen",
    kort: "Vegen laat je doen door een erkende schoorsteenveger. Lekt het bij je schoorsteen, dan kijk ik naar het lood en de kap.",
    metaTitle: "Schoorsteen vegen doe ik niet | Spoed Dak Service",
    metaDescription:
      "Schoorsteen vegen doe ik zelf niet, dat doet een erkende schoorsteenveger. Lekt het bij je schoorsteen of valt er regen in het kanaal, dan help ik met het lood en een kap.",
    icoon: "🧹",
    intro:
      "Schoorsteen vegen doe ik zelf niet. Daarvoor bel je een erkende schoorsteenveger, het liefst voor het stookseizoen. Wat ik wel doe aan je schoorsteen: lood dat los zit of lekt vastzetten of vervangen, en een kap of afdekplaat plaatsen als er regen in het kanaal valt.",
    punten: [
      "Lood rond de schoorsteen vastzetten of vervangen",
      "Lekkage naast de schoorsteen opsporen en dichtmaken",
      "Een kap of afdekplaat op een kanaal waar regen in valt",
      "Voor het vegen zelf: een erkende schoorsteenveger",
    ],
    faq: [
      { v: "Kom jij mijn schoorsteen vegen?", a: "Nee, dat doe ik niet. Laat het vegen doen door een erkende schoorsteenveger, het liefst voor het stookseizoen. Lekt het bij je schoorsteen, of valt er regen in het kanaal, dan kom ik wel. Stuur me een foto van de schoorsteen vanaf de straat via WhatsApp." },
      { v: "Het lekt naast mijn schoorsteen. Kun je daarnaar kijken?", a: "Ja. Bij een schoorsteen begint een lek meestal bij het lood of de aansluiting op het dak. Dat zet ik weer vast of vervang ik, meestal met loodvervanger en op wens met echt lood. Je hoort vooraf wat het kost." },
      { v: "Er komt water in mijn haard als het regent. Wat kan ik doen?", a: "Vaak valt de regen dan bovenin het open kanaal naar beneden. Een kap of afdekplaat houdt de regen eruit, terwijl er aan de zijkant nog lucht door kan. Die kan ik erop zetten. Stook je nog, laat het kanaal dan ook nakijken door je schoorsteenveger." },
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
    h1: "Zonnepanelen schoonmaken doe ik niet, wel het dak onder en rond je panelen",
    kort: "Panelen schoonmaken doe ik niet. Wel de pannen onder de panelen, vogelwering langs de rand en lekkage bij de dakhaken.",
    metaTitle: "Zonnepanelen schoonmaken doe ik niet | Spoed Dak Service",
    metaDescription:
      "Zonnepanelen schoonmaken doe ik zelf niet. Wel kijk ik naar het dak eronder: een pan die bij een dakhaak is gebroken, lekkage of duiven onder de panelen.",
    icoon: "🔆",
    intro:
      "Zonnepanelen schoonmaken doe ik zelf niet, en aan de panelen zelf werk ik ook niet: plaatsen, losmaken of verplaatsen doet je installateur. Wat ik wel doe: de pannen onder en rond de panelen nakijken en repareren, een lek bij een dakhaak opsporen, en vogelwering aanbrengen langs de rand van de panelen.",
    punten: [
      "Lekkage onder de panelen opsporen en dichtmaken",
      "Een gebroken of verschoven pan bij een dakhaak vervangen",
      "Vogelwering langs de rand van de panelen",
      "De panelen zelf: je installateur",
    ],
    faq: [
      { v: "Maak jij mijn zonnepanelen schoon?", a: "Nee, dat doe ik niet. Vraag je installateur of een bedrijf dat panelen schoonmaakt. Lekt het sinds de panelen erop liggen, of zitten er duiven onder, dan kom ik wel. Stuur me een foto van je dak vanaf de straat via WhatsApp." },
      { v: "Het lekt onder mijn zonnepanelen. Kom je daarvoor?", a: "Ja. Vaak zit het in een pan die bij een dakhaak niet meer goed ligt of gebroken is. Moet er voor de reparatie een paneel los, dan doet je installateur dat. Je hoort vooraf wat het kost." },
      { v: "Er zitten duiven onder mijn panelen. Wat kun je doen?", a: "Ik sluit de rand rond de panelen af met vogelwering, zodat de duiven er niet meer onder kunnen. Zitten er jongen in een nest, dan wacht ik tot ze uitgevlogen zijn." },
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
      { v: "Ik hoor gekrabbel onder mijn dakpannen. Zijn dat vogels?", a: "Vaak wel. Mussen en spreeuwen kruipen graag onder de onderste rij pannen, vlak boven de goot, en in het voorjaar hoor je daar soms jonge vogels piepen. Kijk 's ochtends vanaf de straat of je vogels onder de onderste rij pannen ziet in- en uitvliegen. Hoor je het vooral 's nachts en hoger in het dak, dan kan het ook een muis of een marter zijn, en dan is vogelwering meestal niet de oplossing. Stuur me een foto van de onderste rij pannen, dan zeg ik eerlijk wat ik zie." },
      { v: "Wat kost vogelwering?", a: "Dat hangt vooral af van hoe lang de rij onder de pannen is en hoe goed ik erbij kan. Alleen de voorkant van een rijtjeshuis is iets anders dan rondom een vrijstaand huis, of de rand rond een veld zonnepanelen. Stuur een foto van je dak vanaf de straat en zeg erbij of het om de pannen, de zonnepanelen of allebei gaat. Dan hoor je vooraf de vaste prijs." },
      { v: "Er zitten steeds duiven op de richel boven mijn raam. Kun je daar iets tegen doen?", a: "Ja. Op een richel boven een raam of een andere rand van de gevel kan ik pinnen zetten. Vogels kunnen er dan niet meer lekker zitten, en dat scheelt veel vuil op je gevel, je kozijnen en de stoep eronder. Zitten ze vooral onder je pannen of onder de zonnepanelen, dan helpt vogelwering onder de onderste rij of rond de panelen beter. Stuur een foto van de plek waar ze zitten, dan hoor je vooraf wat het kost." },
      { v: "Ik denk dat er vleermuizen onder mijn dakpannen zitten. Kun je de opening dichtmaken?", a: "Niet zomaar. Vleermuizen zijn in Nederland beschermd, en een plek waar ze verblijven mag je niet afsluiten of verstoren. Je herkent ze vaak aan kleine, droge keutels onder de dakrand, op de vensterbank of tegen de gevel, die tussen je vingers tot poeder verkruimelen, en aan dieren die in de schemering onder de pannen vandaan vliegen. Denk je dat het vleermuizen zijn, vraag dan eerst advies aan een ecoloog of bij je gemeente voordat er iets dicht gaat. Zijn het vogels, stuur me dan een foto van de onderste rij pannen, dan zeg ik eerlijk wat ik zie." },
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
      "Dakrenovatie in de regio Den Bosch en verder in Brabant: versleten pannen, lood en nok vernieuwd, op wens met nieuwe folie en panlatten. Prijs vooraf.",
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
      { v: "Kan ik thuis blijven wonen tijdens een dakrenovatie?", a: "Ja, in de regel wel. Ik werk aan de buitenkant van je dak, en binnen merk je vooral wat geluid. Ligt er aan het eind van een werkdag nog een stuk open, dan dek ik dat af, zodat het binnen droog blijft. Gaan de pannen eraf voor nieuwe folie of panlatten, dan kan er op zolder wat stof of gruis vallen. Zet spullen die daar staan dan opzij of leg er een laken over. Moet ik voor de ladder in de tuin of op de oprit van de buren staan, laat het ze dan even weten. Je hoort vooraf hoeveel dagen ik denk bezig te zijn." },
      { v: "Kun je een dakrenovatie ook in delen doen, eerst de voorkant en later de achterkant?", a: "Dat kan vaak. De voorkant en de achterkant van een dak slijten niet altijd even snel, bijvoorbeeld omdat de ene kant meer zon, regen of wind krijgt. Dan pak ik eerst het dakvlak aan dat er het slechtst aan toe is, en het andere vlak later. Ik kijk wel of de nok en het lood op de plek waar de twee vlakken samenkomen in één keer goed kunnen, zodat het daar niet gaat lekken. Gaat er in de tussentijd een pan los of lekt het op het andere vlak, dan maak ik dat gewoon dicht. Je hoort vooraf wat elk deel kost." },
    ],
  },
  {
    slug: "dakisolatie",
    verborgen: true,
    titel: "Dakisolatie",
    h1: "Daken isoleren doe ik niet, wel je dak eerst droog en dicht",
    kort: "Isoleren doe ik niet. Wel zorg ik dat je dak droog en dicht is voordat een isolatiebedrijf begint.",
    metaTitle: "Dakisolatie doe ik niet | Spoed Dak Service",
    metaDescription:
      "Daken isoleren doe ik zelf niet. Wel zorg ik dat je dak eerst droog en dicht is: een lek, losse pannen of los lood maak ik eerst, zodat de isolatie droog blijft.",
    icoon: "🧊",
    afbeelding: "/img/dakrenovatie.jpg",
    intro:
      "Daken of zolders isoleren doe ik zelf niet. Daarvoor heb je een isolatiebedrijf nodig. Wat ik wel doe: zorgen dat je dak eerst droog en dicht is. Isoleren op een dak dat lekt, maakt het probleem groter, want natte isolatie houdt het water vast tegen het hout. Een lek, een losse of gebroken pan of los lood maak ik daarom eerst.",
    punten: [
      "Eerst lekkage opsporen en dichtmaken",
      "Losse of gebroken pannen vervangen",
      "Los lood bij de schoorsteen of het dakraam vastzetten",
      "Het isoleren zelf: een isolatiebedrijf",
    ],
    faq: [
      { v: "Kom jij mijn dak isoleren?", a: "Nee, dat doe ik niet. Vraag daarvoor een isolatiebedrijf. Wil je weten of je dak droog en dicht genoeg is om te isoleren, stuur me dan een foto van je dak vanaf de straat en van je zolder via WhatsApp." },
      { v: "Moet mijn dak eerst nagekeken worden voordat het geïsoleerd wordt?", a: "Dat is slim, zeker bij een ouder dak. Zitten er gebroken pannen in, is het lood los of lekt het al ergens, dan wordt de isolatie nat en zie je het lek daarna moeilijker. Dat maak ik eerst. Je hoort vooraf wat het kost." },
      { v: "Na het isoleren zie ik druppels op zolder. Is dat een lek?", a: "Vaak is het condens: vocht uit huis dat achter de isolatie tegen het koude dak neerslaat. Neem eerst contact op met wie heeft geïsoleerd. Komt het water alleen na regen en op één plek, dan kan het wel een lek zijn, en dan kijk ik waar het binnenkomt." },
    ],
  },
];

export const getDienst = (slug: string) => DIENSTEN.find((d) => d.slug === slug);
