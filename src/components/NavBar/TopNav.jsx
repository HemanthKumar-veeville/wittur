import React from "react";
import { Link } from "react-router-dom";
import WitturLogo from "../../assets/Wittur Logo.svg";

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <Link to="/">
          <img src={WitturLogo} alt="Wittur" className="logo" />
        </Link>
        <div className="region-selector">
          <select defaultValue="India">
            <option value="India">India</option>
            {/* Add other regions */}
          </select>
          <span>EN</span>
          <span className="currency">IND ▾</span>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/configurator">Configurator</Link>
        <Link to="/news">News</Link>
        <Link to="/career">Career</Link>
        <div className="search-box">
          <input type="search" placeholder="Search..." />
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
