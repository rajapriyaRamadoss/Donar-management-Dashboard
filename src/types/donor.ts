export interface Donor {
  id: string;
  name: string;
  state: string;
  amount: number;
  frequency?: 'one-time' | 'monthly' | 'yearly';
  lastDonation?: string;
}

export interface DonationGoal {
  target: number;
  deadline: string;
  description: string;
}