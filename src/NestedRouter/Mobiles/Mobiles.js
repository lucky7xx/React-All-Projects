import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Apple from "./Apple";
import Samsung from "./Samsung";

const Mobiles = () => {
  return (
    <div>
      <h2>Welcome to mobile shop.</h2>
      <Link to={"/mobiles/apple"}>Apple Phones</Link>
      <br />
      <Link to={"/mobiles/samsung"}>Samsung Phones</Link>
      <Routes>
        <Route path="/apple" element={<Apple />} />
        <Route path="/samsung" element={<Samsung />} />
      </Routes>
    </div>
  );
};

export default Mobiles;
