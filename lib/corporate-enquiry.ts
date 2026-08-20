import { z } from 'zod';
import { Resend } from 'resend';

export const corporateEnquirySchema = z.object({
  org: z.string().min(1, 'Organization is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().optional().default(''),
  type: z.string().min(1, 'Transportation type is required'),
  frequency: z.string().optional().default(''),
  details: z.string().min(1, 'Please add a few details'),
  pageUrl: z.string().optional().default(''),
  // Honeypot: real visitors never fill this in. Non-empty means a bot filled every field.
  website: z.string().optional().default(''),
});

export type CorporateEnquiryPayload = z.infer<typeof corporateEnquirySchema>;

function pad(s: string): string {
  return (s + ':').padEnd(18, ' ');
}

export function formatCorporateEnquiryText(payload: CorporateEnquiryPayload): string {
  const lines: string[] = ['NEW CORPORATE ENQUIRY', '======================', ''];
  lines.push(pad('ORGANIZATION') + payload.org);
  lines.push(pad('CONTACT') + payload.contactName);
  lines.push(pad('EMAIL') + payload.email);
  if (payload.phone) lines.push(pad('PHONE') + payload.phone);
  lines.push(pad('TYPE') + payload.type);
  if (payload.frequency) lines.push(pad('FREQUENCY') + payload.frequency);

  lines.push('');
  lines.push('-- DETAILS ------------------------');
  lines.push(payload.details);

  lines.push('');
  lines.push('Submitted ' + new Date().toLocaleString('en-CA'));

  return lines.join('\n');
}

export async function sendCorporateEnquiryEmail(payload: CorporateEnquiryPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.warn(
      '[corporate-enquiry] RESEND_API_KEY/BOOKING_NOTIFY_EMAIL/RESEND_FROM_EMAIL not set — skipping email send.',
    );
    console.info(formatCorporateEnquiryText(payload));
    return;
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    subject: `New corporate enquiry — ${payload.org}`,
    text: formatCorporateEnquiryText(payload),
  });
}
