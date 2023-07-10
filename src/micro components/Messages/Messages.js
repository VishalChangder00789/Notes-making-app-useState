import React from "react";
import "./Messages.css";

const Messages = ({ date, time, data }) => {
  return (
    <div className="MessageContainer">
      <div className="dateandTimeContainer">
        <div className="timeContainer">{time}</div>
        <div className="dateContainer">{date}</div>
      </div>
      <div className="data">{data}</div>
    </div>
  );
};

export default Messages;
