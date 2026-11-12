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
  {
    slug: `vochtplek-schoorsteen-binnen`,
    datum: `2026-11-12`,
    titel: `Vochtplek op je schoorsteen binnen?`,
    h1: `Vochtplek of vlek op de schoorsteen in je kamer: lood, regen in het kanaal of condens?`,
    metaTitle: `Vochtplek op je schoorsteen binnen? | Spoed Dak Service`,
    metaDescription: `Een natte plek, een bruine vlek of bladderende verf op de schoorsteen in je kamer? Vaak zit het in het lood, in regen die in het kanaal valt of in condens.`,
    intro: `Op de schoorsteen in je woonkamer of slaapkamer verschijnt een natte plek, een gele of bruine vlek, of de verf en het behang laten los. Dat is vreemd, want de schoorsteen loopt helemaal door tot boven het dak. Het water kan op een paar plekken binnenkomen, en niet altijd is dat werk voor een dakdekker. Hieronder lees je hoe je het verschil ziet en wie je belt.`,
    secties: [
      { kop: `Is het nu nat? Eerst dit`, tekst: [
        `Haal spullen weg van de muur en leg een handdoek op de grond als het druppelt. Stook de kachel of haard niet als er water in komt. Maak een foto van de plek en kijk, als het veilig kan, ook op zolder naar de schoorsteen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Het lood rond de schoorsteen op het dak`, tekst: [
        `Waar de schoorsteen door de pannen komt, ligt lood of loodvervanger. Scheurt dat of komt het los, dan loopt het regenwater langs de stenen naar beneden. Vaak zie je het eerst op zolder, als een natte plek op of naast de schoorsteen. Maar het water kan in de muur ook verder zakken en pas een verdieping lager in de kamer naar buiten komen. Is de schoorsteen op zolder ook nat na regen, dan is het lood een sterke kandidaat. Lees ook <a href="/kennisbank/lood-op-dak/">lood op je dak</a> en <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
      ] },
      { kop: `Regen die in een open kanaal valt`, tekst: [
        `Staat er geen kap of afdekplaat op een kanaal dat je niet meer gebruikt, dan valt er bij elke bui regen in. Dat trekt in de binnenkant van het kanaal en komt na een paar dagen naar buiten als een vochtige of bruine plek op de schoorsteen in de kamer. Zie <a href="/kennisbank/schoorsteen-afdekken/">schoorsteen afdekken</a>. Komt het water in een haard die je nog gebruikt, lees dan <a href="/kennisbank/schoorsteen-lekt-open-haard/">water in je open haard</a>.`,
      ] },
      { kop: `Condens en roet in het kanaal`, tekst: [
        `Is er een kachel, haard of ketel op het kanaal aangesloten, dan kan de warme, vochtige rook in een koud kanaal afkoelen. Het vocht slaat dan neer, en met roet erin geeft dat gele of bruine vlekken die door de muur heen komen, soms met een vieze lucht. Dat gebeurt ook bij droog weer, vooral als je stookt. Dat los je niet op het dak op: laat het kanaal nakijken door een schoorsteenveger of je installateur.`,
      ] },
      { kop: `De stenen of voegen van de schoorsteen`, tekst: [
        `Boven het dak staat de schoorsteen in weer en wind. Zijn de stenen of de voegen poreus geworden, dan trekt er bij slagregen water in. Aan de stenen werk ik niet. Zie ik dat het daar zit, dan zeg ik dat eerlijk, zodat je er een metselaar naar kunt laten kijken.`,
      ] },
      { kop: `Zo zie je het verschil`, tekst: [
        `Alleen nat na regen, of na regen met harde wind uit één richting? Dan zit het eerder in het lood, een open kanaal of de stenen. Ook nat of vlekkerig als het droog is, vooral als je stookt, en geel of bruin van kleur? Dan is het eerder condens of roet in het kanaal. Kijk ook op zolder: is de schoorsteen daar nat aan de kant van de pannen, dan komt het van buiten.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk op het dak naar het lood rond de schoorsteen, de pannen eromheen en de bovenkant van het kanaal, en op zolder waar de schoorsteen nat is. Los lood zet ik weer vast, gescheurd lood vervang ik, meestal met loodvervanger en op wens met echt lood. Staat een kanaal dat je niet meer gebruikt open, dan kan er een kap of afdekplaat op die het kanaal laat ademen. Zie <a href="/diensten/lood-vervangen/">lood vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is: lood vastzetten, nieuw lood of een kap op het kanaal. Stuur een foto van de schoorsteen vanaf de straat en van de plek binnen via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: lood vervangen`, href: `/diensten/lood-vervangen/` },
    faq: [
      { v: `De plek droogt niet op, ook niet na een paar droge weken. Wat is dat?`, a: `Dan is het vaak vocht dat nog in de stenen zit, of condens en roet in het kanaal. Stenen drogen langzaam, soms duurt dat weken. Wordt de plek na regen weer natter, dan komt er nog water van buiten bij. Blijft hij gelijk of wordt hij bruiner als je stookt, laat dan het kanaal nakijken.` },
      { v: `Kan ik de vlek gewoon overschilderen?`, a: `Pas als de oorzaak weg is en de muur droog is. Verf je eroverheen terwijl er nog vocht in zit, dan komt de vlek terug of gaat de verf bladderen.` },
      { v: `Is een natte schoorsteen binnen spoed?`, a: `Meestal niet, tenzij het druppelt of de plek bij een stopcontact of lamp zit. Zet dan de groep uit en bel of app me met een foto. Een vochtplek die langzaam groter wordt, laat je wel op korte termijn nakijken, want natte stenen en balken worden er niet beter van.` },
      { v: `Mijn buren hebben dezelfde schoorsteen. Kan het van hun kant komen?`, a: `Dat kan. Staat de schoorsteen op de muur tussen jullie huizen, dan kan het lood of het kanaal aan hun kant de oorzaak zijn. Lees daarover lekkage bij een gedeelde schoorsteen in de kennisbank.` },
    ],
  },
  {
    slug: `cv-ketel-lekt-bij-regen`,
    datum: `2026-11-12`,
    titel: `Water bij je cv-ketel als het regent?`,
    h1: `Water bij je cv-ketel als het regent: lekt de pijp door het dak?`,
    metaTitle: `Water bij je cv-ketel als het regent? | Spoed Dak Service`,
    metaDescription: `Druppelt het bij je cv-ketel of langs de pijp erboven als het regent? Vaak komt het water langs de doorvoer op het dak binnen. Zo zie je wie je belt.`,
    intro: `Het regent, en ineens staat er water onder je cv-ketel, druppelt het langs de pijp boven de ketel of zit er een natte plek op het plafond van de kast of de zolder waar de ketel hangt. Bij veel huizen gaat de pijp van de ketel door het dak naar buiten, en waar die pijp door de pannen gaat, kan regenwater binnenkomen. Maar water bij een ketel kan ook van de ketel zelf komen. Hieronder lees je hoe je het verschil ziet en wie je belt.`,
    secties: [
      { kop: `Druppelt het nu? Eerst dit`, tekst: [
        `Zet een bak of handdoek onder de druppel en haal spullen weg. Komt het water op of in de ketel, of bij een stopcontact, raak dan niets aan wat nat is, zet de ketel niet zelf open en bel je installateur. Ga niet zelf het dak op. Maak een foto van de plek waar het druppelt en, als het lukt, van de pijp op je dak vanaf de straat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar de pijp door het dak gaat`, tekst: [
        `Bij veel HR-ketels gaat er een pijp door het dak: daardoor gaat de rook naar buiten en komt er verse lucht naar binnen. Op het dak zit die pijp in een speciale doorvoerpan, met een kraag van rubber of lood eromheen. Droogt die kraag na jaren uit of scheurt hij, of ligt de doorvoerpan niet meer goed tussen de andere pannen, dan loopt het regenwater langs de buitenkant van de pijp naar beneden. Op zolder zie je dat als een natte plek op het hout of de folie rond de pijp, en lager als druppels langs de pijp tot bij de ketel.`,
      ] },
      { kop: `Na een storm: de kap op de pijp`, tekst: [
        `Bovenop de pijp zit een kap. Staat die na een storm scheef of is hij weg, dan heeft de wind vaak ook aan de kraag rond de pijp getrokken. Kijk vanaf de overkant van de straat of de pijp nog recht staat en de kap er nog op zit. De kap hoort meestal bij het afvoersysteem van je ketel, en die laat je vervangen door je installateur. De kraag en de doorvoerpan op het dak maak ik weer dicht.`,
      ] },
      { kop: `Of komt het water van de ketel zelf?`, tekst: [
        `Een HR-ketel maakt bij het stoken zelf water: condenswater. Dat loopt via een slangetje en een sifon onder de ketel naar het riool. Zit dat slangetje los, is de sifon verstopt of lekt een verbinding van een cv-leiding, dan druppelt het onder de ketel, ook als het droog weer is. Zakt de druk van je ketel steeds terwijl je niets bijvult, dan lekt er vaak ergens een cv-leiding. Dat is werk voor je installateur, niet voor een dakdekker. Lees ook <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a>`,
      ] },
      { kop: `Zo zie je het verschil`, tekst: [
        `Alleen nat tijdens of na regen, en het meest bij regen met wind? Dan komt het water van buiten, langs de doorvoer op het dak. Ook nat als het dagen droog is, vooral als de ketel brandt? Dan komt het eerder van de ketel, het condenswater of een leiding. Kijk ook op zolder: is het hout of de folie rond de pijp nat, of loopt er een streep langs de buitenkant van de pijp, dan komt het van het dak. Droog de plek af en kijk na de volgende bui of hij weer nat is.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water langs de pijp loopt, en daarna op het dak naar de kraag, de doorvoerpan en de pannen eromheen. Is de kraag gescheurd of uitgedroogd, dan vervang ik hem. Ligt de doorvoerpan niet goed of is hij kapot, dan leg ik er een die bij je pannen past. Aan de ketel en de pijp binnen kom ik niet, dat doet je installateur. Zit het daar, dan zeg ik dat eerlijk. Zie <a href="/diensten/dakdoorvoer/">dakdoorvoer plaatsen of repareren</a> en <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek bij de doorvoer opsporen en dichtmaken kost bij mij ${inclBtw("daklekkage")}, inclusief het zoeken en het materiaal. Moet er een nieuwe doorvoerpan in, stuur dan een foto van de pijp op je dak vanaf de straat en van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakdoorvoer plaatsen of repareren`, href: `/diensten/dakdoorvoer/` },
    faq: [
      { v: `Is water bij mijn cv-ketel gevaarlijk?`, a: `Water op of in de ketel hoort er niet. Raak geen natte stekkers of stopcontacten aan, zet de ketel niet zelf open en bel bij water op of in de ketel eerst je installateur. Komt het water van boven langs de pijp, dan maak ik daarna de doorvoer op het dak dicht.` },
      { v: `Bel ik eerst de installateur of jou?`, a: `Komt het water alleen bij regen en zie je op zolder een natte plek rond de pijp, bel of app dan mij. Druppelt het ook bij droog weer, onder de ketel of bij een leiding, of zakt de druk van je ketel, bel dan je installateur. Twijfel je, stuur me een foto van de plek en vertel wanneer het nat wordt, dan zeg ik eerlijk wie je het beste kunt bellen.` },
      { v: `De pijp van mijn ketel gaat door de muur, niet door het dak. Kan het dan ook lekken?`, a: `Dan zit het niet in het dak, en dan is het werk voor je installateur. Komt er bij jou een natte plek hoger in huis, op zolder of onder de pannen, dan kijk ik wel waar die vandaan komt.` },
      { v: `Mijn ketel is net vervangen en nu lekt het bij de pijp. Wie lost het op?`, a: `Is er bij het vervangen ook een nieuwe pijp door het dak gegaan, meld het dan eerst bij de installateur die dat deed. Wat bij het werk niet goed is gegaan, hoort hij in de regel zelf op te lossen. Komt hij er niet uit, of zat de doorvoer er al, dan kijk ik op het dak waar het water binnenkomt.` },
    ],
  },
  {
    slug: `afzuigkap-lekt-bij-regen`,
    datum: `2026-11-12`,
    titel: `Water uit je afzuigkap als het regent?`,
    h1: `Water uit je afzuigkap als het regent: dak, kanaal of condens?`,
    metaTitle: `Water uit je afzuigkap als het regent? | Spoed Dak Service`,
    metaDescription: `Druppelt er water uit je afzuigkap of uit het kanaal erboven? Vaak komt het langs de pijp door het dak, of is het condens in het kanaal. Zo zie je het verschil.`,
    intro: `Je kookt niet eens, en toch druppelt er water uit je afzuigkap, of er zit een natte plek op het plafond erboven. Bij een afzuigkap met een motor gaat de lucht via een kanaal of slang naar buiten, en bij veel huizen loopt dat kanaal over de zolder naar een pijp door het dak. Langs dat hele stuk kan water binnenkomen. Hieronder lees je waar het meestal zit, hoe je het verschil ziet en wie je belt.`,
    secties: [
      { kop: `Druppelt het nu? Eerst dit`, tekst: [
        `Zet de afzuigkap uit, leg een doek of bak op het fornuis of het aanrecht en haal spullen weg. Druppelt het bij de lampjes in de afzuigkap, laat hem dan uit tot hij droog is. Ga niet zelf het dak op. Maak een foto van de afzuigkap en, als je erbij kunt, van het kanaal op zolder. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Regen langs de pijp door het dak`, tekst: [
        `Waar het kanaal door het dak naar buiten gaat, zit een doorvoerpan met een kraag rond de pijp. Is die kraag uitgedroogd of gescheurd, of ligt de doorvoerpan niet goed tussen de andere pannen, dan loopt het regenwater langs de buitenkant van de pijp naar binnen. Het zakt mee langs het kanaal en komt er bij de afzuigkap weer uit. Op zolder zie je dan een natte plek op het hout of de folie rond de pijp.`,
      ] },
      { kop: `Regen in de pijp`, tekst: [
        `Bovenop de pijp op het dak hoort een kapje dat de regen tegenhoudt. Is dat na een storm weggewaaid of scheef gaan staan, dan valt de regen recht in de pijp en loopt hij door het kanaal naar beneden. Kijk vanaf de overkant van de straat of de pijp op je dak nog een kapje heeft.`,
      ] },
      { kop: `Condens in het kanaal`, tekst: [
        `Bij het koken gaat er warme, vochtige lucht door het kanaal. Loopt dat kanaal over een koude zolder, dan koelt die lucht af en slaat het vocht aan de binnenkant neer. Dat water loopt terug naar de afzuigkap. Je merkt het vooral bij koud weer en na het koken, ook als het droog is. Een lang kanaal dat doorhangt, maakt het erger. Dat los je niet op het dak op: laat het kanaal nakijken door je installateur of keukenleverancier.`,
      ] },
      { kop: `Een slang die los zit`, tekst: [
        `Zit het kanaal op zolder los van de pijp door het dak, dan blaast de vochtige kooklucht de zolder in. Die slaat neer tegen het koude dak en geeft druppels die op een lek lijken. Lees daarover <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo zie je het verschil`, tekst: [
        `Komt er water uit de afzuigkap tijdens of na regen, ook als je niet hebt gekookt? Dan komt het van buiten: langs de pijp door het dak, of door een kapje dat mist. Komt er alleen water na het koken, vooral als het koud is? Dan is het eerder condens in het kanaal. Kijk ook op zolder: is het hout of de folie rond de pijp nat, dan komt het van het dak.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk op zolder waar het water langs de pijp loopt en daarna op het dak naar de kraag, de doorvoerpan en het kapje. Een gescheurde kraag of een doorvoerpan die niet goed ligt, vervang ik. Mist het kapje of is de doorvoer zelf op, dan plaats ik een nieuwe doorvoer die bij je pannen past. Het kanaal binnen en de aansluiting op de afzuigkap doet je installateur of keukenleverancier. Zie <a href="/diensten/dakdoorvoer/">dakdoorvoer plaatsen of repareren</a> en <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Gaat het om de kraag of een doorvoerpan die niet goed ligt, dan valt het onder een lek opsporen en dichtmaken: ${inclBtw("daklekkage")}. Een nieuwe doorvoer hangt af van je pannen en de dikte van de pijp. Stuur een foto van de pijp op je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakdoorvoer plaatsen of repareren`, href: `/diensten/dakdoorvoer/` },
    faq: [
      { v: `Mag ik de afzuigkap nog gebruiken?`, a: `Druppelt het uit de afzuigkap of bij de lampjes, zet hem dan uit tot je weet waar het water vandaan komt en hij droog is. Gaat het om een paar druppels condens na het koken, dan kun je hem meestal gewoon gebruiken, maar laat het kanaal wel nakijken.` },
      { v: `Mijn afzuigkap heeft geen kanaal naar buiten. Waar komt het water dan vandaan?`, a: `Een afzuigkap die de lucht door een filter terug de keuken in blaast, krijgt via een pijp geen regen binnen. Komt er dan toch water uit of eromheen, dan druppelt het vaak van hoger: een lek in het plafond erboven, een leiding of de badkamer. Kijk of er een natte plek op het plafond zit en stuur me een foto, dan zeg ik eerlijk of het bij het dak hoort of bij een loodgieter.` },
      { v: `Is water uit de afzuigkap spoed?`, a: `Meestal niet, tenzij het bij de lampjes of de stekker druppelt of er veel water komt. Zet de afzuigkap dan uit en stuur me een foto. Een paar druppels na een bui laat je wel op korte termijn nakijken, want het water loopt ook langs het hout op zolder.` },
      { v: `Er is net een nieuwe keuken geplaatst en sindsdien lekt het. Wie lost het op?`, a: `Is er bij de nieuwe keuken ook een nieuw kanaal of een nieuwe pijp door het dak gemaakt, meld het dan eerst bij wie dat deed. Wat bij het werk niet goed is gegaan, hoort hij in de regel zelf op te lossen. Zat de pijp door het dak er al, of komt hij er niet uit, dan kijk ik op het dak waar het water binnenkomt.` },
    ],
  },
  {
    slug: `keurmerk-dakdekker`,
    datum: `2026-11-12`,
    titel: `Keurmerk voor dakdekkers: wat zegt het?`,
    h1: `Keurmerk voor dakdekkers: wat zegt het, en wat kijk je zelf na?`,
    metaTitle: `Keurmerk dakdekker: wat zegt het? | Spoed Dak Service`,
    metaDescription: `Een keurmerk zegt iets over een dakdekker, maar niet alles. Zo kijk je of het klopt en wat je zelf nakijkt: KvK, verzekering, prijs vooraf, reviews.`,
    intro: `Zoek je een dakdekker, dan zie je op veel sites en bussen het logo van een keurmerk of een branchevereniging. Dat geeft een goed gevoel, maar wat zegt het eigenlijk? En betekent geen keurmerk dat een dakdekker minder goed is? Hieronder lees je wat een keurmerk wel en niet zegt, hoe je nakijkt of het klopt, en wat je bij elke dakdekker zelf kunt controleren.`,
    secties: [
      { kop: `Wat is een keurmerk voor dakdekkers?`, tekst: [
        `In de dakenbranche zijn er keurmerken en brancheverenigingen, zoals het keurmerk Dakmerk en de branchevereniging Vebidak. Een bedrijf dat zo'n keurmerk voert, heeft afgesproken zich aan bepaalde eisen te houden en wordt daar in de regel op gecontroleerd. Welke eisen dat zijn, en of er een regeling is als er iets misgaat, verschilt per keurmerk. Dat lees je op de site van het keurmerk zelf.`,
      ] },
      { kop: `Kijk na of het klopt`, tekst: [
        `Een logo op een site of een bus is snel geplakt. Zoek daarom op de site van het keurmerk of de vereniging of het bedrijf echt in de lijst staat, met dezelfde naam en dezelfde plaats. Staat het er niet in, vraag dan waarom.`,
      ] },
      { kop: `Wat een keurmerk niet zegt`, tekst: [
        `Een keurmerk zegt niet wie er bij jou op het dak staat, of de prijs eerlijk is en of het bedrijf de klus zelf doet of doorgeeft. Ook een bedrijf met een keurmerk kan een dure offerte maken, en een kleine dakdekker zonder keurmerk kan prima werk leveren. Kijk dus ook naar de punten hieronder.`,
      ] },
      { kop: `Wat je bij elke dakdekker zelf kunt nakijken`, tekst: [
        `Staat het bedrijf bij de KvK? Zoek de naam op in het handelsregister van de KvK en kijk of de naam, de plaats en het soort bedrijf kloppen.`,
        `Is het bedrijf verzekerd? Vraag of het bedrijfsaansprakelijk verzekerd is. Gaat er bij het werk iets kapot bij jou of bij de buren, dan is daar een verzekering voor.`,
        `Hoor je de prijs vooraf? Een goede dakdekker zegt voordat hij begint wat het kost en wat erbij hoort, het liefst op papier of in een appje. Lees ook <a href="/kennisbank/offerte-dakdekker-vergelijken/">twee offertes eerlijk vergelijken</a>.`,
        `Staan de afspraken op papier? Vraag wat er gebeurt als er na het werk toch iets mis blijkt, en laat dat op papier of in een appje zetten.`,
        `Wat schrijven andere klanten? Kijk niet alleen naar het cijfer, maar naar wat mensen over het contact, de prijs en het werk schrijven.`,
        `Wie spreek je? Krijg je een callcenter of een planner aan de lijn, of degene die het werk doet? Dat zegt veel over hoe het contact later loopt.`,
        `Moet je meteen beslissen? Belt er iemand aan die zegt dat het vandaag nog moet, neem dan de tijd. Lees <a href="/kennisbank/dakdekker-aan-de-deur/">er belt een dakdekker aan</a>.`,
      ] },
      { kop: `Wat je bij mij kunt nakijken`, tekst: [
        `Ik ben Rens, dakdekker uit 's-Hertogenbosch, en Spoed Dak Service is mijn eigen bedrijf. Mijn KvK-nummer staat onderaan elke pagina van deze site. Ik ben bedrijfsaansprakelijk verzekerd, je hoort de prijs voordat ik begin en je spreekt met mij, niet met een callcenter. Wat klanten over mij schrijven, lees je op <a href="/over/">over Rens</a>. Meer over hoe je een goede dakdekker herkent, staat in <a href="/kennisbank/hoe-herken-je-een-betrouwbare-dakdekker/">een betrouwbare dakdekker herkennen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Is een dakdekker zonder keurmerk minder goed?`, a: `Niet per se. Veel kleine dakdekkers hebben geen keurmerk en leveren goed werk. Kijk bij elke dakdekker naar de KvK-inschrijving, de verzekering, een prijs vooraf, afspraken op papier en wat andere klanten schrijven.` },
      { v: `Hoe controleer ik of een keurmerk echt is?`, a: `Zoek op de site van het keurmerk of de branchevereniging naar de naam van het bedrijf. Staat het in de lijst met dezelfde naam en plaats, dan klopt het. Zie je alleen een logo op de site of de bus, vraag dan om het lidnummer en kijk het na.` },
      { v: `Wat is het verschil tussen een keurmerk en een branchevereniging?`, a: `Een branchevereniging is een vereniging van bedrijven uit dezelfde branche. Een keurmerk is een set eisen waar een bedrijf aan moet voldoen, en waarop het in de regel wordt gecontroleerd. Bij allebei hangt het ervan af wat er precies achter zit, en dat lees je op hun eigen site.` },
      { v: `Waar let ik op bij reviews van een dakdekker?`, a: `Kijk niet alleen naar het cijfer, maar naar wat mensen schrijven: kwam hij op de afgesproken tijd, klopte de prijs met wat vooraf was gezegd, en werd een probleem achteraf netjes opgelost? Een paar echte reviews met een naam en een plaats zeggen meer dan veel sterren zonder tekst.` },
    ],
  },
  {
    slug: `water-uit-zolderluik`,
    datum: `2026-11-12`,
    titel: `Water uit je zolderluik?`,
    h1: `Water uit je zolderluik of langs de vlizotrap: lek op zolder of condens?`,
    metaTitle: `Water uit je zolderluik of vlizotrap? | Spoed Dak Service`,
    metaDescription: `Druppelt het uit je zolderluik of langs de vlizotrap? Vaak loopt er water over de zoldervloer naar het luikgat, of is het condens. Zo zie je wat het is.`,
    intro: `Het druppelt uit de kier rond je zolderluik, er zit een natte plek op het plafond naast het luik, of de treden van de vlizotrap zijn nat. Dat is vreemd, want het luik zelf kan niet lekken. Het water komt van hoger: van een lek in het dak dat over de zoldervloer naar het gat van het luik loopt, of van vocht uit je huis dat op de koude zolder neerslaat. Hieronder lees je hoe je die twee uit elkaar houdt en wat je doet.`,
    secties: [
      { kop: `Druppelt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder het luik en leg een handdoek op de vloer. Zit er een lamp of schakelaar bij de natte plek, zet dan in de meterkast de groep van die verdieping uit. Klap de vlizotrap niet uit als er water op ligt of als de treden nat zijn, want dan glij je zo weg. Ga ook niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom het juist bij het luik naar beneden komt`, tekst: [
        `Een zoldervloer is zelden helemaal vlak, en waar het luik zit, zit een gat in die vloer. Komt er ergens op zolder water binnen, bijvoorbeeld bij de schoorsteen, een dakraam of een pijp door het dak, dan loopt dat over de vloer of langs een balk naar het laagste punt. Vaak is dat het luikgat. Daardoor druppelt het uit de kier rond het luik, terwijl het lek een paar meter verderop in het dak zit. Lees ook <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Warme lucht uit je huis bevat vocht. Sluit het luik niet goed aan, dan stroomt die warme lucht langs de kieren de koude zolder op. Daar koelt hij af tegen de pannen, de folie of het hout, en het vocht slaat neer. Die druppels vallen terug op de vloer en lopen naar het luik, of het luik zelf wordt aan de zolderkant nat. Dat zie je vooral na koude, heldere nachten, vaak op meer plekken tegelijk, ook als het dagen droog is geweest. Zie <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo zie je het verschil`, tekst: [
        `Ga met een zaklamp op zolder kijken, tijdens of vlak na een bui als dat veilig kan. Volg het natte spoor op de vloer of langs een balk terug naar boven. Komt het uit één hoek, bij de schoorsteen, een dakraam of een pijp, en alleen als het regent? Dan is het een lek. Zie je druppels verspreid over de onderkant van het dak en is het ook nat na een droge, koude nacht? Dan is het eerder condens. Maak foto's van wat je ziet, met de datum en het weer erbij.`,
      ] },
      { kop: `Wat je zelf kunt doen`, tekst: [
        `Leg een oude handdoek of een bak op de plek op zolder waar het water vandaan komt, zodat het niet verder over de vloer loopt, en haal spullen uit die hoek. Is het condens, kijk dan of het luik goed sluit: een tochtstrip rond het luik houdt de warme lucht beneden. Hangt er veel vocht in huis, bijvoorbeeld van douchen of de was, zet dan de ventilatie aan. Smeer geen kit tussen de pannen of op het dak.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water vandaan komt, en daarna op het dak boven die plek: de pannen, de nok, het lood rond de schoorsteen of het dakraam en de kraag rond een pijp. Zit daar het lek, dan maak ik het dicht. Zie ik geen lek en wijst alles op condens, dan zeg ik dat eerlijk, want dat los je niet op het dak op. Zie <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichtmaken kost bij mij ${inclBtw("daklekkage")}, inclusief het zoeken en het materiaal. Ligt er alleen een pan scheef of is er een gebroken, dan kost dat ${inclBtw("dakpan")}. Stuur een foto van de natte plek op zolder en van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan een zolderluik zelf lekken?`, a: `Nee. Een luik zit binnen in je huis. Komt er water uit, dan komt dat van hoger: van een lek in het dak dat over de zoldervloer naar het luikgat loopt, of van condens op de koude zolder.` },
      { v: `Is water uit het zolderluik spoed?`, a: `Druppelt het, of zit de natte plek bij een lamp of stopcontact, dan wel: zet de groep uit en bel of app me met een foto. Gaat het om een paar druppels na een koude nacht die weer opdrogen, dan is het meestal condens en geen spoed, maar laat het wel nakijken.` },
      { v: `Helpt het als het luik beter sluit?`, a: `Tegen condens vaak wel: een luik dat goed sluit, houdt de warme, vochtige lucht beneden. Tegen een lek in het dak helpt het niet, want dan blijft het water op zolder doorlopen. Kijk dus eerst of het alleen bij regen nat wordt.` },
      { v: `Ik heb alleen een klein luik en kom niet goed op zolder. Kun je dan toch kijken?`, a: `Meestal wel. Zet de spullen onder het luik opzij, zodat ik erbij kan. Stuur vooraf een foto van de natte plek en van je dak vanaf de straat, dan weet ik waar ik moet beginnen. Je hoort vooraf wat het kost.` },
    ],
  },
  {
    slug: `regenpijp-kapot-door-vorst`,
    datum: `2026-11-12`,
    titel: `Regenpijp kapot door vorst?`,
    h1: `Regenpijp gescheurd of lek na de vorst: hoe komt dat en wat doe je?`,
    metaTitle: `Regenpijp gescheurd door vorst? | Spoed Dak Service`,
    metaDescription: `Een scheur in je regenpijp, een losse bocht of water dat halverwege de gevel naar buiten spuit na een vorstperiode? Zo komt het, en zo voorkom je het.`,
    intro: `Na een paar nachten vorst zie je het ineens: een lange scheur in je regenpijp, een bocht die uit elkaar is geschoven, of bij de eerste bui spuit het water halverwege de gevel naar buiten. Een regenpijp gaat niet zomaar kapot van de kou. Er heeft water in gestaan dat is bevroren, en ijs zet uit. Hieronder lees je hoe dat komt, wat je meteen doet en hoe je het de volgende winter voorkomt.`,
    secties: [
      { kop: `Spuit of druppelt het nu? Eerst dit`, tekst: [
        `Loopt het water langs de gevel, zet er dan als het makkelijk kan een emmer of bak onder, zodat er geen plas tegen de muur blijft staan en er bij vorst geen ijs op de stoep komt. Hak geen ijs uit de pijp en giet er geen heet water in: verderop bevriest het meteen weer, en koud kunststof breekt snel als je ertegen slaat. Zet geen ladder tegen de pijp. Maak tijdens een bui een foto of filmpje van de plek waar het water eruit komt.`,
      ] },
      { kop: `Waarom een regenpijp bevriest`, tekst: [
        `Een regenpijp is bedoeld om leeg te lopen. Bevriest hij, dan stond er water in dat niet weg kon. Meestal zit de pijp onderaan dicht: in de bocht vlak boven de grond, of in de aansluiting op de buis onder de bestrating, waar blad, zand en mos uit de goot zich ophopen. Zakt de bestrating rond de pijp, dan kan ook die aansluiting een stukje zijn verschoven. Bij vorst bevriest het water dat erboven staat, en het ijs duwt de pijp van binnenuit open. Lees ook <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>.`,
      ] },
      { kop: `Wat je dan ziet`, tekst: [
        `Een scheur in de lengte. Bij een kunststof pijp zie je vaak een rechte scheur van een paar centimeter tot een flink stuk lang. Bij de volgende bui spuit of druppelt het water daar naar buiten.`,
        `Een bocht of verbinding die uit elkaar is geschoven. Het ijs duwt de stukken uit elkaar, en dan zit er een kier bij een verbinding. Het water loopt daar langs de buitenkant van de pijp naar beneden.`,
        `Een pijp die uit de uitloop van de goot is gedrukt. Zit de pijp onderaan vast in de grond en bevriest hij, dan kan hij bovenaan een stukje omhoog of opzij zijn geschoven. Het water valt dan naast de pijp langs de gevel.`,
        `Een zinken pijp met een barst of een open naad. Zink is taaier dan kunststof, maar ook daar kan ijs een soldeernaad of een zwakke plek openduwen.`,
      ] },
      { kop: `Waarom je het niet de hele winter laat zitten`, tekst: [
        `Loopt het water halverwege de gevel naar buiten, dan wordt de muur op die plek bij elke bui nat, en bij vorst bevriest dat water in de voegen en de stenen. Zit de pijp vol ijs, dan kan ook de goot erboven overlopen. Zie ook <a href="/kennisbank/ijspegels-aan-dakgoot/">ijspegels aan je dakgoot</a>.`,
      ] },
      { kop: `Zo voorkom je het`, tekst: [
        `Houd de goot en de uitloop naar de regenpijp leeg, zeker na de bladval, want wat in de goot ligt, spoelt bij elke bui de pijp in. Kijk tijdens een flinke bui of het water onderaan de pijp goed wegloopt. Komt er bijna niets uit terwijl de goot vol staat, of blijft er water staan rond de voet van de pijp, dan zit hij ergens dicht. Laat dat vrijmaken voordat het gaat vriezen. Zie <a href="/kennisbank/dakgoot-schoonmaken-in-de-winter/">dakgoot schoonmaken in de winter</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst waar de pijp kapot is en waarom er water in bleef staan. Een gescheurd stuk pijp of een kapotte bocht vervang ik door een nieuw stuk dat past, in kunststof of zink. Is een verbinding uit elkaar geschoven, dan zet ik de stukken weer in elkaar en maak ik de pijp vast met beugels. Zit de verstopping bovenin of in een bocht waar ik bij kan, dan maak ik die vrij. Zit het dieper, onder de grond of in het riool, dan zeg ik eerlijk dat daar een ontstoppingsbedrijf voor nodig is. Zie <a href="/diensten/regenpijp-vervangen/">regenpijp vervangen of repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er kapot is: één stuk of een bocht vervangen is iets anders dan de hele pijp. Stuur een foto van de pijp vanaf de straat en, als het lukt, een filmpje tijdens een bui via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: regenpijp vervangen of repareren`, href: `/diensten/regenpijp-vervangen/` },
    faq: [
      { v: `Kan ik een scheur in mijn regenpijp zelf afplakken?`, a: `Als noodoplossing tot de reparatie helpt tape soms even, op een droge, schone pijp en alleen als je er vanaf de grond bij kunt. Lang houdt het niet: zodra er weer water in staat en het vriest, duwt het ijs de scheur verder open. Zet er geen ladder voor tegen de pijp.` },
      { v: `Mijn regenpijp zit vol ijs. Moet ik iets doen?`, a: `Laat hem vanzelf ontdooien. Hak er niet in en giet er geen heet water in. Loopt de goot erboven over en hangen er grote ijspegels boven de stoep of je voordeur, houd daar dan mensen weg. Zie je na de dooi een scheur, of loopt het water naast de pijp, stuur me dan een foto.` },
      { v: `Moet de hele regenpijp vervangen worden?`, a: `Meestal niet. Vaak is alleen het stuk met de scheur of de bocht onderaan kapot, en dat vervang ik los. Is de pijp over de hele lengte bros of verkleurd en breekt het kunststof als je erop drukt, dan zeg ik eerlijk dat een nieuwe pijp slimmer is.` },
      { v: `Is een kapotte regenpijp spoed?`, a: `Meestal niet, zolang het water buiten langs de gevel loopt. Wordt het binnen nat, bijvoorbeeld bij een regenpijp die binnen in de muur zit, dan wel: stuur me meteen een foto van de natte plek.` },
    ],
  },
  {
    slug: `wachten-op-dakdekker-na-storm`,
    datum: `2026-11-13`,
    titel: `Na een storm wachten op een dakdekker?`,
    h1: `Na een storm geen dakdekker te krijgen? Zo houd je het droog tot er iemand komt`,
    metaTitle: `Wachten op een dakdekker na storm? | Spoed Dak Service`,
    metaDescription: `Na een zware storm hebben dakdekkers het druk. Zo houd je het binnen droog, dit laat je beter, dit stuur je mee en zo hoor je wanneer er iemand komt.`,
    intro: `Na een zware storm gaat bij veel dakdekkers tegelijk de telefoon. Iedereen wil zijn dak het liefst vandaag nog dicht hebben, en er zijn maar een paar handen. Dat betekent niet dat je niets kunt doen. Hieronder lees je hoe je binnen zo veel mogelijk droog houdt, wat je beter laat, hoe je je vraag zo duidelijk maakt dat er snel naar gekeken kan worden, en welk dak meestal als eerste aan de beurt is.`,
    secties: [
      { kop: `Eerst: veilig`, tekst: [
        `Blijf bij harde wind uit de buurt van de kant van het huis waar pannen of een losse goot naar beneden kunnen komen, en zet die plek af als er mensen langslopen. Ga niet zelf het dak op en zet geen ladder tegen de goot, ook niet als het even droog is. Pannen, lood en goten zitten na een storm vaak losser dan je van beneden ziet. Hangt er iets los boven de stoep of de straat en kan het elk moment vallen, bel dan 112.`,
      ] },
      { kop: `Binnen droog houden`, tekst: [
        `Zet een emmer of bak onder elke druppel en leg er een doek in, dan spat het minder. Haal spullen weg en leg handdoeken of plastic op de vloer. Zit de natte plek bij een lamp, een spotje of een stopcontact, zet dan in de meterkast de groep van die kamer uit. Kun je veilig op zolder komen, kijk dan waar het water binnenkomt en zet ook daar een bak neer, dan loopt er minder door naar het plafond eronder. Bolt het plafond op, lees dan <a href="/kennisbank/plafond-bolt-op-door-lekkage/">plafond bolt op door lekkage</a>.`,
      ] },
      { kop: `Wat je beter laat`, tekst: [
        `Leg geen stenen of tegels op een losse pan of op een plat dak, want bij de volgende windstoot gaan ze zelf schuiven. Smeer geen kit op een nat dak: dat houdt niet en het maakt de reparatie later lastiger. En zeg niet meteen ja tegen iemand die na de storm aanbelt en zegt dat je hele dak vandaag nog moet. Lees daarover <a href="/kennisbank/dakdekker-aan-de-deur/">er belt een dakdekker aan</a>.`,
      ] },
      { kop: `Zo maak je je vraag duidelijk`, tekst: [
        `Hoe meer een dakdekker vooraf ziet, hoe sneller hij weet hoe dringend het is en wat hij mee moet nemen. Stuur daarom in één bericht een foto van de natte plek binnen, een of twee foto's van je dak vanaf de overkant van de straat, gemaakt met de zoom van je telefoon, je adres, en of het nu druppelt of alleen nat is geweest. Zeg erbij of er een pan, een nokvorst of een stuk goot op straat of in de tuin ligt. Een paar zinnen en goede foto's zeggen vaak meer dan een lang telefoongesprek.`,
      ] },
      { kop: `Welk dak gaat eerst?`, tekst: [
        `Na een storm gaat bij mij een dak voor waar het binnen nat wordt of dat open ligt: een gat waar pannen of een nokvorst zijn weggewaaid, een losgewaaide dakbedekking of een goot die los boven de stoep hangt. Ligt er een pan scheef terwijl het binnen droog blijft, dan kan dat meestal een paar dagen wachten, en dat zeg ik je dan eerlijk. Zo kan ik eerst de daken dichtmaken waar het water nu naar binnen loopt. Wanneer ik bij jou kan komen, hoor je als je een foto stuurt.`,
      ] },
      { kop: `Eerst dicht, daarna netjes`, tekst: [
        `Ligt je dak open, dan maak ik het eerst dicht of dek ik het af, zodat het binnen droog blijft. Vaak kan ik het daarna meteen goed maken. Moet er een pan besteld worden die bij je dak past, of is het te nat of waait het te hard voor lood of dakbedekking, dan kom ik voor de nette reparatie terug op een droge dag. Je hoort vooraf wat het kost. Zie <a href="/diensten/stormschade/">stormschade aan je dak</a>.`,
      ] },
      { kop: `En je verzekering?`, tekst: [
        `Meld de schade zo snel mogelijk bij je verzekeraar en maak foto's voordat er iets wordt opgeruimd of gemaakt. Veel verzekeraars vragen je om verdere schade te beperken, bijvoorbeeld door water op te vangen of een gat tijdelijk te laten afdekken, en vergoeden de kosten daarvan vaak, maar dat verschilt per polis. Bewaar de bonnetjes van wat je daarvoor koopt. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je kunt meesturen. Lees ook <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a> en <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: stormschade aan je dak`, href: `/diensten/stormschade/` },
    faq: [
      { v: `Hoe lang moet ik na een storm wachten op een dakdekker?`, a: `Dat hangt af van hoe zwaar de storm was en hoeveel daken er tegelijk schade hebben. Na een gewone harde wind gaat het vaak vlot, na een zware storm is het overal drukker. Stuur meteen foto's en zeg of het binnen nat wordt, dan hoor je eerlijk wanneer ik kan komen. Lekt het binnen, vang het water dan op en houd de natte plek in de gaten.` },
      { v: `Mag ik zelf een zeil over het gat leggen?`, a: `Niet vanaf het dak. Op een nat, schuin dak bij wind is dat te gevaarlijk, en een zeil dat niet goed vastligt, waait weg of trekt nog meer pannen los. Kun je veilig op zolder komen, dan kun je daar wel een bak neerzetten of plastic leggen onder de plek waar het water binnenkomt. Het afdekken aan de buitenkant laat je doen.` },
      { v: `Kan ik intussen gewoon in huis blijven?`, a: `Meestal wel. Houd de stroom uit in de kamer waar het bij een lamp of stopcontact nat is, en blijf weg onder een plafond dat opbolt of doorhangt. Dreigt er iets in te storten of naar beneden te vallen, bel dan 112.` },
      { v: `Kan ik je ook 's avonds of in het weekend een foto sturen?`, a: `Ja, bellen en WhatsApp kan dag en nacht. Stuur je foto's gewoon meteen, ook 's avonds. Dan hoor je wat ik zie en wanneer ik kan komen.` },
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
  "vochtplek-schoorsteen-binnen": `Een vochtplek op de schoorsteen in je kamer komt meestal van lood rond de schoorsteen dat los zit of gescheurd is, van regen die in een open kanaal zonder kap valt, of van condens en roet in het kanaal. Is het alleen nat na regen, dan komt het van buiten. Is de plek geel of bruin en ook bij droog weer nat, vooral als je stookt, laat dan eerst het kanaal nakijken.`,
  "cv-ketel-lekt-bij-regen": `Druppelt het bij je cv-ketel of langs de pijp erboven alleen als het regent, dan komt het water meestal langs de doorvoer op het dak binnen: de kraag rond de pijp is uitgedroogd of gescheurd, of de doorvoerpan ligt niet meer goed. Is het ook nat bij droog weer, of zakt de druk van je ketel, dan zit het eerder in de ketel, het condenswater of een leiding, en bel je je installateur.`,
  "afzuigkap-lekt-bij-regen": `Komt er water uit je afzuigkap als het regent, ook als je niet kookt, dan loopt het meestal langs de pijp door het dak naar binnen, of valt de regen in de pijp omdat het kapje erop mist. Druppelt het alleen na het koken en bij koud weer, dan is het eerder condens in het kanaal over de koude zolder. Dat laat je nakijken door je installateur.`,
  "keurmerk-dakdekker": `Een keurmerk zegt dat een dakdekker heeft afgesproken zich aan bepaalde eisen te houden, maar niet wie er op je dak staat of dat de prijs eerlijk is. Kijk op de site van het keurmerk of het bedrijf echt in de lijst staat. En kijk bij elke dakdekker zelf na: de KvK-inschrijving, of hij verzekerd is, een prijs vooraf, afspraken op papier en wat andere klanten schrijven.`,
  "water-uit-zolderluik": `Druppelt het uit je zolderluik of langs de vlizotrap, dan komt het water bijna altijd van hoger. Wordt het alleen nat bij regen, dan loopt water van een lek in het dak over de zoldervloer naar het luikgat, het laagste punt. Is het ook nat na een koude, droge nacht, dan is het vaak condens: warme lucht uit huis die langs het luik naar de koude zolder stroomt.`,
  "regenpijp-kapot-door-vorst": `Een regenpijp scheurt bij vorst als er water in bleef staan dat bevroor. Meestal zit de pijp onderaan dicht, in de bocht boven de grond of in de aansluiting onder de bestrating, door blad en zand uit de goot. Het ijs duwt de pijp dan in de lengte open of schuift een bocht uit elkaar. Vaak is één stuk vervangen genoeg, als de verstopping ook weg is.`,
  "dakonderhoud-per-seizoen": `Kijk twee keer per jaar zelf naar je dak, in het voorjaar en in het najaar: liggen er pannen of nokvorsten scheef, zit het lood rond de schoorsteen nog strak en blijft er geen water op het platte dak staan? De goot maak je meestal één keer per jaar leeg, als het blad gevallen is, en onder bomen vaker. Laat je dak elke paar jaar door een vakman nakijken, en vaker als het ouder is.`,
  "kunststof-dakgoot-lekt": `Een kunststof goot lekt meestal bij een verbinding waarvan het rubber is uitgedroogd of die bij vorst een stukje uit elkaar is geschoven, bij een gelijmde naad of een hoekstuk dat is losgetrokken, of bij het eindstuk. Loopt hij halverwege over terwijl er geen blad in ligt, dan hangt hij daar vaak door. Vaak is één verbindingsstuk of hoekstuk vervangen genoeg.`,
  "dakgoot-losgeraakt": `Hangt je dakgoot na een storm los boven de stoep, blijf er dan onder weg, zorg dat niemand eronder loopt en trek er niet aan. Meestal is een beugel verbogen of afgebroken, of houden de schroeven geen houvast meer in hout dat zacht is geworden. Zijn de goot en het hout nog goed, dan kan hij vaak terug op nieuwe beugels, op afschot naar de regenpijp.`,
  "nieuw-dak-lekt": `Lekt je dak terwijl het nieuw is, meld het dan eerst bij wie het heeft gemaakt: de aannemer bij een nieuwbouwhuis, of de dakdekker die je dak heeft vernieuwd. Leg het vast met foto's, een filmpje en de datum, en vang het water ondertussen op. Vaak zit het bij een aansluiting die net niet goed is afgewerkt.`,
  "lekkage-huurhuis": `Lekt het dak van je huurhuis, vang het water dan op, maak foto's en meld het meteen bij je verhuurder of woningcorporatie, het liefst schriftelijk. In de regel is het dak de zaak van de verhuurder, en die regelt de reparatie. Schade aan je eigen spullen valt meestal onder je eigen inboedelverzekering. Woon je in een appartement, dan regelt meestal de VvE het dak.`,
  "welke-dakpan-heb-ik": `Kijk naar drie dingen: het materiaal (gebakken klei of beton), de vorm en de kleur. Op zolder staat op de achterkant van een pan vaak een naam of nummer van de fabriek. Stuur een foto van je dak vanaf de straat en, als het kan, van de achterkant van een pan, dan zoek ik een pan die past.`,
  "wachten-op-dakdekker-na-storm": `Na een zware storm hebben dakdekkers het druk. Houd intussen binnen zo veel mogelijk droog: een emmer onder elke druppel, spullen weg en de stroom uit bij een natte lamp of stopcontact. Ga niet zelf het dak op en leg geen stenen op losse pannen. Stuur foto's van binnen en van je dak vanaf de straat, en zeg of het nu druppelt: een dak dat open ligt of waar het binnen nat wordt, gaat meestal voor.`,
};
