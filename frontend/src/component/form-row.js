// components/FormRow.js
import React from 'react';

const FormRow = ({ label, type, value, onChange, infoText, onInfoClick }) => {
  return (
    <div class="flex">
    <div class="m-auto">
      <label htmlFor={`exampleInput-${label}`} className="block pt-2 text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="flex items-center">
         <input
          type={type}
          id={`exampleInput-${label}`}
          className="border p-1 w-full text-sm w-40 rounded-lg justify-center"
          placeholder={"0.00$"}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
    </div>
  );
};
export default FormRow;

