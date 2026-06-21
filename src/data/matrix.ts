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
    hook: "In de ruime naoorlogse wijken van Oss zie ik daklekkage vaak ontstaan bij versleten pannen en oud lood rond de schoorsteen. Ik spoor het lek op zonder je dak open te breken.",
  },
  {
    plaats: "den-bosch",
    dienst: "daklekkage",
    hook: "Van de monumentale daken in de Bossche binnenstad tot de platte uitbouwen in Maaspoort: een lek opsporen vraagt hier ervaring met heel verschillende daktypes. Ik ben dagelijks in de stad, dus bij een lek sta ik snel voor je deur.",
  },
  {
    plaats: "rosmalen",
    dienst: "daklekkage",
    hook: "De jaren-'60 en '70 daken in Rosmalen lekken vaak waar nokvorsten loslaten of het lood bij de schoorsteen is uitgedroogd. Ik vind de échte oorzaak, niet alleen het natte plekje binnen.",
  },
  {
    plaats: "vught",
    dienst: "daklekkage",
    hook: "Veel oudere daken in Vught met klassiek lood en keramische pannen — precies de plekken waar daklekkage sluipend begint. Ik spoor het op en repareer gericht, zonder onnodig sloopwerk.",
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
    hook: "In de ruime wijken van Oss met veel schuine daken slibben goten snel dicht door blad en mos. Ik maak ze leeg, spoel de afvoer door en kijk meteen of er meer aan je dak speelt.",
  },
  {
    plaats: "den-bosch",
    dienst: "goten-reinigen",
    hook: "Of je nu in de binnenstad of in De Slagen woont: volle goten zorgen voor vochtige muren en lekkage. Ik ben dagelijks in Den Bosch, dus ik plan je goten zo tussendoor in.",
  },
  {
    plaats: "rosmalen",
    dienst: "goten-reinigen",
    hook: "De schuine pannendaken in Rosmalen — van Molenhoek tot De Groote Wielen — hebben goten die door bladval snel dichtslibben. Leeg, doorgespoeld en een eerlijke blik op de rest.",
  },
  {
    plaats: "vught",
    dienst: "goten-reinigen",
    hook: "Onder de vele bomen in Vught lopen goten snel vol blad. Ik maak ze leeg en controleer meteen het lood en de pannen die hier door ouderdom aandacht vragen.",
  },
  {
    plaats: "berlicum",
    dienst: "goten-reinigen",
    hook: "Bij de dorpse, vaak vrijstaande woningen in Berlicum zijn de goten flink aan de lengte. Ik maak ze van begin tot eind leeg en spoel de afvoer goed door.",
  },

  // ── Tier B · daklekkage ──────────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "daklekkage",
    hook: "In de naoorlogse en jaren-'70 wijken van Vlijmen — Vliedberg, Het Vromart — begint lekkage vaak bij verouderde pannen of losgeraakt lood na een storm vanaf de Maaskant. Ik spoor het op en repareer gericht.",
  },
  {
    plaats: "drunen",
    dienst: "daklekkage",
    hook: "Bij de schuine daken in Drunen, vlak bij de Loonse en Drunense Duinen, kruipt regenwater vaak binnen via volgewaaide goten en versleten kitnaden. Ik vind de échte oorzaak, niet alleen de natte plek.",
  },
  {
    plaats: "boxtel",
    dienst: "daklekkage",
    hook: "In het oudere centrum van Boxtel en de wijken eromheen zie ik daklekkage vaak ontstaan onder de bomenrijke straten: blad in de goot, water langs de muur. Opsporen zonder onnodig sloopwerk.",
  },
  {
    plaats: "schijndel",
    dienst: "daklekkage",
    hook: "Veel daken in Schijndel zijn van vóór 1985 — daar lekt het vaak bij losse pannen, nokvorsten of uitgedroogd lood. Ik spoor het lek gericht op en dicht het vakkundig.",
  },
  {
    plaats: "heusden",
    dienst: "daklekkage",
    hook: "Van de monumentale daken in vesting Heusden tot de naoorlogse woningen eromheen: een lek opsporen vraagt hier zorg voor het oude werk. Ik repareer gericht, met respect voor het dak.",
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "daklekkage",
    hook: "Bij de karakteristieke woningen langs de Dommel in Sint-Michielsgestel begint lekkage vaak bij vorsten en lood van klassieke pannendaken. Ik vind het lek en maak het weer waterdicht.",
  },
  {
    plaats: "oisterwijk",
    dienst: "daklekkage",
    hook: "In het bosrijke Oisterwijk zorgen bladval en mos voor verstopte goten die overlopen — vaak de oorzaak van wat op daklekkage lijkt. Ik spoor het op en pak het bij de bron aan.",
  },

  // ── Tier B · goten reinigen ──────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "goten-reinigen",
    hook: "De goten in Vlijmen lopen na een storm vanaf de Maaskant snel vol blad en gruis. Ik maak ze leeg, spoel de afvoer door en kijk meteen of er pannen los zitten.",
  },
  {
    plaats: "drunen",
    dienst: "goten-reinigen",
    hook: "Zo dicht bij de Loonse en Drunense Duinen krijgen de goten in Drunen flink wat zand en blad te verduren. Ik maak ze leeg en doorgespoeld, zodat het water weer vrij wegloopt.",
  },
  {
    plaats: "boxtel",
    dienst: "goten-reinigen",
    hook: "Onder de bomenrijke straten van Boxtel slibben goten razendsnel dicht. Ik haal blad en mos eruit, spoel de regenpijp door en geef een eerlijke blik op de rest van je dak.",
  },
  {
    plaats: "schijndel",
    dienst: "goten-reinigen",
    hook: "Bij de oudere rijtjes en vrijstaande woningen in Schijndel zijn volle goten een veelvoorkomende oorzaak van vochtige muren. Leeg, doorgespoeld en netjes achtergelaten.",
  },
  {
    plaats: "heusden",
    dienst: "goten-reinigen",
    hook: "De goten in en rond vesting Heusden vragen om voorzichtig werk bij oudere daken. Ik maak ze van begin tot eind leeg en controleer meteen het lood en de pannen.",
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "goten-reinigen",
    hook: "Langs de Dommel in Sint-Michielsgestel staan veel bomen — de goten lopen er snel vol blad. Ik maak ze leeg, spoel de afvoer door en kijk naar vorsten en lood.",
  },
  {
    plaats: "oisterwijk",
    dienst: "goten-reinigen",
    hook: "Bosrijk Oisterwijk betekent veel blad en mos op het dak. Ik maak je goten grondig leeg, controleer de bladvangers en spoel de regenpijp door tot het water vrij loopt.",
  },
];
