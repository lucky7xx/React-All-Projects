import React from "react";
import { Link, Outlet } from "react-router-dom";

const Mobiles = () => {
  return (
    <div>
      <h2>Welcome to mobile shop.</h2>
      <Link to={"/mobiles/apple"}>Apple Phones</Link>
      <br />
      <Link to={"/mobiles/samsung"}>Samsung Phones</Link>
      <Outlet />
      {/* <Routes>
        <Route path="/apple" element={<Apple />} />
        <Route path="/samsung" element={<Samsung />} />
      </Routes> */}
    </div>
  );
};

export default Mobiles;
