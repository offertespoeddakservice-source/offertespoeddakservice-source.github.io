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
  lokaal: string;      // 1-2 zinnen echt lokaal (wijken/woningtype) — uniek per plaats
  wijken: string[];    // herkenbare buurten/kernen voor lokale relevantie
  reistijd?: string;   // gevoel van nabijheid vanuit Den Bosch
  verweg?: boolean;    // rand van het werkgebied: geen spoedbelofte, klussen worden vooraf ingepland
  extra?: string;      // optioneel: een tweede, echt lokale alinea op de plaatspagina
}

export const PLAATSEN: Plaats[] = [
  {
    slug: "rosmalen",
    naam: "Rosmalen",
    lokaal:
      "Veel jaren-'60 en '70 woningen met schuine pannendaken — precies het soort dak waar nokvorsten loslaten en goten dichtslibben.",
    wijken: ["Molenhoek", "De Groote Wielen", "Sparrenburg", "Hondsberg", "Maliskamp"],
    reistijd: "10 min vanaf Den Bosch",
    extra:
      "In De Groote Wielen zijn de huizen nog jong, maar daar liggen veel platte daken en daken vol zonnepanelen. Lekkage zie ik daar eerder bij een dakdoorvoer, een afvoer of de rand van een plat dak dan bij oude pannen. In de Maliskamp en rond het oude centrum staan meer vrijstaande huizen en twee-onder-een-kappers met een schoorsteen, en daar kijk ik bij een lek eerst naar het lood.",
  },
  {
    slug: "vught",
    naam: "Vught",
    lokaal:
      "Van vooroorlogse villa's tot naoorlogse rijtjes — vaak oudere daken met klassiek lood en keramische pannen die onderhoud vragen.",
    wijken: ["Vught-Noord", "Vught-Zuid", "Cromvoirt"],
    reistijd: "10 min vanaf Den Bosch",
    extra:
      "Sinds 2021 hoort ook Helvoirt bij de gemeente Vught. Daar staan veel vrijstaande huizen en oude boerderijen met een breed pannendak, vaak met hoge bomen eromheen. Ook aan de bosrand bij de IJzeren Man en de Vughtse Heide staan veel huizen tussen dennen en eiken. Dennennaalden zijn fijn: ze glijden door een bladvanger heen en zetten de uitloop naar de regenpijp na een tijd dicht. Loopt je goot over terwijl er weinig blad in ligt, dan zit het vaak daar.",
  },
  {
    slug: "vlijmen",
    naam: "Vlijmen",
    lokaal:
      "Veel naoorlogse en jaren-'70 woningen; populaire klussen zijn goten reinigen en losse pannen na een storm vanaf de Maaskant.",
    wijken: ["Vliedberg", "Het Vromart", "Centrum"],
    reistijd: "15 min vanaf Den Bosch",
  },
  {
    slug: "drunen",
    naam: "Drunen",
    lokaal:
      "Ruim opgezette wijken met schuine daken vlak bij de Loonse en Drunense Duinen — zand en bladval zorgen voor snel volle goten.",
    wijken: ["Venne", "Heidijk", "Centrum"],
    reistijd: "20 min vanaf Den Bosch",
  },
  {
    slug: "berlicum",
    naam: "Berlicum",
    lokaal:
      "Dorpse bebouwing met veel vrijstaande en twee-onder-een-kap woningen — vaak oudere daken waar lood bij de schoorsteen aandacht vraagt.",
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
      "Mix van jaren-'60/'70 rijtjes en vrijstaande woningen — veel daken van vóór 1985, gevoelig voor losse pannen en gootlekkage.",
    wijken: ["Hoevenbraak", "Boschweg", "Centrum"],
    reistijd: "20 min vanaf Den Bosch",
  },
  {
    slug: "boxtel",
    naam: "Boxtel",
    lokaal:
      "Oudere centrumwoningen en naoorlogse wijken; populaire klussen zijn daklekkage opsporen en goten reinigen onder bomenrijke straten.",
    wijken: ["Selissen", "Munsel", "Lennisheuvel"],
    reistijd: "25 min vanaf Den Bosch",
  },
  {
    slug: "heusden",
    naam: "Heusden",
    lokaal:
      "Het vestingstadje heeft veel monumentale en oudere daken; daarbuiten naoorlogse woningen met schuine pannendaken.",
    wijken: ["Vesting Heusden", "Oudheusden", "Herpt"],
    reistijd: "20 min vanaf Den Bosch",
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
      "Bosrijke omgeving betekent veel bladval en mos op daken — goten en pannen vragen hier extra aandacht.",
    wijken: ["Pannenschuur", "Westend", "Moergestel"],
    reistijd: "25 min vanaf Den Bosch",
    extra:
      "Haaren is sinds de herindeling van 2021 een dorp van de gemeente Oisterwijk. Daar en in het buitengebied staan veel vrijstaande huizen en oude boerderijen met een groot pannendak. Onder de vele bomen in en rond Oisterwijk krijgt een dak weinig zon, en op de noordkant groeit dan snel mos. Mos houdt water vast, en als het daarna vriest kan een pan scheuren. Ligt er een dikke laag mos op je dak, dan haal ik die eraf en kijk ik meteen of de pannen eronder nog heel zijn.",
  },
  {
    slug: "wijchen",
    naam: "Wijchen",
    lokaal:
      "Ruime jaren-'70 en '80 woningen net over de Maas; veel schuine pannendaken waar nokvorsten en lood onderhoud vragen.",
    wijken: ["Wijchen-Zuid", "Alverna", "Niftrik", "Centrum"],
    reistijd: "25 min vanaf Den Bosch",
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
  },
  {
    slug: "uden",
    naam: "Uden",
    lokaal:
      "Ruim opgezette wijken met schuine pannendaken; bladval en mos zorgen voor snel volle goten en losse pannen.",
    wijken: ["Melle", "Bitswijk", "Hoenderbos", "Centrum"],
    reistijd: "25 min vanaf Den Bosch",
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
  },
  {
    slug: "veghel",
    naam: "Veghel",
    lokaal:
      "Veel jaren-'70/'80 woningen met schuine daken; goten reinigen, pannen vervangen en lekkage opsporen zijn hier veelgevraagd.",
    wijken: ["De Bunders", "Bolken", "Veghel-Zuid", "Mariaheide"],
    reistijd: "20 min vanaf Den Bosch",
  },
  {
    slug: "tilburg",
    naam: "Tilburg",
    lokaal:
      "Van de Reeshof tot Berkel-Enschot en Udenhout: veel rijtjes met schuine pannendaken waar goten en nokvorsten onderhoud vragen.",
    wijken: ["Reeshof", "Berkel-Enschot", "Udenhout", "Centrum"],
    reistijd: "30 min vanaf Den Bosch",
  },
  {
    slug: "breda",
    naam: "Breda",
    lokaal:
      "Ook in Breda en omstreken kom ik voor lekkage en ander dakwerk. Je vindt hier een mix van vooroorlogse en naoorlogse daken die onderhoud aan pannen, lood en goten vragen.",
    wijken: ["Prinsenbeek", "Teteringen", "Ginneken", "Haagse Beemden"],
    reistijd: "± 40 min vanaf Den Bosch",
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
  },
];

export const getPlaats = (slug: string) => PLAATSEN.find((p) => p.slug === slug);
