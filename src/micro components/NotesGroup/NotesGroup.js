import React from "react";
import "./NotesGroup.css";
import "../../components/Mobile/color.css";

const NotesGroup = ({ note, handleNotesGroupClick }) => {
  let names;
  let length;

  if (note.name) {
    names = note.name.split(" ");
    length = names.length;

    if (names.length > 1) {
      let newName = `${names[0][0]} ${names[length - 1][0]}`;
      names = newName;
    } else {
      names = names[0][0];
    }
  }

  return (
    <div
      onClick={() => handleNotesGroupClick(note)}
      className="NotesGorupContainer"
    >
      <div className={`NotesGorupContainer-Icon ${note.color}`}>
        {`${names}`}
      </div>
      <div className="NotesGorupContainer-Name">{note.name}</div>
    </div>
  );
};

export default NotesGroup;
