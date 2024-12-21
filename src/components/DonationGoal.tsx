import React from 'react';
import { Target } from 'lucide-react';
import { DonationGoal as DonationGoalType } from '../types/donor';

interface DonationGoalProps {
  goal: DonationGoalType;
  currentAmount: number;
}

export function DonationGoal({ goal, currentAmount }: DonationGoalProps) {
  const progress = Math.min((currentAmount / goal.target) * 100, 100);
  const remainingDays = Math.ceil(
    (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Target className="text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">{goal.description}</h3>
        </div>
        <span className="text-sm text-gray-500">{remainingDays} days left</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>${currentAmount.toLocaleString()}</span>
          <span>${goal.target.toLocaleString()}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}