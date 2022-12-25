import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello this is Home page.</h1>
      <Link to={"about"}>Click to go to about page.</Link> <br />
      <Link to={"contact"}>Click to go to contact page.</Link>
    </div>
  );
}

export default Home;
