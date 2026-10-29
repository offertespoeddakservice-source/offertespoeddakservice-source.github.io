/**
 * Matrix — dienst × plaats-pagina's (/werkgebied/[plaats]/[dienst]).
 *
 * SELECTIEF, niet alle combinaties: alleen de money-diensten × kerndorpen uit
 * PRIORITEIT.md. Elke combinatie krijgt een UNIEKE `hook` (1-2 zinnen die echt
 * over díe dienst in díe plaats gaan) → geen dunne, identieke pagina's.
 *
 * Uitbreiden = combinatie + hook toevoegen (Tier B/C). `plaats`/`dienst` = slugs
 * uit plaatsen.ts / diensten.ts.
 */

export interface MatrixCombo {
  plaats: string; // slug uit PLAATSEN
  dienst: string; // slug uit DIENSTEN
  hook: string;   // unieke lokale invalshoek voor deze dienst in deze plaats
}

export const MATRIX: MatrixCombo[] = [
  // ── Tier A · daklekkage ──────────────────────────────────────────────
  {
    plaats: "oss",
    dienst: "daklekkage",
    hook: "In Schadewijk en de andere oudere wijken rond het centrum van Oss staan veel rijtjeshuizen met een pannendak en een schoorsteen. Daar begint een lek meestal bij uitgedroogd lood rond de schoorsteen of bij een pan die gebroken is. In de Ruwaard, een grote wijk uit de jaren '70 en '80, hebben veel huizen een dakraam of een platte aanbouw aan de achterkant. Daar vind ik het lek vaak aan de onderkant van het dakraam of bij de rand van dat platte dak. In Berghem staan meer vrijstaande huizen met een groot dak, waar ik na een storm vaker een losse nokvorst tegenkom. Ik spoor het lek op en zeg je eerlijk wat er nodig is.",
  },
  {
    plaats: "den-bosch",
    dienst: "daklekkage",
    hook: "In de binnenstad liggen veel goten verstopt tussen twee panden of achter een topgevel, waar je ze vanaf de straat niet ziet. Raakt zo'n goot vol of gaat het zink lekken, dan komt het water binnen op de bovenste verdieping, soms zelfs bij de buren, en vaak een eind van de plek waar het echte lek zit. In de Kruiskamp en de andere wijken uit de jaren '50 en '60 staan veel rijtjes met een pannendak en een schoorsteen per huis. Daar begint een lek meestal bij het lood rond die schoorsteen of bij een pan die is gaan schuiven. In Maaspoort en Empel liggen veel platte daken op aanbouwen en bergingen, en daar zie ik lekkage vaak bij de dakrand of bij een afvoer die vol blad zit. Den Bosch is mijn thuisbasis, dus meestal kan ik snel even komen kijken.",
  },
  {
    plaats: "rosmalen",
    dienst: "daklekkage",
    hook: "In de rijtjeshuizen uit de jaren '60 en '70 in Rosmalen liggen de nokvorsten vaak nog in specie. Na zoveel jaren wordt die specie bros en brokkelt hij af, en dan waait de regen onder de nok door naar binnen. Dat zie je eerst als een natte plek op zolder, net onder de nok. In dezelfde huizen vind ik een lek ook vaak bij de ontluchtingspijp die door het dak steekt. De loden of rubberen kraag eromheen droogt uit en scheurt, en bij een flinke bui loopt het water dan langs de pijp naar beneden. Bel of app me, dan kom ik kijken waar het bij jou zit.",
  },
  {
    plaats: "vught",
    dienst: "daklekkage",
    hook: "In de villawijken van Vught, bijvoorbeeld langs de Helvoirtseweg, staan veel vooroorlogse villa's en herenhuizen met een steil dak van keramische pannen. Op zulke daken ligt veel lood: rond de schoorsteen, in de kilgoten en langs de muur waar een lager dak tegen het huis aansluit. Dat lood is vaak tientallen jaren oud. Het wordt hard, scheurt bij de vouwen of komt los van de muur, en dan loopt het water aan de binnenkant naar beneden. In Cromvoirt staan meer boerderijen en vrijstaande huizen met een breed pannendak, waar ik na een storm vaker een verschoven pan of een losse nokvorst vind. Ik werk van buiten naar binnen en breek alleen iets open als het echt niet anders kan.",
  },
  {
    plaats: "berlicum",
    dienst: "daklekkage",
    hook: "Bij de vrijstaande en twee-onder-een-kap woningen in Berlicum begint lekkage vaak bij het lood rond schoorsteen of dakkapel. Ik vind het lek en maak het weer waterdicht.",
  },

  // ── Tier A · goten reinigen ──────────────────────────────────────────
  {
    plaats: "oss",
    dienst: "goten-reinigen",
    hook: "In de ruime wijken van Oss met veel schuine daken slibben goten snel dicht door blad en mos. Ik maak ze leeg, maak de uitloop naar de regenpijp vrij en kijk meteen of er meer aan je dak speelt.",
  },
  {
    plaats: "den-bosch",
    dienst: "goten-reinigen",
    hook: "Of je nu in de binnenstad of in De Slagen woont: volle goten zorgen voor vochtige muren en lekkage. Ik ben dagelijks in Den Bosch, dus ik plan je goten zo tussendoor in.",
  },
  {
    plaats: "rosmalen",
    dienst: "goten-reinigen",
    hook: "De schuine pannendaken in Rosmalen, van Molenhoek tot De Groote Wielen, hebben goten die door bladval snel dichtslibben. Leeg, uitloop vrij en een eerlijke blik op de rest.",
  },
  {
    plaats: "vught",
    dienst: "goten-reinigen",
    hook: "Onder de vele bomen in Vught lopen goten snel vol blad. Ik maak ze leeg en controleer meteen het lood en de pannen die hier door ouderdom aandacht vragen.",
  },
  {
    plaats: "berlicum",
    dienst: "goten-reinigen",
    hook: "Bij de dorpse, vaak vrijstaande woningen in Berlicum zijn de goten flink aan de lengte. Ik maak ze van begin tot eind leeg en maak de uitloop naar de regenpijp goed vrij.",
  },

  // ── Tier B · daklekkage ──────────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "daklekkage",
    hook: "In Vliedberg en de andere naoorlogse wijken van Vlijmen hebben veel rijtjeshuizen achter een berging of aanbouw met een plat dak, vaak met een lichtkoepel erin. Bij zo'n koepel lekt het nogal eens langs de rand, waar de koepel op de opstand staat, en dan druppelt het precies onder de koepel naar binnen. In Nieuwkuijk en Haarsteeg, vlak bij Vlijmen, staan meer vrijstaande huizen met grote tuinen. Daar loopt de goot in de herfst snel over door het blad uit de bomen, en binnen lijkt dat soms op een daklek. App me een foto van de natte plek, dan zie ik vaak al waar ik moet zoeken.",
  },
  {
    plaats: "drunen",
    dienst: "daklekkage",
    hook: "Bij de schuine daken in Drunen, vlak bij de Loonse en Drunense Duinen, kruipt regenwater vaak binnen via volgewaaide goten en versleten kitnaden. Ik vind de échte oorzaak, niet alleen de natte plek.",
  },
  {
    plaats: "boxtel",
    dienst: "daklekkage",
    hook: "Bij de oudere huizen rond het centrum van Boxtel zie ik vaak een erker of een luifel boven de voordeur met een klein plat dakje erop. Waar dat dakje tegen de gevel komt, zit een strook lood. Laat die los of is hij gescheurd, dan loopt het water achter het lood langs en komt het binnen boven het raam. In Liempde en Esch, die ook bij Boxtel horen, staan meer boerderijen en vrijstaande huizen met een groot pannendak. Daar begint een lek vaker bij de schoorsteen of bij een pan die door de wind is gaan schuiven. Ik spoor het lek op zonder onnodig sloopwerk en vertel je eerlijk wat het kost voordat ik begin.",
  },
  {
    plaats: "schijndel",
    dienst: "daklekkage",
    hook: "Veel daken in Schijndel zijn van voor 1985, en op een deel daarvan liggen nog de eerste pannen. Zo'n oude pan neemt na veertig jaar meer water op. Vriest het daarna, dan kan er een haarscheur in komen die je van beneden niet ziet, en bij de volgende flinke bui druppelt het op zolder. In Wijbosch staan meer vrijstaande huizen met een schoorsteen, en daar zit een lek vaker in het lood rond die schoorsteen. Ik vervang alleen de pannen die echt kapot zijn, en zeg je eerlijk als er meer aan de hand is.",
  },
  {
    plaats: "heusden",
    dienst: "daklekkage",
    hook: "In vesting Heusden staan veel monumenten en oude panden, en de hele vesting is beschermd stadsgezicht. Daar zit een lek vaak in oud lood rond een schoorsteen, in een oude zinken goot of bij een pan die niet meer goed ligt. Bij zo'n dak kijk ik extra goed welk materiaal erbij past, want op een monument mag je niet zomaar iets anders gebruiken. In Oudheusden en Herpt staan meer vrijstaande huizen en boerderijen met een groot pannendak. Daar komt een lek vaker van een nokvorst waarvan de specie is losgeraakt, of van pannen aan de onderkant van het dak die door de wind zijn opgetild. Twijfel je of jouw huis onder het beschermd stadsgezicht valt, dan kun je dat bij de gemeente Heusden navragen.",
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "daklekkage",
    hook: "Bij de karakteristieke woningen langs de Dommel in Sint-Michielsgestel begint lekkage vaak bij vorsten en lood van klassieke pannendaken. Ik vind het lek en maak het weer waterdicht.",
  },
  {
    plaats: "oisterwijk",
    dienst: "daklekkage",
    hook: "Oisterwijk ligt tussen de bossen en vennen, en ook in het dorp zelf staan veel oude bomen, zoals de lindes op De Lind. In de herfst ligt er dan veel blad en soms een dikke laag mos in de goot en in de kilgoot. Loopt die over, dan komt het water binnen langs de muur of in een hoek. Dat lijkt op een daklek, terwijl het dak zelf nog dicht is. In de villawijken aan de rand van de bossen staan veel huizen met een groot, steil dak en meer dan één kilgoot, en daar kijk ik bij een natte plek eerst naar de kil. In Moergestel, dat ook bij Oisterwijk hoort, staan veel gewone dorpswoningen met een schoorsteen, en daar vind ik een lek vaker bij het lood eromheen. Zit de goot alleen vol, dan zeg ik dat ook: dan is leegmaken genoeg.",
  },

  // ── Tier B · goten reinigen ──────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "goten-reinigen",
    hook: "De goten in Vlijmen lopen na een storm vanaf de Maaskant snel vol blad en gruis. Ik maak ze leeg, maak de uitloop naar de regenpijp vrij en kijk meteen of er pannen los zitten.",
  },
  {
    plaats: "drunen",
    dienst: "goten-reinigen",
    hook: "Zo dicht bij de Loonse en Drunense Duinen krijgen de goten in Drunen flink wat zand en blad te verduren. Ik maak ze leeg en maak de uitloop vrij, zodat het water weer weg kan.",
  },
  {
    plaats: "boxtel",
    dienst: "goten-reinigen",
    hook: "Onder de bomenrijke straten van Boxtel slibben goten razendsnel dicht. Ik haal blad en mos eruit, maak de uitloop naar de regenpijp vrij en geef een eerlijke blik op de rest van je dak.",
  },
  {
    plaats: "schijndel",
    dienst: "goten-reinigen",
    hook: "Bij de oudere rijtjes en vrijstaande woningen in Schijndel zijn volle goten een veelvoorkomende oorzaak van vochtige muren. Leeg, uitloop vrij en netjes achtergelaten.",
  },
  {
    plaats: "heusden",
    dienst: "goten-reinigen",
    hook: "De goten in en rond vesting Heusden vragen om voorzichtig werk bij oudere daken. Ik maak ze van begin tot eind leeg en controleer meteen het lood en de pannen.",
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "goten-reinigen",
    hook: "Langs de Dommel in Sint-Michielsgestel staan veel bomen, dus de goten lopen er snel vol blad. Ik maak ze leeg, maak de uitloop naar de regenpijp vrij en kijk naar vorsten en lood.",
  },
  {
    plaats: "oisterwijk",
    dienst: "goten-reinigen",
    hook: "Bosrijk Oisterwijk betekent veel blad en mos op het dak. Ik maak je goten grondig leeg, controleer de bladvangers en maak de uitloop naar de regenpijp vrij.",
  },

  // ── Tier C · stormschade × alle 12 kerndorpen (klaar voor stormpieken) ──
  {
    plaats: "oss",
    dienst: "stormschade",
    hook: "Na een storm waaien in de ruime, open wijken van Oss makkelijk pannen los. Ik kom snel langs, dek de schade af en herstel de nokvorsten en pannen netjes, met foto's voor je verzekering.",
  },
  {
    plaats: "den-bosch",
    dienst: "stormschade",
    hook: "Of het nu de monumentale binnenstad of een wijk als Maaspoort betreft: na een storm telt elk uur. Ik ben dagelijks in Den Bosch, dus bij weggewaaide pannen of een open dak sta ik snel voor je deur.",
  },
  {
    plaats: "rosmalen",
    dienst: "stormschade",
    hook: "De schuine pannendaken in Rosmalen verliezen bij storm vaak nokvorsten of losse pannen. Ik beperk eerst de schade en herstel daarna, met duidelijke foto's voor je verzekeraar.",
  },
  {
    plaats: "vught",
    dienst: "stormschade",
    hook: "Bij de oudere daken in Vught laat een storm zich voelen bij verouderd lood en losse pannen. Ik kom snel langs voor noodreparatie en zorg dat het weer dicht is.",
  },
  {
    plaats: "berlicum",
    dienst: "stormschade",
    hook: "In het open buitengebied rond Berlicum heeft de wind vrij spel; pannen en nokvorsten waaien er makkelijk los. Snel afdekken, dan netjes herstellen.",
  },
  {
    plaats: "vlijmen",
    dienst: "stormschade",
    hook: "Vanaf de Maaskant krijgt Vlijmen flink wind; na een storm zie ik hier vaak weggewaaide pannen en losgeraakt lood. Ik beperk de schade direct.",
  },
  {
    plaats: "drunen",
    dienst: "stormschade",
    hook: "Open bij de Loonse en Drunense Duinen vangt Drunen veel wind. Losse of weggewaaide pannen laten regen binnen. Ik kom snel langs voor noodreparatie.",
  },
  {
    plaats: "boxtel",
    dienst: "stormschade",
    hook: "Onder de bomenrijke straten van Boxtel zorgt storm voor afgewaaide takken én losse pannen. Ik dek af, herstel en lever foto's voor je verzekering.",
  },
  {
    plaats: "schijndel",
    dienst: "stormschade",
    hook: "Veel daken in Schijndel zijn ouder dan 1985, en bij storm waaien daar sneller pannen en vorsten los. Eerst de schade stoppen, dan blijvend herstellen.",
  },
  {
    plaats: "heusden",
    dienst: "stormschade",
    hook: "Aan de open Maaskant bij Heusden grijpt de wind hard aan; oudere daken in de vesting zijn extra kwetsbaar. Ik kom snel langs en herstel met zorg voor het oude werk.",
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "stormschade",
    hook: "Langs de Dommel in Sint-Michielsgestel waaien bij storm vorsten en pannen los van de klassieke daken. Ik beperk de schade en maak het weer waterdicht.",
  },
  {
    plaats: "oisterwijk",
    dienst: "stormschade",
    hook: "In bosrijk Oisterwijk komen bij storm takken én pannen naar beneden. Ik dek de schade snel af en herstel netjes, met foto's voor je verzekeraar.",
  },

  // Dakgoot repareren of vervangen: eerst Den Bosch (Search Console: plek 26 tot 45 zonder eigen pagina)
  {
    plaats: "den-bosch",
    dienst: "dakgoot-vervangen",
    hook: "In de Muntel en de Vliert hebben de huizen uit de jaren '20 en '30 vaak nog zinken goten, soms als bakgoot achter een houten lijst. Na veel jaren gaan die lekken bij de naden, de hoeken en de uitloop naar de regenpijp. In nieuwere wijken als Maaspoort en Empel hangen vaker kunststof goten, en daar zit het meestal in een verbinding of een losse beugel. Ik kijk eerst of repareren kan, en vervang alleen wat echt op is.",
  },
  // Dakgoot repareren of vervangen in Vught (Search Console: dakgoot vervangen vught plek 26, dakgoot reparatie vught plek 37)
  {
    plaats: "vught",
    dienst: "dakgoot-vervangen",
    hook: "Langs de Taalstraat en in de villawijken richting de Loonsebaan liggen veel lange zinken goten, vaak als bakgoot achter een houten lijst. Onder de hoge bomen daar blijft blad lang in de goot liggen, en juist op die plekken wordt het zink na jaren dun en gaan de naden lekken. In de rijtjes van Vught-Noord hangen vaker kunststof goten. Daar zit een lek meestal in een verbinding, een uitgedroogd rubber of een losse beugel. Ik kijk eerst of een reparatie genoeg is, en vervang alleen het stuk dat echt op is.",
  },
  // Daklekkage in Tilburg, met Udenhout en Berkel-Enschot (Rens 23-10: ook bij spoed; Search Console: daklekkage udenhout, daklekkage berkel-enschot)
  {
    plaats: "tilburg",
    dienst: "daklekkage",
    hook: "Udenhout en Berkel-Enschot liggen aan de kant van Tilburg die het dichtst bij Den Bosch ligt. In de oude dorpskernen staan veel vrijstaande huizen en twee-onder-een-kappers met een pannendak. Daar begint een lek vaak bij het lood rond de schoorsteen of bij een pan die verschoven is. In de Reeshof staan veel rijtjeshuizen uit de jaren '80 en '90. Heeft je huis daar een platte aanbouw of berging, dan komt het water nogal eens binnen bij een naad of bij de rand van dat platte dak. Ik zoek eerst waar het water echt binnenkomt en repareer dan alleen wat nodig is.",
  },
  // Daklekkage in Veghel (Search Console: daklekkage veghel plek 25, dakgoot lekkage veghel plek 24), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "veghel",
    dienst: "daklekkage",
    hook: "In het centrum van Veghel, langs de Zuid-Willemsvaart, staan nog oudere panden. Daar zit een lek vaak in oud lood rond de schoorsteen of in een zinken goot die bij een naad is gaan lekken. In de kerkdorpen eromheen, zoals Eerde, Zijtaart en Keldonk, staan veel vrijstaande huizen en oude boerderijen met een groot pannendak. Staat er een schuur of aanbouw tegenaan, dan ligt er een kilgoot waar de daken samenkomen. Daar blijft blad liggen en daar lekt het na verloop van tijd vaak. Ik zoek eerst waar het water echt binnenkomt en repareer dan gericht, zonder onnodig sloopwerk.",
  },
  // Daklekkage in Eindhoven (Search Console: lekkage dak eindhoven plek 36, daklekkage eindhoven en dak lekkage eindhoven samen 29 vertoningen), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "eindhoven",
    dienst: "daklekkage",
    hook: "In Philipsdorp en andere wijken van rond 1910 tot 1930 staan veel huizen met een steil pannendak, een schoorsteen en oude zinken goten. Daar begint een lek vaak bij het lood rond de schoorsteen of bij een goot die bij een naad is gaan lekken. In nieuwere wijken zoals Meerhoven liggen op veel daken zonnepanelen. Daar zie ik lekkage nogal eens bij een pan die bij het plaatsen van de beugels is gebroken of verschoven. Eindhoven is voor mij zo'n 40 minuten rijden. Stuur daarom eerst een foto via WhatsApp, dan weet ik wat ik mee moet nemen en hoor je eerlijk wanneer ik kan komen.",
  },
  // Daklekkage in Waalwijk (Search Console: daklekkage waalwijk 24 vertoningen, lekkage waalwijk en dakgoot lekkage waalwijk), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "waalwijk",
    dienst: "daklekkage",
    hook: "Langs de Grotestraat en in de oude straten eromheen staan nog veel huizen uit de tijd van de schoenindustrie, soms met een oude werkplaats of schuur erachter. Zo'n achterbouw heeft vaak een plat of flauw dak, en daar komt het water nogal eens binnen waar de achterbouw tegen het huis aan zit. In Waspik staan meer vrijstaande huizen en twee-onder-een-kappers met een groot pannendak. Daar begint een lek meestal bij het lood rond de schoorsteen of bij een pan die na een storm is gaan schuiven. Ik zoek eerst waar het water echt binnenkomt en repareer dan alleen wat nodig is.",
  },
  // Daklekkage in Breda (Rens 26-10: ja, ook bij een lekkend dak in Breda; Search Console: daklekkage breda 48 vertoningen), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "breda",
    dienst: "daklekkage",
    hook: "In Ginneken en Boeimeer staan veel huizen van rond 1930 met een steil pannendak en een goot die in de dakrand is weggewerkt. Wordt het zink van zo'n goot dun, dan komt het water niet op zolder binnen, maar bovenin de gevel of langs het plafond van de slaapkamer. In de Haagse Beemden staan vooral rijtjes en twee-onder-een-kappers uit de jaren '80 en '90, vaak met een dakraam in het pannendak. Daar zie ik lekkage nogal eens langs het gootstuk onder dat dakraam, of bij een pan ernaast die niet meer goed in de sluiting ligt. Omdat ik vanuit Den Bosch zo'n 40 minuten onderweg ben, vraag ik je eerst een foto van de natte plek te appen. Dan neem ik meteen het goede materiaal mee, en ik zeg je eerlijk op welk moment ik er kan zijn.",
  },
  // Dakgoot repareren of vervangen in Veghel, met Erp en Boerdonk (Search Console: dakgoot lekkage veghel plek 23, dakgoot reparatie veghel plek 34), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Veghel
  {
    plaats: "veghel",
    dienst: "dakgoot-vervangen",
    hook: "In Erp en Boerdonk staan veel langgevelboerderijen en oude woonboerderijen. Die hebben een lange, lage goot over de hele voorgevel, en aan de schuur of stal ernaast hangt vaak nog een tweede goot. Na veel jaren zakt zo'n goot tussen de haken door. Dan blijft er na een bui water in het midden staan, en juist daar gaat hij als eerste roesten of lekken. Aan de nieuwere huizen in Veghel zelf hangen vooral kunststof goten. Die zetten uit als het warm is en krimpen bij vorst, en na een paar jaar schiet er dan een hoekstuk of eindstuk los. Vaak is het genoeg om de goot weer op afschot te hangen of één hoekstuk te vervangen. Een nieuwe goot raad ik pas aan als het materiaal zelf op is.",
  },
  // Dakgoot repareren of vervangen in Oisterwijk, met Moergestel en Haaren (Search Console: dakgoot reparatie oisterwijk plek 20, dakgoot vernieuwen oisterwijk plek 59), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Oisterwijk
  {
    plaats: "oisterwijk",
    dienst: "dakgoot-vervangen",
    hook: "Oisterwijk is al meer dan honderd jaar geliefd om te wonen tussen de bossen en vennen, en in de lanen staan nog veel oude villa's met een overstekend dak. Bij zulke huizen ligt de zinken goot vaak in een houten gootlijst. Lekt het zink, dan zie je dat niet aan een druppel langs de gevel, maar aan de lijst zelf: de verf bladdert, het hout wordt zacht en er komen donkere plekken onder de goot. Daarom kijk ik bij zo'n goot ook of het hout eronder nog stevig is, want een nieuw stuk zink in een rotte lijst houdt het niet lang. In Moergestel en Haaren hangt aan veel vrijstaande huizen en boerderijen een lange goot, soms met maar één regenpijp aan het eind. Bij een stortbui kan die het water niet bijhouden en loopt de goot over aan de kant waar geen pijp zit, terwijl hij nergens lek is. Dan helpt een extra uitloop met een tweede regenpijp soms beter dan een nieuwe goot.",
  },
  // Dakgoot repareren of vervangen in Boxtel (Search Console: dakgoot lekkage boxtel plek 31, dakgoot reparatie boxtel, dakgoot vernieuwen boxtel), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Boxtel
  {
    plaats: "boxtel",
    dienst: "dakgoot-vervangen",
    hook: "In de naoorlogse wijken van Boxtel, zoals Selissen, staan veel rijtjeshuizen waar de goot van het ene huis gewoon doorloopt in die van de buren. Op de grens tussen twee huizen zit dan een naad, en daar gaat zo'n goot na veel jaren als eerste lekken. Het lastige is dat het water vaak een stukje verderop naar beneden komt. Soms druppelt het bij de buren terwijl het lek aan jouw kant zit, of andersom. Heeft de buurman zijn goot al laten vervangen door kunststof en hangt er bij jou nog zink, dan zit er op de grens een overgangsstuk. Kunststof zet bij warmte en kou veel meer uit dan zink, en juist die overgang laat na een paar jaar los. Ik kijk daarom over de hele lengte van de goot. Zit het lek op het stuk van je buren, dan zeg ik dat eerlijk, zodat jullie het samen kunnen regelen. Stuur me een foto vanaf de straat, dan zie ik vaak al of het om één naad gaat of om meer.",
  },
  // Dakreparatie in Oss (Search Console: dakreparatie oss 46 vertoningen op plek 80, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Oss
  {
    plaats: "oss",
    dienst: "dakreparatie",
    hook: "Sinds 2015 hoort ook Geffen bij de gemeente Oss. Daar staan veel twee-onder-een-kappers en vrijstaande huizen met een flink pannendak. Op oudere daken liggen de pannen langs de zijkant en vlak boven de goot vaak nog zonder stormhaak, en juist die gaan bij een harde windstoot als eerste omhoog. Ik leg ze terug en kijk meteen of er een haak bij moet. Bij de oudere rijtjes in Oss liggen soms nog pannen die niet meer gemaakt worden. Is er een kapot, dan zoek ik eerst een pan die past. Lukt dat niet, dan kan ik een oude pan van de achterkant naar voren halen en achter een nieuwe neerleggen, zodat je aan de straatkant niets ziet. Je hoort vooraf wat het kost.",
  },
  // Dakreparatie in Waalwijk (Search Console: dakreparatie waalwijk 30 vertoningen op plek 77, dakpannen waalwijk 27), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Waalwijk
  {
    plaats: "waalwijk",
    dienst: "dakreparatie",
    hook: "Op een deel van de oude huizen in Besoyen, Baardwijk en Capelle liggen nog oud-Hollandse pannen. Die hebben geen sluiting zoals een moderne pan, ze liggen alleen een stukje over elkaar heen. Waait er één scheef of breekt er één, dan loopt het water er makkelijk onder door. Een nieuwe pan in dezelfde vorm is meestal wel te krijgen, maar de kleur wijkt vaak af van je oude pannen. Dat zeg ik je vooraf eerlijk, zodat je niet voor een verrassing staat. In de nieuwere wijken van Waalwijk zijn de daken nog jong. Moet daar al iets gerepareerd worden, kijk dan eerst of de bouwer het nog moet oplossen. Is dat niet zo, dan kom ik kijken en hoor je vooraf de vaste prijs.",
  },
  // Daklekkage in Uden (Search Console: daklekkage uden 25 vertoningen op plek 67, dakgoot lekkage uden plek 33), met andere lokale inhoud dan plaatsen.ts en de andere lekkagepagina's
  {
    plaats: "uden",
    dienst: "daklekkage",
    hook: "In wijken als Bitswijk en Hoenderbos staan veel rijtjeshuizen en twee-onder-een-kappers van zo'n veertig, vijftig jaar oud. Bij een deel daarvan is de goot in de loop der jaren wat gezakt. Dan steken de onderste pannen niet ver genoeg meer in de goot, en bij een flinke bui loopt het water achter de goot langs de muur in. Binnen zie je dat als een natte plek op de muur onder de goot of naast het kozijn, en dat lijkt op een daklek. Bij oudere huizen rond het centrum is de schoorsteen soms weggehaald toen er een cv-ketel kwam, en is het gat met pannen dichtgelegd. Is dat destijds niet goed aangesloten, dan lekt het jaren later precies op die plek. Sinds 2022 hoort Uden bij de gemeente Maashorst, maar voor mij is het gewoon 25 minuten rijden vanaf Den Bosch. Stuur me een foto van de natte plek en van die kant van je dak, dan zoek ik gericht.",
  },
];
