import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../NavBar/TopNav";
import BottomNav from "../NavBar/BottomNav";

function MainLayout() {
  return (
    <div className="app-container">
      <header className="app-header">
        <TopNav />
        <BottomNav />
      </header>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
