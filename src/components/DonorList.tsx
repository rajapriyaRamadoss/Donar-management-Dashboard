import React from 'react';
import { Donor } from '../types/donor';
import { DollarSign, MapPin, User } from 'lucide-react';

interface DonorListProps {
  donors: Donor[];
}

export function DonorList({ donors }: DonorListProps) {
  return (
    <div className="space-y-4">
      {donors.map((donor) => (
        <div
          key={donor.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <User className="text-blue-500" size={20} />
              <span className="font-medium">{donor.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span>{donor.state}</span>
              </div>
              <div className="flex items-center text-green-600">
                <DollarSign size={16} className="mr-1" />
                <span>{donor.amount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}