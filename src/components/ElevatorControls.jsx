import React from "react";
import "./ElevatorControls.css";

const ElevatorControls = ({
  onOpenDoor,
  onCloseDoor,
  isDoorOpen,
  onTakeSnapshot,
}) => {
  const handleDoorToggle = () => {
    if (isDoorOpen) {
      onCloseDoor();
    } else {
      onOpenDoor();
    }
  };

  return (
    <div className="elevator-controls">
      <button className="elevator-btn" onClick={handleDoorToggle}>
        {isDoorOpen ? "Close Door" : "Open Door"}
      </button>
      <button className="elevator-btn snapshot-btn" onClick={onTakeSnapshot}>
        Take Snapshot
      </button>
    </div>
  );
};

export default ElevatorControls;
