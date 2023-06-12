import React, { useState } from 'react';
import './TextField.css';

const TextField = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`text-field ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        className="input-field"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className="label">{label}</label>
    </div>
  );
};

export default TextField;
