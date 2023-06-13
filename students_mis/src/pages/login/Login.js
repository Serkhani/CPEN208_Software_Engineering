import React from "react";
import Panel from "../../components/panel/Panel";
import SES_LOGO from "../../components/logo/Logo";
import TextField from "../../components/textfield/TextField";
import Button from "../../components/button/Button";
import './Login.css';

const Login = () => {
  return (
    <Panel>
      <SES_LOGO />
      <p className="greetings">Welcome back! Glad to see you, Again!</p>
      <TextField label={"Enter your id ie: 109******"} />
      <TextField label={"Pin ie: 12345"} />
      <Button text={"LOGIN"} className="button" />
      <span className="text-register">
        Don't have an account? <a href="register.html">Register Here</a>
      </span>
    </Panel>
  );
};

export default Login;
