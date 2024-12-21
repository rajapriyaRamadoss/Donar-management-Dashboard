import React from 'react';
import { Download, Trash2 } from 'lucide-react';
import { Donor } from '../types/donor';
import { exportToCsv } from '../utils/exportToCsv';

interface DonorActionsProps {
  donors: Donor[];
  onDeleteDonor: (id: string) => void;
}

export function DonorActions({ donors, onDeleteDonor }: DonorActionsProps) {
  return (
    <div className="flex justify-end space-x-4 mb-4">
      <button
        onClick={() => exportToCsv(donors)}
        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        <Download size={16} className="mr-2" />
        Export CSV
      </button>
    </div>
  );
}