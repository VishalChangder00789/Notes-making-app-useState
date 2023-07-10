import React from "react";
import "./LeftSideGroup.css";
import NotesGroup from "../../../micro components/NotesGroup/NotesGroup";

const LeftSideGroup = ({
  notes,
  setNotes,
  handleNotesGroupClick,
  setShowModal,
}) => {
  return (
    <div className="LeftSideGroupContainer">
      <div className="LeftContainer">
        <div className="LeftContainer-Heading">Pocket Notes</div>
        <div className="LeftContainer-Button">
          <button
            onClick={() => setShowModal(true)}
            className="LeftContainer-Button-button"
          >
            + Create Notes group
          </button>
        </div>
      </div>
      {/*  */}
      <div className="LeftSideGroupContainer-Container">
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

export default LeftSideGroup;
