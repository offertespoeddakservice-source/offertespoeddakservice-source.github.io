/**
 * Kennisbank-artikelen — cornerstone-content voor informatie-zoekers (longtail-SEO).
 * Elk artikel linkt intern naar een dienstpagina (interne links = SEO + conversie).
 */

import { PRIJZEN } from "./prijzen";

const GOTEN_PRIJS = PRIJZEN.find((r) => r.dienst === "Dakgoot reinigen")?.prijs ?? "";
const lekPrijs = PRIJZEN.find((r) => r.dienst.startsWith("Daklekkage"))?.prijs ?? "";
const kleinPrijs = PRIJZEN.find((r) => r.dienst.startsWith("Kleine reparatie"))?.prijs ?? "";
const apkPrijs = PRIJZEN.find((r) => r.dienst.startsWith("Dak-APK"))?.prijs ?? "";
const ontmosPrijs = PRIJZEN.find((r) => r.dienst.startsWith("Dak reinigen"))?.prijs ?? "";
const veegPrijs = PRIJZEN.find((r) => r.dienst === "Schoorsteen vegen")?.prijs ?? "";
const zonPrijs = PRIJZEN.find((r) => r.dienst === "Zonnepanelen reinigen")?.prijs ?? "";
const nieuwDakUitleg = PRIJZEN.find((r) => r.dienst.startsWith("Nieuw dak"))?.uitleg ?? "";

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
  verborgen?: boolean; // true = artikel over iets wat ik niet doe: niet in Google en niet in de kennisbanklijst
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
      "Een natte plek op je plafond betekent bijna nooit dat het lek daar precies boven zit. Water loopt via panlatten, isolatie en naden naar het laagste punt en komt daar pas naar binnen. Daarom is een lek opsporen vakwerk, hieronder hoe het werkt.",
    secties: [
      { kop: "Lekkage nu? Eerst dit doen", tekst: [
        "Zie je een natte plek op het plafond? Zet eerst een emmer neer en maak een foto van de plek, dat helpt bij de beoordeling en later bij je verzekering. Haal spullen weg die vochtgevoelig zijn en ga niet zelf het dak op.",
        'Kwam de lekkage tijdens of vlak na een storm, met losse pannen of zichtbare schade van buiten? Volg dan de aparte stappen in <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp en je verzekering</a>, daar staat ook wat je aan je verzekering moet doorgeven. Is er geen storm geweest en sijpelt het water al langer, dan lees je hieronder waar het vandaan komt.',
      ] },
      { kop: "De meest voorkomende oorzaken", tekst: [
        'Een gebroken of verschoven dakpan zie ik verreweg het vaakst. Daarna: gescheurd of losgelaten lood bij de schoorsteen of het dakraam, een verstopte of overlopende goot, en versleten kitwerk of naden bij een plat dak. Lekt het bij de schoorsteen? Lees dan <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.',
        "Bij platte daken zit het lek vaak bij een naad of opstand, terwijl het water verderop naar binnen komt, dat maakt opsporen lastiger.",
      ] },
      { kop: "Zo spoor je het op, zonder sloopwerk", tekst: [
        "Ik werk van buiten naar binnen: eerst het dak na op losse pannen, lood en naden, dan de zolder op natte sporen. Vaak is een gerichte controle genoeg en hoeft er niks opengebroken te worden.",
        "Lukt het visueel niet, dan zijn er technieken (water gericht aanbrengen, rook- of vochtmeting) om de exacte plek te vinden. Eerst de schade beperken, dan de oorzaak aanpakken.",
      ] },
      { kop: "Opsporen bij een plat dak", tekst: [
        `Op een plat dak ligt de dakbedekking op een houten of betonnen ondergrond, vaak met isolatie ertussen. Komt er water door een naad, dan loopt het daar onder de bedekking of over het dakbeschot verder tot het een plek vindt om naar binnen te gaan. Daarom begin ik niet boven de natte plek, maar bij de plekken waar een plat dak het vaakst lekt: de naden, de randen en de daktrim, de opstanden tegen de muur, de afvoer en de rand van een lichtkoepel.`,
        `Blijft er na een bui water staan, dan kijk ik extra goed naar de naden in en rond die plas. Lekt het langs de muur van je huis, lees dan <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>. Druppelt het bij een koepel, kijk dan bij <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>. Of repareren genoeg is, lees je in <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een punctuele reparatie kost meestal ${lekPrijs}, inclusief materiaal. Bij spoed buiten kantooruren komt daar een toeslag bij. Je hoort altijd de prijs voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Moet er voor het opsporen iets opengebroken worden?", a: "Meestal niet. In de meeste gevallen vind ik het lek met een gerichte controle van buiten en op zolder, zonder sloopwerk." },
      { v: "Kun je vandaag nog komen?", a: "Bij spoed in de regio Den Bosch vaak wel. Bel of WhatsApp, dan hoor je meteen wanneer ik kan." },
      { v: "Wat kost het om een daklekkage te laten opsporen?", a: `Bij mij hoort het zoeken bij de reparatie. Ik kijk van buiten en op zolder waar het water binnenkomt, en je hoort één vaste prijs voor opsporen en dichten samen, meestal ${lekPrijs} inclusief materiaal. Is er toch extra meetwerk nodig, dan hoor je dat vooraf.` },
      { v: "Kan ik zelf zien waar mijn dak lekt?", a: "Een eind wel. Ga bij regen met een zaklamp op zolder kijken en volg vanaf de natte plek het hout en de folie omhoog. Vaak zie je een natte streep op een balk die naar de echte plek wijst. Van buiten kun je vanaf de straat kijken naar scheve pannen, lood dat los staat bij de schoorsteen of een goot die overloopt. Ga zelf niet het dak op." },
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
      { kop: "Aan welke kant van de schoorsteen zit het?", tekst: [
        `Kijk na een bui op zolder waar het hout of de muur rond de schoorsteen nat is. Dat zegt vaak al welk stuk lood het is.`,
        `Nat aan de onderkant, de kant van de goot: daar ligt een brede strook lood over de pannen, die het water van de schoorsteen af over het dak leidt. Krult die strook omhoog of zit er een scheur in een hoek, dan loopt het water eronder door.`,
        `Nat langs een zijkant: langs de zijkanten liggen kleine stukken lood die trapsgewijs in de schoorsteen zijn vastgezet. Zit er een stuk los, of is de bovenrand uit de schoorsteen gekomen, dan loopt het water langs de schoorsteen naar beneden.`,
        `Nat aan de bovenkant, de kant van de nok: achter de schoorsteen komt al het water van het dak erboven samen, en daar blijven ook blad en mos liggen. Ligt daar geen goed stuk lood dat het water om de schoorsteen heen leidt, of zit het vol vuil, dan staat het water er na een flinke bui tegen de schoorsteen aan en zoekt het een weg naar binnen.`,
        `Hoe je ziet dat lood op is, lees je in <a href="/kennisbank/lood-op-dak/">lood op je dak</a>. Komt het water in de haard zelf naar beneden, kijk dan bij <a href="/kennisbank/schoorsteen-lekt-open-haard/">water in je open haard</a>.`,
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
    slug: "schoorsteen-lekt-open-haard",
    datum: "2026-10-27",
    titel: "Water in je open haard bij regen?",
    h1: "Schoorsteen lekt bij regen: water in je open haard of kachel",
    metaTitle: "Schoorsteen lekt: water in de open haard | Spoed Dak Service",
    metaDescription: "Water in je open haard of kachel bij regen, of bruine vlekken op de schoorsteen binnen? Zo zie je of het via de kop, het kanaal of het lood komt, en wat je doet.",
    intro: "Druppelt het bij een flinke bui in je open haard of kachel, of komen er natte, bruine plekken op de schoorsteen in de kamer? Dan komt het water meestal niet door het dak naast de schoorsteen, maar door de schoorsteen zelf. Hieronder lees je waar het vandaan komt en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een bak of emmer in de haard, haal hout en spullen weg en maak een foto van de natte plek. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "In de haard, of naast de schoorsteen?", tekst: [
        "Komt het water in de haard of de kachel zelf naar beneden, dan komt het meestal van bovenaf door het kanaal of door de kop van de schoorsteen.",
        'Zie je een natte plek op de muur of het plafond naast de schoorsteen, of op zolder rond het kanaal? Dan zit het vaker in het lood of de pannen eromheen. Lees dan <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.',
      ] },
      { kop: "Waar het water meestal binnenkomt", tekst: [
        "Een open kanaal zonder kap: bij harde regen met wind waait er dan water recht naar beneden. Een afdekplaat of kop bovenop de schoorsteen die gescheurd of los is: het water trekt dan in de stenen en loopt binnen langs het kanaal naar beneden. En stenen die na veel jaren poreus zijn geworden, vooral aan de kant waar de regen meestal vandaan komt.",
        "Zit het in de stenen zelf, dan zeg ik dat eerlijk: daarvoor heb je een metselaar nodig.",
      ] },
      { kop: "Bruine vlekken op de schoorsteen binnen", tekst: [
        "Water dat door de schoorsteen naar beneden trekt, neemt onderweg roet en teer mee. Daardoor zie je binnen vaak bruine of gele vlekken op de schoorsteenborst, soms met een vieze lucht. Overschilderen helpt niet zolang er nog water bij komt: de vlekken komen dan terug.",
      ] },
      { kop: "Druppelt het ook als het droog is?", tekst: [
        "Dan is het waarschijnlijk geen lek, maar condens. Dat zie ik vooral als er een ketel of kachel op een oud kanaal is aangesloten. Warme, vochtige lucht koelt in het kanaal af en het vocht druppelt naar beneden. Dat los je niet op het dak op. Laat dat nakijken door de installateur van je ketel of kachel.",
      ] },
      { kop: "Een schoorsteen die je deelt met de buren", tekst: [
        "Bij veel rijtjeshuizen en twee-onder-een-kappers staat de schoorsteen op de scheidingsmuur. Dan kan het lek ook aan de kant van de buren zitten, terwijl het bij jou binnenkomt. Overleg dan even met je buren, zodat de hele schoorsteen in één keer bekeken kan worden. Dat scheelt dubbel werk.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk van buiten naar de kop, de afdekplaat, het lood en de pannen rond de schoorsteen, en ik zeg eerlijk wat ik zie. Lood en pannen herstel ik zelf, zie <a href="/diensten/dakreparatie/">dakreparatie</a>. Gebruik je de schoorsteen nog, dan is het handig om het <a href="/diensten/schoorsteen-vegen/">vegen</a> in één keer mee te nemen.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er mis is. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (lood en pannen)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Is een beetje water in de open haard normaal?", a: "Bij een open kanaal zonder kap kan er bij harde regen met wind wat water naar beneden komen. Druppelt het bij elke bui, staan er plasjes in de haard of komen er bruine vlekken op de schoorsteen, dan is er meer aan de hand en laat je het beter nakijken." },
      { v: "Waar komen bruine vlekken op mijn schoorsteenborst vandaan?", a: "Meestal van water dat door de kop of de stenen naar binnen trekt en onderweg roet en teer meeneemt. Zolang er nog water bij komt, komen de vlekken na het schilderen terug." },
      { v: "Ik deel de schoorsteen met de buren, wat nu?", a: "Dan kan het lek ook aan hun kant van het dak zitten. Overleg even met je buren en laat de hele schoorsteen in één keer bekijken. Dat scheelt dubbel werk." },
      { v: "Kun je snel komen als het in de haard druppelt?", a: "Stuur me via WhatsApp een foto van de natte plek binnen en, als het lukt, van de schoorsteen buiten. Dan zie ik vaak al waar ik moet zoeken en hoor je wanneer ik kan komen." },
      { v: "Kun je een kap op mijn schoorsteen zetten?", a: "Ja, dat doe ik. Een kap of afdekplaat bovenop de schoorsteen houdt de regen uit het kanaal. Stook je nog op de haard of kachel, dan kies ik een kap die past bij een schoorsteen die nog in gebruik is. Je hoort vooraf de vaste prijs." },
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
      { kop: "Condens na het isoleren van je dak", tekst: [
        "Heb je je dak of zolder laten isoleren en zie je daarna ineens druppels of natte plekken? Dat komt vaker voor dan je denkt. Aan de warme kant van de isolatie hoort een folie die de vochtige lucht uit huis tegenhoudt. Zit daar een naad open, of zit de folie aan de verkeerde kant, dan komt de warme lucht achter de isolatie tegen het koude dakbeschot. Daar slaat het vocht neer, en dat zie je pas als het al een tijd speelt.",
        "Een huis met goede isolatie en nieuwe kozijnen is ook luchtdichter dan vroeger. Het vocht van douchen en koken blijft dan langer binnen hangen. Daarom is goed ventileren na het isoleren extra belangrijk. Zie je het kort na het isoleren, neem dan eerst contact op met wie het werk heeft gedaan.",
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
      { v: "Kan mijn zolder vochtiger worden nadat het dak is geïsoleerd?", a: "Dat kan. Na het isoleren blijft de warmte beter binnen, maar ook het vocht. Zit de folie aan de warme kant niet goed dicht, dan slaat dat vocht neer tegen het koude dak achter de isolatie. Ventileer goed en laat het nakijken als je kort na het isoleren druppels of schimmel ziet." },
    ],
  },
  {
    slug: "vochtplek-plafond",
    datum: "2026-10-22",
    titel: "Vochtplek in het plafond?",
    h1: "Vochtplek of lekkage in je plafond: komt het van het dak?",
    metaTitle: "Vochtplek in plafond: dak of leiding? | Spoed Dak Service",
    metaDescription:
      "Een natte plek of bruine kring in je plafond? Zo zie je of het van het dak komt, van een leiding of van condens, en wat je meteen doet als het druppelt.",
    intro:
      "Een bruine kring of een natte plek in je plafond: dan denk je al snel aan het dak. Soms klopt dat. Maar het kan ook een leiding zijn, de badkamer erboven of condens. Hieronder lees je hoe je het verschil ziet, zodat je meteen de goede vakman belt.",
    secties: [
      { kop: "Druppelt het nu? Eerst dit", tekst: [
        'Zet een emmer onder de druppel en leg er een doek in, dan hoor je het getik niet de hele nacht. Haal spullen weg die nat kunnen worden. Bolt het plafond op en zit er duidelijk water achter, blijf er dan niet onder staan. Maak een foto van de plek. Denk je dat het van het dak komt, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je verder meteen doet.',
      ] },
      { kop: "Zo zie je dat het van het dak komt", tekst: [
        'De plek zit op de bovenste verdieping of op zolder. Hij wordt groter of natter na regen en droogt op als het een paar dagen droog is. Vaak zit hij bij een buitenmuur, onder de schoorsteen, bij een dakraam of onder de nok. Lekt het vooral bij regen met harde wind, lees dan <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
        'De natte plek zit zelden precies onder het echte lek. Het water loopt eerst over de folie, de panlatten of een balk voordat het naar binnen komt. Hoe ik het lek vind zonder onnodig sloopwerk, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
      { kop: "Zo zie je dat het een leiding is", tekst: [
        "De plek wordt ook groter als het al dagen droog is. Hij zit onder een badkamer, toilet of keuken, of op een verdieping met nog een verdieping erboven. Draait je watermeter terwijl alle kranen dicht zijn, dan lekt er waarschijnlijk een leiding. Dan heb je een loodgieter nodig en geen dakdekker. Lekt het flink, draai dan de hoofdkraan dicht.",
      ] },
      { kop: "Of is het condens?", tekst: [
        'Een vochtige waas of zwarte puntjes in de hoeken van het badkamerplafond zijn meestal condens van het douchen. Op zolder zie je condens als druppels verspreid over het hele dakbeschot, vaak na een koude nacht. Het verschil met een lek lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Woon je in een rijtjeshuis?", tekst: [
        "Dan kan het water ook via de buren komen: een goot, schoorsteen of plat dak dat over meerdere huizen doorloopt. Vraag de buren of zij ook iets zien. Zit het lek aan hun kant van het dak, dan moet het daar gemaakt worden, en dat is goed om vooraf te weten. Huur je je huis, meld het lek dan eerst bij je verhuurder.",
      ] },
      { kop: "Zit de plek in je aanbouw of onder een lichtkoepel?", tekst: [
        'Een natte plek in het plafond van een aanbouw komt vaak niet door het platte dak zelf, maar door de plek waar dat dak tegen de muur van je huis zit. Hoe je dat herkent, lees je in <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>. Druppelt het rond of onder een lichtkoepel, dan zit het vaak langs de rand van de koepel, of is het condens aan de binnenkant. Het verschil lees je in <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van waar het lek zit en hoeveel werk het is. Je hoort de vaste prijs vooraf, voordat ik begin. Wat een reparatie meestal kost, lees je in <a href="/kennisbank/wat-kost-daklekkage-repareren/">wat kost daklekkage repareren</a>. Of je verzekering meebetaalt, staat in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Hoe weet ik of een vochtplek in het plafond van het dak komt?", a: "Kijk wanneer de plek groter wordt. Alleen na regen, en op de bovenste verdieping of bij de schoorsteen of een dakraam: dan wijst het op het dak. Groeit hij ook bij droog weer, dan is het eerder een leiding." },
      { v: "Moet het plafond open om het lek te vinden?", a: "Meestal niet. Bij een daklek kijk ik eerst van buiten en op zolder. Vaak vind ik het zo, zonder iets open te breken." },
      { v: "Is een natte plek in het plafond spoed?", a: "Druppelt het of wordt de plek snel groter, dan wel. Hoe langer het lekt, hoe meer schade aan het plafond, de isolatie en het hout. Bel of WhatsApp me met een foto. Is het een oude, droge kring, dan kan het meestal even wachten, maar laat het wel nakijken." },
      { v: "Kun je ook helpen als het een leiding is?", a: "Nee, daarvoor heb je een loodgieter nodig. Twijfel je, stuur dan een foto via WhatsApp. Dan zeg ik eerlijk of het van het dak komt of niet." },
      { v: "Kan ik over een vochtplek in het plafond heen schilderen?", a: "Pas als de oorzaak is opgelost en het plafond helemaal droog is. Dat duurt na een lek vaak een paar weken. Schilder je eerder, dan komt de kring meestal terug. Gebruik een verf die vlekken afdekt, want door gewone muurverf schemert een bruine kring vaak weer heen." },
    ],
  },
  {
    slug: "plafond-bolt-op-door-lekkage",
    datum: "2026-10-31",
    titel: "Plafond bolt op door lekkage?",
    h1: "Plafond bolt op of hangt door na een lekkage: wat doe je nu?",
    metaTitle: "Plafond bolt op door lekkage: wat nu? | Spoed Dak Service",
    metaDescription:
      `Bolt je plafond op of hangt het door na een lek? Zo houd je het veilig, zo zie je of het water van het dak komt en dit doe je tot de reparatie.`,
    intro:
      `Een natte plek in je plafond is vervelend. Bolt het plafond op of gaat het doorhangen, dan zit er water achter dat ergens heen moet, en dan wil je snel weten wat je moet doen. Hieronder lees je hoe je het veilig houdt, waar het water vandaan komt en wat er daarna gebeurt.`,
    secties: [
      { kop: "Eerst veilig", tekst: [
        `Ga niet onder de bolling staan en haal mensen, huisdieren en spullen eronder weg. Zit er een lamp of een rookmelder in of vlak bij de natte plek, zet dan in de meterkast de groep van die kamer uit. Water en stroom gaan niet samen.`,
        `Zet een emmer of een bak onder de plek en leg er handdoeken omheen. Maak foto's van het plafond en van je spullen, die heb je later nodig voor je verzekering.`,
      ] },
      { kop: "Een gaatje prikken of niet?", tekst: [
        `Je leest vaak dat je een klein gaatje in de bolling kunt prikken, zodat het water in een emmer loopt in plaats van het plafond mee te trekken. Bij een kleine bolling in een gestuct plafond kan dat helpen. Doe het alleen als je er veilig bij kunt, met de stroom van die kamer eraf, en sta er niet recht onder.`,
        `Hangt het plafond al ver door, zie je scheuren of hoor je het kraken, blijf er dan weg en prik niet. Dan kan er zo een stuk naar beneden komen.`,
      ] },
      { kop: "Komt het van het dak?", tekst: [
        `Zit de bolling op de bovenste verdieping of onder de zolder, en kwam hij na regen? Dan komt het water meestal van het dak, de goot of de aansluiting bij de schoorsteen of een dakraam. Zit er nog een verdieping boven, of is het al dagen droog, dan is het eerder een leiding of de badkamer erboven. Hoe je dat verschil ziet, lees je in <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a>.`,
        `Zit de bolling in het plafond van een aanbouw met een plat dak, dan komt het water vaak een eind verderop binnen dan waar het lek zit. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: "Waarom het water zich daar ophoopt", tekst: [
        `Water van een lek loopt over de folie, de isolatie of een balk tot het een laag punt vindt. Boven een gestuct plafond of gipsplaten blijft het dan liggen, en het plafond zuigt zich vol. Zo kan een klein lek in een paar uur een flinke bolling geven, terwijl het echte lek een eind verderop zit.`,
      ] },
      { kop: "Is het spoed?", tekst: [
        `Ja. Een plafond dat opbolt, betekent dat er al flink wat water binnen is, en bij de volgende bui komt er meer bij. Bel of WhatsApp me met een foto van het plafond en, als dat veilig kan, van het dak vanaf de straat. Ik kijk eerst waar het water binnenkomt en maak dat dicht, zodat het niet erger wordt. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "En daarna: het plafond zelf", tekst: [
        `Als het lek dicht is, moet het plafond eerst goed drogen. Dat duurt vaak een paar weken. Is het stucwerk losgekomen of zijn de gipsplaten zacht geworden, dan moet dat stuk vervangen worden. Dat is werk voor een stukadoor of een klusbedrijf. Ik maak het dak dicht en zeg je eerlijk wat ik aan de binnenkant zie.`,
      ] },
      { kop: "Je verzekering", tekst: [
        `Schade aan je plafond en je spullen valt vaak onder je opstal- of inboedelverzekering, zeker als het lek plotseling ontstond, bijvoorbeeld door een storm. Komt het door slijtage, dan wordt de reparatie van het dak meestal niet vergoed, maar de schade binnen soms wel. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving erbij. Meer lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Moet ik het lek eerst opsporen en dan dichten, dan kost dat meestal ${lekPrijs}, inclusief materiaal. Is het 's avonds, 's nachts of in het weekend, dan komt er een toeslag bij. Je hoort de vaste prijs vooraf, voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Moet ik in een opbollend plafond prikken?", a: `Alleen bij een kleine bolling in een gestuct plafond, als je er veilig bij kunt, met de stroom van die kamer uit en een emmer eronder. Hangt het plafond ver door, zie je scheuren of hoor je het kraken, blijf er dan weg. Dan kan er een stuk naar beneden komen.` },
      { v: "Kan een plafond naar beneden komen door lekkage?", a: `Ja, als er lang genoeg water op blijft staan. Gipsplaten en stucwerk worden zwaar en zacht van water. Ga daarom niet onder een bolling staan en laat het lek zo snel mogelijk dichtmaken.` },
      { v: "Is een opbollend plafond spoed?", a: `Ja. Er zit dan al flink wat water achter, en bij de volgende bui komt er meer bij. Bel of WhatsApp me met een foto, dan hoor je wanneer ik kan komen.` },
      { v: "Wie maakt het plafond weer netjes?", a: `Eerst moet het lek dicht en het plafond droog zijn. Daarna herstelt een stukadoor of klusbedrijf het plafond. Ik maak het dak dicht en zeg eerlijk wat ik aan de binnenkant zie.` },
    ],
  },
  {
    slug: "dak-lekt-bij-hevige-regen",
    datum: "2026-10-28",
    titel: "Dak lekt alleen bij een stortbui?",
    h1: "Dak lekt alleen bij hevige regen of een stortbui: waar zit het?",
    metaTitle: "Dak lekt bij hevige regen of stortbui? | Spoed Dak Service",
    metaDescription:
      "Blijft je dak droog bij een gewone bui, maar lekt het bij een stortbui? Dan kan het water ergens niet snel genoeg weg. Dit zijn de plekken waar het meestal zit.",
    intro:
      "Bij een gewone bui is er niets aan de hand, maar na een flinke stortbui zie je ineens een natte plek. Dan zit er meestal geen gat in je dak. Er valt in korte tijd zoveel water dat het ergens niet snel genoeg weg kan. Het komt dan hoger te staan dan waar dat stuk dak voor gemaakt is, en zoekt een weg naar binnen. Hieronder lees je waar dat meestal gebeurt en wat je eraan doet.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg en maak een foto van de natte plek. Ga niet het dak op en zet geen ladder tegen de goot zolang het zo hard regent. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Stortbui of harde wind?", tekst: [
        'Kijk eerst wat voor bui het was. Viel de regen vooral recht naar beneden, heel veel in korte tijd, lees dan hieronder verder. Lekt het vooral als het hard waait, dan blaast de wind de regen onder de pannen door. Dat is een ander verhaal, en dat lees je in <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        'Een goot die het niet bijhoudt. Ligt er wat blad in de goot of bij de uitloop naar de regenpijp, dan gaat het bij een gewone bui nog net goed. Bij een stortbui loopt hij over. Bij een gewone goot zie je dat buiten langs de gevel. Bij een bakgoot, die in de rand van het dak ligt, loopt het water naar binnen. Lees ook <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a> en <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.',
        'De kilgoot, in de hoek waar twee dakvlakken samenkomen. Daar komt het water van twee kanten tegelijk. Ligt er blad of mos in, dan komt het bij een stortbui hoger dan de rand van het lood of zink en loopt het opzij onder de pannen door. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.',
        'Een plat dak met een afvoer die vol blad of vuil zit. Het water blijft dan staan en komt bij een flinke bui tot over de opstaande rand of bij een naad. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
        'Een dakraam. Boven het raam blijft soms blad liggen, en dan stroomt het water bij een stortbui over de aansluiting heen naar binnen. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.',
      ] },
      { kop: "Waarom het alleen bij een stortbui lekt", tekst: [
        "Een dak is gemaakt om water snel af te voeren. Pannen, lood en goten doen hun werk zolang het water weg kan. Zit er ergens een kleine belemmering, zoals wat blad, mos of een goot die een beetje doorhangt, dan merk je daar bij een gewone bui niets van. Valt er in korte tijd heel veel regen, dan is zo'n kleine belemmering net genoeg.",
      ] },
      { kop: "Wat je zelf kunt doen", tekst: [
        "Schrijf op wanneer het lekte en hoe hard het regende. Kijk bij de volgende flinke bui vanuit huis of vanaf de stoep naar je goot: gutst het water over de voorkant, dan zit hij vol of kan de uitloop het niet aan. Ga niet zelf het dak op of op een ladder staan, zeker niet als alles nat is.",
      ] },
      { kop: "Hoe ik het oplos", tekst: [
        'Vaak is het geen grote klus. Ik maak de goot, de kil of de afvoer leeg en kijk of het water weer vrij weg kan. Daarna kijk ik of er toch iets lek is, zoals een naad in de goot, een scheur in het lood of een pan die net niet goed ligt. Zit de goot alleen vol, dan is <a href="/diensten/goten-reinigen/">goten reinigen</a> genoeg. Is er wel iets kapot, zie dan <a href="/diensten/daklekkage/">daklekkage</a>. Je hoort vooraf de vaste prijs.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Waarom lekt mijn dak alleen bij een stortbui?", a: "Omdat het water dan niet snel genoeg weg kan. Een goot, kilgoot of afvoer die een beetje vol zit, gaat bij een gewone bui nog goed, maar loopt bij een stortbui over. Het water zoekt dan een weg naar binnen." },
      { v: "Is er iets kapot als het alleen bij een stortbui lekt?", a: "Niet altijd. Vaak zit er iets vol en is leegmaken genoeg. Maar soms zit er ook een kleine scheur of een losse naad die je bij gewone regen niet merkt. Daarom kijk ik allebei na." },
      { v: "Hoe zie ik of mijn goot overloopt of lek is?", a: "Gutst het water bij een flinke bui over de voorkant van de goot, dan zit hij meestal vol. Druppelt het op één vaste plek, ook nog als de bui voorbij is, dan is hij daar waarschijnlijk lek." },
      { v: "Kun je snel komen als het binnen nat wordt?", a: "Bel of WhatsApp me met een foto van de natte plek binnen en, als dat veilig kan, een foto van de goot of het dak vanaf de straat. Dan hoor je wanneer ik kan komen." },
    ],
  },
  {
    slug: "dak-lekt-bij-sneeuw-of-vorst",
    datum: "2026-10-30",
    titel: "Lekt je dak bij sneeuw of vorst?",
    h1: "Dak lekt bij sneeuw of vorst: stuifsneeuw, dooi en ijs",
    metaTitle: "Dak lekt bij sneeuw of dooi: oorzaken | Spoed Dak Service",
    metaDescription:
      "Natte plek op zolder na sneeuw of bij dooi? Vaak is het stuifsneeuw onder de pannen of smeltwater dat niet weg kan. Zo zie je het en dit doe je eraan.",
    intro:
      "In de winter lekt een dak soms op een moment dat je niet verwacht: niet tijdens een bui, maar een dag na het sneeuwen of als het gaat dooien. Dat ligt dan meestal niet aan een kapotte pan, maar aan sneeuw of ijs dat ergens komt waar het niet hoort. Hieronder lees je hoe dat komt en wat je zelf kunt doen.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        `Zet een emmer of een bak onder de druppels, leg een handdoek neer en maak een foto van de natte plek. Ga bij sneeuw of ijs niet zelf het dak of de ladder op: een besneeuwde pan of een bevroren sport is spiegelglad. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "Stuifsneeuw: sneeuw die onder de pannen door waait", tekst: [
        `Bij fijne, droge sneeuw en harde wind waait de sneeuw door de kleine kieren tussen de pannen en onder de nok door naar binnen. Op zolder ligt dan een laagje sneeuw op de folie, de isolatie of de vloer. Zolang het vriest, merk je daar niets van. Gaat het dooien, dan smelt die sneeuw en lijkt het of je dak op veel plekken tegelijk lekt.`,
        `Je herkent het doordat het nat is op plekken waar het bij regen droog blijft, vaak onder de nok of aan de kant waar de wind op stond. Bij oudere daken zonder folie of houten beschot onder de pannen komt er meer sneeuw binnen dan bij een nieuwer dak.`,
        `Ga na een sneeuwbui met harde wind even op zolder kijken. Ligt er sneeuw, schep of veeg die dan weg voordat het gaat dooien. Dat scheelt een hoop water op je plafond.`,
      ] },
      { kop: "Smeltwater dat niet weg kan", tekst: [
        `Ligt er een dikke laag sneeuw op het dak en zit de goot vol of is hij bevroren, dan kan het smeltwater nergens heen. Het blijft onderaan het dak staan, achter een rand van ijs in of boven de goot, en loopt dan terug onder de onderste pannen door naar binnen. Binnen zie je dat als een natte plek bovenin de muur, net onder de dakrand, of op het plafond langs die muur.`,
        `Een goot die voor de winter leeg is en goed afloopt naar de regenpijp, scheelt hier veel. Wat ijs met de goot zelf doet, lees je in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: "Sneeuw op een plat dak", tekst: [
        `Op een plat dak blijft sneeuw lang liggen. Zit de afvoer vol blad of is hij bevroren, dan staat het smeltwater als een plas op het dak. Ligt die plas tegen een naad, de rand van een lichtkoepel of de aansluiting op de muur, dan zoekt het water daar een weg naar binnen. Zie ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a> en <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: "Of is het condens?", tekst: [
        `Is het buiten koud en droog, en zie je druppels aan de folie of aan de punten van spijkers onder het dak? Dan is het vaak condens: warme, vochtige lucht uit het huis die tegen het koude dak afkoelt. Dat lijkt op een lek, maar de oplossing is anders. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        `Klim niet op het dak om sneeuw weg te scheppen, en hak geen ijs uit de goot. Daarmee breek je zo een pan of trek je de goot uit de beugels. Giet ook geen heet water in een bevroren goot of regenpijp: verderop bevriest het meteen weer.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        `Ik kijk eerst of het water van stuifsneeuw komt, van smeltwater dat niet weg kan, of van een echt lek. Bij stuifsneeuw kijk ik vooral naar de nok. Liggen de nokvorsten los of sluiten ze niet meer goed aan, dan zet ik ze weer goed vast. Een ondervorst onder de nokvorsten houdt regen, wind en fijne sneeuw beter buiten. Meer daarover lees je bij <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Lekt het aan de onderkant van het dak, dan maak ik de goot leeg en kijk ik of hij goed afloopt. Zit er toch een kapotte pan tussen, dan vervang ik die, zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>. Bij een oud dak zonder folie onder de pannen kun je stuifsneeuw niet helemaal tegenhouden. Dat zeg ik je dan eerlijk.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een losse nokvorst of een paar pannen weer vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet ik een lek eerst opsporen en dan dichten, dan is het meestal ${lekPrijs}, inclusief materiaal. Je hoort de vaste prijs vooraf, voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Kan sneeuw door een dak heen komen?", a: "Ja. Fijne stuifsneeuw kan bij harde wind tussen de pannen en onder de nok door waaien. Op zolder ligt dan een laagje sneeuw, en als dat smelt, lijkt het of je dak lekt. Veeg of schep het weg voordat het gaat dooien." },
      { v: "Moet ik de sneeuw van mijn dak laten halen?", a: "Van een gewoon pannendak meestal niet, dat kan een laag sneeuw in de regel prima hebben. Op een plat dak met een verstopte afvoer, of op een licht dak van een veranda of schuur, kan veel natte sneeuw wel zwaar worden. Ga er zelf niet op staan. Twijfel je, stuur dan een foto via WhatsApp." },
      { v: "Valt lekkage door sneeuw onder mijn verzekering?", a: `Dat verschilt per polis. Schade door een plotselinge gebeurtenis valt soms onder je opstalverzekering, maar water dat binnenkomt door achterstallig onderhoud meestal niet. Maak foto's van de schade en kijk in je polis. Meer lees je in het artikel over daklekkage en je verzekering.` },
      { v: "Is een lek bij dooi spoed?", a: "Druppelt het binnen of wordt een plafond nat en bol, bel of app me dan meteen. Is het een beetje smeltwater van stuifsneeuw op zolder, dan kun je dat vaak zelf opruimen. Stuur een foto, dan zeg ik eerlijk wat het is." },
    ],
  },
  {
    slug: "nat-achter-knieschot",
    datum: "2026-10-31",
    titel: "Nat achter het knieschot?",
    h1: "Nat achter het knieschot op zolder: komt het van het dak?",
    metaTitle: "Nat achter knieschot op zolder: oorzaken | Spoed Dak Service",
    metaDescription:
      "Vocht, een natte vloer of schimmel achter het knieschot op zolder? Vaak komt het van de onderkant van het dak, soms van de goot of van condens. Zo zie je het.",
    intro:
      "Het knieschot is het lage wandje op zolder, op de plek waar het schuine dak bijna op de vloer komt. Daarachter zit een donkere hoek waar je zelden kijkt. Juist daar komt water van de onderkant van het dak het eerst binnen. Ruikt het er muf, is de vloer nat of zit er schimmel op het luikje, dan wil je weten waar het vandaan komt. Hieronder lees je waar het meestal zit en wat je eraan doet.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        `Haal spullen achter het knieschot weg, leg een handdoek neer of zet er een bak onder, en maak foto's van de natte plek, het hout erboven en de vloer. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "Waarom het juist daar nat wordt", tekst: [
        `Achter het knieschot ligt de onderkant van je dak: de onderste rijen pannen, vlak boven de goot. Water dat ergens hoger onder de pannen komt, loopt over de folie of het dakbeschot naar beneden en komt helemaal onderaan naar buiten. Daarom zit de natte plek achter het knieschot vaak een flink stuk lager dan het echte lek.`,
      ] },
      { kop: "Waar het meestal vandaan komt", tekst: [
        `De onderste rij pannen. Bij harde wind en regen waait het water daar onder de pannen door, zeker als een pan een stukje scheef ligt of als vogels er een nest onder hebben gemaakt.`,
        `De folie onder de pannen loopt niet tot in de goot. Bij oudere daken is die folie onderaan soms ingescheurd of te kort. Het water dat over de folie naar beneden loopt, druppelt dan vlak voor de goot naar binnen in plaats van erin.`,
        `De goot. Zit hij vol of hangt hij te laag, dan kan het water bij een flinke bui terug onder de pannen lopen of achter de goot langs. Lees ook <a href="/kennisbank/water-achter-dakgoot/">water loopt achter de dakgoot langs</a>.`,
        `Iets hoger op het dak: een dakraam, de schoorsteen of een kilgoot. Daar komt het water binnen, en het loopt naar beneden tot achter het knieschot. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a> en <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: "Of is het condens?", tekst: [
        `Achter het knieschot is het koud en komt weinig lucht. Vocht uit huis slaat daar makkelijk neer, vooral in de winter. Dan zie je geen druppel op één plek, maar een vochtige waas of zwarte stipjes schimmel op een groter stuk hout, ook als het dagen droog is geweest. Hoe je het verschil ziet, lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: "Zelf een beetje uitzoeken", tekst: [
        `Kijk na een flinke bui met een zaklamp achter het knieschot. Is het hout of de vloer alleen nat na regen, en vooral bij wind uit één richting, dan komt het meestal van buiten. Volg met de lamp het natte spoor over het hout naar boven, dan zie je vaak al uit welke richting het water komt. Maak er foto's van, daarmee kan ik gericht zoeken.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        `Ik begin binnen, bij het natte spoor, en kijk daarna buiten naar de onderste rijen pannen, de goot en wat er hoger op het dak zit. Ligt een pan scheef, dan leg ik hem terug. Is de folie onderaan kapot of te kort, dan zorg ik dat het water weer in de goot loopt. Ik maak alleen open wat nodig is. Zie <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een scheve pan terugleggen of een paar pannen vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet de onderkant van het dak over een groter stuk open om de folie te herstellen, dan is het meer werk. Je hoort de vaste prijs vooraf. Zie ook <a href="/kennisbank/wat-kost-daklekkage-repareren/">wat kost daklekkage repareren</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Wat is een knieschot?", a: "Het lage wandje op zolder, op de plek waar het schuine dak bijna op de vloer komt. Erachter zit een smalle, lage ruimte langs de onderkant van het dak. Vaak zit er een luikje in, zodat je erachter kunt kijken." },
      { v: "Waarom ruikt het muf achter mijn knieschot?", a: "Daar komt weinig lucht en is het koud. Is het hout of de vloer er vaak vochtig, door een lek of door condens, dan gaat het muf ruiken en kan er schimmel komen. Kijk na een bui met een zaklamp of er een nat spoor is. Is alles een beetje vochtig, ook op droge dagen, dan is het vaker condens." },
      { v: "Is een natte plek achter het knieschot spoed?", a: "Druppelt het, of staat er water op de vloer na een bui, bel of app me dan met een foto. Een oude, droge kring kan meestal wachten tot overdag op een werkdag. Twijfel je, stuur dan een foto via WhatsApp, dan zeg ik eerlijk of het vandaag moet." },
      { v: "Moet het knieschot eruit om het lek te vinden?", a: "Meestal niet. Via het luikje zie ik vaak al genoeg, en daarna kijk ik buiten op het dak. Zit er geen luikje in, dan maak ik in overleg een klein stukje open, alleen als het echt niet anders kan." },
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
      { kop: "Lekt het alleen bij een stortbui of bij harde wind?", tekst: [
        'Lekt je dakraam alleen bij een flinke stortbui, dan kan het water boven het raam vaak niet snel genoeg weg. Ligt er blad of mos tegen de bovenkant, dan stroomt het over het gootstuk heen naar binnen. Meer daarover lees je in <a href="/kennisbank/dak-lekt-bij-hevige-regen/">dak lekt bij een stortbui</a>.',
        'Lekt het vooral als het hard waait, dan blaast de wind de regen langs de zijkant van het raam onder het gootstuk of een pan door. Dan kijk ik vooral naar de zijkanten van het raam. Zie ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
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
      { v: "Er ligt blad boven mijn dakraam, is dat erg?", a: "Een beetje blad is niet meteen erg. Maar blad en mos boven het raam houden het water tegen, en bij een flinke bui loopt het dan over de aansluiting heen naar binnen. Laat het weghalen als je het ziet liggen. Hang niet zelf uit het open raam om erbij te komen, op een schuin dak is dat gevaarlijk." },
    ],
  },
  {
    slug: "lichtkoepel-lekt",
    datum: "2026-10-29",
    titel: "Lichtkoepel lekt?",
    h1: "Lichtkoepel lekt: langs de rand, door de koepel of is het condens?",
    metaTitle: "Lichtkoepel lekt: oorzaken en oplossing | Spoed Dak Service",
    metaDescription:
      "Druppelt het onder je lichtkoepel? Meestal zit het lek in de aansluiting met het platte dak, niet in de koepel zelf. Zo zie je waar het zit en wat je doet.",
    intro:
      "Een lichtkoepel staat op een opstand, een rand die boven het platte dak uitsteekt. Rond die opstand moet de dakbedekking netjes aansluiten. Druppelt het onder de koepel, dan denk je al snel dat de koepel zelf kapot is. Meestal zit het lek ernaast, in die aansluiting. Hieronder lees je hoe je ziet waar het zit en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer onder de koepel, leg er een doek in en haal spullen weg die nat kunnen worden. Ga niet zelf het platte dak op als het nat of glad is, en stap nooit op de koepel: die is niet gemaakt om op te staan. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "In de aansluiting tussen de dakbedekking en de opstand. Daar zit een hoek of naad die na jaren van zon, regen en vorst loslaat of scheurt. Het water loopt dan achter de dakbedekking langs de opstand naar beneden en druppelt precies onder de koepel naar binnen.",
        "In de koepel zelf. De afdichting tussen koepel en opstand droogt uit, een schroef of klem zit los, of er komt een scheur in de koepel. Een oude koepel van kunststof wordt na veel jaren in de zon bros en dof, en een scheur begint dan vaak bij een schroefgat.",
        'Of in het water eromheen. Blijft er na een bui water op het dak staan rond de koepel, dan staat de aansluiting steeds onder water en vindt het makkelijker een weg naar binnen. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
      ] },
      { kop: "Lek of condens?", tekst: [
        'Druppels aan de binnenkant van de koepel op een koude ochtend zijn vaak condens. Warme, vochtige lucht uit een badkamer of keuken slaat neer tegen de koude koepel, vooral bij een oude koepel met maar één laag. Dan druppelt het ook als het droog is. Komt het water alleen bij of na regen, dan is het een lek. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Smeer niet zelf een rand kit rond de koepel. Op een natte of vuile ondergrond hecht kit slecht, en kit op de verkeerde plek kan het water juist achter de dakbedekking vasthouden. Maak liever een foto van de natte plek binnen en, als je er veilig bij kunt, van de koepel vanuit een raam, en stuur die via WhatsApp.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk eerst waar het water echt binnenkomt: in de aansluiting, bij de koepel of op een plek verderop op het platte dak. Een losse of gescheurde aansluiting maak ik weer dicht. Is de koepel zelf gescheurd of bros, dan zeg ik eerlijk of herstellen nog zin heeft of dat er een nieuwe koepel op moet. Zie <a href="/diensten/platte-daken/">platte daken</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Een losse aansluiting dichtmaken is meestal een overzichtelijke klus. Moet er een nieuwe koepel op, dan is het meer werk. In beide gevallen hoor je vooraf wat het kost, voordat ik begin. Lekt het al langer en is het plafond eronder nat geworden, lees dan ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: platte daken", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Waarom lekt mijn lichtkoepel alleen bij harde regen?", a: "Bij een flinke bui komt het water op het platte dak hoger te staan, zeker als de afvoer een beetje vol zit. Dan bereikt het een naad of scheur in de aansluiting die bij gewone regen droog blijft. Kijk dus ook of de afvoer van je platte dak vrij is." },
      { v: "Kan ik op een lichtkoepel staan?", a: "Nee. Een lichtkoepel is niet gemaakt om op te staan of op te leunen, ook al voelt hij stevig. Blijf er altijd naast." },
      { v: "Moet een lekkende lichtkoepel er helemaal af?", a: "Dat hangt af van waar het lek zit. Is alleen de aansluiting met de dakbedekking los, dan kan de koepel blijven zitten. Zit er een scheur in de koepel zelf, of is hij zo bros dat hij kraakt als je hem aanraakt, dan heeft plakken weinig zin." },
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
      { v: "Wat houdt het in als de nok gerenoveerd wordt?", a: "Dan haal ik de vorsten eraf, haal de oude, brokkelige specie weg en leg de vorsten er opnieuw goed vast op, recht en dicht. Kapotte vorsten vervang ik door passende. Daarna liggen ze weer stevig op de nok. Je hoort vooraf de vaste prijs." },
      { v: "Kan ik met losse nokvorsten wachten tot het voorjaar?", a: "Liever niet. In de herfst en winter waait het het hardst, en dan is de kans het grootst dat een losse vorst eraf waait. Laat het daarom nakijken voordat de stormen komen." },
      { v: "Wat kost het om losse nokvorsten vast te laten zetten?", a: `Een paar losse vorsten vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet de hele nok opnieuw, dan is het meer werk. Je hoort altijd vooraf de vaste prijs.` },
      { v: "Wat is een ondervorst?", a: "Een strook onder de nokvorsten die de nok afsluit tegen regen en wind, maar wel lucht onder de pannen laat. Wordt een nok opnieuw gelegd, dan komt zo'n ondervorst vaak in de plaats van de oude specie." },
    ],
  },
  {
    slug: "dakpan-kapot-of-verschoven",
    datum: "2026-10-29",
    titel: "Dakpan kapot of verschoven?",
    h1: "Dakpan kapot of verschoven: zo zie je het en dit doe je eraan",
    metaTitle: "Dakpan kapot of verschoven: wat nu? | Spoed Dak Service",
    metaDescription:
      "Een gebroken of scheve dakpan zie je vaak al vanaf de straat. Zo herken je het, waarom één pan genoeg is voor een lek en wat vervangen kost.",
    intro:
      "Eén kapotte of verschoven dakpan lijkt weinig. Maar op die plek heeft de regen vrij spel, en het water zoekt daar langzaam een weg naar binnen. Vaak merk je het pas weken later, aan een natte plek op zolder. Hieronder lees je hoe je het ziet, wat je zelf doet en hoe ik het herstel.",
    secties: [
      { kop: "Zo zie je het vanaf de straat", tekst: [
        "Ga aan de overkant van de straat staan en kijk rustig over elk dakvlak. Een pan die scheef ligt of een stukje uitsteekt, breekt de rechte lijn van de rij. Een donkere streep of een gat in de rij betekent vaak dat een pan is gaan schuiven en je de panlat eronder ziet. En ligt er een stuk pan in de goot of in de tuin, dan is er boven iets gebroken.",
        "Met de zoom van je telefoon zie je meer dan je denkt. Maak een paar foto's van elk dakvlak, dan heb je meteen iets om door te sturen.",
      ] },
      { kop: "Of op zolder", tekst: [
        "Op zolder zie je soms een streepje daglicht tussen de pannen, of na regen een natte plek op het hout of de folie. Liggen de pannen bij jou zonder folie of beschot eronder, zoals bij veel oudere huizen, dan zie je een verschoven pan van binnen het snelst.",
      ] },
      { kop: "Waarom één pan al genoeg is", tekst: [
        'Onder de pannen ligt vaak folie of een houten beschot, en dat houdt even wat water tegen. Maar het is niet gemaakt om lang in de regen te liggen. Na een tijd loopt het water langs de panlatten naar beneden en komt het verderop binnen, meestal niet recht onder de kapotte pan. Hoe dat werkt, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
        'Een losse pan vangt ook wind. Bij de volgende storm kan hij wegwaaien en de pannen eromheen meetrekken. Ligt er na een storm meer los, lees dan <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.',
      ] },
      { kop: "Hoe het komt", tekst: [
        "Een pan breekt door vorst in een oude pan die water opneemt, door hagel of een vallende tak, of doordat er iemand op het dak heeft gestaan. Verschuiven gebeurt meestal door harde wind of door een panlat eronder die rot of los is.",
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Ga niet zelf het dak op om de pan terug te duwen. Een dakpan moet precies in de pannen ernaast en in de pan erboven haken. Ligt hij net niet goed, dan ligt hij na een paar dagen weer scheef. Plak een gebroken pan ook niet met kit of tape: dat laat na een winter weer los.",
      ] },
      { kop: "Een passende pan vinden", tekst: [
        "Een nieuwe pan moet in vorm en maat passen bij de pannen die er al liggen, anders sluit hij niet. Van veel modellen zijn nog passende pannen te krijgen. Is een oud model echt niet meer te vinden, dan is er vaak nog een oplossing: een pan van een plek die je niet ziet, zoals de achterkant van het dak, naar voren halen en daar een pan leggen die er het meest op lijkt. Dat bespreek ik dan eerst met je.",
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een paar losse of kapotte pannen vervangen valt meestal onder een kleine reparatie: ${kleinPrijs}. Is het water al een tijd naar binnen gelopen en zijn de panlatten of de folie eronder ook nat of rot, dan is het meer werk. Je hoort de vaste prijs vooraf.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakpannen vervangen", href: "/diensten/dakpannen-vervangen/" },
    faq: [
      { v: "Hoe lang kan ik wachten met een kapotte dakpan?", a: "Lekt het al binnen of ligt er een stuk dak open, wacht dan niet en bel of app me. Is het binnen nog droog, dan heb je vaak een paar dagen. Maar elke bui maakt het hout en de folie eronder natter, en bij harde wind kan de pan helemaal loskomen." },
      { v: "Kan ik een gebroken dakpan lijmen of kitten?", a: "Dat houdt zelden lang. Kit en tape laten na een paar maanden zon en vorst los, en een gelijmde pan breekt vaak naast de naad opnieuw. Een nieuwe pan blijft wel liggen." },
      { v: "Betaalt de verzekering een kapotte dakpan?", a: "Breekt of verschuift een pan door storm of hagel, dan valt de schade vaak onder je opstalverzekering. Is de pan door ouderdom of vorst gescheurd, dan meestal niet. Maak foto's en kijk in je polis. Meer lees je in het artikel over daklekkage en je verzekering." },
      { v: "Moet het hele dak vervangen worden als er een paar pannen kapot zijn?", a: "Nee. Een paar kapotte pannen vervang ik los. Pas als er op veel plekken pannen gebroken, poreus of afgebrokkeld zijn, is het slimmer om naar een groter stuk dak te kijken. Met de Dak-APK krijg je een fotorapport van je hele dak." },
    ],
  },
  {
    slug: "tak-of-boom-op-dak",
    datum: "2026-10-30",
    titel: "Tak of boom op je dak?",
    h1: "Tak of boom op je dak na een storm: wat doe je nu?",
    metaTitle: "Tak of boom op je dak na storm: wat nu? | Spoed Dak Service",
    metaDescription:
      "Viel er bij de storm een tak of boom op je dak? Wat je eerst doet, wie hem weghaalt, hoe het zit met je verzekering en wat ik daarna aan je dak herstel.",
    intro:
      "Bij een flinke storm breken er takken af, en soms waait er een hele boom om. Komt die op je dak terecht, dan is de schade vaak groter dan je vanaf de straat ziet. Een tak die op het dak valt, breekt pannen, kan de goot uit de haken trekken en schuift soms nog een stuk naar beneden. Hieronder lees je wat je eerst doet, wie wat weghaalt en hoe ik je dak daarna herstel.",
    secties: [
      { kop: "Eerst: je veiligheid", tekst: [
        `Blijf uit de kamer onder de plek waar de tak of boom ligt, zeker als het plafond doorbuigt of er water doorkomt. Ga niet zelf het dak of de ladder op, en trek niet aan een grote tak: die staat vaak onder spanning en kan wegschieten of meer pannen meetrekken.`,
        `Ligt de boom op een stroomkabel of op de weg, of kan hij elk moment verder zakken, bel dan 112. Lekt het nu al binnen, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen zelf kunt doen.`,
      ] },
      { kop: "Maak foto's voordat er iets weg gaat", tekst: [
        `Maak foto's van de tak of boom op je dak, van de plek waar hij is afgebroken of omgewaaid, en van de schade binnen. Doe dat voordat er iets wordt weggehaald. Zo laat je je verzekering zien dat de schade door de storm kwam.`,
      ] },
      { kop: "Wie haalt de boom weg?", tekst: [
        `Een grote tak of een hele boom moet eerst van je dak af voordat er iets hersteld kan worden. Dat is werk voor een boomverzorger, en als het gevaarlijk is soms voor de brandweer. Een losse tak in de goot of op de pannen haal ik weg als ik toch op het dak sta.`,
        `Is het de boom van de buren of van de gemeente, meld het dan ook bij hen. Bij een echte storm geldt het vaak als overmacht, en dan meld je de schade aan je dak bij je eigen opstalverzekering. Was de boom al dood of ziek, dan kan dat anders liggen. Meer lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: "Wat ik daarna nakijk", tekst: [
        `Een tak raakt vaak meer dan alleen de plek waar hij blijft liggen. Daarom kijk ik over het hele dakvlak: gebroken of gescheurde pannen, de panlatten eronder, de nok, het lood bij de schoorsteen en de goot met de beugels. Een gescheurde pan zie je vanaf de straat vaak niet. Hoe je zelf een kapotte pan herkent, lees je in <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
        `Liggen er zonnepanelen op je dak en is daar iets mee gebeurd, dan zeg ik dat eerlijk: daarvoor heb je je installateur nodig.`,
      ] },
      { kop: "Eerst dicht, daarna netjes", tekst: [
        `Is er een gat in je dak, dan dek ik het eerst af, zodat het binnen droog blijft. Daarna vervang ik de kapotte pannen en herstel ik wat er verder stuk is. Moet er iets besteld worden, dan kom ik daarvoor terug. Je hoort vooraf wat het kost. Wat je na een storm verder zelf kunt nakijken, lees je in <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.`,
      ] },
      { kop: "Hangt er een grote tak boven je dak?", tekst: [
        `Hangt er een zware tak over je dak, laat hem dan in de herfst of winter door een boomverzorger terugsnoeien, voordat de stormen komen. Dat scheelt ook veel blad in je goot. Hoe vaak je goot onder bomen leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: stormschade", href: "/diensten/stormschade/" },
    faq: [
      { v: "Mag ik zelf een tak van mijn dak halen?", a: "Een kleine tak die je vanuit een raam makkelijk kunt pakken, kan. Ga er niet voor op het dak of op een ladder staan. Trek ook niet aan een grote tak: die kan wegschieten of meer pannen meetrekken. Maak liever een foto en stuur die via WhatsApp." },
      { v: "Wie betaalt de schade als de boom van de buren op mijn dak valt?", a: "Bij een echte storm geldt dat vaak als overmacht. Dan meld je de schade aan je dak meestal bij je eigen opstalverzekering. Was de boom al dood of ziek en wisten de buren dat, dan kan het anders liggen. Maak foto's en meld het bij je verzekeraar, die zoekt verder uit wie wat betaalt." },
      { v: "Is een tak op mijn dak spoed?", a: "Is er een gat in je dak of komt er water binnen, dan wel: bel of app me met een foto. Ligt er alleen een kleine tak op de pannen en is het binnen droog, dan kan het vaak een dag wachten. Wacht niet tot de volgende bui." },
    ],
  },
  {
    slug: "dakpannen-vastzetten-tegen-storm",
    datum: "2026-10-31",
    titel: "Dakpannen vastzetten tegen storm",
    h1: "Dakpannen vastzetten tegen storm: zo blijven ze liggen",
    metaTitle: "Dakpannen vastzetten tegen storm | Spoed Dak Service",
    metaDescription:
      "Waaien er bij harde wind pannen van je dak? Welke pannen het eerst loskomen, wat een stormhaak doet en wanneer vastzetten zin heeft.",
    intro:
      "Bij een flinke storm waaien er vaak pannen van daken in de buurt. Meestal zijn het dezelfde pannen op dezelfde plekken, en vaak liggen ze alleen met hun eigen gewicht op het dak. Hieronder lees je welke pannen het eerst loskomen, wat een stormhaak doet en wanneer het zin heeft om je pannen vast te laten zetten.",
    secties: [
      { kop: "Zo ligt een dakpan op je dak", tekst: [
        "Een dakpan hangt met twee nokjes aan de achterkant over een houten lat, de panlat. Aan de zijkant haken de pannen in elkaar, en de pan erboven ligt er een stukje overheen. Bij gewone regen en wind is dat genoeg. Maar bij een harde windstoot trekt de wind aan de pannen, en een pan die nergens aan vastzit, kan dan omhoog wippen of wegwaaien.",
        "Bij nieuwere daken worden de pannen meestal met haken of klemmen vastgezet. Op veel oudere daken liggen ze nog los op de latten.",
      ] },
      { kop: "Welke pannen het eerst loskomen", tekst: [
        "Langs de zijkant van het dak, bij de gevel, waar de wind om de hoek trekt. De onderste rij boven de goot, omdat de wind daar onder de pannen kan komen. De rij vlak onder de nok. En de pannen rond een dakraam, een schoorsteen of zonnepanelen, waar de rij wordt onderbroken.",
        'Ligt er na een storm een pan scheef of mist er een, dan is het vaak op een van die plekken. Hoe je dat vanaf de straat ziet, lees je in <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.',
      ] },
      { kop: "Wat een stormhaak doet", tekst: [
        'Een stormhaak, ook wel panhaak genoemd, is een metalen haak die de pan aan de panlat vastzet. Hij zit grotendeels onder de pan erboven, dus vanaf de straat zie je er weinig van. De pan blijft liggen zoals hij lag, maar kan bij een windstoot niet meer omhoog wippen. Voor de nokvorsten bovenop het dak gaat dat anders. Lees daarover <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.',
      ] },
      { kop: "Wanneer vastzetten zin heeft", tekst: [
        "Waait er bij elke storm wel ergens een pan los, of hoor je bij harde wind getik en geratel boven je zolder, dan liggen er pannen los. Op een ouder dak zonder haken is het dan slim om in elk geval de zijkanten, de onderste rij en de pannen rond een dakraam vast te laten zetten. Daarvoor hoeft meestal niet het hele dak opnieuw gelegd te worden.",
        "Leg ik na een storm losse pannen terug, dan kijk ik meteen of er een haak bij moet. Gaat het om een groter stuk dak, dan bespreek ik eerst met je wat zin heeft, en je hoort vooraf wat het kost.",
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Ga niet zelf het dak op om pannen vast te zetten, en zeker niet als het waait. Plak een losse pan ook niet vast met kit of schuim. Dan zit hij muurvast, en bij een volgende reparatie breken de pannen eromheen als hij eruit moet. Een foto vanaf de straat zegt mij vaak al genoeg.",
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een paar losse pannen terugleggen en vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Moeten er langs alle randen of over een groot stuk dak haken bij, dan is het meer werk. Je hoort de vaste prijs vooraf. Zie ook <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Zitten er bij mijn dak al stormhaken?", a: "Dat zie je vanaf de straat bijna niet. Bij een vrij nieuw dak meestal wel, bij een ouder dak vaak niet of alleen op een paar plekken. Als ik voor een reparatie of inspectie op je dak sta, kijk ik het voor je na." },
      { v: "Kan een pan met een stormhaak toch wegwaaien?", a: "Bij een zware storm kan er toch iets loskomen, bijvoorbeeld als een pan al gescheurd was of de panlat eronder rot is. Maar pannen die vastzitten, blijven in de regel veel beter liggen dan losse." },
      { v: "Wanneer laat ik mijn pannen het beste vastzetten?", a: "Het liefst in de herfst, voordat de winterstormen komen. Ligt er nu al een pan scheef of mist er een, wacht dan niet en stuur me een foto via WhatsApp." },
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
      { kop: "Zonnepanelen op een plat dak", tekst: [
        'Op een plat dak staan panelen meestal op een frame dat met gewicht op zijn plek blijft, zonder dat er door het dak geschroefd wordt. Lekt het toch, dan zit het vaak op een plek waar het frame of het gewicht de dakbedekking heeft beschadigd, of bij de doorvoer van de kabel naar binnen. Ook blijft er tussen de panelen sneller blad liggen bij de afvoer, en dan blijft het water staan. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
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
      { v: "Wie betaalt de reparatie als het lek door de installatie komt?", a: "Komt het lek door het plaatsen van de panelen, dan is dat in de regel iets voor de installateur. Neem daarom eerst contact met hen op. Liggen de panelen er al jaren of komt de installateur niet, dan kijk ik waar het lek zit en hoor je vooraf de vaste prijs." },
      { v: "Lekt een plat dak met zonnepanelen sneller?", a: "Niet vanzelf. Maar onder en tussen de panelen zie je de dakbedekking slecht, en daar blijft sneller blad liggen. Laat daarom af en toe kijken of de afvoer vrij is en de dakbedekking onder de panelen nog goed is." },
    ],
  },
  {
    slug: "lekkage-bij-dakdoorvoer",
    datum: "2026-10-29",
    titel: "Lekt het langs een pijp door je dak?",
    h1: "Lekkage bij een ontluchtingspijp of dakdoorvoer: waar het zit en wat je doet",
    metaTitle: "Lekkage bij ontluchtingspijp of doorvoer | Spoed Dak Service",
    metaDescription:
      "Druppelt het langs een pijp die door je dak gaat? Vaak zit het lek in de kraag of de doorvoerpan rond de pijp, of is het condens. Zo zie je het verschil.",
    intro:
      "Op bijna elk dak steekt wel een pijp naar buiten: de ontluchting van het riool, de afvoer van de cv-ketel of de afzuiging van de badkamer. Rond zo'n pijp moet het dak netjes dicht aansluiten. Druppelt het op zolder langs de pijp, dan zit het lek meestal in die aansluiting en niet in de pijp zelf. Soms is het helemaal geen lek, maar condens. Hieronder lees je hoe je het verschil ziet en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: ['Zet een emmer onder de druppel en maak een foto van de pijp en de natte plek eromheen. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.'] },
      { kop: "Welke pijpen gaan er door je dak?", tekst: ["De ontluchtingspijp van het riool zie je op bijna elk huis: een grijze of zwarte pijp die een stukje boven de pannen uitsteekt. Daarnaast heb je vaak de afvoer van de cv-ketel, meestal een dikkere pijp met een kap erop, en soms de afzuiging van de badkamer of de ventilatie. Liggen er zonnepanelen op je dak, dan gaat ook de kabel ergens door het dak naar binnen."] },
      { kop: "Waar het meestal lekt", tekst: [
        "Op een pannendak gaat de pijp door een speciale pan: de doorvoerpan. Rond de pijp zit een rubberen of kunststof kraag, of een stuk lood. Na jaren in de zon droogt dat rubber uit en scheurt het, of het zakt een stukje omlaag langs de pijp. Dan loopt het water bij een bui langs de pijp naar binnen.",
        "Ook de doorvoerpan zelf kan gebarsten of verschoven zijn, bijvoorbeeld na een storm of als er iemand op het dak heeft gestaan. En soms heeft iemand de kier rond de pijp ooit met kit dichtgesmeerd. Dat houdt een paar jaar, en daarna laat de kit los.",
        'Op een plat dak zit rond de pijp een manchet die in de dakbedekking is opgenomen. Laat die aansluiting los of scheurt de dakbedekking rond de pijp, dan komt het water erachter. Blijft er water rond de pijp staan, lees dan ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
      ] },
      { kop: "Lek of condens in de pijp?", tekst: [
        "Een ontluchtingspijp of afzuigpijp die door een koude zolder loopt, wordt zelf ook koud. Warme, vochtige lucht slaat daar tegen neer, en die druppels lopen langs de pijp naar beneden. Dat lijkt op een lek, maar het komt van binnen.",
        'Het verschil: condens zie je ook op droge, koude dagen, vaak verspreid over de hele pijp. Een lek komt bij of vlak na regen, en de natte plek begint bovenaan, waar de pijp door het dak gaat. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Bij de afvoer van je cv-ketel", tekst: ["Druppelt het bij de afvoer van je cv-ketel, dan kan het ook uit de pijp zelf komen. Een ketel maakt bij het stoken waterdamp, en dat water hoort via de ketel weg te lopen. Lekt het binnen uit een verbinding van de pijp, dan is dat werk voor je installateur. De aansluiting van die pijp op het dak, de doorvoerpan en de kraag eromheen, maak ik wel weer dicht."] },
      { kop: "Hoe ik het aanpak", tekst: ['Ik kijk eerst of het water van buiten komt of van binnen. Is de kraag uitgedroogd of de doorvoerpan gebarsten, dan vervang ik die door een passende. Zit er lood rond de pijp, dan zet ik dat weer goed om de pijp en over de pannen. Op een plat dak maak ik de aansluiting rond de pijp opnieuw dicht. Alleen een rand kit erom vind ik geen goede oplossing, want die laat na een paar jaar weer los. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.'] },
      { kop: "Wat kost het?", tekst: ['Een nieuwe kraag of doorvoerpan is meestal een overzichtelijke klus. Is het water al een tijd langs de pijp naar binnen gelopen en zijn het hout of de isolatie eromheen nat, dan is het meer werk. Je hoort vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.'] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Waarom lekt het langs mijn ontluchtingspijp?", a: "Meestal zit het in de kraag rond de pijp. Rubber droogt na jaren in de zon uit en scheurt, of de kraag zakt omlaag. Ook een gebarsten doorvoerpan of oude kit kan de oorzaak zijn. En soms is het condens in de pijp en geen lek." },
      { v: "Hoe weet ik of het condens is of een lek?", a: "Kijk wanneer het nat wordt. Ook op droge, koude dagen en verspreid over de pijp wijst op condens. Alleen bij of na regen, en vooral bovenaan bij het dak, wijst op een lek. Twijfel je, stuur dan een foto via WhatsApp." },
      { v: "Kan ik de kier rond de pijp zelf dichtmaken?", a: "Met kit houd je het vaak maar kort droog. Zon en vorst laten het na een paar jaar loslaten, en dan lekt het op dezelfde plek. En op het dak werken is niet zonder risico. Laat liever kijken of de kraag of de doorvoerpan vervangen moet worden." },
      { v: "De afvoer van mijn cv-ketel lekt, bel ik jou of de installateur?", a: "Lekt het binnen uit een verbinding van de pijp, dan is dat werk voor de installateur. Komt het water van buiten langs de pijp naar binnen, waar die door het dak gaat, dan kijk ik ernaar. Stuur een foto, dan zeg ik eerlijk wie je het beste kunt bellen." },
    ],
  },
  {
    slug: "lood-op-dak",
    datum: "2026-10-30",
    titel: "Lood op je dak: lekt het?",
    h1: "Lood op je dak: zo zie je dat het lekt of op is",
    metaTitle: "Lood op je dak lekt: zo zie je het | Spoed Dak Service",
    metaDescription:
      "Lood zit rond je schoorsteen, onder het dakraam en langs de muur. Zo zie je dat het gescheurd, los of op is, en wanneer repareren genoeg is.",
    intro:
      "Op bijna elk pannendak ligt lood: rond de schoorsteen, onder een dakraam, langs een muur waar het dak tegenaan komt en soms in de kilgoot. Lood gaat vaak tientallen jaren mee. Maar als het gaat lekken, zie je dat binnen meestal pas laat, en vaak een eind van de plek waar het lood zit. Hieronder lees je waar het lood zit, hoe je ziet dat het op is en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        `Zet een emmer neer, haal spullen weg bij de natte plek en maak er een foto van. Ga niet zelf het dak op om naar het lood te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "Waar het lood op je dak zit", tekst: [
        `Lood ligt overal waar de pannen ophouden en er iets anders begint. Rond de schoorsteen liggen loodslabben die over de pannen heen vallen en met de bovenrand in de schoorsteen vastzitten. Onder een dakraam ligt een gootstuk dat het water om het raam heen leidt. Langs een muur of een hoger dak ligt een strook die het water over de pannen houdt. En in een kilgoot, waar twee dakvlakken samenkomen, ligt vaak een baan lood of zink waar al het water overheen loopt.`,
        `Per plek lees je meer in <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>, <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>, <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: "Zo zie je dat het lood op is", tekst: [
        `Kleine scheurtjes in de vouwen, vooral bij de hoeken van een schoorsteen of een dakraam. Daar wordt het lood bij warmte en kou steeds een beetje heen en weer gebogen, en na veel jaren breekt het.`,
        `Een strook die los van de muur of de schoorsteen staat, zodat je een kier ziet tussen het lood en de steen. Lood dat omhoog krult en niet meer plat op de pannen ligt. En bij heel oud lood kleine gaatjes of plekken waar het dun is geworden.`,
        `Met de zoom van je telefoon zie je vanaf de straat vaak al of het lood rond de schoorsteen nog strak tegen de steen zit.`,
      ] },
      { kop: "Lood of loodvervanger?", tekst: [
        `Op nieuwere daken ligt soms geen lood maar loodvervanger: een grijze strook van kunststof, vaak met een gaasje erin. Van beneden lijkt het op lood. Het is lichter, maar het kan na jaren in de zon hard worden en scheuren, vooral op de plekken waar het gevouwen is. Laat een strook loodvervanger los, dan krijg je dezelfde lekkage als bij oud lood.`,
      ] },
      { kop: "Waarom je het pas laat merkt", tekst: [
        `Water dat achter een losse loodslab komt, loopt eerst langs de schoorsteen of de muur naar beneden, onder de pannen door. Binnen zie je het vaak pas een eind verderop, als een vochtplek op de muur naast de schoorsteen of op het plafond eronder. Daarom kijk ik bij zo'n natte plek eerst naar het lood erboven. Zie ook <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a>.`,
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        `Smeer geen kit op een scheur in het lood of in de kier tussen het lood en de muur. Kit hecht slecht op oud lood en laat na een winter weer los. Ga ook niet zelf op het dak het lood terugduwen: oud lood scheurt dan nog verder. Maak liever een foto en stuur die via WhatsApp.`,
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        `Staat het lood op één plek los, dan is het vaak genoeg om de strook weer goed vast te zetten. Zit er een scheur in een hoek, dan vervang ik meestal alleen dat stuk. Is het lood rond de hele schoorsteen of langs de hele muur dun, gescheurd of los, dan is nieuw lood de betere keus, anders blijf je lappen. Ik zeg je eerlijk wat bij jouw dak past.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een strook die alleen los zit, is meestal snel weer vast. Moet er nieuw lood rond een hele schoorsteen of langs een hele muur, dan is het meer werk. In beide gevallen hoor je de vaste prijs vooraf, voordat ik begin. Is er al water binnengekomen en moet ik het lek eerst opsporen, dan is het meestal ${lekPrijs}, inclusief materiaal.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Hoe lang gaat lood op een dak mee?", a: "Vaak tientallen jaren. Hoe lang precies hangt af van hoe goed het destijds is aangebracht en hoeveel het bij warmte en kou moet werken. Bij een ouder huis is het slim om het lood rond de schoorsteen en het dakraam eens te laten nakijken, bijvoorbeeld met de Dak-APK." },
      { v: "Kun je gescheurd lood plakken?", a: "Plakken met tape of kit houdt het hooguit even droog. Op oud lood hecht het slecht, en na een winter zit er weer een kier. Een scheur in een hoek los ik liever op met een nieuw stuk lood." },
      { v: "Lekt het bij de schoorsteen altijd door het lood?", a: "Niet altijd. Het water kan ook door de stenen van de schoorsteen zelf komen, of van boven in de schoorsteen vallen als er geen kap op zit. Meer lees je in de artikelen over lekkage bij de schoorsteen en water in je open haard." },
    ],
  },
  {
    slug: "dakpannen-coaten-of-vervangen",
    verborgen: true,
    titel: "Coaten of vervangen?",
    h1: "Dakpannen coaten of vervangen? Zo maak je de juiste keuze",
    metaTitle: "Dakpannen coaten of vervangen? | Spoed Dak Service",
    metaDescription:
      "Dakpannen coaten of vervangen? Coaten is veel goedkoper en kan jaren schelen, mits je pannen nog goed zijn.",
    intro:
      "Een verweerd dak hoeft niet meteen vervangen te worden. Vaak kun je pannen die nog stevig zijn coaten, veel goedkoper, en je dak gaat er jaren mee verder. Maar coaten is niet altijd de juiste keuze. Hieronder het verschil.",
    secties: [
      { kop: "Wanneer coaten loont", tekst: [
        "Als je pannen nog stevig en heel zijn maar dof, vuil of vol mos, dan is reinigen + coaten ideaal. De coating beschermt tegen vocht, mos en uv, en kost een fractie van vervangen.",
        "Het is ook een mooi moment voor een gootcheck en het nakijken van lood en nokvorsten.",
      ] },
      { kop: "Wanneer vervangen verstandiger is", tekst: [
        "Zijn de pannen poreus, bros of op meerdere plekken kapot, dan houdt coaten geen stand. Dan ben je beter af met (gedeeltelijk) vervangen. Coaten op slechte pannen is zonde van het geld.",
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
    h1: "Hoe vaak moet je je dakgoot reinigen, en wat kost het?",
    metaTitle: "Hoe vaak moet je je dakgoot schoonmaken? | Spoed Dak Service",
    metaDescription:
      "Hoe vaak moet je je dakgoot reinigen? Meestal één keer per jaar in het najaar, vaker bij bomen in de buurt. Waarom het belangrijk is en wat het kost.",
    intro:
      "Volle goten lijken onschuldig, maar ze zijn de oorzaak van veel vochtschade: overlopend water, natte muren en op den duur lekkage. Hoe vaak moet je ze laten reinigen, en wat kost dat?",
    secties: [
      { kop: "Eén keer per jaar, vaker bij bomen", tekst: [
        "Voor de meeste huizen is één keer per jaar genoeg, het beste in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, dan is twee keer per jaar slimmer.",
        "Het najaar (augustus tot oktober) is de drukste én belangrijkste periode: blad én herfststormen zorgen dan voor de meeste verstoppingen.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "Een verstopte goot loopt over langs de gevel, trekt vocht in muren en fundering en kan binnen voor lekkage zorgen. Een kleine jaarlijkse onderhoudsbeurt voorkomt dure schade.",
      ] },
      { kop: "Wanneer vaker dan één keer per jaar", tekst: [
        "Staan er naaldbomen bij je huis, zoals dennen of sparren, dan valt er het hele jaar door iets in de goot. Naalden zijn klein en zakken door de meeste bladvangers heen, en na een tijd zitten ze in de regenpijp zelf. Dan is in het voorjaar nog een keer leegmaken slim.",
        'Heeft je huis een kilgoot of een bakgoot, dan komt daar meer water samen, en een volle goot loopt dan naar binnen in plaats van langs de gevel. Die wil je zeker voor de winter leeg hebben. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.',
        'Groeit er veel mos op je pannen, dan spoelt dat bij elke bui in brokjes de goot in. Dan zit de goot sneller vol, ook zonder bomen in de buurt. Lees ook <a href="/kennisbank/mos-op-dak-verwijderen/">mos op je dak</a>.',
      ] },
      { kop: "Zo controleer je het zelf vanaf de grond", tekst: [
        "Kijk na een droge week vanaf de overkant van de straat naar je goot. Steken er sprietjes gras of plantjes boven de rand uit, dan ligt er al een laag aarde in. Luister bij een flinke bui bij de regenpijp: hoor je nauwelijks water stromen terwijl het hard regent, dan komt het water er niet in. En zitten er steeds vogels op dezelfde plek in de goot, dan staat daar vaak een plas water.",
        "Ga voor een kijkje niet zelf op een ladder tegen de goot staan, zeker niet als het nat is. Een foto met de zoom van je telefoon is vaak al genoeg om te zien hoe vol hij zit.",
      ] },
      { kop: "Wat kost goten reinigen?", tekst: [
        `Bij een rijtjeswoning is het ${GOTEN_PRIJS}: beide goten leeg, uitloop naar de regenpijp vrijgemaakt, troep mee. Bij een groter of hoger huis hoor je vooraf de vaste prijs, nooit achteraf verrassingen.`,
        'Wil je precies weten wat erbij zit, waar de prijs van afhangt en hoe het zit met een prijs per meter? Lees dan <a href="/kennisbank/wat-kost-dakgoot-schoonmaken/">wat kost dakgoot schoonmaken</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Wanneer kan ik het beste laten reinigen?", a: "In het najaar, als het meeste blad gevallen is, dan heb je er het hele jaar profijt van en voorkom je winterlekkage." },
      { v: "Helpt een bladvanger of een gootrooster?", a: "Het scheelt. Een bladvanger op de uitloop houdt grof blad uit de regenpijp, en een rooster over de goot houdt het meeste blad tegen. Maar naalden, zaadjes en mos komen er nog steeds langs, en blad dat op het rooster blijft liggen moet er ook af. Eén keer per jaar laten nakijken blijft nodig." },
      { v: "Waarom loopt mijn goot over terwijl er weinig blad in ligt?", a: "Dan zit het vaak bij de uitloop naar de regenpijp: een prop naalden, mos of zelfs een tennisbal is genoeg om die dicht te zetten. Het kan ook zijn dat de goot niet meer goed naar de regenpijp afloopt, zodat het water in het midden blijft staan. Stuur een foto, dan kijk ik mee." },
      { v: "Kun je mijn goot ook in de winter nog leegmaken?", a: "Ja. Staan er bij jou bomen die hun blad laat verliezen, dan is december soms zelfs een beter moment dan oktober, want dan ligt alles erin. Alleen als het vriest of het dak glad is van ijs of sneeuw, wacht ik tot het weer veilig kan. Loopt je goot nu al over bij een bui, wacht dan niet tot het voorjaar." },
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
      { kop: "Goten schoonmaken bij jou in de buurt", tekst: [
        'Woon je in de regio Den Bosch? Per plaats lees je wat ik daar vaak in de goot tegenkom, van blad onder de bomen tot zand uit de duinen: in <a href="/werkgebied/den-bosch/goten-reinigen/">Den Bosch</a>, <a href="/werkgebied/oss/goten-reinigen/">Oss</a>, <a href="/werkgebied/vught/goten-reinigen/">Vught</a>, <a href="/werkgebied/oisterwijk/goten-reinigen/">Oisterwijk</a>, <a href="/werkgebied/boxtel/goten-reinigen/">Boxtel</a> en <a href="/werkgebied/drunen/goten-reinigen/">Drunen</a>. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.',
      ] },
      { kop: "Zelf doen of laten doen?", tekst: [
        "De lage goot van een schuur of garage kun je prima zelf leeghalen. Bij een goot op hoogte is een ladder op een natte of schuine ondergrond het grootste risico. Dan laat je het liever doen.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Wat kost dakgoot reinigen bij een rijtjeswoning?", a: `Bij een rijtjeswoning ${GOTEN_PRIJS}: beide goten leeg, uitloop naar de regenpijp vrijgemaakt en de troep gaat mee. Bij een groter of hoger huis hoor je de vaste prijs vooraf.` },
      { v: "Wanneer laat ik mijn goten het beste schoonmaken?", a: "In het najaar, als het meeste blad gevallen is. Dan loopt het water in de winter goed weg en voorkom je overlopende goten en vocht in je muren." },
      { v: "Kan het samen met andere klussen?", a: "Ja. Moet er ook iets aan je dak gebeuren of wil je je zonnepanelen laten reinigen, dan kan dat vaak in dezelfde keer. Je hoort vooraf wat het samen kost." },
      { v: "Mijn goot loopt door naar die van de buren. Kunnen we het samen laten doen?", a: "Ja, dat is vaak handig. Bij een rij huizen loopt de goot meestal gewoon door, en het water van een paar huizen gaat dan naar dezelfde uitloop. Zit die bij de buren dicht, dan loopt de goot bij jou over. Doen jullie het samen, dan maak ik het hele stuk goot in één keer leeg en kijk ik of het water overal weer naar de regenpijp kan. Ieder hoort vooraf wat het kost." },
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
      "De eerste vraag bij een lek is bijna altijd: wat gaat me dit kosten? Eerlijk antwoord: dat hangt af van de oorzaak en hoe lang het al speelt. Hieronder zet ik de prijzen op een rij zoals ik ze ook aan de telefoon zou noemen: vaste prijs vooraf, geen verrassingen achteraf.",
    secties: [
      { kop: `Een gerichte reparatie: ${lekPrijs}`, tekst: [
        `De meeste lekkages hebben één duidelijke oorzaak: een gebroken pan, losgelaten lood of een versleten naad. Zo'n gerichte reparatie kost meestal ${lekPrijs}, inclusief materiaal. Je hoort het bedrag voordat ik begin.`,
        "Bij spoed buiten kantooruren komt daar een toeslag bij. Ik zeg je eerlijk of het echt niet tot de volgende dag kan wachten.",
      ] },
      { kop: "Waar de prijs van afhangt", tekst: [
        "Drie dingen bepalen de prijs: de oorzaak (een losse pan is zo gepiept, een rotte dakvoet is meer werk), de bereikbaarheid (hoogte, steiger of ladder) en het daktype. Een pannendak repareer je anders dan een plat dak met bitumen of EPDM.",
        "Je ziet online soms prijzen per vierkante meter. Voor een gericht klusje reken ik liever een eerlijke vaste prijs voor de hele reparatie dan een bedrag per meter.",
      ] },
      { kop: "En het opsporen zelf?", tekst: [
        "De natte plek zit zelden onder het echte lek, dus opsporen hoort erbij. Een controle van buiten en op zolder zit vaak gewoon bij de reparatie in. Is er toch gericht meetwerk nodig, zoals een vocht- of rookmeting, dan hoor je vooraf wat dat kost. Meestal vind ik het lek zonder dat extra gereedschap.",
      ] },
      { kop: "Waarom uitstellen juist duur is", tekst: [
        "Dit is de belangrijkste: een klein lek wordt groter als je wacht. Na een paar maanden zijn vaak ook het hout, de isolatie en je plafond nat, en dat herstellen kost veel meer dan het lek zelf. Een klein lek snel laten maken is bijna altijd goedkoper dan wachten.",
        "Daarom pak ik een lek het liefst snel aan: eerst de schade stoppen, dan netjes herstellen.",
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Krijg ik de prijs vooraf te horen?", a: "Altijd. Ik kijk wat de oorzaak is en noem een vaste prijs voordat ik begin, zonder verrassingen achteraf." },
      { v: "Hoe wordt het lek gevonden?", a: "Meestal met een gerichte controle van buiten en op zolder, zonder sloopwerk. Lees daarover in het artikel ‘Daklekkage opsporen’." },
      { v: "Vergoedt mijn verzekering de reparatie?", a: "Bij schade door storm of hagel vaak wel, via je opstalverzekering. Komt het lek door slijtage, dan meestal niet. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving erbij, zodat je het kunt indienen. Meer lees je in het artikel over daklekkage en je verzekering." },
      { v: "Wat kost een lek in een plat dak repareren?", a: `Een gericht lek in een plat dak, bijvoorbeeld bij een naad, de rand of de afvoer, kost meestal net zoveel als een ander lek: ${lekPrijs}, inclusief materiaal. Is de dakbedekking op meer plekken versleten en moet er een groter stuk opnieuw, dan hoor je vooraf een vaste prijs. Meer daarover lees je in het artikel over plat dak repareren of vervangen.` },
      { v: "Hoe lang duurt het om een daklekkage te repareren?", a: "Een gerichte reparatie, zoals een pan vervangen, een stuk lood vastzetten of een naad in een plat dak dichtmaken, is vaak binnen een paar uur klaar. Moet er materiaal besteld worden, of regent het te hard om netjes te werken, dan maak ik het lek eerst tijdelijk dicht en kom ik later terug voor de nette reparatie. Voordat ik begin, zeg ik je hoe lang ik denk bezig te zijn en wat het kost." },
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
      { v: "Valt daklekkage onder mijn brandverzekering?", a: "Wat veel mensen de brandverzekering noemen, is meestal de opstalverzekering van je huis. Die dekt niet alleen brand, maar vaak ook schade door storm of een plotseling lek. Of jouw lek eronder valt, hangt af van de oorzaak en van je polis. Lekkage door slijtage of achterstallig onderhoud valt er meestal niet onder." },
      { v: "Wordt schade aan mijn muur door een lekkende dakgoot vergoed?", a: "Loopt een goot over of lekt hij omdat hij al lang vol zit of oud is, dan zien veel verzekeraars dat als onderhoud, en dan wordt de schade vaak niet vergoed. Scheurt de goot bij een storm los of raakt hij plotseling lek, dan ligt dat anders. Maak foto's van de goot en van de natte muur, en kijk in je polisvoorwaarden." },
      { v: "Het lek zit bij de buren, maar de schade is bij mij. Wie betaalt?", a: `Dat hangt af van de oorzaak en van de polissen, maar meestal gaat het zo. De reparatie van het dak is de zaak van wie dat stuk dak bezit, dus van je buren. De schade bij jou binnen meld je bij je eigen verzekeraar, en die zoekt verder uit wie wat betaalt. Maak foto's van de schade bij jou en, als het kan, van het dak vanaf de straat. En praat even met je buren, zodat het lek snel gemaakt wordt.` },
    ],
  },
  {
    slug: "verstopte-regenpijp-lekkende-dakgoot",
    titel: "Verstopte regenpijp?",
    h1: "Verstopte regenpijp of lekkende dakgoot: oorzaken en oplossing",
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
      { v: "Kan ik een verstopte regenpijp zelf ontstoppen?", a: "Soms. Zit er alleen wat blad bovenin de uitloop van een lage goot, dan kun je dat zelf weghalen. Maar op hoogte werken is niet zonder risico, en zit de verstopping dieper in de pijp, dan krijg je hem er zo meestal niet uit. Ik maak de goot en de uitloop naar de regenpijp veilig leeg en kijk of het water weer wegloopt. Zit het dieper, dan zeg ik eerlijk wat er nodig is." },
      { v: "Hoe voorkom ik dat het terugkomt?", a: "Eén keer per jaar de goot laten reinigen (najaar) en eventueel bladroosters plaatsen. Staan er bomen vlakbij, dan twee keer per jaar." },
      { v: "Mijn regenpijp lekt bij de verbindingen. Hoe kan dat?", a: "Vaak zit de pijp verderop dicht, bijvoorbeeld in een bocht, bij een bladvanger of op de plek waar hij de grond in gaat. Het water staat dan in de pijp en komt bij elke verbinding naar buiten. Soms zit een stuk pijp verkeerd om, met het wijde eind naar beneden in plaats van naar boven, en dan loopt het water bij elke bui bij die naad naar buiten. Kijk tijdens een bui of het water ook onderaan uit de pijp komt, en stuur me een foto van de plek waar het lekt." },
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
      { kop: "Tot het gemaakt is: wat je zelf kunt doen", tekst: [
        `Druppelt de goot buiten op één plek, dan is het meestal geen ramp als het een paar dagen duurt. Valt de druppel boven je stoep, je terras of je voordeur, zet er dan een emmer of een bak onder. Zo loopt er niemand door een plas, en bij vorst ligt daar anders zo een plek ijs.`,
        `Maak tijdens een bui een foto of een filmpje van de plek waar het druppelt, het liefst vanaf de straat of uit een raam. Dan zie ik of het bij een naad, een hoek of de uitloop zit, en neem ik meteen het goede materiaal mee.`,
        `Ga niet met een ladder bij de goot staan om het zelf dicht te maken, zeker niet als het nat of koud is, en trek niet aan een goot die los hangt. Komt het water binnen, bovenin de muur of langs een kozijn, dan is het wel spoed. Kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
      ] },
      { kop: "In de winter: ijs in de goot", tekst: [
        "Blijft er water in de goot staan en gaat het vriezen, dan zet het ijs uit. Dat drukt naden en hoeken open, vooral bij zinken goten en bij een goot die een beetje doorhangt. Je merkt het pas als het dooit: dan druppelt het ineens op een plek die eerst droog bleef. Een goot die voor de winter leeg is en goed op afschot hangt, heeft daar veel minder last van.",
      ] },
      { kop: "Waarom je het niet laat zitten", tekst: [
        "Een lekkende goot lijkt klein, maar het water loopt elke bui langs dezelfde plek van je gevel. Dat geeft natte muren, groene aanslag en op den duur schade aan het metselwerk of de houten boeidelen.",
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        'Een lekkende naad, een losse beugel of een lekkende uitloop is vaak goed te herstellen. Is de goot op meerdere plekken lek of zit er roest in, dan is vervangen op termijn meestal goedkoper dan blijven repareren. Ik zeg eerlijk wat in jouw geval slim is. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.',
      ] },
      { kop: "Lekkende dakgoot en je verzekering", tekst: [
        'Een goot die door ouderdom lek is geraakt, valt bij de meeste verzekeringen niet onder de dekking. Voor de schade aan je gevel of binnen ligt dat soms anders, maar dat verschilt per polis. Waait de goot los bij een storm, dan is het vaak wel plotselinge schade. Meer hierover lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
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
      { v: "Wat kost het om een lekkende dakgoot te repareren?", a: "Dat hangt af van wat er lek is: een naad, een hoek, de uitloop of een losse beugel. Ik kijk eerst wat er echt mis is en je hoort de vaste prijs vooraf, voordat ik begin." },
      { v: "Kan een dakgoot kapotvriezen?", a: "Een goot waar water in blijft staan, kan bij vorst schade krijgen. Het ijs zet uit en drukt naden en hoeken open. Daarom is het slim om je goot voor de winter leeg te laten maken." },
      { v: "Is lekkage aan je dakgoot spoed?", a: "Meestal niet, maar laat het niet de hele winter zitten. Druppelt de goot buiten op één plek, dan kan het vaak een paar dagen wachten. Komt het water binnen, bovenin de muur of langs een kozijn, of hangt de goot los na een storm, dan wel: bel of app me met een foto. Twijfel je, stuur dan een foto via WhatsApp, dan zeg ik eerlijk of het vandaag moet." },
    ],
  },
  {
    slug: "water-achter-dakgoot",
    datum: "2026-10-30",
    titel: "Water achter je dakgoot?",
    h1: "Water loopt achter de dakgoot langs de muur: hoe kan dat?",
    metaTitle: "Water achter de dakgoot langs de muur | Spoed Dak Service",
    metaDescription:
      "Loopt het water achter je dakgoot langs de gevel, terwijl de voorkant droog blijft? Vaak hangt de goot te laag of loopt het water onder de pannen mis.",
    intro:
      "Een goot die overloopt, zie je aan de voorkant. Maar soms blijft de voorkant droog en loopt het water achter de goot langs de muur naar beneden. Dan zit het meestal niet in de goot zelf, maar in hoe het water van het dak in de goot komt. Hieronder lees je hoe je dat herkent en wat eraan te doen is.",
    secties: [
      { kop: "Zo herken je het", tekst: [
        "Na een bui zie je een natte of groene streep op de gevel, direct onder de goot, terwijl de voorkant van de goot droog is. Soms druppelt het tussen de goot en de muur door op de vensterbank of de stoep. Binnen zie je het soms als een natte plek bovenin de muur of boven een kozijn op de bovenverdieping.",
        'Komt het water over de voorkant van de goot, dan zit de goot of de uitloop meestal vol. Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>. Druppelt het op één vaste plek uit de goot zelf, kijk dan bij <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.',
      ] },
      { kop: "Waar het meestal door komt", tekst: [
        "De goot hangt te laag. Na veel jaren zakt een goot een stukje, of hij is ooit te laag opgehangen. De onderste pannen steken dan niet ver genoeg boven de goot uit, en het water druipt van de pan achter de goot langs in plaats van erin.",
        "Het water van onder de pannen komt niet in de goot. Onder de pannen ligt vaak een folie die regen en stuifwater opvangt, en die hoort onderaan in de goot uit te komen. Stopt de folie te vroeg of is hij aan de onderkant vergaan, dan loopt dat water achter de goot langs de muur. Je merkt het vooral bij harde wind en regen.",
        "De goot hangt scheef. Hangt hij naar achteren of staan de beugels krom, dan loopt een volle goot over de achterrand naar de muur, in plaats van over de voorkant.",
      ] },
      { kop: "Bij een bakgoot is het anders", tekst: [
        'Ligt je goot niet aan de voorkant van het dak, maar als een bak in de dakrand achter een houten lijst? Dan komt het water bij een lek vaak binnen en niet langs de buitenmuur. Lees dan <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.',
      ] },
      { kop: "Waarom je het niet laat zitten", tekst: [
        "Water dat bij elke bui achter de goot langs loopt, maakt de bovenkant van je gevel steeds nat. Daar komt groene aanslag op, en bij vorst kan de buitenkant van de stenen gaan afbrokkelen. Ook het hout aan de dakrand, zoals het boeiboord en de gootklossen, wordt steeds nat en gaat op den duur rotten.",
      ] },
      { kop: "Hoe ik het oplos", tekst: [
        'Ik kijk eerst hoe de goot hangt en waar het water precies achter de goot komt. Hangt hij te laag of scheef, dan zet ik hem weer op de goede hoogte en op afschot naar de regenpijp. Komt het water van onder de pannen, dan zorg ik dat het van de folie weer in de goot loopt, bijvoorbeeld met een strook die het water de goot in leidt. Is het hout achter de goot al zacht, dan zeg ik dat eerlijk voordat ik verder ga. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er nodig is: een goot die alleen wat hoger moet, is minder werk dan een stuk goot dat vervangen moet. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Waarom loopt er water achter mijn dakgoot langs de muur?", a: "Meestal omdat de goot te laag of scheef hangt, zodat het water van de onderste pannen achter de goot langs druipt. Het kan ook water zijn dat over de folie onder de pannen naar beneden loopt en niet in de goot uitkomt. Een lek in de goot zelf zie je meestal als een druppel op één vaste plek." },
      { v: "Hoe zie ik of mijn goot te laag hangt?", a: "Kijk vanaf de overkant van de straat of vanuit een raam naar de onderste rij pannen. Die hoort een stukje boven de goot uit te steken, zodat het water er vanzelf in valt. Eindigt de pan al voor de goot, of zit er een kier tussen pan en goot, dan hangt de goot waarschijnlijk te laag. Maak liever een foto vanaf de grond dan dat je zelf de ladder op gaat." },
      { v: "Is water achter de goot een daklek?", a: "Niet echt, maar het kan er wel op lijken. Komt het binnen bovenin de muur of boven een kozijn, dan denken veel mensen aan een lek in het dak. Vaak is het water dat achter de goot langs de gevel loopt en zo de muur in trekt. Stuur een foto van de natte plek binnen en van de goot buiten, dan zie ik vaak al waar het zit." },
      { v: "Kan ik het zelf oplossen met een stukje kit?", a: "Meestal niet. Het water loopt niet door een gat, maar langs de verkeerde kant van de goot. Kit tussen goot en muur houdt het water dan vaak juist vast. De goot moet goed hangen, en het water van het dak moet er weer in komen." },
    ],
  },
  {
    slug: "bakgoot-lekt",
    datum: "2026-10-23",
    titel: "Bakgoot lekt?",
    h1: "Bakgoot lekt: water binnen langs de gevel of het plafond",
    metaTitle: "Bakgoot lekt: water binnen bij de gevel | Spoed Dak Service",
    metaDescription:
      "Een bakgoot ligt in de rand van het dak. Lekt hij, dan komt het water vaak binnen: bovenin de buitenmuur of langs het plafond. Zo herken je het en dit doe je eraan.",
    intro:
      "Bij veel oudere huizen hangt de goot niet aan de voorkant van het dak, maar ligt hij als een bak in de dakrand, achter een houten lijst. Dat heet een bakgoot. Lekt een gewone goot, dan druppelt het buiten. Lekt een bakgoot, dan loopt het water vaak naar binnen. Hieronder lees je hoe je dat herkent en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg bij de natte muur en maak een foto van de plek. Ga niet zelf het dak op en ga niet met een ladder bij de goot staan als het nat is. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Zo herken je een lekkende bakgoot", tekst: [
        "Een natte plek bovenin de buitenmuur, vlak onder het plafond, of een vochtrand langs het plafond aan de straatkant of de tuinkant. Bladderende verf of zacht hout aan de gootlijst buiten. Water dat na een bui achter de goot langs de gevel naar beneden loopt, terwijl de voorkant van de goot droog blijft.",
        "Meestal zie je het voor het eerst na een flinke bui, of als de goot een tijd vol blad heeft gelegen.",
      ] },
      { kop: "Waar een bakgoot meestal lekt", tekst: [
        "Bij de naden in het zink, en in de hoeken waar twee stukken samenkomen. Bij de uitloop naar de regenpijp, die bij een bakgoot vaak door de bodem van de goot gaat. En op plekken waar het zink na veel jaren dun is geworden, vaak daar waar blad en water lang bleven liggen.",
        "Zink zet uit als het warm is en krimpt als het koud is. Kan het dat niet goed, dan trekken de naden na verloop van tijd open.",
      ] },
      { kop: "Vol of echt lek?", tekst: [
        'Soms is er niets lek en zitten de bakgoot of de uitloop gewoon vol blad. Dan komt het water hoger te staan dan de rand van het zink en loopt het zo naar binnen. Dan is de goot leegmaken genoeg, zie <a href="/diensten/goten-reinigen/">goten reinigen</a>. Druppelt je goot buiten op één plek, lees dan <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.',
      ] },
      { kop: "Waarom je er niet mee wacht", tekst: [
        "Een bakgoot ligt op hout: de gootbak en de balken eronder. Loopt daar bij elke bui water langs, dan gaat dat hout rotten, en dat zie je pas als het al ver is. Ook de muur en het plafond eronder worden nat. Hoe eerder het lek dicht is, hoe kleiner de klus meestal blijft.",
      ] },
      { kop: "Repareren of opnieuw bekleden?", tekst: [
        'Een lekke naad, een losse hoek of een lekkende uitloop is vaak goed te herstellen. Is het zink op veel plekken dun of zit het hout eronder al zacht, dan is het slimmer om de bakgoot in één keer opnieuw te bekleden. Ik kijk eerst wat er echt aan de hand is en zeg eerlijk wat in jouw geval verstandig is. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.',
      ] },
      { kop: "Bakgoten in de regio Den Bosch", tekst: [
        `Bakgoten kom je in de regio Den Bosch vooral tegen bij huizen van voor de oorlog, zoals in de Muntel en de Vliert in Den Bosch, en bij de oudere villa's en herenhuizen in Vught. In Oisterwijk ligt de goot bij oude villa's vaak in een houten gootlijst. Wat ik daar tegenkom en hoe ik het aanpak, lees je bij dakgoot repareren in <a href="/werkgebied/den-bosch/dakgoot-vervangen/">Den Bosch</a>, <a href="/werkgebied/vught/dakgoot-vervangen/">Vught</a> en <a href="/werkgebied/oisterwijk/dakgoot-vervangen/">Oisterwijk</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er lek is, hoe lang de goot is en of het hout eronder nog goed is. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Wat is een bakgoot?", a: "Een goot die niet aan de voorkant van het dak hangt, maar in de rand van het dak ligt. Meestal is het een houten bak met zink erin en een houten lijst aan de voorkant. Je ziet ze vaak bij huizen van voor de oorlog en bij oudere rijtjes." },
      { v: "Waarom lekt een bakgoot naar binnen?", a: "Omdat hij op en in het dak ligt. Komt er water door het zink, dan loopt het niet naar buiten, maar in het hout en de muur eronder. Daarom zie je een lekkende bakgoot vaak het eerst binnen." },
      { v: "Kan ik een lekkende bakgoot zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar op nat of vuil zink hecht het slecht en na een winter lekt het vaak weer. En aan de dakrand werken is niet zonder risico. Laat liever kijken waar het echt lekt." },
      { v: "Kun je snel komen als het binnen nat wordt?", a: "Bel of WhatsApp me met een foto van de natte plek binnen en van de goot buiten. Dan hoor je wanneer ik kan komen." },
      { v: "Kan een bakgoot vervangen worden door een gewone hangende goot?", a: "Soms wel, maar het verandert de voorkant van je huis. Bij een monument of in een beschermd stadsgezicht, zoals in de binnenstad van Den Bosch of in vesting Heusden, mag dat vaak niet zomaar. Meestal is het slimmer om de bakgoot te herstellen of opnieuw te bekleden. Ik zeg eerlijk wat bij jouw huis kan." },
      { v: "Hoe vaak moet een bakgoot leeg?", a: "Minstens één keer per jaar, het liefst in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, dan vaker. Bij een bakgoot is dat extra belangrijk, want loopt hij over, dan komt het water vaak binnen." },
    ],
  },
  {
    slug: "hoe-lang-gaat-een-dakgoot-mee",
    datum: "2026-10-31",
    titel: "Hoe lang gaat een dakgoot mee?",
    h1: "Hoe lang gaat een dakgoot mee, en wanneer is vervangen slimmer?",
    metaTitle: "Hoe lang gaat een dakgoot mee? | Spoed Dak Service",
    metaDescription: `Hoe lang gaat een zinken of kunststof dakgoot mee? Zo zie je dat je goot op raakt, wanneer repareren nog loont en wanneer vervangen slimmer is.`,
    intro: `Lekt je goot voor de tweede of derde keer, dan vraag je je af of hij er niet gewoon uit moet. Dat hangt af van het materiaal, hoe oud hij is en hoe hij erbij hangt. Hieronder lees je hoe lang een goot meestal meegaat, hoe je ziet dat hij op raakt en wanneer repareren nog loont.`,
    secties: [
      { kop: "Zink, kunststof of een bakgoot", tekst: [
        `De meeste goten in de regio Den Bosch zijn van zink of van kunststof. Zink zie je vooral bij oudere huizen en villa's, vaak ook als bakgoot in de rand van het dak. Kunststof hangt vooral aan huizen vanaf de jaren '70, en bij veel oudere huizen is de zinken goot ooit vervangen door kunststof.`,
      ] },
      { kop: "Hoe lang gaat een goot mee?", tekst: [
        `Een vaste leeftijd is er niet. Een zinken goot die goed op afschot hangt en niet steeds vol blad ligt, gaat vaak tientallen jaren mee. Kunststof gaat in de regel minder lang mee: door zon en vorst wordt het na veel jaren hard en bros. Bij kunststof goten van een jaar of veertig oud zie ik dat vaak.`,
        `Hoe lang het bij jou duurt, hangt vooral af van het onderhoud. Een goot waar elk jaar weken water en blad in blijft staan, slijt op die plek veel sneller dan de rest.`,
      ] },
      { kop: "Zo zie je dat een zinken goot op raakt", tekst: [
        `Witte of grijze vlekken en kleine putjes in de bodem, vaak op de plek waar het blad altijd blijft liggen. Naden die steeds opnieuw gaan lekken, ook als ze net hersteld zijn. En groene of donkere strepen op de gevel onder de goot, omdat er al een tijd water doorheen druppelt.`,
      ] },
      { kop: "Zo zie je dat een kunststof goot op raakt", tekst: [
        `Het kunststof is verkleurd en dof en voelt hard aan. Er komen haarscheurtjes bij de hoeken en de verbindingen. Hoekstukken of eindstukken schieten los, vaak na een vorstperiode. En de goot gaat tussen de beugels doorhangen, zodat er na een bui water in blijft staan.`,
      ] },
      { kop: "Wanneer repareren nog loont", tekst: [
        `Lekt de goot op één naad, één hoek of bij de uitloop naar de regenpijp, en is de rest van het materiaal nog goed? Dan is repareren meestal de slimste keus. Hangt hij door omdat een beugel los of krom is, dan hang ik hem weer op afschot. Dat is minder werk dan een nieuwe goot, en je kunt er vaak nog jaren mee vooruit.`,
      ] },
      { kop: "Wanneer vervangen slimmer is", tekst: [
        `Lekt de goot op meer plekken tegelijk, is het zink over een groot stuk dun, of breekt het kunststof als je erop drukt? Dan houdt een reparatie het meestal niet lang, en betaal je over een jaar weer. Dan zeg ik eerlijk dat een nieuwe goot slimmer is.`,
        `Is het hout achter of onder de goot zacht geworden, dan moet dat eerst hersteld worden. Anders houdt ook een nieuwe goot het niet lang.`,
      ] },
      { kop: "Zink of kunststof als hij toch vervangen moet?", tekst: [
        `Zink gaat langer mee en past bij een ouder huis. Kunststof is voordeliger en vraagt weinig onderhoud. Bij een monument of in een beschermd stadsgezicht, zoals de binnenstad van Den Bosch of vesting Heusden, mag je niet zomaar een ander materiaal kiezen. Vraag dat eerst na bij de gemeente.`,
      ] },
      { kop: "Dakgoot repareren of vervangen bij jou in de buurt", tekst: [
        `Woon je in de regio Den Bosch? Wat ik per plaats aan goten tegenkom, lees je bij dakgoot repareren in <a href="/werkgebied/den-bosch/dakgoot-vervangen/">Den Bosch</a>, <a href="/werkgebied/vught/dakgoot-vervangen/">Vught</a>, <a href="/werkgebied/oss/dakgoot-vervangen/">Oss</a>, <a href="/werkgebied/veghel/dakgoot-vervangen/">Veghel</a>, <a href="/werkgebied/uden/dakgoot-vervangen/">Uden</a>, <a href="/werkgebied/boxtel/dakgoot-vervangen/">Boxtel</a>, <a href="/werkgebied/sint-michielsgestel/dakgoot-vervangen/">Sint-Michielsgestel</a>, <a href="/werkgebied/oisterwijk/dakgoot-vervangen/">Oisterwijk</a> en <a href="/werkgebied/waalwijk/dakgoot-vervangen/">Waalwijk</a>. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Dat hangt af van de lengte van de goot, het materiaal en hoe goed ik erbij kan. Eén naad of hoek herstellen is iets heel anders dan een nieuwe goot over de hele gevel. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Hoe lang gaat een zinken dakgoot mee?", a: `Bij goed onderhoud vaak tientallen jaren. Hoe lang precies, hangt vooral af van of er water en blad in blijft staan. Op die plekken wordt het zink het eerst dun.` },
      { v: "Kan een oude zinken goot nog gerepareerd worden?", a: `Vaak wel, als het lek op één naad, één hoek of bij de uitloop zit en de rest van het zink nog stevig is. Is het zink over een groot stuk dun of zitten er op veel plekken gaatjes in, dan zeg ik eerlijk dat vervangen slimmer is.` },
      { v: "Waarom wordt mijn kunststof goot bros?", a: `Door jaren zon en vorst wordt kunststof hard. Het zet ook uit als het warm is en krimpt bij kou, en daardoor gaan verbindingen en hoekstukken na een tijd los. Breekt het als je erop drukt, dan is de goot op.` },
      { v: "Moet de regenpijp mee als de goot vervangen wordt?", a: `Niet altijd. Is de regenpijp nog heel en loopt het water goed weg, dan kan hij vaak blijven. Ik kijk wel naar de uitloop en de bovenkant van de pijp, want die vervang je makkelijk in één keer mee. Je hoort vooraf wat het kost.` },
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
        "Ga niet zelf het dak op tijdens of vlak na een storm: nat, winderig en met losse delen is dat te gevaarlijk. Blijf uit de buurt van loshangende pannen of delen die naar beneden kunnen komen, ook op de grond.",
        'Sijpelt er water naar binnen zonder dat er een storm is geweest, dan zit de oorzaak waarschijnlijk elders (losse pan, lood, verstopte goot). Kijk dan bij <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a> voor de eerste stappen en de meest voorkomende oorzaken.',
      ] },
      { kop: "Maak foto's en beperk de schade", tekst: [
        "Maak van een veilige plek foto's van de schade; die heb je straks nodig voor je verzekering. Vang binnen lekwater op en zet spullen droog. Het écht afdekken van het dak laat je aan een vakman over.",
      ] },
      { kop: "Je verzekering", tekst: [
        "Storm- en hagelschade valt vaak onder je opstalverzekering. Meld de schade bij je verzekeraar en bewaar de foto's. Ik lever een duidelijke omschrijving en foto's aan van wat ik aantref en herstel, zodat jij het kunt indienen.",
      ] },
      { kop: "Na de storm: kijk eerst vanaf de grond", tekst: [
        "Is de storm voorbij en is het binnen droog? Kijk dan vanaf de straat of de tuin even goed naar je dak. Let op pannen die scheef liggen of missen, een nok die niet meer recht loopt, lood bij de schoorsteen of het dakraam dat omhoog staat, en een goot die los hangt. Ligt er specie of een stuk pan in de goot of op de grond, dan zit er iets los.",
        'Ga daarna met een zaklamp op zolder kijken. Zie je ergens daglicht, of een natte plek op het hout of de folie, maak er dan een foto van. Zit de nok los, lees dan <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>. Lekt het sinds de storm alleen als het hard waait, lees dan <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
      ] },
      { kop: "Wanneer je moet bellen", tekst: [
        "Een open dak of actieve lekkage is spoed, daar kom ik snel voor langs om eerst de schade te stoppen (afdekken, dichten), en daarna netjes te herstellen. Bel of WhatsApp, dan hoor je meteen wanneer ik kan.",
      ] },
      { kop: "Storm voorspeld? Dit kun je vooraf doen", tekst: [
        "Wordt er een zware storm voorspeld, loop dan een paar dagen vooraf een rondje om je huis en kijk vanaf de straat en de tuin naar je dak. Ligt er een pan scheef, staat het lood bij de schoorsteen omhoog of liggen er brokjes specie in de goot, stuur me dan een foto via WhatsApp. Een losse pan of nokvorst is voor de storm vaak met een kleine reparatie vast te zetten, en anders neemt de wind hem mee.",
        "Zet tuinmeubels, een parasol of een trampoline vast of zet ze binnen, en haal losse spullen van je balkon of platte dak. Zulke spullen waaien bij een storm zo tegen een raam of tegen het dak van de buren.",
        `Zit je goot vol blad, laat hem dan voor de storm <a href="/diensten/goten-reinigen/">leegmaken</a>. Een storm komt vaak met veel regen, en een volle goot loopt dan over. Maak ook alvast een paar foto's van je dak vanaf de straat. Heb je na de storm schade, dan kun je je verzekeraar laten zien hoe je dak er daarvoor bij lag.`,
      ] },
    ],
    dienst: { label: "Bekijk: stormschade", href: "/diensten/stormschade/" },
    faq: [
      { v: "Moet ik zelf het dak op om de schade af te dekken?", a: "Nee, doe dat niet, zeker niet vlak na een storm. Bel mij, ik dek het veilig af en herstel daarna." },
      { v: "Vergoedt mijn verzekering stormschade?", a: "Vaak wel via de opstalverzekering. Ik lever foto's en een omschrijving aan zodat je het kunt indienen; check de voorwaarden bij je verzekeraar." },
      { v: "Hoe snel moet ik stormschade melden bij mijn verzekering?", a: "Zo snel als je kunt. Hoe snel precies, staat in je polisvoorwaarden. Maak meteen foto's van de schade, binnen en vanaf de straat van je dak, en bewaar die." },
      { v: "Wat doe je bij een noodreparatie na een storm?", a: "Eerst zorg ik dat er geen water meer binnenkomt. Liggen er pannen of nokvorsten los, dan leg ik ze terug of vervang ik ze. Is een stuk dak open en kan het niet meteen goed, dan dek ik het eerst af en kom ik daarna terug voor de nette reparatie. Je hoort vooraf wat het kost." },
      { v: "Wie betaalt als er een pan van mijn dak op de auto of het dak van de buren valt?", a: "Bij een echte storm geldt dat vaak als overmacht. Dan loopt de schade meestal via de verzekering van de buren of van de auto. Lag de pan al lang zichtbaar los, dan kan het anders liggen. Maak foto's van je dak en van de schade, en meld het bij je eigen verzekeraar. Die zoekt verder uit wie wat betaalt." },
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
      { kop: "Aan welke kant van het dak lekt het?", tekst: [
        "In Nederland komt harde wind meestal uit het zuidwesten of het westen. Daarom zie ik lekkage bij storm het vaakst aan die kant van het huis: bij de pannen langs de rand van het dak, bij de nok en bij het lood rond de schoorsteen of het dakraam aan de windkant. Lekt het bij jou aan de andere kant, dan kan dat ook. Het water kan over de nok heen waaien, of eerst een stuk opzij onder de pannen lopen voordat het binnenkomt.",
      ] },
      { kop: "Wat je nu doet", tekst: [
        'Vang het water op en maak een foto van de natte plek, ook als het later weer droog is. Schrijf op bij wat voor weer het lekte: uit welke hoek de wind kwam en hoe hard het regende. Dat helpt mij om de plek op het dak te vinden. Ga niet zelf het dak op bij harde wind. Lekt het nu flink, kijk dan op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Hoe ik het opspoor", tekst: [
        'Omdat het alleen bij wind lekt, zie je het vaak niet als het droog is. Ik kijk daarom eerst naar de plekken hierboven, aan de kant waar de wind op stond, en op zolder naar oude waterkringen. Meestal vind ik het zo zonder iets open te breken. Meer hierover in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
      { kop: "Zo voorkom je het bij de volgende storm", tekst: [
        'Is het lek gevonden en hersteld, kijk dan ook naar de rest van de kant waar de wind op staat. Liggen de pannen langs de rand en de onderste rij nog los op de latten, dan kun je ze laten vastzetten met stormhaken. Wat dat doet en wanneer het zin heeft, lees je in <a href="/kennisbank/dakpannen-vastzetten-tegen-storm/">dakpannen vastzetten tegen storm</a>.',
        "Ligt de nok nog in oude specie die bros wordt, dan wordt bij het opnieuw leggen vaak een ondervorst gebruikt in plaats van specie. Het liefst laat je dat in de herfst doen, voordat de winterstormen komen.",
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Waarom lekt mijn dak alleen bij storm?", a: "Omdat de wind de regen dan schuin onder de pannen of de nokvorsten door blaast. Bij gewone regen loopt het water er gewoon overheen. Vaak zit het bij de nok, een verschoven pan of het lood bij de schoorsteen." },
      { v: "Is het erg als het maar af en toe lekt?", a: "Laat het liever niet zitten. Elke keer worden het hout en de isolatie nat, en een plek die nu alleen bij storm lekt, wordt bij de volgende storm vaak groter." },
      { v: "Kan ik het zelf zien vanaf de straat?", a: "Soms wel. Een scheve nokvorst, een pan die anders ligt dan de rest of stukjes specie in de goot zie je vaak met een verrekijker. Stuur gerust een foto via WhatsApp, dan kijk ik mee." },
      { v: "Valt lekkage door harde wind onder mijn verzekering?", a: "Dat hangt af van je polis. Veel verzekeraars spreken pas van storm bij windkracht 7 of meer. Lekt het door zo'n storm, dan wordt de schade binnen vaak vergoed. Lekt het bij elke flinke windvlaag door een pan die al lang scheef lag, dan zien ze dat eerder als onderhoud. Maak foto's van de natte plek en van je dak vanaf de straat, en kijk in je polisvoorwaarden." },
      { v: "Is lekkage bij harde wind spoed?", a: "Druppelt het nu binnen, of ligt er een pan of nokvorst op straat, dan wel: bel of app me met een foto. Waren het een paar druppels en is het weer droog, dan kan het meestal een paar dagen wachten. Twijfel je, stuur dan een foto via WhatsApp, dan zeg ik eerlijk of het vandaag moet." },
    ],
  },
  {
    slug: "kilgoot-lekt",
    datum: "2026-10-24",
    titel: "Kilgoot lekt?",
    h1: "Kilgoot lekt: lekkage waar twee daken samenkomen",
    metaTitle: "Kilgoot lekt: oorzaken en oplossing | Spoed Dak Service",
    metaDescription:
      "Een natte plek in de hoek waar twee dakvlakken samenkomen? Dan lekt vaak de kilgoot. Zo herken je het, waar het meestal zit en wat eraan te doen is.",
    intro:
      "Heeft je huis een hoek, een aanbouw met een schuin dak of een schuur ertegenaan? Dan komen daar twee dakvlakken samen in een soort goot: de kilgoot, of kortweg de kil. Al het water van die twee dakvlakken loopt daardoorheen. Lekt hij, dan zie je dat meestal binnen, in de hoek. Hieronder lees je hoe je dat herkent en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg en maak een foto van de natte plek. Ga niet zelf het dak op: een kil ligt midden op een schuin dak en is glad als het nat is. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Wat is een kilgoot?", tekst: [
        "Een kilgoot ligt in de hoek waar twee schuine dakvlakken tegen elkaar aan komen, bijvoorbeeld bij een L-vormig huis, een aanbouw of een schuur. Meestal is het een strook lood of zink onder de pannen. Bij nieuwere daken ligt er soms een kunststof kil of zijn er speciale kilpannen gebruikt. Omdat het water van twee kanten komt, krijgt een kil bij een flinke bui veel water te verwerken.",
      ] },
      { kop: "Open of gesloten kil", tekst: [
        "Bij een open kil zie je vanaf de straat een strook lood of zink tussen de pannen van de twee dakvlakken. Blad en mos blijven daar minder snel hangen, en je ziet meteen als er iets in ligt.",
        "Bij een gesloten kil liggen de pannen van beide kanten bijna tegen elkaar en zit het lood of zink eronder. Dat ziet er strakker uit, maar de opening is smal. Blad, mos en losgekomen specie blijven daar sneller steken, en omdat je de kil zelf niet ziet, merk je dat pas als het binnen nat wordt. Bij zo'n kil is het extra slim om hem na de bladval te laten nakijken.",
      ] },
      { kop: "Zo herken je een lekkende kil", tekst: [
        "Een natte plek of bruine kring op het plafond of op zolder, in de hoek waar de daken samenkomen. Het lekt vaak vooral bij een stortbui, of in de herfst als er veel blad valt. Vanaf de straat zie je soms blad of mos in de kil liggen, of pannen langs de kil die scheef liggen.",
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "Blad en mos die in de kil blijven liggen. Dan kan het water niet weg, komt het hoger te staan dan de rand van het lood of zink en loopt het opzij onder de pannen door.",
        "Lood of zink dat na veel jaren gescheurd of dun geworden is, vooral op plekken waar lang vuil en water bleven liggen.",
        'Pannen langs de kil die verschoven zijn, bijvoorbeeld na een storm. Dan waait de regen er bij harde wind onderdoor. Lees ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        'Ligt de kil alleen vol, dan is leegmaken vaak genoeg. Zit er een scheur of een gat in het lood of zink, dan is dat vaak goed te herstellen. Is de kil over een groot stuk op, dan vervang ik dat stuk. Ik kijk eerst wat er echt aan de hand is en zeg eerlijk wat in jouw geval nodig is. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>. Weet je niet zeker of het de kil is, lees dan <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er mis is, hoe lang de kil is en hoe goed je erbij kunt. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Wat is een kilgoot?", a: "De goot in de hoek waar twee schuine dakvlakken samenkomen. Meestal is het een strook lood of zink onder de pannen. Al het water van die twee dakvlakken loopt erdoorheen." },
      { v: "Waarom lekt mijn kilgoot alleen bij een stortbui?", a: "Bij een gewone bui kan het water weg. Bij een stortbui, of als er blad in de kil ligt, komt het water hoger te staan dan de rand van het lood of zink en loopt het opzij onder de pannen door. Dat zie je dan pas binnen." },
      { v: "Kan ik de kil zelf schoonmaken?", a: "Liever niet. Een kil ligt midden op een schuin dak en dat is glad, zeker in de herfst. Laat het doen door iemand die veilig op een dak kan werken." },
      { v: "Kun je snel komen als het in de hoek binnenkomt?", a: "Bel of WhatsApp me met een foto van de natte plek binnen en, als dat veilig kan, een foto van het dak vanaf de straat. Dan hoor je wanneer ik kan komen." },
      { v: "Hoe vaak moet een kilgoot schoongemaakt worden?", a: "Kijk elk najaar even vanaf de straat of er blad of mos in de kil ligt. Staan er bomen vlak bij je huis, dan is het slim om de kil elk jaar na de bladval leeg te laten maken, tegelijk met je goten. Dan kan het water in de winter vrij weglopen." },
      { v: "Valt een lekkende kilgoot onder de verzekering?", a: "Lekt de kil doordat het lood of zink oud is of doordat er lang blad in lag, dan zien verzekeraars dat meestal als onderhoud. Is er bij een storm een pan langs de kil verschoven of is er een tak op gevallen, dan is het eerder plotselinge schade. Maak foto's van de natte plek en kijk in je polisvoorwaarden." },
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
      "Een dak gaat tientallen jaren mee, maar alleen als je het een beetje bijhoudt. Twee korte checks per jaar, in het voorjaar en het najaar, voorkomen verreweg de meeste dure schade. Hieronder wat er per seizoen toe doet, en hoe vaak je een vakman nodig hebt.",
    secties: [
      { kop: "Twee keer per jaar: voorjaar en najaar", tekst: [
        "De vuistregel is twee visuele controles per jaar. In het voorjaar herstel je winterschade (losse pannen, gescheurd lood, gootschade van vorst). In het najaar maak je het dak winterklaar: goten leeg vóór de bladval, pannen en lood na voor de eerste herfststorm.",
        "Is je dak ouder dan zo'n vijftien jaar, dan is twee keer kijken echt geen luxe, oudere daken laten sneller los.",
      ] },
      { kop: "Goten: minimaal twee keer per jaar", tekst: [
        "Goten zijn het vaakst de oorzaak van vochtschade. Maak ze minstens twee keer per jaar leeg, en bij bomen in de buurt vaker. Najaar is het belangrijkste moment, vlak na de bladval.",
      ] },
      { kop: "Let op per daktype", tekst: [
        "Pannendak: controleer op losse, gebroken of poreuze pannen, verwijder mos op tijd (mos houdt vocht vast) en kijk jaarlijks de nokvorsten en het lood bij schoorsteen en dakramen na.",
        "Plat dak: hier is stilstaand water de grootste vijand. Controleer na hevige regen of het water goed wegloopt, en houd naden en opstanden in de gaten.",
      ] },
      { kop: "Voor de winter: vier dingen om na te lopen", tekst: [
        'De nok. Liggen er brokjes specie in de goot of op de stoep, dan zitten er vaak vorsten los. Lees <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.',
        'Mos op de noordkant. Een dikke laag houdt vocht vast, en als dat bevriest kan een pan scheuren. Zie <a href="/kennisbank/mos-op-dak-verwijderen/">mos op je dak</a>. Hoe vaak je goot leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>.',
        'De schoorsteen. Stook je hout, laat hem dan vegen voordat je de kachel echt gaat gebruiken. Zie <a href="/kennisbank/schoorsteen-vegen-hoe-vaak/">hoe vaak schoorsteen vegen</a>.',
        'Het platte dak. Kijk na een flinke bui of er geen plas blijft staan. Wanneer dat een probleem is, lees je in <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water op je platte dak</a>.',
      ] },
      { kop: "En een professionele inspectie?", tekst: [
        "Een grondige vakinspectie is elke 3 tot 5 jaar verstandig, en vaker bij een ouder dak. Ik doe zo'n check eerlijk: ik zeg wat nú aandacht vraagt en wat best nog even kan wachten. Geen onnodige paniek, geen onnodig werk.",
        'Wil je weten hoe je dak er nu voor staat, dan kan dat met de <a href="/dak-apk/">Dak-APK</a>: een keuring van je hele dak met een fotorapport.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Hoe vaak moet ik mijn dak laten controleren?", a: "Twee keer per jaar zelf een visuele check (voorjaar + najaar), en elke 3 tot 5 jaar een grondige vakinspectie, vaker bij een dak ouder dan 15 jaar." },
      { v: "Wat is het beste moment voor onderhoud?", a: "Najaar is het belangrijkst: goten leeg en pannen/lood nakijken vóór de herfststormen. Het voorjaar gebruik je om winterschade te herstellen." },
      { v: "Wat kost een dakinspectie?", a: `Bij mij heet dat de Dak-APK: ${apkPrijs} voor een keuring van je hele dak met een fotorapport. Daarna weet je wat nu nodig is en wat nog kan wachten.` },
      { v: "Hoe onderhoud je een plat dak?", a: "Kijk minstens één keer per jaar, het liefst in het najaar. Haal blad en mos weg bij de afvoer en in de hoeken, kijk of er na een bui water blijft staan en let op naden en randen die loslaten. Ga alleen het dak op als dat veilig kan." },
      { v: "Wat moet ik in het najaar aan mijn dak doen?", a: "De goten leeg na de bladval, kijken of er pannen of nokvorsten los liggen en het lood bij de schoorsteen en dakramen nakijken. Dan is je dak klaar voor de herfststormen." },
    ],
  },
  {
    slug: "dakinspectie",
    datum: "2026-10-23",
    titel: "Dakinspectie: wat kijk ik na?",
    h1: "Dakinspectie: wat een dakdekker nakijkt en wanneer het zinvol is",
    metaTitle: "Dakinspectie: kosten en wat ik nakijk | Spoed Dak Service",
    metaDescription:
      `Wat kijkt een dakdekker na bij een dakinspectie, wanneer is het zinvol en wat kost het? Bij mij heet het de Dak-APK: ${apkPrijs} voor je hele dak met fotorapport.`,
    intro:
      "Een dakinspectie is gewoon een vakman die rustig je hele dak nakijkt, voordat er iets misgaat. Hieronder lees je wat ik dan bekijk, wanneer het zinvol is en wat het kost. Zo weet je wat je kunt verwachten voordat je iemand belt.",
    secties: [
      { kop: "Wanneer is een dakinspectie zinvol?", tekst: [
        "Als je een huis gaat kopen of net gekocht hebt. Als je dak wat ouder is en er al een tijd niemand naar heeft gekeken. Na een flinke storm, ook als je binnen nog niets merkt. En als je een offerte van een ander hebt gekregen en eerst zelf wilt weten hoe je dak ervoor staat.",
        'Hoe vaak je zelf even kunt kijken en wanneer je een vakman nodig hebt, lees je in <a href="/kennisbank/dakonderhoud-per-seizoen/">dakonderhoud per seizoen</a>.',
      ] },
      { kop: "Wat ik nakijk", tekst: [
        "De pannen of de dakbedekking: liggen ze goed, en zijn er gebroken, verschoven of poreuze bij. De nokvorsten, want die laten vaak als eerste los. De goten en de afvoer naar de regenpijp. Het lood en de aansluitingen bij de schoorsteen en de dakramen, want daar gaat het vaak als eerste mis.",
        "Verder mos en aanslag, en of dat vocht vasthoudt. Vochtplekken en andere sporen van lekkage, ook als er nog geen lek is. En liggen er zonnepanelen, dan kijk ik ook hoe die vastzitten.",
      ] },
      { kop: "Wat je daarna krijgt", tekst: [
        `Bij mij heet een dakinspectie de <a href="/dak-apk/">Dak-APK</a>. Je krijgt een rapport met foto's van de plekken die aandacht vragen, met uitleg in gewone taal. Ik zeg erbij wat nu nodig is en wat best nog even kan wachten. Niks aan de hand? Dan hoor je dat ook gewoon.`,
      ] },
      { kop: "Wat kost een dakinspectie?", tekst: [
        `De Dak-APK kost ${apkPrijs} voor een keuring van je hele dak met een fotorapport. Moet er daarna iets gebeuren, dan hoor je vooraf de vaste prijs, en jij beslist of je dat door mij laat doen. Richtprijzen voor de meeste klussen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
      { kop: "Zelf eerst kijken?", tekst: [
        'Vanaf de straat zie je met een verrekijker al veel: een pan die anders ligt dan de rest, een scheve nokvorst of stukjes specie in de goot. Ga niet zelf het dak op. Zie je iets, stuur me dan een foto via WhatsApp. Lekt het al, dan is het geen inspectie meer maar spoed. Kijk dan op de <a href="/spoed/">spoedpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: de Dak-APK", href: "/dak-apk/" },
    faq: [
      { v: "Wat kost een dakinspectie?", a: `De Dak-APK kost ${apkPrijs}. Daarvoor kijk ik je hele dak na en krijg je een rapport met foto's van de plekken die aandacht vragen.` },
      { v: "Is een dakinspectie nodig als ik een huis koop?", a: "Verplicht is het niet, maar het is wel slim, zeker bij een ouder huis. Dan weet je vooraf of er binnenkort iets aan het dak moet, en kun je daar rekening mee houden." },
      { v: "Hoe vaak moet je je dak laten inspecteren?", a: "Zelf kun je in het voorjaar en in het najaar even kijken. Een vakman laten kijken is verstandig als er al een tijd niemand naar je dak heeft gekeken, en eerder bij een ouder dak of na een zware storm." },
      { v: "Kom je ook voor een dakinspectie in mijn plaats?", a: "Ik werk in de regio Den Bosch, onder andere in Vught, Rosmalen, Vlijmen, Oss en Waalwijk. Bel of WhatsApp me, dan hoor je wanneer ik bij je langs kan komen." },
      { v: "Is een dakinspectie hetzelfde als een gratis offerte?", a: `Nee. Weet je al wat er moet gebeuren, bijvoorbeeld een lek, een losse pan of een volle goot, dan is een offerte bij mij gratis: stuur een foto of bel, en je hoort de vaste prijs. De Dak-APK (${apkPrijs}) is voor als je wilt weten hoe je hele dak ervoor staat, met een rapport met foto's.` },
      { v: "Hoe snel krijg ik het rapport van de dakinspectie?", a: `Binnen een dagdeel. Dan weet je zwart op wit hoe je dak ervoor staat, met foto's van de plekken die aandacht vragen en wat nu nodig is of nog kan wachten.` },
    ],
  },
  {
    slug: "mos-op-dak-verwijderen",
    titel: "Mos op je dak",
    h1: "Mos op je dak verwijderen: schadelijk of niet, en hoe wél?",
    metaTitle: "Mos op dak: verwijderen of laten zitten? | Spoed Dak Service",
    metaDescription:
      "Mos op je dak verwijderen? Mos houdt vocht vast en kan pannen laten scheuren bij vorst. Maar een hogedrukreiniger is riskant.",
    intro:
      "Een groen waas op je dak ziet er onschuldig uit, maar mos is niet alleen cosmetisch. Het houdt vocht vast en kan op den duur schade geven. Tegelijk kun je met de verkeerde aanpak (lees: een te harde hogedrukreiniger) méér kapotmaken dan je oplost. Hieronder hoe het zit.",
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
      { kop: "Hoe ik het aanpak", tekst: [
        "Ik kijk eerst of je pannen het aankunnen. Daarna verwijder ik het mos voorzichtig en ruim ik de goot en de uitloop naar de regenpijp meteen mee op. Zijn de pannen al bros, dan zeg ik dat eerlijk: soms is gericht vervangen slimmer dan blijven reinigen.",
      ] },
    ],
    dienst: { label: "Bekijk: dak reinigen & mos", href: "/diensten/dak-reinigen/" },
    faq: [
      { v: "Mag ik zelf met een hogedrukreiniger mijn dak schoonmaken?", a: "Liever niet op oudere of poreuze pannen, je haalt er de toplaag af en beschadigt ze. Op hoogte werken is bovendien niet zonder risico. Ik doe het veilig en op de juiste druk." },
      { v: "Komt het mos terug?", a: "Op den duur wel, zeker aan de noordkant en onder bomen. Laat het niet te dik worden: af en toe reinigen en elk najaar de goten leeg houdt het meestal goed in de hand." },
      { v: "Wanneer laat je mos het beste weghalen?", a: "Het liefst op een droge dag in het voorjaar of in het begin van de herfst. Op een nat of bevroren dak is het glad en werk je niet veilig. Laat het weghalen voordat je goten worden leeggemaakt, want het losse mos komt toch in de goot terecht." },
      { v: "Wat kost het om mos van je dak te laten halen?", a: `Dak reinigen en ontmossen kost ${ontmosPrijs}. Het hangt af van hoe groot je dak is en hoeveel mos erop zit. Je hoort de vaste prijs vooraf, en het losse mos haal ik meteen uit de goot.` },
    ],
  },
  {
    slug: "hoe-herken-je-een-betrouwbare-dakdekker",
    titel: "Betrouwbare dakdekker herkennen",
    h1: "Hoe herken je een betrouwbare dakdekker (en voorkom je oplichting)?",
    metaTitle: "Betrouwbare dakdekker herkennen | Spoed Dak Service",
    metaDescription:
      "Hoe herken je een betrouwbare dakdekker? KvK-inschrijving, schriftelijke offerte, verzekering en garantie, meerdere offertes vergelijken: de checklist.",
    intro:
      "KvK-inschrijving, een schriftelijke offerte, verzekering en garantie, meerdere offertes vergelijken: dit zijn de punten waar je op moet letten. Hieronder leg ik per punt uit waarom, en hoe ik dat zelf regel.",
    secties: [
      { kop: "Waarom dit een reëel risico is", tekst: [
        "Je leest geregeld over mensen die aan de deur een dakklus kregen aangesmeerd die niet nodig was, of die achteraf veel meer moesten betalen dan was afgesproken. Zulke verhalen komen regelmatig voorbij in het nieuws en bij consumentenprogramma's.",
        "Dat betekent niet dat de meeste dakdekkers oneerlijk zijn, verreweg de meeste doen gewoon hun werk. Maar de klachten die er wél zijn, volgen bijna altijd hetzelfde patroon: een mondelinge toezegging, een prijs die achteraf oploopt, en geen vast aanspreekpunt zodra er iets misgaat. Daar is met een paar checks vooraf veel van te voorkomen.",
      ] },
      { kop: "Checklist: waar je op let vóór je akkoord geeft", tekst: [
        "<strong>KvK-inschrijving.</strong> Vraag gerust naar het KvK-nummer en zoek het zelf even op, dat kost een minuut en laat meteen zien hoe lang een bedrijf al bestaat.",
        "<strong>Schriftelijke offerte met vaste prijs.</strong> Geen mondelinge toezegging \"dat wordt zo'n beetje...\", maar een bedrag op papier vóórdat het werk begint.",
        "<strong>Verzekering en garantie.</strong> Vraag naar aansprakelijkheidsverzekering (bij schade tijdens het werk) en garantie op het geleverde werk zelf.",
        "<strong>Meerdere offertes vergelijken</strong>, zeker bij grotere klussen (dakvervanging, renovatie), een groot prijsverschil zonder duidelijke reden is een signaal om door te vragen.",
        "<strong>Reviews</strong>, met een kanttekening: een net gestart bedrijf heeft er nog weinig. Dat maakt het niet automatisch onbetrouwbaar, vraag dan gewoon naar recent afgerond werk of foto's.",
        "<strong>Pas op bij druk om nu te beslissen</strong>: aan de deur, of \"deze prijs geldt alleen vandaag\". Een serieus bedrijf geeft je bedenktijd.",
        "<strong>Meerwerk alleen na jouw akkoord vooraf.</strong> Komt er tijdens het werk iets extra's bij, vraag dan eerst om een prijs op papier of in een appje en geef pas daarna akkoord. Dan weet je precies waar je aan toe bent.",
      ] },
      { kop: "Na een storm: let op wie er aanbelt", tekst: [
        "Na een zware storm gaan er soms mensen langs de deuren die zeggen dat ze schade aan je dak hebben gezien. Ze kunnen het meteen maken, het liefst vandaag nog en contant. Soms is er echt iets aan de hand, maar soms ook niet, en dan betaal je voor werk dat niet nodig was.",
        `Laat niemand op je dak die je niet zelf hebt gebeld. Vraag om een foto van de schade en kijk zelf vanaf de straat of je het ook ziet. Twijfel je, bel dan eerst je eigen dakdekker of je verzekeraar voordat je iets afspreekt. Wat je na een storm zelf kunt nakijken, lees je in <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.`,
      ] },
      { kop: "Zo doe ik het zelf", tekst: [
        `Ik werk onder mijn eigen naam met mijn eigen 06-nummer: je krijgt mij aan de lijn, geen callcenter, en mijn KvK- en btw-gegevens deel ik gewoon op verzoek. Bij elke klus krijg je een vaste prijs vóórdat ik begin, en bij de Dak-APK (${apkPrijs}) krijg je er ook een fotorapport bij, zodat je niet op mijn woord alleen hoeft te vertrouwen.`,
        "Zie ik onderweg iets extra's dat nodig is, dan meld ik dat en bespreken we het vóórdat ik het uitvoer, nooit een verrassing op de rekening achteraf.",
      ] },
    ],
    dienst: { label: "Lees over mij en hoe ik werk", href: "/over/" },
    faq: [
      { v: "Is een opvallend lage prijs een waarschuwingssignaal?", a: "Niet per se, kijk vooral of de prijs op papier staat en of hij past bij wat er in de offerte beschreven staat. Een prijs die pas ná het werk duidelijk wordt, is het grotere risico." },
      { v: "Wat als een dakdekker meerwerk wil doorberekenen zonder dat vooraf te zeggen?", a: "Spreek vooraf af dat extra werk eerst met jou wordt overlegd, met een prijs op papier of in een appje. Gebeurt het toch zonder overleg, vraag dan om uitleg en betaal niet zomaar. Twijfel je over je rechten, dan kun je gratis advies vragen bij het Juridisch Loket." },
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
      `Wat kost een dakdekker? Goten reinigen ${GOTEN_PRIJS}, kleine reparatie ${kleinPrijs}, daklekkage ${lekPrijs}. Offerte altijd gratis, vaste prijs vooraf.`,
    intro:
      `Wil je eerst weten hoe je dak ervoor staat? Dat is bij mij de Dak-APK: ${apkPrijs} voor een compleet keuringsrapport met foto's van elke risicoplek, binnen een dagdeel. Voor de rest staan hieronder de eerlijke richtprijzen per klus. Geen vaag bedrag per meter, en bij elke klus hoor je de vaste prijs voordat ik begin.`,
    secties: [
      { kop: "Kleine klussen en reparaties", tekst: [
        `Een kleine reparatie, zoals een paar losse pannen terugleggen of een nokvorst vastzetten, kost meestal ${kleinPrijs}, vaste prijs vooraf.`,
        `Goten reinigen is ${GOTEN_PRIJS} bij een rijtjeswoning, en terwijl ik bezig ben zie ik vaak meteen of er verder nog iets aan je dak speelt. Groter huis? Vaste prijs vooraf.`,
      ] },
      { kop: "Waar de prijs van een dakreparatie van afhangt", tekst: [
        "Twee reparaties die op papier hetzelfde lijken, kunnen toch verschillen. Dat komt vooral door drie dingen.",
        "<strong>Hoe goed ik erbij kan.</strong> Een pan vlak boven de goot van een rijtjeshuis is zo gedaan. Zit de schade hoog bij de nok, op een steil dak of boven een serre of aanbouw, dan kost het meer tijd.",
        "<strong>Welk materiaal erbij nodig is.</strong> Een gangbare pan is snel te krijgen. Een oude of bijzondere pan zoeken kost meer moeite, en nieuw lood bij de schoorsteen is duurder dan een pan terugleggen.",
        "<strong>Hoeveel er aan de hand is.</strong> Zie ik naast die ene pan ook een losse nokvorst of lood dat loslaat, dan hoor je dat vooraf, met wat het samen kost. Jij beslist wat ik meeneem.",
      ] },
      { kop: "Richtprijzen per klus", tekst: [
        `Een punctuele daklekkage repareren kost meestal ${lekPrijs}, inclusief materiaal. Dak ontmossen ${ontmosPrijs}. Schoorsteen vegen ${veegPrijs}. Zonnepanelen reinigen ${zonPrijs}. Een compleet nieuw dak: ${nieuwDakUitleg} Andere klussen krijg je als vaste prijs na een Dak-APK of bezoek.`,
        "Bij spoed buiten kantooruren komt er een toeslag bij, die hoor je vooraf, nooit als verrassing achteraf.",
      ] },
      { kop: "Waarom een vaste prijs vooraf?", tekst: [
        `Elk dak is anders. Wil je eerst weten hoe je dak ervoor staat, dan kan dat via de Dak-APK (${apkPrijs}): een compleet keuringsrapport met foto's, binnen een dagdeel. Weet je al wat er moet gebeuren, dan geef ik een vaste prijs vóór ik begin. Geen meerwerk-verrassingen: dat is het verschil met een callcenter dat een richtbedrag noemt en achteraf bijplust.`,
      ] },
    ],
    dienst: { label: "Bekijk alle prijzen", href: "/prijzen/" },
    faq: [
      { v: "Reken je voorrijkosten?", a: `Nee, een offerte is altijd gratis: bel of stuur een foto via WhatsApp en je hoort de vaste prijs vooraf. Wil je een complete keuring van je hele dak met fotorapport? Dat is de Dak-APK (${apkPrijs}), maar die is optioneel.` },
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
      `Hoe vaak schoorsteen vegen? Bij regelmatig stoken één keer per jaar, het beste vóór het stookseizoen. Veiliger tegen schoorsteenbrand. Kosten ${veegPrijs}.`,
    intro:
      "Een schone schoorsteen is veiliger en trekt beter. Maar hoe vaak is vegen nu echt nodig, en wat kost het? Kort en eerlijk uitgelegd.",
    secties: [
      { kop: "Hoe vaak is nodig?", tekst: [
        "Stook je regelmatig hout? Dan is één keer per jaar het advies, het beste vóór het stookseizoen (eind zomer / begin herfst). Bij een gasketel of weinig stoken kan het minder vaak.",
        "Veel verzekeraars verwachten ook een jaarlijkse beurt, handig om te weten als er ooit iets misgaat.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "In het kanaal verzamelt zich roet en creosoot. Te veel daarvan vergroot de kans op schoorsteenbrand en zorgt voor slechte trek (rook in huis). Vegen lost dat op en ik kijk meteen of het lood en de aansluiting op het dak nog goed zijn, een veelvoorkomende lekbron.",
      ] },
      { kop: "Zo zie je dat vegen nodig is", tekst: [
        "Rook die bij het aansteken de kamer in slaat, een kachel die slecht trekt, een sterke roetlucht als je niet stookt, of zwarte schilfers onder in de haard. Merk je zoiets, wacht dan niet tot volgend jaar.",
      ] },
      { kop: "Wat kost het?", tekst: [
        `Schoorsteen vegen kost ${veegPrijs}: netjes en zonder roetzooi in huis. Omdat ik toch op het dak ben, neem ik de aansluiting en het lood even mee in de controle.`,
      ] },
    ],
    dienst: { label: "Bekijk: schoorsteen vegen", href: "/diensten/schoorsteen-vegen/" },
    faq: [
      { v: "Wanneer kan ik het beste laten vegen?", a: "Vóór het stookseizoen, dus eind zomer of begin herfst. Dan begin je de winter veilig en met goede trek." },
      { v: "Maken jullie er een rommel van binnen?", a: "Nee. Ik dek netjes af en werk schoon, geen roet in je woonkamer." },
      { v: "Is schoorsteen vegen verplicht?", a: "Voor een gewoon woonhuis staat het niet in de wet. Wel vragen veel verzekeraars in hun voorwaarden om een jaarlijkse veegbeurt als je hout stookt. Gaat het mis en is er niet geveegd, dan kan dat gevolgen hebben voor je uitkering. Kijk het even na in je polis." },
      { v: "Moet de schoorsteen ook geveegd worden als ik weinig stook?", a: "Stook je maar een paar keer per jaar, dan kan het vaak minder vaak. Heb je lang niet gestookt of zaten er vogels op de schoorsteen, laat dan voordat je weer begint toch even kijken of het kanaal vrij is." },
      { v: "Waarom ruikt mijn open haard naar roet als het regent?", a: "Komt er vocht in het kanaal, dan wordt het roet aan de binnenkant nat, en dat ruik je in huis. Vooral bij regen en wind, of als de haard een tijd niet aan is geweest. Vaak zit er dan veel roet in het kanaal en is vegen nodig. Komt er ook water in de haard naar beneden, dan zit er vaak geen kap op de schoorsteen." },
    ],
  },
  {
    slug: "wat-kost-dak-coaten",
    verborgen: true,
    titel: "Wat kost dak coaten?",
    h1: "Wat kost dak coaten, en is het de moeite waard?",
    metaTitle: "Wat kost dak coaten? | Spoed Dak Service",
    metaDescription:
      "Wat kost dak of dakpannen coaten? Coating beschermt pannen die nog goed zijn en is veel goedkoper dan vervangen. Vaste prijs na een Dak-APK of bezoek.",
    intro:
      "Coaten klinkt als een dure ingreep, maar het is juist een manier om vervangen uit te stellen. Wanneer is het slim, en wat kost het? Eerlijk uitgelegd.",
    secties: [
      { kop: "Wanneer is coaten zinvol?", tekst: [
        "Coaten loont als je pannen nog stevig zijn maar verweerd: poreus, vol mos of dof. De coating beschermt tegen vocht, mos en uv en geeft je dak jaren extra.",
        "Zijn de pannen al broos of gebarsten, dan is coaten zonde van het geld. Dan adviseer ik vervangen. Ik kom kijken en zeg eerlijk wat in jouw geval loont.",
      ] },
      { kop: "Coaten versus vervangen", tekst: [
        "Een dak vervangen is een flinke investering. Coaten kost daar een fractie van en kan, mits de pannen nog goed zijn, hetzelfde resultaat geven: een strak, beschermd dak. Daarom begin ik altijd met de vraag: kán het met coaten, of is vervangen echt nodig?",
      ] },
      { kop: "Wat kost het?", tekst: [
        "De prijs hangt af van het oppervlak en de staat van het dak. Wil je eerst weten hoe je dak ervoor staat, dan kan dat via de Dak-APK (€49); daarna geef ik een vaste prijs. Eerst reinigen, dan coaten, netjes en in één keer goed.",
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
      `Vuile zonnepanelen leveren minder op. Hoe vaak reinigen nodig is, wat het kost (${zonPrijs}) en hoeveel opbrengst je terugwint.`,
    intro:
      "Stof, mos en vogelpoep op je panelen kosten opbrengst. Maar hoe vaak is reinigen echt nodig, en verdien je het terug? Kort en eerlijk.",
    secties: [
      { kop: "Levert reinigen echt iets op?", tekst: [
        "Ja. Vuile panelen kunnen enkele procenten minder opbrengen, soms meer als er een dikke laag mos of vogelpoep op zit. Schone panelen vangen simpelweg meer licht.",
        "Of het de moeite is, hangt af van hoe vies ze zijn. Liggen ze vlak of staan er bomen/vogels in de buurt, dan vervuilen ze sneller.",
      ] },
      { kop: "Hoe vaak?", tekst: [
        "Voor de meeste daken is eens per 1 à 2 jaar genoeg. Veel bomen of vogels in de buurt? Dan vaker. Ik kijk meteen of de bevestiging en de pannen eronder nog goed zijn.",
        'Lekt het op zolder sinds de panelen erop liggen? Lees dan <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        `Zonnepanelen reinigen kost ${zonPrijs}. Ik werk veilig vanaf het dak en voorzichtig met het glas, zonder schurende middelen. Omdat ik er toch ben, is het vaak handig te combineren met goten reinigen.`,
      ] },
    ],
    dienst: { label: "Bekijk: zonnepanelen reinigen", href: "/diensten/zonnepanelen-reinigen/" },
    faq: [
      { v: "Kras je de panelen niet?", a: "Ik werk voorzichtig en zonder schurende middelen, want krassen in het glas wil je niet." },
      { v: "Kan ik mijn panelen zelf met water afspoelen?", a: "Kun je er veilig bij, dan kan afspoelen met gewoon water geen kwaad. Kalkrijk kraanwater laat soms kringen achter. Ga niet zelf op het dak staan: tussen de panelen is het glad en je stapt zo een pan kapot." },
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
      { kop: "Dakleer: zo zie je dat het slijt", tekst: [
        "Op veel garages, schuren en oudere aanbouwen ligt dakleer, de gewone naam voor bitumen in banen. Vaak ligt er bovenop een laag leislag: fijne steentjes die het bitumen tegen de zon beschermen. Zie je die steentjes in de goot of bij de afvoer liggen, dan slijt de bovenlaag.",
        "Daarna droogt het bitumen in de zon uit. Je ziet dan fijne scheurtjes, een beetje zoals een opgedroogde modderplas. Op de overlap van twee banen kan een naad gaan openstaan, en op een schuur komt soms een spijkerkop door het dakleer omhoog. Kun je het dak vanuit een raam boven zien, maak dan een foto en stuur die via WhatsApp. Dan zeg ik eerlijk wat ik zie.",
      ] },
      { kop: "Lekt je platte dak nu?", tekst: [
        'Zet een emmer onder het lek en maak een foto van de natte plek. Ga niet zelf het dak op als het nat is of waait. Bij een plat dak komt het water vaak meters verderop binnen dan waar het lek zit, dus de plek binnen zegt weinig. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen, of lees hoe ik <a href="/kennisbank/daklekkage-opsporen/">een daklekkage opspoor</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een gericht lek in een plat dak, bijvoorbeeld bij een naad, de rand of de afvoer, kost meestal ${lekPrijs}, inclusief materiaal. Is de bedekking op meer plekken versleten en moet er een groter stuk of de hele bedekking opnieuw, dan krijg je een vaste prijs na inspectie. Je hoort altijd wat het wordt voordat ik begin. Alle richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: platte daken (EPDM)", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Hoe lang gaat EPDM mee?", a: "EPDM kan, goed gelegd, tientallen jaren mee. Het is flexibel en bestand tegen weer en uv." },
      { v: "Kun je het lek vinden zonder alles open te breken?", a: "Meestal wel. Ik spoor gericht op bij naden en opstanden, zodat er zo min mogelijk open hoeft." },
      { v: "Is mos op een plat dak schadelijk?", a: "Een beetje mos is niet meteen erg, maar het houdt vocht en vuil vast en kan de afvoer verstoppen. Dan blijft er water op je dak staan, en dat zoekt elke zwakke plek op. Haal het daarom op tijd weg en houd de afvoer vrij." },
      { v: "Hoe vaak moet een plat dak nagekeken worden?", a: "Minstens één keer per jaar, het liefst in het najaar: afvoer vrij, geen blad of mos in de hoeken en geen plekken waar water blijft staan. Een korte controle voorkomt de meeste lekkages." },
      { v: "Kan een plat dak in de herfst of winter gerepareerd worden?", a: "Vaak wel, maar het weer telt mee. Voor een nette reparatie moet het dak droog zijn, en bij vorst of in een natte week hecht niet elk materiaal goed. Lekt het nu, dan maak ik het lek vaak eerst tijdelijk dicht, zodat het binnen droog blijft. De nette reparatie doe ik dan op een droge dag. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "water-blijft-staan-op-plat-dak",
    datum: "2026-10-22",
    titel: "Water op je platte dak?",
    h1: "Water blijft staan op je platte dak: erg of niet?",
    metaTitle: "Water blijft staan op plat dak: erg? | Spoed Dak Service",
    metaDescription:
      "Blijft er na een bui een plas staan op je platte dak? Een paar ondiepe plasjes zijn normaal. Wanneer het wel een probleem is en wat je eraan doet.",
    intro:
      "Na een flinke bui zie je een plas op het platte dak van je uitbouw, garage of berging. Moet je je zorgen maken? Meestal niet meteen. Maar water dat dagen blijft staan, zoekt vroeg of laat een zwakke plek. Hieronder lees je wanneer het kan en wanneer je beter even laat kijken.",
    secties: [
      { kop: "Een beetje water is normaal", tekst: [
        "Een plat dak is nooit helemaal vlak. Na een bui blijven er vaak een paar ondiepe plasjes liggen die binnen een dag of twee opdrogen. Dat is geen probleem.",
      ] },
      { kop: "Wanneer het wel een probleem is", tekst: [
        "Staat er na een paar droge dagen nog steeds water? Is de plas groot, of wordt hij elk jaar groter? Dan loopt het water niet goed weg. Staand water zoekt elke kleine scheur en naad op. Er groeien mos en vuil in, en in de winter kan het bevriezen. Dat is extra belasting voor de dakbedekking.",
      ] },
      { kop: "Waar het meestal door komt", tekst: [
        "Een afvoer die vol blad, mos of zand zit. Dat zie ik het vaakst, en het is meestal het makkelijkst op te lossen.",
        "Een dak dat in de loop der jaren is gaan doorhangen, bijvoorbeeld doordat het dakbeschot vocht heeft opgenomen. Dan ontstaat er een kuil waar het water niet uit kan.",
        "Te weinig afschot: het dak loopt niet genoeg af naar de afvoer. Dat zit er soms al in vanaf de bouw.",
      ] },
      { kop: "Staat het water bij een lichtkoepel of tegen de muur?", tekst: [
        'Blijft het water vooral rond een lichtkoepel staan, dan staat het tegen de rand waar de koepel op de opstand zit. Juist daar lekt een plat dak vaak als eerste. Lees daarover <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.',
        'Staat de plas tegen de muur van het huis, waar het platte dak van je aanbouw op de gevel aansluit, dan krijgt die naad het zwaar te verduren. Zie je binnen een natte streep langs die muur, lees dan <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.',
      ] },
      { kop: "Wat je zelf kunt doen", tekst: [
        "Kun je er veilig bij, haal dan blad en vuil weg rond de afvoer. Ga niet op een nat of glad dak staan en gebruik geen wankele ladder. Lukt het niet veilig, maak dan een foto van de plas en de afvoer en stuur die via WhatsApp. Dan zeg ik wat ik zie.",
      ] },
      { kop: "Lekt het al binnen?", tekst: [
        'Zie je een natte plek in het plafond van de uitbouw of garage? Bij een plat dak komt het water vaak een eind verderop binnen dan waar het lek zit. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet. Of repareren genoeg is of dat de bedekking aan vervanging toe is, lees je in <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a>.',
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk eerst waarom het water blijft staan: een dichte afvoer, een kuil in het dak of te weinig afschot. Een dichte afvoer maak ik weer vrij. Ligt het aan een kuil of het afschot, dan zeg ik eerlijk wat er nodig is en of een gerichte reparatie genoeg is. Je hoort de vaste prijs vooraf. Zie <a href="/diensten/platte-daken/">platte daken</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: platte daken (EPDM)", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Hoe lang mag water op een plat dak blijven staan?", a: "Een paar ondiepe plasjes die binnen een dag of twee opdrogen zijn normaal. Staat er na een paar droge dagen nog steeds een plas, dan loopt het water niet goed weg en is het slim om te laten kijken." },
      { v: "Kan een plas op het dak lekkage geven?", a: "Niet meteen, maar staand water zoekt elke kleine scheur en naad op. Hoe langer het blijft staan, hoe groter de kans dat het ergens doorheen komt." },
      { v: "Wat is een noodoverloop?", a: "Een extra opening in de dakrand, iets hoger dan de afvoer. Raakt de afvoer verstopt, dan kan het water daar weg in plaats van op het dak te blijven staan. Niet elk plat dak heeft er een." },
      { v: "Moet het hele dak opnieuw als er water blijft staan?", a: "Meestal niet. Vaak is het een dichte afvoer. Ligt het aan een kuil of te weinig afschot, dan kijk ik eerst of een gerichte reparatie genoeg is. Je hoort eerlijk wat nodig is." },
    ],
  },
  {
    slug: "lekkage-bij-aanbouw",
    datum: "2026-10-29",
    titel: "Lekt je aanbouw bij de muur?",
    h1: "Lekkage bij de aanbouw: waar het platte dak tegen je huis zit",
    metaTitle: "Aanbouw lekt bij de muur: oorzaken | Spoed Dak Service",
    metaDescription:
      "Een natte plek in je aanbouw, vlak langs de muur van het huis? Vaak zit het in de aansluiting van het dak op de gevel, of komt het water door de muur erboven.",
    intro:
      "Een aanbouw of uitbouw achter het huis heeft meestal een plat dak dat tegen de gevel van het huis aan ligt. Precies op die naad gaat het vaak mis. Je ziet het als een natte streep of vlekken op het plafond van de aanbouw, vlak langs de muur van het huis. Hieronder lees je waar het water meestal binnenkomt en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg bij de natte muur en maak een foto van de plek. Ga niet zelf het platte dak op als het nat of glad is. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Hoe de aansluiting op de muur in elkaar zit", tekst: [
        "Langs de muur loopt de dakbedekking van de aanbouw een stukje omhoog, tegen de gevel aan. Daaroverheen zit meestal een strook lood of zink die met de bovenrand in de muur vastzit. Die strook zorgt dat het water dat langs de gevel naar beneden loopt, over de dakbedekking heen het dak op gaat en niet erachter.",
      ] },
      { kop: "Waar het meestal lekt", tekst: [
        "Het lood of zink is losgekomen uit de muur. Dan staat er een kier tussen de strook en de gevel, en loopt het water bij elke bui achter de strook langs naar binnen.",
        "De dakbedekking onder het lood is losgeraakt of gescheurd, vaak in een hoek. Juist op die plek werkt het dak bij warmte en kou het meest.",
        'Er blijft water staan tegen de gevel, omdat het dak niet goed afloopt of de afvoer vol zit. Dan staat de aansluiting steeds onder water. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
      ] },
      { kop: "Of komt het door de muur erboven?", tekst: [
        "Soms is het dak helemaal dicht en komt het water door de gevel van het huis. Een buitenmuur neemt bij een flinke bui met wind water op. Dat zakt binnen in de muur naar beneden en komt eruit op de plek waar het dak van de aanbouw tegen de muur zit. Je herkent het doordat het vooral lekt als de regen tegen die gevel aan slaat, en soms pas een dag later. Zit het in de muur zelf, in de voegen of de stenen, dan zeg ik dat eerlijk: daarvoor heb je een metselaar nodig.",
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Kit tussen het lood en de muur lijkt een snelle oplossing, maar lost het zelden op. Zit het lek in de dakbedekking onder het lood of in de muur erboven, dan kit je de verkeerde plek dicht. Maak liever een foto van de natte plek binnen en van de muur boven de aanbouw, en stuur die via WhatsApp.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk eerst of het water door het dak komt of door de muur. Is het lood of zink losgekomen, dan zet ik het weer goed vast, of ik vervang de strook. Is de dakbedekking langs de muur los of gescheurd, dan maak ik die aansluiting opnieuw dicht. Zie <a href="/diensten/platte-daken/">platte daken</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Een losse strook lood weer vastzetten is meestal een overzichtelijke klus. Moet de aansluiting over de hele breedte opnieuw, dan is het meer werk. Je hoort vooraf de vaste prijs, voordat ik begin. Of je verzekering meebetaalt, lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: platte daken (EPDM)", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Waarom lekt mijn aanbouw alleen langs de muur?", a: "Omdat daar de naad zit tussen het platte dak en de gevel van het huis. Laat het lood of de dakbedekking daar los, dan komt het water precies langs de muur naar binnen. Het kan ook water zijn dat door de gevel erboven naar beneden zakt." },
      { v: "Hoe zie ik of het van het dak of van de muur komt?", a: "Lekt het bij elke flinke bui, ook zonder veel wind, dan zit het meestal in het dak of de aansluiting. Lekt het vooral als de regen tegen die gevel aan slaat, en soms pas een dag later, dan komt het water vaker door de muur. Stuur een foto, dan kijk ik mee." },
      { v: "Is het erg als het maar een klein beetje lekt?", a: "Een beetje water langs de muur lijkt weinig, maar het trekt in het plafond en het hout van de aanbouw. Na een tijd zie je schimmel of loslatende verf. Laat het daarom nakijken, ook als het maar af en toe druppelt." },
    ],
  },
];

export const getArtikel = (slug: string) => ARTIKELEN.find((a) => a.slug === slug);
