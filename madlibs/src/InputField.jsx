import React from 'react';

const InputField = ({ label, name, value, onChange, required }) => {
  return (
    <label>
      {label}:
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

export default InputField;