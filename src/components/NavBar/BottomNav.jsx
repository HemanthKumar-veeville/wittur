import React from "react";
import { NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="nav-sections">
        <NavLink to="/who-we-are">WHO WE ARE</NavLink>
        <NavLink to="/supplier-world">SUPPLIER WORLD</NavLink>
        <NavLink to="/buyer-world">BUYER WORLD</NavLink>
        <NavLink to="/customer-portal">CUSTOMER PORTAL</NavLink>
      </div>
    </nav>
  );
}

export default BottomNav;
