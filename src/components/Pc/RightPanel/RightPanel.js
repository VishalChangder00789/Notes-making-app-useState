import React from "react";
import "./RightPanel.css";
import Messages from "../../../micro components/Messages/Messages";
import { useState } from "react";
import sendButton from "../../../assets/send.png";
import RightEmptyPanel from "../RightEmptyPanel/RightEmptyPanel";

const RightPanel = ({ userSelected, handleDataAppend }) => {
  let names;
  if (userSelected.name) {
    names = userSelected.name.split(" ");
  }

  const [textareaInput, setTextAreaInput] = useState("");

  return userSelected ? (
    <div className="RightPanelContainer">
      <div className="RightPanelContainer-Heading">
        <div className="RightPanelContainer-Heading-Container">
          <div
            className={`RightPanelContainer-Heading-Icon ${userSelected.color}`}
          >{`${names[0][0]} ${names[1][0]}`}</div>
          <div className="RightPanelContainer-Heading-Name">
            {userSelected.name}
          </div>
        </div>
      </div>

      {/*  */}
      <div className="RightPanelContainer-Message">
        {userSelected.data.map((m) => {
          return <Messages date={m.date} data={m.data} time={m.time} />;
        })}
      </div>

      {/*  */}
      <div className="PC-FooterContainer">
        <div className="PC-FooterContainer-TextBox">
          <textarea
            vaue={textareaInput}
            onChange={(e) => setTextAreaInput(e.target.value)}
            placeholder="Enter your text here..........."
            className="PC-FooterContainer-TextBox-textArea"
          />
          {/* ADD A SEND BUTTON */}
          <img
            onClick={() => handleDataAppend(textareaInput, userSelected.id)}
            className="PC-FooterContainer-TextBox-SendButton"
            src={sendButton}
          />
        </div>
      </div>
    </div>
  ) : (
    <RightEmptyPanel />
  );
};

export default RightPanel;
