import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/properties.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };

  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = () => {
  return (
    <div className="side-bar">
      <h2>Filter by City:</h2>
      <ul>
        <li>
          <Link to={buildQueryString("query", { city: "Manchester" })}>Manchester</Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>Liverpool</Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Sheffield" })}>Sheffield</Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
      </ul>
      <h2>Sort by Price:</h2>
      <ul>
        <li>
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
