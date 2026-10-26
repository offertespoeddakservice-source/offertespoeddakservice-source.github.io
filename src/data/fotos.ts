// Gemaakt door de fotobron (/root/fotobron). Alleen echte foto's van Rens die hij zelf met Ja heeft goedgekeurd.
// Niet met de hand en niet door de SEO-routine aanpassen: op een pagina zetten gaat met <EchteFotos soort="..." />.
export type Foto = { bestand: string; alt: string; bijschrift: string; soorten: string[]; fase: string; breedte: number; hoogte: number };

export const FOTOS: Foto[] = [
];
