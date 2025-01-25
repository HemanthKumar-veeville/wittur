import React from "react";
import CollapsableDropDown from "./CollapsableDropDown";
import ActionButtons from "./ActionButtons";
import HeaderDropdown from "./HeaderDropdown";
import TabButtons from "./TabButtons";
import "./Controlls.css"; // Add this file for styles

function Controls() {
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
          <CollapsableDropDown />
        </div>

        {/* Footer Action Buttons */}
        <div className="controls-footer">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default Controls;
