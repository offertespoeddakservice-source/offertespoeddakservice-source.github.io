/**
 * Nieuwe kennisartikelen en korte antwoorden sinds 12-11-2026. artikelen-extra-2.ts wordt te groot voor de automatische controle,
 * daarom staan ze hier. artikelen-extra-2.ts zet ze achter ARTIKELEN_EXTRA_2 en in KORT_ANTWOORD_2.
 */
import type { Artikel } from "./artikelen";
import { inclBtw } from "./prijzen";

export const ARTIKELEN_EXTRA_3: Artikel[] = [
  {
    slug: `hoekkeper-lekt`,
    datum: `2026-11-12`,
    titel: `Lekt het bij de hoekkeper?`,
    h1: `Lekkage bij de hoekkeper van je schilddak: waar het zit en wat je doet`,
    metaTitle: `Hoekkeper lekt bij je schilddak | Spoed Dak Service`,
    metaDescription: `Nat op zolder langs de schuine nok van je schilddak? Vaak zit het in een losse vorst, oude specie of een gezaagde pan ernaast. Zo zie je het en dit doe je.`,
    intro: `Een schilddak heeft niet alleen een nok bovenop, maar ook schuine noklijnen die van de nok naar de hoeken van het huis lopen. Zo'n schuine lijn heet de hoekkeper. Er liggen vorsten op, net als op de nok, en de pannen ernaast zijn schuin op maat gezaagd. Lekt het bij jou op zolder in een hoek, langs zo'n schuine lijn, dan zit het daar vaak. Hieronder lees je hoe dat komt, hoe je het vanaf de straat ziet en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg. Ga niet zelf het dak op: een hoekkeper ligt hoog en schuin, en de vorsten zijn bij nat weer glad. Maak een foto van de natte plek op zolder en van het dak vanaf de straat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom het juist daar lekt`, tekst: [
        `Op de hoekkeper komen twee dakvlakken samen in een schuine rug. De vorsten liggen schuin, dus water dat eronder komt, loopt langs de lijn naar beneden in plaats van over de pannen weg. De pannen naast de hoekkeper zijn op maat gezaagd, en zo'n gezaagde pan ligt minder vast dan een hele. En op een schuine lijn vangt de wind de vorsten van opzij, zeker op de hoek die naar het zuidwesten wijst.`,
      ] },
      { kop: `Waar het meestal zit`, tekst: [
        `Oude specie. Op veel oudere daken liggen de vorsten op de hoekkeper in specie. Na jaren wordt die bros en brokkelt hij af. Dan ligt een vorst los en waait de regen eronder door. Brokjes specie in de goot onder een hoek van het dak zijn vaak het eerste teken.`,
        `Een losse of gebroken vorst. Een vorst die scheef ligt of waar een stuk af is, laat bij elke bui water door. Onderaan de hoekkeper, vlak boven de goot, zit vaak een eindstuk dat bij storm los kan raken.`,
        `Een gezaagde pan die is gaan schuiven. Ligt een van de schuin gezaagde pannen naast de lijn niet meer goed, dan loopt het water onder de vorst langs naar binnen.`,
        `Een gescheurde strook onder een droge hoekkeper. Op nieuwere daken liggen de vorsten soms zonder specie op een strook, net als bij een droge nok. Is die strook gescheurd of losgeraakt, dan kan het daar binnenkomen.`,
      ] },
      { kop: `Zo zie je het vanaf de straat`, tekst: [
        `Ga schuin tegenover de hoek van je huis staan, zodat je de schuine lijn goed ziet, en zoom in met je telefoon. Kijk of de vorsten in een rechte lijn liggen, of er een open naad tussen twee vorsten zit, of de specie eronder nog heel is en of er een pan naast de lijn anders ligt dan de rest. Kijk ook in de goot onder de hoek: liggen daar brokjes specie of stukjes pan, dan zit er boven iets los.`,
      ] },
      { kop: `Waar zie je het binnen?`, tekst: [
        `Water dat onder een vorst op de hoekkeper komt, loopt vaak eerst een stuk langs de schuine balk naar beneden. Daardoor zie je de natte plek op zolder vaak lager dan het lek, in de hoek van de zolder of op de muur eronder. In een zolderkamer met een schuine wand zie je het als een vlek in de hoek van die wand. Lees ook <a href="/kennisbank/natte-plek-schuine-wand-zolder/">natte plek op de schuine wand van je zolderkamer</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Klim niet op het dak om een vorst terug te leggen, en smeer geen kit in de naad tussen twee vorsten. Kit laat op een schuine lijn snel los, en vaak loopt het water dan nog steeds onder de vorst door.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het nat is en daarna buiten langs de hele hoekkeper. Een losse vorst zet ik weer vast. Is de specie onder de vorsten op, dan zet ik ze opnieuw vast met dakmortel. Een gebroken vorst of een gezaagde pan die niet meer goed ligt, vervang ik. Liggen de nok en de andere hoekkepers in dezelfde oude specie, dan zeg ik je dat eerlijk, zodat je zelf kunt kiezen of je dat meteen laat doen. Zie <a href="/diensten/nokvorsten-vervangen/">nokvorsten repareren of vervangen</a> en <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Eén losse vorst weer vastzetten of een paar pannen vervangen kost bij mij ${inclBtw("dakpan")}. Moeten de vorsten over een flink stuk opnieuw worden aangesmeerd met dakmortel, dan kost dat ${inclBtw("nok_repareren")}. Moeten er vorsten vervangen worden, dan hoor je de prijs als je een foto hebt gestuurd. Zie ook <a href="/kennisbank/wat-kost-nokvorsten-repareren/">wat kost nokvorsten repareren</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: nokvorsten repareren of vervangen`, href: `/diensten/nokvorsten-vervangen/` },
    faq: [
      { v: `Wat is het verschil tussen de nok en de hoekkeper?`, a: `De nok is de lijn helemaal bovenop het dak, waar twee dakvlakken elkaar raken. Een hoekkeper is een schuine nok die van de nok naar een hoek van het huis loopt. Die heb je bij een schilddak, dat aan alle vier de kanten schuin afloopt. Op allebei liggen vorsten.` },
      { v: `Kan het ook de kilgoot zijn?`, a: `Een kilgoot ligt in een binnenhoek, waar twee dakvlakken naar elkaar toe aflopen, zoals bij een huis in de vorm van een L. Een hoekkeper is juist een buitenhoek, een rug. Lekt het in een binnenhoek, lees dan het artikel over een lekkende kilgoot.` },
      { v: `Is een lekkende hoekkeper spoed?`, a: `Druppelt het binnen, of ligt er een vorst of een stuk specie op straat of in de tuin, dan wel: bel of app me met een foto. Is het een kleine vlek die na de bui weer opdroogt, dan kan het vaak een paar dagen wachten. Wacht niet tot de volgende storm, want een losse vorst op een schuine lijn waait er makkelijk af.` },
      { v: `Moet ik thuis zijn als je komt?`, a: `Niet per se. Kan ik van buiten bij de hoekkeper en spreken we de prijs vooraf af, dan kan ik een losse vorst ook vastzetten als je niet thuis bent. Lekt het binnen, dan is het fijn als ik even op zolder kan kijken.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_3: Record<string, string> = {
  "erker-lekt": `Bij een natte plek boven het raam van een erker, of naast de voordeur onder een luifel, zit het lek zelden in het raam zelf. Kijk eerst naar de strook lood of zink waar het dakje tegen de gevel zit, naar de naden en de kit aan de zijkanten, en naar het gootje aan de voorkant, dat snel volloopt met blad. Druppels op het glas op koude ochtenden zijn eerder condens.`,
  "lekkage-warmtepomp-of-airco": `Lekt het sinds er een warmtepomp of airco op je platte dak staat, dan zit het meestal bij het gat waar de leidingen naar binnen gaan, onder de poten die in de dakbedekking drukken, of bij condenswater dat op het dak blijft staan. Is de unit pas geplaatst, meld het dan eerst bij de installateur. Het apparaat is zijn werk, het dak eromheen dat van een dakdekker.`,
  "dak-lekt-na-reparatie": `Wordt het na een reparatie weer nat, dan is dat vaak oud water dat nog uit het plafond of de isolatie komt, een tweede lek dat eerst niet opviel, of water dat hoger of opzij binnenkomt dan de plek die gemaakt is. Zet een potloodstreep langs de rand van de vlek: wordt hij na een bui groter, dan komt er nog water bij. Bel dan eerst wie de reparatie deed.`,
  "dakgoot-loopt-over": `Kijk tijdens een bui waar je goot overloopt. Vlak bij de regenpijp zit de uitloop meestal dicht. In het midden zit de goot vol of hangt hij door. Aan het eind waar geen pijp zit, loopt de goot de verkeerde kant op of kan één regenpijp het water niet bijhouden. Een goot die overloopt, is dus meestal niet lek: het water kan alleen niet weg.`,
  "dakterras-lekt": `Bij een lekkend dakterras of balkon komt het water meestal binnen rond de afvoer, onder de dorpel van de terrasdeur, langs de muur of bij de schroeven van een hek. Kijk na een bui waar water op de tegels blijft staan en of de afvoer vrij is. Voor de reparatie gaan meestal alleen op die plek de tegels eraf.`,
  "hoekkeper-lekt": `Lekt het bij de schuine nok van je schilddak, de hoekkeper, dan zit het meestal in een vorst die los ligt omdat de specie eronder op is, in een gebroken vorst of in een schuin gezaagde pan naast de lijn die is gaan schuiven. Het water loopt eerst langs de schuine balk naar beneden, dus de natte plek op zolder zit vaak lager dan het lek.`,
};
