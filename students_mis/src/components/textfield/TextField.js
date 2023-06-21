import React, { useState } from "react";
import "./TextField.css";

const TextField = ({ label , isYorG=false}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className={`text-field ${isFocused || value ? "focused" : ""} ${isYorG ? "YorG" : ""}`}
    >
      <input
        type="text"
        className="input-field"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label className="label">{label}</label>
    </div>
  );
};

export default TextField;
