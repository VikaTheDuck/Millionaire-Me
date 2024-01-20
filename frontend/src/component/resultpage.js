// ResultPage.js
import React from 'react';

function ResultPage({ description, age, dollars }) {
  return (
    <div>
      <h1>Result Page</h1>
      <p>Description: {description}</p>
      <p>Age: {age}</p>
      <p>Dollars: {dollars}</p>
      {/* Render your chart component with chartData */}
    </div>
  );
}

export default ResultPage;