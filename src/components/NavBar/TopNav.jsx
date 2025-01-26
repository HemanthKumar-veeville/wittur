import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

function TopNav() {
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <nav className="top-nav">
      <div className="nav-left">
        <div className="regional-section">
          <div className="dropdown" onMouseLeave={() => setIsRegionOpen(false)}>
            <button
              className="dropdown-toggle"
              onMouseEnter={() => setIsRegionOpen(true)}
            >
              Regional website
            </button>
            {isRegionOpen && (
              <ul className="dropdown-menu">
                <li>India</li>
                <li>B11</li>
                <li>B10.7</li>
              </ul>
            )}
          </div>

          <div className="lang-currency">
            <div className="dropdown" onMouseLeave={() => setIsLangOpen(false)}>
              <button
                className="dropdown-toggle"
                onMouseEnter={() => setIsLangOpen(true)}
              >
                EN
              </button>
              {isLangOpen && (
                <ul className="dropdown-menu">
                  <li>English</li>
                  <li>中文</li>
                  <li>Deutsch</li>
                </ul>
              )}
            </div>
            <span className="divider">|</span>
            <button className="currency-btn">IND ▾</button>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <Link to="/configurator">Configurer</Link>
        <Link to="/news">News</Link>
        <Link to="/career">Career</Link>
        <Link to="/ecs">ECS</Link>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
