import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home/Home";
import NotFound from "./NotFound";
import Contact from "../Pages/contact/Contact";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;