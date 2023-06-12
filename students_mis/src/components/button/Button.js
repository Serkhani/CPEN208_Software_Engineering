import React from "react";
import "./Button.css";
import arrowImage from "../../images/arrow_right.png";

const Button = ({ text }) => {
  return (
    <button className="button">
      <span className="text">{text}</span>
      <div className="circle">
        <img src={arrowImage} alt="Arrow" className="arrow-icon" />
      </div>
    </button>
  );
};

export default Button;
