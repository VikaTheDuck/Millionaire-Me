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
      const response = await fetch('http://localhost:3003/success', {
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
    <div className="center-container">
      <div className="bg-gray-200 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Your Info</h2>
        <form onSubmit={handleSubmit}>
          <FormRow
            label="Age"
            type="number"
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
          />
          <FormRow
            label="Savings"
            type="number"
            value={formData.savings}
            onChange={(e) => handleInputChange('savings', e.target.value)}
          />
          <FormRow
            label="Debt"
            type="number"
            value={formData.debt}
            onChange={(e) => handleInputChange('debt', e.target.value)}
          />
          <FormRow
            label="Debt Interest"
            type="number"
            value={formData.debtInterest}
            onChange={(e) => handleInputChange('debtInterest', e.target.value)}
          />
          <FormRow
            label="Debt Time to pay off"
            type="number"
            value={formData.debtTime}
            onChange={(e) => handleInputChange('debtTime', e.target.value)}
          />
          <FormRow
            label="Income"
            type="number"
            value={formData.income}
            onChange={(e) => handleInputChange('income', e.target.value)}
          />
          <FormRow
            label="Monthly Spending"
            type="number"
            value={formData.monthlySpend}
            onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;



