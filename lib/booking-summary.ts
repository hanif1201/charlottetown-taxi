import { BookingState } from '@/lib/booking-types';
import { SERVICES } from '@/lib/services';

export interface SummaryLine {
  k: string;
  v: string;
}

function fmtDT(v: string): string {
  if (!v) return '';
  const d = new Date(v);
  if (isNaN(d.getTime())) return v;
  return d.toLocaleString('en-CA', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

/** Recommended vehicle capacity (3/4/6) based on party size, or null if not enough info yet. */
export function recommendedCapacity(state: BookingState): number | null {
  const pax = parseInt(state.fields.pax || '0', 10) || 0;
  const golfers = parseInt(state.fields.golfers || '0', 10) || 0;
  const n = Math.max(pax, golfers);
  if (!n) return null;
  if (n <= 3) return 3;
  if (n === 4) return 4;
  return 6;
}

export function buildSummaryLines(state: BookingState): SummaryLine[] {
  const { fields } = state;
  const service = SERVICES[state.svc];
  const lines: SummaryLine[] = [];
  const val = (id: string) => (fields[id] || '').trim();

  lines.push({ k: 'Service', v: service.title });
  if (service.trips.length > 1) {
    lines.push({
      k: 'Trip type',
      v: { one: 'One way', return: 'Return trip', multi: 'Multi-day' }[state.trip],
    });
  }

  if (state.svc === 'airport') {
    lines.push({ k: 'Direction', v: state.dir === 'arrival' ? 'Arriving at YYG' : 'Departing from YYG' });
    if (val('flight')) lines.push({ k: 'Flight', v: val('flight') + (val('airline') ? ' · ' + val('airline') : '') });
  }
  if (state.svc === 'cruise') {
    if (val('port')) lines.push({ k: 'Port', v: val('port') });
    if (val('ship')) lines.push({ k: 'Ship', v: val('ship') });
    if (val('aboard')) lines.push({ k: 'All-aboard', v: val('aboard') });
  }
  if (state.svc === 'tour' && val('duration')) lines.push({ k: 'Tour length', v: val('duration') });
  if (state.svc === 'hourly' && val('hours')) lines.push({ k: 'Duration', v: val('hours') });
  if (state.svc === 'corporate' && val('company')) lines.push({ k: 'Company', v: val('company') });
  if (state.svc === 'wedding' && val('venue')) lines.push({ k: 'Venue', v: val('venue') });
  if (state.svc === 'long' && val('destcity')) lines.push({ k: 'Destination', v: val('destcity') });
  if (state.svc === 'medical') {
    const f = val('facility');
    if (f) lines.push({ k: 'Facility', v: f.indexOf('Other') === 0 ? val('facOther') || 'Other' : f });
    if (val('apptTime')) lines.push({ k: 'Appointment', v: val('apptTime') + ' · ' + (val('arriveEarly') || '') });
  }

  if (state.svc === 'golf') {
    if (val('golfers')) {
      lines.push({
        k: 'Golfers',
        v: val('golfers') + (val('golfbags') ? ' · ' + val('golfbags') + ' bags' : ''),
      });
    }
    state.golfDays.forEach((d, i) => {
      const courses = d.stops
        .filter((s) => s.course)
        .map((s) => {
          const nm = s.course!.indexOf('Other') === 0 ? s.other || 'Course TBC' : s.course!.split(' — ')[0];
          return nm + (s.tee ? ' · ' + s.tee : '');
        });
      if (courses.length || d.date) {
        lines.push({
          k: `Day ${i + 1}${d.date ? ' · ' + d.date : ''}`,
          v: courses.length ? courses.join(', ') : 'No courses yet',
        });
      }
    });
    if (val('stay')) lines.push({ k: 'Staying at', v: val('stay') });
  } else {
    if (val('pickup')) lines.push({ k: 'Pickup', v: val('pickup') });
    if (val('dropoff') && state.svc !== 'hourly') lines.push({ k: 'Drop-off', v: val('dropoff') });
    if (val('when')) lines.push({ k: 'When', v: fmtDT(val('when')) });
  }

  if (state.trip === 'return' && val('retWhen')) {
    lines.push({ k: 'Return', v: fmtDT(val('retWhen')) });
    if (val('retOther')) lines.push({ k: 'Return from', v: val('retOther') });
  }
  if (val('pax')) lines.push({ k: 'Passengers', v: val('pax') });
  if (val('luggage') && val('luggage') !== 'None') lines.push({ k: 'Luggage', v: val('luggage') });
  if (val('seats') && val('seats') !== 'None') lines.push({ k: 'Child seats', v: val('seats') });
  if (state.vehicle) lines.push({ k: 'Vehicle', v: state.vehicle });

  return lines;
}
