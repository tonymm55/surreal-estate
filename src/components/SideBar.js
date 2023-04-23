import React from "react";
import { Link } from "react-router-dom";
import "../styles/properties.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <h3>Filter by City:</h3>
      <ul>
        <li>
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li>
          <Link to={`/?query={"city":"Liverpool"}`}>Liverpool</Link>
        </li>
        <li>
          <Link to={`/?query={"city":"Sheffield"}`}>Sheffield</Link>
        </li>
        <li>
          <Link to={`/?query={"city":"Leeds"}`}>Leeds</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
