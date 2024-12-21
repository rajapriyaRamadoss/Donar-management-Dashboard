import { Donor } from '../types/donor';

export function filterDonors(donors: Donor[], stateFilter: string): Donor[] {
  if (!stateFilter) return donors;
  return donors.filter((donor) => donor.state === stateFilter);
}