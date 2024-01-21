// ResultPage.js
// Results: age without inflation, age with inflation, inflated amount
import React from 'react';

function ResultPage({ description, age, dollars }) {
  return (
    <div>
      <h1>Your Result</h1>
      <p>You will be a millionaire by {age} years old!</p>
      <p>You wil have ${dollars} by {age}</p>
      <p>Dollars: {dollars}</p>
      {/* Render your chart component with chartData */}
    </div>
  );
}

export default ResultPage;