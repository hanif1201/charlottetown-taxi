import { CruiseBookingState } from '@/lib/cruise-booking-types';
import { BookingPayload } from '@/lib/validation';

export interface ReviewRow {
  k: string;
  v: string;
}

function val(state: CruiseBookingState, id: string): string {
  return (state.fields[id] || '').trim();
}

/** Mirrors the original page's buildReview(): every filled-in fact, in display order. */
export function buildCruiseReviewRows(state: CruiseBookingState): ReviewRow[] {
  const rows: ReviewRow[] = [];
  const add = (k: string, v: string) => {
    if (v) rows.push({ k, v });
  };
  const { mode, dir, trip, need, dur, places, term, seat, contact } = state;

  add('Travelling by', mode === 'cruise' ? 'Cruise ship' : 'Ferry');

  if (mode === 'cruise') {
    const ship = val(state, 'ship');
    add('Ship', ship === 'other' ? 'Other / not listed' : ship);
    add('Cruise line', val(state, 'line'));
    add('In port', val(state, 'cArrive'));
    add('Pickup time', val(state, 'cPickup'));
    add('Service', need);
    add('Duration', dur);
    add('Places', places.join(', '));
    add('Back at port', val(state, 'cBack'));
    add('Ship departs', val(state, 'cSail'));
  } else if (mode === 'ferry') {
    add('Terminal', term);
    add('Direction', dir);
    if (dir === 'Pickup from ferry') {
      add('Arrival', `${val(state, 'fpDate')} ${val(state, 'fpTime')}`.trim());
      add('Travelling from', val(state, 'fpFrom'));
      add('Destination', val(state, 'fpTo'));
    } else {
      add('Pickup address', val(state, 'fdFrom'));
      add('Sailing', `${val(state, 'fdDate')} ${val(state, 'fdTime')}`.trim());
    }
    add('Trip', trip);
    if (trip === 'Round trip') add('Return', `${val(state, 'rtDate')} ${val(state, 'rtTime')}`.trim());
  }

  const children = val(state, 'children');
  add('Passengers', `${val(state, 'adults')} adults${children && children !== '0' ? `, ${children} children` : ''}`);
  add('Luggage', val(state, 'lug'));
  if (seat) add('Child seat', 'Required');
  add('Accessibility', val(state, 'access'));
  add('Notes', val(state, 'notes'));
  add('Name', val(state, 'name'));
  add('Email', val(state, 'email'));
  add('Phone', val(state, 'phone'));
  add('Country', val(state, 'country'));
  add('Contact by', contact);

  return rows;
}

/**
 * Builds a payload compatible with the shared `bookingPayloadSchema` (lib/validation.ts) so this
 * wizard can reuse the existing /api/bookings endpoint, zod validation, Prisma model and email
 * formatter without any changes to them. There's no dedicated "ferry" ServiceKey, so serviceKey
 * stays 'cruise' (the only enum value that fits) for both modes; `service` carries the real label.
 */
export function buildCruisePayload(state: CruiseBookingState, pageUrl: string): BookingPayload {
  const { mode, dir, trip, need, dur, places, term, seat, contact } = state;
  const v = (id: string) => val(state, id);

  let pickup = '';
  let dropoff = '';
  let when = '';

  if (mode === 'cruise') {
    pickup = 'Port Charlottetown (cruise terminal)';
    dropoff = places.join(', ') || need;
    when = `${v('cArrive')} ${v('cPickup')}`.trim();
  } else if (mode === 'ferry') {
    if (dir === 'Pickup from ferry') {
      pickup = term;
      dropoff = v('fpTo');
      when = `${v('fpDate')} ${v('fpTime')}`.trim();
    } else {
      pickup = v('fdFrom');
      dropoff = term;
      when = `${v('fdDate')} ${v('fdTime')}`.trim();
    }
  }

  const tripType = mode === 'ferry' && trip === 'Round trip' ? 'return' : 'one';
  const children = v('children');

  const serviceDetail: Record<string, unknown> = {};
  const detail = (key: string, value: string) => {
    if (value) serviceDetail[key] = value;
  };
  // serviceKey is 'cruise' regardless of mode (there's no separate 'ferry' ServiceKey), which
  // means this payload is held to the existing cruise service's server-side contract in
  // lib/validation.ts — REQUIRED_DETAIL_KEYS.cruise requires serviceDetail.port. Populate it for
  // both modes rather than weakening that shared check.
  if (mode === 'cruise') {
    detail('port', 'Charlottetown Cruise Port');
    detail('ship', v('ship') === 'other' ? 'Other / not listed' : v('ship'));
    detail('cruiseLine', v('line'));
    detail('need', need);
    detail('duration', dur);
    detail('places', places.join(', '));
    detail('shipDeparts', v('cSail'));
    detail('country', v('country'));
  } else if (mode === 'ferry') {
    detail('port', term);
    detail('terminal', term);
    detail('direction', dir);
    detail('trip', trip);
    if (trip === 'Round trip') detail('returnSailing', `${v('rtDate')} ${v('rtTime')}`.trim());
  }

  return {
    service: mode === 'cruise' ? 'Cruise Ship Transportation' : 'Ferry Terminal Transportation',
    serviceKey: 'cruise',
    tripType,
    pickup,
    dropoff,
    when,
    waitTime: '',
    returnWhen: tripType === 'return' ? `${v('rtDate')} ${v('rtTime')}`.trim() : '',
    returnFrom: '',
    passengers: `${v('adults')} adults${children && children !== '0' ? `, ${children} children` : ''}`,
    luggage: v('lug'),
    childSeats: seat ? 'Required' : '',
    accessibility: v('access'),
    vehicle: 'Dispatch to assign',
    vehicleCount: '',
    name: v('name'),
    phone: v('phone'),
    email: v('email'),
    confirmBy: contact,
    notes: v('notes'),
    pageUrl,
    website: v('website'),
    serviceDetail,
  };
}
