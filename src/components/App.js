/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="add-property" element={AddProperty} />
      </Routes>
      <header className="app-header">
        <h2>Surreal Estate</h2>
      </header>
    </div>
  );
};

export default App;
