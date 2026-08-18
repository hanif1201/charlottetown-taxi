import { CRUISE_LINE_BY_SHIP } from '@/lib/cruise-ships';

export type CruiseMode = 'cruise' | 'ferry';
export type FerryDirection = 'Pickup from ferry' | 'Drop-off at ferry';
export type TripType = 'One way' | 'Round trip';
export type ContactMethod = 'Email' | 'WhatsApp' | 'Phone' | 'Text message';

export const TOTAL_STEPS = 5;
export const STEP_LABELS = ['Trip type', 'Travel details', 'Passengers', 'Contact', 'Review'];

export interface CruiseBookingState {
  step: number;
  mode: CruiseMode | '';
  fields: Record<string, string>;
  need: string;
  dur: string;
  places: string[];
  term: string;
  dir: FerryDirection | '';
  trip: TripType;
  seat: boolean;
  contact: ContactMethod;
}

export const initialCruiseBookingState: CruiseBookingState = {
  step: 1,
  mode: '',
  fields: {},
  need: '',
  dur: '',
  places: [],
  term: '',
  dir: '',
  trip: 'One way',
  seat: false,
  contact: 'Email',
};

export type CruiseBookingAction =
  | { type: 'SET_STEP'; step: number }
  | { type: 'SET_MODE'; mode: CruiseMode }
  | { type: 'SET_FIELD'; id: string; value: string }
  | { type: 'SET_NEED'; value: string }
  | { type: 'SET_DUR'; value: string }
  | { type: 'TOGGLE_PLACE'; place: string }
  | { type: 'SET_TERM'; value: string }
  | { type: 'SET_DIR'; value: FerryDirection }
  | { type: 'SET_TRIP'; value: TripType }
  | { type: 'SET_SEAT'; checked: boolean }
  | { type: 'SET_CONTACT'; value: ContactMethod };

export function cruiseBookingReducer(
  state: CruiseBookingState,
  action: CruiseBookingAction,
): CruiseBookingState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.step };
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    case 'SET_FIELD': {
      const fields = { ...state.fields, [action.id]: action.value };
      // Ship -> cruise line autofill, mirroring the original page's behaviour.
      if (action.id === 'ship') {
        fields.line = action.value && action.value !== 'other' ? CRUISE_LINE_BY_SHIP[action.value] || '' : '';
      }
      return { ...state, fields };
    }
    case 'SET_NEED':
      return { ...state, need: action.value };
    case 'SET_DUR':
      return { ...state, dur: action.value };
    case 'TOGGLE_PLACE': {
      const on = state.places.includes(action.place);
      return {
        ...state,
        places: on ? state.places.filter((p) => p !== action.place) : [...state.places, action.place],
      };
    }
    case 'SET_TERM':
      return { ...state, term: action.value };
    case 'SET_DIR':
      return { ...state, dir: action.value };
    case 'SET_TRIP':
      return { ...state, trip: action.value };
    case 'SET_SEAT':
      return { ...state, seat: action.checked };
    case 'SET_CONTACT':
      return { ...state, contact: action.value };
    default:
      return state;
  }
}
