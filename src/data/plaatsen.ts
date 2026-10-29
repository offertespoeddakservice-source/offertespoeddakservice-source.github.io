/**
 * Werkgebied — kern-plaatsen rond Den Bosch (fase 1).
 * Elke plaats wordt een eigen pagina /werkgebied/[slug] met lokale invulling,
 * zodat het GÉÉN dunne, identieke pagina's zijn (dat is juist de zwakte van de
 * landelijke concurrenten). Voeg later fase-2 plaatsen toe, gekoppeld aan de
 * A/B-buurten uit dak-flyer-tool/output/tracking.csv.
 */

export interface Plaats {
  slug: string;
  naam: string;        // "Rosmalen"
  lokaal: string;      // 1-2 zinnen echt lokaal (wijken/woningtype), uniek per plaats
  wijken: string[];    // herkenbare buurten/kernen voor lokale relevantie
  reistijd?: string;   // gevoel van nabijheid vanuit Den Bosch
  verweg?: boolean;    // rand van het werkgebied: geen spoedbelofte, klussen worden vooraf ingepland
  extra?: string;      // optioneel: een tweede, echt lokale alinea op de plaatspagina
  omschrijving?: string; // optioneel: eigen meta-omschrijving voor Google
  faq?: { v: string; a: string }[]; // optioneel: eigen vragen voor deze plaats, onder de vaste vragen op de plaatspagina
}

export const PLAATSEN: Plaats[] = [
  {
    slug: "rosmalen",
    naam: "Rosmalen",
    lokaal:
      "Veel jaren-'60 en '70 woningen met schuine pannendaken: precies het soort dak waar nokvorsten loslaten en goten dichtslibben.",
    wijken: ["Molenhoek", "De Groote Wielen", "Sparrenburg", "Hondsberg", "Maliskamp"],
    reistijd: "10 min vanaf Den Bosch",
    extra:
      "In De Groote Wielen zijn de huizen nog jong, maar daar liggen veel platte daken en daken vol zonnepanelen. Lekkage zie ik daar eerder bij een dakdoorvoer, een afvoer of de rand van een plat dak dan bij oude pannen. In de Maliskamp en rond het oude centrum staan meer vrijstaande huizen en twee-onder-een-kappers met een schoorsteen, en daar kijk ik bij een lek eerst naar het lood.",
    faq: [
      { v: "Mijn huis in De Groote Wielen is nog maar een paar jaar oud. Kan het dak dan al lekken?", a: "Dat kan, ook bij een jong huis. Is je huis pas een paar jaar oud, kijk dan eerst of de bouwer het lek nog moet oplossen. Valt het daar niet meer onder, stuur me dan een foto van de natte plek. Dan zeg ik eerlijk wat ik zie." },
    ],
  },
  {
    slug: "vught",
    naam: "Vught",
    lokaal:
      "Van vooroorlogse villa's tot naoorlogse rijtjes, vaak oudere daken met klassiek lood en keramische pannen die onderhoud vragen.",
    wijken: ["Vught-Noord", "Vught-Zuid", "Cromvoirt"],
    reistijd: "10 min vanaf Den Bosch",
    extra:
      "Sinds 2021 hoort ook Helvoirt bij de gemeente Vught. Daar staan veel vrijstaande huizen en oude boerderijen met een breed pannendak, vaak met hoge bomen eromheen. Ook aan de bosrand bij de IJzeren Man en de Vughtse Heide staan veel huizen tussen dennen en eiken. Dennennaalden zijn fijn: ze glijden door een bladvanger heen en zetten de uitloop naar de regenpijp na een tijd dicht. Loopt je goot over terwijl er weinig blad in ligt, dan zit het vaak daar.",
    faq: [
      { v: "Kom je ook in Helvoirt en Cromvoirt?", a: "Ja. Cromvoirt hoort bij Vught, en Helvoirt sinds 2021 ook. Allebei liggen ze op zo'n kwartier rijden van Den Bosch." },
      { v: "Moet het oude lood op mijn villa helemaal vervangen worden?", a: "Niet altijd. Oud lood kan nog jaren mee als het goed aansluit op de muur of de schoorsteen. Is het op een paar plekken gescheurd of los, dan vervang ik alleen die stukken. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "vlijmen",
    naam: "Vlijmen",
    lokaal:
      "Veel naoorlogse en jaren-'70 woningen; populaire klussen zijn goten reinigen en losse pannen na een storm vanaf de Maaskant.",
    wijken: ["Vliedberg", "Het Vromart", "Centrum"],
    reistijd: "15 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Vlijmen, Nieuwkuijk en Haarsteeg: lekkage bij een lichtkoepel, een volle goot of losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
  },
  {
    slug: "drunen",
    naam: "Drunen",
    lokaal:
      "Ruim opgezette wijken met schuine daken vlak bij de Loonse en Drunense Duinen, zand en bladval zorgen voor snel volle goten.",
    wijken: ["Venne", "Heidijk", "Centrum"],
    reistijd: "20 min vanaf Den Bosch",
    extra:
      "Drunen hoort samen met Vlijmen en Heusden bij de gemeente Heusden, en Elshout ligt er vlak naast. Aan de zuidkant van Drunen, richting de Loonse en Drunense Duinen, staan veel huizen tussen de bomen. Daar komt in de herfst naast blad ook zand in de goot. Dat spoelt naar de uitloop naar de regenpijp en wordt daar met het blad een zware, natte prop, en dan loopt de goot bij een bui over aan de voorkant. In het oude centrum en in Elshout staan nog veel oudere huizen met een schoorsteen, en daar kijk ik bij een lek eerst naar het lood. Stuur me gerust eerst een foto via WhatsApp.",
    omschrijving: "Dakdekker in Drunen en Elshout: goten vol zand en blad, lekkage bij oud lood en losse pannen na een storm. Vaste prijs vooraf. Bel of app Rens.",
  },
  {
    slug: "berlicum",
    naam: "Berlicum",
    lokaal:
      "Dorpse bebouwing met veel vrijstaande en twee-onder-een-kap woningen, vaak oudere daken waar lood bij de schoorsteen aandacht vraagt.",
    wijken: ["Kerkwijk", "Beekveld", "Middelrode"],
    reistijd: "15 min vanaf Den Bosch",
  },
  {
    slug: "sint-michielsgestel",
    naam: "Sint-Michielsgestel",
    lokaal:
      "Veel oudere, karakteristieke woningen langs de Dommel met klassieke pannendaken die regelmatig onderhoud aan vorsten en lood vragen.",
    wijken: ["Gestel", "Den Dungen", "Gemonde"],
    reistijd: "15 min vanaf Den Bosch",
    extra:
      "Rond Sint-Michielsgestel liggen oude landgoederen, zoals Zegenwerp en Ruwenberg, en ook in de straten eromheen staan hoge eiken en beuken. In de herfst komen daar naast blad ook eikels en takjes in de goot, en die blijven bij de uitloop naar de regenpijp hangen. In Den Dungen en Gemonde staan meer vrijstaande huizen en boerderijen met een groot pannendak, vaak met veel open land eromheen. Daar heeft de wind meer grip op het dak, en waait een nokvorst met losse specie er eerder af dan in een straat vol huizen.",
  },
  {
    slug: "schijndel",
    naam: "Schijndel",
    lokaal:
      "Mix van jaren-'60/'70 rijtjes en vrijstaande woningen, veel daken van vóór 1985, gevoelig voor losse pannen en gootlekkage.",
    wijken: ["Hoevenbraak", "Boschweg", "Centrum"],
    reistijd: "20 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Schijndel en Wijbosch: lekkage bij oude pannen of de schoorsteen, volle goten en stormschade. Vaste prijs vooraf. Bel of app Rens.",
  },
  {
    slug: "boxtel",
    naam: "Boxtel",
    lokaal:
      "Oudere centrumwoningen en naoorlogse wijken; populaire klussen zijn daklekkage opsporen en goten reinigen onder bomenrijke straten.",
    wijken: ["Selissen", "Munsel", "Lennisheuvel"],
    reistijd: "25 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Boxtel, Liempde en Esch: een lek opsporen, goten onder de bomen leegmaken en losse pannen terugleggen. Vaste prijs vooraf. Bel of app Rens.",
  },
  {
    slug: "heusden",
    naam: "Heusden",
    lokaal:
      "Het vestingstadje heeft veel monumentale en oudere daken; daarbuiten naoorlogse woningen met schuine pannendaken.",
    wijken: ["Vesting Heusden", "Oudheusden", "Herpt"],
    reistijd: "20 min vanaf Den Bosch",
    omschrijving: "Dakdekker in vesting Heusden, Oudheusden en Herpt: lekkage bij oud lood of zink, volle goten en losse nokvorsten. Vaste prijs vooraf. Bel of app Rens.",
  },
  {
    slug: "oss",
    naam: "Oss",
    lokaal:
      "Veel ruime naoorlogse wijken met schuine daken; goten reinigen en pannen vervangen zijn hier veelgevraagd.",
    wijken: ["Ruwaard", "Ussen", "Schadewijk", "Berghem"],
    reistijd: "25 min vanaf Den Bosch",
    extra:
      "Bij Oss horen ook de dorpen langs de Maas, zoals Lith, Megen en Ravenstein. Daar staan veel dijkhuizen en oude boerderijen met een groot pannendak, en over de rivier en het open land heeft de wind vrij spel. Na een storm zie ik daar vaak dat de houten windveer loszit of dat de pannen langs de zijkant van het dak zijn gaan schuiven. Rond het centrum van Oss staan nog veel oude arbeiderswoningen met een schoorsteen die al jaren niet meer gebruikt wordt. Zit daar geen kap op, dan regent het in het kanaal, en na een tijd zie je een vochtplek op de muur binnen. Vaak is een kap of afdekplaat op de schoorsteen dan genoeg, en die zet ik er zelf op.",
  },
  {
    slug: "oisterwijk",
    naam: "Oisterwijk",
    lokaal:
      "Bosrijke omgeving betekent veel bladval en mos op daken, dus goten en pannen vragen hier extra aandacht.",
    wijken: ["Pannenschuur", "Westend", "Moergestel"],
    reistijd: "25 min vanaf Den Bosch",
    extra:
      "Haaren is sinds de herindeling van 2021 een dorp van de gemeente Oisterwijk. Daar en in het buitengebied staan veel vrijstaande huizen en oude boerderijen met een groot pannendak. Onder de vele bomen in en rond Oisterwijk krijgt een dak weinig zon, en op de noordkant groeit dan snel mos. Mos houdt water vast, en als het daarna vriest kan een pan scheuren. Ligt er een dikke laag mos op je dak, dan haal ik die eraf en kijk ik meteen of de pannen eronder nog heel zijn.",
    faq: [
      { v: "Kom je ook in Moergestel en Haaren?", a: "Ja. Moergestel hoort bij de gemeente Oisterwijk, en Haaren sinds 2021 ook. Ik kom er voor dezelfde klussen als in Oisterwijk zelf, zoals een volle goot, mos op het dak of een lek bij de schoorsteen. Het is zo'n 25 minuten rijden vanaf Den Bosch." },
      { v: "Hoe vaak moeten de goten leeg onder al die bomen?", a: "Onder veel bomen is één keer per jaar vaak te weinig. Een goed moment is laat in de herfst, als het meeste blad eraf is, en daarna nog eens in het voorjaar. Zie je bij een bui water over de rand van de goot komen, wacht dan niet tot die tijd." },
    ],
  },
  {
    slug: "wijchen",
    naam: "Wijchen",
    lokaal:
      "Ruime jaren-'70 en '80 woningen net over de Maas; veel schuine pannendaken waar nokvorsten en lood onderhoud vragen.",
    wijken: ["Wijchen-Zuid", "Alverna", "Niftrik", "Centrum"],
    reistijd: "25 min vanaf Den Bosch",
    extra:
      "Wijchen ligt net over de Maas, aan de kant van Nijmegen. Bij de gemeente horen ook dorpen als Batenburg, Bergharen, Hernen en Balgoij, met veel boerderijen en vrijstaande huizen in het open land tussen de Maas en de Waal. In Wijchen zelf zijn grote delen in de jaren '70 en '80 gebouwd, met veel rijtjeshuizen en twee-onder-een-kappers. Bij die huizen liggen de nokvorsten vaak nog in specie, en die brokkelt na zoveel jaren af. Zie je brokjes in de goot of op de stoep, laat de nok dan nakijken voordat de winterstormen komen.",
    omschrijving: "Dakdekker in Wijchen, Alverna en Niftrik: lekkage bij lood of de nok, volle goten en losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
  },
  {
    slug: "waalwijk",
    naam: "Waalwijk",
    lokaal:
      "Mix van naoorlogse wijken met schuine daken; goten reinigen en losse pannen na storm vanaf de Langstraat zijn veelgevraagd.",
    wijken: ["Besoyen", "Baardwijk", "Laageinde", "Sprang-Capelle"],
    reistijd: "25 min vanaf Den Bosch",
    extra:
      "Met Sprang-Capelle en Waspik erbij heeft Waalwijk heel verschillende daken. Sprang-Capelle is een lang dorp langs de oude weg, met veel vrijstaande huizen en oude boerderijen met een breed dak en lange goten. Daar valt in de herfst veel blad in de goot van de bomen langs de straat, en een nokvorst die los zit merk je vaak pas als er specie in de goot ligt. In Besoyen en Baardwijk, de oude kernen die aan Waalwijk vastgegroeid zijn, staan nog veel huizen met een schoorsteen en oud lood. Twijfel je wat er met je dak aan de hand is, stuur dan een foto via WhatsApp.",
    faq: [
      { v: "Kom je ook in Sprang-Capelle en Waspik?", a: "Ja. Sprang-Capelle en Waspik horen bij de gemeente Waalwijk, en ik kom er voor dezelfde klussen als in Waalwijk zelf: lekkage, goten, pannen en lood. Het is zo'n 25 minuten rijden vanaf Den Bosch." },
      { v: "Vervang je in Waalwijk ook de dakbedekking van een plat dak?", a: "Ja. Achter veel oudere huizen in Waalwijk staat een aanbouw, schuur of oude werkplaats met een plat dak. Lekt dat dak op één plek, dan is een gerichte reparatie vaak genoeg. Is de bedekking op meer plekken versleten, dan zeg ik eerlijk dat vervangen slimmer is. Je hoort vooraf de vaste prijs." },
    ],
  },
  {
    slug: "uden",
    naam: "Uden",
    lokaal:
      "Ruim opgezette wijken met schuine pannendaken; bladval en mos zorgen voor snel volle goten en losse pannen.",
    wijken: ["Melle", "Bitswijk", "Hoenderbos", "Centrum"],
    reistijd: "25 min vanaf Den Bosch",
    extra:
      "Rond de Markt in het centrum van Uden zitten veel winkels met een woning erboven. Achter zo'n pand ligt vaak een plat dak op de winkel of het magazijn, en daar komt het water nogal eens binnen bij de afvoer of langs de rand. Volkel en Odiliapeel, de dorpen die bij Uden horen, hebben meer vrijstaande huizen en boerderijen met een groot pannendak en een lange goot. Daar blijft in de herfst veel blad in de goot liggen, en bij een stevige bui loopt hij dan over langs de gevel. Stuur me een foto, dan zeg ik je eerlijk of leegmaken genoeg is.",
  },
  {
    slug: "den-bosch",
    naam: "Den Bosch",
    lokaal:
      "Mijn thuisbasis: van de oude binnenstad met monumentale daken tot naoorlogse wijken met schuine pannendaken. Hier ben ik dagelijks, dus bij spoed sta ik snel voor je deur.",
    wijken: ["Muntel", "Boschveld", "De Slagen", "Maaspoort", "Zuid", "Empel", "Engelen"],
    reistijd: "een paar minuten vanaf mijn thuisbasis",
    extra:
      "Bij Den Bosch horen ook Engelen en Bokhoven, de oude dorpjes aan de Maas, en sinds 2015 ook Nuland en Vinkel. In Engelen en Bokhoven staan veel lage dijkhuizen en oude boerderijen. De goot hangt daar laag en vaak onder de bomen langs de dijk, dus die zit in de herfst snel vol. In Nuland en Vinkel staan veel gezinswoningen en twee-onder-een-kappers, en op steeds meer daken liggen zonnepanelen. Lekt het bij jou sinds de panelen erop liggen, dan kijk ik eerst bij de plek waar de kabel door het dak naar binnen gaat.",
    faq: [
      { v: "Werk je ook aan daken in de binnenstad van Den Bosch?", a: "Ja. In de binnenstad staan veel monumenten, en de binnenstad is beschermd stadsgezicht. Daar kun je niet zomaar een andere pan of ander materiaal gebruiken. Ik kijk eerst wat er nu ligt en herstel met materiaal dat erbij past. Twijfel je of je pand een monument is, vraag het dan na bij de gemeente." },
      { v: "Kom je ook in Engelen, Bokhoven, Nuland en Vinkel?", a: "Ja. Engelen en Bokhoven liggen aan de Maas, Nuland en Vinkel aan de oostkant, en ze horen allemaal bij de gemeente Den Bosch. Ik kom er voor dezelfde klussen als in de stad zelf, en bij lekkage vaak nog dezelfde dag." },
    ],
  },
  {
    slug: "veghel",
    naam: "Veghel",
    lokaal:
      "Veel jaren-'70/'80 woningen met schuine daken; goten reinigen, pannen vervangen en lekkage opsporen zijn hier veelgevraagd.",
    wijken: ["De Bunders", "Bolken", "Veghel-Zuid", "Mariaheide"],
    reistijd: "20 min vanaf Den Bosch",
    extra:
      "Veghel hoort sinds 2017 bij de gemeente Meierijstad, samen met onder meer Schijndel en Erp. In de woonwijken die in de jaren '70 en '80 zijn gebouwd, staan veel rijtjeshuizen en twee-onder-een-kappers met een dakraam in het schuine dak aan de achterkant. Na zo'n veertig jaar is het gootstuk of het lood onder zo'n raam vaak op. Dan zie je na een flinke bui een natte plek op de muur of het plafond onder het raam, terwijl het glas zelf nog prima is. Vaak is een nieuw gootstuk genoeg en hoeft het raam er niet uit. Stuur me een foto van de natte plek, dan zeg ik eerlijk wat ik zie.",
  },
  {
    slug: "tilburg",
    naam: "Tilburg",
    lokaal:
      "Van de Reeshof tot Berkel-Enschot en Udenhout: veel rijtjes met schuine pannendaken waar goten en nokvorsten onderhoud vragen.",
    wijken: ["Reeshof", "Berkel-Enschot", "Udenhout", "Centrum"],
    reistijd: "30 min vanaf Den Bosch",
    extra:
      "Tilburg is een oude textielstad. In wijken als het Goirke, Korvel en de Hasselt staan nog veel arbeiderswoningen van rond 1900 tot 1930, vaak in lange rijen met een laag pannendak en een schoorsteen per huis. De pannen liggen daar soms al tientallen jaren. Lekt het bij zo'n huis, dan zit het meestal bij het lood rond de schoorsteen of bij een pan die is gaan schuiven. Tilburg is voor mij zo'n half uur rijden vanaf Den Bosch, en Udenhout en Berkel-Enschot liggen het dichtstbij.",
    omschrijving: "Dakdekker in Tilburg, Udenhout en Berkel-Enschot: lekkage bij lood of een plat dak, volle goten en losse pannen. Vaste prijs vooraf. Bel of app Rens.",
  },
  {
    slug: "breda",
    naam: "Breda",
    lokaal:
      "Ook in Breda en omstreken kom ik voor lekkage en ander dakwerk. Je vindt hier een mix van vooroorlogse en naoorlogse daken die onderhoud aan pannen, lood en goten vragen.",
    wijken: ["Prinsenbeek", "Teteringen", "Ginneken", "Haagse Beemden"],
    reistijd: "± 40 min vanaf Den Bosch",
    extra:
      "Sinds 1997 horen ook Prinsenbeek, Teteringen, Bavel en Ulvenhout bij de gemeente Breda. In die dorpen staan veel vrijstaande huizen en twee-onder-een-kappers met een groot pannendak, vaak met een aanbouw of garage ertegen. Waar zo'n aanbouw tegen het huis zit, ligt een strook lood of zink, en die laat na veel jaren los. In de Heuvel en het Brabantpark, wijken uit de jaren '50 en '60, staan veel rijtjeshuizen en portiekwoningen. Bij de rijtjes zit een lek vaak in het lood rond de schoorsteen, bij de portiekwoningen eerder bij de afvoer of de rand van het platte dak.",
  },
  {
    slug: "helmond",
    naam: "Helmond",
    lokaal:
      "Ruime naoorlogse wijken met schuine daken; voor dakwerk en lekkage kom ik in Helmond en de omliggende kernen.",
    wijken: ["Brouwhuis", "Dierdonk", "Mierlo-Hout", "Stiphout"],
    reistijd: "± 40 min vanaf Den Bosch",
  },
  {
    slug: "eindhoven",
    naam: "Eindhoven",
    lokaal:
      "Ook in de regio Eindhoven kom ik voor lekkage en ander dakwerk. Veel naoorlogse woningen met schuine pannendaken en platte uitbouwen.",
    wijken: ["Tongelre", "Woensel", "Gestel", "Stratum"],
    reistijd: "± 40 min vanaf Den Bosch",
    extra:
      "In Stratum ligt het Villapark, met veel villa's en herenhuizen van voor de oorlog. Die hebben vaak een steil pannendak, lood rond de schoorsteen en zinken goten die al tientallen jaren meegaan. Lekt het daar, dan zit het meestal in dat oude lood of in een naad van de goot. In Woensel-Noord, het grootste stadsdeel van Eindhoven, staan vooral rijtjes uit de jaren '60, '70 en '80. Daar gaat het vaker om nokvorsten die nog in specie liggen en losraken, of om een goot die is gaan doorhangen en bij een flinke bui overloopt.",
  },
];

export const getPlaats = (slug: string) => PLAATSEN.find((p) => p.slug === slug);
