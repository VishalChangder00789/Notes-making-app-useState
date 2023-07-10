import React, { useState } from "react";
import "./ShowData.css";
import Messages from "../../../micro components/Messages/Messages";
import sendButton from "../../../assets/send.png";
import backButton from "../../../assets/BackArrow.png";

const ShowData = ({
  userSelected,
  setNotesGroupClicked,
  NotesGroupClicked,
  handleDataAppend,
}) => {
  const [textareaInput, setTextAreaInput] = useState("");

  const names = userSelected.name.split(" ");
  return (
    <div className="ShowDataContainer">
      <div className="ShowDataContainer-Heading">
        <div
          onClick={() => setNotesGroupClicked(!NotesGroupClicked)}
          className="BACKARROW"
        >
          <img src={backButton} />
        </div>
        <div className="ShowDataContainer-Heading-Icon">{`${names[0][0]} ${names[1][0]} `}</div>
        <div className="ShowDataContainer-Heading-Name">
          {userSelected.name}
        </div>
      </div>

      {!userSelected.data ? (
        ""
      ) : (
        <div className="ShowDataContainer-Data">
          {userSelected.data.map((m) => {
            return <Messages date={m.date} time={m.time} data={m.data} />;
          })}
        </div>
      )}

      <div className="FooterContainer">
        <div className="FooterContainer-TextBox">
          <textarea
            vaue={textareaInput}
            onChange={(e) => setTextAreaInput(e.target.value)}
            placeholder="Enter your text here..........."
            className="FooterContainer-TextBox-textArea"
          />
          {/* ADD A SEND BUTTON */}
          <img
            onClick={() => handleDataAppend(textareaInput, userSelected.id)}
            className="FooterContainer-TextBox-SendButton"
            src={sendButton}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowData;
