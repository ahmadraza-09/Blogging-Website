import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Categories</li>
        <li>Contact Us</li>
      </ul>
      <div className="search-side">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
