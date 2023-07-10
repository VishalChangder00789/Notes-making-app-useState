import React from "react";
import "./Pc.css";
import LeftSideGroup from "./LeftPanel/LeftSideGroup";
import RightPanel from "./RightPanel/RightPanel";
import { useState } from "react";
import PcModal from "../../micro components/PC Modal/PcModal";

const timeFrame = new Date();
const Pc = ({ notes, setNotes }) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Hours = timeFrame.getHours();
  const Minutes = timeFrame.getMinutes();
  const Date = `${timeFrame.getDate()} ${
    month[timeFrame.getMonth()]
  } ${timeFrame.getFullYear()}`;

  // const [NotesGroupClicked, setNotesGroupClicked] = useState(false);
  const [userSelected, setUserSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleNotesGroupClick = (note) => {
    // setNotesGroupClicked(true);
    setUserSelected(note);
  };

  const handleDataAppend = (textareaInput, id) => {
    // add the data

    let objToUpdate = notes.find((item) => item.id === id);
    let newArray = [
      ...objToUpdate.data,
      {
        time: `${Hours}:${Minutes}`,
        date: `${Date}`,
        data: textareaInput,
      },
    ];
    let updatedObject = { ...objToUpdate, data: newArray };

    let newNotes = notes.map((obj) => (obj.id === id ? updatedObject : obj));
    setNotes(newNotes);
    setUserSelected(updatedObject);
  };

  return (
    <div className="Pc">
      <>
        {showModal ? (
          <PcModal
            setNotes={setNotes}
            notes={notes}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : (
          ""
        )}
        <LeftSideGroup
          setShowModal={setShowModal}
          notes={notes}
          handleNotesGroupClick={handleNotesGroupClick}
        />
      </>
      <RightPanel
        userSelected={userSelected}
        handleDataAppend={handleDataAppend}
      />
    </div>
  );
};

export default Pc;
