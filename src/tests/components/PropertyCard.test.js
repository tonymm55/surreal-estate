import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  it("renders the title prop", () => {
    const title = "2 bedroom flat in central Leeds";
    const { getByText } = render(<PropertyCard title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders the type and city prop", () => {
    const city = "Leeds";
    const type = "Flat";
    const { getByText } = render(<PropertyCard type={type} city={city} />);

    expect(getByText(`${type}-${city}`)).toBeInTheDocument();
  });

  it("renders the bathrooms prop", () => {
    const bathrooms = "bathrooms";
    const { getByText } = render(<PropertyCard bathrooms={bathrooms} />);

    expect(getByText(bathrooms)).toBeInTheDocument();
  });

  it("renders the bedrooms prop", () => {
    const bedrooms = "bedrooms";
    const { getByText } = render(<PropertyCard bedrooms={bedrooms} />);

    expect(getByText(bedrooms)).toBeInTheDocument();
  });

  it("renders the price prop", () => {
    const price = 500;
    const { getByText } = render(<PropertyCard price={price} />);

    expect(getByText(`Price: £${price}`)).toBeInTheDocument();
  });

  it("renders the email prop", () => {
    const email = "john@example.com";
    const { getByText } = render(<PropertyCard email={email} />);

    expect(getByText(email)).toBeInTheDocument();
  });
});
