import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/properties.css";

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || `{}`),
      ...valueObj,
    }),
  };

  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = () => {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString(
      "query",
      {
        title: { $regex: query },
      },
      search
    );
    navigate(newQueryString);
  };

  return (
    <div className="side-bar">
      <h2>Filter by City:</h2>
      <ul>
        <li>
          <Link to={buildQueryString("query", { city: "Manchester" }, search)}>
            Manchester
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Liverpool" }, search)}>
            Liverpool
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Sheffield" }, search)}>
            Sheffield
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Leeds" }, search)}>
            Leeds
          </Link>
        </li>
      </ul>
      <h2>Sort by Price:</h2>
      <ul>
        <li>
          <Link to={buildQueryString("sort", { price: 1 }, search)}>
            Price Ascending
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("sort", { price: -1 }, search)}>
            Price Descending
          </Link>
        </li>
      </ul>
      <h2>Search:</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SideBar;
