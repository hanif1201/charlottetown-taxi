import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from 'pdf-lib';
import { BookingPayload } from '@/lib/validation';
import { formatDateTime, label, GolfItineraryDay } from '@/lib/booking-email';

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 50;
const INK = rgb(11 / 255, 22 / 255, 34 / 255);
const BRASS = rgb(180 / 255, 140 / 255, 30 / 255);
const BODY = rgb(0.15, 0.15, 0.17);
const MUTED = rgb(0.45, 0.45, 0.48);

interface Cursor {
  doc: PDFDocument;
  page: PDFPage;
  y: number;
  font: PDFFont;
  bold: PDFFont;
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function newPage(c: Cursor) {
  c.page = c.doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  c.y = PAGE_HEIGHT - MARGIN;
}

function ensureSpace(c: Cursor, needed: number) {
  if (c.y - needed < MARGIN) newPage(c);
}

function drawHeading(c: Cursor, text: string) {
  ensureSpace(c, 30);
  c.y -= 6;
  c.page.drawText(text, { x: MARGIN, y: c.y, size: 12, font: c.bold, color: BRASS });
  c.y -= 6;
  c.page.drawLine({
    start: { x: MARGIN, y: c.y },
    end: { x: PAGE_WIDTH - MARGIN, y: c.y },
    thickness: 0.75,
    color: rgb(0.85, 0.85, 0.85),
  });
  c.y -= 16;
}

function drawRow(c: Cursor, rowLabel: string, value: string) {
  if (!value) return;
  const labelWidth = 130;
  const valueMaxWidth = PAGE_WIDTH - MARGIN * 2 - labelWidth;
  const lines = wrapText(value, c.font, 10.5, valueMaxWidth);
  ensureSpace(c, lines.length * 14 + 4);
  c.page.drawText(rowLabel, { x: MARGIN, y: c.y, size: 10.5, font: c.bold, color: BODY });
  for (let i = 0; i < lines.length; i++) {
    c.page.drawText(lines[i], { x: MARGIN + labelWidth, y: c.y - i * 14, size: 10.5, font: c.font, color: BODY });
  }
  c.y -= lines.length * 14 + 4;
}

function drawLine(c: Cursor, text: string, opts: { size?: number; font?: PDFFont; color?: ReturnType<typeof rgb>; indent?: number } = {}) {
  const size = opts.size ?? 10.5;
  const font = opts.font ?? c.font;
  const maxWidth = PAGE_WIDTH - MARGIN * 2 - (opts.indent ?? 0);
  const lines = wrapText(text, font, size, maxWidth);
  ensureSpace(c, lines.length * 14 + 2);
  for (const l of lines) {
    c.page.drawText(l, { x: MARGIN + (opts.indent ?? 0), y: c.y, size, font, color: opts.color ?? BODY });
    c.y -= 14;
  }
}

export async function generateBookingPdf(payload: BookingPayload): Promise<Buffer> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  const c: Cursor = { doc, page: doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]), y: PAGE_HEIGHT - MARGIN, font, bold };

  c.page.drawText('New Booking Request', { x: MARGIN, y: c.y, size: 20, font: bold, color: INK });
  c.y -= 24;
  c.page.drawText(`${payload.service} — ${payload.tripType === 'one' ? 'One way' : payload.tripType === 'return' ? 'Return trip' : 'Multi-day'}`, {
    x: MARGIN,
    y: c.y,
    size: 11,
    font,
    color: MUTED,
  });
  c.y -= 24;

  // Journey
  drawHeading(c, 'JOURNEY');
  drawRow(c, 'Pickup', payload.pickup);
  drawRow(c, 'Dropoff', payload.dropoff);
  if (payload.when) {
    const { date, time } = formatDateTime(payload.when);
    drawRow(c, 'Pickup date', date);
    drawRow(c, 'Pickup time', time);
  }
  drawRow(c, 'Wait time', payload.waitTime);
  if (payload.returnWhen) {
    const { date, time } = formatDateTime(payload.returnWhen);
    drawRow(c, 'Return date', date);
    drawRow(c, 'Return time', time);
  }
  drawRow(c, 'Return from', payload.returnFrom);

  // Golf itinerary
  const itinerary = payload.serviceDetail.itinerary as GolfItineraryDay[] | undefined;
  if (Array.isArray(itinerary) && itinerary.length) {
    c.y -= 8;
    drawHeading(c, 'GOLF ITINERARY');
    for (const day of itinerary) {
      const dayLine = `Day ${day.day}${day.date ? '  ' + day.date : ''}${day.pickup ? '  pickup ' + day.pickup : ''}`;
      drawLine(c, dayLine, { font: bold });
      for (const stop of day.courses) {
        drawLine(c, `•  ${stop.course}${stop.teeTime ? '  tee ' + stop.teeTime : ''}`, { indent: 10 });
      }
      c.y -= 4;
    }
  }

  // Service detail
  const detailKeys = Object.keys(payload.serviceDetail).filter((k) => k !== 'itinerary');
  const detailRows = detailKeys.filter((k) => payload.serviceDetail[k]);
  if (detailRows.length) {
    c.y -= 8;
    drawHeading(c, 'SERVICE DETAIL');
    for (const key of detailRows) {
      drawRow(c, label(key), String(payload.serviceDetail[key]));
    }
  }

  // Vehicle
  c.y -= 8;
  drawHeading(c, 'VEHICLE');
  drawRow(c, 'Passengers', payload.passengers);
  if (payload.luggage && payload.luggage !== 'None') drawRow(c, 'Luggage', payload.luggage);
  if (payload.childSeats && payload.childSeats !== 'None') drawRow(c, 'Child seats', payload.childSeats);
  if (payload.accessibility && payload.accessibility !== 'None') drawRow(c, 'Accessibility', payload.accessibility);
  drawRow(c, 'Vehicle', payload.vehicle);
  if (payload.vehicleCount && payload.vehicleCount !== 'None') drawRow(c, 'Vehicle count', payload.vehicleCount);

  // Contact
  c.y -= 8;
  drawHeading(c, 'CONTACT');
  drawRow(c, 'Name', payload.name);
  drawRow(c, 'Phone', payload.phone);
  drawRow(c, 'Email', payload.email);
  drawRow(c, 'Confirm by', payload.confirmBy);

  // Notes
  if (payload.notes) {
    c.y -= 8;
    drawHeading(c, 'NOTES');
    drawLine(c, payload.notes);
  }

  c.y -= 20;
  drawLine(c, `Submitted ${new Date().toLocaleString('en-CA')}`, { size: 9, color: MUTED });

  const bytes = await doc.save();
  return Buffer.from(bytes);
}
