import React from "react";
import "./LeftPanelGroup.css";
import NotesGroup from "../../../micro components/NotesGroup/NotesGroup";

const LeftPanelGroup = ({ notes, handleNotesGroupClick, setShowModal }) => {
  return (
    <div className="LeftPanelContainer">
      <div className="LeftPanelContainer-Heading">Pocket Notes</div>
      <div
        onClick={() => setShowModal(true)}
        className="LeftPanelContainer-ButtonContainer"
      >
        <button className="LeftPanelContainer-ButtonContainer-Button">
          + Create Notes group
        </button>
      </div>
      <div className="LeftPanelContainer-NotesGroupContainer">
        {notes.map((m) => {
          return (
            <NotesGroup
              note={m}
              handleNotesGroupClick={handleNotesGroupClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftPanelGroup;
