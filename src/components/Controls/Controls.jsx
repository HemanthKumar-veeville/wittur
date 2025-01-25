import React from "react";

function Controls() {
  return (
    <div className="controls-sidebar">
      <div className="controls-header">
        <h2>WITTUR</h2>
        <h3>CAR DESIGNER</h3>
      </div>

      <div className="controls-content">
        <div className="model-selector">
          <label>CAR MODEL</label>
          <select defaultValue="Vesta">
            <option value="Vesta">Vesta</option>
            {/* Add other models as needed */}
          </select>
        </div>

        <div className="control-sections">
          <button className="control-section">DIMENSIONS</button>
          <button className="control-section">ENTRANCES</button>
          <button className="control-section">CAR WALL</button>
          <button className="control-section">CEILING</button>
          <button className="control-section">FLOOR</button>
          <button className="control-section">MIRROR</button>
          <button className="control-section">HANDRAILS</button>
          <button className="control-section">C.O.P</button>
        </div>

        <div className="controls-footer">
          <button className="action-button snapshot">SNAPSHOT</button>
          <button className="action-button done">DONE / GET INFO</button>
        </div>
      </div>
    </div>
  );
}

export default Controls;
