import React from "react";
import Panel from "../components/panel/Panel";
import SES_LOGO from "../components/logo/Logo";
import TextField from "../components/textfield/TextField";
import Button from "../components/button/Button";

const StudentRegistration = () => {
  return (
    <Panel>
      <SES_LOGO />
      <p className="greetings">Hello! Register to get started</p>
      <TextField label={"Name"} />
      <TextField label={"Student Id ie: 109*****"} />
      <TextField label={"Pin ie: 12345"} />
      <TextField label={"Confirm Pin ie: 12345"} />
      <Button text={"REGISTER"} />
      <span className="text-login">
        Already have an account? <a href="login.html">Login Here</a>
      </span>
    </Panel>
  );
};

export default StudentRegistration;
