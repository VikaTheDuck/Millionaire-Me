// components/FormRow.js
import React from 'react';

const FormRow = ({ label, type, value, placeholder, onChange, infoText, onInfoClick }) => {
  return (
    <div class="grid grid-cols-1 pb-2 gap-4 sm:grid-cols-2">
    {/* <div class="m-auto"> */}
      <div>
      <label htmlFor={`exampleInput-${label}`} className="block pl-10 text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      </div>
      <div>
      <div className="flex items-center">
         <input
          type={type}
          id={`exampleInput-${label}`}
          className="border p-1 w-full text-sm w-40 rounded-lg justify-center"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      </div>
    {/* </div> */}
    </div>
  );
};
export default FormRow;

