import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h2>Surreal Estate</h2>
      </header>
      <Routes>
        {/* <Route path="/" element={} />
        <Route path="/" element={} /> */}
      </Routes>
    </div>
  );
};

export default App;
