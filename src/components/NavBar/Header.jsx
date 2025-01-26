import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isRegionalOpen, setIsRegionalOpen] = useState(false);
  const [isConfigurerOpen, setIsConfigurerOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">XA</h1>
        <div className="dropdown" onMouseLeave={() => setIsRegionalOpen(false)}>
          <button
            className="dropdown-toggle"
            onMouseEnter={() => setIsRegionalOpen(true)}
          >
            Regional website
          </button>
          {isRegionalOpen && (
            <ul className="dropdown-menu">
              <li>B11</li>
              <li>B10.7</li>
            </ul>
          )}
        </div>
      </div>

      <div className="header-right">
        <div
          className="dropdown"
          onMouseLeave={() => setIsConfigurerOpen(false)}
        >
          <button
            className="dropdown-toggle"
            onMouseEnter={() => setIsConfigurerOpen(true)}
          >
            Configurer
          </button>
          {isConfigurerOpen && (
            <ul className="dropdown-menu">
              <li>News 1</li>
              <li>Career</li>
              <li>Workforce</li>
              <li>VHD VR_ARE</li>
              <li>SUPPLIER WORLD</li>
              <li>BUYER WORLD</li>
              <li>CASTOVER PORTAL</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
