import { Resend } from 'resend';
import { BookingPayload } from '@/lib/validation';

function label(key: string): string {
  const spaced = key.replace(/([A-Z])/g, ' $1');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function pad(s: string): string {
  return (s + ':').padEnd(18, ' ');
}

// `payload.when`/`returnWhen` are raw `datetime-local` values ("2026-09-05T03:28") with
// no timezone — split by hand rather than going through Date's timezone-aware parsing/
// formatting, so the wall-clock time the customer picked is never shifted.
function formatDateTime(dt: string): { date: string; time: string } {
  const [datePart, timePart] = dt.split('T');
  const [y, m, d] = (datePart || '').split('-').map(Number);
  const [hStr, minStr] = (timePart || '').split(':');
  const h = Number(hStr);
  if (!y || !m || !d || Number.isNaN(h) || !minStr) return { date: dt, time: '' };

  const date = new Date(y, m - 1, d).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return { date, time: `${h12}:${minStr} ${ampm}` };
}

interface GolfCourseStop {
  course: string;
  teeTime?: string;
}

interface GolfItineraryDay {
  day: number;
  date?: string;
  pickup?: string;
  courses: GolfCourseStop[];
}

export function formatBookingText(payload: BookingPayload): string {
  const lines: string[] = ['NEW BOOKING REQUEST', '===================', ''];
  lines.push(pad('SERVICE') + payload.service);
  lines.push(pad('TRIP TYPE') + payload.tripType);
  lines.push('');

  lines.push('-- JOURNEY ------------------------');
  if (payload.pickup) lines.push(pad('Pickup') + payload.pickup);
  if (payload.dropoff) lines.push(pad('Dropoff') + payload.dropoff);
  if (payload.when) {
    const { date, time } = formatDateTime(payload.when);
    lines.push(pad('Pickup date') + date);
    lines.push(pad('Pickup time') + time);
  }
  if (payload.waitTime) lines.push(pad('Wait Time') + payload.waitTime);
  if (payload.returnWhen) {
    const { date, time } = formatDateTime(payload.returnWhen);
    lines.push(pad('Return date') + date);
    lines.push(pad('Return time') + time);
  }
  if (payload.returnFrom) lines.push(pad('Return From') + payload.returnFrom);

  const itinerary = payload.serviceDetail.itinerary as GolfItineraryDay[] | undefined;
  if (Array.isArray(itinerary) && itinerary.length) {
    lines.push('');
    lines.push('-- GOLF ITINERARY -----------------');
    for (const day of itinerary) {
      lines.push(`Day ${day.day}${day.date ? '  ' + day.date : ''}${day.pickup ? '  pickup ' + day.pickup : ''}`);
      for (const c of day.courses) {
        lines.push(`   • ${c.course}${c.teeTime ? '  tee ' + c.teeTime : ''}`);
      }
    }
  }

  const detailKeys = Object.keys(payload.serviceDetail).filter((k) => k !== 'itinerary');
  if (detailKeys.length) {
    lines.push('');
    lines.push('-- SERVICE DETAIL -----------------');
    for (const key of detailKeys) {
      const v = payload.serviceDetail[key];
      if (v) lines.push(pad(label(key)) + String(v));
    }
  }

  lines.push('');
  lines.push('-- VEHICLE ------------------------');
  const vehicleKeys: [string, string][] = [
    ['passengers', 'Passengers'],
    ['luggage', 'Luggage'],
    ['childSeats', 'Child Seats'],
    ['accessibility', 'Accessibility'],
    ['vehicle', 'Vehicle'],
    ['vehicleCount', 'Vehicle Count'],
  ];
  for (const [key, text] of vehicleKeys) {
    const v = payload[key as keyof BookingPayload];
    if (v && v !== 'None') lines.push(pad(text) + String(v));
  }

  lines.push('');
  lines.push('-- CONTACT ------------------------');
  const contactKeys: [string, string][] = [
    ['name', 'Name'],
    ['phone', 'Phone'],
    ['email', 'Email'],
    ['confirmBy', 'Confirm By'],
  ];
  for (const [key, text] of contactKeys) {
    const v = payload[key as keyof BookingPayload];
    if (v) lines.push(pad(text) + String(v));
  }

  if (payload.notes) {
    lines.push('');
    lines.push('-- NOTES --------------------------');
    lines.push(payload.notes);
  }

  lines.push('');
  lines.push('Submitted ' + new Date().toLocaleString('en-CA'));

  return lines.join('\n');
}

export async function sendBookingEmail(payload: BookingPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.warn('[booking-email] RESEND_API_KEY/BOOKING_NOTIFY_EMAIL/RESEND_FROM_EMAIL not set — skipping email send.');
    console.info(formatBookingText(payload));
    return;
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    subject: `New booking — ${payload.service} — ${payload.name}`,
    text: formatBookingText(payload),
  });
}
