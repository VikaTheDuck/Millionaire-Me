// ErrorPage.js
import React from 'react';

function ErrorPage() {
  return (
    <div className="center-container bg-red-200 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Oops! Something went wrong.</h1>
      <p className="font-semibold">We encountered an error while processing your form submission.</p>
    </div>
  );
}

export default ErrorPage;