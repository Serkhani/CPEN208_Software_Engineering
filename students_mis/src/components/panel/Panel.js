// import React from "react";
// import "./Panel.css";
// import TextField from "../textfield/TextField";
// import Button from "../button/Button";
// import SES_LOGO from "../logo/Logo";

// const Panel = () => {
//   return (
//     <div className="panel">
//       <SES_LOGO />
//       <p className="greetings">Hello! Register to get started</p>
//       <TextField label={"Name"} />
//       <TextField label={"Student Id ie: 109*****"} />
//       <TextField label={"Pin ie: 12345"} />
//       <TextField label={"Confirm Pin ie: 12345"} />
//       <p>
//         Already have an account? <a href="login.html">Login Here</a>
//       </p>
//       <Button text={"REGISTER"}/>
//     </div>
//   );
// };

// export default Panel;


import React from "react";
import "./Panel.css";
import TextField from "../textfield/TextField";
import Button from "../button/Button";
import SES_LOGO from "../logo/Logo";

const Panel = () => {
  return (
    <div className="panel">
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
    </div>
  );
};

export default Panel;
