import React, { useState } from "react";
import "./PcModal.css";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import { storeInLocalStorage } from "../../controllers/storeInLocalStorage";

const PcModal = ({ setNotes, notes, setShowModal, showModal }) => {
  const [modalInput, setModalInput] = useState("");
  const [color, setColor] = useState("");

  const handleCreateButton = (input, color) => {
    if (!input || !color) {
      return;
    }

    let newNoteGroup = {
      id: nanoid(),
      name: input,
      color: color,
      data: [],
    };

    let newNote = [...notes, newNoteGroup];
    setNotes(newNote);
    setShowModal(false);
    storeInLocalStorage(newNote);
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => setShowModal(false)}
        className="PC-Modal-BlankArea"
      ></div>
      <div className="PC-ModalContainer">
        <div className="PC-ContentContainer">
          <div className="PC-ModalContainer-Heading">
            Create New Notes group
          </div>
          <div className="PC-ModalContainer-GroupNameContainer">
            <div className="PC-ModalContainer-GroupNameContainer-Name">
              Group Name
            </div>
            <div className="PC-ModalContainer-GroupNameContainer-Input">
              <input
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
                type="text"
                className="PC-ModalContainer-GroupNameContainer-Input-Input"
              />
            </div>
          </div>
          {/*  */}
          <div className="PC-ModalContainer-ColorChoice">
            <div className="PC-ModalContainer-ColorChoice-Name">
              Choose colour
            </div>
            <div className="PC-ModalContainer-ColorChoice-Color">
              <div
                onClick={() => setColor("purple")}
                className="PC-color purple"
              ></div>
              <div
                onClick={() => setColor("pink")}
                className="PC-color pink"
              ></div>
              <div
                onClick={() => setColor("skyblue")}
                className="PC-color skyblue"
              ></div>
              <div
                onClick={() => setColor("orange")}
                className="PC-color orange"
              ></div>
              <div
                onClick={() => setColor("blue")}
                className="PC-color blue"
              ></div>
              <div
                onClick={() => setColor("lightblue")}
                className="PC-color lightblue"
              ></div>
            </div>
          </div>

          <div className="PC-CreateButtonContainer">
            <button
              onClick={() => handleCreateButton(modalInput, color)}
              className="PC-CreateButtonContainer-Button"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>,
    document.querySelector("#modal")
  );
};

export default PcModal;
