import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
