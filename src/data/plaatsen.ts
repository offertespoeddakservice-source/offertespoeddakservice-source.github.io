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
}

export const PLAATSEN: Plaats[] = [
  {
    slug: "rosmalen",
    naam: "Rosmalen",
    lokaal:
      "Veel jaren-'60 en '70 woningen met schuine pannendaken — precies het soort dak waar nokvorsten loslaten en goten dichtslibben.",
    wijken: ["Molenhoek", "De Groote Wielen", "Sparrenburg", "Hondsberg", "Maliskamp"],
    reistijd: "10 min vanaf Den Bosch",
  },
  {
    slug: "vught",
    naam: "Vught",
    lokaal:
      "Van vooroorlogse villa's tot naoorlogse rijtjes — vaak oudere daken met klassiek lood en keramische pannen die onderhoud vragen.",
    wijken: ["Vught-Noord", "Vught-Zuid", "Cromvoirt"],
    reistijd: "10 min vanaf Den Bosch",
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
  },
  {
    slug: "oisterwijk",
    naam: "Oisterwijk",
    lokaal:
      "Bosrijke omgeving betekent veel bladval en mos op daken — goten en pannen vragen hier extra aandacht.",
    wijken: ["Pannenschuur", "Westend", "Moergestel"],
    reistijd: "25 min vanaf Den Bosch",
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
    naam: "'s-Hertogenbosch",
    lokaal:
      "Mijn standplaats: van de oude binnenstad met monumentale daken tot naoorlogse wijken met schuine pannendaken. Hier ben ik dagelijks, dus bij spoed sta ik snel voor je deur.",
    wijken: ["Muntel", "Boschveld", "De Slagen", "Maaspoort", "Zuid", "Empel", "Engelen"],
    reistijd: "mijn standplaats",
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
      "Voor grotere klussen kom ik ook in Breda en omstreken. Mix van vooroorlogse en naoorlogse daken die onderhoud aan pannen, lood en goten vragen.",
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
      "Voor grotere dakklussen kom ik ook in de regio Eindhoven. Veel naoorlogse woningen met schuine pannendaken en platte uitbouwen.",
    wijken: ["Tongelre", "Woensel", "Gestel", "Stratum"],
    reistijd: "± 40 min vanaf Den Bosch",
  },
];

export const getPlaats = (slug: string) => PLAATSEN.find((p) => p.slug === slug);
