import React from "react";
import logo from "../../images/ses_logo.png";
import './logo.css'

const SES_LOGO = () => {
  return (
    <div className="ses_logo">
      <img src={logo} alt="logo"/>
      <span className="ses"> SCHOOL OF ENGINEERING SCIENCES</span>
    </div>
  );
};

export default SES_LOGO;
