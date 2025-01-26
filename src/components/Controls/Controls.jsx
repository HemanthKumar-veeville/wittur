import React from "react";
import CollapsableDropDown from "./CollapsableDropDown";
import ActionButtons from "./ActionButtons";
import HeaderDropdown from "./HeaderDropdown";
import TabButtons from "./TabButtons";
import "./Controls.css"; // Fixed typo in import
import { floorTextures } from "../../constants/floorTextures";

function Controls({
  onTakeSnapshot,
  onFloorTextureChange,
  onCeilingTextureChange,
}) {
  return (
    <div className="controls-sidebar">
      {/* Header Section */}
      <div className="controls-header">
        <h2 className="brand-title">WITTUR</h2>
        <h3 className="section-title">CAR DESIGNER</h3>
      </div>

      {/* Tabs and Dropdown */}
      <div className="controls-content">
        <div className="model-selector">
          <TabButtons />
          <HeaderDropdown />
        </div>

        {/* Collapsible Dropdown Sections */}
        <div className="control-sections">
          <CollapsableDropDown
            onFloorTextureChange={onFloorTextureChange}
            onCeilingTextureChange={onCeilingTextureChange}
          />
        </div>

        {/* Footer Action Buttons */}
        <div className="controls-footer">
          <ActionButtons onTakeSnapshot={onTakeSnapshot} />
        </div>
      </div>
    </div>
  );
}

export default Controls;
