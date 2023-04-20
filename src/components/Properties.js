import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";
// import Alert from "./Alert";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        const { data } = response;
        setProperties(data);
      })
      .catch(() => {
        setAlert({ message: "Error getting properties." });
      });
  }, []);

  return (
    <div className="properties">
      {alert.message && (
        <div className="alert">
          <p>{alert.message}</p>
        </div>
      )}
      {properties.map((property) => (
        <div key={property._id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
      ;
    </div>
  );
};

export default Properties;
