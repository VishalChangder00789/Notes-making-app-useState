import React from "react";
import "./NotesGroup.css";
import "../../components/Mobile/color.css";

const NotesGroup = ({ note, handleNotesGroupClick }) => {
  const names = note.name.split(" ");
  return (
    <div
      onClick={() => handleNotesGroupClick(note)}
      className="NotesGorupContainer"
    >
      <div className={`NotesGorupContainer-Icon ${note.color}`}>
        {" "}
        {`${names[0][0]} ${names[1][0]}`}
      </div>
      <div className="NotesGorupContainer-Name">{note.name}</div>
    </div>
  );
};

export default NotesGroup;
