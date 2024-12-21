import { Donor } from '../types/donor';

export type SortField = 'name' | 'state' | 'amount';
export type SortDirection = 'asc' | 'desc';

export function sortDonors(
  donors: Donor[],
  field: SortField,
  direction: SortDirection
): Donor[] {
  return [...donors].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    const compareResult = String(aValue).localeCompare(String(bValue));
    return direction === 'asc' ? compareResult : -compareResult;
  });
}