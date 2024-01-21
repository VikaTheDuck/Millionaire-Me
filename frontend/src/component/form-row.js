// components/FormRow.js
import React from 'react';

const FormRow = ({ label, type, value, onChange, infoText, onInfoClick }) => {
  return (
    <div className="mb-4">
      <label htmlFor={`exampleInput-${label}`} className="text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="flex items-center">
         <input
          type={type}
          id={`exampleInput-${label}`}
          className="border p-2 w-full"
          placeholder={label}
          value={value}
          onChange={onChange}
        />
        {infoText && (
          <button
            type="button"
            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            onClick={onInfoClick}
          >
            Info
          </button>
        )}
      </div>
    </div>
  );
};

export default FormRow;
