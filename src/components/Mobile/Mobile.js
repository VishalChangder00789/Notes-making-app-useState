import React, { useState } from "react";
import "./Mobile.css";
import LeftPanelGroup from "./LeftPanelGroup/LeftPanelGroup";
import ShowData from "../Mobile/ShowData/ShowData";
import "./color.css";
import Modal from "../../micro components/Modal/Modal";
import { storeInLocalStorage } from "../../controllers/storeInLocalStorage";

const timeFrame = new Date();
const Mobile = ({ notes, setNotes }) => {
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

  const [NotesGroupClicked, setNotesGroupClicked] = useState(false);
  const [userSelected, setUserSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleNotesGroupClick = (note) => {
    setNotesGroupClicked(true);
    setUserSelected(note);
  };

  // Important Function
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

    /// Added to local storage
    storeInLocalStorage(newNotes);
  };

  return (
    <div className="Mobile">
      {!NotesGroupClicked ? (
        <>
          <LeftPanelGroup
            setShowModal={setShowModal}
            notes={notes}
            handleNotesGroupClick={handleNotesGroupClick}
          />
          {showModal ? (
            <div className="  ">
              <Modal
                setNotes={setNotes}
                notes={notes}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <ShowData
          userSelected={userSelected}
          setNotesGroupClicked={setNotesGroupClicked}
          NotesGroupClicked={NotesGroupClicked}
          handleDataAppend={handleDataAppend}
        />
      )}
    </div>
  );
};

export default Mobile;
