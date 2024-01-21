import React, { useState, useEffect } from 'react';
import SavingsChart from './savingschart.js';

function ResultPage() {
  const [resultData, setResultData] = useState({
    yearCalculation: 0,
    monthlyPayment:0,
    
  });

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchDataFromBackend();
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch('http://localhost:3003/info',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log("SAVINGS ARRAY    " + data.data);

      // Array values here, be careful! 
      const { monthlyPayment,yearCalculation,savingsArray, monthsArray } = data.data;
      //const { monthlyPayment,yearCalculation } = data.data;


      setResultData({
        yearCalculation,
        monthlyPayment: Math.round(monthlyPayment * 100) / 100,
        savingsArray,
        monthsArray
      });

      console.log("SAVINGS ARRAY    " + resultData);


    } catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <h1>Your Result</h1>
      <p>You will be a millionaire in {resultData.yearCalculation} years!</p>
      <p>You will have a monthly payment to make of ${resultData.monthlyPayment}</p>
      
      {//BROKEN
      /* <SavingsChart
        savingsArray={resultData.savingsArray}
        monthsArray={resultData.monthsArray}
      /> */}
      {/* Render your chart component with chartData */}
    </div>
  );
}

export default ResultPage;