import React from "react";
import "./Controlls.css"
import { FaCamera, FaCheck } from "react-icons/fa";

const ActionButtons = () => {
  return (
    <div className="action-buttons-container">
      {/* Snapshot Button */}
      <div className="key-button">
        <button className="action-button snapshot">
          <span className="button-text">SNAPSHOT</span>
        </button>
        <div className="icon-circle snapshot-icon">
          <FaCamera className="button-icon" />
        </div>
      </div>

      {/* Done | GET INFO Button */}
      <div className="key-button">
        <button className="action-button done">
          <span className="button-text">DONE | GET INFO</span>
        </button>
        <div className="icon-circle done-icon">
          <FaCheck className="button-icon" />
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
