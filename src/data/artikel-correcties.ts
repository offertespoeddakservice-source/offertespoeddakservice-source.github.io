// Correcties op bestaande kennisartikelen (11-11-2026).
// artikelen.ts en artikelen-extra.ts zijn te groot voor de automatische controle, daarom staat een correctie hier.
// 14-11-2026: knop van drie stormartikelen heet spoed dakreparatie.
// 16-11-2026: titel voor Google van natte isolatie en dakpannen vastzetten tegen storm.
// 16-11-2026 (ronde 2): titel voor Google van veranda of overkapping lekt, met alle drie de plekken uit het artikel (muur, platen, goot).
// 16-11-2026 (ronde 3): titel voor Google van water uit lamp of spotje (plek 4,5, maar 3,2% klikt).
// 16-11-2026 (ronde 3): titel voor Google van lekkage bij de schoorsteen met het zoekwoord vooraan (655 vertoningen, plek 74).
// 16-11-2026 (ronde 4): titel voor Google van lood-op-dak met schoorsteen en dakraam (plek 5,6, 1 klik uit 78 vertoningen).
// 16-11-2026 (ronde 5): eigen omschrijving voor Google van lekkage bij een dakdoorvoer (plek 5,9, maar 3,2% klikt).
// 17-11-2026: titel voor Google van dakleer repareren ('dakleer reparatie' 172 vertoningen op plek 51) en gedeelde schoorsteen (361 vertoningen, 0 kliks).
// 18-11-2026: titel voor Google van dakgoot lekt met oorzaak en wat nu (1219 vertoningen, 1 klik).
// 19-11-2026 ronde 4: titel voor Google van druppelen horen (plek 5,9, 0 kliks) en lichtkoepel lekt (plek 23,8, 0 kliks).
// 19-11-2026 ronde 5: titel voor Google van wat kost dakgoot schoonmaken met de vanaf-prijs voor één goot uit prijzen.ts (1476 vertoningen op plek 79, 0 kliks). Niet 'per goot': de prijs geldt voor één goot, voor beide goten hoor je hem vooraf.
// 20-11-2026 ronde 2: titel voor Google van wat kost een dakinspectie, met het zoekwoord vooraan en de Dak-APK-prijs uit prijzen.ts (dakinspectie kosten 241 vertoningen op plek 48, 0 kliks).
// 20-11-2026 ronde 3: titel voor Google van dakterras of balkon lekt (plek 8,8, 57 vertoningen, 0 kliks), met de situatie die mensen herkennen.
// 20-11-2026 ronde 5: titel voor Google van dakgoot loopt over, met de woorden waarop mensen zoeken ('water loopt over de dakgoot' 46 vertoningen op plek 26,5, artikel 107 vertoningen op plek 34,8, 0 kliks).
// 21-11-2026 ronde 2: knop onder golfplaten lekken en welke golfplaten heb ik naar de nieuwe dienst golfplaten en dakplaten vervangen, alleen als die dienst bestaat.
// 21-11-2026 ronde 3: titel voor Google van plat dak repareren of vervangen (1093 vertoningen op plek 83, 0 kliks), met 'dakbedekking' vooraan en anders dan de titel van de dienstpagina platte daken; en een omschrijving voor natte isolatie (plek 5,5, 245 vertoningen, 0,8% klikt).
// 21-11-2026 ronde 5: knop onder dakonderhoud per seizoen naar de nieuwe dienst dakonderhoud, alleen als die dienst bestaat.
// 22-11-2026 ronde 1: titel voor Google van wat kost plat dak repareren (1593 vertoningen op plek 48,6, 0 kliks; 'lekkage plat dak' 135 en 'plat dak lekkage repareren' 117 vertoningen), met 'lekkend plat dak repareren' vooraan.
// 22-11-2026 ronde 1: titel voor Google van wat kost nokvorsten repareren met 'nok' erin ('daknok reparatie kosten' 28 en 'nokvorsten vervangen' 50 vertoningen; artikel 162 vertoningen op plek 61, 0 kliks).
// 22-11-2026 ronde 3: titel voor Google van dakraam lekt ('lekkage dakraam' 102 vertoningen op plek 89), zodat hij niet meer bijna gelijk is aan de titel van de dienstpagina lekkend dakraam.
// 22-11-2026 ronde 3: titel voor Google van daktermen uitgelegd (plek 8,3, 199 vertoningen, 1% klikt), met de begrippen die mensen opzoeken.
// 22-11-2026 ronde 4: titel voor Google van zinken dakgoot lekt met 'op de naad' ('zinken dakgoot lekt op naad' 64 vertoningen op plek 52; artikel 542 vertoningen, 1 klik).
// 22-11-2026 ronde 4: titel voor Google van daklekkage en je verzekering, gelijk aan de kop en met de bedrijfsnaam erachter (enige kennisartikel zonder; 512 vertoningen op plek 47, 1 klik).
// 22-11-2026 ronde 5: titel voor Google van kilgoot lekt ('kilgoot lekkage' 54 vertoningen op plek 14,5) en lekkage bij zonnepanelen ('daklekkage onder zonnepanelen' 46 op plek 88, 'lekkage door zonnepanelen' 82 op plek 26), allebei nooit aangepast.
// 22-11-2026 ronde 5: titel voor Google van hoe lang gaat een dakgoot mee (zink en kunststof, de reden van de afkeuring van 14-11 is weg) en dakgoot zelf schoonmaken ('dakgoot schoonmaken vanuit dakraam' 54 en 'dakgoot reinigen zonder ladder' 34 vertoningen).
// Kennisbank [slug].astro legt hem over het artikel heen: alleen de velden die hier staan, veranderen (ook de titel voor Google).
import type { Artikel } from "./artikelen";
import { prijsVan } from "./prijzen";
import { DIENSTEN } from "./diensten";

const GOLFPLATEN_DIENST = DIENSTEN.some((d) => d.slug === "golfplaten-vervangen" && !d.verborgen);
const DAKONDERHOUD_DIENST = DIENSTEN.some((d) => d.slug === "dakonderhoud" && !d.verborgen);

export const ARTIKEL_CORRECTIES: Record<string, Partial<Pick<Artikel, "secties" | "faq" | "dienst" | "metaTitle" | "metaDescription">>> = {
  "mos-op-dak-verwijderen": {
    secties: [
      { kop: "Is mos echt schadelijk?", tekst: [
        "Ja, op termijn wel. Mos houdt vocht vast op je pannen; vriest dat vocht 's winters, dan zet het uit en kunnen pannen scheuren of afbladderen. Bovendien komt los mos in de goot en regenpijp terecht en verstopt daar de afvoer: een veelvoorkomende oorzaak van overlopende goten en lekkage.",
      ] },
      { kop: "Mos, algen of korstmos: wat zit er op je dak?", tekst: [
        "Niet alles wat groen of grijs op je dak zit, is hetzelfde. Een groene waas over de pannen is meestal alg. Die houdt weinig water vast en is vooral een kwestie van hoe het eruitziet.",
        "Mos groeit in dikke, zachte kussens op en tussen de pannen. Dat houdt wel water vast, kan bij vorst schade geven en komt in brokken in je goot terecht. Dat haal je er op tijd af.",
        "Korstmos zijn de platte grijze, gele of oranje vlekken die vastzitten op de pan. Het groeit heel langzaam en houdt weinig water vast. Je krijgt het er moeilijk af zonder de toplaag van de pan te beschadigen, dus vaak is het beter om het te laten zitten.",
      ] },
      { kop: "Pas op met de hogedrukreiniger", tekst: [
        "Een hogedrukreiniger lijkt snel, maar te veel druk haalt de beschermende toplaag van je pannen weg en beschadigt vooral oudere, poreuze pannen, dan groeit het mos juist sneller terug. Voor stevige, moderne pannen kan lage druk, maar bij twijfel is voorzichtig handwerk of een zachtere methode beter.",
      ] },
      { kop: "Bij jou in de buurt", tekst: [
        'Hoeveel mos er op een dak groeit, hangt vooral af van schaduw en bomen. In Oisterwijk, tussen de bossen, groeit het snel op de noordkant van het dak: lees <a href="/werkgebied/oisterwijk/">dakdekker in Oisterwijk</a>. Op de betonpannen in Maaspoort en Empel spoelt mos samen met gruis van de pannen naar de goot, zie <a href="/werkgebied/den-bosch/goten-reinigen/">dakgoot schoonmaken in Den Bosch</a>. En op de oude pannen in Schijndel, vaak nog van voor 1985, wordt het samen met blad een laag slib onderin de goot: zie <a href="/werkgebied/schijndel/goten-reinigen/">dakgoot schoonmaken in Schijndel</a>.',
      ] },
      { kop: `Wat ik wel en niet doe`, tekst: [
        `Daken schoonmaken of ontmossen doe ik zelf niet. Wat ik wel doe: de goten en de uitloop naar de regenpijp leegmaken, zodat het mos dat van je dak spoelt het water niet tegenhoudt, en pannen, de nok of het lood repareren of vervangen als die kapot of los zijn. Laat je je dak door iemand anders schoonmaken, vraag dan of die met lage druk werkt. Lekt het daarna, lees dan <a href="/kennisbank/dak-lekt-na-schoonmaken/">lekt je dak sinds het is schoongespoten?</a>`,
      ] },
    ],
    faq: [
      { v: `Mag ik zelf met een hogedrukreiniger mijn dak schoonmaken?`, a: `Liever niet op oudere of poreuze pannen, want je haalt er de toplaag af en beschadigt ze. Op hoogte werken is bovendien niet zonder risico. Laat je het doen, vraag dan of er met lage druk wordt gewerkt.` },
      { v: `Komt het mos terug?`, a: `Op den duur wel, zeker aan de noordkant en onder bomen. Laat het niet te dik worden, en laat elk najaar je goten leegmaken, zodat het mos dat van het dak spoelt de afvoer niet verstopt.` },
      { v: "Wanneer laat je mos het beste weghalen?", a: "Het liefst op een droge dag in het voorjaar of in het begin van de herfst. Op een nat of bevroren dak is het glad en werk je niet veilig. Laat het weghalen voordat je goten worden leeggemaakt, want het losse mos komt toch in de goot terecht." },
      { v: "Hoe haal je mos van een plat dak met bitumen?", a: "Niet met een harde schraper of een hogedrukreiniger, want dan haal je de toplaag met de steentjes van het bitumen af en wordt de dakbedekking sneller oud. Kun je veilig op het dak komen, veeg dan op een droge dag los mos en blad met een zachte bezem bij elkaar en haal het op, en houd vooral de afvoer vrij. Ga er niet op bij regen, wind of vorst. Zit het mos vast in de naden of groeit er gras op het dak, stuur me dan een foto. Dan kijk ik of de dakbedekking eronder nog goed is." },
      { v: `Haal jij mos van mijn dak?`, a: `Nee, daken schoonmaken of ontmossen doe ik niet. Wel maak ik je goten leeg, en repareer ik pannen, de nok of het lood als die door mos of vorst kapot of los zijn. Stuur me een foto, dan zeg ik eerlijk wat ik zie.` },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
  },
  "zinken-dakgoot-lekt": {
    dienst: { label: `Bekijk: dakgoot solderen`, href: `/diensten/dakgoot-solderen/` },
    metaTitle: "Zinken dakgoot lekt op de naad: solderen of coaten? | Spoed Dak Service",
  },
  "zachte-plek-plat-dak": {
    dienst: { label: `Bekijk: rot dakbeschot vervangen`, href: `/diensten/dakbeschot-vervangen/` },
  },
  "schoorsteen-vegen-hoe-vaak": {
    secties: [
      { kop: `Hoe vaak is nodig?`, tekst: [
        `Stook je regelmatig hout? Dan is één keer per jaar het advies, het beste vóór het stookseizoen, eind zomer of begin herfst. Bij een gasketel of weinig stoken kan het minder vaak.`,
        `Veel verzekeraars verwachten ook een jaarlijkse beurt, handig om te weten als er ooit iets misgaat.`,
      ] },
      { kop: `Waarom het belangrijk is`, tekst: [
        `In het kanaal verzamelt zich roet en creosoot. Te veel daarvan vergroot de kans op schoorsteenbrand en zorgt voor slechte trek, met rook in huis als gevolg. Vegen lost dat op.`,
      ] },
      { kop: `Zo zie je dat vegen nodig is`, tekst: [
        `Rook die bij het aansteken de kamer in slaat, een kachel die slecht trekt, een sterke roetlucht als je niet stookt, of zwarte schilfers onder in de haard. Merk je zoiets, wacht dan niet tot volgend jaar.`,
      ] },
      { kop: `Wie veegt je schoorsteen?`, tekst: [
        `Schoorsteen vegen doe ik zelf niet. Laat het doen door een erkende schoorsteenveger. Wat ik wel doe aan je schoorsteen: het lood en de aansluiting op het dak nakijken, vastzetten of vervangen, en een kap of afdekplaat plaatsen als er regen in het kanaal valt. Zie <a href="/diensten/lood-vervangen/">lood vervangen</a> en <a href="/kennisbank/schoorsteen-afdekken/">schoorsteen afdekken</a>.`,
      ] },
    ],
    faq: [
      { v: `Kom jij mijn schoorsteen vegen?`, a: `Nee, dat doe ik niet. Laat het vegen doen door een erkende schoorsteenveger. Lekt het bij je schoorsteen of valt er regen in het kanaal, dan kom ik wel. Stuur me een foto van de schoorsteen vanaf de straat via WhatsApp.` },
      { v: `Wanneer kan ik het beste laten vegen?`, a: `Vóór het stookseizoen, dus eind zomer of begin herfst. Dan begin je de winter veilig en met goede trek.` },
      { v: `Is schoorsteen vegen verplicht?`, a: `Voor een gewoon woonhuis staat het niet in de wet. Wel vragen veel verzekeraars in hun voorwaarden om een jaarlijkse veegbeurt als je hout stookt. Gaat het mis en is er niet geveegd, dan kan dat gevolgen hebben voor je uitkering. Kijk het even na in je polis.` },
      { v: `Moet de schoorsteen ook geveegd worden als ik weinig stook?`, a: `Stook je maar een paar keer per jaar, dan kan het vaak minder vaak. Heb je lang niet gestookt of zaten er vogels op de schoorsteen, laat dan voordat je weer begint toch even kijken of het kanaal vrij is.` },
      { v: `Mijn schoorsteen wordt niet meer gebruikt. Wat moet ik doen?`, a: `Elk jaar vegen hoeft dan niet meer, want er komt geen nieuw roet bij. Laat hem wel één keer vegen als je stopt met stoken. Blijft het kanaal daarna open, dan valt er regen in, en dat water trekt met het roet in de muur. Binnen zie je dat als bruine vlekken. Een kap of afdekplaat houdt de regen tegen en laat het kanaal toch ademen. Die kan ik er voor je op zetten. Je hoort vooraf wat het kost.` },
    ],
    dienst: { label: `Bekijk: lood vervangen bij de schoorsteen`, href: `/diensten/lood-vervangen/` },
  },
  "dakraam-lekt": { dienst: { label: "Bekijk: lekkend dakraam repareren", href: "/diensten/dakraam-lekkage/" }, metaTitle: "Dakraam lekt bij regen? Zo vind je het lek | Spoed Dak Service" },
  "dakinspectie": { metaTitle: "Dakinspectie: wat een dakdekker nakijkt | Spoed Dak Service" },
  "dakpan-kapot-of-verschoven": { metaTitle: "Dakpan scheef, kapot of verschoven? | Spoed Dak Service" },
  "lood-op-dak": { dienst: { label: "Bekijk: lood vastzetten of vervangen", href: "/diensten/lood-vervangen/" }, metaTitle: "Lood rond schoorsteen of dakraam lekt? | Spoed Dak Service" },
  "lekkage-gedeelde-schoorsteen": { dienst: { label: "Bekijk: lood vervangen bij de schoorsteen", href: "/diensten/lood-vervangen/" }, metaTitle: "Gedeelde schoorsteen lekt: wie betaalt? | Spoed Dak Service" },
  "condens-of-lekkage-op-zolder": { metaTitle: "Condens op zolder of een daklek? | Spoed Dak Service" },
  "dak-lekt-bij-hevige-regen": { metaDescription: "Lekt je dak alleen bij hevige regen of een stortbui? Meestal kan het water dan niet snel genoeg weg bij de goot, een kilgoot, de afvoer van een plat dak of een dakraam." },
  "bakgoot-lekt": { dienst: { label: "Bekijk: bakgoot repareren", href: "/diensten/bakgoot-repareren/" } },
  "dak-lekt-bij-harde-wind": { dienst: { label: "Bekijk: spoed dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" } },
  "dakpannen-vastzetten-tegen-storm": { dienst: { label: "Bekijk: spoed dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" }, metaTitle: "Dakpannen vastzetten met stormhaken? | Spoed Dak Service" },
  "dakpannen-klapperen-bij-wind": { dienst: { label: "Bekijk: spoed dakreparatie", href: "/diensten/dakreparatie/" } },
  "isolatie-nat-na-lekkage": { metaTitle: "Isolatie nat na daklek: drogen of eruit? | Spoed Dak Service", metaDescription: "Isolatie nat door een daklek? Een klein stuk droogt vaak weer, maar is het ingezakt of ruikt het muf, dan moet het eruit. Eerst moet het lek dicht." },
  "plat-dak-vervangen-of-repareren": { metaTitle: "Dakbedekking vervangen of nog repareren? | Spoed Dak Service" },
  "veranda-of-overkapping-lekt": { metaTitle: "Veranda lekt bij de muur, platen of goot? | Spoed Dak Service" },
  "water-uit-lamp-plafond": { metaTitle: "Water uit lamp of spotje? Doe eerst dit | Spoed Dak Service" },
  "lekkage-bij-schoorsteen": { metaTitle: "Lekkage bij schoorsteen: waar zit het? | Spoed Dak Service" },
  "lekkage-bij-dakdoorvoer": { metaDescription: "Druppelt het langs de ontluchting, de afzuiging of de cv-pijp door je dak? Meestal zit het in de kraag of de doorvoerpan. Zo zie je of het een lek is of condens." },
  "dakleer-repareren": { metaTitle: "Dakleer reparatie: scheur, blaas of lek? | Spoed Dak Service" },
  "dakgoot-lekt": { metaTitle: "Dakgoot lekt: oorzaak vinden en wat nu? | Spoed Dak Service" },
  "druppelen-horen-plafond": { metaTitle: "Druppelen in plafond, maar geen vlek? | Spoed Dak Service" },
  "lichtkoepel-lekt": { metaTitle: "Lichtkoepel lekt: rand of condens? | Spoed Dak Service" },
  "wat-kost-dakgoot-schoonmaken": { metaTitle: `Dakgoot schoonmaken kosten: ${prijsVan("goot_reinigen")} voor één goot` },
  "wat-kost-een-dakinspectie": { metaTitle: `Dakinspectie kosten: Dak-APK voor ${prijsVan("apk")} | Spoed Dak Service` },
  "dakterras-lekt": { metaTitle: "Balkon of dakterras lekt naar beneden? | Spoed Dak Service" },
  "dakgoot-loopt-over": { metaTitle: "Water loopt over je dakgoot bij regen? | Spoed Dak Service" },
  "wat-kost-plat-dak-repareren": { metaTitle: "Lekkend plat dak repareren: wat kost het? | Spoed Dak Service" },
  "wat-kost-nokvorsten-repareren": { metaTitle: "Nok of nokvorsten repareren: wat kost het? | Spoed Dak Service" },
  "daktermen-uitgelegd": { metaTitle: "Daktermen: nokvorst, kil, windveer en meer | Spoed Dak Service" },
  "daklekkage-verzekering": { metaTitle: "Daklekkage en je verzekering: wat wordt vergoed? | Spoed Dak Service" },
  "kilgoot-lekt": { metaTitle: "Kilgoot lekt? Lekkage in de hoek van je dak | Spoed Dak Service" },
  "lekkage-bij-zonnepanelen": { metaTitle: "Lekkage door of onder zonnepanelen? | Spoed Dak Service" },
  "hoe-lang-gaat-een-dakgoot-mee": { metaTitle: "Hoe lang gaat een zinken of kunststof dakgoot mee? | Spoed Dak Service" },
  "dakgoot-zelf-schoonmaken": { metaTitle: "Dakgoot zelf schoonmaken, ook zonder ladder? | Spoed Dak Service" },
  ...(GOLFPLATEN_DIENST ? { "golfplaten-lekken": { dienst: { label: "Bekijk: golfplaten en dakplaten vervangen", href: "/diensten/golfplaten-vervangen/" } }, "welke-golfplaten-heb-ik": { dienst: { label: "Bekijk: golfplaten en dakplaten vervangen", href: "/diensten/golfplaten-vervangen/" } } } : {}),
  ...(DAKONDERHOUD_DIENST ? { "dakonderhoud-per-seizoen": { dienst: { label: "Bekijk: dakonderhoud", href: "/diensten/dakonderhoud/" } } } : {}),
};
