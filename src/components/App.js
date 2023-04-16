/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import "../styles/add-property.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <AddProperty />
      <Properties />
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="add-property" element={AddProperty} />
      </Routes>
      {/* <header className="app-header">
        <h2>Header 2 Placeholder</h2>
      </header> */}
    </div>
  );
};

export default App;
