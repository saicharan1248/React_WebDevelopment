import React from "react";
import "./NavigationMenu.css";
const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <ul>
        <li>🏠 Home</li>
        <li>🔥 Trending</li>
        <li>🔔 Subscriptions</li>
        <li>👤 Profile</li>
      </ul>
      <div className="user-menu">
        <button>Settings</button>
        <button>History</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default NavigationMenu;
