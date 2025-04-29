// components/sections/DonationForm.js
'use client';
import { useState } from 'react';

export default function DonationForm() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation processing logic here
    console.log({
      amount: donationAmount === 'custom' ? customAmount : donationAmount,
      donorName,
      email,
      isMonthly
    });
    // Would connect to payment gateway in production
  };
  
  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Donation Amount</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {['25', '50', '100', '250'].map((amount) => (
              <button
                key={amount}
                type="button"
                className={`${
                  donationAmount === amount
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800'
                } py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-primary`}
                onClick={() => {
                  setDonationAmount(amount);
                  setCustomAmount('');
                }}
              >
                ${amount}
              </button>
            ))}
          </div>
          
          <div className="mt-4">
            <button
              type="button"
              className={`${
                donationAmount === 'custom'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800'
              } py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-primary w-full`}
              onClick={() => setDonationAmount('custom')}
            >
              Custom Amount
            </button>
          </div>
          
          {donationAmount === 'custom' && (
            <div className="mt-4">
              <label htmlFor="customAmount" className="sr-only">
                Custom amount
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="customAmount"
                  id="customAmount"
                  className="focus:ring-primary focus:border-primary block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  required={donationAmount === 'custom'}
                />
              </div>
            </div>
          )}
          
          <div className="mt-4">
            <div className="flex items-center">
              <input
                id="monthly"
                name="monthly"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                checked={isMonthly}
                onChange={() => setIsMonthly(!isMonthly)}
              />
              <label htmlFor="monthly" className="ml-2 block text-sm text-gray-900">
                Make this a monthly donation
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900">Your Information</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="donorName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="donorName"
                  id="donorName"
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Complete Donation
          </button>
        </div>
      </form>
    </div>
  );
}
