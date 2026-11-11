// Correcties op bestaande kennisartikelen (11-11-2026).
// artikelen.ts en artikelen-extra.ts zijn te groot voor de automatische controle, daarom staat een correctie hier.
// Kennisbank [slug].astro legt hem over het artikel heen: alleen de velden die hier staan, veranderen.
import type { Artikel } from "./artikelen";

export const ARTIKEL_CORRECTIES: Record<string, Partial<Pick<Artikel, "secties" | "faq" | "dienst">>> = {
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
};
