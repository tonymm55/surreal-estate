import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../images/surreallogo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img className="nav-logo" src={logo} alt="Logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="add-property">
            Add Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
