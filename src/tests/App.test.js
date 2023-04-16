import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import App from "../components/App";

describe("App", () => {
  it("renders page content", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerElement = screen.getByText(/Surreal Estate/i);
    const addPropertyLink = screen.getByText(/Add Property/i);
    const viewPropertiesLink = screen.getByText(/View Properties/i);

    expect(headerElement).toBeInTheDocument();
    expect(addPropertyLink).toBeInTheDocument();
    expect(viewPropertiesLink).toBeInTheDocument();
  });
});
