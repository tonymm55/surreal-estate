import React from "react";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <p>
        {type}-{city}
      </p>
      <p>{bathrooms}</p>
      <p>{bedrooms}</p>
      <p>{`Price: £${price}`}</p>
      <button type="submit">{email}</button>
    </div>
  );
};

export default PropertyCard;
