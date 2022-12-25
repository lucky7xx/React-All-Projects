import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter } from "react-router-dom";
// import "./index.css";
// import MyComponent from "./Rating/Rating";
// import App from "./ApiFetch/App";
// import BatchUsage from "./ApiFetch/BatchUsage";
// import WeatherCard from "./WeatherApp/WeatherCard";
// import WeatherApp from "./WeatherApp/WeatherApp";
// import Rating from "./Rating/Rating";
import App from "./Router/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
