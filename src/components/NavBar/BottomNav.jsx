import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-navbar">
      <div className="bottom-nav-container">
        <NavLink to="/who-we-are">WHO WE ARE</NavLink>
        <NavLink to="/supplier-world">SUPPLIER WORLD</NavLink>
        <NavLink to="/buyer-world">BUYER WORLD</NavLink>
        <NavLink to="/customer-portal">CUSTOMER PORTAL</NavLink>
      </div>
    </nav>
  );
}

export default BottomNav;
