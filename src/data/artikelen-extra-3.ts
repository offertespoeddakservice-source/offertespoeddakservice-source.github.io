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
  {
    slug: `lekt-sinds-nieuwe-dakgoot`,
    datum: `2026-11-12`,
    titel: `Lekt het sinds je nieuwe dakgoot?`,
    h1: `Lekt het sinds je nieuwe dakgoot? Zo zie je waar het water heen gaat`,
    metaTitle: `Lekt het sinds je nieuwe dakgoot? | Spoed Dak Service`,
    metaDescription: `Natte muur of druppels sinds de goot is vervangen? Vaak valt het water achter de goot, zit de uitloop verkeerd of lekt een naad. Zo zie je het en dit doe je.`,
    intro: `De oude goot is eruit en er hangt een nieuwe. En toch wordt het nat: bovenin de muur, rond een kozijn of op het terras onder een plek waar het eerst droog bleef. Dat ligt meestal niet aan het materiaal van de nieuwe goot, maar aan hoe hij hangt en aansluit. Hieronder lees je waar het water dan meestal heen gaat, wat je zelf kunt zien en wie je belt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Wordt het binnen nat, zet dan een emmer of handdoek neer en haal spullen weg. Zit de natte plek bij een stopcontact of lamp, zet dan de groep in de meterkast uit. Zet zelf geen ladder tegen de nieuwe goot. Maak tijdens of vlak na een bui een foto of filmpje van de goot vanaf de straat, en een foto van de natte plek binnen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Het water valt achter de goot`, tekst: [
        `Het water van de onderste rij pannen moet in de goot vallen. Hangt de nieuwe goot een stukje lager of verder van de pannen dan de oude, dan valt het water bij een flinke bui tussen de goot en de muur naar beneden. Ook de folie onder de pannen moet aan de onderkant in de goot uitkomen. Eindigt die nu achter de goot, dan loopt water dat over de folie komt langs de muur naar binnen. Binnen zie je dat als een natte plek bovenin de muur, vlak onder het plafond. Lees ook <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `De goot loopt de verkeerde kant op`, tekst: [
        `Een goot moet een klein beetje aflopen naar de regenpijp. Hangt hij vlak, of loopt hij net de andere kant op, dan blijft het water staan of loopt het over aan het eind waar geen pijp zit. Na een bui staat er dan nog lang een laagje water in. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
      ] },
      { kop: `De uitloop sluit niet goed aan op de regenpijp`, tekst: [
        `Waar het water de goot uit gaat, moet de uitloop netjes in de regenpijp vallen. Zit de uitloop op een andere plek dan de oude, of is de regenpijp niet goed aangesloten, dan spat het water ernaast langs de gevel. Dat zie je als een natte streep op de muur onder de uitloop.`,
      ] },
      { kop: `Een naad of een hoek lekt`, tekst: [
        `Een kunststof goot zit met lijm of rubbers in elkaar, een zinken goot is gesoldeerd. Is een verbinding of een hoekstuk niet goed dicht, dan druppelt het op één vaste plek, ook als de bui al voorbij is. Lees <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Of was het er al?`, tekst: [
        `Soms viel een oud lek eerst niet op, of ligt er boven de goot ook een pan scheef. Wordt het nat op een plek waar de goot niet bij komt, zoals midden op het plafond of hoog op zolder, dan zit het eerder in het dak zelf.`,
      ] },
      { kop: `Wie bel je?`, tekst: [
        `Is de goot pas vervangen, meld het dan eerst bij wie hem heeft opgehangen, met je foto's en filmpje erbij. Wat er bij het ophangen niet goed is gegaan, hoort hij in de regel zelf op te lossen. Komt hij niet, of kom je er samen niet uit, dan kijk ik waar het water heen gaat en zeg ik eerlijk wat ik zie. Lees ook <a href="/kennisbank/dak-lekt-na-reparatie/">dak lekt nog na de reparatie</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst tijdens of na een bui waar het water langs de gevel loopt, en daarna bovenaan bij de goot, de onderste rij pannen en de uitloop. Hangt de goot te laag of de verkeerde kant op, dan hang ik hem opnieuw op afschot naar de regenpijp. Valt het water achter de goot, dan zorg ik dat het weer in de goot terechtkomt. Lekt een naad, dan maak ik die dicht. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is: de goot opnieuw ophangen, de uitloop verplaatsen of een naad dichtmaken. Stuur een foto of filmpje van de goot tijdens een bui en een foto van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `De goot is pas opgehangen. Mag ik iemand anders laten kijken?`, a: `Dat mag altijd, maar geef eerst degene die de goot heeft opgehangen de kans om het op te lossen. Laat je een ander iets aanpassen voordat hij heeft gekeken, dan kan dat later lastig worden als jullie het oneens zijn. Maak in elk geval foto's en een filmpje van wat je ziet, met de datum erbij.` },
      { v: `Hoe zie ik of de goot goed afloopt?`, a: `Kijk na een bui vanuit een raam boven, of met de zoom van je telefoon vanaf de overkant, of er nog water in de goot staat. Staat het water aan het eind zonder regenpijp, of over de hele lengte, dan loopt hij niet goed af. Loopt hij netjes leeg naar de pijp, dan is dat in orde.` },
      { v: `Is het spoed?`, a: `Loopt het water alleen buiten langs de gevel, dan meestal niet, al moet je het niet lang laten zitten. Wordt het binnen nat, bovenin de muur of rond een kozijn, of zit de plek bij een stopcontact, dan wel: bel of app me met een foto.` },
    ],
  },
  {
    slug: `lekt-sinds-dakisolatie`,
    datum: `2026-11-12`,
    titel: `Lekt het sinds je dak is geïsoleerd?`,
    h1: `Nat op zolder sinds je dak is geïsoleerd: condens, een geraakte pan of een oud lek?`,
    metaTitle: `Lekt het sinds je dak is geïsoleerd? | Spoed Dak Service`,
    metaDescription: `Druppels of een natte plek sinds je dak is geïsoleerd? Vaak is het condens, een pan of folie die bij het werk is geraakt, of een oud lek dat nu pas opvalt.`,
    intro: `Je dak is net geïsoleerd, en nu zie je druppels op zolder, een natte plek op de nieuwe platen of een vlek op het plafond. Dat is schrikken, want je wilde het huis juist beter maken. Meestal is het een van drie dingen: condens, een pan of de folie die bij het werk is geraakt, of een oud lek dat eerst niemand zag. Hieronder lees je hoe je die uit elkaar houdt en wie je belt.`,
    secties: [
      { kop: `Druppelt het nu? Eerst dit`, tekst: [
        `Zet een emmer of handdoek onder de plek en haal spullen weg. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Maak een foto van de plek en schrijf op wanneer het nat werd: tijdens een bui, of na een koude, droge nacht. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Condens: vocht dat achter de isolatie neerslaat`, tekst: [
        `Na het isoleren blijft de warmte beter binnen, en daardoor worden het hout en de folie aan de buitenkant van de isolatie kouder. Komt er warme, vochtige lucht uit het huis achter de isolatie, bijvoorbeeld langs een naad of een gat voor een lamp of leiding, dan slaat dat vocht neer tegen het koude dak en druppelt het terug. Dat zie je vooral na koude, heldere nachten, ook als het dagen droog is geweest, en vaak verspreid over een groter stuk. Lees ook <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Een pan of de folie is bij het werk geraakt`, tekst: [
        `Wordt er van binnenuit geïsoleerd, dan wordt er tegen het dak geschroefd en geniet. Een schroef die te lang is, kan door de folie gaan of een pan van onderen een stukje optillen. Wordt er van buitenaf geïsoleerd, dan gaan de pannen eraf en weer terug, en dan kan er een pan niet goed in de sluiting liggen of gebroken zijn. Dan wordt het nat tijdens of na regen, en steeds op dezelfde plek.`,
      ] },
      { kop: `Een oud lek dat nu pas opvalt`, tekst: [
        `Soms lekte het al, maar zag niemand het. Een klein lek liep vroeger langs een balk en droogde op zolder weer op. Nu zit er isolatie tegen het dak: het water zakt in de isolatie en komt pas bij een naad van de platen of op het plafond naar buiten. Dan lijkt het nieuw, maar zit het lek bijvoorbeeld bij het lood van de schoorsteen of een dakraam.`,
      ] },
      { kop: `Zo zie je het verschil`, tekst: [
        `Alleen nat tijdens of na regen, en steeds op dezelfde plek? Dan is het eerder een lek. Nat na een koude nacht, ook als het droog was, en op meer plekken tegelijk? Dan is het eerder condens. Zet met potlood een streep langs de rand van de vlek. Wordt hij na een bui groter, dan komt er water van buiten bij. Wordt hij groter na een koude, droge nacht, dan is het vocht van binnen.`,
      ] },
      { kop: `Wie bel je?`, tekst: [
        `Is het isoleren net gedaan, meld het dan eerst bij het bedrijf dat het deed, met je foto's en de data erbij. Wat bij het werk is misgegaan, hoort dat bedrijf in de regel zelf op te lossen. Isoleren doe ik zelf niet. Komt het water van buiten, of komen jullie er samen niet uit, dan kijk ik op het dak waar het binnenkomt.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst buiten naar de pannen boven de natte plek, de nok, het lood en de doorvoeren, en daarna binnen waar het water zit. Ligt er een pan scheef of is er een gebroken, dan leg ik hem goed of vervang ik hem. Zit het lek bij het lood of een doorvoer, dan maak ik dat dicht. Zie ik geen lek en wijst alles op condens, dan zeg ik dat eerlijk, want dat los je niet op het dak op. Is de isolatie nat geworden, lees dan <a href="/kennisbank/isolatie-nat-na-lekkage/">natte isolatie na een lekkage</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichtmaken kost bij mij ${inclBtw("daklekkage")}, inclusief het zoeken en het materiaal. Is het alleen een pan die verschoven of gebroken is, dan kost dat ${inclBtw("dakpan")}. Stuur een foto van de natte plek en van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan isoleren een lek veroorzaken?`, a: `Het isoleren zelf niet, maar bij het werk kan een pan of de folie geraakt worden. En als warme lucht uit huis achter de isolatie komt, kan er condens ontstaan die op een lek lijkt. Kijk dus eerst wanneer het nat wordt: na regen, of na een koude nacht.` },
      { v: `Moet de nieuwe isolatie eruit als hij nat is?`, a: `Niet altijd. Is hij op één plek kort nat geweest en is de oorzaak opgelost, dan kan die plek vaak drogen. Is hij lang of flink nat geweest, dan is het vaak beter om dat stuk te vervangen. Laat dat beoordelen door het bedrijf dat de isolatie heeft aangebracht.` },
      { v: `Is het spoed?`, a: `Druppelt het binnen, of zit de natte plek bij een lamp of stopcontact, dan wel: bel of app me met een foto. Gaat het om een paar druppels na een koude nacht en droogt het weer op, dan is het meestal geen spoed, maar laat het wel nakijken.` },
      { v: `Isoleer jij ook daken?`, a: `Nee, isoleren doe ik niet. Ik zorg wel dat je dak dicht is, en dat is ook verstandig om te laten nakijken voordat er geïsoleerd wordt. Op een dak dat water doorlaat, wordt isolatie nat.` },
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
  "lekt-sinds-nieuwe-dakgoot": `Wordt het nat sinds je dakgoot is vervangen, dan hangt de nieuwe goot vaak net lager of verder van de pannen, zodat het water erachter valt, of loopt hij niet goed af naar de regenpijp. Ook een uitloop die niet goed in de pijp valt of een naad die niet dicht is, kan het zijn. Meld het eerst bij wie de goot heeft opgehangen.`,
  "lekt-sinds-dakisolatie": `Wordt het nat sinds je dak is geïsoleerd, dan is het vaak condens: vocht uit huis dat achter de isolatie tegen het koude dak neerslaat, vooral na koude nachten. Is het alleen nat tijdens of na regen, op één vaste plek, dan is eerder een pan of de folie bij het werk geraakt, of valt een oud lek nu pas op. Meld het eerst bij het bedrijf dat isoleerde.`,
};
