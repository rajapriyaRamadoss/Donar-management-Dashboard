import React from 'react';
import { Award, Heart, Star } from 'lucide-react';
import { Donor } from '../types/donor';

interface DonorBadgeProps {
  amount: number;
}

export function DonorBadge({ amount }: DonorBadgeProps) {
  if (amount >= 10000) {
    return (
      <div className="flex items-center text-purple-600" title="Platinum Donor">
        <Award className="w-5 h-5" />
        <span className="ml-1 text-sm">Platinum</span>
      </div>
    );
  }
  
  if (amount >= 5000) {
    return (
      <div className="flex items-center text-yellow-600" title="Gold Donor">
        <Star className="w-5 h-5" />
        <span className="ml-1 text-sm">Gold</span>
      </div>
    );
  }
  
  if (amount >= 1000) {
    return (
      <div className="flex items-center text-red-600" title="Silver Donor">
        <Heart className="w-5 h-5" />
        <span className="ml-1 text-sm">Silver</span>
      </div>
    );
  }
  
  return null;
}