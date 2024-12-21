import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { DonorTable } from './components/DonorTable';
import { DonorForm } from './components/DonorForm';
import { DonationGoal } from './components/DonationGoal';
import { Donor, DonationGoal as DonationGoalType } from './types/donor';

function App() {
  const [donors, setDonors] = useState<Donor[]>([
    { 
      id: '1', 
      name: 'John Doe', 
      state: 'CA', 
      amount: 1000,
      frequency: 'one-time',
      lastDonation: '2024-03-15'
    },
    { 
      id: '2', 
      name: 'Jane Smith', 
      state: 'NY', 
      amount: 2500,
      frequency: 'monthly',
      lastDonation: '2024-03-14'
    },
  ]);

  const [goal] = useState<DonationGoalType>({
    target: 10000,
    deadline: '2024-12-31',
    description: '2024 Annual Fundraising Goal'
  });

  const handleAddDonor = (newDonor: Omit<Donor, 'id'>) => {
    const donor: Donor = {
      ...newDonor,
      id: crypto.randomUUID(),
    };
    setDonors([...donors, donor]);
  };

  const handleDeleteDonor = (id: string) => {
    if (window.confirm('Are you sure you want to delete this donor?')) {
      setDonors(donors.filter(donor => donor.id !== id));
    }
  };

  const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-red-500 mr-2" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Donor Management</h1>
          </div>
          <p className="text-gray-600">Track and manage your donors in one place</p>
        </div>

        <div className="mb-8">
          <DonationGoal goal={goal} currentAmount={totalDonations} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Add New Donor</h2>
            <DonorForm onAddDonor={handleAddDonor} />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Donor List</h2>
            </div>
            <DonorTable donors={donors} onDeleteDonor={handleDeleteDonor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;