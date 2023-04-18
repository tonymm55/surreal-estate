import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  it("renders the title prop", () => {
    const title = "2 bedroom flat in central Leeds";
    const { getByText } = render(<PropertyCard title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders the city prop", () => {
    const city = "Leeds";
    const { getByText } = render(<PropertyCard title={city} />);

    expect(getByText(city)).toBeInTheDocument();
  });
  it("renders the type prop", () => {
    const type = "flat";
    const { getByText } = render(<PropertyCard title={type} />);

    expect(getByText(type)).toBeInTheDocument();
  });
});
