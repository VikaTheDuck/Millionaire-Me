// components/FormContainer.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import FormRow from './form-row';

const FormContainer = () => {
  const [formData, setFormData] = useState({
    age: '',
    savings: '',
    debt: '',
    debtInterest: '',
    debtTime: '',
    income: '',
    monthlySpend: '',
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Form submitted successfully!');
      // Navigate to the results page after successful form submission
      navigate('/result', { replace: true });
      // Optionally, you can handle the response from the server here
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <div className="w-full sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3 mx-auto my-8">
      <div className="bg-gray-200 p-4 rounded-md shadow-md">
        <div className="justify-center">
        <h2 className="pt-4 pb-3 text-l mb-4 text-center font-medium">Your Info</h2>
        </div>
        <form onSubmit={handleSubmit} className="justify-center">
          <FormRow
            label="Age"
            type="number"
            placeholder="years"
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
          />
          <FormRow
            label="Savings"
            type="number"
            placeholder="0.00$"
            value={formData.savings}
            onChange={(e) => handleInputChange('savings', e.target.value)}
          />
          <FormRow
            label="Debt"
            type="number"
            placeholder="0.00$"
            value={formData.debt}
            onChange={(e) => handleInputChange('debt', e.target.value)}
          />
          <FormRow
            label="Debt Interest"
            type="number"
            placeholder="%"
            value={formData.debtInterest}
            onChange={(e) => handleInputChange('debtInterest', e.target.value)}
          />
          <FormRow
            label="Debt Time to pay off"
            type="number"
            placeholder="years"
            value={formData.debtTime}
            onChange={(e) => handleInputChange('debtTime', e.target.value)}
          />
          <FormRow
            label="Income"
            type="number"
            placeholder="0.00$"
            value={formData.income}
            onChange={(e) => handleInputChange('income', e.target.value)}
          />
          <FormRow
            label="Monthly Spending"
            type="number"
            placeholder="0.00$"
            value={formData.monthlySpend}
            onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
          />
          <div className="flex justify-center pl-3 p-4 pt-6">
          <button
            type="submit"
            className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4 py-2 rounded-md shadow-lg bg-gradient-to-r from-green-400 to-lime-400 font-medium text-gray-100 transition duration-300"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;



