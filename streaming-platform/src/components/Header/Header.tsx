import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="user-profile">
        <span className="notifications">🔔</span>
        <span className="profile-icon">👤</span>
      </div>
    </header>
  );
};

export default Header;
