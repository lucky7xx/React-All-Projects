import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Boat from "./Boat";
import Jbl from "./Jbl";

const Headphones = () => {
  return (
    <div>
      <h2>Welcome to headphones shop.</h2>
      <Link to={"/headphones/boat"}>Boat Headphones</Link>
      <br />
      <Link to={"/headphones/jbl"}>JBL Headphones</Link>
      <Routes>
        <Route path="/boat" element={<Boat />} />
        <Route path="/jbl" element={<Jbl />} />
      </Routes>
    </div>
  );
};

export default Headphones;
