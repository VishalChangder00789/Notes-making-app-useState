import React, { useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

const Modal = ({ setNotes, notes, setShowModal, showModal }) => {
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
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => setShowModal(false)}
        className="Modal-BlankArea"
      ></div>
      <div className="ModalContainer">
        <div className="ContentContainer">
          <div className="ModalContainer-Heading">Create New Notes group</div>
          <div className="ModalContainer-GroupNameContainer">
            <div className="ModalContainer-GroupNameContainer-Name">
              Group Name
            </div>
            <div className="ModalContainer-GroupNameContainer-Input">
              <input
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
                type="text"
                className="ModalContainer-GroupNameContainer-Input-Input"
              />
            </div>
          </div>
          {/*  */}
          <div className="ModalContainer-ColorChoice">
            <div className="ModalContainer-ColorChoice-Name">Choose colour</div>
            <div className="ModalContainer-ColorChoice-Color">
              <div
                onClick={() => setColor("purple")}
                className="color purple"
              ></div>
              <div
                onClick={() => setColor("pink")}
                className="color pink"
              ></div>
              <div
                onClick={() => setColor("skyblue")}
                className="color skyblue"
              ></div>
              <div
                onClick={() => setColor("orange")}
                className="color orange"
              ></div>
              <div
                onClick={() => setColor("blue")}
                className="color blue"
              ></div>
              <div
                onClick={() => setColor("lightblue")}
                className="color lightblue"
              ></div>
            </div>
          </div>

          <div className="CreateButtonContainer">
            <button
              onClick={() => handleCreateButton(modalInput, color)}
              className="CreateButtonContainer-Button"
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

export default Modal;
