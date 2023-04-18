import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("Alert Component", () => {
  it("displays an error message", () => {
    const errorMessage = "This is an error message";
    const { getByText, asFragment } = render(<Alert message={errorMessage} type="error" />); // message & type prop
    expect(getByText(/This is an error message/).textContent).toBe(errorMessage);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a success message", () => {
    const successMessage = "This is a success message";
    const { getByText, asFragment } = render(
      <Alert message={successMessage} type="success" />
    ); // message & type prop
    expect(getByText(/This is a success message/).textContent).toBe(
      successMessage
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays warning message", () => {
    const warningMessage = "Warning, No message!";
    const { getByText, asFragment } = render(
      <Alert message={warningMessage} type="warning" />
    ); // message & type prop
    expect(getByText(/No message!/).textContent).toBe(warningMessage);
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
