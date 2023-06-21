import React from "react";
import SES_LOGO from "../../components/logo/Logo";
import TextField from "../../components/textfield/TextField";
import Panel from "../../components/panel/Panel";
import Button from "../../components/button/Button";
import './StudentInfoEntry.css'

const StudentInfoEntry = () => {
  return (
    <Panel>
      <SES_LOGO />
      <div className="year-gender">
        <TextField className="year" label={"Year"} isYorG={"true"}/>
        <TextField className="gender" label={"Gender"} isYorG={"true"}/>
      </div>
      <TextField label={"Contact"} />
      <TextField label={"Email"} />
      <TextField label={"Programme"} />
      <span className="guardian-text">Guardian Info</span>
      <TextField label={"Name"} />
      <TextField label={"Email"} />
      <Button text={"CONTINUE"} />
    </Panel>
  );
};

export default StudentInfoEntry;
