import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("Alert Component", () => {
  test("displays an error message", () => {
    const errorMessage = "This is an error message";
    const { getByText } = render(<Alert message={errorMessage} type="error" />);
    expect(getByText(/This is an error message/).textContent).toBe(
      errorMessage
    );
  });

  xit("displays a success message", () => {
    const successMessage = "This is a success message";
    const { getByText } = render(
      <Alert message={successMessage} type="success" />
    );
    expect(getByText(successMessage)).toBeInTheDocument();
  });

  xit("displays a warning message", () => {
    const warningMessage = "This is a warning message";
    const { getByText } = render(
      <Alert message={warningMessage} type="warning" />
    );
    expect(getByText(warningMessage)).toBeInTheDocument();
  });
});
