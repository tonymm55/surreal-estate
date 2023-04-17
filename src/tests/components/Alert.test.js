import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("Alert Component", () => {
  it("displays an error message", () => {
    const errorMessage = "This is an error message";
    const { getByText } = render(<Alert message={errorMessage} type="error" />); // message & type prop
    expect(getByText(/This is an error message/).textContent).toBe(
      errorMessage
    );
  });

  it("displays a success message", () => {
    const successMessage = "This is a success message";
    const { getByText } = render(
      <Alert message={successMessage} type="success" />
    ); // message & type prop
    expect(getByText(/This is a success message/).textContent).toBe(
      successMessage
    );
  });

  it("displays no message", () => {
    const warningMessage = "No message!";
    const { getByText } = render(
      <Alert message={warningMessage} type="warning" />
    ); // message & type prop
    expect(getByText(/No message!/).textContent).toBe(warningMessage);
  });
});