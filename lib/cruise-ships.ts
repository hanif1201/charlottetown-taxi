export interface CruiseShip {
  name: string;
  line: string;
}

export const CRUISE_SHIPS: CruiseShip[] = [
  { name: 'Volendam', line: 'Holland America' },
  { name: 'Zuiderdam', line: 'Holland America' },
  { name: 'Sapphire Princess', line: 'Princess' },
  { name: 'Celebrity Silhouette', line: 'Celebrity Cruises' },
  { name: 'Norwegian Jewel', line: 'NCL' },
  { name: 'Seven Seas Splendor', line: 'Regent Seven Seas' },
  { name: 'Azamara Journey', line: 'Azamara' },
  { name: 'Silver Shadow', line: 'Silversea' },
  { name: 'Scenic Eclipse', line: 'Scenic' },
  { name: 'Seabourn Ovation', line: 'Seabourn' },
  { name: 'Viking Mars', line: 'Viking' },
  { name: 'Crystal Symphony', line: 'Crystal' },
  { name: 'Carnival Sunshine', line: 'Carnival' },
  { name: 'Pearl Mist', line: 'Pearl Seas' },
  { name: 'Mein Schiff 1', line: 'TUI' },
  { name: 'Explora III', line: 'Explora Journeys' },
  { name: 'MS Vista', line: 'Oceania' },
  { name: 'Arcadia', line: 'P&O' },
  { name: 'Amera', line: 'Phoenix Reisen' },
  { name: 'Le Bellot', line: 'Ponant' },
  { name: 'Hanseatic Inspiration', line: 'Hapag-Lloyd' },
  { name: 'Victory I', line: 'Victory Cruise Line' },
  { name: 'Victory II', line: 'Victory Cruise Line' },
];

export const CRUISE_LINE_BY_SHIP: Record<string, string> = Object.fromEntries(
  CRUISE_SHIPS.map((s) => [s.name, s.line]),
);
