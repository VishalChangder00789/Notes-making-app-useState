import "./RightEmptyPanel.css";
import React from "react";
import lockImage from "../../../assets/lock.png";
import topImage from "../../../assets/topImage.png";

const RightEmptyPanel = () => {
  return (
    <div className="EMPTY-RightPanelPage1-Container">
      <div className="EMPTY-RightPanelPage1-Container-TopContent">
        <img
          className="EMPTY-RightPanelPage1-Container-TopContent-image"
          src={topImage}
        />
        <div className="EMPTY-RightPanelPage1-Container-TopContent-BigHeading">
          Pocket Notes
        </div>

        <div className="EMPTY-RightPanelPage1-Container-TopContent-smallinfo">
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </div>
      </div>
      {/*  */}
      <div className="EMPTY-RightPanelPage1-Container-BottomContent">
        <img
          className="EMPTY-RightPanelPage1-Container-BottomContent-image"
          src={lockImage}
        />
        <span className="EMPTY-RightPanelPage1-Container-BottomContent-span">
          end-to-end encrypted
        </span>
      </div>
    </div>
  );
};

export default RightEmptyPanel;
