import { ServiceKey, TripType } from '@/lib/services';

const SERVICE_REQUIRED: Partial<Record<ServiceKey, string[]>> = {
  airport: ['flight'],
  cruise: ['port'],
  golf: ['golfers'],
  tour: ['duration'],
  corporate: ['company'],
  wedding: ['venue'],
  hourly: ['hours'],
  long: ['destcity'],
  medical: ['facility', 'apptTime'],
};

export function requiredFieldIds(
  svc: ServiceKey,
  trip: TripType,
  fields?: Record<string, string>,
): string[] {
  const ids = ['pickup', 'pax', 'name', 'phone', 'when'];
  if (svc !== 'hourly') ids.push('dropoff');
  if (trip === 'return') ids.push('retWhen');
  ids.push(...(SERVICE_REQUIRED[svc] ?? []));
  if (svc === 'airport' && fields?.ret_when) ids.push('ret_flight', 'ret_when', 'ret_address');
  return ids;
}
