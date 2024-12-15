import React from 'react';
import './InputField.scss';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}            // Bind the value to the state
        onChange={onChange}      // Update the state on input change
      />
    </div>
  );
};
export default InputField;
