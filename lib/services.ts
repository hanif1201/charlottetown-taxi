export type TripType = 'one' | 'return' | 'multi';

export type ServiceKey =
  | 'taxi'
  | 'airport'
  | 'cruise'
  | 'golf'
  | 'tour'
  | 'corporate'
  | 'wedding'
  | 'hourly'
  | 'long'
  | 'medical';

export interface ServiceDef {
  key: ServiceKey;
  title: string;
  pickerLabel: string;
  pickerDesc: string;
  sub: string;
  trips: TripType[];
  hint: string;
  inc: string[];
}

export const SERVICES: Record<ServiceKey, ServiceDef> = {
  taxi: {
    key: 'taxi',
    title: 'Taxi Service',
    pickerLabel: 'Taxi Service',
    pickerDesc: 'Regulated fare',
    sub: 'Fixed zone fares across Charlottetown, Stratford and Cornwall.',
    trips: ['one', 'return'],
    hint: 'Where and when',
    inc: [
      'Fixed zone fare from $8.50',
      'No surge pricing, any hour',
      'Cash, debit and card in vehicle',
      'Licensed, insured local drivers',
    ],
  },
  airport: {
    key: 'airport',
    title: 'Airport Transfer',
    pickerLabel: 'Airport Transfer',
    pickerDesc: 'YYG',
    sub: 'Charlottetown Airport (YYG) — we monitor your flight and adjust your pickup.',
    trips: ['one', 'return'],
    hint: 'Flight details help us time it',
    inc: [
      'Live flight monitoring',
      'No waiting charge for delays',
      'Meet at Arrivals with name board',
      'Luggage assistance',
    ],
  },
  cruise: {
    key: 'cruise',
    title: 'Cruise & Ferry Transfer',
    pickerLabel: 'Cruise & Ferry',
    pickerDesc: 'Port transfers',
    sub: 'Charlottetown Cruise Port, Wood Islands Ferry and CTMA Souris.',
    trips: ['one', 'return'],
    hint: 'Timed to docking and all-aboard',
    inc: [
      'Timed to ship and ferry schedules',
      'Port pickup coordination',
      'Group luggage capacity',
      'Back well before all-aboard',
    ],
  },
  golf: {
    key: 'golf',
    title: 'Golf Transportation',
    pickerLabel: 'Golf',
    pickerDesc: 'Itinerary builder',
    sub: 'Build your round-by-round itinerary and we handle every drive between.',
    trips: ['one', 'return', 'multi'],
    hint: 'Add each day and tee time',
    inc: [
      'Door-to-course service',
      'Wait time between rounds',
      'Golf bag handling',
      'Multi-course, multi-day itineraries',
    ],
  },
  tour: {
    key: 'tour',
    title: 'Island Tour',
    pickerLabel: 'Island Tours',
    pickerDesc: 'Green Gables',
    sub: 'Green Gables, Cavendish, the north shore — at your pace with a local driver.',
    trips: ['one', 'return', 'multi'],
    hint: 'Tell us what you want to see',
    inc: [
      'Local driver and guide',
      'Stops as long as you like',
      'Route planned to miss crowds',
      'Flexible on the day',
    ],
  },
  corporate: {
    key: 'corporate',
    title: 'Corporate Transportation',
    pickerLabel: 'Corporate',
    pickerDesc: 'Accounts',
    sub: 'Executive travel with accounts, recurring bookings and monthly invoicing.',
    trips: ['one', 'return', 'multi'],
    hint: 'Billing details set up your account',
    inc: [
      'Named billing contact',
      'Consolidated monthly invoicing',
      'Recurring booking schedules',
      'Discreet, professional drivers',
    ],
  },
  wedding: {
    key: 'wedding',
    title: 'Wedding Transportation',
    pickerLabel: 'Wedding',
    pickerDesc: 'Shuttles',
    sub: 'Wedding party transport and guest shuttles, timed across venues.',
    trips: ['one', 'return', 'multi'],
    hint: 'Venue and timing details',
    inc: [
      'Timed to your run sheet',
      'Multiple pickup points',
      'Guest shuttle coordination',
      'Presentation-ready vehicles',
    ],
  },
  hourly: {
    key: 'hourly',
    title: 'Hourly Chauffeur',
    pickerLabel: 'Hourly Chauffeur',
    pickerDesc: 'By the hour',
    sub: 'A vehicle and driver held for you, for as long as you need.',
    trips: ['one', 'multi'],
    hint: 'Book the block of time you need',
    inc: [
      'Driver stays with you throughout',
      'Unlimited stops within your hours',
      'Wait time included',
      'Extend on the day if available',
    ],
  },
  long: {
    key: 'long',
    title: 'Long Distance Transportation',
    pickerLabel: 'Long Distance',
    pickerDesc: 'Off-Island',
    sub: 'Off-Island and cross-province travel, quoted upfront.',
    trips: ['one', 'return'],
    hint: 'Fare agreed before you travel',
    inc: [
      'Fare quoted and agreed upfront',
      'No meter running',
      'Comfort stops on request',
      'Bridge and ferry tolls itemised',
    ],
  },
  medical: {
    key: 'medical',
    title: 'Non-Emergency Appointment Transportation',
    pickerLabel: 'Medical',
    pickerDesc: 'Appointments',
    sub: 'Punctual, scheduled rides to and from appointments across PEI.',
    trips: ['one', 'return', 'multi'],
    hint: 'Appointment times keep us punctual',
    inc: [
      'Arrival ahead of appointment time',
      'Driver assistance to the door',
      'Return pickup coordination',
      'Recurring appointment schedules',
    ],
  },
};

export const SERVICE_ORDER: ServiceKey[] = [
  'taxi',
  'airport',
  'cruise',
  'golf',
  'tour',
  'corporate',
  'wedding',
  'hourly',
  'long',
  'medical',
];

/** Services that show a "wait time needed" field in step 1. */
export const WAIT_TIME_SERVICES: ServiceKey[] = ['medical', 'tour', 'hourly', 'golf'];

export const GOLF_COURSES = [
  'The Links at Crowbush Cove — Morell',
  'Dundarave — Cardigan',
  'Brudenell River — Cardigan',
  'Green Gables Golf Club — Cavendish',
  'Eagles Glenn — Cavendish',
  'Andersons Creek — Stanley Bridge',
  'Glasgow Hills — Hunter River',
  'Fox Meadow — Stratford',
  'Mill River — O’Leary',
  'Belvedere Golf Club — Charlottetown',
  'Glen Afton — Cornwall',
  'Forest Hills — Cornwall',
  'Countryview Golf Club — Fairview',
  'Clyde River Golf Club — Clyde River',
  'Avondale — Vernon River',
  'Stanhope Golf & Country Club — Stanhope',
  'Summerside Golf Club — Summerside',
  'Rustico Resort — South Rustico',
  'Belfast Highland Greens — Belfast',
  'St. Felix Golf Club — St. Felix',
  'Rollo Bay Greens — Rollo Bay',
  'Other — type below',
];

export const MEDICAL_FACILITIES = [
  'Queen Elizabeth Hospital — Charlottetown',
  'Prince County Hospital — Summerside',
  'Kings County Memorial Hospital — Montague',
  'Souris Hospital — Souris',
  'Western Hospital — Alberton',
  'Community Hospital — O’Leary',
  'Hillsborough Hospital — Charlottetown',
  'PEI Cancer Treatment Centre — QEH, Charlottetown',
  'PCH Satellite Cancer Clinic — Summerside',
  'Mental Health & Addictions Emergency Dept — Charlottetown',
  'Dialysis appointment',
  'Laboratory / bloodwork appointment',
  'Diagnostic imaging (X-ray, CT, MRI, ultrasound)',
  'Walk-in clinic',
  'Family doctor / nurse practitioner clinic',
  'Dental appointment',
  'Physiotherapy / rehabilitation',
  'Optometry / eye appointment',
  'Other — type below',
];

export const TOUR_STOPS = [
  'Green Gables Heritage Place',
  'Cavendish Beach',
  'North Rustico',
  'Brackley Beach',
  'Point Prim Lighthouse',
  'Victoria-by-the-Sea',
  'Confederation Bridge',
  'Dalvay-by-the-Sea',
  'Basin Head Beach',
];
