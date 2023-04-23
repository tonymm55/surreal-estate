import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import surreallogocard from "../images/surreallogocard.png";

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
        <img
          className="property-card-logo"
          src={surreallogocard}
          alt="surreal-estate-logo"
        />
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
      <a href={`mailto:${email}`}>
        <button className="email-button" type="submit">
          {envelopeElement} {email}
        </button>
      </a>
    </div>
  );
};

export default PropertyCard;
