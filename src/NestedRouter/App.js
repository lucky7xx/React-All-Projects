import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Apple from "./Mobiles/Apple";
import Boat from "./Mobiles/Headphones/Boat";
import Headphones from "./Mobiles/Headphones/Headphones";
import Jbl from "./Mobiles/Headphones/Jbl";
import Mobiles from "./Mobiles/Mobiles";
import Samsung from "./Mobiles/Samsung";

const App = () => {
  return (
    <div>
      <h1>Menu</h1>
      <Link to={"/"}>Home</Link> <br />
      <h2>
        <Link to={"/mobiles"} style={{ textDecoration: "none" }}>
          Mobiles
        </Link>
      </h2>
      <h2>
        <Link to={"/headphones"} style={{ textDecoration: "none" }}>
          Headphones
        </Link>
      </h2>
      <Routes>
        <Route path="mobiles" element={<Mobiles />}>
          <Route path="apple" element={<Apple />} />
          <Route path="samsung" element={<Samsung />} />
        </Route>
        <Route path="/headphones" element={<Headphones />}>
          <Route path="boat" element={<Boat />} />
          <Route path="jbl" element={<Jbl />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
