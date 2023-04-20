import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  console.log("AddProperty component rendered"); // Added console log here

  const initialState = {
    fields: {
      title: "3 Bed House",
      type: "House",
      bedrooms: "3",
      bathrooms: "1",
      price: "500000",
      city: "Manchester",
      email: "someone@gmail.com",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    try {
      axios
        .post("http://localhost:4000/api/v1/PropertyListing", fields)
        .then(() =>
          setAlert({
            message: "Property Added Successfully",
            isSuccess: true,
          })
        )
        .catch((error) => {
          console.log(error);
          setAlert({
            message: "Server error. Please try again!",
            isSuccess: false,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <label htmlFor="title">
          Property Description
          <input
            id="title"
            name="title"
            placeholder="e.g. 2 bed flat in Manchester"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            placeholder="e.g. 2"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            placeholder="e.g. 1"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="e.g. 1000"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            placeholder="boaty@mcboatface.com"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button className="add-button" type="submit">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
