import React, { useState, useEffect } from 'react';

function ResultPage() {
  const [resultData, setResultData] = useState({
    age: 0,
    dollars: 0,
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
      const { age } = data.data;

      // For demonstration purposes, you might want to calculate 'dollars' based on 'age'
      const dollars = calculateDollars(age);

      setResultData({
        age,
        dollars,
      });
    } catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };

  const calculateDollars = (age) => {
    // For demonstration purposes, you might want to calculate 'dollars' based on 'age'
    // Replace this logic with your actual calculation
    return age * 10000;
  };

  return (
    <div>
      <h1>Your Result</h1>
      <p>You will be a millionaire by {resultData.age} years old!</p>
      <p>You will have ${resultData.dollars} by {resultData.age}</p>
      <p>Dollars: {resultData.dollars}</p>
      {/* Render your chart component with chartData */}
    </div>
  );
}

export default ResultPage;