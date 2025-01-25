import React from "react";
import CollapsableDropDown from "./CollapsableDropDown";
import ActionButtons from "./ActionButtons";
import HeaderDropdown from "./HeaderDropdown";

function Controls() {

  return (
    <div className="controls-sidebar">
      <div className="controls-header">
        <h2>WITTUR</h2>
        <h3>CAR DESIGNER</h3>
      </div>

      <div className="controls-content">
        <div className="model-selector">
          <HeaderDropdown />
          <label>CAR MODEL</label>
          <select defaultValue="Vesta">
            <option value="Vesta">Vesta</option>
            {/* Add other models as needed */}
          </select>
        </div>



        <div className="control-sections">
        
          <CollapsableDropDown />
          <div className="controls-footer">
          <ActionButtons />
         
        </div>
        </div>


       
      </div>
    </div>
  );
}

export default Controls;
