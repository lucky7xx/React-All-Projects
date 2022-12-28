import React from "react";
import { Link, Outlet } from "react-router-dom";

const Headphones = () => {
  return (
    <div>
      <h2>Welcome to headphones shop.</h2>
      <Link to={"/headphones/boat"}>Boat Headphones</Link>
      <br />
      <Link to={"/headphones/jbl"}>JBL Headphones</Link>
      <Outlet />
      {/* <Routes>
        <Route path="/boat" element={<Boat />} />
        <Route path="/jbl" element={<Jbl />} />
      </Routes> */}
    </div>
  );
};

export default Headphones;
