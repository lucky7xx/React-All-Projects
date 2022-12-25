import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>This is normal user dashboard !!!</h2>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Dashboard;
