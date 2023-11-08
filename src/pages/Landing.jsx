import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default Landing;
