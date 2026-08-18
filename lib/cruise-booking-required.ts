import { CruiseBookingState } from '@/lib/cruise-booking-types';

/** Field ids that must be non-empty for the current step, mirroring the original page's reqSel(). */
export function requiredFieldIdsForStep(state: CruiseBookingState): string[] {
  const { step, mode, dir } = state;

  if (step === 2) {
    if (mode === 'cruise') return ['ship', 'cArrive', 'cPickup', 'cBack'];
    if (mode === 'ferry') {
      if (dir === 'Pickup from ferry') return ['fpDate', 'fpTime', 'fpTo'];
      if (dir === 'Drop-off at ferry') return ['fdFrom', 'fdDate', 'fdTime'];
    }
    return [];
  }
  if (step === 3) return ['adults'];
  if (step === 4) return ['name', 'email', 'phone'];
  return [];
}

/** Non-field prerequisites for the current step (pill/mode selections), mirroring stepValid(). */
export function stepPickErrors(state: CruiseBookingState): string | null {
  const { step, mode, need, term, dir } = state;
  if (step === 1) return mode ? null : 'mode';
  if (step === 2) {
    if (mode === 'cruise' && !need) return 'need';
    if (mode === 'ferry') {
      if (!term) return 'term';
      if (!dir) return 'dir';
    }
  }
  return null;
}
