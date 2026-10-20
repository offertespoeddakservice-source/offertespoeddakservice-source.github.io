/**
 * Kennisbank-artikelen — cornerstone-content voor informatie-zoekers (longtail-SEO).
 * Elk artikel linkt intern naar een dienstpagina (interne links = SEO + conversie).
 */

import { PRIJZEN } from "./prijzen";

const GOTEN_PRIJS = PRIJZEN.find((r) => r.dienst === "Dakgoot reinigen")?.prijs ?? "";
const lekPrijs = PRIJZEN.find((r) => r.dienst.startsWith("Daklekkage"))?.prijs ?? "";
const kleinPrijs = PRIJZEN.find((r) => r.dienst.startsWith("Kleine reparatie"))?.prijs ?? "";
const apkPrijs = PRIJZEN.find((r) => r.dienst.startsWith("Dak-APK"))?.prijs ?? "";

export interface Sectie { kop: string; tekst: string[] }
export interface Artikel {
  slug: string;
  titel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  secties: Sectie[];
  dienst: { label: string; href: string };
  faq: { v: string; a: string }[];
  datum?: string;
}

export const ARTIKELEN: Artikel[] = [
  {
    slug: "daklekkage-opsporen",
    titel: "Daklekkage opsporen",
    h1: "Daklekkage opsporen: zo vind je de oorzaak (zonder sloopwerk)",
    metaTitle: "Daklekkage opsporen: oorzaken en aanpak | Spoed Dak Service",
    metaDescription:
      "Daklekkage opsporen? De natte plek zit zelden onder het echte lek. Dit zijn de meest voorkomende oorzaken en zo vind ik het lek zonder onnodig sloopwerk.",
    intro:
      "Een natte plek op je plafond betekent bijna nooit dat het lek daar precies boven zit. Water loopt via panlatten, isolatie en naden naar het laagste punt en komt daar pas naar binnen. Daarom is een lek opsporen vakwerk — hieronder hoe het werkt.",
    secties: [
      { kop: "Lekkage nu? Eerst dit doen", tekst: [
        "Zie je een natte plek op het plafond? Zet eerst een emmer neer en maak een foto van de plek — dat helpt bij de beoordeling en later bij je verzekering. Haal spullen weg die vochtgevoelig zijn en ga niet zelf het dak op.",
        'Kwam de lekkage tijdens of vlak na een storm, met losse pannen of zichtbare schade van buiten? Volg dan de aparte stappen in <a href="/kennisbank/stormschade-eerste-hulp">stormschade: eerste hulp en je verzekering</a> — daar staat ook wat je aan je verzekering moet doorgeven. Is er geen storm geweest en sijpelt het water al langer, dan lees je hieronder waar het vandaan komt.',
      ] },
      { kop: "De meest voorkomende oorzaken", tekst: [
        'Een gebroken of verschoven dakpan zie ik verreweg het vaakst. Daarna: gescheurd of losgelaten lood bij de schoorsteen of het dakraam, een verstopte of overlopende goot, en versleten kitwerk of naden bij een plat dak. Lekt het bij de schoorsteen? Lees dan <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.',
        "Bij platte daken zit het lek vaak bij een naad of opstand, terwijl het water verderop naar binnen komt — dat maakt opsporen lastiger.",
      ] },
      { kop: "Zo spoor je het op — zonder sloopwerk", tekst: [
        "Ik werk van buiten naar binnen: eerst het dak na op losse pannen, lood en naden, dan de zolder op natte sporen. Vaak is een gerichte controle genoeg en hoeft er niks opengebroken te worden.",
        "Lukt het visueel niet, dan zijn er technieken (water gericht aanbrengen, rook- of vochtmeting) om de exacte plek te vinden. Eerst de schade beperken, dan de oorzaak aanpakken.",
      ] },
      { kop: "Wat kost het?", tekst: [
        "Een punctuele reparatie kost meestal €200 tot €500, inclusief materiaal. Bij spoed buiten kantooruren komt daar een toeslag bij. Je hoort altijd de prijs voordat ik begin.",
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Moet er voor het opsporen iets opengebroken worden?", a: "Meestal niet. In de meeste gevallen vind ik het lek met een gerichte controle van buiten en op zolder, zonder sloopwerk." },
      { v: "Kun je vandaag nog komen?", a: "Bij spoed in de regio Den Bosch vaak wel. Bel of WhatsApp, dan hoor je meteen wanneer ik kan." },
    ],
  },
  {
    slug: "lekkage-bij-schoorsteen",
    datum: "2026-10-19",
    titel: "Lekkage bij de schoorsteen",
    h1: "Lekkage bij de schoorsteen: waar het zit en wat eraan te doen is",
    metaTitle: "Lekkage bij schoorsteen: oorzaken | Spoed Dak Service",
    metaDescription:
      "Lekkage bij de schoorsteen? Meestal zit het in het lood, de loodslabben of de kop van de schoorsteen. Zo herken je het en zo pak ik het aan, zonder onnodig sloopwerk.",
    intro:
      "Een natte plek naast het schoorsteenkanaal, of bruine kringen op zolder rond de schoorsteen: dat is een van de meest voorkomende lekkages die ik zie. Het goede nieuws: het zit meestal op een paar vaste plekken.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, leg handdoeken en maak een foto van de natte plek. Ga niet zelf het dak op. Stuur de foto via WhatsApp of bel me, of kijk bij <a href="/spoed/">spoed</a> wat je nu zelf kunt doen.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "Bijna altijd bij het lood: de loodslabben rond de schoorsteen drogen uit, scheuren of komen los uit de muur. Daar loopt het water dan langs naar binnen.",
        "Andere plekken: de kop of afdekplaat bovenop de schoorsteen, pannen rond de schoorsteen die verschoven zijn, of scheuren in het metselwerk zelf. Zit het in het metselwerk, dan zeg ik dat eerlijk: daarvoor heb je een metselaar nodig.",
      ] },
      { kop: "Zo herken je het", tekst: [
        "Het lekt vaak vooral bij regen met wind uit één richting. Je ziet vocht op de muur of het plafond naast het kanaal, soms pas een paar uur na de bui. Vanaf de grond zie je soms lood dat los staat of omhoog wijst.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk van buiten naar het lood, de pannen en de kop van de schoorsteen. Loszittend lood zet ik opnieuw goed vast of ik vervang de loodslabben, en verschoven pannen leg ik recht. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>. Wordt de schoorsteen nog gebruikt, dan is het handig om het <a href="/diensten/schoorsteen-vegen/">vegen</a> in één keer mee te nemen.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er mis is: een stuk lood vastzetten is iets anders dan nieuwe loodslabben. Je hoort de vaste prijs vooraf. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (lood en pannen)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Is lekkage bij de schoorsteen altijd het lood?", a: "Vaak wel, maar niet altijd. Het kan ook de kop van de schoorsteen zijn, een verschoven pan of het metselwerk. Daarom kijk ik eerst goed voordat ik iets doe." },
      { v: "Kan ik het lood zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar meestal niet lang. Lood dat los zit moet goed vast of vervangen worden, anders lekt het bij de volgende flinke bui weer." },
      { v: "Kun je snel komen als het binnen druppelt?", a: "Bij spoed in de regio Den Bosch lukt dat vaak nog dezelfde dag. Bel of WhatsApp me met een foto." },
    ],
  },
  {
    slug: "condens-of-lekkage-op-zolder",
    datum: "2026-10-20",
    titel: "Condens of lekkage op zolder?",
    h1: "Condens of lekkage op zolder? Zo zie je het verschil",
    metaTitle: "Condens of lekkage op zolder? | Spoed Dak Service",
    metaDescription:
      "Druppels of natte plekken op zolder? Vaak is het condens en geen lek. Zo zie je het verschil, wat je zelf kunt doen en wanneer je me beter even belt.",
    intro:
      "Natte plekken of druppels op zolder, en je denkt meteen: mijn dak lekt. Soms klopt dat. Maar in de herfst en winter is het ook vaak condens: vocht uit je eigen huis dat tegen het koude dak neerslaat. Het verschil zien scheelt je een hoop zorgen, en soms een onnodige reparatie.",
    secties: [
      { kop: "Hoe condens op zolder ontstaat", tekst: [
        "Warme lucht in huis neemt vocht mee: van douchen, koken, wasgoed en gewoon ademen. Komt die lucht op zolder tegen de koude binnenkant van het dak, dan slaat het vocht neer als druppels. Vooral na koude, heldere nachten en bij vriesweer zie je dat.",
      ] },
      { kop: "Zo herken je condens", tekst: [
        "Druppels of een natte waas verspreid over een groot deel van het dakbeschot of de folie, niet op één plek. Het komt ook op droge dagen, vaak 's ochtends na een koude nacht. Soms zie je zwarte stipjes of schimmel op het hout, en het ruikt er muf.",
      ] },
      { kop: "Zo herken je een lek", tekst: [
        "Een lek zit meestal op één plek en komt na regen, vaak bij wind uit een bepaalde richting. Je ziet een natte plek of een kring bij de schoorsteen, een dakraam, een doorvoer of vlak onder de nok.",
        'Let wel: de natte plek zit zelden precies onder het echte lek. Hoe ik dat opspoor lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
      { kop: "Wat je zelf tegen condens doet", tekst: [
        "Hang geen was te drogen op zolder. Kijk of de afzuiging van je badkamer echt naar buiten gaat en niet op zolder uitkomt, dat komt voor. Zet de zolder af en toe even open zodat het vocht weg kan, en houd het zolderluik dicht als je doucht of kookt.",
      ] },
      { kop: "Twijfel je? Stuur een foto", tekst: [
        'Maak een foto van de natte plek en van het dakbeschot eromheen en stuur die via WhatsApp. Vaak kan ik dan al zeggen of het condens is of een lek. Druppelt het echt binnen na regen, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.',
        'Komt de condens elk jaar terug, dan kan het aan de ventilatie of de isolatie liggen. Lees ook over <a href="/diensten/dakisolatie/">dakisolatie</a>, of vraag me gewoon om even mee te kijken.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Is condens op zolder erg?", a: "Een beetje condens op een koude ochtend is niet meteen erg. Blijft het hout lang nat of zie je schimmel, dan wil je er wel wat aan doen. Vocht dat lang blijft zitten is slecht voor het hout en de isolatie." },
      { v: "Hoe weet ik zeker of mijn dak lekt?", a: "Kijk wanneer het nat wordt. Alleen na regen en op één plek wijst op een lek. Ook op droge, koude dagen en verspreid over het dak wijst op condens. Twijfel je, stuur dan een foto via WhatsApp." },
      { v: "Kun je ook helpen bij condens?", a: "Ik kijk of het echt condens is en geen lek, en waar het vocht vandaan komt. Soms is beter ventileren genoeg, soms ligt het aan de isolatie. Je hoort eerlijk wat er nodig is, en wat niet." },
    ],
  },
  {
    slug: "dakraam-lekt",
    datum: "2026-10-20",
    titel: "Dakraam lekt?",
    h1: "Dakraam lekt: waar het meestal zit en wat eraan te doen is",
    metaTitle: "Dakraam lekt: oorzaken en oplossing | Spoed Dak Service",
    metaDescription:
      "Lekt je dakraam bij regen? Meestal zit het niet in het glas, maar in de aansluiting met het dak: gootstukken, lood of verschoven pannen. Zo herken je het.",
    intro:
      "Water langs je dakraam is vervelend, want het loopt vaak meteen langs de muur of het plafond naar beneden. Het goede nieuws: het zit meestal niet in het raam zelf, maar in hoe het raam op het dak aansluit. En dat is vaak goed te verhelpen.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, leg een handdoek op de vensterbank en maak een foto van de plek waar het water binnenkomt. Ga niet zelf het dak op. Bel of WhatsApp me, of kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "Rond een dakraam zit een aansluiting die het water om het raam heen leidt: gootstukken, lood of loodvervanger, en de pannen eromheen. Raakt daar iets los, schuift een pan op of hoopt blad zich op boven het raam, dan loopt het water onder de aansluiting door naar binnen.",
        "Soms zit het in de rubbers of de dichting van het raam zelf. Dan zeg ik eerlijk wat er nodig is en of ik dat voor je kan oplossen.",
      ] },
      { kop: "Lekkage of condens?", tekst: [
        'Druppels aan de binnenkant van het glas op een koude ochtend zijn meestal condens, geen lek. Komt het water alleen na regen, en vooral bij wind, dan is het een lek. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk van buiten naar de aansluiting, het lood en de pannen rond het raam, en haal blad en vuil weg dat zich boven het raam ophoopt. Losse delen zet ik weer goed vast, verschoven pannen leg ik recht en waar nodig vervang ik het lood. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er los zit en hoeveel werk de aansluiting is. Je hoort de vaste prijs vooraf. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (lood en pannen)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Kan ik een lekkend dakraam zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar het lost de oorzaak meestal niet op. Kit op de verkeerde plek kan het water zelfs de verkeerde kant op sturen. Laat liever kijken waar het echt binnenkomt." },
      { v: "Moet het hele dakraam vervangen worden?", a: "Meestal niet. Vaak zit het in de aansluiting met het dak, en die is te herstellen. Is het raam zelf op, dan zeg ik dat eerlijk." },
      { v: "Kun je snel komen als het binnen druppelt?", a: "Bij spoed in de regio Den Bosch lukt dat vaak nog dezelfde dag. Bel of WhatsApp me met een foto." },
    ],
  },
  {
    slug: "nokvorsten-los",
    datum: "2026-10-21",
    titel: "Losse nokvorsten",
    h1: "Losse nokvorsten: zo herken je het en dit doe je eraan",
    metaTitle: "Losse nokvorsten op je dak: wat nu? | Spoed Dak Service",
    metaDescription:
      "Specie in de goot of een scheve nokvorst? Dan zit de nok los. Zo herken je het, waarom je beter niet op de volgende storm wacht en hoe ik het herstel.",
    intro:
      "De nokvorsten zijn de halfronde pannen bovenop je dak, op de nok. Ze liggen het hoogst en vangen de meeste wind. Zitten ze los, dan is de volgende storm vaak het moment dat er een wegwaait. Dan regent het precies op het hoogste punt van je dak naar binnen.",
    secties: [
      { kop: "Zo herken je losse nokvorsten", tekst: [
        "Vanaf de straat zie je het vaak al: een vorst die scheef ligt, een kier tussen twee vorsten, of een rij die niet meer recht loopt.",
        "Een tweede teken: brokjes specie in de goot of op de stoep onder je dak. Bij oudere daken liggen de vorsten in specie, en die brokkelt na jaren van vorst en regen af. Dan liggen de vorsten er eigenlijk alleen nog los op.",
      ] },
      { kop: "Waarom je niet op de storm wacht", tekst: [
        "Een losse vorst houdt het soms nog jaren. Maar bij een flinke herfststorm kan hij eraf waaien. Dan heb je een open plek op de nok, en een vallende vorst kan pannen, een dakraam of iets op straat raken.",
        'Ligt er al een vorst op straat of is je dak open? Dan is het spoed. Kijk op de <a href="/spoed/">spoedpagina</a> wat je nu zelf doet, en lees <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a> als het na een storm gebeurde.',
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Ga niet zelf de nok op. Het is het hoogste en steilste stuk van je dak, en losse vorsten kunnen onder je voeten wegschuiven. Kijk vanaf de grond, maak een foto en stuur die door via WhatsApp.",
      ] },
      { kop: "Hoe ik het herstel", tekst: [
        'Ik kijk eerst hoe de vorsten liggen. Losse vorsten zet ik opnieuw goed vast, kapotte vervang ik door passende. Is de specie over de hele nok op, dan is het vaak slimmer om de hele nok in één keer opnieuw te doen dan elk jaar een paar vorsten. Je hoort eerlijk wat nodig is. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Een paar losse vorsten vastzetten valt meestal onder een kleine reparatie. Een hele nok opnieuw doen is meer werk. Je hoort de vaste prijs vooraf. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Is een losse nokvorst gevaarlijk?", a: "Hij kan bij harde wind van het dak waaien. Dan ligt je nok open en kan de vorst schade doen aan pannen of iets op straat. Laat het daarom niet te lang liggen, zeker niet voor de herfststormen." },
      { v: "Hoe vaak moet de nok nagekeken worden?", a: "Kijk zelf elk najaar even vanaf de straat. Zie je specie in de goot of een scheve vorst, laat het dan nakijken. Bij een ouder dak is elk jaar laten kijken geen overbodige luxe." },
      { v: "Valt een weggewaaide nokvorst onder de verzekering?", a: "Stormschade valt vaak onder je opstalverzekering. Een vorst die al lang los lag en dan wegwaait, wordt soms gezien als achterstallig onderhoud. Check de voorwaarden bij je verzekeraar." },
      { v: "Kun je snel komen als er een vorst los ligt?", a: "Ligt de nok open of is er een vorst afgewaaid, bel of WhatsApp me dan meteen met een foto. Bij spoed in de regio Den Bosch lukt het vaak nog dezelfde dag." },
    ],
  },
  {
    slug: "lekkage-bij-zonnepanelen",
    datum: "2026-10-21",
    titel: "Lekkage bij zonnepanelen?",
    h1: "Lekkage sinds er zonnepanelen op je dak liggen: waar het zit en wat je doet",
    metaTitle: "Lekkage door zonnepanelen op je dak? | Spoed Dak Service",
    metaDescription:
      "Lekt je dak sinds er zonnepanelen op liggen? Vaak zit het in een verschoven of gebroken pan bij een dakhaak. Zo herken je het en zo pak ik het aan.",
    intro:
      "Een natte plek op zolder sinds de zonnepanelen erop liggen? Dat zie ik vaker. Meestal ligt het niet aan de panelen zelf, maar aan wat er bij het plaatsen met de pannen is gebeurd. Hieronder lees je waar het meestal zit en wat je eraan doet.",
    secties: [
      { kop: "Waar het meestal zit", tekst: [
        "Panelen worden vastgezet met dakhaken die onder de pannen door aan het dak worden geschroefd. Ligt zo'n haak net te hoog, dan ligt de pan erboven niet meer goed in de sluiting. Of de pan is gescheurd toen er ruimte voor de haak werd gemaakt. Daar loopt bij een flinke bui water onderdoor.",
        "Andere bekende plekken: pannen die gebroken zijn doordat er op gelopen is, een kabeldoorvoer door het dak die niet goed is afgewerkt, en blad en vuil dat onder de panelen blijft liggen en het water de verkeerde kant op stuurt.",
      ] },
      { kop: "Zo herken je het", tekst: [
        "De natte plek zit vaak op zolder onder het deel van het dak waar de panelen liggen, of een stukje lager, want water loopt eerst een eind naar beneden voordat het binnenkomt. Lekt het pas sinds de panelen erop liggen, en vooral bij harde regen of regen met wind, dan is dat een sterke aanwijzing.",
      ] },
      { kop: "Wat je nu doet", tekst: [
        'Vang het water op, maak een foto van de natte plek en ga niet zelf het dak op. Tussen de panelen is het glad en je stapt zo een pan kapot. Kijk op de <a href="/spoed/">spoedpagina</a> wat je verder meteen kunt doen.',
      ] },
      { kop: "Wie lost het op?", tekst: [
        "Zijn de panelen pas gelegd, neem dan eerst contact op met je installateur. Lekkage die door het plaatsen komt, hoort de installateur in de regel zelf op te lossen. Komt de installateur niet, of liggen de panelen er al jaren, dan kijk ik waar het lek zit. Moet er voor de reparatie een paneel even los, dan bespreken we eerst samen hoe dat het beste kan.",
      ] },
      { kop: "Lekt het niet, maar wil je het voorkomen?", tekst: [
        'Bij het <a href="/diensten/zonnepanelen-reinigen/">reinigen van zonnepanelen</a> kijk ik ook naar de bevestiging en de pannen eronder. Zo zie je een verschoven pan vaak al voordat het binnen nat wordt.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Kan een dak gaan lekken door zonnepanelen?", a: "Ja, maar meestal niet door de panelen zelf. Het zit vaak in een pan die bij een dakhaak niet meer goed ligt of gebroken is, of in een kabeldoorvoer die niet goed is afgewerkt." },
      { v: "Moeten alle panelen eraf om het lek te vinden?", a: "Meestal niet. Vaak is van buiten en op zolder al te zien waar het zit. Zit het lek precies onder een paneel, dan moet dat ene paneel soms even los. Dat bespreken we vooraf." },
      { v: "Is lekkage bij zonnepanelen spoed?", a: "Loopt er water naar binnen, dan wel: hoe langer het lekt, hoe meer schade aan hout en isolatie. Bel of WhatsApp me met een foto van de natte plek." },
    ],
  },
  {
    slug: "dakpannen-coaten-of-vervangen",
    titel: "Coaten of vervangen?",
    h1: "Dakpannen coaten of vervangen? Zo maak je de juiste keuze",
    metaTitle: "Dakpannen coaten of vervangen? | Spoed Dak Service",
    metaDescription:
      "Dakpannen coaten of vervangen? Coaten is veel goedkoper en kan jaren schelen — mits je pannen nog goed zijn.",
    intro:
      "Een verweerd dak hoeft niet meteen vervangen te worden. Vaak kun je pannen die nog stevig zijn coaten — veel goedkoper, en je dak gaat er jaren mee verder. Maar coaten is niet altijd de juiste keuze. Hieronder het verschil.",
    secties: [
      { kop: "Wanneer coaten loont", tekst: [
        "Als je pannen nog stevig en heel zijn maar dof, vuil of vol mos, dan is reinigen + coaten ideaal. De coating beschermt tegen vocht, mos en uv, en kost een fractie van vervangen.",
        "Het is ook een mooi moment voor een gootcheck en het nakijken van lood en nokvorsten.",
      ] },
      { kop: "Wanneer vervangen verstandiger is", tekst: [
        "Zijn de pannen poreus, bros of op meerdere plekken kapot, dan houdt coaten geen stand — dan ben je beter af met (gedeeltelijk) vervangen. Coaten op slechte pannen is zonde van het geld.",
        "Ik kom kijken en zeg eerlijk wat in jouw geval loont; soms is een combinatie (slechte pannen vervangen, de rest coaten) de slimste route.",
      ] },
    ],
    dienst: { label: "Bekijk: dak coaten", href: "/diensten/dakcoating" },
    faq: [
      { v: "Hoe lang gaat een coating mee?", a: "Bij goede pannen en een nette aanbrenging zit je al snel op jaren extra bescherming. Belangrijk is dat eerst goed gereinigd wordt." },
    ],
  },
  {
    slug: "hoe-vaak-dakgoot-reinigen",
    titel: "Hoe vaak goten reinigen?",
    h1: "Hoe vaak moet je je dakgoot reinigen — en wat kost het?",
    metaTitle: "Hoe vaak dakgoot reinigen + kosten | Spoed Dak Service",
    metaDescription:
      "Hoe vaak moet je je dakgoot reinigen? Meestal één keer per jaar in het najaar, vaker bij bomen in de buurt. Waarom het belangrijk is en wat het kost.",
    intro:
      "Volle goten lijken onschuldig, maar ze zijn de oorzaak van veel vochtschade: overlopend water, natte muren en op den duur lekkage. Hoe vaak moet je ze laten reinigen, en wat kost dat?",
    secties: [
      { kop: "Eén keer per jaar — vaker bij bomen", tekst: [
        "Voor de meeste huizen is één keer per jaar genoeg, het beste in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, dan is twee keer per jaar slimmer.",
        "Het najaar (augustus–oktober) is de drukste én belangrijkste periode: blad én herfststormen zorgen dan voor de meeste verstoppingen.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "Een verstopte goot loopt over langs de gevel, trekt vocht in muren en fundering en kan binnen voor lekkage zorgen. Een kleine jaarlijkse onderhoudsbeurt voorkomt dure schade.",
      ] },
      { kop: "Wat kost goten reinigen?", tekst: [
        `Bij een rijtjeswoning is het ${GOTEN_PRIJS}: beide goten leeg, uitloop naar de regenpijp vrijgemaakt, troep mee. Bij een groter of hoger huis hoor je vooraf de vaste prijs, nooit achteraf verrassingen.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Wanneer kan ik het beste laten reinigen?", a: "In het najaar, als het meeste blad gevallen is — dan heb je er het hele jaar profijt van en voorkom je winterlekkage." },
    ],
  },
  {
    slug: "wat-kost-dakgoot-schoonmaken",
    datum: "2026-10-21",
    titel: "Wat kost dakgoot schoonmaken?",
    h1: "Wat kost dakgoot schoonmaken? Zo zit de prijs in elkaar",
    metaTitle: "Wat kost dakgoot schoonmaken? | Spoed Dak Service",
    metaDescription:
      `Wat kost dakgoot schoonmaken of reinigen? Bij een rijtjeswoning ${GOTEN_PRIJS}. Waar de prijs van afhangt, wat erbij zit en hoe het zit met een prijs per meter.`,
    intro:
      "Goten laten schoonmaken is een klein klusje, maar de prijzen die je online ziet lopen flink uiteen. Hieronder leg ik uit wat ik reken, wat erbij zit en waar de prijs van afhangt. Zo weet je vooraf waar je aan toe bent.",
    secties: [
      { kop: "Wat ik reken", tekst: [
        `Voor een rijtjeswoning is het ${GOTEN_PRIJS}: beide goten leeg, blad en mos eruit, de uitloop naar de regenpijp vrijgemaakt en de troep gaat mee.`,
        "Heb je een hoekhuis, een twee-onder-een-kap of een vrijstaand huis, of zitten je goten hoog of lastig? Dan hoor je vooraf de vaste prijs. Stuur gerust een foto via WhatsApp, dan kan ik die meestal snel noemen.",
      ] },
      { kop: "Waar de prijs van afhangt", tekst: [
        "Vooral van de lengte van de goten, de hoogte en hoe goed ik erbij kan. Ook telt mee hoe vol de goot zit: na jaren zonder onderhoud zit er soms een dikke laag modder en mos in, met plantjes erin.",
        'Staan er veel bomen bij je huis, dan zitten goten sneller vol. Dan is twee keer per jaar schoonmaken soms slimmer. Zie <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak je je dakgoot moet reinigen</a>.',
      ] },
      { kop: "En een prijs per meter?", tekst: [
        "Je ziet online vaak een prijs per meter goot. Dat klinkt precies, maar je weet meestal niet hoeveel meter goot je hebt, en soms komen er nog voorrijkosten of een minimumbedrag bij. Ik noem liever één vaste prijs voor de hele klus, voordat ik begin.",
      ] },
      { kop: "Wat erbij zit", tekst: [
        "Blad, mos en vuil eruit, de bladvangers gecontroleerd en de uitloop naar de regenpijp vrijgemaakt. Omdat ik toch boven ben, kijk ik meteen naar de pannen, het lood en de goot zelf. Zie ik iets wat aandacht nodig heeft, dan hoor je dat eerlijk, en ook als er niks aan de hand is.",
        'Zit de verstopping dieper in de regenpijp, of lekt de goot zelf? Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>.',
      ] },
      { kop: "Zelf doen of laten doen?", tekst: [
        "De lage goot van een schuur of garage kun je prima zelf leeghalen. Bij een goot op hoogte is een ladder op een natte of schuine ondergrond het grootste risico. Dan laat je het liever doen.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Wat kost dakgoot reinigen bij een rijtjeswoning?", a: `${GOTEN_PRIJS}: beide goten leeg, uitloop naar de regenpijp vrijgemaakt en de troep gaat mee. Bij een groter of hoger huis hoor je de vaste prijs vooraf.` },
      { v: "Wanneer laat ik mijn goten het beste schoonmaken?", a: "In het najaar, als het meeste blad gevallen is. Dan loopt het water in de winter goed weg en voorkom je overlopende goten en vocht in je muren." },
      { v: "Kan het samen met andere klussen?", a: "Ja. Moet er ook iets aan je dak gebeuren of wil je je zonnepanelen laten reinigen, dan kan dat vaak in dezelfde keer. Je hoort vooraf wat het samen kost." },
    ],
  },
  {
    slug: "wat-kost-daklekkage-repareren",
    titel: "Wat kost daklekkage repareren?",
    h1: "Wat kost het om een daklekkage te repareren? (eerlijke prijzen)",
    metaTitle: "Wat kost daklekkage repareren? Prijzen | Spoed Dak Service",
    metaDescription:
      `Wat kost een daklekkage repareren? Een gerichte reparatie kost meestal ${lekPrijs}, inclusief materiaal. Waar de prijs van afhangt en waarom wachten duurder is.`,
    intro:
      "De eerste vraag bij een lek is bijna altijd: wat gaat me dit kosten? Eerlijk antwoord: dat hangt af van de oorzaak en hoe lang het al speelt. Hieronder zet ik de prijzen op een rij zoals ik ze ook aan de telefoon zou noemen — vaste prijs vooraf, geen verrassingen achteraf.",
    secties: [
      { kop: "Een punctuele reparatie: €200 tot €500", tekst: [
        "De meeste lekkages zijn één duidelijke oorzaak: een gebroken pan, losgelaten lood of een versleten naad. Zo'n gerichte reparatie kost meestal €200 tot €500, inclusief materiaal. Je hoort het bedrag voordat ik begin.",
        "Bij spoed buiten kantooruren komt daar een toeslag bij — maar ik zeg eerlijk of het écht niet tot de volgende dag kan wachten.",
      ] },
      { kop: "Waar de prijs van afhangt", tekst: [
        "Drie dingen bepalen de prijs: de oorzaak (een losse pan is zo gepiept, een rotte dakvoet is meer werk), de bereikbaarheid (hoogte, steiger of ladder) en het daktype. Een pannendak repareer je anders dan een plat dak met bitumen of EPDM.",
        "Marktbreed lopen reparaties per vierkante meter uiteen van zo'n €130–€210 voor een pannendak tot €250–€300 voor een plat dak. Voor een gericht klusje reken ik liever een eerlijke vaste prijs dan een vaag bedrag per meter.",
      ] },
      { kop: "En het opsporen zelf?", tekst: [
        "De natte plek zit zelden onder het echte lek, dus opsporen hoort erbij. Een visuele controle van buiten en op zolder zit vaak gewoon bij de reparatie in. Is er gerichte lekdetectie nodig (vocht- of rookmeting), dan reken je marktbreed €125–€350 apart — maar in de meeste gevallen vind ik het zonder dat extra gereedschap.",
      ] },
      { kop: "Waarom uitstellen juist duur is", tekst: [
        "Dit is de belangrijkste: een kleine lekkage van een paar honderd euro kan binnen een half jaar uitgroeien tot €800–€2.500 aan vocht-, hout- en isolatieschade. Snel een klein bedrag uitgeven is bijna altijd goedkoper dan wachten.",
        "Daarom kom ik bij een lek liever vandaag dan volgende week — eerst de schade stoppen, dan netjes herstellen.",
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Krijg ik de prijs vooraf te horen?", a: "Altijd. Ik kijk wat de oorzaak is en noem een vaste prijs voordat ik begin — geen meerwerk-verrassingen achteraf." },
      { v: "Hoe wordt het lek gevonden?", a: "Meestal met een gerichte controle van buiten en op zolder, zonder sloopwerk. Lees daarover in het artikel ‘Daklekkage opsporen’." },
      { v: "Vergoedt mijn verzekering de reparatie?", a: "Bij storm- of stormgerelateerde schade vaak wel (opstalverzekering). Ik lever foto's en een omschrijving aan zodat je het kunt indienen." },
    ],
  },
  {
    slug: "daklekkage-verzekering",
    datum: "2026-10-21",
    titel: "Daklekkage en je verzekering",
    h1: "Daklekkage en je verzekering: wat wordt meestal vergoed?",
    metaTitle: "Vergoedt de verzekering daklekkage? | Spoed Dak Service",
    metaDescription:
      "Lekt je dak? De verzekering vergoedt vaak de schade binnen, maar niet altijd de reparatie van het dak zelf. Zo zit het meestal, en dit leg je vast.",
    intro:
      "Bij een lek is de tweede vraag meestal: betaalt de verzekering dit? Ik ben geen verzekeraar en elke polis is anders, maar in de praktijk zie ik steeds hetzelfde terugkomen. Hieronder lees je hoe het meestal zit en wat je zelf vastlegt voordat je de schade meldt.",
    secties: [
      { kop: "Opstal en inboedel: twee verzekeringen", tekst: [
        "Je opstalverzekering gaat over het huis zelf: het dak, de muren, het plafond. Je inboedelverzekering gaat over je spullen: een nat tapijt, een kast, een bed. Bij daklekkage heb je vaak met allebei te maken. Huur je, dan is het dak de zaak van je verhuurder en meld je het lek eerst daar.",
      ] },
      { kop: "Wat meestal wel wordt vergoed", tekst: [
        'Plotselinge schade door storm, hagel of een omgewaaide boom valt bij de meeste opstalverzekeringen onder de dekking. Waaien er pannen van je dak en regent het daardoor binnen, dan wordt de schade binnen vaak vergoed. Lees ook <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.',
      ] },
      { kop: "Wat meestal niet wordt vergoed", tekst: [
        "Lekkage door slijtage of achterstallig onderhoud: een goot die al jaren vol zit, pannen die al lang poreus zijn, lood dat langzaam is losgekomen. De reparatie van het dak zelf valt dan meestal buiten de dekking. Soms wordt de schade binnen nog wel vergoed. Dat verschilt per polis, dus lees de voorwaarden of bel je verzekeraar.",
      ] },
      { kop: "Dit leg je vast voordat je de schade meldt", tekst: [
        "Maak foto's van de natte plek binnen en van de schade aan je spullen. Maak vanaf een veilige plek foto's van het dak, zonder zelf het dak op te gaan. Schrijf de datum op en wat voor weer het was. Gooi beschadigde spullen niet meteen weg.",
        "Beperk ondertussen de schade: water opvangen, spullen droog zetten. Verzekeraars verwachten dat je dat doet. Laat het lek ook snel dichtmaken, want schade die erger wordt doordat je lang wacht, wordt niet altijd vergoed.",
      ] },
      { kop: "Lekt het nu?", tekst: [
        'Wacht met het dichtmaken van een lek niet op de verzekeraar. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet en bel of WhatsApp me met een foto. Wat een reparatie meestal kost, lees je in <a href="/kennisbank/wat-kost-daklekkage-repareren/">wat kost daklekkage repareren</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Vergoedt de opstalverzekering daklekkage?", a: "Vaak wel als het lek plotseling ontstond, bijvoorbeeld door storm of hagel. Komt het door slijtage of achterstallig onderhoud, dan meestal niet, of alleen de schade binnen. Kijk altijd in je eigen polisvoorwaarden." },
      { v: "Moet ik met repareren wachten tot de verzekeraar is geweest?", a: "Een noodreparatie om erger te voorkomen mag meestal gewoon, en verzekeraars verwachten dat ook. Maak eerst goede foto's en bewaar de factuur. Over de definitieve reparatie kun je het beste even met je verzekeraar overleggen." },
      { v: "Ik huur mijn huis, wie betaalt de reparatie?", a: "Het dak is de zaak van je verhuurder. Meld het lek daar zo snel mogelijk. Schade aan je eigen spullen valt onder je eigen inboedelverzekering." },
    ],
  },
  {
    slug: "verstopte-regenpijp-lekkende-dakgoot",
    titel: "Verstopte regenpijp?",
    h1: "Verstopte regenpijp of lekkende dakgoot — oorzaken en oplossing",
    metaTitle: "Verstopte regenpijp & lekkende dakgoot | Spoed Dak Service",
    metaDescription:
      "Verstopte regenpijp of lekkende dakgoot? Loopt het water langs je gevel, dan zit de afvoer meestal dicht. Zo herken je het en zo los ik het op.",
    intro:
      "Loopt het water bij regen over de goot of langs je gevel naar beneden, dan is de kans groot dat de regenpijp verstopt zit. Vervelend, maar zelden ingewikkeld. Hieronder waar het vandaan komt, waarom je het niet moet laten zitten, en hoe ik het verhelp.",
    secties: [
      { kop: "Waar het door komt", tekst: [
        "Blad, mos, takjes en zand komen vanaf het dak in de goot terecht en zakken door naar de regenpijp, waar het zich ophoopt. Vooral in het najaar gaat dat hard, en in de winter kan een verstopping bevriezen en de afvoer helemaal dichtzetten.",
        "Een lekkende dakgoot is vaak hetzelfde probleem: de goot loopt over omdat het water niet weg kan, niet omdat de goot zelf kapot is.",
      ] },
      { kop: "Hoe je het herkent", tekst: [
        "Water dat bij regen over de gootrand klotst, een straaltje langs de gevel, of vochtige plekken op de muur onder de goot. Soms lekt het bij de verbindingen van de pijp.",
      ] },
      { kop: "Waarom je het niet moet laten zitten", tekst: [
        "Blijft de afvoer dicht, dan trekt het overlopende water vocht in je gevel en fundering. Dat geeft vochtplekken, schimmel en op den duur zelfs scheuren. Dat is veel duurder dan de afvoer op tijd vrij laten maken.",
      ] },
      { kop: "Hoe ik het oplos", tekst: [
        "Ik maak eerst de goot leeg (blad, mos, modder), controleer of de instroom naar de regenpijp vrij is en kijk of het water weer vrij de regenpijp in loopt. Zit de verstopping diep in de pijp, dan zeg ik dat eerlijk. Last van bomen in de buurt? Dan adviseer ik bladroosters zodat het minder snel terugkomt.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Kan ik een verstopte regenpijp zelf ontstoppen?", a: "Soms, met een tuinslang van bovenaf. Maar op hoogte werken is niet zonder risico, en zit de verstopping diep, dan krijg je 'm er zo niet uit. Ik doe het veilig en grondig in één keer." },
      { v: "Hoe voorkom ik dat het terugkomt?", a: "Eén keer per jaar de goot laten reinigen (najaar) en eventueel bladroosters plaatsen. Staan er bomen vlakbij, dan twee keer per jaar." },
    ],
  },
  {
    slug: "dakgoot-lekt",
    datum: "2026-10-21",
    titel: "Dakgoot lekt?",
    h1: "Dakgoot lekt: bij de naad, de hoek of de regenpijp",
    metaTitle: "Dakgoot lekt: oorzaken en oplossing | Spoed Dak Service",
    metaDescription:
      "Druppelt je dakgoot bij een naad, een hoek of bij de regenpijp? Zo zie je of de goot vol zit of echt lek is, en wanneer repareren of vervangen loont.",
    intro:
      "Water dat uit je dakgoot druppelt of langs de gevel loopt: vaak zit de goot gewoon vol. Maar soms is de goot zelf lek, en dat zie je meestal op een paar vaste plekken. Hieronder hoe je het verschil ziet en wat eraan te doen is.",
    secties: [
      { kop: "Vol of echt lek?", tekst: [
        'Loopt het water over de voorkant van de goot, over een groot stuk of midden in de goot? Dan zit de goot of de uitloop meestal vol. Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>.',
        "Druppelt het op één vaste plek, ook nog een tijdje na de bui? Dan is de goot daar waarschijnlijk echt lek.",
      ] },
      { kop: "Waar een goot meestal lekt", tekst: [
        "Bij de naden, waar twee stukken goot aan elkaar zitten. Bij de hoeken van het huis. En bij de uitloop, het stuk waar de goot overgaat in de regenpijp.",
        "Bij zinken goten zie je na jaren ook kleine gaatjes of plekken waar het zink dun is geworden. Bij kunststof goten zit het vaker in een verbinding of een rubber dat is uitgedroogd. En een goot die doorhangt door een losse beugel, houdt water vast op de verkeerde plek. Daar loopt het dan over de rand.",
      ] },
      { kop: "Lekt het bij de regenpijp?", tekst: [
        "Druppelt het bij de aansluiting van goot en regenpijp, dan zit de uitloop vaak los of lekt de verbinding. Lekt het verderop uit de regenpijp zelf, bij een verbinding of een scheur, dan moet dat stuk pijp meestal opnieuw vast of vervangen worden.",
      ] },
      { kop: "Waarom je het niet laat zitten", tekst: [
        "Een lekkende goot lijkt klein, maar het water loopt elke bui langs dezelfde plek van je gevel. Dat geeft natte muren, groene aanslag en op den duur schade aan het metselwerk of de houten boeidelen.",
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        'Een lekkende naad, een losse beugel of een lekkende uitloop is vaak goed te herstellen. Is de goot op meerdere plekken lek of zit er roest in, dan is vervangen op termijn meestal goedkoper dan blijven repareren. Ik zeg eerlijk wat in jouw geval slim is. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er lek is en hoe lang de goot is. Je hoort de vaste prijs vooraf. Zit de goot alleen vol, dan is het gewoon <a href="/diensten/goten-reinigen/">goten reinigen</a>. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Kan ik een lekkende dakgoot zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar op een natte of vuile goot hecht het slecht en na een winter lekt het vaak weer. En op een ladder bij de goot werken is niet zonder risico. Laat liever kijken waar het echt lekt." },
      { v: "Mijn goot lekt alleen bij harde regen, is hij dan lek?", a: "Niet altijd. Bij een stortbui kan een goot die een beetje vol zit gewoon overlopen. Druppelt het ook na een gewone bui op dezelfde plek, dan is er waarschijnlijk echt iets lek." },
      { v: "Kun je snel komen als het water langs de muur loopt?", a: "Bel of WhatsApp me met een foto van de plek. Dan zie ik vaak al of de goot vol zit of lek is, en hoor je wanneer ik kan komen." },
    ],
  },
  {
    slug: "stormschade-eerste-hulp",
    titel: "Stormschade: eerste hulp",
    h1: "Stormschade aan je dak: eerste hulp en je verzekering",
    metaTitle: "Stormschade dak: eerste hulp | Spoed Dak Service",
    metaDescription:
      "Stormschade aan je dak? Weggewaaide pannen of een open dak laten regen binnen. Wat je nu zelf doet, wat je beter laat en hoe het zit met je verzekering.",
    intro:
      "Na een storm telt elk uur: losse of weggewaaide pannen en open plekken laten meteen regen binnen. Het belangrijkste is rust houden, je veiligheid voorop zetten en snel de schade laten beperken. Hieronder de stappen.",
    secties: [
      { kop: "Eerst: je veiligheid", tekst: [
        "Ga niet zelf het dak op tijdens of vlak na een storm — nat, winderig en met losse delen is dat te gevaarlijk. Blijf uit de buurt van loshangende pannen of delen die naar beneden kunnen komen, ook op de grond.",
        'Sijpelt er water naar binnen zonder dat er een storm is geweest, dan zit de oorzaak waarschijnlijk elders (losse pan, lood, verstopte goot). Kijk dan bij <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a> voor de eerste stappen en de meest voorkomende oorzaken.',
      ] },
      { kop: "Maak foto's en beperk de schade", tekst: [
        "Maak van een veilige plek foto's van de schade; die heb je straks nodig voor je verzekering. Vang binnen lekwater op en zet spullen droog. Het écht afdekken van het dak laat je aan een vakman over.",
      ] },
      { kop: "Je verzekering", tekst: [
        "Storm- en hagelschade valt vaak onder je opstalverzekering. Meld de schade bij je verzekeraar en bewaar de foto's. Ik lever een duidelijke omschrijving en foto's aan van wat ik aantref en herstel, zodat jij het kunt indienen.",
      ] },
      { kop: "Wanneer je moet bellen", tekst: [
        "Een open dak of actieve lekkage is spoed — daar kom ik snel voor langs om eerst de schade te stoppen (afdekken, dichten), en daarna netjes te herstellen. Bel of WhatsApp, dan hoor je meteen wanneer ik kan.",
      ] },
    ],
    dienst: { label: "Bekijk: stormschade", href: "/diensten/stormschade/" },
    faq: [
      { v: "Moet ik zelf het dak op om de schade af te dekken?", a: "Nee, doe dat niet — zeker niet vlak na een storm. Bel mij, ik dek het veilig af en herstel daarna." },
      { v: "Vergoedt mijn verzekering stormschade?", a: "Vaak wel via de opstalverzekering. Ik lever foto's en een omschrijving aan zodat je het kunt indienen; check de voorwaarden bij je verzekeraar." },
    ],
  },
  {
    slug: "dak-lekt-bij-harde-wind",
    datum: "2026-10-21",
    titel: "Dak lekt alleen bij storm?",
    h1: "Dak lekt alleen bij harde wind en regen: hoe kan dat?",
    metaTitle: "Dak lekt bij harde wind of storm? | Spoed Dak Service",
    metaDescription:
      "Blijft je dak droog bij gewone regen, maar lekt het bij harde wind? Dan waait de regen onder de pannen door. Dit zijn de plekken waar het meestal zit.",
    intro:
      "Bij een gewone bui blijft alles droog, maar bij regen met harde wind zie je ineens een natte plek. Dat komt veel voor in de herfst. Het water valt dan niet van boven, maar wordt schuin onder de pannen en langs de nok naar binnen geblazen. Hieronder lees je waar dat meestal gebeurt en wat je eraan doet.",
    secties: [
      { kop: "Waarom het alleen bij wind lekt", tekst: [
        "Een pannendak is niet waterdicht zoals een plat dak. Het water loopt over de pannen naar beneden, en waar de pannen elkaar overlappen is dat genoeg. Blaast de wind de regen van opzij of van onderen tegen het dak, dan kan het onder een pan door die net niet goed in de sluiting ligt. Bij gewone regen merk je daar niets van.",
      ] },
      { kop: "Waar het meestal zit", tekst: [
        'Bij de nok. Is de specie onder de nokvorsten verweerd of ligt een vorst los, dan waait de regen daar zo onderdoor. Lees ook <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.',
        "Bij een verschoven of gebroken pan, vaak overgebleven van een eerdere storm.",
        'Bij de schoorsteen of het dakraam, waar het lood niet meer goed aansluit. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.',
        "Langs de randen van het dak, bij de gevelpannen en de windveren. Daar vangt het dak de meeste wind.",
      ] },
      { kop: "Oudere daken", tekst: [
        "Bij sommige oudere daken ligt onder de pannen geen goede waterkerende laag meer, of is die op plekken vergaan. Waait er dan water onder een pan door, dan komt het meteen op zolder terecht. Ligt er wel een goede laag onder, dan loopt het water meestal eerst daarover naar de goot.",
      ] },
      { kop: "Wat je nu doet", tekst: [
        'Vang het water op en maak een foto van de natte plek, ook als het later weer droog is. Schrijf op bij wat voor weer het lekte: uit welke hoek de wind kwam en hoe hard het regende. Dat helpt mij om de plek op het dak te vinden. Ga niet zelf het dak op bij harde wind. Lekt het nu flink, kijk dan op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Hoe ik het opspoor", tekst: [
        'Omdat het alleen bij wind lekt, zie je het vaak niet als het droog is. Ik kijk daarom eerst naar de plekken hierboven, aan de kant waar de wind op stond, en op zolder naar oude waterkringen. Meestal vind ik het zo zonder iets open te breken. Meer hierover in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Waarom lekt mijn dak alleen bij storm?", a: "Omdat de wind de regen dan schuin onder de pannen of de nokvorsten door blaast. Bij gewone regen loopt het water er gewoon overheen. Vaak zit het bij de nok, een verschoven pan of het lood bij de schoorsteen." },
      { v: "Is het erg als het maar af en toe lekt?", a: "Laat het liever niet zitten. Elke keer worden het hout en de isolatie nat, en een plek die nu alleen bij storm lekt, wordt bij de volgende storm vaak groter." },
      { v: "Kan ik het zelf zien vanaf de straat?", a: "Soms wel. Een scheve nokvorst, een pan die anders ligt dan de rest of stukjes specie in de goot zie je vaak met een verrekijker. Stuur gerust een foto via WhatsApp, dan kijk ik mee." },
    ],
  },
  {
    slug: "dakonderhoud-per-seizoen",
    titel: "Dakonderhoud per seizoen",
    h1: "Dakonderhoud per seizoen: wat je wanneer moet controleren",
    metaTitle: "Hoe vaak dak onderhouden? Checklist | Spoed Dak Service",
    metaDescription:
      "Hoe vaak moet je je dak onderhouden? Twee keer per jaar kijken, in het voorjaar en het najaar. Wat je per seizoen controleert, bij een pannendak en een plat dak.",
    intro:
      "Een dak gaat tientallen jaren mee, maar alleen als je het een beetje bijhoudt. Twee korte checks per jaar — in het voorjaar en het najaar — voorkomen verreweg de meeste dure schade. Hieronder wat er per seizoen toe doet, en hoe vaak je een vakman nodig hebt.",
    secties: [
      { kop: "Twee keer per jaar: voorjaar en najaar", tekst: [
        "De vuistregel is twee visuele controles per jaar. In het voorjaar herstel je winterschade (losse pannen, gescheurd lood, gootschade van vorst). In het najaar maak je het dak winterklaar: goten leeg vóór de bladval, pannen en lood na voor de eerste herfststorm.",
        "Is je dak ouder dan zo'n vijftien jaar, dan is twee keer kijken echt geen luxe — oudere daken laten sneller los.",
      ] },
      { kop: "Goten: minimaal twee keer per jaar", tekst: [
        "Goten zijn het vaakst de oorzaak van vochtschade. Maak ze minstens twee keer per jaar leeg, en bij bomen in de buurt vaker. Najaar is het belangrijkste moment, vlak na de bladval.",
      ] },
      { kop: "Let op per daktype", tekst: [
        "Pannendak: controleer op losse, gebroken of poreuze pannen, verwijder mos op tijd (mos houdt vocht vast) en kijk jaarlijks de nokvorsten en het lood bij schoorsteen en dakramen na.",
        "Plat dak: hier is stilstaand water de grootste vijand. Controleer na hevige regen of het water goed wegloopt, en houd naden en opstanden in de gaten.",
      ] },
      { kop: "En een professionele inspectie?", tekst: [
        "Een grondige vakinspectie is elke 3 tot 5 jaar verstandig, en vaker bij een ouder dak. Ik doe zo'n check eerlijk: ik zeg wat nú aandacht vraagt en wat best nog even kan wachten. Geen onnodige paniek, geen onnodig werk.",
        'Wil je weten hoe je dak er nu voor staat, dan kan dat met de <a href="/dak-apk/">Dak-APK</a>: een keuring van je hele dak met een fotorapport.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Hoe vaak moet ik mijn dak laten controleren?", a: "Twee keer per jaar zelf een visuele check (voorjaar + najaar), en elke 3 tot 5 jaar een grondige vakinspectie — vaker bij een dak ouder dan 15 jaar." },
      { v: "Wat is het beste moment voor onderhoud?", a: "Najaar is het belangrijkst: goten leeg en pannen/lood nakijken vóór de herfststormen. Het voorjaar gebruik je om winterschade te herstellen." },
      { v: "Wat kost een dakinspectie?", a: `Bij mij heet dat de Dak-APK: ${apkPrijs} voor een keuring van je hele dak met een fotorapport. Daarna weet je wat nu nodig is en wat nog kan wachten.` },
      { v: "Hoe onderhoud je een plat dak?", a: "Kijk minstens één keer per jaar, het liefst in het najaar. Haal blad en mos weg bij de afvoer en in de hoeken, kijk of er na een bui water blijft staan en let op naden en randen die loslaten. Ga alleen het dak op als dat veilig kan." },
      { v: "Wat moet ik in het najaar aan mijn dak doen?", a: "De goten leeg na de bladval, kijken of er pannen of nokvorsten los liggen en het lood bij de schoorsteen en dakramen nakijken. Dan is je dak klaar voor de herfststormen." },
    ],
  },
  {
    slug: "mos-op-dak-verwijderen",
    titel: "Mos op je dak",
    h1: "Mos op je dak verwijderen: schadelijk of niet, en hoe wél?",
    metaTitle: "Mos op dak verwijderen — schadelijk? | Spoed Dak Service",
    metaDescription:
      "Mos op je dak verwijderen? Mos houdt vocht vast en kan pannen laten scheuren bij vorst. Maar een hogedrukreiniger is riskant.",
    intro:
      "Een groen waas op je dak ziet er onschuldig uit, maar mos is niet alleen cosmetisch. Het houdt vocht vast en kan op den duur schade geven. Tegelijk kun je met de verkeerde aanpak (lees: een te harde hogedrukreiniger) méér kapotmaken dan je oplost. Hieronder hoe het zit.",
    secties: [
      { kop: "Is mos echt schadelijk?", tekst: [
        "Ja, op termijn wel. Mos houdt vocht vast op je pannen; vriest dat vocht 's winters, dan zet het uit en kunnen pannen scheuren of afbladderen. Bovendien komt los mos in de goot en regenpijp terecht en verstopt daar de afvoer: een veelvoorkomende oorzaak van overlopende goten en lekkage.",
      ] },
      { kop: "Pas op met de hogedrukreiniger", tekst: [
        "Een hogedrukreiniger lijkt snel, maar te veel druk haalt de beschermende toplaag van je pannen weg en beschadigt vooral oudere, poreuze pannen — dan groeit het mos juist sneller terug. Voor stevige, moderne pannen kan lage druk, maar bij twijfel is voorzichtig handwerk of een zachtere methode beter.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        "Ik kijk eerst of je pannen het aankunnen. Daarna verwijder ik het mos voorzichtig en ruim ik de goot en de uitloop naar de regenpijp meteen mee op. Zijn de pannen al bros, dan zeg ik dat eerlijk: soms is gericht vervangen slimmer dan blijven reinigen.",
      ] },
    ],
    dienst: { label: "Bekijk: dak reinigen & mos", href: "/diensten/dak-reinigen/" },
    faq: [
      { v: "Mag ik zelf met een hogedrukreiniger mijn dak schoonmaken?", a: "Liever niet op oudere of poreuze pannen — je haalt er de toplaag af en beschadigt ze. Op hoogte werken is bovendien niet zonder risico. Ik doe het veilig en op de juiste druk." },
      { v: "Komt het mos terug?", a: "Op den duur wel, zeker aan de noordkant en onder bomen. Laat het niet te dik worden: af en toe reinigen en elk najaar de goten leeg houdt het meestal goed in de hand." },
    ],
  },
  {
    slug: "hoe-herken-je-een-betrouwbare-dakdekker",
    titel: "Betrouwbare dakdekker herkennen",
    h1: "Hoe herken je een betrouwbare dakdekker (en voorkom je oplichting)?",
    metaTitle: "Betrouwbare dakdekker herkennen | Spoed Dak Service",
    metaDescription:
      "Hoe herken je een betrouwbare dakdekker? KvK-inschrijving, schriftelijke offerte, verzekering en garantie, meerdere offertes vergelijken — de checklist.",
    intro:
      "KvK-inschrijving, een schriftelijke offerte, verzekering en garantie, meerdere offertes vergelijken — dit zijn de punten waar je op moet letten. Hieronder leg ik per punt uit waarom, en hoe ik dat zelf regel.",
    secties: [
      { kop: "Waarom dit een reëel risico is", tekst: [
        "Branchevereniging Vebidak meldt zelf tientallen keren per jaar fraude in de dakenbranche en noemt dat \"het topje van de ijsberg\" — het gaat dus niet om een enkel incident. Eind 2025 deed de Hoge Raad uitspraak in een zaak met zeven gedupeerden; in een andere, aparte rechtszaak betaalde een klant €7.200 voor een offerte terwijl het werk €2.000 waard bleek, en kreeg hij achteraf €8.500 terug via de rechter.",
        "Dat betekent niet dat de meeste dakdekkers oneerlijk zijn — verreweg de meeste doen gewoon hun werk. Maar de klachten die er wél zijn, volgen bijna altijd hetzelfde patroon: een mondelinge toezegging, een prijs die achteraf oploopt, en geen vast aanspreekpunt zodra er iets misgaat. Daar is met een paar checks vooraf veel van te voorkomen.",
      ] },
      { kop: "Checklist: waar je op let vóór je akkoord geeft", tekst: [
        "<strong>KvK-inschrijving.</strong> Vraag gerust naar het KvK-nummer en zoek het zelf even op — dat kost een minuut en laat meteen zien hoe lang een bedrijf al bestaat.",
        "<strong>Schriftelijke offerte met vaste prijs.</strong> Geen mondelinge toezegging \"dat wordt zo'n beetje...\", maar een bedrag op papier vóórdat het werk begint.",
        "<strong>Verzekering en garantie.</strong> Vraag naar aansprakelijkheidsverzekering (bij schade tijdens het werk) en garantie op het geleverde werk zelf.",
        "<strong>Meerdere offertes vergelijken</strong>, zeker bij grotere klussen (dakvervanging, renovatie) — een groot prijsverschil zonder duidelijke reden is een signaal om door te vragen.",
        "<strong>Reviews</strong>, met een kanttekening: een net gestart bedrijf heeft er nog weinig. Dat maakt het niet automatisch onbetrouwbaar — vraag dan gewoon naar recent afgerond werk of foto's.",
        "<strong>Pas op bij druk om nu te beslissen</strong> — aan de deur, of \"deze prijs geldt alleen vandaag\". Een serieus bedrijf geeft je bedenktijd.",
        "<strong>Meerwerk alleen na jouw schriftelijke akkoord vooraf.</strong> Dat is niet alleen verstandig, het is sinds 2025 ook wettelijk verplicht (art. 6:230m BW) — een aannemer mag onvoorzien extra werk niet zomaar bij je in rekening brengen zonder dat jij daar vooraf mee instemde.",
      ] },
      { kop: "Zo doe ik het zelf", tekst: [
        "Ik werk onder mijn eigen naam met mijn eigen 06-nummer — je krijgt mij aan de lijn, geen callcenter, en mijn KvK- en btw-gegevens deel ik gewoon op verzoek. Bij elke klus krijg je een vaste prijs vóórdat ik begin, en bij de Dak-APK (€49) krijg je er ook een fotorapport bij, zodat je niet op mijn woord alleen hoeft te vertrouwen.",
        "Zie ik onderweg iets extra's dat nodig is, dan meld ik dat en bespreken we het vóórdat ik het uitvoer — nooit een verrassing op de rekening achteraf.",
      ] },
    ],
    dienst: { label: "Lees over mij en hoe ik werk", href: "/over/" },
    faq: [
      { v: "Is een opvallend lage prijs een waarschuwingssignaal?", a: "Niet per se — kijk vooral of de prijs op papier staat en of hij past bij wat er in de offerte beschreven staat. Een prijs die pas ná het werk duidelijk wordt, is het grotere risico." },
      { v: "Wat als een dakdekker meerwerk wil doorberekenen zonder dat vooraf te zeggen?", a: "Dat mag sinds 2025 niet zomaar (art. 6:230m BW): extra werk moet eerst met jou worden afgestemd. Vraag altijd om een aangepaste, schriftelijke prijs vóórdat het meerwerk wordt uitgevoerd." },
      { v: "Ik denk dat ik ben opgelicht door een dakdekker, wat nu?", a: "Bewaar alles: de offerte, betaalbewijzen, berichten en foto's. Doe aangifte bij de politie en meld het bij de Fraudehelpdesk. Heb je aan de deur iets getekend, dan heb je vaak 14 dagen bedenktijd. Laat het werk door een andere vakman bekijken voordat je nog iets betaalt." },
      { v: "Welke keurmerken zijn er voor dakdekkers?", a: "Bekende namen in de dakenbranche zijn het keurmerk Dakmerk en de branchevereniging Vebidak. Zo'n keurmerk betekent dat een bedrijf aan bepaalde eisen voldoet. Maar het zegt niet alles: let ook op een vaste prijs op papier, een KvK-inschrijving en één vast aanspreekpunt." },
    ],
  },
  {
    slug: "wat-kost-een-dakdekker",
    titel: "Wat kost een dakdekker?",
    h1: "Wat kost een dakdekker of een dakreparatie? Eerlijke richtprijzen",
    metaTitle: "Wat kost een dakdekker of dakreparatie? | Spoed Dak Service",
    metaDescription:
      "Wat kost een dakdekker? Goten reinigen €99 all-in, kleine reparatie €100–€250, daklekkage €200–€500. Offerte altijd gratis, vaste prijs vooraf.",
    intro:
      "Een dakinspectie kost normaal €100 tot €300. Bij mij is dat de Dak-APK: €49 voor een compleet keuringsrapport met foto's van elke risicoplek, binnen een dagdeel. Voor de rest: hieronder de eerlijke richtprijzen per klus — geen vaag bedrag per meter, en bij elke klus hoor je de vaste prijs vóórdat ik begin.",
    secties: [
      { kop: "Kleine klussen en reparaties", tekst: [
        "Een kleine reparatie — een paar losse pannen terugleggen of een nokvorst vastzetten — kost meestal €100 tot €250, vaste prijs vooraf.",
        "Goten reinigen is €99 all-in bij een rijtjeswoning — en terwijl ik bezig ben zie ik vaak meteen of er verder nog iets aan je dak speelt. Groter huis? Vaste prijs vooraf.",
      ] },
      { kop: "Richtprijzen per klus", tekst: [
        "Een punctuele daklekkage repareren kost meestal €200 tot €500, inclusief materiaal. Dak ontmossen €8 tot €15 per m². Schoorsteen vegen €70. Zonnepanelen reinigen vanaf €10 per paneel. Een compleet nieuw dak: bitumen €50–€90, EPDM €95–€120, pannendak €60–€170 per m². Coaten en andere klussen krijg je als vaste prijs na een Dak-APK of bezoek.",
        "Bij spoed buiten kantooruren komt er een toeslag bij — die hoor je vooraf, nooit als verrassing achteraf.",
      ] },
      { kop: "Waarom een vaste prijs vooraf?", tekst: [
        "Elk dak is anders. Wil je eerst weten hoe je dak ervoor staat, dan kan dat via de Dak-APK (€49): een compleet keuringsrapport met foto's, binnen een dagdeel. Weet je al wat er moet gebeuren, dan geef ik een vaste prijs vóór ik begin. Geen meerwerk-verrassingen — dat is het verschil met een callcenter dat een richtbedrag noemt en achteraf bijplust.",
      ] },
    ],
    dienst: { label: "Bekijk alle prijzen", href: "/prijzen/" },
    faq: [
      { v: "Reken je voorrijkosten?", a: "Nee — een offerte is altijd gratis: bel of stuur een foto via WhatsApp en je hoort de vaste prijs vooraf. Wil je een complete keuring van je hele dak mét fotorapport? Dat is de Dak-APK (€49), maar die is optioneel." },
      { v: "Krijg ik de prijs op papier?", a: "Je hoort de vaste prijs vooraf en krijgt die desgewenst op de offerte. Geen verrassingen achteraf." },
      { v: "Wat kost een dakreparatie?", a: `Een kleine reparatie, zoals een paar losse pannen terugleggen of een nokvorst vastzetten, kost meestal ${kleinPrijs}. Een lek opsporen en dichten kost meestal ${lekPrijs}, inclusief materiaal. Je hoort de vaste prijs voordat ik begin.` },
      { v: "Waarom verschillen de prijzen van dakdekkers zo?", a: "Omdat elk dak anders is en niet iedereen op dezelfde manier rekent. De een noemt een prijs per meter of per uur, de ander rekent voorrijkosten of een minimumbedrag. Vraag daarom altijd wat er precies in de prijs zit en of het een vaste prijs is." },
    ],
  },
  {
    slug: "schoorsteen-vegen-hoe-vaak",
    titel: "Hoe vaak schoorsteen vegen?",
    h1: "Hoe vaak moet je de schoorsteen vegen, en wat kost het?",
    metaTitle: "Hoe vaak schoorsteen vegen? | Spoed Dak Service",
    metaDescription:
      "Hoe vaak schoorsteen vegen? Bij regelmatig stoken één keer per jaar, het beste vóór het stookseizoen. Veiliger tegen schoorsteenbrand. Kosten €70.",
    intro:
      "Een schone schoorsteen is veiliger en trekt beter. Maar hoe vaak is vegen nu echt nodig, en wat kost het? Kort en eerlijk uitgelegd.",
    secties: [
      { kop: "Hoe vaak is nodig?", tekst: [
        "Stook je regelmatig hout? Dan is één keer per jaar het advies, het beste vóór het stookseizoen (eind zomer / begin herfst). Bij een gasketel of weinig stoken kan het minder vaak.",
        "Veel verzekeraars verwachten ook een jaarlijkse beurt — handig om te weten als er ooit iets misgaat.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "In het kanaal verzamelt zich roet en creosoot. Te veel daarvan vergroot de kans op schoorsteenbrand en zorgt voor slechte trek (rook in huis). Vegen lost dat op en ik kijk meteen of het lood en de aansluiting op het dak nog goed zijn — een veelvoorkomende lekbron.",
      ] },
      { kop: "Zo zie je dat vegen nodig is", tekst: [
        "Rook die bij het aansteken de kamer in slaat, een kachel die slecht trekt, een sterke roetlucht als je niet stookt, of zwarte schilfers onder in de haard. Merk je zoiets, wacht dan niet tot volgend jaar.",
      ] },
      { kop: "Wat kost het?", tekst: [
        "Schoorsteen vegen kost €70 — netjes en zonder roetzooi in huis. Omdat ik toch op het dak ben, neem ik de aansluiting en het lood even mee in de controle.",
      ] },
    ],
    dienst: { label: "Bekijk: schoorsteen vegen", href: "/diensten/schoorsteen-vegen/" },
    faq: [
      { v: "Wanneer kan ik het beste laten vegen?", a: "Vóór het stookseizoen, dus eind zomer of begin herfst. Dan begin je de winter veilig en met goede trek." },
      { v: "Maken jullie er een rommel van binnen?", a: "Nee. Ik dek netjes af en werk schoon — geen roet in je woonkamer." },
      { v: "Is schoorsteen vegen verplicht?", a: "Voor een gewoon woonhuis staat het niet in de wet. Wel vragen veel verzekeraars in hun voorwaarden om een jaarlijkse veegbeurt als je hout stookt. Gaat het mis en is er niet geveegd, dan kan dat gevolgen hebben voor je uitkering. Kijk het even na in je polis." },
      { v: "Moet de schoorsteen ook geveegd worden als ik weinig stook?", a: "Stook je maar een paar keer per jaar, dan kan het vaak minder vaak. Heb je lang niet gestookt of zaten er vogels op de schoorsteen, laat dan voordat je weer begint toch even kijken of het kanaal vrij is." },
    ],
  },
  {
    slug: "wat-kost-dak-coaten",
    titel: "Wat kost dak coaten?",
    h1: "Wat kost dak coaten — en is het de moeite waard?",
    metaTitle: "Wat kost dak coaten? | Spoed Dak Service",
    metaDescription:
      "Wat kost dak of dakpannen coaten? Coating beschermt pannen die nog goed zijn en is veel goedkoper dan vervangen. Vaste prijs na een Dak-APK of bezoek.",
    intro:
      "Coaten klinkt als een dure ingreep, maar het is juist een manier om vervangen uit te stellen. Wanneer is het slim, en wat kost het? Eerlijk uitgelegd.",
    secties: [
      { kop: "Wanneer is coaten zinvol?", tekst: [
        "Coaten loont als je pannen nog stevig zijn maar verweerd: poreus, vol mos of dof. De coating beschermt tegen vocht, mos en uv en geeft je dak jaren extra.",
        "Zijn de pannen al broos of gebarsten, dan is coaten zonde van het geld — dan adviseer ik vervangen. Ik kom kijken en zeg eerlijk wat in jouw geval loont.",
      ] },
      { kop: "Coaten versus vervangen", tekst: [
        "Een dak vervangen is een flinke investering. Coaten kost daar een fractie van en kan, mits de pannen nog goed zijn, hetzelfde resultaat geven: een strak, beschermd dak. Daarom begin ik altijd met de vraag: kán het met coaten, of is vervangen echt nodig?",
      ] },
      { kop: "Wat kost het?", tekst: [
        "De prijs hangt af van het oppervlak en de staat van het dak. Wil je eerst weten hoe je dak ervoor staat, dan kan dat via de Dak-APK (€49); daarna geef ik een vaste prijs. Eerst reinigen, dan coaten — netjes en in één keer goed.",
      ] },
    ],
    dienst: { label: "Bekijk: dak coaten", href: "/diensten/dakcoating" },
    faq: [
      { v: "Hoe lang gaat een coating mee?", a: "Bij goed uitgevoerd werk meerdere jaren. De exacte levensduur hangt af van het type pan en de ligging van je dak." },
      { v: "Eerst reinigen?", a: "Ja, altijd. Een coating hecht alleen op een schoon dak, dus reinigen hoort er standaard bij." },
    ],
  },
  {
    slug: "zonnepanelen-reinigen-nodig",
    titel: "Zonnepanelen reinigen nodig?",
    h1: "Zonnepanelen reinigen: nodig, hoe vaak en wat levert het op?",
    metaTitle: "Zonnepanelen reinigen nodig? | Spoed Dak Service",
    metaDescription:
      "Vuile zonnepanelen leveren minder op. Hoe vaak reinigen nodig is, wat het kost (vanaf €10/paneel) en hoeveel opbrengst je terugwint.",
    intro:
      "Stof, mos en vogelpoep op je panelen kosten opbrengst. Maar hoe vaak is reinigen echt nodig, en verdien je het terug? Kort en eerlijk.",
    secties: [
      { kop: "Levert reinigen echt iets op?", tekst: [
        "Ja. Vuile panelen kunnen enkele procenten minder opbrengen — soms meer als er een dikke laag mos of vogelpoep op zit. Schone panelen vangen simpelweg meer licht.",
        "Of het de moeite is, hangt af van hoe vies ze zijn. Liggen ze vlak of staan er bomen/vogels in de buurt, dan vervuilen ze sneller.",
      ] },
      { kop: "Hoe vaak?", tekst: [
        "Voor de meeste daken is eens per 1 à 2 jaar genoeg. Veel bomen of vogels in de buurt? Dan vaker. Ik kijk meteen of de bevestiging en de pannen eronder nog goed zijn.",
        'Lekt het op zolder sinds de panelen erop liggen? Lees dan <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        "Zonnepanelen reinigen begint bij €10 per paneel, veilig vanaf het dak en streepvrij. Omdat ik er toch ben, is het vaak handig te combineren met goten reinigen.",
      ] },
    ],
    dienst: { label: "Bekijk: zonnepanelen reinigen", href: "/diensten/zonnepanelen-reinigen/" },
    faq: [
      { v: "Krassen jullie de panelen niet?", a: "Nee, ik werk met de juiste materialen en zonder schurende middelen, zodat de toplaag heel blijft." },
      { v: "Mag het met regenwater?", a: "Het beste resultaat is streepvrij met de juiste methode — daar let ik op, zodat er geen kringen achterblijven." },
    ],
  },
  {
    slug: "plat-dak-vervangen-of-repareren",
    titel: "Plat dak: repareren of vervangen?",
    h1: "Plat dak vervangen of repareren? EPDM, bitumen en de kosten",
    metaTitle: "Plat dak lekt: repareren of vervangen? | Spoed Dak Service",
    metaDescription:
      "Plat dak dat lekt: repareren of de hele bedekking vervangen? Het verschil tussen EPDM en bitumen, wanneer wat loont, en hoe ik het lek opspoor.",
    intro:
      "Een plat dak lekt vaak bij naden en aansluitingen, en het water komt meestal verderop naar binnen dan waar het lek zit. Repareren of vervangen? Zo bepaal ik dat.",
    secties: [
      { kop: "Waar een plat dak meestal lekt", tekst: [
        "Bijna altijd bij een naad of een aansluiting: langs de daktrim aan de rand, bij een opstaande muur, rond de afvoer, bij een doorvoer van een ventilatiepijp en op de naden tussen twee banen.",
        "Let ook op plekken waar na een bui water blijft staan. Staand water zoekt elke kleine scheur op, en mos en vuil houden het vocht nog langer vast.",
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        "Eén lek op een verder gezonde bedekking: repareren is prima en goedkoop. Is de bedekking op meerdere plekken versleten, blaast ze op of staat er water op, dan is vervangen op termijn voordeliger dan blijven lappen.",
        "Ik spoor eerst het lek op (de natte plek binnen zegt weinig over de plek op het dak) en zeg dan eerlijk wat loont.",
      ] },
      { kop: "EPDM of bitumen?", tekst: [
        "Bitumen (dakleer) is beproefd en wordt in lagen aangebracht. EPDM is een rubberen folie, vaak in één stuk, flexibel en lang houdbaar. Voor kleinere daken is EPDM vaak ideaal; welke het beste past hangt af van je dak en budget.",
      ] },
      { kop: "Lekt je platte dak nu?", tekst: [
        'Zet een emmer onder het lek en maak een foto van de natte plek. Ga niet zelf het dak op als het nat is of waait. Bij een plat dak komt het water vaak meters verderop binnen dan waar het lek zit, dus de plek binnen zegt weinig. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen, of lees hoe ik <a href="/kennisbank/daklekkage-opsporen/">een daklekkage opspoor</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        "Een gerichte reparatie is meestal het goedkoopst. Een hele bedekking vervangen krijg je als vaste prijs na inspectie. Je hoort altijd wat het wordt voordat ik begin.",
      ] },
    ],
    dienst: { label: "Bekijk: platte daken (EPDM)", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Hoe lang gaat EPDM mee?", a: "EPDM kan, goed gelegd, tientallen jaren mee. Het is flexibel en bestand tegen weer en uv." },
      { v: "Kun je het lek vinden zonder alles open te breken?", a: "Meestal wel. Ik spoor gericht op bij naden en opstanden, zodat er zo min mogelijk open hoeft." },
      { v: "Is mos op een plat dak schadelijk?", a: "Een beetje mos is niet meteen erg, maar het houdt vocht en vuil vast en kan de afvoer verstoppen. Dan blijft er water op je dak staan, en dat zoekt elke zwakke plek op. Haal het daarom op tijd weg en houd de afvoer vrij." },
      { v: "Hoe vaak moet een plat dak nagekeken worden?", a: "Minstens één keer per jaar, het liefst in het najaar: afvoer vrij, geen blad of mos in de hoeken en geen plekken waar water blijft staan. Een korte controle voorkomt de meeste lekkages." },
    ],
  },
];

export const getArtikel = (slug: string) => ARTIKELEN.find((a) => a.slug === slug);
