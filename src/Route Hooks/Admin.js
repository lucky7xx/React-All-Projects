import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h2>Welcome to admin dashboard!!!</h2>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Admin;
