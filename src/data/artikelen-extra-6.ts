/**
 * Nieuwe kennisartikelen en korte antwoorden sinds 19-11-2026 (ronde 4).
 * artikelen-extra-5.ts zet ze achter ARTIKELEN_EXTRA_5 en in KORT_ANTWOORD_5.
 * 19-11-2026 ronde 4: dakdekker, loodgieter of een ander vak, wie bel je?
 * 19-11-2026 ronde 5: je mansardedak lekt.
 * 20-11-2026 ronde 2: je serre lekt bij de muur.
 * 20-11-2026 ronde 2: je dakluik lekt.
 * 20-11-2026 ronde 3: welke dakgoot heb ik.
 * 20-11-2026 ronde 3: je dak winterklaar maken.
 * 20-11-2026 ronde 3: welk soort dak heb ik.
 * 20-11-2026 ronde 4: je dakgoot lekt aan het eind, bij het eindstuk.
 * 20-11-2026 ronde 4: welke dakbedekking ligt er op je platte dak.
 * 21-11-2026 ronde 1: het dak van je appartementengebouw lekt (VvE).
 * 21-11-2026 ronde 1: je dakdekker komt niet opdagen of maakt het werk niet af.
 */
import type { Artikel } from "./artikelen";

export const ARTIKELEN_EXTRA_6: Artikel[] = [
  {
    slug: `welke-vakman-voor-je-dak`,
    datum: `2026-11-19`,
    titel: `Dakdekker, loodgieter of een ander vak: wie bel je?`,
    h1: `Dakdekker, loodgieter, installateur of metselaar: wie bel je voor welk werk aan je dak?`,
    metaTitle: `Dakdekker of ander vak: wie bel je? | Spoed Dak Service`,
    metaDescription: `Lekt je dak, je goot, je schoorsteen of een leiding? Zo weet je welk werk bij een dakdekker hoort, en wanneer je een loodgieter, installateur of metselaar belt.`,
    intro: `Rond je dak werken veel verschillende vakmensen: de dakdekker, de loodgieter, de installateur, de schoorsteenveger, de metselaar en soms een hovenier. Bel je de verkeerde, dan verlies je tijd, en bij een lek telt elke dag. Hieronder staat per klus wie je het beste kunt bellen, en wat ik zelf wel en niet doe. Twijfel je, stuur me dan een foto: ik zeg eerlijk of het bij mij hoort.`,
    secties: [
      { kop: `Werk voor de dakdekker`, tekst: [
        `Alles wat de regen buiten moet houden: de pannen, de nok, het lood of de loodvervanger rond de schoorsteen, het dakraam en langs een muur, de dakgoten en de regenpijp langs de gevel, de windveer langs de zijkant van het dak en de kraag of doorvoerpan rond een pijp door het dak. Ook een lek opsporen en dichtmaken hoort hierbij, net als het platte dak van een aanbouw, garage of schuur. Dat is mijn werk. Zie <a href="/diensten/">wat ik allemaal doe</a>.`,
      ] },
      { kop: `Loodgieter: water dat niet van buiten komt`, tekst: [
        `Druppelt het ook na een paar droge dagen, zit er een badkamer, keuken of leiding boven de natte plek, of draait je watermeter terwijl alle kranen dicht zijn? Dan komt het water meestal uit een leiding of een afvoer, en dan bel je een loodgieter. Ook een verstopping in de regenpijp onder de grond of in het riool is werk voor een loodgieter of een ontstoppingsbedrijf. Lees ook <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">dakdekker of loodgieter bij lekkage</a>.`,
      ] },
      { kop: `Installateur: cv-ketel, warmtepomp, zonnepanelen en elektra`, tekst: [
        `Lekt er water uit de cv-ketel zelf, uit de leidingen van een warmtepomp, airco of zonneboiler, of moet een zonnepaneel los of verplaatst worden, dan is dat werk voor de installateur. Komt het water bij regen langs zo'n pijp of kabel door het dak naar binnen, dan maak ik die plek dicht. Is er water bij een lamp, een stopcontact of in de meterkast gekomen, laat de elektra dan nakijken door een installateur, en zoek ik waar het water vandaan komt. Zie <a href="/kennisbank/lekkage-warmtepomp-of-airco/">lekkage sinds de warmtepomp of airco</a> en <a href="/kennisbank/aardlekschakelaar-slaat-af-bij-regen/">aardlekschakelaar slaat af bij regen</a>.`,
      ] },
      { kop: `Schoorsteenveger en metselaar: het kanaal en de stenen`, tekst: [
        `Het vegen en nakijken van het kanaal doet een erkende schoorsteenveger. Scheuren in de stenen, losse voegen of een gevel die water doorlaat, zijn werk voor een metselaar of een gevelspecialist. Aan stenen en voegen werk ik niet. Wel herstel ik het lood en de pannen rond de schoorsteen, en zet ik er een kap of afdekplaat op als er regen in het kanaal valt. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/doorslaand-vocht-of-daklek/">doorslaand vocht of een daklek</a>.`,
      ] },
      { kop: `Timmerman, isolatiebedrijf en stukadoor`, tekst: [
        `Lekt het langs een kozijn halverwege de gevel, of moet een raam of kozijn vervangen worden, dan is dat werk voor een timmerman of kozijnspecialist. Daken isoleren doe ik niet: dat doet een isolatiebedrijf, en ik zorg dat het dak eerst droog en dicht is. Is je plafond na een lek beschadigd, dan laat je het na het drogen herstellen door een stukadoor. Lees ook <a href="/kennisbank/plafond-drogen-na-lekkage/">plafond drogen na een lekkage</a>.`,
      ] },
      { kop: `Bomen, dieren en asbest`, tekst: [
        `Takken boven je dak laat je snoeien door een hovenier of boomverzorger. Voor een marter of een ander dier onder je dak bel je eerst een bedrijf in plaagdierbeheersing. Oude grijze golfplaten van voor 1994 kunnen asbest bevatten: laat die eerst onderzoeken, want daarin boor of zaag ik niet. Wat er daarna op je dak beschadigd is, zoals verschoven pannen of een losse nokvorst, herstel ik. Zie <a href="/kennisbank/tak-of-boom-op-dak/">tak of boom op je dak</a> en <a href="/kennisbank/marter-onder-dakpannen/">een marter onder je dakpannen</a>.`,
      ] },
      { kop: `Wat ik zelf niet doe`, tekst: [
        `Schoorsteen vegen, daken schoonmaken of ontmossen, zonnepanelen schoonmaken of plaatsen, daken isoleren en werk aan de stenen van een gevel of schoorsteen doe ik niet. Lichtjes ophangen ook niet. Zie ik dat jouw klus beter bij een ander vak past, dan zeg ik dat meteen, zodat je niet voor niets op iemand wacht.`,
      ] },
      { kop: `Twijfel je?`, tekst: [
        `Lekt het nu, kijk dan eerst op de <a href="/spoed/">spoedpagina</a> wat je zelf meteen kunt doen. Stuur daarna een foto van de natte plek en van je dak vanaf de straat via WhatsApp. Ik zeg eerlijk of het bij mij hoort, en zo niet, wie je beter kunt bellen. Hoort het wel bij mij, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: wat ik allemaal doe`, href: `/diensten/` },
    faq: [
      { v: `Wie bel ik als het lekt en ik niet weet waar het vandaan komt?`, a: `Kijk wanneer het nat wordt. Alleen tijdens of na regen wijst meestal naar het dak of de goot, en dan kun je mij bellen. Ook na droge dagen, of vooral als er gedoucht of gestookt wordt, wijst eerder naar een leiding of de cv-ketel. Twijfel je, stuur dan een foto via WhatsApp, dan zeg ik eerlijk wie je het beste kunt bellen.` },
      { v: `Wie repareert een lekkende dakgoot?`, a: `Een lekkende dakgoot is werk voor de dakdekker: een naad solderen, een hoekstuk vervangen, de goot weer op afschot hangen of een stuk vervangen. Zit de verstopping lager, in de regenpijp onder de grond of in het riool, dan heb je een loodgieter of een ontstoppingsbedrijf nodig.` },
      { v: `Er liggen zonnepanelen op mijn dak en het lekt. Wie bel ik?`, a: `Vaak allebei. Ik kijk naar de pannen onder en rond de panelen en naar de plek waar de kabel door het dak gaat. Moet er een paneel los om bij een pan te komen, dan doet de installateur dat, en dat stemmen we vooraf af.` },
    ],
  },
  {
    slug: `mansardedak-lekt`,
    datum: `2026-11-19`,
    titel: `Lekt je mansardedak?`,
    h1: `Mansardedak lekt: bij de knik, rond een raam of in de goot?`,
    metaTitle: `Mansardedak lekt: waar zit het? | Spoed Dak Service`,
    metaDescription: `Lekt je mansardedak? Meestal zit het bij de knik tussen het steile en het flauwe deel, rond een raam in het steile deel of in de bakgoot. Zo vind je het.`,
    intro: `Een mansardedak herken je aan de knik: onderaan een steil deel dat bijna rechtop staat, en daarboven een flauwer deel tot aan de nok. Zo'n dak geeft veel ruimte op zolder, maar het heeft ook een paar plekken waar het vaker lekt dan een gewoon schuin dak. Hieronder lees je waar dat meestal is, hoe je het binnen herkent en wat je zelf doet.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep van die kamer uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op. Het steile deel van een mansardedak is te steil om op te staan, ook niet om even te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo herken je een mansardedak`, tekst: [
        `Kijk vanaf de overkant van de straat naar de zijkant van je huis. Loopt het dak niet in één rechte lijn naar de nok, maar zit er halverwege een knik, dan heb je een mansardedak. Het onderste deel is steil, het bovenste deel flauw, en soms is dat bovenste deel helemaal plat. Je ziet zo'n dak vooral op huizen en villa's van rond 1900 tot de jaren '30, en soms op nieuwere huizen die er zo op lijken. Binnen merk je het aan kamers met wanden die eerst bijna recht omhoog gaan en bovenin schuin naar binnen lopen.`,
      ] },
      { kop: `Bij de knik`, tekst: [
        `De knik is de plek waar het water van het flauwe deel over de rand naar het steile deel loopt. Daar ligt meestal een strook lood of zink, of een rij pannen die de bocht volgt. Scheurt dat lood na veel jaren, staat het omhoog of ligt een pan niet meer goed in de rij, dan loopt het water op die plek onder de pannen naar binnen. Binnen zie je dat meestal boven in de kamer, waar de wand overgaat in het schuine stuk of in het plafond. Hoe je vanaf de straat ziet of lood nog goed ligt, lees je bij <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Rond een raam in het steile deel`, tekst: [
        `In het steile deel zitten vaak ramen. Rond zo'n raam zitten aansluitingen van lood of zink: langs de zijkanten, en onder het raam een strook die het water over de pannen leidt. Laat zo'n aansluiting los, dan komt het water langs de zijkant van het raam of eronder naar binnen. Zie je alleen druppels op het glas en het kozijn, vooral op koude ochtenden, dan is het eerder condens dan een lek.`,
      ] },
      { kop: `In de goot onderaan`, tekst: [
        `Onderaan het steile deel ligt vaak een bakgoot: een goot die in de rand van het dak is gebouwd, achter een houten lijst. Lekt die bij een naad of een hoek, dan loopt het water niet langs de gevel naar beneden, maar komt het binnen, in de muur of onderaan in de kamer. Meer lees je bij <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Het bovenste deel`, tekst: [
        `Het flauwe bovenste deel vangt veel wind. Bij harde wind kan de regen daar onder de pannen door waaien, zeker als een pan een stukje is verschoven: lees <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>. Is het bovenste deel plat, dan zit een lek meestal bij de afvoer, de rand of een naad: zie <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het nat is, en daarna buiten bij de knik, de ramen, de goot en het bovenste deel. Gescheurd of los lood bij de knik of rond een raam zet ik weer vast of vervang ik, meestal met loodvervanger en op wens met echt lood. Losse of gebroken pannen leg ik terug of vervang ik door pannen die passen. Een lekke naad in een zinken bakgoot soldeer ik opnieuw, of ik coat de goot van binnen als het zink op meer plekken dun is. Liggen er op het steile deel leien in plaats van pannen, stuur dan eerst een foto: dan zeg ik eerlijk of ik het herstel zelf kan doen. Woon je in een monument, lees dan ook <a href="/kennisbank/dak-monument-repareren/">je dak repareren in een monument</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van waar het lekt en hoe goed ik erbij kan. Stuur een foto van je dak vanaf de straat en van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost. Welke foto's het meest helpen, lees je bij <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Hoe weet ik of het lek bij de knik zit?`, a: `Kijk na een bui waar het nat is. Zit de natte plek boven in de kamer, waar de bijna rechte wand overgaat in het schuine stuk of het plafond, dan is de knik de eerste plek om te kijken. Zit hij laag in de kamer of in de muur onder het raam, dan komt het water vaker van de goot of de onderkant van een raam. Stuur me een foto van de natte plek en van het dak vanaf de straat, dan zeg ik waar ik zou beginnen.` },
      { v: `Kan ik zelf op het steile deel een pan terugleggen?`, a: `Liever niet. Het steile deel staat bijna rechtop, en daar sta je niet veilig, ook niet met een ladder. Een pan op zo'n steil vlak zit vaak met een haak of draad vast, en die moet weer goed vast als de pan teruggaat. Kijk vanaf de straat met de zoom van je telefoon waar een pan ontbreekt of scheef ligt, en stuur me die foto. Je hoort vooraf wat het kost.` },
      { v: `Op het steile deel liggen leien. Kom je daar ook voor?`, a: `Stuur eerst een foto. Gaat het om het lood bij de knik, de goot of de pannen op het bovenste deel, dan help ik je. Bij leien zeg ik na de foto eerlijk of ik het herstel zelf kan doen, of dat je beter iemand kunt vragen die daarin gespecialiseerd is.` },
    ],
  },
  {
    slug: `serre-lekt`,
    datum: `2026-11-20`,
    titel: `Lekt je serre bij de muur?`,
    h1: `Serre lekt bij de muur van het huis: de aansluiting, de goot of de serre zelf?`,
    metaTitle: `Serre lekt bij de muur: waar zit het? | Spoed Dak Service`,
    metaDescription: `Druppelt het in je serre of glazen uitbouw langs de muur van het huis? Vaak zit het in de aansluiting tegen de gevel of in de goot erboven. Zo zie je waar.`,
    intro: `Een serre is een glazen of half glazen uitbouw tegen je huis. Lekt het erin, dan denk je eerst aan het glas. Toch zit het vaak ergens anders: in de aansluiting waar de serre tegen de gevel komt, of in de goot of het dak erboven. Hieronder lees je hoe je ziet waar het water binnenkomt, wat ik eraan doe en wanneer je beter de leverancier van de serre belt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of handdoek onder de druppel en haal kussens, planten en elektrische spullen weg. Zit er een lamp of stopcontact bij de natte plek, zet dan in de meterkast de groep uit. Ga niet op het dak van de serre staan: glas en kunststof platen kunnen breken, ook als ze stevig lijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Langs de muur van het huis`, tekst: [
        `De bovenkant van een serre zit vast tegen de gevel. Daar hoort een strook lood, loodvervanger of een profiel die over de aansluiting valt, zodat het water van de muur op het dak van de serre loopt en niet erachter. Laat die strook los, is hij te kort of zit er alleen een kitnaad die na een paar jaar is gescheurd, dan loopt het regenwater langs de muur naar binnen. Binnen zie je dat als druppels of een natte streep bovenin, vlak tegen de gevel, vaak over een groot stuk van de breedte. Een kitnaad alleen houdt het meestal niet lang droog.`,
      ] },
      { kop: `Water van hoger op het huis`, tekst: [
        `Soms komt het water niet van de serre, maar van erboven. Hangt de dakgoot van het huis boven de serre en loopt die over, of lekt er een naad, dan valt het water met kracht op de aansluiting. Ook een regenpijp die op het dak van de serre uitkomt, zet veel water op één plek. Kijk tijdens een bui of er water over de goot van het huis komt. Lees ook <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/regenpijp-loost-op-dak/">je regenpijp komt uit op het dak eronder</a>.`,
      ] },
      { kop: `De goot van de serre`, tekst: [
        `Aan de voorkant van de serre zit meestal een eigen, smalle goot. Zit die vol blad, dan blijft het water op het dak van de serre staan en zoekt het een weg langs de rubbers naar binnen. Leegmaken is dan vaak genoeg. Dat gootje neem ik mee als ik toch je dakgoten leegmaak.`,
      ] },
      { kop: `Tussen het glas of de platen`, tekst: [
        `Komt het water binnen tussen twee glasplaten, langs een profiel midden in het dak of bij een raam of deur van de serre zelf, dan zit het in de serre. Dat is werk voor de leverancier of de monteur van de serre, en dat zeg ik je eerlijk. Druppelt het alleen op koude ochtenden, ook na een droge nacht, dan is het vaak condens aan de binnenkant van het glas en geen lek.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het water binnenkomt, en daarna buiten naar de aansluiting tegen de gevel, de goot en het dak erboven. Een losse of te korte strook zet ik weer vast of vervang ik, meestal met loodvervanger en op wens met echt lood, zodat hij weer over de aansluiting valt. Ligt het aan de goot van het huis, dan maak ik die leeg of repareer ik de naad. Zit het in de serre zelf, dan hoor je dat meteen. Zie <a href="/diensten/lood-vervangen/">lood vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van waar het lekt en hoe goed ik erbij kan. Stuur een foto van de natte plek binnen en een van de serre en de muur erboven van buiten via WhatsApp, dan hoor je vooraf wat het kost. Welke foto's het meest helpen, lees je bij <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: lood vastzetten of vervangen`, href: `/diensten/lood-vervangen/` },
    faq: [
      { v: `Kan ik de naad tussen de serre en de muur zelf dichtkitten?`, a: `Voor even kan dat helpen, maar meestal niet lang. Kit hecht slecht op een natte of vuile muur, en scheurt als de serre en het huis door warmte en kou net iets anders bewegen. Bovendien loopt het water vaak al hoger achter de strook naar binnen, en dan houdt kit onderaan het niet tegen. Beter is een strook lood of loodvervanger die over de aansluiting valt. Stuur me een foto, dan zeg ik wat ik zie.` },
      { v: `Mijn serre lekt alleen bij harde wind en regen. Hoe kan dat?`, a: `Dan waait de regen waarschijnlijk tegen de muur boven de serre en loopt hij achter een strook of profiel naar binnen dat bij gewone regen nog net droog blijft. Ook regen die onder een losse rand of een rubber door wordt geblazen, zie je vooral bij wind. Kijk na zo'n bui waar het als eerste nat is: bovenin tegen de muur wijst naar de aansluiting, midden in het dak eerder naar de serre zelf.` },
    ],
  },
  {
    slug: `dakluik-lekt`,
    datum: `2026-11-20`,
    titel: `Lekt je dakluik?`,
    h1: `Dakluik lekt: de rand, het rubber of het platte dak eromheen?`,
    metaTitle: `Dakluik lekt: rand, rubber of condens? | Spoed Dak Service`,
    metaDescription: `Druppelt het langs je dakluik naar het platte dak? Meestal zit het in de opstaande rand, het rubber van het luik of in water dat tegen het luik blijft staan.`,
    intro: `Een dakluik is een luik in een plat dak waardoor je met een trap of ladder het dak op kunt, bijvoorbeeld bij een bovenwoning, een portiekflat of een huis met een dakterras. Zo'n luik ligt laag op het dak, en daardoor lekt het vaker dan je denkt. Hieronder lees je waar het meestal zit, hoe je het herkent en wat je zelf kunt doen.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en leg een handdoek op de trap of de vloer, want een natte trap is glad. Ga niet het dak op als het regent, waait, glad of donker is. Kijk wel of het luik goed dicht zit en of de sluiting vastzit. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `De opstaande rand`, tekst: [
        `Een dakluik staat op een opstaande rand, meestal van hout, waar de dakbedekking van het platte dak tegen omhoog loopt. Laat de dakbedekking daar los, scheurt hij in een hoek of is de rand te laag, dan loopt het water bij een flinke bui over of achter de dakbedekking naar binnen. Binnen zie je dat als een natte plek op de rand of op het plafond rond het luik, vaak in een hoek. Is het hout van de rand al zacht, dan moet dat eerst worden hersteld. Lees ook <a href="/kennisbank/zachte-plek-plat-dak/">zachte plek op je platte dak</a>.`,
      ] },
      { kop: `Het rubber en de sluiting`, tekst: [
        `Tussen het luik en de rand zit een rubber dat het luik afdicht. Na veel jaren wordt dat hard, gaat het scheuren of laat het los, en dan waait de regen er bij wind onderdoor. Ook een luik dat scheef hangt of niet goed meer sluit, laat water door. Druppelt het vooral langs de rand van het luik zelf, en alleen bij wind en regen, dan is het rubber vaak de eerste plek om te kijken.`,
      ] },
      { kop: `Water dat tegen het luik blijft staan`, tekst: [
        `Ligt het luik op een lage plek van het dak, of zit de afvoer vol blad of grind, dan blijft er na een bui een plas tegen de rand staan. Komt die hoger dan de rand, dan loopt het water zo naar binnen. Kijk vanuit een raam boven of er na een bui water rond het luik blijft staan. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Lek of condens?`, tekst: [
        `Een dakluik is vaak dunner dan de rest van het dak. Op koude ochtenden slaat vocht uit huis neer tegen de binnenkant, en dat druppelt dan naar beneden. Gebeurt het ook na een droge, koude nacht, dan is het meestal condens en geen lek. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>. Is je luik een lichtkoepel die open kan, kijk dan ook bij <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het water binnenkomt en daarna op het dak naar de rand, de dakbedekking eromheen en de afvoer. Een losse of gescheurde aansluiting van de dakbedekking tegen de rand maak ik weer dicht, en een afvoer vol blad of grind maak ik vrij. Is het hout van de rand rot, dan hoor je dat voordat ik verder ga. Zit het in het rubber of in het luik zelf, dan zeg ik eerlijk wat er nodig is en wie dat het beste kan doen. Zie <a href="/diensten/platte-daken/">plat dak repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van waar het lekt en hoeveel er hersteld moet worden. Stuur een foto van de natte plek binnen en, als dat veilig kan, een van het luik en het dak eromheen, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: plat dak repareren of vervangen`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Hoort het dakluik bij mij of bij de VvE?`, a: `Dat staat in de splitsingsakte. Bij een appartement of bovenwoning is het dak, met het dakluik erin, meestal van alle eigenaren samen, en dan meld je een lek bij het bestuur of de beheerder van de VvE. Huur je, meld het dan bij je verhuurder. Meer lees je in het artikel over een lekkend dak bij een boven- en benedenwoning.` },
      { v: `Het lekt alleen als ik het luik heb opengehad. Hoe kan dat?`, a: `Dan sluit het luik na het openen waarschijnlijk niet meer helemaal goed. Het rubber kan dubbel zijn geklapt, er kan vuil of grind tussen zitten, of de sluiting trekt het luik niet meer goed aan. Kijk na het sluiten of het rubber rondom netjes aanligt en of het luik recht op de rand ligt. Lekt het daarna nog, stuur me dan een foto van het luik van binnen en, als het veilig kan, van buiten.` },
    ],
  },
  {
    slug: `welke-dakgoot-heb-ik`,
    datum: `2026-11-20`,
    titel: `Welke dakgoot heb ik?`,
    h1: `Welke dakgoot heb ik? Zo herken je je goot vanaf de straat`,
    metaTitle: `Welke dakgoot heb ik? Zo herken je hem | Spoed Dak Service`,
    metaDescription: `Hangende goot van zink of kunststof, bakgoot, mastgoot, verholen goot, zakgoot of kilgoot? Zo herken je je dakgoot, en waarom dat uitmaakt als hij lekt.`,
    intro: `Lekt je goot, of wil je weten wat er nodig is, dan helpt het om te weten wat voor goot je hebt. Er zijn er meer dan je denkt: een goot die voor het dak hangt, een goot die in de dakrand ligt, een houten goot op klossen, en goten die in of tussen de daken liggen. Ze lekken op andere plekken, en bij sommige komt het water niet buiten maar binnen terecht. Hieronder lees je hoe je ze vanaf de straat herkent.`,
    secties: [
      { kop: `Kijk eerst vanaf de overkant van de straat`, tekst: [
        `Ga aan de overkant staan en kijk met de zoom van je telefoon naar de onderkant van je dak. Hangt er een goot voor de onderste rij pannen, of zie je alleen een houten lijst of rand? Zit er een brede houten bak op steunen voor de gevel? En waar komt de regenpijp bovenaan uit: in een goot die je ziet, of verdwijnt hij in de dakrand? Daarmee weet je vaak al genoeg. Ga er niet voor op een ladder staan.`,
      ] },
      { kop: `Een hangende goot van zink`, tekst: [
        `Een hangende goot hangt met beugels aan de voorkant van het dak, net onder de onderste rij pannen. Een zinken goot is grijs en mat, en wordt na een paar jaar donkerder. De stukken zijn aan elkaar gesoldeerd, dus bij de naden en de hoeken zie je dunne randjes soldeer en geen losse verbindingsstukken. Lekt zo'n goot, dan zie je dat meestal buiten: een druppel op één vaste plek of een groene streep op de gevel. Een lekke naad is vaak opnieuw te solderen. Lees <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
      ] },
      { kop: `Een hangende goot van kunststof`, tekst: [
        `Een kunststof goot hangt op dezelfde manier, maar is glad en heeft vaak een duidelijke kleur: grijs, wit, zwart of bruin. De stukken zitten met verbindingsstukken in elkaar, en op de hoeken zit een los hoekstuk. Daar lekt hij ook het vaakst, als het rubber of de lijm na jaren is uitgedroogd. Meestal is dat ene stuk te vervangen. Lees <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a>. Moet er een nieuwe goot komen en twijfel je, kijk dan bij <a href="/kennisbank/dakgoot-zink-of-kunststof/">dakgoot vervangen: zink of kunststof</a>.`,
      ] },
      { kop: `Een bakgoot achter een houten lijst`, tekst: [
        `Zie je aan de voorkant geen goot, maar een houten lijst of een rand onderaan het dak, dan ligt de goot vaak daarachter, als een bak in de rand van het dak, bovenop de muur. Zo'n bakgoot is meestal van zink, en je ziet hem vooral bij huizen van voor de oorlog. Lekt een bakgoot, dan loopt het water niet langs de gevel, maar de muur in, en zie je het binnen bovenin de muur of langs het kozijn. Lees <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Een mastgoot op klossen`, tekst: [
        `Een mastgoot is een brede houten goot die op klossen voor de gevel ligt, onder de rand van het dak. Binnenin zit meestal zink. Je herkent hem aan de dikke houten bak die een stuk voor de muur uitsteekt. Lekt het zink, dan wordt eerst het hout nat: de verf bladdert en het hout wordt zacht. Lees <a href="/kennisbank/mastgoot-lekt/">mastgoot lekt</a>.`,
      ] },
      { kop: `Goten die in of tussen de daken liggen`, tekst: [
        `Een verholen goot ligt in het dakvlak zelf, een stukje boven de onderrand van het dak. Van beneden zie je hem moeilijk, wel een regenpijp die bovenaan in het dak verdwijnt. Een zakgoot ligt bijna vlak in het dal tussen twee daken die naar elkaar toe lopen, bijvoorbeeld tussen twee panden of tussen het huis en een aanbouw. Die zie je meestal alleen vanuit een raam boven of op een luchtfoto. Een kilgoot ligt schuin in de hoek waar twee dakvlakken samenkomen, zoals bij een huis met een hoek of een aanbouw met een eigen schuin dak. Lekt een van deze goten, dan komt het water meestal binnen. Lees <a href="/kennisbank/verholen-goot-lekt/">verholen goot lekt</a>, <a href="/kennisbank/zakgoot-lekt/">zakgoot lekt</a> en <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Waarom het uitmaakt welke goot je hebt`, tekst: [
        `Bij een hangende goot valt een lek buiten, en dan kan het vaak een paar dagen wachten. Bij een bakgoot, verholen goot, zakgoot of kilgoot komt het water binnen, en dan wacht je beter niet. Ook de reparatie verschilt. Een lekke naad in zink soldeer ik opnieuw, en is het zink op meer plekken dun, dan kan ik de goot van binnen coaten. Bij kunststof vervang ik een losse verbinding of een hoekstuk. Is een goot echt op, dan vervang ik hem. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-coaten/">dakgoot van binnen coaten</a>.`,
      ] },
      { kop: `Twijfel je?`, tekst: [
        `Maak vanaf de straat een foto van de onderkant van je dak, en een van de plek waar de regenpijp bovenaan uitkomt. Lekt het binnen, maak dan ook een foto van de natte plek. Stuur ze via WhatsApp, dan zeg ik wat voor goot je hebt en wat er nodig is. Je hoort vooraf wat het kost. Welke foto's het meest helpen, lees je bij <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Hoe zie ik of mijn goot van zink of kunststof is?`, a: `Kijk naar de kleur en de naden. Zink is grijs en mat, wordt na een paar jaar donkerder en heeft dunne gesoldeerde naden. Kunststof is glad, heeft vaak een duidelijke kleur zoals grijs, wit, zwart of bruin, en zit met losse verbindingsstukken en hoekstukken in elkaar. Twijfel je, stuur dan een foto van een hoek van de goot.` },
      { v: `Ik zie aan de voorkant van mijn huis geen goot. Heb ik er dan geen?`, a: `Meestal wel, maar dan ligt hij in het dak. Vaak is het een bakgoot achter de houten lijst, of een verholen goot die wat hoger in het dakvlak ligt. Kijk waar de regenpijp bovenaan uitkomt: verdwijnt hij in de dakrand of in het dak, dan ligt de goot daar. Stuur me een foto van de dakrand vanaf de straat, dan zeg ik wat ik zie.` },
      { v: `Welke goten lekken naar binnen?`, a: `Een bakgoot, een verholen goot, een zakgoot en een kilgoot liggen op of in het dak, boven de muur of de zolder. Lekt een van die goten, dan komt het water meestal binnen, bovenin de muur, op het plafond of op zolder. Een hangende goot en een mastgoot zitten voor de gevel, en daar valt een lek meestal buiten. Komt het water binnen, stuur me dan zo snel je kunt een foto.` },
    ],
  },
  {
    slug: `dak-winterklaar-maken`,
    datum: `2026-11-20`,
    titel: `Je dak winterklaar maken?`,
    h1: `Je dak winterklaar maken: wat je nakijkt voordat het gaat vriezen en stormen`,
    metaTitle: `Dak winterklaar maken: wat kijk je na? | Spoed Dak Service`,
    metaDescription: `Voor de winter je dak nakijken? Zo kijk je vanaf de straat en op zolder naar pannen, nok, lood en goot, en dit laat je doen voordat het gaat vriezen.`,
    intro: `In de winter krijgt je dak het zwaar: storm, regen die dagen aanhoudt, sneeuw en vorst. Wat in de herfst nog een losse pan of een volle goot was, wordt dan sneller een lek. Veel zie je zelf, vanaf de straat en op zolder, zonder het dak op te gaan. Hieronder lees je waar je naar kijkt, wat je zelf kunt doen en wat je beter laat doen.`,
    secties: [
      { kop: `Het beste moment`, tekst: [
        `Als de meeste bomen kaal zijn en voordat het gaat vriezen. Dan ligt het blad in de goot en niet meer in de boom, en kan er op een droge dag nog gewerkt worden zonder ijs op de pannen. Is dat moment voorbij, dan kan het meeste werk nog steeds, op een droge dag zonder vorst. Lees ook <a href="/kennisbank/dak-repareren-in-de-winter/">je dak repareren in de winter</a>.`,
      ] },
      { kop: `Kijk vanaf de straat`, tekst: [
        `Ga aan de overkant van de straat staan en zoom met je telefoon in. Liggen de rijen pannen recht, zonder een pan die uitsteekt of een donkere streep waar er een is gaan schuiven? Liggen de nokvorsten recht op de nok, en ligt het lood rond de schoorsteen en een dakraam strak tegen de stenen en over de pannen? Hangt de goot recht, of groeit er gras of een plantje uit? Staat er nog een oude antenne die bij storm heen en weer gaat? Lees <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>, <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a> en <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Kijk op zolder`, tekst: [
        `Ga na een flinke bui met een zaklamp naar zolder. Kijk naar het hout, de folie of de platen onder de pannen: een donkere kring of een natte plek wijst op een lek, ook als je beneden nog niets ziet. Zie je op een droge dag daglicht tussen de pannen, dan kan daar bij storm regen of stuifsneeuw door waaien. Lees <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a> en <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `De goot en de regenpijp`, tekst: [
        `Een goot vol blad houdt water vast. Gaat het vriezen, dan zet het ijs uit en kan het een naad of een hoek openduwen, en bij dooi loopt het smeltwater terug onder de pannen. Laat de goot daarom leegmaken als het blad gevallen is, en let vooral op de uitloop naar de regenpijp. Zit er een regenton aan de regenpijp, kijk dan of het water er bij vorst nog door kan. Lees <a href="/kennisbank/dakgoot-schoonmaken-in-de-winter/">je dakgoot schoonmaken in de winter</a> en <a href="/kennisbank/regenpijp-kapot-door-vorst/">regenpijp kapot door vorst</a>.`,
      ] },
      { kop: `Heb je een plat dak?`, tekst: [
        `Kijk vanuit een raam boven of de afvoer vrij is en of er na een bui geen plas blijft staan. Blad, takjes en mos in de afvoer zijn in de winter een bekende oorzaak van water dat naar binnen loopt, zeker als het daarna gaat vriezen. Lees <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Bomen en takken`, tekst: [
        `Hangen er takken over je dak, laat die dan voor de stormen snoeien door een hovenier of boomverzorger. Een tak die bij storm over de pannen schuurt of erop valt, breekt makkelijk een pan. Lees <a href="/kennisbank/tak-of-boom-op-dak/">tak of boom op je dak</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet zelf het dak op, ook niet om even een pan recht te leggen. Natte pannen, blad en rijp zijn glad. Zet geen ladder tegen de goot, want die deukt of breekt. En smeer geen kit op een naad of een pan: dat laat bij vorst los en moet er later weer af.`,
      ] },
      { kop: `Wat ik in één bezoek kan doen`, tekst: [
        `Ik maak de goten en de uitloop naar de regenpijp leeg en kijk meteen naar de nok, de pannen en het lood rond de schoorsteen en het dakraam. Zit er iets los, dan hoor je eerst wat het kost om het vast te zetten, en dan beslis jij. Wil je een verslag met foto's van je hele dak, dan is de <a href="/dak-apk/">Dak-APK</a> handiger. Stuur een foto van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Is het in december te laat om mijn dak winterklaar te maken?`, a: `Nee. Zolang het droog is en er geen ijs op de pannen of in de goot ligt, kunnen de goot leegmaken en een losse pan vastzetten gewoon. Alleen werk met dakmortel of lijm wacht op een dag zonder vorst. Ligt er sneeuw of ijs op het dak, dan wacht ik tot het veilig is.` },
      { v: `Moet mijn dak elk jaar voor de winter nagekeken worden?`, a: `De goot laten leegmaken na de bladval is elk jaar verstandig, zeker onder bomen. Je dak zelf kun je vaak vanaf de straat en op zolder nakijken. Is je dak ouder, lag er vorige winter iets los of is er een storm geweest, laat het dan wel nakijken voordat het gaat vriezen.` },
      { v: `Wat doe ik als er in de winter na een storm iets los ligt?`, a: `Blijf weg onder de dakrand aan die kant, ga niet zelf het dak op en maak foto's voor je verzekeraar. Kijk op zolder of het nat wordt. Ligt er een stuk dak open of lekt het binnen, stuur me dan meteen een foto via WhatsApp. Meer lees je in het artikel over stormschade en eerste hulp.` },
    ],
  },
  {
    slug: `welk-soort-dak-heb-ik`,
    datum: `2026-11-20`,
    titel: `Welk soort dak heb ik?`,
    h1: `Welk soort dak heb ik? Zo herken je de vorm, en waar zo'n dak meestal lekt`,
    metaTitle: `Welk soort dak heb ik? Zo herken je het | Spoed Dak Service`,
    metaDescription: `Zadeldak, schilddak, lessenaarsdak, mansardedak of plat dak? Zo herken je je dakvorm vanaf de straat, en waar zo'n dak het eerst gaat lekken.`,
    intro: `Als je een dakdekker belt, helpt het als je kunt zeggen wat voor dak je hebt. En de vorm van je dak zegt ook iets over waar het het eerst gaat lekken. Hieronder lees je hoe je de bekendste dakvormen vanaf de straat herkent, en waar je bij elke vorm op let.`,
    secties: [
      { kop: `Zadeldak`, tekst: [
        `Twee schuine dakvlakken die bovenin tegen elkaar komen in de nok, met aan de zijkanten een rechte, driehoekige muur. Dat is de vorm van de meeste rijtjeshuizen en van veel vrijstaande huizen. Een zadeldak lekt vaak bij de nok, bij de pannen langs de schuine zijkanten en bij de schoorsteen. Langs die zijkanten liggen gevelpannen en vaak een windveer, en die vangen veel wind. Lees <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>, <a href="/kennisbank/gevelpannen-los/">losse gevelpannen</a> en <a href="/kennisbank/windveer-los-of-rot/">windveer los of rot</a>.`,
      ] },
      { kop: `Schilddak`, tekst: [
        `Vier schuine dakvlakken: ook aan de korte kanten loopt het dak schuin naar beneden, zodat er geen driehoekige muur is. Je ziet het vaak bij villa's en vrijstaande huizen. Waar twee vlakken naar buiten toe samenkomen, ligt een schuine rand met hoekvorsten, de hoekkeper. Daar en bij de nok lekt zo'n dak het vaakst. Lees <a href="/kennisbank/hoekkeper-lekt/">lekkage bij de hoekkeper</a>.`,
      ] },
      { kop: `Een dak met een hoek`, tekst: [
        `Heeft je huis een L-vorm, of staat er een aanbouw of schuur met een eigen schuin dak tegenaan, dan komen twee dakvlakken in een hoek naar binnen toe samen. Daar ligt een kilgoot, en in die kil blijft blad liggen. Een kil is een bekende plek voor een lek. Lees <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Lessenaarsdak`, tekst: [
        `Een dak met maar één schuin vlak, zonder nok in het midden. Je ziet het vaak op een aanbouw, een keuken of een schuur tegen het huis: de hoge kant ligt tegen de muur. Bovenaan, waar het dak tegen de muur komt, ligt een strook lood of loodvervanger, en daar zit een lek meestal. Lees <a href="/kennisbank/schuin-dak-aanbouw-lekt/">lekkend schuin dakje van je aanbouw</a>.`,
      ] },
      { kop: `Mansardedak`, tekst: [
        `Een dak met een knik: onderaan een steil deel dat bijna rechtop staat, daarboven een flauwer deel. Je ziet het vooral op huizen en villa's van rond 1900 tot de jaren '30. Zo'n dak lekt vaak bij de knik, rond een raam in het steile deel of in de goot onderaan. Lees <a href="/kennisbank/mansardedak-lekt/">mansardedak lekt</a>.`,
      ] },
      { kop: `Plat dak`, tekst: [
        `Een plat dak ligt bijna vlak, met een kleine helling naar de afvoer. Je vindt het op aanbouwen, garages, bergingen, bungalows en veel nieuwere huizen. Een plat dak lekt vaak bij de afvoer, bij de rand of waar het dak tegen een muur omhoog loopt. Lees <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a> en <a href="/kennisbank/bungalow-dak-lekt/">het dak van je bungalow lekt</a>.`,
      ] },
      { kop: `Schuin en plat samen`, tekst: [
        `Veel huizen hebben aan de voorkant een schuin pannendak en aan de achterkant een platte aanbouw. Waar het schuine dak overgaat in het platte, of waar het platte dak tegen de achtergevel zit, komt bij een flinke bui veel water samen. Lees <a href="/kennisbank/lekkage-overgang-schuin-plat-dak/">lekkage waar je schuine dak overgaat in een plat dak</a>.`,
      ] },
      { kop: `Weet je het niet zeker?`, tekst: [
        `Maak vanaf de overkant van de straat een foto van je huis, en als het kan ook een van de zijkant of de achterkant. Stuur die via WhatsApp, dan zeg ik wat voor dak je hebt en waar ik bij een lek als eerste zou kijken. Wil je ook weten welke pannen er liggen, lees dan <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>. De namen van de onderdelen van je dak staan bij <a href="/kennisbank/daktermen-uitgelegd/">daktermen uitgelegd</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Wat is het verschil tussen een zadeldak en een schilddak?`, a: `Een zadeldak heeft twee schuine vlakken en aan de korte kanten een rechte, driehoekige muur. Een schilddak heeft vier schuine vlakken, dus ook aan de korte kanten loopt het dak naar beneden. Bij een schilddak liggen er daarom hoekvorsten op de schuine randen, en daar let ik bij een lek extra op.` },
      { v: `Lekt een plat dak sneller dan een schuin dak?`, a: `Niet vanzelf. Op een schuin dak loopt het water snel weg, op een plat dak blijft het langer liggen. Daarom telt bij een plat dak vooral of de afvoer vrij is en of de randen en naden dicht zijn. Een goed onderhouden plat dak blijft gewoon droog. Kijk na een bui vanuit een raam boven of er een plas blijft staan.` },
      { v: `Ik weet niet hoe mijn dak heet. Kun je het aan een foto zien?`, a: `Meestal wel. Met een foto van je huis vanaf de straat, en als het kan van de zijkant, zie ik welke vorm je dak heeft en waar ik bij een lek zou beginnen. Stuur hem via WhatsApp.` },
    ],
  },
  {
    slug: `dakgoot-lekt-aan-het-eind`,
    datum: `2026-11-20`,
    titel: `Lekt je dakgoot aan het eind?`,
    h1: `Dakgoot lekt aan het eind, bij het eindstuk: waarom juist daar, en wat eraan te doen is`,
    metaTitle: `Dakgoot lekt aan het eind (eindstuk) | Spoed Dak Service`,
    metaDescription: `Druppelt je dakgoot aan het uiteinde, op de hoek bij de zijgevel? Vaak laat het eindstuk los of blijft daar water staan. Zo zie je wat het is en wat helpt.`,
    intro: `Een hangende dakgoot houdt aan het eind op met een afsluitend stuk: het eindstuk, ook wel kopschot genoemd. Druppelt je goot precies daar, op de hoek van het huis bij de zijgevel, dan is dat een bekende plek. Hieronder lees je waarom een goot juist aan het eind gaat lekken, hoe je ziet wat het is en wat je zelf kunt doen.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Valt de druppel buiten, langs de gevel of op de stoep, dan is het meestal geen spoed. Zet er iets onder als het op een pad of terras valt, zodat het daar niet glad wordt. Ga niet met een ladder tegen de goot staan om het eindstuk vast te duwen, want daarmee breek je een kunststof goot of buig je een zinken goot. Komt het water binnen, bovenin de muur of in de hoek van een kamer, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.`,
      ] },
      { kop: `Wat is het eindstuk?`, tekst: [
        `Aan het uiteinde van de goot zit een dichte kop, zodat het water er niet uit loopt. Bij een kunststof goot is dat een los kapje dat met lijm of een rubber op de goot zit. Bij een zinken goot is het een stukje zink dat erin gesoldeerd is. Je ziet het eindstuk vanaf de straat op de hoek van het huis, aan de kant waar de goot ophoudt. Weet je niet wat voor goot je hebt, lees dan <a href="/kennisbank/welke-dakgoot-heb-ik/">welke dakgoot heb ik</a>.`,
      ] },
      { kop: `Waarom een goot juist aan het eind lekt`, tekst: [
        `De lijm of het rubber is op. Een kunststof goot zet in de zon uit en krimpt als het vriest. Na veel jaren laat de lijm van het eindstuk los of wordt het rubber hard, en dan druppelt het langs de rand van het kapje. Lees ook <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a>.`,
        `De soldeernaad is gescheurd. Bij een zinken goot zit het eindstuk vast met een soldeernaad. Door warmte en kou, en door ijs dat in de winter in de goot staat, kan die naad na jaren openscheuren. Zie <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `Er blijft water staan bij het eind. Een goot hoort licht af te lopen naar de regenpijp. Hangt hij verkeerd om, of is er een beugel gezakt, dan loopt het water juist naar het eindstuk en blijft het daar staan. Het eindstuk staat dan steeds in het water, en zo'n naad houdt dat niet lang. Ook blad en mos spoelen naar dat eind en blijven daar liggen. Lees <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
        `Het eindstuk is geraakt. Een ladder die tegen het uiteinde van de goot heeft gestaan, of een tak die er bij storm tegenaan sloeg, kan het kapje losduwen of de naad openbuigen.`,
      ] },
      { kop: `Zo zie je wat het is`, tekst: [
        `Kijk tijdens of vlak na een bui vanaf de straat naar het uiteinde van de goot. Druppelt het precies onder het kapje of de naad, dan zit het in het eindstuk zelf. Loopt het water over de rand, dan staat er te veel water bij het eind, en ligt het vaker aan het afschot of aan blad. Staat er na een droge dag nog water in de goot bij het eind, dan loopt hij verkeerd af. Zie je op de zijgevel onder het uiteinde een groene of donkere streep, dan lekt het daar al een tijd: lees <a href="/kennisbank/groene-strepen-gevel-onder-dakgoot/">groene strepen op de gevel onder de dakgoot</a>.`,
      ] },
      { kop: `Druppelt het ergens anders?`, tekst: [
        `Lekt de goot op de hoek waar twee stukken goot samenkomen, lees dan <a href="/kennisbank/dakgoot-lekt-in-de-hoek/">dakgoot lekt in de hoek</a>. Druppelt het waar de regenpijp begint, kijk dan bij <a href="/kennisbank/dakgoot-lekt-bij-regenpijp/">dakgoot lekt bij de regenpijp</a>. En loopt je goot door naar de buren, zodat er op de grens geen eindstuk maar een koppelstuk zit, lees dan <a href="/kennisbank/gedeelde-dakgoot-lekt/">gedeelde dakgoot lekt</a>.`,
      ] },
      { kop: `Ligt je goot in de dakrand?`, tekst: [
        `Bij een bakgoot, een goot die in de rand van het dak ligt, zit het eind ingebouwd in de hoek van het huis. Lekt die kop, dan zie je het niet buiten, maar binnen: een natte plek bovenin de hoek van de kamer bij de zijgevel. Wacht daar niet mee, want onder het zink zit hout. Lees <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Eerst kijk ik of het aan het eindstuk zelf ligt of aan het water dat er blijft staan. Bij een kunststof goot zet ik een nieuw eindstuk op en maak ik het goed dicht. Bij een zinken goot soldeer ik de naad opnieuw. Loopt de goot verkeerd af, dan hang ik hem weer op afschot naar de regenpijp, anders gaat ook een nieuw eindstuk na een tijd weer lekken. Is de goot aan dat eind over een groter stuk dun of doorgeroest, dan vervang ik dat stuk. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is en hoe goed ik bij het eind van de goot kan. Maak tijdens of vlak na een bui een foto van het uiteinde van de goot vanaf de straat, en stuur die via WhatsApp. Dan hoor je vooraf wat het kost. Welke foto's het meest helpen, lees je bij <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Kan ik een los eindstuk zelf weer vastlijmen of kitten?`, a: `Bij een lage goot, zoals van een schuur of garage, waar je veilig met een trap bij kunt, kan een nieuw kapje met de juiste lijm soms even helpen. Doe het alleen als de goot leeg en droog is, want op een natte of vuile rand hecht het niet. Bij een goot op hoogte laat je het liever doen. En staat er water bij het eind omdat de goot verkeerd afloopt, dan lekt een nieuw kapje na een tijd ook weer. Lees ook het artikel over een lekkende dakgoot tijdelijk oplossen.` },
      { v: `Waarom staat er water in mijn goot bij het eindstuk?`, a: `Dan loopt de goot op die plek niet goed af naar de regenpijp. Vaak is er een beugel gezakt of verbogen, of is de goot ooit zo opgehangen dat het eind net iets lager hangt. Soms ligt er een laag blad en slib die het water tegenhoudt. Een beetje water vlak na een bui is niet erg, maar staat het er na een droge dag nog, dan hangt de goot niet goed. Stuur me een foto van de goot vanaf de straat, dan zeg ik wat ik zie.` },
      { v: `Lekt het eindstuk vooral in de winter?`, a: `Vaak merk je het dan eerder. Staat er water bij het eind en gaat het vriezen, dan zet het ijs uit en drukt het tegen het eindstuk en de naad. Bij dooi druppelt het dan op een plek die eerst droog bleef. Hangen er in de winter ijspegels aan het uiteinde van je goot, dan is dat vaak een teken dat daar water blijft staan.` },
    ],
  },
  {
    slug: `welke-dakbedekking-heb-ik`,
    datum: `2026-11-20`,
    titel: `Welke dakbedekking ligt er op je platte dak?`,
    h1: `Welke dakbedekking ligt er op je platte dak? Zo herken je bitumen, EPDM, grind en kunststof`,
    metaTitle: `Welke dakbedekking heeft je platte dak? | Spoed Dak Service`,
    metaDescription: `Bitumen, EPDM, grind of kunststof? Zo herken je de dakbedekking op je platte dak vanuit een raam, en waar zo'n dak meestal gaat lekken.`,
    intro: `Op het platte dak van een aanbouw, garage, berging of bungalow kan van alles liggen: bitumen, EPDM, grind, kunststof of een groen dak. Lekt het, of wil je weten wat er nodig is, dan helpt het om te weten wat er op je dak ligt. Vaak zie je dat al vanuit een raam boven, zonder het dak op te gaan. Hieronder lees je hoe je het herkent en waar zo'n dak meestal lekt.`,
    secties: [
      { kop: `Kijk eerst vanuit een raam`, tekst: [
        `Kijk vanuit een raam op de verdieping, of vanaf een plek waar je veilig staat, naar het dak. Let op de kleur, op de naden en op wat er bovenop ligt. Ga het dak niet op als het nat, glad of donker is, en ook niet als je niet weet of het je houdt. Een foto met de zoom van je telefoon is genoeg.`,
      ] },
      { kop: `Bitumen`, tekst: [
        `Bitumen ligt op veel oudere platte daken. Het ligt in banen die elkaar een stuk overlappen, zodat je om de zoveel tijd een naad ziet lopen. Vaak liggen er kleine steentjes of schilfers op, in grijs, zwart of groen, en het lijkt een beetje op asfalt. Op een schuur of tuinhuis ligt vaak een dunne versie, die mensen dakleer noemen. Bitumen lekt meestal bij een naad die loslaat, bij een scheur of blaas, langs de rand of rond de afvoer. Lees <a href="/kennisbank/dakleer-repareren/">dakleer repareren</a>.`,
      ] },
      { kop: `EPDM`, tekst: [
        `EPDM is zwart rubber dat in één groot vel over het dak ligt, zonder steentjes erop. Het is glad, een beetje rekbaar en heeft weinig of geen naden. Langs de rand zit het meestal tegen een aluminium daktrim. Een EPDM-dak lekt zelden midden in het vel, maar vaker langs de rand, in een hoek, tegen de muur of rond de afvoer. Lees <a href="/kennisbank/epdm-dak-lekt/">EPDM-dak lekt</a>.`,
      ] },
      { kop: `Grind`, tekst: [
        `Zie je alleen grind, dan ligt de echte dakbedekking eronder, meestal bitumen en soms EPDM. Het grind houdt die bedekking op zijn plek en beschermt hem tegen de zon. Bij een lek zie je dan niet waar het zit, en soms spoelt er grind in de afvoer. Lees <a href="/kennisbank/plat-dak-met-grind-lekt/">plat dak met grind lekt</a>.`,
      ] },
      { kop: `Kunststof banen`, tekst: [
        `Een lichtgrijze of witte, gladde bedekking met strakke naden is vaak een kunststof dakbaan. Die zie je vooral op nieuwere gebouwen. Ligt er zo'n bedekking op je dak, stuur dan eerst een foto. Dan zeg ik eerlijk of ik het herstel zelf kan doen, of dat je beter iemand belt die daarin gespecialiseerd is.`,
      ] },
      { kop: `Een groen dak`, tekst: [
        `Liggen er plantjes, zoals sedum, op je dak, dan zit de dakbedekking onder een laag aarde of matten. Lekt zo'n dak, dan moet eerst de plek onder het groen gevonden worden, en dat is lastiger dan bij een kaal dak. Stuur een foto, dan kijk ik wat er kan.`,
      ] },
      { kop: `Geen bedekking maar platen?`, tekst: [
        `Liggen er golfplaten of dakplaten op een schuur, carport of overkapping, dan is het geen dakbedekking in banen. Zo'n dak lekt vaker bij de schroeven en waar de platen over elkaar liggen. Lees <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>. Grijze golfplaten van voor 1994 kunnen asbest bevatten: laat die eerst onderzoeken, want daarin boor of zaag ik niet.`,
      ] },
      { kop: `Waar een plat dak meestal lekt`, tekst: [
        `Welke bedekking het ook is: een plat dak lekt het vaakst bij de afvoer, langs de rand, in de hoeken en waar het dak tegen een muur omhoog loopt. Blijft er na een bui water staan, dan zoekt dat water juist die plekken op. Lees <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a> en <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het water binnenkomt en daarna op het dak naar de bedekking, de naden, de rand en de afvoer. Zit het lek op één plek, dan is een gerichte reparatie vaak genoeg. Is de bedekking op veel plekken versleten, of is het hout eronder zacht, dan zeg ik eerlijk dat een nieuwe bedekking slimmer is. Zie <a href="/diensten/platte-daken/">plat dak repareren of vervangen</a>. Stuur een foto van het dak vanuit een raam en van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: plat dak repareren of vervangen`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Hoe zie ik het verschil tussen bitumen en EPDM?`, a: `Kijk naar de naden en het oppervlak. Bitumen ligt in banen met om de zoveel tijd een overlap, en heeft vaak steentjes of schilfers bovenop. EPDM is glad zwart rubber, ligt meestal in één stuk en heeft bijna geen naden. Twijfel je, stuur dan een foto van een hoek of de rand van het dak.` },
      { v: `Er ligt grind op mijn dak. Moet dat eraf om de bedekking te zien?`, a: `Niet om te weten wat er ligt. Vaak zie je aan de rand of bij de afvoer een stukje van de bedekking onder het grind. Moet er een lek gezocht worden, dan schuif ik het grind op die plek opzij en leg ik het daarna terug. Haal het grind niet zelf weg, want het beschermt de bedekking tegen de zon.` },
      { v: `Ik weet niet wat er op mijn dak ligt. Kun je het aan een foto zien?`, a: `Meestal wel. Met een foto vanuit een raam boven, het liefst met de zoom van je telefoon, zie ik vaak al wat voor bedekking het is en waar ik bij een lek zou beginnen. Stuur hem via WhatsApp, samen met een foto van de natte plek binnen als het lekt.` },
    ],
  },
  {
    slug: `daklekkage-vve`,
    datum: `2026-11-21`,
    titel: `Lekt het dak van je appartementengebouw?`,
    h1: `Het dak van je appartementengebouw lekt: wat je zelf doet en hoe je het met de VvE regelt`,
    metaTitle: `Daklekkage bij een VvE: wie regelt het? | Spoed Dak Service`,
    metaDescription: `Lekt het in je appartement door het platte dak of de dakrand? Zo beperk je de schade, meld je het bij de VvE en wordt de reparatie geregeld, ook bij spoed.`,
    intro: `Woon je in een appartement en komt er water door het plafond, dan is het dak meestal niet alleen van jou. In een appartementengebouw is het dak in de regel van alle eigenaren samen, en regelt de Vereniging van Eigenaars (VvE) de reparatie. Dat maakt het soms lastig om snel iemand te laten komen. Hieronder lees je wat je meteen doet, hoe je het meldt en hoe het meestal verder gaat.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, leg er een handdoek onder en haal spullen weg die nat kunnen worden. Druppelt het bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Bolt het plafond op, ga er dan niet onder staan. Ga niet zelf het dak op, ook niet als er in het trappenhuis een luik naar het dak zit. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Komt het wel van het dak?`, tekst: [
        `Woon je op de bovenste verdieping, dan komt het water vaak van het platte dak, de dakrand of een afvoer boven je. Woon je lager, dan kan het ook van een balkon, een leiding of de woning boven je komen. Druppelt het ook na een paar droge dagen, dan is een leiding waarschijnlijker dan het dak. Lees ook <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">dakdekker of loodgieter bij lekkage</a> en <a href="/kennisbank/dakterras-lekt/">balkon of dakterras lekt naar beneden</a>.`,
      ] },
      { kop: `Meld het meteen bij de VvE`, tekst: [
        `Meld het lek bij het bestuur of de beheerder van de VvE, en huur je, ook bij je verhuurder. Stuur foto's van de natte plek mee, met de datum, en zeg of het nog druppelt. Vraag de buren boven of naast je of het bij hen ook nat is, want dat helpt om de plek te vinden. Wat van iedereen samen is en wie over een reparatie beslist, staat in de splitsingsakte en het huishoudelijk reglement.`,
      ] },
      { kop: `Bij spoed niet wachten op de vergadering`, tekst: [
        `Een lek dat binnen schade geeft, kan niet wachten tot de volgende ledenvergadering. Vaak mag het bestuur of de beheerder een spoedreparatie meteen laten doen. Is er 's avonds of in het weekend niemand van de VvE te bereiken en blijft het binnen druppelen, dan mag je de schade in de regel eerst laten beperken, bijvoorbeeld door het lek tijdelijk te laten dichtmaken. Leg vast wat er is gedaan, bewaar de rekening en meld het daarna zo snel mogelijk bij de VvE. Wat een noodreparatie is, lees je in <a href="/kennisbank/noodreparatie-dak/">noodreparatie aan je dak</a>.`,
      ] },
      { kop: `Wie betaalt?`, tekst: [
        `Is het dak van alle eigenaren samen, dan betaalt de VvE de reparatie van het dak, meestal uit het reservefonds. De schade in je eigen woning, zoals aan een plafond of een vloer, loopt vaak via je eigen verzekering of via de opstalverzekering van de VvE. Hoe dat bij jullie zit, staat in de polis van de VvE en in de splitsingsakte. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Een klein gebouw zonder actief bestuur`, tekst: [
        `In een klein gebouw, bijvoorbeeld een pand met twee of drie woningen boven een winkel, is er vaak geen bestuur dat het regelt. Spreek dan met de andere eigenaren af wie de opdracht geeft en hoe jullie de rekening verdelen, voordat de reparatie begint, het liefst in een appje of mail. Gaat het om twee woningen boven elkaar, lees dan <a href="/kennisbank/dak-lekt-boven-en-benedenwoning/">een lekkend dak bij een boven- en benedenwoning</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kom voor een lek in het dak van een klein appartementengebouw, in overleg met wie de opdracht geeft: het bestuur, de beheerder of de eigenaren samen. Eerst zorg ik dat het binnen droog blijft. Daarna zoek ik waar het water binnenkomt, bijvoorbeeld bij de afvoer, de dakrand, een naad in de dakbedekking of een pijp door het dak, en zeg ik eerlijk of een reparatie genoeg is. Je krijgt foto's van wat ik aantref en van wat ik doe, met een korte omschrijving die je aan de VvE en de verzekeraar kunt laten zien. Wie de opdracht geeft, hoort de prijs voordat ik begin. Zie <a href="/diensten/daklekkage/">daklekkage</a> en <a href="/diensten/platte-daken/">plat dak repareren</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mag ik als bewoner zelf een dakdekker bellen?`, a: `Bij spoed wel, als het binnen druppelt en de VvE niet te bereiken is: dan mag je de schade in de regel eerst laten beperken. Voor de nette reparatie geeft meestal het bestuur of de beheerder de opdracht. Meld het daarom ook bij de VvE, en spreek af wie de rekening krijgt voordat er meer gebeurt dan het lek dichtmaken.` },
      { v: `Ik woon niet bovenin, maar het lekt toch bij regen. Kan het van het dak komen?`, a: `Soms wel. Water van een plat dak kan langs een leiding, een schacht of de binnenkant van de gevel naar beneden lopen en een verdieping lager binnenkomen. Vaker komt het dan van een balkon, een leiding of de woning boven je. Vraag de bewoners boven je of het bij hen ook nat is, en meld het bij de VvE.` },
      { v: `Kan de VvE het dak laten nakijken voordat het lekt?`, a: `Ja. Laat het platte dak, de afvoeren en de dakranden bijvoorbeeld nakijken als het blad gevallen is. Een afvoer die vol blad zit, is op een plat dak een van de bekendste oorzaken van een lek. Stuur gerust een foto van het dak die je maakt zonder het dak op te gaan, bijvoorbeeld vanuit een raam hoger in de buurt, dan zeg ik wat ik zie.` },
    ],
  },
  {
    slug: `dakdekker-komt-niet-opdagen`,
    datum: `2026-11-21`,
    titel: `Je dakdekker komt niet of maakt het niet af?`,
    h1: `Je dakdekker komt niet opdagen of maakt het werk niet af: wat doe je nu?`,
    metaTitle: `Dakdekker komt niet opdagen: wat nu? | Spoed Dak Service`,
    metaDescription: `Komt je dakdekker niet, reageert hij niet meer of ligt je dak half open? Zo houd je het binnen droog, leg je het vast en laat je het werk zo nodig afmaken.`,
    intro: `Je had een afspraak, maar de dakdekker komt niet. Of hij is begonnen en daarna niet meer teruggekomen, en nu ligt er een stuk dak open. Dat is vervelend, zeker als het binnen nat wordt. Hieronder lees je wat je eerst doet, hoe je het netjes vastlegt en wanneer je iemand anders het werk kunt laten afmaken.`,
    secties: [
      { kop: `Lekt het nu, of ligt je dak open?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep van die kamer uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op en trek niet aan een zeil of folie dat er nog ligt. Maak foto's van hoe het dak er nu bij ligt, vanaf de straat, en van de natte plek binnen, met de datum erbij. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Stuur een bericht en leg het vast`, tekst: [
        `Bel of app de dakdekker nog een keer, en zet het daarna ook in een mail of brief: wat jullie hadden afgesproken, wat er al is gedaan, wat er nog moet en dat je wilt weten wanneer hij komt. Noem een datum waarop je antwoord wilt. Bewaar de offerte, de appjes, de foto's en de betaalbewijzen. Dan heb je later zwart op wit wat er is gebeurd.`,
      ] },
      { kop: `Heb je al iets betaald?`, tekst: [
        `Zet dat dan in hetzelfde bericht, met het bedrag en de datum, en vraag wanneer het werk wordt afgemaakt. Reageert hij helemaal niet meer, zoek het bedrijf dan op in het Handelsregister van de KvK om te zien of het nog bestaat. Weet je niet hoe je verder moet, dan kun je gratis advies vragen bij het Juridisch Loket. Betaal niet nog een keer vooruit aan iemand die al eens niet kwam.`,
      ] },
      { kop: `Mag een ander het afmaken?`, tekst: [
        `Meestal wel, maar spreek het eerst helder af. Schrijf je eerste dakdekker dat je het werk door iemand anders laat afmaken als hij niet vóór de datum in je bericht komt. Dan weet hij waar hij aan toe is, en voorkom je later gedoe over wie wat heeft gedaan. Lekt het in de tussentijd, dan hoef je daar niet op te wachten: een lek laten dichtmaken of een open stuk laten afdekken om erger te voorkomen, mag in de regel meteen. Bewaar daar de rekening van.`,
      ] },
      { kop: `Waar het bij half werk meestal misgaat`, tekst: [
        `Pannen die er los op liggen en niet goed in de rij haken. Een strook lood of loodvervanger die nog niet is vastgezet. Een nieuwe goot zonder eindstuk, of een goot die niet naar de regenpijp afloopt. Een plat dak waar de nieuwe bedekking nog niet tegen de rand of de muur is afgewerkt. Juist op zulke plekken komt het water bij de eerste flinke bui binnen. Kijk vanaf de straat of de tuin, niet vanaf een ladder.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me foto's van je dak vanaf de straat en van de natte plek, en zeg erbij wat er met je vorige dakdekker was afgesproken. Lekt het, dan zorg ik eerst dat het binnen droog blijft. Daarna kijk ik wat er ligt en zeg ik eerlijk wat er nog moet gebeuren om het af te maken, en wat dat kost, voordat ik begin. Ik maak foto's van wat ik aantref en van wat ik doe, zodat je die kunt bewaren. Wat er met de afspraak en de rekening van je vorige dakdekker gebeurt, regel je met hem zelf. Zie <a href="/diensten/dakreparatie/">dakreparatie</a> en <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
      { kop: `Zo voorkom je het de volgende keer`, tekst: [
        `Spreek vooraf af wanneer het werk begint en wanneer het klaar is, en zet dat in de offerte of een appje. Kijk of het bedrijf in het Handelsregister staat en vraag of het verzekerd is. Lees ook <a href="/kennisbank/hoe-herken-je-een-betrouwbare-dakdekker/">hoe herken je een betrouwbare dakdekker</a>, <a href="/kennisbank/keurmerk-dakdekker/">wat een keurmerk zegt</a> en <a href="/kennisbank/dakdekker-komt-wat-regel-je/">wat je regelt als de dakdekker komt</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie (pannen, lood en nok)`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Hoe lang wacht ik voordat ik een andere dakdekker bel?`, a: `Dat hangt af van je dak. Lekt het of ligt er een stuk open, dan wacht je niet: laat het eerst dichtmaken of afdekken. Is het binnen droog, geef de eerste dakdekker dan in je bericht een duidelijke datum, bijvoorbeeld over een week of twee. Komt hij dan nog niet, dan weet hij dat je het door een ander laat afmaken.` },
      { v: `Kun jij werk afmaken waar een ander aan begonnen is?`, a: `Vaak wel. Ik kijk eerst wat er ligt en wat er al gedaan is, en zeg eerlijk wat er nog moet. Soms moet een deel opnieuw, bijvoorbeeld als pannen niet goed in de rij liggen of de goot verkeerd afloopt. Je hoort vooraf wat het kost.` },
      { v: `Er ligt nog materiaal van de vorige dakdekker bij mijn huis. Mag dat gebruikt worden?`, a: `Vraag hem eerst of het materiaal van jou is of van hem, en zet zijn antwoord op papier of in een appje. Is het van jou en past het bij je dak, dan kan ik het vaak gewoon gebruiken. Zeg het erbij als je foto's stuurt.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel. Geen bedragen.
export const KORT_ANTWOORD_6: Record<string, string> = {
  "welke-vakman-voor-je-dak": `Voor alles wat de regen buiten moet houden, zoals de pannen, de nok, het lood, de dakgoten, een plat dak en de kraag rond een pijp door het dak, bel je een dakdekker. Water dat ook na droge dagen druppelt, komt meestal uit een leiding: dan een loodgieter. De cv-ketel, een warmtepomp, zonnepanelen en de elektra zijn voor de installateur, het schoorsteenkanaal voor de schoorsteenveger en de stenen en voegen voor een metselaar.`,
  "mansardedak-lekt": `Bij een mansardedak, met onderaan een steil deel en daarboven een flauwer deel, zit een lek meestal bij de knik tussen die twee, waar lood of zink ligt, rond een raam in het steile deel of in de bakgoot onderaan. Binnen zie je het vaak boven in de kamer, waar de wand overgaat in het schuine stuk. Zet een emmer neer, ga niet zelf op het steile deel en stuur een foto van het dak en de natte plek.`,
  "serre-lekt": `Lekt je serre langs de muur van het huis, dan zit het meestal in de aansluiting tegen de gevel: een strook lood, loodvervanger of een profiel die los zit, of een kitnaad die is gescheurd. Ook een overlopende dakgoot of een regenpijp boven de serre kan het zijn. Komt het water tussen het glas of de platen binnen, dan is het werk voor de leverancier van de serre.`,
  "dakluik-lekt": `Lekt het bij je dakluik op een plat dak, dan zit het meestal in de opstaande rand waar de dakbedekking tegen omhoog loopt, in het rubber tussen het luik en de rand, of in water dat na een bui tegen het luik blijft staan. Druppelt het alleen op koude ochtenden, ook na een droge nacht, dan is het vaak condens.`,
  "welke-dakgoot-heb-ik": `Hangt er een goot met beugels voor de onderste rij pannen, dan heb je een hangende goot van zink of kunststof. Zie je alleen een houten lijst, dan ligt er vaak een bakgoot achter, en een brede houten bak op klossen is een mastgoot. Verholen goten, zakgoten en kilgoten liggen in of tussen de daken, en als die lekken, komt het water meestal binnen.`,
  "dak-winterklaar-maken": `Kijk vanaf de straat of de pannen en nokvorsten recht liggen, of het lood rond de schoorsteen strak zit en of de goot recht hangt. Kijk na een bui op zolder naar natte plekken. Laat de goot leegmaken als het blad gevallen is, en laat een losse pan of nokvorst vastzetten voordat het gaat vriezen en stormen. Ga niet zelf het dak op.`,
  "welk-soort-dak-heb-ik": `Twee schuine vlakken met een driehoekige muur aan de zijkant is een zadeldak, vier schuine vlakken een schilddak, één schuin vlak tegen de muur een lessenaarsdak en een dak met een knik een mansardedak. Een plat dak ligt bijna vlak. Een zadeldak lekt vaak bij de nok en de zijkanten, een schilddak bij de hoekvorsten, een lessenaarsdak bovenaan tegen de muur en een plat dak bij de afvoer en de randen.`,
  "dakgoot-lekt-aan-het-eind": `Lekt je dakgoot precies aan het uiteinde, op de hoek bij de zijgevel, dan zit het meestal in het eindstuk: de lijm of het rubber van een kunststof kapje is op, of de soldeernaad van een zinken goot is gescheurd. Vaak blijft er ook water bij het eind staan, omdat de goot niet goed naar de regenpijp afloopt. Dan is een nieuw eindstuk alleen niet genoeg, en moet de goot ook weer op afschot.`,
  "welke-dakbedekking-heb-ik": `Bitumen herken je aan banen met een overlap en vaak steentjes bovenop. EPDM is glad zwart rubber, meestal in één stuk met een aluminium rand. Zie je alleen grind, dan ligt de bedekking eronder, en een lichtgrijze, gladde bedekking is vaak een kunststof dakbaan. Welke het ook is: een plat dak lekt meestal bij de afvoer, de rand, de hoeken of waar het tegen een muur omhoog loopt.`,
  "daklekkage-vve": `Lekt het in je appartement door het dak, zet dan eerst een emmer neer en meld het meteen bij het bestuur of de beheerder van de VvE, met foto's en de datum. In een appartementengebouw is het dak in de regel van alle eigenaren samen, en de VvE geeft de opdracht voor de reparatie. Druppelt het binnen en is er niemand te bereiken, dan mag je de schade in de regel eerst laten beperken.`,
  "dakdekker-komt-niet-opdagen": `Komt je dakdekker niet, of heeft hij het werk niet afgemaakt, zorg dan eerst dat het binnen droog blijft: een lek of een open stuk dak laat je meteen dichtmaken of afdekken. Stuur de dakdekker daarna een bericht met wat er was afgesproken en een datum waarop je antwoord wilt, en bewaar de offerte, de appjes en de foto's. Komt hij dan nog niet, dan kun je het werk door een ander laten afmaken.`,
};
