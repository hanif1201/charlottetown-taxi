import { NextRequest, NextResponse } from 'next/server';
import { corporateEnquirySchema, sendCorporateEnquiryEmail } from '@/lib/corporate-enquiry';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = corporateEnquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const payload = parsed.data;

  // Honeypot: a real visitor never fills this field in. Report success without
  // doing anything so the bot doesn't learn its submission was rejected.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  // There's no database record for an enquiry — email delivery is the only place
  // it's captured, so a failed send has to be reported back rather than swallowed.
  try {
    await sendCorporateEnquiryEmail(payload);
  } catch (err) {
    console.error('[api/corporate-enquiry] failed to send enquiry email', err);
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
