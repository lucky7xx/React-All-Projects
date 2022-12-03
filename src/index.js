import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./ApiFetch/App";
import BatchUsage from "./ApiFetch/BatchUsage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <BatchUsage />
  </React.StrictMode>
);
