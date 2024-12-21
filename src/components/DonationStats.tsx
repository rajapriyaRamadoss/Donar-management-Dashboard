import React from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { Donor } from '../types/donor';

interface DonationStatsProps {
  donors: Donor[];
}

export function DonationStats({ donors }: DonationStatsProps) {
  const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);
  const averageDonation = donors.length ? totalDonations / donors.length : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-3 gap-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-green-100 rounded-full">
          <DollarSign className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Donations</p>
          <p className="text-xl font-semibold text-gray-900">
            ${totalDonations.toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-blue-100 rounded-full">
          <Users className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Donors</p>
          <p className="text-xl font-semibold text-gray-900">
            {donors.length}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-purple-100 rounded-full">
          <TrendingUp className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Average Donation</p>
          <p className="text-xl font-semibold text-gray-900">
            ${averageDonation.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}