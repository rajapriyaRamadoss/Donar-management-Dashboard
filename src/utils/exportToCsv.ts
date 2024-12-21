import { Donor } from '../types/donor';
import { US_STATES } from '../data/us-states';

export function exportToCsv(donors: Donor[]) {
  const getStateName = (code: string) => 
    US_STATES.find(state => state.code === code)?.name || code;

  const headers = ['Name', 'State', 'Amount'];
  const rows = donors.map(donor => [
    donor.name,
    getStateName(donor.state),
    donor.amount.toString()
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `donors_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}