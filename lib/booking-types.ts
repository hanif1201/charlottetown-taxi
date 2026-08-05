import { ServiceKey, TripType } from '@/lib/services';

export interface GolfStop {
  course?: string;
  other?: string;
  tee?: string;
}

export interface GolfDay {
  date?: string;
  pickup?: string;
  stops: GolfStop[];
}

export interface BookingState {
  svc: ServiceKey;
  trip: TripType;
  vehicle: string | null;
  dir: 'arrival' | 'departure';
  golfDays: GolfDay[];
  fields: Record<string, string>;
}

export const initialBookingState: BookingState = {
  svc: 'taxi',
  trip: 'one',
  vehicle: null,
  dir: 'arrival',
  golfDays: [],
  fields: {},
};

export type BookingAction =
  | { type: 'SET_SVC'; svc: ServiceKey }
  | { type: 'SET_TRIP'; trip: TripType }
  | { type: 'SET_VEHICLE'; vehicle: string }
  | { type: 'SET_DIR'; dir: 'arrival' | 'departure' }
  | { type: 'SET_FIELD'; id: string; value: string }
  | { type: 'SET_FIELDS'; values: Record<string, string> }
  | { type: 'GOLF_ADD_DAY' }
  | { type: 'GOLF_REMOVE_DAY'; day: number }
  | { type: 'GOLF_ADD_STOP'; day: number }
  | { type: 'GOLF_REMOVE_STOP'; day: number; stop: number }
  | { type: 'GOLF_SET_STOP'; day: number; stop: number; patch: Partial<GolfStop> }
  | { type: 'GOLF_SET_DAY'; day: number; patch: Partial<Pick<GolfDay, 'date' | 'pickup'>> };

export function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_SVC':
      return {
        ...state,
        svc: action.svc,
        trip: 'one',
        golfDays: action.svc === 'golf' ? [{ stops: [{}] }] : [],
      };
    case 'SET_TRIP':
      return { ...state, trip: action.trip };
    case 'SET_VEHICLE':
      return { ...state, vehicle: action.vehicle };
    case 'SET_DIR': {
      const fields = { ...state.fields };
      if (action.dir === 'arrival') {
        if (!fields.pickup) fields.pickup = 'Charlottetown Airport (YYG)';
      } else if (!fields.dropoff) {
        fields.dropoff = 'Charlottetown Airport (YYG)';
      }
      return { ...state, dir: action.dir, fields };
    }
    case 'SET_FIELD':
      return { ...state, fields: { ...state.fields, [action.id]: action.value } };
    case 'SET_FIELDS':
      return { ...state, fields: { ...state.fields, ...action.values } };
    case 'GOLF_ADD_DAY':
      return { ...state, golfDays: [...state.golfDays, { stops: [{}] }] };
    case 'GOLF_REMOVE_DAY':
      return { ...state, golfDays: state.golfDays.filter((_, i) => i !== action.day) };
    case 'GOLF_ADD_STOP':
      return {
        ...state,
        golfDays: state.golfDays.map((d, i) =>
          i === action.day ? { ...d, stops: [...d.stops, {}] } : d,
        ),
      };
    case 'GOLF_REMOVE_STOP':
      return {
        ...state,
        golfDays: state.golfDays.map((d, i) =>
          i === action.day ? { ...d, stops: d.stops.filter((_, s) => s !== action.stop) } : d,
        ),
      };
    case 'GOLF_SET_STOP':
      return {
        ...state,
        golfDays: state.golfDays.map((d, i) =>
          i === action.day
            ? {
                ...d,
                stops: d.stops.map((s, si) => (si === action.stop ? { ...s, ...action.patch } : s)),
              }
            : d,
        ),
      };
    case 'GOLF_SET_DAY':
      return {
        ...state,
        golfDays: state.golfDays.map((d, i) => (i === action.day ? { ...d, ...action.patch } : d)),
      };
    default:
      return state;
  }
}
