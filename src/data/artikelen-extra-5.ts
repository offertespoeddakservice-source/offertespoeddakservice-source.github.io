/**
 * Nieuwe kennisartikelen en korte antwoorden sinds 16-11-2026.
 * artikelen-extra-4.ts zet ze achter ARTIKELEN_EXTRA_4 en in KORT_ANTWOORD_4.
 * 17-11-2026 ronde 2: water in de meterkast
 * 17-11-2026 ronde 3: dak lekt na dagen regen, lood bij de schoorsteen (kosten), jaren 50-huis
 * 17-11-2026 ronde 3: schimmel op zolder (lek of condens)
 * 17-11-2026 ronde 3: dak nakijken voor je de zolder verbouwt
 * 17-11-2026 ronde 5: lekkage terwijl je op vakantie bent
 * 17-11-2026 ronde 5: lekkende ventilatiepan
 * 17-11-2026 ronde 5: zelf een dakpan terugleggen of vervangen
 * 18-11-2026 ronde 1: doorslaand vocht of daklek
 * 18-11-2026 ronde 1: zakgoot lekt
 */
import type { Artikel } from "./artikelen";

export const ARTIKELEN_EXTRA_5: Artikel[] = [
  {
    slug: `noodreparatie-dak`,
    datum: `2026-11-16`,
    titel: `Noodreparatie aan je dak: hoe lang houdt het?`,
    h1: `Noodreparatie aan je dak: wat het is, hoe lang het houdt en wat daarna komt`,
    metaTitle: `Noodreparatie dak: hoe lang houdt het? | Spoed Dak Service`,
    metaDescription: `Lek of stormschade en het moet eerst dicht? Zo werkt een noodreparatie: wat ik doe, hoe lang het houdt, wat je verzekeraar vraagt en wat daarna komt.`,
    intro: `Bij een lek of na een storm is de eerste vraag niet hoe het mooi wordt, maar hoe het binnen droog blijft. Daarom gaat een reparatie soms in twee stappen: eerst een noodreparatie, en op een betere dag de nette reparatie. Hieronder lees je wat een noodreparatie is, hoe lang die houdt, wat je zelf doet en hoe het zit met je verzekering.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op, zeker niet als het nat is of hard waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat is een noodreparatie?`, tekst: [
        `Een noodreparatie is alles wat ervoor zorgt dat er geen water meer binnenkomt, ook als het nog niet netjes is. Een losse pan terugleggen. Een gebroken pan tijdelijk vervangen door een andere. Een open stuk dak afdekken met folie of een zeil dat goed vastzit. Een kier dichtmaken waar het lood is losgekomen. Of een volle goot of afvoer leegmaken, zodat het water weer weg kan. Het doel is één ding: droog houden tot de echte reparatie kan.`,
      ] },
      { kop: `Waarom niet meteen netjes?`, tekst: [
        `Vaak kan het wel in één keer, en dan doe ik dat ook. Soms lukt het niet, en dat heeft bijna altijd met het weer, het materiaal of de veiligheid te maken.`,
        `Lood, kit en dakbedekking hechten alleen op een droge, schone ondergrond. Regent het, dan houdt een nette reparatie het niet lang. Dakmortel voor de nok moet uitharden zonder vorst.`,
        `Een gebroken pan moet passen in vorm en kleur. Ligt er een ouder model op je dak, dan moet ik zo'n pan soms eerst zoeken.`,
        `Bij harde wind, onweer of in het donker op een nat dak is lang op het dak werken voor niemand veilig. Dan maak ik het eerst dicht, en kom ik terug als het wel kan.`,
      ] },
      { kop: `Hoe lang houdt een noodreparatie?`, tekst: [
        `Dat hangt af van wat er is gedaan. Een pan die is teruggelegd, ligt daarna gewoon weer zoals hij hoort. Een zeil of folie over een open stuk is bedoeld voor dagen tot een paar weken, niet voor de hele winter. De wind trekt er steeds aan, en zon en vorst maken het bros. Wacht dus niet te lang met de nette reparatie. Gaat het hard waaien voordat die er is, kijk dan vanaf de straat of het zeil nog goed ligt. Ga er zelf niet aan trekken en zet het niet zelf vast.`,
      ] },
      { kop: `Wat jij in de tussentijd doet`, tekst: [
        `Kijk na een bui op zolder of de plek droog blijft, en laat de emmer nog even staan. Een nat plafond droogt langzaam, ook als het lek dicht is, zie <a href="/kennisbank/plafond-drogen-na-lekkage/">plafond drogen na een lekkage</a>. Wordt het toch weer nat, of zie je dat het zeil is gaan schuiven, stuur me dan meteen een foto. Moet je na een zware storm wachten tot er iemand kan komen, lees dan <a href="/kennisbank/wachten-op-dakdekker-na-storm/">wachten op een dakdekker na een storm</a>.`,
      ] },
      { kop: `En je verzekering?`, tekst: [
        `Maak foto's van de schade voordat er iets aan gebeurt, binnen en, als het veilig kan, van je dak vanaf de straat. Bewaar de rekening van de noodreparatie. Kosten die je maakt om erger te voorkomen, heten bij verzekeraars bereddingskosten. Die worden vaak vergoed als de schade zelf onder je polis valt, zoals bij stormschade, maar dat verschilt per polis. Bel je verzekeraar zo snel mogelijk en vraag wat ze nodig hebben. Ik maak foto's van wat ik aantref en van wat ik heb gedaan, met een korte omschrijving die je kunt meesturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst waar het water binnenkomt en zorg dat het daar droog blijft. Daarna zeg ik eerlijk of het meteen netjes kan, of dat er een tweede keer nodig is, bijvoorbeeld voor een passende pan, nieuw lood of dakmortel op een droge dag zonder vorst. Je hoort vooraf wat elke stap kost, en voor de nette reparatie spreken we samen een dag af. Zie <a href="/diensten/daklekkage/">daklekkage</a> en, na een storm, <a href="/diensten/stormschade/">stormschade</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Gaat het altijd in twee keer?`, a: `Nee. Vaak kan het lek meteen goed dicht. Alleen als het weer, het materiaal of de veiligheid het niet toelaat, maak ik het eerst waterdicht en kom ik terug voor de nette reparatie. Je hoort vooraf wat elke stap kost.` },
      { v: `Kan ik zelf een zeil over mijn dak leggen?`, a: `Liever niet. Op een nat dak glij je zo uit, en een groot zeil werkt bij wind als een zeil op een boot: het rukt aan alles wat het vasthoudt, ook aan jou. Vang het water binnen op, en kun je veilig op zolder komen, zet daar dan een bak onder de plek waar het druppelt. Het afdekken laat je aan mij over.` },
      { v: `Hoe lang mag een zeil op mijn dak blijven liggen?`, a: `Zo kort mogelijk. Het is bedoeld om de tijd tot de nette reparatie te overbruggen, meestal dagen en hooguit een paar weken. Hoe langer het ligt, hoe groter de kans dat de wind er een keer onder komt. Spreek daarom meteen een dag af voor de nette reparatie.` },
    ],
  },
  {
    slug: `foto-van-je-dak-maken`,
    datum: `2026-11-16`,
    titel: `Foto's van je dak maken: welke helpen?`,
    h1: `Foto's van je dak maken voor de dakdekker: welke helpen het meest, veilig vanaf de grond`,
    metaTitle: `Foto van je dak maken voor de dakdekker | Spoed Dak Service`,
    metaDescription: `Wil je via WhatsApp een prijs of advies? Deze foto's helpen een dakdekker het meest: je dak vanaf de straat, de natte plek binnen en zolder. Zo maak je ze veilig.`,
    intro: `Via WhatsApp kan ik al veel zien, als de foto's de goede dingen laten zien. Met een paar goede foto's weet ik meestal wat er speelt en wat ik mee moet nemen, en vaak kan ik dan al zeggen wat het ongeveer wordt. Hieronder lees je welke foto's het meest helpen en hoe je ze maakt zonder het dak op te gaan.`,
    secties: [
      { kop: `Blijf op de grond`, tekst: [
        `Ga voor een foto niet het dak op en zet geen ladder tegen de goot. Alles wat ik nodig heb, maak je vanaf de straat, uit een raam boven of op zolder. Liever een foto minder dan een val.`,
      ] },
      { kop: `Je dak vanaf de overkant van de straat`, tekst: [
        `Ga aan de overkant van de straat staan, zodat je het hele dakvlak ziet, van de goot tot de nok. Maak eerst een foto van het hele dak, en zoom daarna met je telefoon in op de plek waar je iets ziet: een pan die scheef ligt, een gat bij de nok of lood bij de schoorsteen dat omhoog staat. Gaat het om de achterkant, maak de foto dan vanuit de tuin, of vraag de buren of het mag vanuit hun tuin of een raam boven.`,
      ] },
      { kop: `De natte plek binnen`, tekst: [
        `Maak een foto van dichtbij, en een tweede van een paar meter afstand. Dan zie ik waar in de kamer het zit: bij een raam, een lamp, de schoorsteen of in een hoek. Zet erbij op welke verdieping het is en of het nog druppelt.`,
      ] },
      { kop: `Op zolder, boven de natte plek`, tekst: [
        `Kun je veilig op zolder komen, kijk dan met een zaklamp boven de natte plek. Maak een foto van het hout, de folie of de pannen waar het nat is, of waar je daglicht ziet. Die foto zegt vaak meer dan de vlek op het plafond, want het water komt vaak een eind verderop binnen dan waar je het ziet. Zie ook <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Bij een goot: tijdens of vlak na een bui`, tekst: [
        `Een lekkende goot zie je het best als het regent. Film tien seconden lang de plek waar het water de goot uit komt: over de voorkant, achter de goot langs de muur, bij een naad of bij de regenpijp. Zie <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Bij een plat dak: uit een raam boven`, tekst: [
        `Maak vanuit een raam op de verdieping erboven een foto van het hele platte dak, met de rand en de afvoer erop. Staat er na een paar droge dagen nog een plas, zet dat erbij. Ga er niet op staan als het nat of glad is. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Zet er een paar woorden bij`, tekst: [
        `Schrijf in je bericht in welke plaats je woont, sinds wanneer je het ziet, bij wat voor weer het nat wordt (bij elke bui, alleen bij harde wind of alleen bij dooi) en of er onlangs iemand op je dak is geweest. Daarmee kan ik de foto's beter lezen.`,
      ] },
      { kop: `Wat ik met je foto's doe`, tekst: [
        `Ik kijk wat ik zie en zeg eerlijk wat ik denk dat het is. Vaak kan ik dan al zeggen wat het ongeveer wordt, en de vaste prijs hoor je voordat ik begin. Op een foto zie je niet altijd alles. Dan kom ik eerst kijken. Lekt het nu, kijk dan eerst op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Ik kan mijn dak vanaf de straat niet goed zien. Wat dan?`, a: `Maak dan de foto's die wel lukken: de natte plek binnen, zolder met een zaklamp en het dak vanuit de tuin of een raam boven. Zet erbij wat voor huis het is, bijvoorbeeld een rijtjeshuis of een huis met een plat dak achter. Dan vraag ik zelf wat ik nog wil zien.` },
      { v: `Is een filmpje beter dan een foto?`, a: `Bij een goot of een druppel vaak wel, omdat je dan ziet waar het water loopt. Houd het kort, tien tot twintig seconden. Voor een pan, de nok of het lood is een scherpe foto met zoom meestal genoeg.` },
      { v: `Kun je op een foto al een prijs geven?`, a: `Vaak kan ik dan al zeggen wat het ongeveer wordt. De vaste prijs hoor je voordat ik begin. Zie ik op de foto niet alles, dan kom ik eerst kijken.` },
    ],
  },
  {
    slug: `dak-repareren-via-buren`,
    datum: `2026-11-16`,
    titel: `Kan de dakdekker alleen via de buren bij je dak?`,
    h1: `Kan de dakdekker alleen via de tuin of het dak van de buren bij je goot of dak? Zo regel je het`,
    metaTitle: `Dakdekker via de tuin van de buren? | Spoed Dak Service`,
    metaDescription: `Kan de dakdekker alleen via de tuin, het pad of het platte dak van de buren bij je goot of dak? Wat het ladderrecht zegt en hoe je het samen goed regelt.`,
    intro: `Bij een rijtjeshuis, of een huis zonder achterom, komt een dakdekker soms alleen via de tuin, het pad of het platte dak van de buren bij de goot of het dak aan de achterkant. Meestal is dat met een praatje zo geregeld. Hieronder lees je wat je vooraf afspreekt, wat de wet zegt als het niet lukt en hoe ik het aanpak.`,
    secties: [
      { kop: `Eerst gewoon vragen`, tekst: [
        `Vraag je buren een paar dagen van tevoren of de dakdekker via hun tuin of pad mag. Vertel waarvoor, hoe lang het ongeveer duurt en waar de ladder komt te staan. De meeste buren vinden het prima, zeker als ze weten wanneer het is. Spreek af wie er thuis is om het hek open te doen, en of er planten, een schutting of een tuinset in de weg staan.`,
      ] },
      { kop: `Wat het ladderrecht zegt`, tekst: [
        `Willen de buren niet, dan is er het ladderrecht, artikel 5:56 van het Burgerlijk Wetboek. Kort gezegd moet een eigenaar toestaan dat zijn grond wordt gebruikt voor onderhoud of herstel aan het huis van de buren, als dat werk anders niet, of alleen op een heel lastige of dure manier kan. Ontstaat er daarbij schade, bijvoorbeeld aan de tuin of de schutting, dan heeft de buurman recht op vergoeding.`,
        `Het ladderrecht is bedoeld voor als het echt niet anders kan, niet om een omweg te sparen. Vraag het dus altijd van tevoren. Kom je er samen niet uit, vraag dan advies bij het Juridisch Loket. Dit is uitleg van een dakdekker, geen juridisch advies.`,
      ] },
      { kop: `Via het platte dak van de buren`, tekst: [
        `Soms kan ik alleen bij je dak of goot komen via het platte dak van de aanbouw of garage van de buren. Niet elk plat dak is gemaakt om op te lopen of een ladder op te zetten. Ik kijk daarom eerst of dat dak er stevig genoeg voor is. Is het dat niet, dan zoeken we samen een andere manier. Vraag je buren ook hier altijd vooraf of ze het goed vinden.`,
      ] },
      { kop: `Een goot of dak dat doorloopt naar de buren`, tekst: [
        `Loopt je goot of dak door naar de buren en zit het lek op de grens, dan is het vaak slim om het samen aan te pakken. Zie <a href="/kennisbank/gedeelde-dakgoot-lekt/">gedeelde dakgoot lekt</a> en <a href="/kennisbank/lekkage-muur-buren/">lekkage langs de muur met de buren</a>.`,
      ] },
      { kop: `Maak vooraf een foto`, tekst: [
        `Maak samen met je buren een foto van de tuin, het pad of het platte dak voordat het werk begint. Dan is er achteraf geen discussie over hoe het eruitzag. Ik ben bedrijfsaansprakelijk verzekerd.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van je dak of goot vanaf de straat of uit de tuin, en zet erbij of er een achterom is. Dan zeg ik of ik er via de voorkant bij kan, of dat ik via de buren moet. Je hoort vooraf wat het kost, en we spreken samen een dag af, zodat jij het met je buren kunt regelen. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Mijn buren willen niet. Mag de dakdekker dan toch via hun tuin?`, a: `Niet zomaar. Het ladderrecht geldt alleen als het werk echt niet, of alleen heel lastig anders kan, en ook dan is het verstandig om het eerst samen op te lossen. Vraag of er een moment is dat het hen beter uitkomt, of dat er iemand bij kan zijn. Kom je er niet uit, vraag dan advies bij het Juridisch Loket. Kan ik er ook langs een andere kant bij, dan zeg ik dat eerlijk.` },
      { v: `Wat als er bij de buren iets kapotgaat?`, a: `Volgens het ladderrecht heeft je buurman recht op vergoeding van schade die door het werk ontstaat. Maak daarom voor het werk samen een foto van de tuin of de schutting, en spreek af waar de ladder komt te staan.` },
      { v: `Moet ik mijn buren zelf vragen, of doe jij dat?`, a: `Vraag het liefst zelf, want het zijn jouw buren. Ik vertel je vooraf waar de ladder komt te staan en hoe lang het ongeveer duurt, zodat je dat kunt doorgeven.` },
    ],
  },
  {
    slug: `hagelschade-dak`,
    datum: `2026-11-16`,
    titel: `Hagelschade aan je dak: wat nu?`,
    h1: `Hagelschade aan je dak: waar je na de bui kijkt, wat je meteen doet en hoe het zit met je verzekering`,
    metaTitle: `Hagelschade aan je dak: wat nu? | Spoed Dak Service`,
    metaDescription: `Na een hagelbui een lek, een gebarsten pan of een kapotte lichtkoepel? Waar hagel een dak het eerst raakt, wat je meteen doet en wat je verzekeraar wil zien.`,
    intro: `Na een flinke hagelbui wil je weten of je dak het gehouden heeft. Meestal valt het mee, want gewone dakpannen kunnen veel hebben. Wat hagel wel snel kapotmaakt, is glas en kunststof: een lichtkoepel, een dakraam of de platen van je veranda. Hieronder lees je waar je na de bui naar kijkt, wat je meteen doet als het lekt en hoe het zit met je verzekering.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op: na een hagelbui liggen er ijsballetjes en natte blaadjes op de pannen, en dan is een dak spiegelglad. Ga ook niet op een veranda of een lichtkoepel staan om te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar hagel een dak het eerst raakt`, tekst: [
        `Gewone dakpannen kunnen meestal flink wat hagel hebben. Bij een heel zware bui, of bij oude pannen die al water opnemen, kan er wel een pan barsten of gaat er een hoekje af. Zie <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
        `Kwetsbaarder is alles van glas of kunststof. Een lichtkoepel van kunststof wordt na jaren zon bros, en dan slaat hagel er een barst of een gat in. Zie <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>. Ook een dakraam, een glazen dakpan en de platen van een veranda of overkapping raken sneller beschadigd. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a> en <a href="/kennisbank/veranda-of-overkapping-lekt/">veranda of overkapping lekt</a>.`,
        `Een oude kunststof goot of regenpijp kan na veel jaren ook bros zijn en scheuren. En op een plat dak spoelen de hagelkorrels samen met blad naar de afvoer. Kijk na de bui of die niet dichtzit, anders blijft het water staan. Zie <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Na de bui: zo kijk je veilig`, tekst: [
        `Wacht tot het droog is en kijk vanaf de overkant van de straat en vanuit de tuin naar je dak, met de zoom van je telefoon. Let op pannen met een barst of een stukje eraf, een dakraam of koepel met een ster of een scheur, en scherven of stukjes pan op de stoep, het terras of in de goot. Kijk van binnen tegen het licht in naar een lichtkoepel of dakraam: een haarscheur zie je dan beter.`,
        `Kijk bij de volgende flinke bui even op zolder, met een zaklamp, of het droog blijft. Een kleine barst lekt soms pas als het weer hard regent of waait. Welke foto's mij het meest helpen, lees je in <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Hagel in de goot`, tekst: [
        `Na een zware hagelbui ligt de goot soms ineens vol ijs, met blad en takjes ertussen. Het ijs smelt vanzelf, maar het blad blijft liggen en zet de uitloop naar de regenpijp dicht. Loopt je goot na de bui over of komt er water langs de gevel, lees dan <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `Je verzekering`, tekst: [
        `Hagelschade aan je dak valt vaak onder je opstalverzekering, maar dat verschilt per polis, dus kijk in je voorwaarden. Maak foto's van de schade voordat er iets wordt weggehaald, binnen en vanaf de straat, en schrijf de datum en het tijdstip van de bui erbij. Bewaar ook de rekening van een noodreparatie. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving die je kunt meesturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Eerst zorg ik dat het binnen droog blijft. Een gebroken lichtkoepel of een open plek dek ik af, en een gebarsten pan vervang ik door een pan die in vorm en kleur bij de rest past. Is het glas van een dakraam gebroken, dan dek ik het af en zeg ik eerlijk wie het glas het beste kan vervangen. Kan het niet meteen netjes, bijvoorbeeld omdat ik eerst een passende pan moet zoeken, dan maak ik het eerst waterdicht en kom ik terug, zie <a href="/kennisbank/noodreparatie-dak/">noodreparatie aan je dak</a>. Je hoort vooraf wat het kost. Zie ook <a href="/diensten/stormschade/">stormschade aan je dak</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: stormschade aan je dak`, href: `/diensten/stormschade/` },
    faq: [
      { v: `Kan hagel door gewone dakpannen heen slaan?`, a: `Zelden. Een gebakken of betonnen pan in goede staat kan meestal flink wat hagel hebben. Bij heel grote hagelstenen, of bij oude pannen die al poreus zijn, kan er wel een pan barsten of een hoek afbreken. Glas en kunststof, zoals een lichtkoepel, een dakraam of de platen van een veranda, gaan eerder kapot.` },
      { v: `Mijn dak lekt pas een paar dagen na de hagelbui. Kan dat nog door de hagel komen?`, a: `Dat kan. Een haarscheur in een pan of een koepel laat vaak pas water door bij de volgende flinke bui, zeker als het waait. Schrijf de datum van de hagelbui op en meld het ook dan bij je verzekeraar. Stuur me een foto van de natte plek en van je dak vanaf de straat, dan kijk ik waar het binnenkomt.` },
      { v: `Moet ik na hagel mijn zonnepanelen laten nakijken?`, a: `Aan de panelen zelf werk ik niet, dat doet je installateur. Zie je een barst in een paneel, laat hem dan kijken. Lekt het sinds de bui op zolder, of is er een pan naast de panelen gebroken, dan kijk ik daarnaar. Ligt die pan onder een paneel, dan moet het paneel eerst los, en dat doet je installateur.` },
    ],
  },
  {
    slug: `planten-in-dakgoot`,
    datum: `2026-11-16`,
    titel: `Gras of plantjes in je dakgoot?`,
    h1: `Er groeit gras, mos of een plantje in je dakgoot: wat dat zegt en wat je eraan doet`,
    metaTitle: `Gras of planten in je dakgoot? | Spoed Dak Service`,
    metaDescription: `Groeit er gras, mos of zelfs een boompje in je dakgoot? Dan ligt er een laag aarde in. Waarom dat kwaad kan, wat je beter niet doet en hoe hij weer leeg komt.`,
    intro: `Kijk je vanaf de straat omhoog en zie je sprietjes gras, mos of een klein boompje boven de rand van je dakgoot uitsteken? Dan is de goot al een tijd niet leeg geweest. Het ziet er onschuldig uit, maar zo'n begroeide goot kan het water niet meer goed kwijt. Hieronder lees je wat het betekent, waarom je het beter niet laat zitten en hoe je hem weer schoon krijgt.`,
    secties: [
      { kop: `Wat het betekent`, tekst: [
        `Een plant groeit alleen als er iets is om in te wortelen. In een goot is dat een laag van blad, mos, zand dat van de pannen afspoelt en vogelpoep, die na een paar jaar verandert in een soort natte aarde. Zaadjes van gras, onkruid of een berk waaien erin en kiemen. Zie je groen in je goot, dan ligt er dus al een flinke laag, en meestal ook bij de uitloop naar de regenpijp. Zie ook <a href="/kennisbank/zand-in-dakgoot/">zand of korrels in je dakgoot</a>.`,
      ] },
      { kop: `Waarom het kwaad kan`, tekst: [
        `Het water kan niet weg. De laag aarde houdt het tegen, en bij een flinke bui loopt de goot over de rand, of achter de goot langs de muur. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Het wordt zwaar. Natte aarde weegt veel meer dan droog blad. Een goot die jaren zo'n laag draagt, kan tussen de beugels gaan doorhangen, en dan blijft er na elke bui water staan. Zie <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
        `De goot blijft nat. Een laag die altijd vochtig is, laat een zinken goot sneller slijten, en wortels groeien graag in een naad of een hoek. Zie <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Trek vanaf een ladder niet hard aan een plant met flinke wortels. Die kunnen in een naad vastzitten, en met een ruk trek je de goot uit de beugels of de naad open. Gooi er geen onkruidmiddel of zout in: dat spoelt met de regen naar je regenpijp en het riool, en de laag aarde blijft gewoon liggen. Ga ook niet vanaf het dak of uit een dakraam in de goot reiken. Wil je het zelf doen, lees dan eerst <a href="/kennisbank/dakgoot-zelf-schoonmaken/">dakgoot zelf schoonmaken</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik haal de hele laag eruit, met de planten en de wortels, ook bij de uitloop naar de regenpijp, en de troep neem ik mee. Daarna kijk ik of het water weer goed wegloopt, of de goot nog op afschot hangt en of de naden en hoeken nog dicht zijn. Zie ik een lek of een goot die doorhangt, dan zeg ik dat eerlijk, en hoor je eerst wat het kost om het te herstellen, voordat ik iets doe. Wat leegmaken kost, lees je in <a href="/kennisbank/wat-kost-dakgoot-schoonmaken/">wat kost dakgoot schoonmaken</a>.`,
      ] },
      { kop: `Zo voorkom je het`, tekst: [
        `Laat je goot laat in de herfst leegmaken, als het meeste blad gevallen is. Staan er bomen dicht bij je huis, dan is een tweede keer in het voorjaar vaak slim. Hoe vaak het bij jou nodig is, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>. Of een bladvanger of gaas helpt, staat in <a href="/kennisbank/bladvanger-dakgoot/">bladvanger of gaas in je dakgoot</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Er groeit een klein boompje in mijn dakgoot. Is dat erg?`, a: `Laat het niet staan. Een boompje groeit elk jaar, en de wortels zoeken een weg in een naad, een hoek of onder de onderste pannen. Hoe eerder het eruit gaat, hoe kleiner de kans dat de goot of een pan schade krijgt. Stuur me een foto vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.` },
      { v: `Kan ik het groen niet gewoon laten zitten als het niet lekt?`, a: `Liever niet. Zolang het droog is, merk je er weinig van, maar bij een stevige bui kan de goot het water niet kwijt en loopt hij over. En hoe langer het blijft liggen, hoe dikker de laag en hoe zwaarder de goot wordt.` },
      { v: `Moet mijn goot vervangen worden als er planten in groeiden?`, a: `Meestal niet. Vaak is leegmaken genoeg. Hangt de goot door, dan kan hij vaak weer op afschot gehangen worden, en een lekke naad in een zinken goot kan vaak opnieuw gesoldeerd worden. Alleen als de goot op veel plekken lek of doorgeroest is, zeg ik dat vervangen slimmer is.` },
    ],
  },
  {
    slug: `boerderij-dak-lekt`,
    datum: `2026-11-16`,
    titel: `Lekt het dak van je boerderij?`,
    h1: `Het dak van je boerderij of woonboerderij lekt: waar het meestal zit en wat je doet`,
    metaTitle: `Dak van je boerderij lekt: waar zit het? | Spoed Dak Service`,
    metaDescription: `Een boerderij heeft een groot pannendak, lange goten, een kilgoot bij de schuur en vaak oude pannen zonder folie. Zo zie je waar het lekt en wat je doet.`,
    intro: `Een boerderij of woonboerderij heeft een ander dak dan een huis in de straat. Het dak is groot en loopt vaak laag door tot vlak boven de grond, het woonhuis en de oude stal zitten soms onder één kap, en er zijn later stukken aangebouwd. Zo'n dak heeft daardoor zijn eigen zwakke plekken. Hieronder lees je welke dat zijn, hoe je ziet waar het lekt en wat je zelf kunt doen.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep uit als het bij een lamp of stopcontact lekt. Ga niet zelf het dak op, ook niet waar het laag bij de grond komt: oude pannen breken snel als je erop staat, en met mos erop zijn ze glad. Maak een foto van de natte plek. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Oude pannen, vaak zonder folie`, tekst: [
        `Op veel oude boerderijdaken haken de pannen direct op de latten, zonder folie eronder. Vanaf de hooizolder kijk je zo tegen de onderkant van de pannen aan. Zo'n dak ademt goed, en een streepje licht is daar niet vreemd. Het nadeel: valt er een pan stuk of schuift er een, dan druppelt het meteen op de balken of de vloer eronder. In het deel dat later tot woonruimte is verbouwd, ligt soms wel folie met isolatie, terwijl de oude stal nog het oude dak heeft. Zie <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De lange goot. Van een groot dakvlak komt bij een bui veel water tegelijk in de goot. Ligt er blad of mos in, of is de uitloop naar de regenpijp half dicht, dan loopt hij over en wordt de muur eronder nat. Ook een naad of hoek in een oude zinken goot kan opengaan. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `De kilgoot bij een aanbouw of schuur. Waar een later gebouwd stuk met zijn dak tegen het hoofddak aankomt, ligt een kilgoot. Daar komt het water van twee dakvlakken samen, en daar blijft ook blad liggen. Oud lood of zink kan er scheuren. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
        `De nok en de schuine hoeken. Veel boerderijen hebben aan de kopse kant een schuin afgeschuind stuk dak, soms een wolfseind genoemd, met hoekkepers langs de schuine randen. De vorsten op de nok en op de hoeken liggen vaak nog in specie, en die laat na veel jaren los. In het open land heeft de wind daar veel grip op. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a> en <a href="/kennisbank/hoekkeper-lekt/">lekkage bij de hoekkeper</a>.`,
        `De schoorsteen. Ook als er niet meer gestookt wordt, staat hij er vaak nog, met lood rond de voet dat al heel lang meegaat. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `Dakramen in het verbouwde deel. Bij een verbouwing zijn er vaak dakramen in het grote dakvlak gekomen. Boven zo'n raam blijft blad hangen, en het gootstuk eronder kan na jaren lekken. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `Oude pannen. Gebakken pannen van tientallen jaren oud nemen water op, en na een vorstperiode kunnen ze schilferen of barsten. Zie <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a> en <a href="/kennisbank/vorstschade-dakpannen/">vorstschade aan dakpannen</a>.`,
      ] },
      { kop: `De schuur of stal ernaast`, tekst: [
        `Naast veel boerderijen staat een schuur, stal of loods met een eigen dak en een eigen goot, en die vergeet je snel. Ligt er een pannendak op, lees dan <a href="/kennisbank/pannendak-schuur-lekt/">het pannendak van je schuur lekt</a>. Liggen er golfplaten op, kijk dan bij <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>. Zijn de platen grijs en van voor 1994, laat ze dan eerst onderzoeken op asbest, want daar boor of zaag ik niet in.`,
      ] },
      { kop: `Zo vind je het`, tekst: [
        `Ga tijdens of vlak na een bui met een zaklamp naar de zolder of de hooizolder boven de natte plek. Zonder folie zie je het natte hout meestal recht onder het lek. Ligt er wel folie, dan loopt het water eerst een stuk naar beneden voordat je het ziet. Maak daarna vanaf het erf of de weg foto's van beide kanten van het dak en van de kopse kant, met de zoom van je telefoon. Een pan die scheef ligt, een gat in de nok of blad in de kilgoot zie je vaak al van beneden. Zie ook <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Repareren of een dakvlak vernieuwen?`, tekst: [
        `Lekt het op één plek, dan is repareren meestal genoeg: een pan vervangen, de nok weer vastzetten, lood herstellen of een naad in de goot solderen. Breken er elk jaar op meer plekken pannen, dan kan het slimmer zijn om een dakvlak in één keer te vernieuwen. Als je dat wilt, kan er dan ook nieuwe folie en kunnen er nieuwe panlatten onder. Staat je boerderij op de monumentenlijst, lees dan ook <a href="/kennisbank/dak-monument-repareren/">je dak repareren in een monument</a>. Wanneer vernieuwen slimmer wordt, staat in <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het water binnenkomt en daarna buiten op het dak. Bij een groot of hoog dak spreken we vooraf af hoe ik er veilig bij kan. Voor een gebroken pan zoek ik een pan die bij de rest past, zie <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>. Los lood zet ik weer vast of vervang ik, meestal met loodvervanger en met echt lood als je dat liever hebt. Een lekkende naad in een zinken goot soldeer ik. Je hoort vooraf wat het kost. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mijn boerderij ligt ver buiten het dorp. Kom je daar ook?`, a: `Ja. Zet in je bericht in welke plaats je woont, en stuur een foto van de natte plek en van het dak vanaf het erf of de weg. Dan weet ik wat ik mee moet nemen, en hoor je eerlijk wanneer ik kan komen.` },
      { v: `Ik wil de oude stal verbouwen tot woonruimte. Waar let ik op bij het dak?`, a: `Zorg dat het dak eerst dicht is, voordat er isolatie of een plafond onder komt. Anders zie je een lek pas als het water al door de isolatie is gelopen. Laat het dak vooraf nakijken, bijvoorbeeld met de Dak-APK, en laat gebroken pannen, los lood en de goten eerst herstellen. Isoleren doe ik zelf niet, dat doet een isolatiebedrijf. Wil je bij die verbouwing ook nieuwe folie en panlatten onder de pannen, dan kan dat als het dakvlak toch open gaat.` },
      { v: `Er zit een dikke laag mos op het dak van mijn boerderij. Moet dat eraf?`, a: `Een dikke laag mos houdt water vast, en bij vorst kan een oude pan dan barsten. Op een groot dak spoelt het mos ook naar de lange goot en zet het de uitloop dicht. Daken schoonmaken of ontmossen doe ik zelf niet. Wel maak ik de goten leeg en vervang ik pannen die door mos en vorst gebarsten zijn. Laat je het dak door iemand anders schoonmaken, vraag dan of die met lage druk werkt, want oude pannen zijn kwetsbaar.` },
    ],
  },
  {
    slug: `water-spat-over-dakgoot`,
    datum: `2026-11-16`,
    titel: `Water spat over je dakgoot heen?`,
    h1: `Regen spat over je dakgoot heen: waarom het water de goot mist en wat eraan te doen is`,
    metaTitle: `Water spat over de dakgoot heen? | Spoed Dak Service`,
    metaDescription: `Klettert het regenwater bij een bui over je goot heen, terwijl die bijna leeg is? Dan mist het water de goot. Zo zie je waarom, en hoe hij weer goed komt te hangen.`,
    intro: `Het regent hard en je ziet het water als een gordijn voor je dakgoot langs naar beneden vallen, terwijl er in de goot zelf bijna niets staat. Dan loopt de goot niet over, maar schiet het water eroverheen. Dat is iets anders dan een volle of een lekke goot, en het vraagt ook iets anders. Hieronder lees je hoe je het herkent, waar het meestal door komt en wat eraan te doen is.`,
    secties: [
      { kop: `Wordt het binnen nat?`, tekst: [
        `Valt het water alleen buiten op de stoep of het terras, dan is het meestal geen spoed. Wordt de muur binnen nat, bovenin of rond een kozijn, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet, en lees <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>. Ga niet bij regen of wind de ladder op.`,
      ] },
      { kop: `Eroverheen, overlopen of erachter?`, tekst: [
        `Kijk tijdens een flinke bui vanaf de overkant van de straat of vanuit de tuin. Schiet het water vanaf de pannen in een boog over de voorkant van de goot, terwijl er weinig water in de goot staat, dan mist het water de goot. Staat de goot vol en loopt het water over de rand, dan loopt hij over: lees dan <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>. Loopt het water tussen de goot en de muur naar beneden, kijk dan bij <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `Waarom het water over de goot heen schiet`, tekst: [
        `Een steil dak. Hoe steiler het dak, hoe harder het water van de pannen af komt. Bij een stortbui krijgt het zoveel vaart dat het over een goot schiet die bij gewone regen prima werkt.`,
        `Gladde pannen of zonnepanelen. Van geglazuurde pannen en van zonnepanelen loopt het water sneller af dan van oude, ruwe pannen. Gebeurt het pas sinds er panelen op je dak liggen, dan kan dat de reden zijn.`,
        `De goot hangt te laag of te ver naar achteren. De onderste pannen moeten een stukje boven de goot uitsteken, zodat het water ongeveer in het midden van de goot valt. Is de goot na jaren gezakt, of is hij bij een vervanging lager gehangen, dan komt het water op of over de voorrand terecht.`,
        `De onderste pannen liggen niet goed. Steken ze te ver uit, of is er bij werk op het dak een pan verschoven, dan valt het water op die plek vlak bij de voorrand of eroverheen.`,
        `Een smalle goot onder een groot dakvlak. Een smalle goot heeft weinig ruimte om het water op te vangen. Onder een groot of steil dakvlak kan een bredere goot beter werken.`,
        `Een kil die op de goot uitkomt. Waar een kilgoot op de goot uitkomt, komt het water van twee dakvlakken op één plek samen. Daar schiet het vaak het eerst over de rand. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Water dat bij elke bui over de goot heen valt, komt steeds op dezelfde plek terecht: op je terras, je kozijnen of tegen de gevel. Daar wordt de muur nat en groen, zie <a href="/kennisbank/groene-strepen-gevel-onder-dakgoot/">groene strepen op de gevel onder de dakgoot</a>. Bij vorst wordt het een gladde plek op de stoep of het terras. En spat het steeds tegen de muur, dan kan het vocht op den duur naar binnen trekken.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Buig de voorkant van de goot niet omhoog, en zet er geen plankje of strook op met kit of tape. Dan blijft er water in de goot staan, of loopt het juist achter de goot langs. Zet ook geen ladder tegen de goot om te kijken, en ga niet bij regen of wind naar boven.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me tijdens een bui een kort filmpje van de plek waar het water de goot mist, en een foto van de goot vanaf de straat. Ter plekke kijk ik hoe de onderste pannen liggen, hoe hoog en hoe ver de goot hangt en of de beugels nog goed zitten. Vaak is het genoeg om de goot op die plek een stukje hoger of verder naar voren te hangen, nog steeds op afschot naar de regenpijp, of om een verschoven pan weer goed te leggen.`,
        `Is de goot te smal voor het dak erboven, of is hij op, dan zeg ik eerlijk dat een andere goot beter is. Komen er zonnepanelen tot vlak boven de goot, dan kijk ik naar de goot en de pannen; aan de panelen zelf werkt je installateur. Je hoort vooraf wat het kost. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Het gebeurt alleen bij een stortbui. Is dat erg?`, a: `Bij een echte wolkbreuk kan dat bij veel goten gebeuren, en dan is het niet meteen een probleem. Gebeurt het bij elke flinke bui, steeds op dezelfde plek, of valt het water tegen je gevel of op een plek waar je loopt, dan is het de moeite waard om de goot te laten nakijken. Stuur me een filmpje van een bui, dan zeg ik eerlijk wat ik zie.` },
      { v: `Het gebeurt sinds er een nieuwe goot hangt. Ligt het aan de goot?`, a: `Vaak ligt het aan hoe hij hangt: een stukje te laag, te ver naar achteren of met de beugels op een andere plek dan bij de oude goot. Meld het eerst bij wie de goot heeft opgehangen en stuur foto's of een filmpje mee. Meer lees je in het artikel over <a href="/kennisbank/lekt-sinds-nieuwe-dakgoot/">lekkage sinds een nieuwe dakgoot</a>.` },
      { v: `Helpt een bredere goot?`, a: `Soms. Onder een groot of steil dakvlak kan een bredere goot meer water opvangen. Vaak ligt het niet aan de breedte, maar aan hoe de goot hangt of hoe de onderste pannen liggen, en dan is opnieuw ophangen genoeg. Ik kijk eerst wat het bij jouw dak is, en je hoort vooraf wat het kost.` },
      { v: `Is water dat over de goot spat spoed?`, a: `Meestal niet, zolang het water buiten blijft. Wordt het binnen nat, bovenin de muur of rond een kozijn, of valt het water op een plek waar het bij vorst glad wordt, bel of app me dan met een foto.` },
    ],
  },
  {
    slug: `noodoverloop-plat-dak`,
    datum: `2026-11-16`,
    titel: `Water uit de noodoverloop van je platte dak?`,
    h1: `Er komt water uit de noodoverloop van je platte dak: wat dat betekent en wat je doet`,
    metaTitle: `Water uit noodoverloop plat dak: wat nu? | Spoed Dak Service`,
    metaDescription: `Spuit er bij regen water uit het buisje in de rand van je platte dak? Dan kan de gewone afvoer het niet aan of zit hij dicht. Zo zie je wat er speelt en wat je doet.`,
    intro: `Op veel platte daken zit in de rand, net iets hoger dan de gewone afvoer, een kort buisje of kokertje naar buiten: de noodoverloop, ook wel spuwer genoemd. Meestal komt daar nooit iets uit. Zie je bij regen ineens een straal water uit dat buisje komen, dan is dat een teken. Hieronder lees je wat het betekent, wat je zelf kunt nakijken en wanneer je beter even belt.`,
    secties: [
      { kop: `Lekt het binnen?`, tekst: [
        `Zet een emmer of bak onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat is een noodoverloop?`, tekst: [
        `Een plat dak watert af via een afvoer: een opening in het dak of in de rand, met daaronder een regenpijp. Raakt die afvoer verstopt, of valt er meer regen dan hij aankan, dan stijgt het water op het dak. De noodoverloop ligt net iets hoger dan de afvoer. Komt het water zo hoog, dan loopt het daar naar buiten, en niet over de rand of onder een deur door naar binnen. Het is dus een uitweg voor als het misgaat, geen gewone afvoer.`,
      ] },
      { kop: `Wat het betekent als er water uitkomt`, tekst: [
        `Een korte straal bij een echte wolkbreuk kan normaal zijn: dan kon de afvoer het water even niet bijhouden. Komt er bij een gewone bui water uit, of blijft het lang lopen, dan staat het water op je dak hoger dan zou moeten. Meestal zit de gewone afvoer dan dicht met blad, takjes, mos of grind, of zit de regenpijp eronder verstopt. Hoe dat werkt, lees je in <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Water dat lang op een plat dak staat, drukt tegen de naden, de rand en de aansluiting tegen de muur. Daar vindt het eerder een kier dan op een dak dat droog valt. Bij een dakterras of een deur naar het platte dak kan het water bij een volle afvoer ook onder de dorpel door naar binnen lopen. En in de winter bevriest een plas die blijft staan. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a> en <a href="/kennisbank/dakterras-lekt/">dakterras lekt</a>.`,
      ] },
      { kop: `Zo kijk je het veilig na`, tekst: [
        `Kijk na de bui vanuit een raam boven naar het platte dak. Staat er nog water bij de afvoer, ligt er blad of grind voor de opening, of staat er een plas over een groot stuk van het dak? Kijk beneden of er water uit de regenpijp komt. Komt er weinig uit terwijl de noodoverloop loopt, dan zit het in de afvoer of de pijp. Ga niet zelf het dak op als het nat, glad of donker is, en niet op een dak waarvan je niet weet of het je houdt. Maak een foto en stuur die via WhatsApp. Welke foto's het meest helpen, lees je in <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Heeft je dak geen noodoverloop?`, tekst: [
        `Veel oudere platte daken op een aanbouw, garage of berging hebben er geen. Raakt de enige afvoer dan dicht, dan kan het water nergens anders heen en zoekt het een weg over de rand of naar binnen. Juist dan is het slim om de afvoer in de herfst leeg te laten maken, als het blad gevallen is. Of er een noodoverloop bij kan, hangt af van je dak en de rand. Vraag het gerust als ik er ben, dan hoor je eerlijk wat er kan.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de afvoer en de uitloop naar de regenpijp vrij en haal het blad, mos en losse grind rond de afvoer weg. Daarna kijk ik of het water weer goed wegloopt, en of de dakbedekking rond de afvoer en de noodoverloop nog dicht is. Zie ik daar een scheur of een naad die loslaat, dan hoor je dat, en wat het kost voordat er iets gebeurt. Zie <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Er komt bij elke bui een beetje water uit de noodoverloop. Is dat erg?`, a: `Bij elke bui is niet de bedoeling. Dan staat het water op je dak bij elke bui hoger dan de afvoer, en dat wijst meestal op een afvoer die half dicht zit of een regenpijp die verstopt is. Laat de afvoer leegmaken voordat het gaat vriezen. Stuur me een foto van het dak vanuit een raam boven en van de regenpijp, dan zeg ik eerlijk wat ik zie.` },
      { v: `Kan ik de noodoverloop dichtmaken? Het water spat tegen mijn gevel.`, a: `Nee, maak hem niet dicht. Hij zit er juist om te voorkomen dat het water bij een volle afvoer over de rand of naar binnen loopt. Het probleem zit bij de afvoer, niet bij de overloop. Zorg dat de gewone afvoer vrij is, dan komt er uit de overloop weer bijna nooit iets.` },
      { v: `Het lekt binnen sinds de noodoverloop liep. Hoort dat bij elkaar?`, a: `Dat kan. Stond het water lang hoog op het dak, dan kan het bij een naad, de rand of de aansluiting tegen de muur een weg naar binnen hebben gevonden. Zet een bak onder de druppel, maak foto's van de natte plek en van het dak vanuit een raam boven, en stuur die via WhatsApp. Is het nu nat binnen, kijk dan ook op de spoedpagina wat je meteen kunt doen.` },
    ],
  },
  {
    slug: `kraaien-mos-van-dak`,
    datum: `2026-11-16`,
    titel: `Trekken kraaien mos van je dak?`,
    h1: `Kraaien of kauwen trekken mos van je dak: is dat erg, en wat doe je ermee?`,
    metaTitle: `Kraaien trekken mos van je dak: erg? | Spoed Dak Service`,
    metaDescription: `Liggen er plukken mos op je stoep, terras of in de goot, en zie je kraaien of kauwen op je dak? Waarom ze dat doen, wat het voor je dak en goot betekent en wat je doet.`,
    intro: `Je stapt 's ochtends naar buiten en de stoep, de oprit of het terras ligt vol plukken mos. Op het dak zie je kauwen of kraaien die met hun snavel het mos tussen de pannen weg trekken. Dat ziet er rommelig uit, en je vraagt je af of je dak er schade van krijgt. Hieronder lees je waarom ze het doen, wat het voor je dak en je goot betekent en wat je wel en niet doet.`,
    secties: [
      { kop: `Waarom ze het doen`, tekst: [
        `Kauwen en kraaien zoeken in en onder het mos naar insecten, larven en wormpjes. Vooral in de herfst, de winter en het vroege voorjaar, als er op de grond minder te vinden is, draaien ze de mosplukken op je dak om. Wat ze niet nodig hebben, gooien ze weg. Dat rolt van het dak naar beneden of blijft in de goot liggen.`,
      ] },
      { kop: `Is het erg voor je dak?`, tekst: [
        `Voor de pannen zelf meestal niet. De vogels trekken het mos los en laten de pannen in de regel liggen. Het zegt wel iets: op je dak groeit zoveel mos dat er genoeg te halen is. Mos houdt water vast, en op oudere pannen kan dat bij vorst schade geven. Wat je daaraan doet, lees je in <a href="/kennisbank/mos-op-dak-verwijderen/">mos op je dak</a>. Zie je na zo'n ochtend toch een pan die scheef ligt of omhoog staat, kijk dan bij <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `Het grootste risico: je goot`, tekst: [
        `De plukken mos die niet naar beneden vallen, blijven in de goot liggen. Daar worden ze samen met blad een natte prop, vaak precies bij de uitloop naar de regenpijp. Bij de volgende flinke bui kan het water dan niet weg en loopt de goot over, of loopt het water achter de goot langs de muur. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp</a>. Op een plat dak spoelt het mos naar de afvoer, zie <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Ga niet zelf het dak op om het mos weg te halen of de vogels weg te jagen, en zet geen ladder tegen de goot om erin te kijken. Doe niets om de vogels kwaad te doen: wilde vogels zijn in Nederland beschermd. En spuit het dak niet met een hogedrukreiniger schoon, want dat beschadigt de pannen.`,
      ] },
      { kop: `Wat je wel kunt doen`, tekst: [
        `Veeg de plukken van je stoep en terras en gooi ze bij het gft. Kijk vanaf de straat of de goot vol ligt. Zie je mos of gras boven de rand uitsteken, of loopt het water bij een bui over de rand, laat hem dan leegmaken. Liggen er veel plukken in je tuin, dan zit er vaak ook veel in de goot. Hoe vaak je goot leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot van begin tot eind leeg, ook de uitloop naar de regenpijp, en de troep neem ik mee. Terwijl ik boven ben, kijk ik of er pannen scheef liggen of gebarsten zijn, en of de nok nog vast ligt. Zie ik iets, dan hoor je dat, en wat het kost voordat ik iets doe. Daken ontmossen doe ik zelf niet. Stuur me een foto van je dak en je goot vanaf de straat via WhatsApp. Zie <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Komen de kraaien terug?`, a: `Zolang er mos op je dak groeit, vaak wel, want daar vinden ze hun eten. Het gebeurt vooral in de herfst, de winter en het vroege voorjaar. Is het mos weg, dan valt er voor ze weinig meer te halen.` },
      { v: `Kunnen kraaien mijn dakpannen kapotmaken?`, a: `In de regel niet. Ze trekken het mos los en laten de pannen liggen. Zie je na zo'n ochtend toch een pan die scheef ligt of een stuk pan op de stoep, stuur me dan een foto van je dak vanaf de straat. Dan kijk ik of er iets gemaakt moet worden.` },
      { v: `Helpt vogelwering tegen kraaien op mijn dak?`, a: `Vogelwering onder de onderste rij pannen houdt vogels tegen die onder je pannen willen nestelen, zoals mussen en spreeuwen. Kraaien en kauwen die bovenop het dak in het mos zoeken, houd je daar niet mee weg. Wat wel helpt, is zorgen dat je goot en de uitloop vrij blijven, zodat het mos dat ze losmaken het water niet tegenhoudt.` },
    ],
  },
  {
    slug: `mastgoot-lekt`,
    datum: `2026-11-16`,
    titel: `Mastgoot lekt: wat nu?`,
    h1: `Je mastgoot lekt: de houten goot op klossen voor de gevel, en wat eraan te doen is`,
    metaTitle: `Mastgoot lekt: zink, naad of hout? | Spoed Dak Service`,
    metaDescription: `Een mastgoot is een houten goot op klossen voor de gevel, met zink erin. Lekt hij, dan wordt vaak eerst het hout nat. Zo zie je waar het zit en wat je doet.`,
    intro: `Bij veel oudere huizen hangt de goot niet aan beugels, maar ligt hij als een houten bak op klossen die onder de rand van het dak uitsteken. Dat heet een mastgoot. Aan de binnenkant zit meestal zink. Lekt dat zink, dan merk je het vaak niet aan een druppel, maar aan het hout: bladderende verf, donkere plekken of een goot die zakt. Hieronder lees je hoe je een mastgoot herkent, waar hij meestal lekt en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het binnen?`, tekst: [
        `Komt er water binnen, bovenin de muur of langs het plafond van de kamer aan de straatkant, zet dan een emmer of handdoek neer en haal spullen weg. Zet in de meterkast de groep uit als het bij een lamp of stopcontact nat wordt. Zet geen ladder tegen de goot, want een mastgoot met zacht hout kan dat niet hebben. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Mastgoot, bakgoot of hanggoot?`, tekst: [
        `Een hanggoot hangt aan beugels onder de onderste rij pannen. Een bakgoot ligt in de rand van het dak, achter een houten lijst, en die zie je van buiten bijna niet. Een mastgoot zit daartussenin: een houten goot die voor de gevel uitsteekt en op houten klossen rust. Aan de binnenkant zit meestal zink, soms dakleer. Vanaf de straat zie je hem als een brede houten rand onder het dak, vaak in de kleur van de kozijnen geschilderd. Twijfel je wat je hebt, stuur dan een foto van de dakrand vanaf de overkant van de straat. Zie ook <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Waar een mastgoot meestal lekt`, tekst: [
        `Bij een naad of hoek in het zink. Zink zet uit als het warm is en krimpt als het koud is, en na veel jaren laat een soldeernaad los. Zie <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `Bij de uitloop naar de regenpijp. Daar blijft blad hangen, het water komt hoger te staan en vindt een weg langs de aansluiting.`,
        `Op een dunne plek in de bodem. Waar jaren blad en water in de goot hebben gelegen, wordt het zink dun en komen er kleine gaatjes in.`,
        `Waar de goot zakt. Wordt een klos of de bodem van de houten bak zacht, dan zakt de goot een stukje. Daar blijft na elke bui water staan, en daar slijt het zink het snelst.`,
      ] },
      { kop: `Waarom het hout erbij hoort`, tekst: [
        `Bij een mastgoot draagt het hout de goot. Loopt er water achter het zink, dan trekt het in de houten bak en de klossen. Dat zie je aan verf die bladdert, donkere of groene plekken onder de goot en hout dat zacht aanvoelt. Hoe langer het lek blijft zitten, hoe meer hout er nat wordt. Een nieuw stuk zink in een rotte bak houdt het niet lang. Daarom kijk ik bij een lekkende mastgoot ook naar het hout eronder.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit of teer over een lekke naad. Op nat of vuil zink hecht het slecht, en het moet er weer helemaal af voordat de naad gesoldeerd kan worden. Schilder ook niet over hout dat nat of zacht is, want dan sluit je het vocht in. En ga niet op een ladder tegen de goot staan om te kijken.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot leeg en kijk over de hele lengte naar het zink, de naden, de uitloop en het hout. Lekt het op één naad of hoek en is het zink verder stevig, dan soldeer ik die naad opnieuw. Lekt het zink op meer plekken een beetje, maar is de goot nog stevig, dan kan de binnenkant gecoat worden. Is het zink op, dan zeg ik eerlijk dat er nieuw zink in moet. Is het hout van de bak of een klos zacht, dan hoor je dat van me voordat er iets gebeurt, want dat moet eerst goed zijn. Je hoort vooraf wat het kost. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-coaten/">dakgoot van binnen coaten</a>.`,
      ] },
      { kop: `Monument of beschermd stadsgezicht`, tekst: [
        `Een mastgoot hoort bij het uiterlijk van veel oude huizen. Staat je huis op de monumentenlijst of in een beschermd stadsgezicht, vraag dan bij de gemeente na wat mag voordat de goot anders wordt, bijvoorbeeld een kunststof goot in plaats van de houten mastgoot. Herstel met hetzelfde materiaal valt meestal onder gewoon onderhoud. Zie ook <a href="/kennisbank/dak-monument-repareren/">je dak repareren in een monument</a> en <a href="/kennisbank/jaren-30-huis-dak-lekt/">het dak van een jaren 30-huis</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot solderen`, href: `/diensten/dakgoot-solderen/` },
    faq: [
      { v: `Hoe weet ik of ik een mastgoot heb?`, a: `Kijk vanaf de overkant van de straat naar de rand van je dak. Zie je onder de pannen een brede houten rand die een stukje voor de gevel uitsteekt en op houten blokjes rust, dan is het meestal een mastgoot. Hangt er een ronde of hoekige goot aan beugels, dan is het een hanggoot. Zie je bijna geen goot, alleen een houten lijst, dan ligt hij vaak als bakgoot in de dakrand. Stuur me gerust een foto.` },
      { v: `Moet een lekkende mastgoot er helemaal uit?`, a: `Meestal niet. Vaak is één naad opnieuw solderen genoeg, of kan de binnenkant gecoat worden als het zink nog stevig is. Pas als het zink op veel plekken op is of het hout van de bak zacht is, is er meer nodig. Dat zeg ik eerlijk als ik heb gekeken, en je hoort vooraf wat het kost.` },
      { v: `De verf van mijn mastgoot bladdert. Lekt hij dan?`, a: `Niet altijd, maar het is wel een reden om te laten kijken. Bladdert de verf vooral onder een naad, een hoek of bij de uitloop, of is het hout daar donker, dan loopt er vaak water achter het zink. Laat de goot eerst nakijken en zo nodig herstellen, en laat daarna de schilder komen. Anders bladdert de nieuwe verf er zo weer af.` },
    ],
  },
  {
    slug: `dakgoot-lekt-in-de-hoek`,
    datum: `2026-11-17`,
    titel: `Dakgoot lekt in de hoek?`,
    h1: `Dakgoot lekt in de hoek: waarom juist daar, en wat eraan te doen is`,
    metaTitle: `Dakgoot lekt in de hoek: wat nu? | Spoed Dak Service`,
    metaDescription: `Druppelt je dakgoot op de hoek van het huis, of is het binnen nat in de hoek van de kamer? Waarom een goot juist in de hoek lekt en hoe hij weer dicht komt.`,
    intro: `Een dakgoot lekt vaak niet in het midden, maar precies op de hoek van het huis. Daar komen twee stukken goot samen, en bij een binnenhoek komt daar ook het water van twee dakvlakken tegelijk naar beneden. Je ziet het aan een druppel die na een bui op de hoek blijft vallen, aan een donkere streep op de hoek van de gevel of aan een natte plek binnen, in de hoek van de kamer vlak onder het plafond. Hieronder lees je waarom een goot juist daar lekt, wat je zelf doet en hoe ik hem weer dichtmaak.`,
    secties: [
      { kop: `Is het binnen nat?`, tekst: [
        `Wordt het binnen nat, in de hoek van de kamer of op het plafond langs de buitenmuur, zet dan een bak of handdoek neer en schuif kasten een stukje van de muur. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf met een ladder bij de goot staan, zeker niet als het nat is of waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Buitenhoek of binnenhoek`, tekst: [
        `Een buitenhoek zit op de hoek van je huis, waar de goot aan de voorkant overgaat in de goot langs de zijkant. Dat zie je vaak bij een hoekhuis, een vrijstaand huis of een twee-onder-een-kap.`,
        `Een binnenhoek zit waar twee daken in een hoek tegen elkaar komen, bijvoorbeeld bij een huis in L-vorm of waar een aanbouw met een eigen dak tegen het huis staat. Daar komt het water van twee dakvlakken op één punt in de goot samen. Ligt er daarboven een kil, dan valt daar bij een bui nog meer water. Zie ook <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Waarom juist de hoek lekt`, tekst: [
        `Bij een zinken goot is de hoek gemaakt van twee stukken zink die aan elkaar zijn gesoldeerd. Zink zet uit als het warm wordt en krimpt als het koud is, en in een hoek trekt het daarbij in twee richtingen aan dezelfde naad. Na veel jaren laat zo'n soldeernaad los of komt er een haarscheurtje naast. Hoe je een lekkende zinken goot verder herkent, lees je in <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `Bij een kunststof goot zit op de hoek een los hoekstuk, waar de twee stukken goot in steken. Dat is gelijmd of heeft een rubber. Na jaren droogt het rubber uit of laat de lijm los, en bij vorst kan een stuk goot een eindje uit het hoekstuk schuiven. Zie ook <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a>.`,
        `De hoek is ook vaak de plek waar een goot het eerst gaat hangen. Mist er vlak bij de hoek een beugel, of is het hout erachter zacht, dan zakt de hoek een stukje. Daar blijft na elke bui water staan, en waar water blijft staan, gaat een naad het eerst lekken. Bij een houten goot op klossen kijk je dus ook naar het hout, zie <a href="/kennisbank/mastgoot-lekt/">mastgoot lekt</a>.`,
      ] },
      { kop: `Overloop of echt lek?`, tekst: [
        `Loopt het water bij een flinke bui over de rand van de hoek, terwijl het na de bui droog is? Dan kan de goot daar het water niet snel genoeg kwijt, vaak omdat er blad ligt of omdat de regenpijp ver van de hoek zit. Druppelt het ook nog een hele tijd na de bui op precies dezelfde plek, of zie je onder de hoek een donkere of groene streep op de gevel, dan is de hoek zelf lek. Kijk tijdens een bui vanaf de straat of uit een raam boven, en maak een foto of een kort filmpje. Lees ook <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Smeer geen kit over een lekke hoek. Op een natte of vuile goot hecht het slecht, het houdt meestal niet lang, en bij een zinken goot moet het er weer helemaal af voordat de hoek gesoldeerd kan worden. Zet ook geen ladder tegen de hoek van de goot: daar is de goot het zwakst, en een kunststof hoekstuk kan breken. Wat je tot de reparatie wel kunt doen, lees je in <a href="/kennisbank/lekkende-dakgoot-tijdelijk-oplossen/">lekkende dakgoot tijdelijk oplossen</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de hoek eerst leeg en droog, en kijk dan wat er lek is. Een zinken hoek met een losse naad soldeer ik opnieuw. Is het zink rond de hoek op meer plekken dun, maar hangt de goot nog goed, dan kan ik hem van binnen coaten. Is het zink op, dan vervang ik de hoek of dat stuk goot. Bij een kunststof goot vervang ik het hoekstuk of het rubber. Hangt de hoek te laag, dan zet ik hem eerst weer op afschot, met een extra beugel als dat nodig is. Solderen en coaten kan alleen op een droge goot, dus bij regen of vorst wacht ik op een droge dag. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er lek is: een naad solderen, een hoekstuk vervangen of een stuk goot vernieuwen. Stuur een foto van de hoek vanaf de straat en, als het binnen nat is, ook van de natte plek. Dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot solderen`, href: `/diensten/dakgoot-solderen/` },
    faq: [
      { v: `Waarom lekt mijn dakgoot alleen op de hoek?`, a: `Omdat daar twee stukken goot aan elkaar zitten. Bij zink is dat een soldeernaad, bij kunststof een hoekstuk met lijm of een rubber. Die verbinding krijgt het meest te verduren van warmte, kou en vorst, en een hoek zakt ook vaak als eerste een stukje. Vaak hoeft alleen de hoek gemaakt te worden en kan de rest van de goot blijven.` },
      { v: `Het is nat in de hoek van mijn slaapkamer, vlak onder het plafond. Kan dat van de goot komen?`, a: `Ja, zeker als er buiten op die hoek van het huis een hoek van de goot zit. Lekt die, dan loopt het water langs de muur naar binnen en zie je het binnen precies in de hoek. Het kan ook van de onderste pannen of de dakrand komen. Kijk tijdens een bui buiten naar die hoek, en stuur me een foto van binnen en van buiten. Meer lees je in het artikel over een natte plek bovenin de muur.` },
      { v: `Moet de hele goot eruit als de hoek lekt?`, a: `Meestal niet. Is de rest van de goot nog stevig, dan soldeer ik de hoek opnieuw of vervang ik alleen het hoekstuk. Lekt de goot ook op andere plekken of is het zink overal dun, dan zeg ik eerlijk dat een nieuwe goot slimmer is. Je hoort vooraf wat het kost.` },
      { v: `Is een lekkende hoek van de goot spoed?`, a: `Meestal niet, zolang het buiten druppelt. Laat het wel maken voor de winter, want water dat in de hoek blijft staan, bevriest en drukt de naad verder open. Komt het water binnen of hangt de hoek los boven de stoep, dan wel: zet een bak neer en bel of app me met een foto.` },
    ],
  },
  {
    slug: `lekkage-meterkast-bij-regen`,
    datum: `2026-11-17`,
    titel: `Water in je meterkast als het regent?`,
    h1: `Water in je meterkast als het regent: komt het van het dak, de goot of van onderen?`,
    metaTitle: `Water in de meterkast bij regen? | Spoed Dak Service`,
    metaDescription: `Nat in je meterkast na een bui? Eerst veilig blijven, dan uitzoeken waar het vandaan komt: het afdakje boven de voordeur, de goot, het dak of van onderen.`,
    intro: `Na een flinke bui staat er een plasje onder de meters, loopt er een natte streep langs de kabels of druppelt het bij de groepenkast. Dat wil je snel opgelost hebben, want in de meterkast komt de stroom van je hele huis samen. Het goede nieuws: het water komt meestal langs een vaste route binnen, en die is goed te vinden. Hieronder lees je wat je eerst doet, welke routes er zijn en wie welk deel oplost.`,
    secties: [
      { kop: `Eerst veilig`, tekst: [
        `Raak in een natte meterkast niets aan met natte handen en ga niet in een plas staan. Kun je de hoofdschakelaar bereiken zonder natte onderdelen aan te raken, zet hem dan uit. Lukt dat niet veilig, ruik je een brandlucht of zie je vonken, ga dan weg bij de kast en bel je netbeheerder. Het storingsnummer staat vaak in de meterkast of op de site van je netbeheerder. Is er direct gevaar, bel dan 112.`,
        `Leg daarna een handdoek neer of zet een bak onder de druppel, en laat een installateur de groepenkast nakijken voordat de stroom weer aangaat. Wat je verder meteen doet bij een lek, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Boven, langs de kabels of op de vloer?`, tekst: [
        `Kijk met een zaklamp waar het water het eerst te zien is. Is de muur bovenin nat, of loopt er een streep langs de kabels of buizen naar beneden, dan komt het van boven. Is alleen de vloer nat, terwijl de muren en de kabels erboven droog zijn, dan komt het eerder van onderen. Maak een foto van de natte plek en vergelijk die na de volgende bui.`,
        `Let ook op wanneer het nat wordt. Alleen tijdens of vlak na regen wijst naar buiten. Ook na een paar dagen zonder regen wijst eerder naar een leiding, bijvoorbeeld bij de watermeter of een afvoer van de wc of badkamer erboven. Dan heb je een loodgieter nodig. Zie <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a>`,
      ] },
      { kop: `Het afdakje boven de voordeur`, tekst: [
        `In veel rijtjeshuizen en twee-onder-een-kappers zit de meterkast in de hal, vlak naast de voordeur. Boven die deur zit vaak een afdakje of luifel, en waar dat dakje tegen de gevel komt, ligt een strook lood of zink die het water van de muur over het dakje leidt. Komt die strook los, scheurt hij in een hoek of is de bedekking van het dakje zelf kapot, dan loopt het water de muur in. Het zakt naar beneden en komt vaak juist in de meterkast naar buiten, omdat daar kabels en buizen door de muur gaan.`,
        `Zie je ook bladderende verf boven de voordeur, of een donkere streep op de gevel boven het dakje, dan is dit een goede kandidaat. Lees ook <a href="/kennisbank/erker-lekt/">erker of luifel lekt</a>.`,
      ] },
      { kop: `De goot en de regenpijp aan de voorkant`, tekst: [
        `Loopt de goot aan de voorkant over, of lekt hij bij een naad of de uitloop, dan komt er bij een bui veel water tegen de gevel boven je voordeur. Dat kan via de muur of het kozijn naar binnen trekken. Zit de regenpijp naast de voordeur, of loopt hij binnen door een koker in de hal, kijk dan ook naar de verbindingen van die pijp. Zie <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a> en <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>.`,
      ] },
      { kop: `Vanaf het dak, langs een pijp of kabel`, tekst: [
        `Soms loopt er vanaf zolder iets naar beneden langs of door de meterkast: een ontluchtingspijp, of de kabel van de omvormer van je zonnepanelen naar de groepenkast. Komt er boven water binnen waar zo'n pijp of kabel door het dak gaat, dan kan het daar helemaal langs naar beneden lopen. Kijk op zolder of de pijp of de kabel daar ook nat is. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a> en <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a>.`,
      ] },
      { kop: `Van onderen: de kabels uit de straat`, tekst: [
        `De kabels en leidingen van de straat komen meestal onder in de meterkast binnen, door buizen in de vloer of de fundering. Na veel regen, als de grond nat is, kan daar water langs naar binnen komen. Je ziet dat aan een natte vloer of een natte onderkant van de kast, terwijl alles erboven droog is. Dat is geen werk voor een dakdekker. Meld het bij je netbeheerder of laat een installateur kijken.`,
      ] },
      { kop: `Condens op de koude leidingen`, tekst: [
        `Op warme, vochtige dagen kan er condens op de koude waterleiding en de watermeter staan. Dat zijn druppels op de pijp zelf, ook als het niet regent. Dat is geen lek en heeft niets met je dak te maken.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me via WhatsApp een foto van de natte plek in de meterkast, een foto van je voorgevel vanaf de overkant van de straat, met het afdakje en de goot erop, en zeg erbij of het alleen bij regen nat wordt. Ter plekke kijk ik naar de strook langs de gevel, het afdakje, de goot en, als het nodig is, op zolder en op het dak. Zit het in het lood, het dakje of de goot, dan maak ik dat dicht. Zit het in de leidingen, de groepenkast of de kabels uit de straat, dan zeg ik dat eerlijk, zodat je de goede vakman belt. Aan de stroom zelf kom ik niet. Je hoort vooraf wat het kost. Zie <a href="/kennisbank/water-uit-stopcontact-bij-regen/">water uit je stopcontact als het regent</a> als het ook bij een stopcontact nat is.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Is water in de meterkast gevaarlijk?`, a: `Het kan gevaarlijk zijn, want in de meterkast komt de stroom van je hele huis samen. Raak niets aan met natte handen, ga niet in het water staan en zet de hoofdschakelaar alleen uit als je erbij kunt zonder natte onderdelen aan te raken. Bel bij twijfel je netbeheerder en bij direct gevaar 112. Laat een installateur de kast nakijken voordat de stroom weer aangaat.` },
      { v: `Wie bel ik: de netbeheerder, een installateur of een dakdekker?`, a: `Vaak meer dan één. Een installateur voor de veiligheid en de groepenkast, en je netbeheerder bij gevaar of als het water van onderen langs de kabels uit de straat komt. Komt het water van boven, langs de muur of de kabels, en alleen als het regent, dan zit de oorzaak vaak in het afdakje boven de voordeur, de goot of het dak. Daarvoor kun je mij bellen of appen.` },
      { v: `Kan het condens zijn?`, a: `Ja. Zie je druppels op de koude waterleiding of de watermeter, ook als het niet heeft geregend, dan is het meestal condens en geen lek. Wordt het alleen nat bij regen, of loopt er van boven een natte streep langs de muur of de kabels, dan komt het water eerder van buiten.` },
      { v: `Is water in de meterkast spoed?`, a: `Voor de stroom wel: zorg eerst dat het veilig is. Komt het water van boven en wordt het bij elke bui weer nat, stuur me dan meteen een foto. Is het een vochtige plek onderin de muur, ver van de groepenkast, die na de bui weer opdroogt, dan kan de reparatie vaak een paar dagen wachten.` },
    ],
  },
  {
    slug: `dak-jaren-90-huis-lekt`,
    datum: `2026-11-17`,
    titel: `Lekt het dak van je huis uit de jaren 90?`,
    h1: `Huis uit de jaren '80 of '90: waar het dak na al die jaren gaat lekken`,
    metaTitle: `Huis uit de jaren 90: waar lekt het dak? | Spoed Dak Service`,
    metaDescription: `Een huis uit de jaren '80 of '90 heeft vaak dakplaten, een droge nok, kunststof goten en meer pijpen door het dak. Zo zie je waar het na al die jaren lekt.`,
    intro: `Huizen uit de jaren '80 en '90 zijn anders gebouwd dan de rijtjes van daarvoor. Onder de pannen liggen vaak grote dakplaten met isolatie, de nok ligt steeds vaker droog met klemmen in plaats van in specie, en er gaan meer pijpen door het dak, voor de cv-ketel, het riool en de ventilatie. De pannen zelf zijn op zulke daken vaak nog goed. Een lek zit dan meestal bij een aansluiting. Hieronder lees je waar, hoe je het herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Druppelt het nu?`, tekst: [
        `Vang het water op met een emmer, schuif spullen opzij en zet in de meterkast de groep van die kamer uit als het water bij een lamp of stopcontact komt. Blijf zelf van het dak af, ook als het droog lijkt. Op de <a href="/spoed/">spoedpagina</a> lees je wat je verder meteen kunt doen.`,
      ] },
      { kop: `Hoe zo'n dak in elkaar zit`, tekst: [
        `Bij veel huizen uit die tijd liggen de pannen op latten op grote dakplaten. Zo'n plaat heeft isolatie in het midden en is aan de binnenkant afgewerkt, dus op zolder zie je vaak geen losse planken of folie, maar een glad vlak tussen de balken. Water dat onder de pannen komt, loopt over de bovenkant van die platen naar beneden en komt vaak pas binnen bij een naad tussen twee platen, of helemaal onderaan bij de goot. De natte plek zit dan een eind van het lek af.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Pijpen door het dak. Op een huis uit die tijd steken er vaak meerdere door de pannen, zoals de ontluchting van het riool, de afvoer van de cv-ketel en de afvoer van de mechanische ventilatie. Om elke pijp zit op het dak een kraag op een speciale pan. Na jaren zon en vorst is het rubber daarvan vaak hard of gescheurd. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
        `Het dakraam. Veel van deze huizen hebben een of meer dakramen in het schuine dak. Lekt het onder of naast het raam, dan zit het vaak in het gootstuk of in de aansluiting op de pannen erboven, en minder vaak in het raam zelf. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `De droge nok. Ligt je nok niet in specie, dan zit er onder de vorsten een strook die de nok dichthoudt, en elke vorst zit met een klem vast. Raakt bij een storm een klem los of scheurt die strook, dan kan regen met wind eronder komen. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `De kunststof goot. Goten uit die tijd zijn vaak van kunststof, met hoekstukken en verbindingen die gelijmd zijn of een rubber hebben. Na zoveel jaren laat zo'n verbinding los. Zie <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a> en <a href="/kennisbank/dakgoot-lekt-in-de-hoek/">dakgoot lekt in de hoek</a>.`,
        `Wat er later bij kwam. Zonnepanelen, de kabel naar de omvormer of de leidingen van een airco of warmtepomp gaan soms onder een pan door of door een pan die daarvoor is aangepast. Ligt die pan niet goed, dan loopt het water erlangs. Zie <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a> en <a href="/kennisbank/lekkage-warmtepomp-of-airco/">lekkage sinds de warmtepomp of airco</a>.`,
      ] },
      { kop: `Lek of condens?`, tekst: [
        `Huizen uit die tijd zijn beter geïsoleerd en dichter dan oudere huizen. Staat de ventilatie laag of uit, dan blijft er meer vocht binnen, en dat kan op koude dagen neerslaan op een koude plek: bij een naad tussen de dakplaten, op een koude pijp of onder een dakraam. Wordt het nat op koude ochtenden, ook als het dagen droog is, dan is het eerder condens. Wordt het alleen nat bij regen, of bij wind uit dezelfde hoek, dan is het eerder een lek. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Woon je in Maaspoort of Empel in Den Bosch, in de Reeshof in Tilburg of in de Haagse Beemden in Breda, dan staat je huis in een wijk die grotendeels vanaf de jaren '80 is gebouwd. Hoe ik een lek daar aanpak, lees je bij <a href="/werkgebied/den-bosch/daklekkage/">daklekkage in Den Bosch</a>, <a href="/werkgebied/tilburg/daklekkage/">daklekkage in Tilburg</a> en <a href="/werkgebied/breda/daklekkage/">daklekkage in Breda</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water binnenkomt en volg het naar boven, en daarna buiten naar de pijp, het raam, de nok of de goot erboven. Een uitgedroogde kraag vervang ik, een losse vorst zet ik weer vast, een kunststof verbinding vernieuw ik en de aansluiting rond een dakraam maak ik weer dicht. Meestal blijft de rest van het dak gewoon liggen. Zie <a href="/diensten/dakreparatie/">spoed dakreparatie</a> en <a href="/diensten/dakdoorvoer/">dakdoorvoer plaatsen of herstellen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er lek is: een kraag, een vorst, een verbinding in de goot of de aansluiting van een dakraam. Stuur een foto van de natte plek en van je dak vanaf de straat, dan hoor je vooraf wat het in jouw geval kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Mijn huis is nog niet zo oud. Moet het dak er dan al af?`, a: `Meestal niet. Op daken uit de jaren '80 en '90 zijn de pannen vaak nog goed. Wat na zoveel jaren op raakt, zijn de dingen eromheen: het rubber rond de pijpen, de aansluiting van een dakraam en de verbindingen van een kunststof goot. Die vervang ik los. Stuur me een foto van je dak vanaf de straat, dan zeg ik eerlijk wat ik zie.` },
      { v: `Hoe weet ik of mijn nok droog ligt of in specie?`, a: `Kijk vanaf de straat met de zoom van je telefoon naar de nok. Zie je tussen de vorsten en de pannen grijze specie, dan ligt hij in specie. Zie je daar een strook in een kleur die bij de pannen past, en geen specie, dan ligt hij droog met klemmen. Ligt er brokkelige specie in de goot, dan is het een nok in specie die los begint te raken.` },
      { v: `Het druppelt alleen op koude ochtenden bij een pijp op zolder. Is dat een lek?`, a: `Vaak niet. Een pijp van de ventilatie of het riool die over een koude zolder loopt, wordt zelf koud, en vocht uit huis slaat erop neer. Dat zie je ook als het droog is. Druppelt het alleen bij regen en begint de natte plek bovenaan bij het dak, dan is het eerder de kraag rond de pijp. Twijfel je, stuur me dan een foto.` },
    ],
  },
  {
    slug: `dak-lekt-na-dagen-regen`,
    datum: `2026-11-17`,
    titel: `Lekt je dak pas na dagen regen?`,
    h1: `Je dak lekt pas na een paar dagen regen: waar het water dan meestal vandaan komt`,
    metaTitle: `Dak lekt na dagen regen: waar zit het? | Spoed Dak Service`,
    metaDescription: `Blijft het droog bij een korte bui, maar wordt het nat na dagen regen? Dan trekt het water vaak langzaam naar binnen. Zo vind je waar het zit en wat je doet.`,
    intro: `Bij een korte bui blijft alles droog. Maar na een week met veel regen zie je ineens een natte plek op het plafond, op zolder of bovenin de muur. Dat is verwarrend, want het dak lijkt dan niet echt lek. Meestal komt het water er bij zo'n lange natte periode niet door een open kier. Het trekt langzaam ergens doorheen, of iets loopt pas na dagen over. Hieronder lees je waar dat meestal zit, hoe je het zelf nagaat en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op, zeker niet als het nat is of waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom pas na dagen?`, tekst: [
        `Een korte bui is voorbij voordat het water ergens doorheen kan trekken. Bij dagen achter elkaar regen krijgen pannen, stenen en hout geen tijd om op te drogen. Dan raakt het materiaal zo nat dat het water er langzaam doorheen komt, of loopt een goot of afvoer die al half vol lag op een gegeven moment toch over. Dat is iets anders dan een lek dat alleen bij een stortbui of alleen bij harde wind optreedt. Die lees je bij <a href="/kennisbank/dak-lekt-bij-hevige-regen/">dak lekt bij een stortbui</a> en <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
      ] },
      { kop: `Oude pannen die water opnemen`, tekst: [
        `Pannen die al heel lang op het dak liggen, nemen na jaren meer water op. Bij een korte bui merk je daar niets van. Na dagen regen raken ze verzadigd, en dan komt er aan de onderkant vocht door. Op zolder zie je dan donkere plekken op het hout of druppels onder de pannen, vaak verspreid over een groter stuk en niet op één punt. Hoe je ziet of je pannen water opnemen, lees je bij <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
      ] },
      { kop: `De schoorsteen`, tekst: [
        `Een schoorsteen staat helemaal in de regen. Na dagen regen kunnen de stenen en de voegen zo nat worden dat het water er binnen doorheen komt, ook als het lood rond de voet nog goed is. Je ziet dat als een natte of bruine plek op de schoorsteen binnen, of op zolder langs het metselwerk. Lekt het daar ook bij een korte bui met wind, dan zit het vaker in het lood. Meer lees je bij <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
      ] },
      { kop: `Een goot of kilgoot die langzaam volloopt`, tekst: [
        `Ligt er blad in de goot of in de kilgoot, de hoek waar twee daken samenkomen, dan kan het water bij een korte bui nog net weg. Bij dagen regen blijft het steeds hoger staan, en op een gegeven moment loopt het over de rand onder de pannen of achter de goot langs de muur. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
      ] },
      { kop: `Een plas op het platte dak`, tekst: [
        `Op een plat dak blijft na een lange natte periode vaak een plas staan, zeker als de afvoer half dicht zit. Staat die plas dagen tegen een naad of de rand, dan vindt het water daar een weg naar binnen. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Of is het de muur?`, tekst: [
        `Zit de natte plek bovenin een buitenmuur, vlak onder het plafond, dan kan ook de gevel zelf het water na dagen regen doorlaten. Het lijkt dan op een daklek. Hoe je het verschil ziet, lees je bij <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>. Zit het in de stenen of de voegen, dan zeg ik dat eerlijk, want dat is werk voor een metselaar.`,
      ] },
      { kop: `Zo zoek je het zelf uit`, tekst: [
        `Schrijf op na hoeveel dagen regen het nat werd en uit welke hoek de wind kwam. Kijk tijdens of vlak na zo'n natte periode met een zaklamp op zolder waar het hout nat is: op één punt, langs de schoorsteen, in een hoek of verspreid onder de pannen. Kijk buiten vanaf de straat of de goot vol staat. Wordt het ook nat na een paar droge, koude dagen, dan is het eerder condens, zie <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van de natte plek, van zolder als dat kan en van je dak vanaf de straat, en zet erbij na hoeveel dagen regen het begon. Dan zoek ik eerst waar het water echt binnenkomt. Een volle goot of kilgoot maak ik leeg, losse of kapotte pannen vervang ik door pannen die passen, en lood dat los zit zet ik vast. Zijn de pannen op een heel dakvlak op, dan zeg ik eerlijk of vervangen slimmer is dan steeds één pan. Je hoort vooraf wat het kost. Zie ook <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Is het spoed als het pas na dagen regen lekt?`, a: `Druppelt het binnen, of zit de natte plek bij een lamp of stopcontact, bel of app me dan meteen. Is het een vochtige plek die niet groter wordt, dan kan het meestal een paar dagen wachten, maar laat het wel nakijken voordat de volgende natte periode komt. Een plek die steeds opnieuw nat wordt, maakt het hout en de isolatie op den duur kapot.` },
      { v: `Waarom zie ik op zolder geen gat, terwijl het toch nat wordt?`, a: `Omdat er vaak ook geen gat is. Water dat langzaam door een oude pan of door de stenen van de schoorsteen trekt, laat geen open plek achter. Je ziet alleen vocht of donkere plekken op het hout. Kijk tijdens een lange natte periode met een zaklamp waar het begint, en stuur me daar een foto van.` },
      { v: `Kan ik het zelf dichtsmeren met kit?`, a: `Liever niet. Trekt het water door een pan of door de stenen, dan zit het niet op één plek die je dicht kunt smeren. Kit op een natte pan hecht ook slecht, en je maakt het later juist lastiger om te zien waar het echt zit.` },
    ],
  },
  {
    slug: `dak-jaren-50-huis-lekt`,
    datum: `2026-11-17`,
    titel: `Lekt het dak van je huis uit de jaren 50?`,
    h1: `Huis uit de jaren '50: waar het dak na zeventig jaar lekt`,
    metaTitle: `Huis uit de jaren 50: waar lekt het dak? | Spoed Dak Service`,
    metaDescription: `Een jaren 50-huis heeft vaak een eigen schoorsteen, pannen zonder folie, een nok in specie en een zinken goot. Zo zie je waar het dak lekt en wat je doet.`,
    intro: `Na de oorlog moest er snel veel gebouwd worden. Daarom staan er in veel steden en dorpen hele straten met rijtjeshuizen en twee-onder-een-kappers uit de jaren '50: eenvoudig gebouwd, met een zadeldak, een eigen schoorsteen en vaak een zinken goot. Op een deel van die huizen ligt nog veel van het eerste dak. Na zoveel jaren lekt zo'n dak meestal op een paar vaste plekken. Hieronder lees je welke dat zijn, hoe je ze herkent en wanneer repareren nog genoeg is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Vang de druppels op met een emmer, leg een handdoek eronder en schuif spullen opzij. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op, want oude pannen breken als je erop staat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit zo'n dak in elkaar`, tekst: [
        `Kijk je op zolder omhoog, dan zie je bij veel van deze huizen direct de onderkant van de pannen of van een houten beschot, en geen folie. Dat hoort bij de bouw van toen. Het betekent wel dat er geen tweede laag is die water opvangt: ligt een pan scheef of is hij gebroken, dan druppelt het meestal vlak onder die plek naar binnen. Dat maakt zoeken makkelijker dan bij een nieuwer dak, maar elke bui komt ook meteen bij het hout. Op een deel van de daken liggen nog gebakken pannen, op andere al de eerste betonpannen. Zie ook <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De schoorsteen. De meeste huizen uit die tijd kregen een eigen schoorsteen voor een kolenkachel. Sinds de cv er is, staat hij er vaak voor niets, maar het lood rond de voet moet nog steeds het water tegenhouden. Scheurt dat lood in een hoek of komt het los van de steen, dan loopt de regen erachter naar binnen. Staat het kanaal bovenaan open, dan kan het er ook in regenen. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/vochtplek-schoorsteen-binnen/">vochtplek op de schoorsteen binnen</a>.`,
        `De plek waar de schoorsteen stond. Is de schoorsteen later weggehaald, dan is het gat in het dak met pannen dichtgelegd. Sluiten die niet goed aan op de pannen eromheen, dan lekt het jaren later precies daar. Zie <a href="/kennisbank/lekkage-weggehaalde-schoorsteen/">lekkage waar de schoorsteen stond</a>.`,
        `De nok. Op de meeste van deze daken zitten de vorsten met specie vast. Die specie wordt na zoveel winters bros, en bij een storm gaat er dan een vorst schuiven. Vind je brokjes specie op de stoep of in de goot, kijk dan vanaf de overkant van de straat of de rij vorsten nog recht ligt. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `De goot. Hangt er nog een zinken goot, of ligt de goot als bak in de rand van het dak, dan gaat na al die jaren vaak een naad of een hoek open, of is het zink dun geworden op de plek waar altijd blad lag. Binnen zie je dat bovenin de muur of langs het plafond. Is de goot al eens vervangen door kunststof, kijk dan bij de verbindingen. Zie <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `Een dakraam dat er later in kwam. Toen zolders kamers werden, kregen veel van deze huizen een dakraam. Lekt het eromheen, dan zit het meestal in het gootstuk of in de aansluiting op de pannen erboven. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `Het platte dak achter het huis. Achter veel van deze huizen kwam later een berging, schuur of aanbouw met een plat dak. Waar dat dak tegen de achtergevel aansluit, zit een strook lood of zink, en daar komt het water het eerst langs. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Let op met asbest`, tekst: [
        `In huizen uit de jaren '50 tot en met de jaren '80 kan asbest zijn gebruikt, bijvoorbeeld in golfplaten op de schuur, in platen onder de dakrand of in een oud rookkanaal. Twijfel je of iets asbest is, boor of zaag er dan niet in en breek het niet af. Laat het eerst onderzoeken. Asbest weghalen is werk voor een bedrijf dat daarvoor gecertificeerd is. Zie ook <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `In Den Bosch staan zulke naoorlogse rijtjes onder andere in de Kruiskamp en Boschveld. Hoe ik een lek daar aanpak, lees je bij <a href="/werkgebied/den-bosch/daklekkage/">daklekkage in Den Bosch</a>. In Waalwijk staan rond het oude centrum veel rijtjeshuizen en twee-onder-een-kappers uit de jaren '50 en '60, zie <a href="/werkgebied/waalwijk/dakrenovatie/">dakrenovatie in Waalwijk</a>.`,
      ] },
      { kop: `Repareren of het dak vernieuwen?`, tekst: [
        `Gaat het om één pan, één vorst of een stuk lood, dan is een reparatie genoeg en kan de rest van het dak blijven liggen. Wordt het elk jaar ergens anders nat, breken de pannen na elke vorstperiode en zit de nok over de hele lengte los, dan is steeds plakken op den duur vaak duurder dan een dakvlak in één keer vernieuwen. In een rij kan dat ook voor alleen jouw huis, met een nette overgang naar de buren. Kies je voor vernieuwen, dan kan er op wens folie en kunnen er nieuwe panlatten onder de pannen. Lees <a href="/kennisbank/dak-vernieuwen-rijtjeshuis/">je dak vernieuwen in een rijtjeshuis</a> en <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Eerst kijk ik op zolder, want bij een dak zonder folie zie je daar vaak precies waar het water binnenkomt. Daarna kijk ik buiten naar die plek. Los of gescheurd lood zet ik vast of vervang ik, meestal met loodvervanger en met echt lood als je dat liever hebt. Losse vorsten zet ik vast, en is de specie over de hele nok op, dan smeer ik de nok opnieuw aan. Een gebroken pan vervang ik door een pan die past in vorm en kleur, zie <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>. Een open naad in een zinken goot soldeer ik. Zijn de stenen of voegen van de schoorsteen zelf slecht, dan zeg ik dat eerlijk, want daarvoor heb je een metselaar nodig. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er lek is: een pan, een vorst, het lood of een naad in de goot. Stuur via WhatsApp een foto van de natte plek en van je dak vanaf de overkant van de straat, dan hoor je vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Er wordt al jaren niet meer gestookt in mijn schoorsteen. Moet hij dan nog nagekeken worden?`, a: `Ja, want ook een schoorsteen waarin niet meer gestookt wordt, staat nog gewoon in de regen. Het lood rond de voet en de bovenkant van het kanaal blijven plekken waar water naar binnen kan. Kijk vanaf de straat met de zoom van je telefoon of het lood nog strak tegen de steen ligt en of de bovenkant van de schoorsteen dicht of afgedekt is. Zie je binnen een bruine of natte plek op de schoorsteen, stuur me dan een foto van die plek en een van de schoorsteen buiten.` },
      { v: `Ik huur een huis uit de jaren '50 en het dak lekt. Wat doe ik?`, a: `Meld het eerst bij je verhuurder, want die regelt in de regel de reparatie van het dak. Zet tot die tijd een emmer onder de druppel, haal spullen weg en maak foto's van de natte plek met de datum erbij. Druppelt het bij een lamp of stopcontact, zet dan de groep in de meterkast uit en zeg dat er meteen bij als je het lek meldt. Meer lees je in het artikel over lekkage in een huurhuis.` },
      { v: `Kan ik het dak van een jaren 50-huis laten nakijken voordat ik het koop?`, a: `Ja. Met de Dak-APK loop ik het hele dak na en krijg je een rapport met foto's. Bij een huis uit de jaren '50 kijk ik vooral naar het lood rond de schoorsteen, de nok, de pannen en de goot. Vraag wel eerst toestemming aan de verkoper, want ik moet op het dak en op zolder kunnen kijken. Meer lees je in het artikel over je dak laten keuren als je een huis koopt.` },
    ],
  },
  {
    slug: `schimmel-op-zolder`,
    datum: `2026-11-17`,
    titel: `Schimmel op zolder: lek of condens?`,
    h1: `Schimmel op je zolder of tegen het dakbeschot: komt het door een lek of door condens?`,
    metaTitle: `Schimmel op zolder: lek of condens? | Spoed Dak Service`,
    metaDescription: `Zwarte plekken of schimmel op zolder? Waar de schimmel zit, zegt of het van een daklek komt of van vocht uit je eigen huis. Zo zie je het verschil.`,
    intro: `Je komt op zolder en ziet zwarte puntjes op het hout, grijze plekken op de platen, of er hangt een muffe lucht. Dan wil je weten: lekt mijn dak, of is het iets anders? Schimmel groeit waar het lang vochtig blijft. Dat vocht kan van buiten komen, door een lek, of van binnen, door warme, vochtige lucht uit je huis die tegen het koude dak afkoelt. Waar en hoe de schimmel zit, vertelt meestal welke van de twee het is. Hieronder lees je hoe je dat ziet en wat je doet.`,
    secties: [
      { kop: `Eerst: is het nu nat?`, tekst: [
        `Voel of het hout of de plaat nu nat is, of alleen verkleurd en droog. Druppelt het, of is er een natte kring die na een bui groter wordt, zet dan een bak onder de plek en kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen. Is alles droog en zie je alleen oude vlekken, dan heb je tijd om rustig uit te zoeken waar het vandaan komt.`,
      ] },
      { kop: `Op één plek, met een kring eromheen`, tekst: [
        `Zit de schimmel op één plek, vaak met een bruine of gele rand, en wordt die plek na een bui donker of nat? Dan komt er waarschijnlijk water van buiten. Kijk recht boven die plek en ook iets hoger, want water loopt onder de pannen vaak een stuk naar beneden voordat het binnenkomt. Bekende plekken zijn rond de schoorsteen, bij een pijp door het dak, rond een dakraam, onder de nok en bij de onderste rij pannen boven de goot. Hoe je het lek zelf vindt, lees je bij <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Verspreid over een groot stuk`, tekst: [
        `Zie je fijne zwarte puntjes verspreid over een groot deel van het dakbeschot of de platen, en is het ook op droge dagen vochtig? Dan is het meestal condens. Warme lucht uit je huis neemt vocht mee naar boven. Op een koude nacht slaat dat vocht neer tegen de koudste plek: de onderkant van het dak. Dat gebeurt vaak het meest aan de kant die op het noorden ligt en hoog onder de nok. Blijft dat steeds terugkomen, dan gaat er schimmel groeien. Meer over het verschil lees je bij <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Waar het vocht vaak vandaan komt`, tekst: [
        `Een wasdroger op zolder zonder afvoer naar buiten, of was die op zolder hangt te drogen. Een badkamer of douche op zolder zonder goede afzuiging. Een zolderluik dat niet goed sluit, zodat de warme lucht van de overloop naar boven trekt. Roosters of ventilatiepannen die zijn dichtgemaakt. En een dak dat net van binnen is geïsoleerd, waarbij de warme kant niet goed is afgesloten. Zie ook <a href="/kennisbank/lekt-sinds-dakisolatie/">lekt het sinds je dak is geïsoleerd?</a>`,
      ] },
      { kop: `Hoeken en het knieschot`, tekst: [
        `Achter het knieschot en in de hoeken bij de onderkant van het dak is het koud en komt weinig lucht. Daar groeit schimmel het eerst, door condens, maar ook als er water van de onderste rij pannen of van een volle goot naar binnen komt. Is de vloer daar nat of ligt er na een bui een plas, dan is het eerder een lek. Lees <a href="/kennisbank/nat-achter-knieschot/">nat achter het knieschot</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Ga de schimmel niet wegpoetsen en overschilderen zolang je niet weet waar het vocht vandaan komt. Dan lijkt het weg, maar het vocht blijft, en hout dat steeds nat is, kan gaan rotten. Maak ook geen roosters of ventilatiepannen dicht om de kou buiten te houden, want dan blijft het vocht juist binnen. Haal je zelf wat schimmel weg, zet dan een raam open en draag een stofmasker.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me via WhatsApp een foto van de schimmel, van dichtbij en van een afstand, en zeg erbij of de plek na een bui natter wordt. Lijkt het op een lek, dan zoek ik waar het water binnenkomt en maak ik dat dicht, bijvoorbeeld bij een pan, het lood rond de schoorsteen of de kraag rond een pijp. Is het condens, dan zeg ik dat eerlijk. Dan ligt de oplossing binnen, bij ventilatie en vocht, en daarvoor vraag je een isolatie- of ventilatiebedrijf om advies. Isoleren doe ik zelf niet. Is het hout door een oud lek zacht geworden, dan hoor je dat van me. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Gaat het om een lek, dan hoor je vooraf wat het opsporen en dichtmaken kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>. Is het condens, dan hoef je mij niet te laten komen.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Is schimmel op zolder erg?`, a: `Een paar zwarte puntjes op het hout zijn niet meteen een probleem voor je huis, maar het is wel een teken dat het daar te lang vochtig is. Blijft het jaren zo, dan kan het hout gaan rotten. Slaap je op zolder of heb je last van je luchtwegen, laat het dan niet zitten. Zoek eerst uit of het van een lek of van condens komt, want dan weet je wat de oplossing is.` },
      { v: `De schimmel zit vooral rond mijn dakraam. Is dat een lek?`, a: `Dat kan allebei. Een dakraam is een koude plek, en daar slaat vocht uit huis snel neer, zeker als het raam altijd dicht is. Dan zie je druppels op het glas en schimmel in de hoeken van het kozijn. Wordt het hout of de wand onder het raam juist nat na een bui, ook als het glas droog is, dan zit het eerder in het gootstuk of de aansluiting op de pannen. Meer lees je in het artikel over een lekkend dakraam.` },
      { v: `Ik heb de schimmel weggehaald, maar hij komt terug. Wat nu?`, a: `Dan blijft er vocht komen. Let op wanneer hij terugkomt: na een periode met veel regen wijst het eerder naar een lek, in een koude, droge periode eerder naar condens. Maak foto's met de datum erbij, dan zie je hoe het verloopt. Stuur ze via WhatsApp, dan zeg ik eerlijk of het iets voor mij is.` },
    ],
  },
  {
    slug: `dak-nakijken-voor-zolder-verbouwen`,
    datum: `2026-11-17`,
    titel: `Zolder verbouwen? Laat eerst je dak nakijken`,
    h1: `Ga je je zolder verbouwen? Laat eerst je dak nakijken, voordat alles is dichtgemaakt`,
    metaTitle: `Zolder verbouwen? Eerst je dak nakijken | Spoed Dak Service`,
    metaDescription: `Wordt je zolder een slaapkamer? Als de wanden dicht zijn, zie je een lek niet meer. Dit laat je vooraf nakijken: pannen, nok, lood, dakraam en goot.`,
    intro: `Een zolder die een slaapkamer, werkplek of logeerkamer wordt, krijgt isolatie, platen of schrootjes tegen het schuine dak en vaak een nieuwe vloer. Daarna zie je de onderkant van je dak niet meer. Een klein lek dat je nu nog op tijd ziet, merk je dan pas als er een vlek op je nieuwe wand komt. Daarom is het slim om je dak na te laten kijken voordat de verbouwing begint. Hieronder lees je waar je op let, wat je vooraf laat maken en wie wat doet.`,
    secties: [
      { kop: `Waarom vooraf`, tekst: [
        `Nu kun je met een zaklamp nog overal op zolder kijken: langs de schoorsteen, rond pijpen door het dak, onder de nok en achter het knieschot. Is de zolder eenmaal afgewerkt, dan moet er bij een lek eerst een stuk wand of plafond open om te zien waar het zit. Een lek vinden achter een afgewerkte wand kan wel, maar het is meer zoekwerk. Vooraf repareren is meestal goedkoper dan achteraf je nieuwe kamer openmaken.`,
      ] },
      { kop: `Zelf kijken op zolder`, tekst: [
        `Ga na een flinke bui, het liefst met wind, met een zaklamp naar boven. Let op donkere kringen of natte plekken op het hout of de folie, licht tussen de pannen, brokjes specie of gruis op de vloer, en sporen langs de schoorsteen of een pijp. Ruik ook even: een muffe hoek zegt vaak al iets. Maak overal waar je iets ziet een foto. Lees ook <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a> en <a href="/kennisbank/schimmel-op-zolder/">schimmel op zolder</a>.`,
      ] },
      { kop: `Wat ik vooraf nakijk`, tekst: [
        `De pannen: gebroken, verschoven of poreuze pannen vervang ik of leg ik recht. De nok: losse vorsten zet ik vast, of ik smeer de nok opnieuw aan. Het lood rond de schoorsteen en langs muren: los of gescheurd lood zet ik vast of vervang ik, meestal met loodvervanger en op wens met echt lood. De kraag rond pijpen door het dak en het gootstuk rond een dakraam dat er al zit. En de goot en de onderste rij pannen, want water dat onder de pannen loopt, komt daar als laatste langs, precies achter je nieuwe knieschot. Wat ik zie, hoor je van me, met foto's erbij.`,
      ] },
      { kop: `De Dak-APK`, tekst: [
        `Wil je alles op een rij, dan kan dat met de <a href="/dak-apk/">Dak-APK</a>: ik loop je hele dak na en je krijgt een rapport met foto's. Dan weet je wat er voor de verbouwing moet gebeuren en wat nog kan wachten. Wat dat kost, lees je bij <a href="/kennisbank/wat-kost-een-dakinspectie/">wat kost een dakinspectie</a>.`,
      ] },
      { kop: `Nieuwe dakramen`, tekst: [
        `Komen er nieuwe dakramen in, of verandert er iets aan de constructie van het dak, dan regelt je aannemer of timmerman dat. Vraag die om de aansluiting van het raam op de pannen goed af te werken, want daar begint een lek bij een nieuw raam meestal. Lekt het later toch, lees dan <a href="/kennisbank/lekt-sinds-nieuw-dakraam/">lekt het sinds je nieuwe dakraam?</a>`,
      ] },
      { kop: `Isolatie en vocht`, tekst: [
        `Isoleren doe ik zelf niet. Wel is het slim dat het dak dicht is voordat de isolatie erin gaat, want isolatie die nat wordt, droogt slecht. Vraag het isolatiebedrijf ook hoe het vocht uit je nieuwe kamer weg kan, met een folie aan de warme kant en goede ventilatie. Anders kan er condens tegen het koude dak komen, en dat lijkt later op een lek. Zie <a href="/kennisbank/lekt-sinds-dakisolatie/">lekt het sinds je dak is geïsoleerd?</a> en <a href="/kennisbank/isolatie-nat-na-lekkage/">isolatie nat na een lek</a>.`,
      ] },
      { kop: `Repareren of eerst vernieuwen?`, tekst: [
        `Is je dak bijna op, met veel poreuze of gebroken pannen en lood dat op meer plekken los zit, dan wil je dat weten voordat je binnen alles afwerkt. Een dakrenovatie gebeurt van buitenaf, maar het is prettiger als die klaar is voordat je nieuwe kamer af is. Bij een renovatie kan er op wens nieuwe folie en kunnen er nieuwe panlatten onder de pannen. Zie <a href="/diensten/dakrenovatie/">dakrenovatie</a> en <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse pannen of een nokvorst vastzetten is meestal een kleine reparatie. Voor lood, een kraag of een groter stuk dak stuur je een foto, en je hoort vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: de Dak-APK`, href: `/dak-apk/` },
    faq: [
      { v: `Hoe lang voor de verbouwing laat ik mijn dak nakijken?`, a: `Liefst een paar weken van tevoren. Dan is er tijd om een pan of het lood te laten maken, en moet er meer gebeuren, dan kun je dat nog plannen voordat de aannemer begint. Stuur me een foto van je dak vanaf de straat en een paar van zolder, dan zeg ik wat ik zie.` },
      { v: `Er komt een badkamer op zolder. Waar let ik op bij het dak?`, a: `Een badkamer geeft veel vocht, en dat moet naar buiten. De afvoer van de ventilatie gaat vaak met een pijp door het dak. Een nieuwe doorvoer door het dak kan ik plaatsen, met een passende pan en een kraag rond de pijp. De ventilatie zelf regelt je installateur. Komt de afvoer niet buiten uit maar op zolder, dan slaat het vocht neer tegen het koude dak. Meer lees je in de artikelen over een nat badkamerplafond en over lekkage bij een dakdoorvoer.` },
      { v: `Moet de folie onder de pannen vervangen worden voordat ik isoleer?`, a: `Niet altijd. Is de folie heel en zit hij nog goed, dan kan hij blijven. Is hij gescheurd, vergaan of hangt hij in stukken, dan komt er bij harde wind regen of stuifsneeuw langs, en dat komt na het isoleren in je isolatie terecht. Nieuwe folie kan er alleen onder als de pannen eraf gaan, bij een renovatie. Meer lees je in het artikel over dakfolie die kapot is.` },
    ],
  },
  {
    slug: `lekkage-tijdens-vakantie`,
    datum: `2026-11-17`,
    titel: `Lekkage terwijl je op vakantie bent?`,
    h1: `Je bent op vakantie of niet thuis en je dak lekt: wat de buren kunnen doen en hoe het verder gaat`,
    metaTitle: `Daklekkage terwijl je op vakantie bent | Spoed Dak Service`,
    metaDescription: `Ben je weg en zien de buren een natte plek of een pan op de stoep? Wat zij veilig kunnen doen, wat je via de app regelt en hoe het lek dicht komt.`,
    intro: `Je zit in de sneeuw of aan zee, en dan appt de buurvrouw: er ligt een dakpan op de stoep. Of de oppas ziet een natte plek op het plafond. Op afstand voelt dat machteloos, maar je kunt veel regelen zonder zelf thuis te zijn. Hieronder lees je wat de buren of je oppas veilig kunnen doen, hoe het lek gemaakt wordt terwijl je weg bent en wat je vooraf regelt als je op reis gaat.`,
    secties: [
      { kop: `Eerst: veilig`, tekst: [
        `Vraag wie er bij je huis is om niet op een ladder of het dak te gaan, ook niet even om te kijken. Ligt er een pan of een stuk goot op de stoep, laat het dan opzij leggen en uit de buurt van de gevel blijven zolang het hard waait. Hangt er iets los boven de stoep of de straat dat elk moment kan vallen, dan is 112 bellen de juiste stap. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat iemand met een sleutel binnen kan doen`, tekst: [
        `Een emmer of bak onder de druppel, met een doek erin tegen het spatten. Spullen weg van de natte plek en een handdoek of plastic op de vloer. Zit de natte plek bij een lamp, spotje of stopcontact, dan de groep van die kamer uit in de meterkast. Bolt het plafond op, dan niet eronder gaan staan. Kan iemand veilig op zolder komen, dan helpt een bak onder de plek waar het van het hout of de folie druppelt.`,
      ] },
      { kop: `Laat foto's maken`, tekst: [
        `Vraag om een foto van de natte plek binnen, van dichtbij en van een afstand, en een of twee foto's van je dak vanaf de overkant van de straat, met de zoom van de telefoon. Een kort filmpje van de goot tijdens een bui helpt ook. Laat ze die naar jou sturen, of meteen naar mij. Welke foto's het meest helpen, lees je bij <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Repareren terwijl je weg bent`, tekst: [
        `Ligt er een pan of nokvorst los en kan ik er van buiten bij, bijvoorbeeld vanaf de stoep of via een achterom, dan kan ik dat ook doen als er niemand thuis is. We spreken dan via WhatsApp vooraf de prijs af, en jij zegt waar ik mijn ladder kan zetten. Als je wilt, stuur ik je na afloop een foto van wat ik heb gedaan. Moet ik op zolder kijken waar het water binnenkomt, dan heb ik iemand nodig die de deur open kan doen, zoals de buren of de oppas. Ligt het dak open en is het te nat of waait het te hard voor een nette reparatie, dan maak ik het eerst dicht. Hoe dat gaat, lees je bij <a href="/kennisbank/noodreparatie-dak/">noodreparatie aan je dak</a>.`,
      ] },
      { kop: `En je verzekering?`, tekst: [
        `Meld de schade zo snel als het kan bij je verzekeraar, ook vanaf je vakantieadres, en vraag wat ze nodig hebben. De foto's van de buren, met de datum erbij, helpen daarbij. Kosten om erger te voorkomen, zoals het lek tijdelijk laten dichtmaken, worden vaak vergoed als de schade zelf onder je polis valt, maar dat verschilt per polis. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving die je kunt doorsturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Als je weer thuis bent`, tekst: [
        `Kijk na de eerste flinke bui op zolder of de plek droog blijft. Een plafond dat nat is geweest, droogt langzaam, ook als het lek dicht is. Schilder er pas overheen als het helemaal droog is, zie <a href="/kennisbank/plafond-drogen-na-lekkage/">plafond drogen na een lekkage</a>.`,
      ] },
      { kop: `Voordat je op reis gaat`, tekst: [
        `Ga je in de herfst of winter weg, laat dan vooraf je goot leegmaken als hij vol blad zit, en kijk vanaf de straat of er een pan scheef ligt of specie van de nok in de goot ligt. Geef iemand in de buurt een sleutel en zeg waar de meterkast en het zolderluik zitten. Zet mijn nummer in hun telefoon, zodat ze bij een lek of een storm meteen een foto kunnen sturen. Komt er een storm aan, lees dan <a href="/kennisbank/storm-op-komst-dak/">storm op komst</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er los of lek is. Ook als je niet thuis bent, hoor je via WhatsApp vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan de reparatie wachten tot ik terug ben?`, a: `Dat hangt ervan af. Druppelt het binnen of ligt er een open plek in het dak, dan liever niet, want bij elke bui trekt er meer water in het plafond en de isolatie. Ligt er alleen een pan een beetje scheef en blijft het binnen droog, dan kan het vaak wel wachten. Laat de buren een foto sturen, dan zeg ik eerlijk wat ik zie.` },
      { v: `De buren willen zelf een zeil over het dak leggen. Is dat slim?`, a: `Liever niet. Een nat dak is glad, en een zeil trekt bij wind hard aan alles wat het vasthoudt, ook aan wie op de ladder staat. Vraag ze het water binnen op te vangen en foto's te maken. Het afdekken van buiten laat je aan mij over.` },
      { v: `Kan ik vanaf mijn vakantieadres alles regelen?`, a: `Meestal wel. Stuur de foto's die de buren maken via WhatsApp door, met je adres en wie er een sleutel heeft. Dan zeg ik wat ik zie, spreken we de prijs af en laat ik weten wanneer ik kom. Moet ik binnen of op zolder kijken, dan stemmen we af wie de deur open doet.` },
    ],
  },
  {
    slug: `ventilatiepan-lekt`,
    datum: `2026-11-17`,
    titel: `Lekt het bij een ventilatiepan?`,
    h1: `Lekt of druppelt het bij een ventilatiepan? Kapot, verschoven of condens`,
    metaTitle: `Ventilatiepan lekt of druppelt: wat nu? | Spoed Dak Service`,
    metaDescription: `Druppelt het op zolder onder een pan met een roostertje of kapje? Vaak is de ventilatiepan gebroken, verschoven of is het condens. Zo zie je wat het is.`,
    intro: `Op veel daken ligt tussen de gewone pannen een pan met een roostertje, sleuven of een klein kapje: een ventilatiepan. Daardoor kan er lucht onder de pannen en op zolder komen, zodat vocht weg kan. Wordt het op zolder nat precies onder zo'n pan, dan denk je al snel dat hij lekt. Soms klopt dat, soms is het condens of komt het water van hoger. Hieronder lees je hoe je het verschil ziet en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer of bak onder de druppel en leg spullen opzij. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat een ventilatiepan doet`, tekst: [
        `Een ventilatiepan heeft dezelfde vorm als de pannen ernaast, maar met een opening die aan de bovenkant is afgeschermd. Zo kan er wel lucht door, maar geen regen. Soms zit er onder de pan een slang of kanaal vast, bijvoorbeeld van de ventilatie in de badkamer. Een ventilatiepan zit er dus meestal met een reden. Weghalen of dichtmaken is geen goed idee, want dan blijft het vocht juist binnen.`,
      ] },
      { kop: `Waar het meestal zit`, tekst: [
        `Een gebroken pan of kapje. Een ventilatiepan van kunststof wordt na veel jaren in de zon bros, en een stenen pan kan bij vorst of een storm barsten. Door een scheur of een afgebroken kapje komt de regen naar binnen.`,
        `Een pan die niet goed ligt. Ligt de ventilatiepan een stukje scheef of niet goed in de sluiting van de pannen ernaast, bijvoorbeeld na een storm of na werk op het dak, dan waait de regen eronder.`,
        `Stuifsneeuw en slagregen. Bij een sneeuwstorm of harde regen uit één hoek kan er door een hele ventilatiepan een beetje sneeuw of water naar binnen waaien. Een paar druppels na zo'n bui zijn vaak geen lek. Komt het bij elke bui terug, dan wel. Lees ook <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
        `Condens. Zit er onder de pan een slang van de ventilatie of de badkamer die los is geraakt, dan blaast er warme, vochtige lucht tegen het koude dak. Dat geeft druppels die op een lek lijken, vaak juist op koude, droge dagen. Zie <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
        `Water van hoger. Onder de pannen loopt water vaak een eind naar beneden voordat het binnenkomt. De natte plek onder de ventilatiepan kan dus ook van een pan, de nok of het lood erboven komen. Zie <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Zo zie je het verschil`, tekst: [
        `Kijk tijdens of vlak na een bui met een zaklamp op zolder. Zie je daglicht naast de pan, of is de plek alleen na regen nat, dan zit het meestal in de pan of in hoe hij ligt. Is het ook nat na een droge, koude nacht, of hangt er een losse slang onder de pan, dan is het eerder condens. Kijk op een droge dag vanaf de overkant van de straat met de zoom van je telefoon of de pan heel is en net zo plat ligt als de pannen ernaast, en maak een foto.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Prop geen doeken, isolatie of tape in de opening van de pan en kit hem niet dicht. Dan houd je het vocht binnen, en op den duur geeft dat schimmel op het hout. Ga niet zelf het dak op en zet geen ladder tegen de goot.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water binnenkomt en daarna op het dak. Is de ventilatiepan gebroken of is het kapje weg, dan vervang ik hem door een ventilatiepan die bij je dak past. Ligt hij scheef, dan leg ik hem en de pannen eromheen weer goed in de sluiting. Komt het water van hoger, dan zoek ik verder bij de pannen, de nok of het lood. Zit er een losse slang van de ventilatie onder, dan zeg ik dat eerlijk: die aansluiten doet je installateur. Zie ook <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a> en <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een ventilatiepan vervangen of terugleggen is meestal een kleine reparatie. Stuur een foto van de pan vanaf de straat en van de natte plek op zolder via WhatsApp, dan hoor je vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Kan ik een ventilatiepan gewoon dicht laten maken?`, a: `Liever niet. Hij zit er meestal om vocht onder de pannen en op zolder weg te laten. Maak je hem dicht, dan blijft dat vocht binnen. Is hij kapot, laat hem dan vervangen door een nieuwe ventilatiepan die bij je dak past.` },
      { v: `Hoe zie ik of ik een ventilatiepan heb?`, a: `Kijk vanaf de straat of vanuit de tuin naar je dak. Een ventilatiepan heeft de kleur en vorm van de pannen ernaast, maar met een roostertje, sleuven of een klein kapje erop. Op zolder zie je eronder vaak een opening in de folie of een slang die erop vastzit.` },
      { v: `Is een lekkende ventilatiepan spoed?`, a: `Druppelt het bij elke bui, of zit de natte plek bij een lamp of stopcontact, dan wel: zet de groep uit en stuur me een foto. Een paar druppels na een sneeuwstorm of op een koude ochtend zijn meestal geen spoed, maar laat het wel nakijken als het terugkomt.` },
    ],
  },
  {
    slug: `dakpan-zelf-terugleggen`,
    datum: `2026-11-17`,
    titel: `Zelf een dakpan terugleggen of vervangen?`,
    h1: `Zelf een dakpan terugleggen of vervangen: wat kan wel, en wanneer laat je het doen?`,
    metaTitle: `Dakpan zelf vervangen of terugleggen? | Spoed Dak Service`,
    metaDescription: `Ligt er een pan scheef of is er een gebroken? Van binnenuit lukt terugschuiven soms, op het dak liever niet. Zo zie je wat kan en wanneer je het laat doen.`,
    intro: `Eén pan die een stukje scheef ligt of een barst heeft: dat lijkt een klus die je zelf wel even doet. Soms kan dat ook, als je er veilig van binnenuit bij kunt. Maar een dakpan op het dak zelf vervangen is lastiger en gevaarlijker dan het lijkt. Hieronder lees je wat je zelf kunt doen, wat je beter laat en waar je op let als er een pan vervangen moet worden.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel en ga niet het dak op, zeker niet als het nat is of waait. Wat je meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Van binnenuit een verschoven pan terugschuiven`, tekst: [
        `Bij een oud dak zonder folie of platen onder de pannen zie je op zolder de onderkant van de pannen. Ligt er een pan een stukje uit zijn plek, dan kun je hem soms van binnenuit voorzichtig optillen en terugschuiven, tot hij weer met de nokjes over de lat hangt en goed sluit op de pannen ernaast. Doe dat op een droge dag, zonder kracht, en stop als hij niet makkelijk gaat. Ligt er folie of een plaat onder de pannen, dan kom je er van binnen niet bij. Snijd de folie niet open om erbij te komen.`,
      ] },
      { kop: `Waarom liever niet op het dak`, tekst: [
        `Een schuin dak is glad, zeker met mos of na regen, en pannen breken onder je voet. Een ladder tegen de goot drukt de goot of de beugels krom, en vanaf een ladder bij de goot kom je bijna nooit goed bij een pan halverwege het dak. Een pan die niet goed in de sluiting ligt, schuift of waait bij de volgende storm weer los. Daarom zeg ik ook bij een kleine klus: ga zelf niet het dak op.`,
      ] },
      { kop: `Een gebroken pan vervangen`, tekst: [
        `Om een pan te vervangen moeten de pannen erboven en ernaast een stukje omhoog, zodat de oude eruit en de nieuwe erin kan. De nieuwe pan moet passen in vorm en maat, anders sluit hij niet. Welke pan je hebt, lees je bij <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik?</a> Ligt er nog een reservepan op zolder of in de schuur, bewaar die dan, want dan weet je zeker dat hij past. Een barst lijmen of kitten houdt meestal maar kort, zie <a href="/kennisbank/dakpan-lijmen-of-kitten/">dakpan lijmen of kitten</a>.`,
      ] },
      { kop: `Wanneer je het laat doen`, tekst: [
        `Gaat het om een nokvorst, een pan langs de zijkant van het dak, een pan bij de schoorsteen of het lood, of een pan onder zonnepanelen, laat het dan doen. Dat geldt ook bij een steil of hoog dak, bij meer dan een paar pannen en na een storm, als er misschien meer los zit dan je ziet. Zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a> en <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van je dak vanaf de overkant van de straat, met de zoom van je telefoon, en als het kan een van de pan van dichtbij of vanaf zolder. Dan zie ik meestal welke pan het is en neem ik een passende mee. Ik leg de pan terug of vervang hem, en kijk meteen of de pannen eromheen nog goed liggen. Kan ik er van buiten bij en spreken we de prijs vooraf af, dan kan dat ook als je niet thuis bent. Zie <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Wat één pan vervangen kost en waar de prijs van afhangt, lees je bij <a href="/kennisbank/wat-kost-dakpan-vervangen/">wat kost een dakpan vervangen</a>. Je hoort vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Waar vind ik een losse dakpan die past?`, a: `In een bouwmarkt liggen meestal maar een paar soorten. Een groothandel in dakmaterialen of een handel in gebruikte pannen heeft er vaak meer. Neem een foto of de kapotte pan mee, dan kun je vergelijken. Bij een ouder dak wordt jouw pan soms niet meer gemaakt. Dan helpt een pan die in vorm en maat past, ook als de kleur iets anders is.` },
      { v: `Kan ik een gebarsten pan tijdelijk afplakken?`, a: `Van buiten liever niet, want dan moet je het dak op. Van binnen kun je onder de gebarsten pan een bak zetten, zodat het water niet op de vloer komt. Tape of kit houdt op een pan meestal maar kort, en op een natte pan plakt het niet.` },
      { v: `Mijn pan wordt niet meer gemaakt. Wat nu?`, a: `Dan kan er een pan van een plek die je vanaf de straat niet ziet, op de plek komen die je wel ziet. Op die verborgen plek komt dan een pan die in vorm en maat past, ook als de kleur iets anders is. Dat is werk op het dak zelf, dus laat het doen.` },
    ],
  },
  {
    slug: `doorslaand-vocht-of-daklek`,
    datum: `2026-11-18`,
    titel: `Doorslaand vocht of een daklek?`,
    h1: `Natte binnenmuur na regen: doorslaand vocht door de gevel, of een lek van het dak of de goot?`,
    metaTitle: `Doorslaand vocht of een daklek? | Spoed Dak Service`,
    metaDescription: `Natte plek op je binnenmuur na regen? Bovenin, vlak onder het plafond, komt het vaak van de goot of het dak. Midden op de muur eerder door de gevel.`,
    intro: `Na een flinke bui zie je binnen een natte of donkere plek op de muur. Komt dat van je dak, van de goot, of slaat de regen door de gevel heen? Dat laatste heet doorslaand vocht, en daarvoor heb je geen dakdekker nodig. Hieronder lees je hoe je het verschil ziet, zodat je meteen de goede vakman belt.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer of een handdoek onder de plek, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat is. Ga niet zelf het dak of een ladder op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Kijk eerst waar de plek zit`, tekst: [
        `Bovenin de muur, vlak onder het plafond of onder de dakrand. Dan komt het water vaak van boven: een goot die overloopt of lekt, water dat achter de goot langs loopt, of het lood boven een raam of een aanbouw. Lees <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a> en <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Midden op de muur, als een vlek die opkomt na regen met wind en na een paar droge dagen weer wegtrekt. Dat past eerder bij doorslaand vocht: regen die door de stenen of de voegen van de gevel naar binnen trekt.`,
        `Onderin de muur, vlak boven de vloer. Dat komt zelden van het dak. Denk dan eerder aan vocht van onderen of aan een leiding.`,
      ] },
      { kop: `Wanneer wordt het nat?`, tekst: [
        `Alleen bij regen met harde wind uit één richting, aan de kant van het huis waar het weer vandaan komt. Dat kan doorslaand vocht zijn, maar ook regen die onder de pannen of langs een raam naar binnen waait. Zie <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
        `Bij elke flinke bui, ook zonder veel wind, en vooral als de goot erboven volloopt. Dan zit het vaker in de goot of het dak.`,
        `Ook na een week zonder regen. Dan komt het meestal niet van buiten. Lees <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a>`,
      ] },
      { kop: `Wat je buiten ziet`, tekst: [
        `Kijk tijdens of vlak na een bui vanaf de straat naar de gevel boven de natte plek. Loopt er water over de rand van de goot, of zie je een natte streep onder de goot of de regenpijp, dan zit het daar. Groene strepen op de gevel onder de goot wijzen ook die kant op, zie <a href="/kennisbank/groene-strepen-gevel-onder-dakgoot/">groene strepen op je gevel</a>.`,
        `Is de gevel op die plek nat en donker terwijl de goot erboven droog blijft, en zie je open voegen, scheurtjes of stenen die lang nat blijven, dan is doorslaand vocht waarschijnlijker.`,
      ] },
      { kop: `Een oude muur of een spouwmuur`, tekst: [
        `Veel oude huizen hebben een massieve muur zonder spouw. Bij zo'n muur trekt slagregen makkelijker helemaal door naar binnen. Een spouwmuur heeft een ruimte tussen de buitenmuur en de binnenmuur, en daar loopt het water normaal gesproken naar beneden. Ook daar kan het soms doorslaan, bijvoorbeeld als er vuil of specie in de spouw ligt. Toch komt een natte plek bovenin bij zo'n muur vaak van de goot, het lood of de dakrand erboven.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Laat de gevel niet meteen impregneren en schilder de binnenmuur niet over zolang je niet weet waar het water vandaan komt. Zit het in de goot of het dak, dan helpt dat niets, en vocht dat al in de muur zit, kan er dan slechter uit. Kit ook geen kieren dicht op de gevel als je niet weet waar het lek zit.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van de natte plek binnen en van de gevel en de goot erboven, het liefst tijdens of vlak na een bui. Ik kijk naar de goot, de uitloop naar de regenpijp, het lood boven ramen en aanbouwen en de dakrand. Zit het daar, dan maak ik het dicht, en je hoort vooraf wat het kost. Zit het in de stenen of de voegen van de gevel, dan zeg ik dat eerlijk: aan de stenen van een gevel werk ik niet, daarvoor heb je een gevelspecialist nodig. Zie <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan een lekkende dakgoot een natte binnenmuur geven?`, a: `Ja. Loopt een goot over, of lekt hij bij een naad of de uitloop, dan loopt het water langs de gevel of achter de goot de muur in. Binnen zie je dat meestal bovenin, vlak onder het plafond. Kijk tijdens een bui of er water over de rand komt, en stuur me daar een foto of een kort filmpje van.` },
      { v: `Mijn muur is alleen nat aan de kant waar de regen vandaan komt. Is dat doorslaand vocht?`, a: `Dat kan, maar niet altijd. Bij regen met harde wind kan het water ook onder de pannen, langs een raam of achter de goot naar binnen waaien. Zit de plek midden op de muur en blijft de goot erboven droog, dan is doorslaand vocht waarschijnlijker. Zit hij bovenin, kijk dan eerst naar de goot en het dak.` },
      { v: `Wie bel ik voor doorslaand vocht?`, a: `Een gevelspecialist, die de stenen en de voegen nakijkt. Aan de gevel zelf werk ik niet. Twijfel je of het van de gevel, de goot of het dak komt, stuur me dan een foto van de natte plek en van de gevel erboven. Dan zeg ik eerlijk wie je het beste kunt bellen.` },
    ],
  },
  {
    slug: `zakgoot-lekt`,
    datum: `2026-11-18`,
    titel: `Zakgoot lekt?`,
    h1: `Zakgoot lekt: de goot tussen twee daken loopt over of lekt naar binnen`,
    metaTitle: `Zakgoot lekt: goot tussen twee daken | Spoed Dak Service`,
    metaDescription: `Ligt er een goot tussen twee daken en wordt het binnen nat? Een zakgoot loopt bij een volle uitloop over naar binnen. Zo zie je wat er mis is en wat je doet.`,
    intro: `Een zakgoot ligt tussen twee daken die naar elkaar toe aflopen, bijvoorbeeld tussen twee panden, tussen twee daken van hetzelfde huis of tussen het huis en een aanbouw. Al het water van twee kanten komt erin samen. Loopt een gewone goot over, dan valt het water langs de gevel naar buiten. Bij een zakgoot kan dat niet: loopt hij over, dan loopt het water onder de pannen of over de rand naar binnen. Hieronder lees je hoe je dat herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf naar de goot: die ligt tussen twee daken, en daar kom je niet veilig bij. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zakgoot, kilgoot of bakgoot?`, tekst: [
        `Een kilgoot ligt schuin, in de hoek waar twee schuine dakvlakken samenkomen, en het water loopt erdoor naar beneden. Een bakgoot zit in de rand van het dak, bovenop de gevel. Een zakgoot ligt bijna vlak tussen twee daken, en het water moet er via een uitloop uit: een pijp die binnen of buiten naar beneden loopt, of een opening door de gevel. Lekt het in de hoek van een schuin dak, lees dan <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>. Zit je goot in de dakrand, kijk dan bij <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Waar het meestal misgaat`, tekst: [
        `De uitloop zit dicht. Blad, mos en gruis van de pannen spoelen van twee daken naar de zakgoot en blijven bij de uitloop liggen. Kan het water niet weg, dan komt het hoger te staan dan de rand van de goot en loopt het onder de pannen door naar binnen. Bij een stortbui gaat dat het snelst.`,
        `Een naad of hoek in het zink lekt. Een zakgoot is vaak een houten bak met zink erin. Na veel jaren scheurt een soldeernaad, of wordt het zink dun op de plek waar steeds water en vuil bleven staan.`,
        `De aansluiting op de pannen of de muur. Liggen de onderste pannen niet ver genoeg over de goot, of is de strook langs een muur losgekomen, dan loopt het water naast de goot in plaats van erin.`,
        `IJs. In de winter kan de uitloop bevriezen. Het smeltwater van het dak kan dan niet weg en zoekt een andere weg, vaak naar binnen.`,
      ] },
      { kop: `Zo herken je het`, tekst: [
        `Een natte plek of kring op het plafond of op zolder, midden in het huis of langs de muur waar twee daken samenkomen. Vaak wordt het vooral nat bij een stortbui of in de herfst, als er veel blad valt. Loopt de uitloop binnen in een pijp naar beneden, dan kan het ook nat worden in een kast of langs die pijp, zie <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>. Kun je vanuit een dakraam of een raam boven in de goot kijken, kijk dan of er blad, mos of water in blijft staan.`,
      ] },
      { kop: `Ligt de goot tussen jou en de buren?`, tekst: [
        `Tussen twee panden is een zakgoot vaak van jullie samen, en het water van beide daken komt erin. Lekt hij, dan is het meestal slim om het samen aan te pakken. Hoe je dat regelt, lees je in <a href="/kennisbank/gedeelde-dakgoot-lekt/">gedeelde dakgoot lekt</a>. Kan ik er alleen via het dak of de tuin van de buren bij, lees dan <a href="/kennisbank/dak-repareren-via-buren/">je dak repareren via de buren</a>.`,
      ] },
      { kop: `Zo voorkom je het`, tekst: [
        `Laat een zakgoot elk jaar na de bladval leegmaken, ook als hij nog niet lekt, en laat daarbij de uitloop vrijmaken. Juist bij een zakgoot is dat belangrijk, want overlopen betekent hier water binnen. Heeft je zakgoot een noodoverloop, een opening door de gevel voor als de uitloop dicht zit, maak die dan nooit dicht.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot eerst leeg en de uitloop vrij, zodat het water weer weg kan. Daarna kijk ik naar het zink. Een lekke naad of hoek soldeer ik opnieuw. Wordt het zink op meer plekken dun, dan kan ik de goot van binnen coaten. Is het zink op of het hout eronder zacht, dan zeg ik dat eerlijk, want dan helpt solderen of coaten niet lang. Solderen en coaten doe ik op een droge dag. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-coaten/">dakgoot van binnen coaten</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is, hoe lang de goot is en hoe goed ik erbij kan. Leegmaken is een andere klus dan een naad solderen of de goot coaten. Stuur een foto van de natte plek en, als het kan, van de goot vanuit een raam boven via WhatsApp. Dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: bakgoot repareren`, href: `/diensten/bakgoot-repareren/` },
    faq: [
      { v: `Kan ik een zakgoot zelf leegmaken?`, a: `Liever niet. Een zakgoot ligt tussen twee daken, en om erbij te komen moet je over de pannen of over een plat stuk dak lopen. Dat is glad, zeker in de herfst en de winter. Kun je hem vanuit een dakraam zien, maak dan een foto en stuur die op.` },
      { v: `Mijn zakgoot loopt alleen over bij een stortbui. Is hij dan lek?`, a: `Niet per se. Vaak kan de uitloop het water bij een stortbui niet snel genoeg kwijt, zeker als er blad of gruis in ligt. Dan komt het water hoger te staan dan de rand. Wordt het ook nat bij een gewone bui, of blijft het druppelen als de bui voorbij is, dan is er eerder een naad of hoek lek.` },
      { v: `Is een lekkende zakgoot spoed?`, a: `Vaak wel, want bij een zakgoot komt het water binnen en niet langs de gevel. Druppelt het in een kamer, bij een lamp of in een kast, zet dan een emmer neer en stuur me meteen een foto. Is het op zolder één druppel na een stortbui, dan kan het meestal een paar dagen wachten, maar laat het niet te lang liggen.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel. Geen bedragen.
export const KORT_ANTWOORD_5: Record<string, string> = {
  "noodreparatie-dak": `Een noodreparatie zorgt dat er geen water meer binnenkomt, ook als het nog niet netjes kan: een losse pan terugleggen, een open stuk afdekken met folie of een zeil, of een volle goot leegmaken. Een zeil is bedoeld voor dagen tot een paar weken. Lood, kit en dakmortel hebben een droge dag nodig, dus de nette reparatie volgt dan later. Maak foto's voor je verzekeraar en bewaar de rekening.`,
  "foto-van-je-dak-maken": `De foto's die een dakdekker het meest helpen: je hele dak vanaf de overkant van de straat, met daarna ingezoomd de plek waar je iets ziet; de natte plek binnen van dichtbij en van een afstand; en zolder boven die plek met een zaklamp. Bij een goot helpt een kort filmpje tijdens een bui. Ga voor een foto niet het dak op en zet geen ladder tegen de goot.`,
  "dak-repareren-via-buren": `Kan een dakdekker alleen via de tuin, het pad of het platte dak van de buren bij je goot of dak, vraag het je buren dan een paar dagen van tevoren. Weigeren ze, dan is er het ladderrecht (artikel 5:56 Burgerlijk Wetboek): kan het werk anders niet, of alleen heel lastig, dan moeten ze het toestaan, en schade bij hen moet worden vergoed. Kom je er samen niet uit, vraag dan advies bij het Juridisch Loket.`,
  "hagelschade-dak": `Na een hagelbui raakt de schade meestal eerst glas en kunststof: dakramen, lichtkoepels, kunststof platen en oude kunststof goten. Gewone dakpannen in goede staat kunnen een flinke bui meestal hebben, maar oude, poreuze pannen kunnen barsten. Lekt het, vang het water dan op en ga niet het dak op. Maak foto's met de datum van de bui erbij: hagelschade valt vaak onder je opstalverzekering, maar dat verschilt per polis.`,
  "planten-in-dakgoot": `Groeit er gras, mos of een plantje in je dakgoot, dan ligt er een laag van blad, mos en zand die tot natte aarde is geworden. Die laag houdt het water tegen, waardoor de goot bij een bui overloopt, en maakt de goot zwaar, zodat hij kan gaan doorhangen. Trek niet hard aan een plant met wortels en gooi er geen onkruidmiddel in. Laat de hele laag eruit halen, ook bij de uitloop naar de regenpijp.`,
  "boerderij-dak-lekt": `Een boerderijdak lekt meestal bij de lange goot die bij een bui overloopt, bij de kilgoot waar een aanbouw of schuur tegen het hoofddak komt, bij de nok en de schuine hoeken, bij het lood rond de schoorsteen of bij oude pannen. Vaak ligt er geen folie onder de pannen, dus een gebroken of verschoven pan geeft meteen water binnen. Kijk tijdens een bui met een zaklamp op zolder en ga niet zelf het dak op.`,
  "water-spat-over-dakgoot": `Spat het regenwater bij een bui over je goot heen, terwijl er weinig water in de goot staat, dan mist het water de goot. Meestal hangt de goot te laag of te ver naar achteren, steken de onderste pannen te ver uit, of komt het water van een steil dak, gladde pannen of zonnepanelen zo hard naar beneden dat het over de rand schiet. Vaak is de goot op die plek opnieuw ophangen genoeg.`,
  "noodoverloop-plat-dak": `Komt er bij regen water uit de noodoverloop, het buisje in de rand van je platte dak, dan staat het water op je dak hoger dan zou moeten. Meestal zit de gewone afvoer dicht met blad, mos of grind, of is de regenpijp verstopt. Bij een echte wolkbreuk kan een korte straal normaal zijn. Laat de afvoer vrijmaken en maak de noodoverloop nooit dicht.`,
  "kraaien-mos-van-dak": `Kraaien en kauwen trekken mos van je dak omdat ze eronder naar insecten en larven zoeken, vooral in de herfst, de winter en het vroege voorjaar. Voor de pannen zelf is dat meestal niet erg. Het losse mos komt wel in je goot en bij de uitloop naar de regenpijp terecht, en dan kan de goot bij een flinke bui overlopen. Laat de goot leegmaken en ga niet zelf het dak op.`,
  "mastgoot-lekt": `Een mastgoot is een houten goot op klossen voor de gevel, met aan de binnenkant meestal zink. Hij lekt meestal bij een naad of hoek, bij de uitloop naar de regenpijp of op een dunne plek waar jaren blad lag. Vaak is opnieuw solderen genoeg, of kan de binnenkant gecoat worden. Kijk ook naar het hout: bladderende verf of zacht hout onder de goot betekent dat er al langer water achter het zink loopt.`,
  "dakgoot-lekt-in-de-hoek": `Lekt je dakgoot precies op de hoek, dan zit het meestal in de verbinding van de twee stukken goot: een soldeernaad in een zinken goot, of een hoekstuk met lijm of een rubber in een kunststof goot. Soms is de hoek gezakt, zodat er water blijft staan. Vaak hoeft alleen de hoek gemaakt te worden: opnieuw solderen, een nieuw hoekstuk of de goot weer op afschot.`,
  "lekkage-meterkast-bij-regen": `Wordt je meterkast alleen nat als het regent, dan komt het water meestal van boven: van het afdakje of de luifel boven de voordeur, van een goot of regenpijp aan de voorgevel, of langs een pijp of kabel vanaf het dak. Is vooral de vloer nat, dan kan het ook van onderen komen, langs de kabels uit de straat. Zorg eerst dat het veilig is: raak niets aan met natte handen en zet de hoofdschakelaar uit als dat veilig kan.`,
  "dak-jaren-90-huis-lekt": `Bij een huis uit de jaren '80 of '90 zijn de pannen vaak nog goed, en zit een lek meestal bij een aansluiting: het rubber rond een pijp door het dak, het gootstuk van een dakraam, een klem of strook van een droge nok of een verbinding in de kunststof goot. Wordt het alleen nat op koude ochtenden, ook als het droog is, dan is het eerder condens. Vaak is een gerichte reparatie genoeg.`,
  "dak-lekt-na-dagen-regen": `Lekt je dak pas na een paar dagen regen, en niet bij een korte bui, dan trekt het water meestal langzaam ergens doorheen of loopt er iets pas na dagen over: oude pannen die water opnemen, de stenen van de schoorsteen, een goot of kilgoot die langzaam volloopt, of een plas op het platte dak. Kijk tijdens zo'n natte periode met een zaklamp op zolder waar het begint.`,
  "dak-jaren-50-huis-lekt": `Bij een huis uit de jaren '50 lekt het dak meestal bij het lood rond de eigen schoorsteen, op de plek waar een schoorsteen is weggehaald, bij een nok in oude specie, bij een naad in de zinken goot of bij een pan die is verschoven. Vaak ligt er geen folie onder de pannen, dus het water komt meestal vlak onder het lek binnen. Een gerichte reparatie is vaak genoeg.`,
  "schimmel-op-zolder": `Zit de schimmel op zolder op één plek, met een kring eromheen, en wordt die plek na een bui donker of nat, dan komt er meestal water van buiten door een lek. Zitten er fijne zwarte puntjes verspreid over een groot stuk van het dakbeschot, ook op droge dagen, dan is het meestal condens: vocht uit je eigen huis dat tegen het koude dak neerslaat. Bij een lek ligt de oplossing op het dak, bij condens binnen, bij ventilatie en vocht.`,
  "dak-nakijken-voor-zolder-verbouwen": `Ga je je zolder verbouwen, laat dan eerst je dak nakijken, want na het afwerken zie je de onderkant van het dak niet meer. Laat vooraf gebroken of verschoven pannen, een losse nok, los lood rond de schoorsteen en de kraag rond pijpen door het dak maken. Zorg dat het dak dicht is voordat de isolatie erin gaat, en vraag het isolatiebedrijf hoe het vocht uit je nieuwe kamer weg kan.`,
  "lekkage-tijdens-vakantie": `Ben je op vakantie of niet thuis en lekt je dak, laat dan iemand met een sleutel het water opvangen, spullen weghalen en de groep uitzetten als het bij een lamp of stopcontact nat is, zonder op een ladder of het dak te gaan. Laat foto's maken van de natte plek en van het dak vanaf de straat. Een losse pan of nokvorst kan vaak van buiten worden gerepareerd als de prijs vooraf is afgesproken.`,
  "ventilatiepan-lekt": `Druppelt het op zolder onder een ventilatiepan, dan is die pan vaak gebroken, is het kapje weg of ligt hij niet goed in de pannen ernaast. Een paar druppels na een sneeuwstorm of op koude, droge dagen zijn vaak stuifsneeuw of condens, bijvoorbeeld van een losse slang van de ventilatie. Maak een ventilatiepan niet dicht, maar laat een kapotte vervangen door een die bij je dak past.`,
  "dakpan-zelf-terugleggen": `Een verschoven pan kun je soms van binnenuit, vanaf zolder, voorzichtig terugschuiven als er geen folie of plaat onder de pannen zit. Een pan op het dak zelf vervangen doe je liever niet: het dak is glad, pannen breken onder je voet en een pan die niet goed in de sluiting ligt, waait weer los. Bij de nok, de zijkant, de schoorsteen of zonnepanelen laat je het doen.`,
  "doorslaand-vocht-of-daklek": `Zit de natte plek bovenin de muur, vlak onder het plafond, dan komt het water vaak van een goot die overloopt of lekt, of van het lood of de dakrand erboven. Zit hij midden op de muur, komt hij op na regen met harde wind en trekt hij na een paar droge dagen weer weg, dan is het eerder doorslaand vocht door de stenen of de voegen van de gevel. Wordt het ook nat na dagen zonder regen, denk dan aan een leiding.`,
  "zakgoot-lekt": `Een zakgoot ligt bijna vlak tussen twee daken die naar elkaar toe aflopen, bijvoorbeeld tussen twee panden of tussen het huis en een aanbouw. Loopt hij over, dan komt het water niet langs de gevel maar binnen. Meestal zit de uitloop dicht met blad, mos of gruis, of lekt een naad in het zink. Vaak is leegmaken en de uitloop vrijmaken genoeg, en een lekke naad kan opnieuw gesoldeerd worden.`,
};
