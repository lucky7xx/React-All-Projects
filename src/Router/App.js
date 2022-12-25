import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

const App = () => {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* <Link to={"/"}>Home</Link> <br />
      <Link to={"about"}>About</Link> <br />
      <Link to={"contact"}>Contact</Link> <br /> */}
    </div>
  );
};

export default App;
