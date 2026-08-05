import { BookingState } from '@/lib/booking-types';
import { SERVICES } from '@/lib/services';

const DETAIL_FIELDS_BY_SERVICE: Partial<Record<string, string[]>> = {
  airport: ['flight', 'airline', 'origin', 'meet'],
  cruise: ['port', 'ship', 'dock', 'aboard', 'shore'],
  tour: ['duration', 'pace', 'stops', 'lunch'],
  corporate: ['company', 'costcode', 'passenger', 'recurring', 'billing', 'account'],
  wedding: ['venue', 'reception', 'ceremony', 'guests', 'role', 'shuttleruns', 'decor'],
  hourly: ['hours', 'purpose', 'itinerary'],
  long: ['destcity', 'crossing', 'stopsneeded'],
  medical: ['facility', 'facOther', 'apptTime', 'arriveEarly', 'companion', 'recurringMed'],
};

export function buildBookingPayload(state: BookingState, pageUrl: string) {
  const { fields } = state;
  const val = (id: string) => (fields[id] || '').trim();
  const service = SERVICES[state.svc];

  const serviceDetail: Record<string, unknown> = {};
  if (state.svc === 'airport') {
    serviceDetail.direction = state.dir === 'arrival' ? 'Arriving at YYG' : 'Departing from YYG';
  }
  for (const key of DETAIL_FIELDS_BY_SERVICE[state.svc] ?? []) {
    if (val(key)) serviceDetail[key] = val(key);
  }
  if (state.svc === 'golf') {
    serviceDetail.itinerary = state.golfDays.map((d, i) => ({
      day: i + 1,
      date: d.date || '',
      pickup: d.pickup || '',
      courses: d.stops
        .filter((s) => s.course)
        .map((s) => ({
          course: s.course!.indexOf('Other') === 0 ? s.other || 'TBC' : s.course,
          teeTime: s.tee || '',
        })),
    }));
  }

  return {
    service: service.title,
    serviceKey: state.svc,
    tripType: state.trip,
    pickup: val('pickup'),
    dropoff: state.svc === 'hourly' ? '' : val('dropoff'),
    when: val('when'),
    waitTime: val('waittime'),
    returnWhen: state.trip === 'return' ? val('retWhen') : '',
    returnFrom: state.trip === 'return' ? val('retOther') || val('retFrom') : '',
    passengers: val('pax'),
    luggage: val('luggage'),
    childSeats: val('seats'),
    accessibility: val('access'),
    vehicle: state.vehicle || 'Dispatch to assign',
    vehicleCount: val('vehnote'),
    name: val('name'),
    phone: val('phone'),
    email: val('email'),
    confirmBy: val('confirmBy'),
    notes: val('notes'),
    pageUrl,
    website: val('website'),
    serviceDetail,
  };
}
