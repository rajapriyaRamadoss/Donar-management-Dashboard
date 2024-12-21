import React from 'react';
import { MapPin } from 'lucide-react';
import { US_STATES } from '../data/us-states';

interface StateFilterProps {
  selectedState: string;
  onChange: (state: string) => void;
}

export function StateFilter({ selectedState, onChange }: StateFilterProps) {
  return (
    <div className="flex items-center space-x-2">
      <MapPin size={20} className="text-gray-500" />
      <select
        value={selectedState}
        onChange={(e) => onChange(e.target.value)}
        className="form-select rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">All States</option>
        {US_STATES.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}