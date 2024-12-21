import React, { useState } from 'react';
import { Donor } from '../types/donor';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { US_STATES } from '../data/us-states';

interface DonorFormProps {
  onAddDonor: (donor: Omit<Donor, 'id'>) => void;
}

export function DonorForm({ onAddDonor }: DonorFormProps) {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && state && amount) {
      onAddDonor({
        name,
        state,
        amount: parseFloat(amount),
        frequency,
        lastDonation: new Date().toISOString(),
      });
      setName('');
      setState('');
      setAmount('');
      setFrequency('one-time');
    }
  };

  const stateOptions = US_STATES.map(state => ({
    value: state.code,
    label: state.name
  }));

  const frequencyOptions = [
    { value: 'one-time', label: 'One Time' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <FormInput
        label="Donor Name"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      <FormSelect
        label="State"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        options={stateOptions}
        required
      />
      
      <FormInput
        label="Donation Amount ($)"
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        step="0.01"
        required
      />

      <FormSelect
        label="Donation Frequency"
        id="frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as 'one-time' | 'monthly' | 'yearly')}
        options={frequencyOptions}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Donor
      </button>
    </form>
  );
}