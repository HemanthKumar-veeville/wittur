import React from "react";
import CanvasContainer from "../canvas_component/Canvas";
import Controls from "../components/Controls/Controls";
import "./Configurator.css";
function Configurator() {
  return (
    <div className="configurator-layout">
      <div className="canvas-section">
        <CanvasContainer />
      </div>
      <div className="controls-section">
        <Controls />
      </div>
    </div>
  );
}

export default Configurator;
