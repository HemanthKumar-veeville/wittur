import React, { useState } from "react";
import "./Controlls.css";

const CollapsableDropDown = () => {
  // State to manage the visibility of dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle the dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Dropdown labels and content
  const dropdowns = [
    { label: "Dimensions", content: ["Option 1", "Option 2", "Option 3"] },
    { label: "Entrances", content: ["Option A", "Option B", "Option C"] },
    { label: "Car Wall", content: ["Choice 1", "Choice 2", "Choice 3"] },
    // { label: "Ceiling", content: ["Option X", "Option Y", "Option Z"] },
    // { label: "Floor", content: ["Option M", "Option N", "Option O"] },
    // { label: "Mirror", content: ["Option AA", "Option BB", "Option CC"] },
    // { label: "Handrails", content: ["Option Alpha", "Option Beta", "Option Gamma"] },
    // { label: "C.O.P", content: ["Option 101", "Option 102", "Option 103"] },
  ];

  return (
    <div className="collapsable-dropdown-container">
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="dropdown-wrapper">
          <button
            className="dropdown-button"
            onClick={() => toggleDropdown(index)}
          >
            <span className="button-label">{dropdown.label}</span>
            <span className="dropdown-icon">
              {openDropdown === index ? "▲" : "▼"}
            </span>
          </button>
          {openDropdown === index && (
            <div className="dropdown-content">
              {dropdown.content.map((item, i) => (
                <div key={i} className="dropdown-item">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollapsableDropDown;
