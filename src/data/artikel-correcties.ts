// Correcties op bestaande kennisartikelen (11-11-2026).
// artikelen.ts en artikelen-extra.ts zijn te groot voor de automatische controle, daarom staat een correctie hier.
// Kennisbank [slug].astro legt hem over het artikel heen: alleen de velden die hier staan, veranderen (ook de titel voor Google).
import type { Artikel } from "./artikelen";

export const ARTIKEL_CORRECTIES: Record<string, Partial<Pick<Artikel, "secties" | "faq" | "dienst" | "metaTitle">>> = {
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
  "dakraam-lekt": { dienst: { label: "Bekijk: lekkend dakraam repareren", href: "/diensten/dakraam-lekkage/" } },
  "dakinspectie": { metaTitle: "Dakinspectie: wat een dakdekker nakijkt | Spoed Dak Service" },
  "dakpan-kapot-of-verschoven": { metaTitle: "Dakpan scheef, kapot of verschoven? | Spoed Dak Service" },
  "lood-op-dak": { dienst: { label: "Bekijk: lood vastzetten of vervangen", href: "/diensten/lood-vervangen/" } },
  "lekkage-gedeelde-schoorsteen": { dienst: { label: "Bekijk: lood vervangen bij de schoorsteen", href: "/diensten/lood-vervangen/" } },
};
