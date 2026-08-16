import { z } from 'zod';
import { SERVICE_ORDER } from '@/lib/services';

const REQUIRED_DETAIL_KEYS: Partial<Record<string, string[]>> = {
  airport: ['flight', 'payment'],
  cruise: ['port'],
  golf: ['golfers'],
  tour: ['duration'],
  corporate: ['company'],
  wedding: ['venue'],
  hourly: ['hours'],
  long: ['destcity'],
  medical: ['facility', 'apptTime'],
};

export const bookingPayloadSchema = z
  .object({
    service: z.string().min(1),
    serviceKey: z.enum(SERVICE_ORDER as [string, ...string[]]),
    tripType: z.enum(['one', 'return', 'multi']),
    pickup: z.string().min(1, 'Pickup location is required'),
    dropoff: z.string().optional().default(''),
    when: z.string().min(1, 'Pickup date & time is required'),
    waitTime: z.string().optional().default(''),
    returnWhen: z.string().optional().default(''),
    returnFrom: z.string().optional().default(''),
    passengers: z.string().min(1, 'Passenger count is required'),
    luggage: z.string().optional().default(''),
    childSeats: z.string().optional().default(''),
    accessibility: z.string().optional().default(''),
    vehicle: z.string().optional().default('Dispatch to assign'),
    vehicleCount: z.string().optional().default(''),
    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(7, 'A valid phone number is required'),
    email: z.union([z.literal(''), z.string().email('Enter a valid email')]).optional().default(''),
    confirmBy: z.string().optional().default(''),
    notes: z.string().optional().default(''),
    pageUrl: z.string().optional().default(''),
    // Honeypot: real users never fill this in. Non-empty means a bot filled every field.
    website: z.string().optional().default(''),
    serviceDetail: z.record(z.string(), z.unknown()).optional().default({}),
  })
  .superRefine((data, ctx) => {
    if (data.serviceKey !== 'hourly' && !data.dropoff) {
      ctx.addIssue({ code: 'custom', path: ['dropoff'], message: 'Drop-off address is required' });
    }
    if (data.tripType === 'return' && !data.returnWhen) {
      ctx.addIssue({ code: 'custom', path: ['returnWhen'], message: 'Return date & time is required' });
    }
    for (const key of REQUIRED_DETAIL_KEYS[data.serviceKey] ?? []) {
      const value = data.serviceDetail[key];
      if (!value || (typeof value === 'string' && !value.trim())) {
        ctx.addIssue({ code: 'custom', path: ['serviceDetail', key], message: `${key} is required` });
      }
    }
  });

export type BookingPayload = z.infer<typeof bookingPayloadSchema>;
