import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";
import "../styles/properties.css";
// import Alert from "./Alert";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const [city, setCity] = useState("");
  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({ message: "Error getting properties." });
      });
  }, [search]);

  const handleFilterByCity = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div className="wrapper">
      <div className="sidebar-filter">
        <SideBar handleFilterByCity={handleFilterByCity} />
      </div>
      <div className="properties">
        {alert.message && (
          <div className="alert">
            <p>{alert.message}</p>
          </div>
        )}
        {properties
          .filter((propertyData) => city === "" || propertyData.city === city)
          .map((propertyData) => (
            <div key={propertyData._id} className="item">
              <PropertyCard {...propertyData} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Properties;
