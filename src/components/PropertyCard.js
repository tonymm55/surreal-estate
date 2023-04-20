import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const bathElement = <FontAwesomeIcon icon={faBath} />;
const bedElement = <FontAwesomeIcon icon={faBed} />;
const envelopeElement = <FontAwesomeIcon icon={faEnvelope} />;

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
      <div className="card-logo">
        <img src="/public/25694.png" alt="logo" />
      </div>
      <h3>{title}</h3>
      <p>
        {type}-{city}
      </p>
      <p>
        {bathElement} {bathrooms}
      </p>
      <p>
        {bedElement} {bedrooms}
      </p>
      <p>{`Price: £${price}`}</p>
      <a href="mailto:someone@example.com">
        <button className="email-button" type="submit">
          {envelopeElement} {email}
        </button>
      </a>
    </div>
  );
};

export default PropertyCard;
