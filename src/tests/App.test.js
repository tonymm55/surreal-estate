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
    const navBar = screen.getByRole("navigation");
    const addPropertyLink = screen.getByText(/Add Property/i);
    const viewPropertiesLink = screen.getByText(/View Properties/i);

    expect(navBar).toBeInTheDocument();
    expect(addPropertyLink).toBeInTheDocument();
    expect(viewPropertiesLink).toBeInTheDocument();
  });
});
