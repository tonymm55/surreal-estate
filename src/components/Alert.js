import React from "react";
import "../styles/alert.css";

const Alert = ({ message, success }) => {
  if (!message) return null;
  // used the className below for CSS selectors
  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Alert;
