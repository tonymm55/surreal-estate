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
      <p>{bedrooms}</p>
      <p>{bathrooms}</p>
      <p>{`Price: £${price}`}</p>
      <a href="mailto:someone@example.com">
        <button type="submit">{email}</button>
      </a>
    </div>
  );
};

export default PropertyCard;
