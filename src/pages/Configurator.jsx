import React from "react";
import CanvasContainer from "../canvas_component/Canvas";
import Controls from "../components/Controls/Controls";

function Configurator() {
  return (
    <div className="configurator-layout">
      <div className="canvas-section">
        <CanvasContainer />
      </div>
      <Controls />
    </div>
  );
}

export default Configurator;
