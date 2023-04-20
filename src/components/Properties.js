import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const properties = [
    {
      title: "2 bedroom flat in central Leeds",
      type: "Flat",
      bathrooms: 2,
      bedrooms: 2,
      price: 10000,
      city: "Leeds",
      email: "tony.911@gmail.com",
    },
    // more properties
  ];

  return (
    <div className="properties">
      {properties.map((property) => (
        <PropertyCard key={property.title} {...property} />
      ))}
    </div>
  );
};

export default Properties;
