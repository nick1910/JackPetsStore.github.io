import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Products from "./routes/SherlockRescue";
import Dogs from "./routes/Adoption";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/DogsData" element={<Dogs />} />
      </Routes>
    </div>
  );
}

export default App;

