import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  return (
    <div className="add-property">
      <form>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
