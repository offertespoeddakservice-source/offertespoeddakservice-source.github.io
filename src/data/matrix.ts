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
];
