import React, { useState } from 'react';
import { ArrowUpDown, Trash2 } from 'lucide-react';
import { Donor } from '../types/donor';
import { TableHeader } from './Table/TableHeader';
import { TableCell } from './Table/TableCell';
import { sortDonors, SortField, SortDirection } from '../utils/sorting';
import { filterDonors } from '../utils/filterDonors';
import { StateFilter } from './StateFilter';
import { DonationStats } from './DonationStats';
import { DonorActions } from './DonorActions';
import { US_STATES } from '../data/us-states';

interface DonorTableProps {
  donors: Donor[];
  onDeleteDonor: (id: string) => void;
}

export function DonorTable({ donors, onDeleteDonor }: DonorTableProps) {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [stateFilter, setStateFilter] = useState('');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredDonors = filterDonors(donors, stateFilter);
  const sortedDonors = sortDonors(filteredDonors, sortField, sortDirection);

  const getStateName = (stateCode: string) => {
    return US_STATES.find(state => state.code === stateCode)?.name || stateCode;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <StateFilter selectedState={stateFilter} onChange={setStateFilter} />
        <DonorActions donors={filteredDonors} onDeleteDonor={onDeleteDonor} />
      </div>
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader sortable onClick={() => handleSort('name')}>
                <div className="flex items-center space-x-1">
                  <span>Name</span>
                  <ArrowUpDown size={14} />
                </div>
              </TableHeader>
              <TableHeader sortable onClick={() => handleSort('state')}>
                <div className="flex items-center space-x-1">
                  <span>State</span>
                  <ArrowUpDown size={14} />
                </div>
              </TableHeader>
              <TableHeader sortable onClick={() => handleSort('amount')}>
                <div className="flex items-center space-x-1">
                  <span>Amount</span>
                  <ArrowUpDown size={14} />
                </div>
              </TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {sortedDonors.map((donor) => (
              <tr key={donor.id} className="hover:bg-gray-50">
                <TableCell>{donor.name}</TableCell>
                <TableCell>{getStateName(donor.state)}</TableCell>
                <TableCell>${donor.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <button
                    onClick={() => onDeleteDonor(donor.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Delete donor"
                  >
                    <Trash2 size={16} />
                  </button>
                </TableCell>
              </tr>
            ))}
            {sortedDonors.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No donors found {stateFilter && `in ${getStateName(stateFilter)}`}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <DonationStats donors={filteredDonors} />
    </div>
  );
}