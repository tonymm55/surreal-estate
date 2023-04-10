import React from "react";
import "../styles/navbar.css";
import logo from "../images/surreallogo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img className="nav-logo" src={logo} alt="Logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href=" ">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href=" ">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
