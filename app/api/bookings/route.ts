import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@/app/generated/prisma/client';
import { bookingPayloadSchema } from '@/lib/validation';
import { sendBookingEmail } from '@/lib/booking-email';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = bookingPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const payload = parsed.data;

  // Honeypot: a real visitor never fills this field in. Report success without
  // doing anything so the bot doesn't learn its submission was rejected.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const booking = await prisma.booking.create({
    data: {
      service: payload.service,
      serviceKey: payload.serviceKey,
      tripType: payload.tripType,
      pickup: payload.pickup,
      dropoff: payload.dropoff || null,
      when: new Date(payload.when),
      waitTime: payload.waitTime || null,
      returnWhen: payload.returnWhen ? new Date(payload.returnWhen) : null,
      returnFrom: payload.returnFrom || null,
      passengers: payload.passengers,
      luggage: payload.luggage || null,
      childSeats: payload.childSeats || null,
      accessibility: payload.accessibility || null,
      vehicle: payload.vehicle || null,
      vehicleCount: payload.vehicleCount || null,
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      confirmBy: payload.confirmBy || null,
      notes: payload.notes || null,
      pageUrl: payload.pageUrl || null,
      serviceDetail: payload.serviceDetail as Prisma.InputJsonValue,
    },
  });

  try {
    await sendBookingEmail(payload);
  } catch (err) {
    // The booking is already saved — a flaky email provider must never lose it.
    console.error('[api/bookings] failed to send dispatch email', err);
  }

  return NextResponse.json({ ok: true, id: booking.id });
}
