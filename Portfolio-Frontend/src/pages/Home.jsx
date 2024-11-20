import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Frontend from "../components/Projects/Frontend";
import Full_Stack from "../components/Projects/Full-Stack";
import Mobile from "../components/Projects/Mobile";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>

      <Hero/>
      <Frontend/>
      <Full_Stack/>
      <Mobile/>
      <Footer/>
     
    </>
  );
};

export default App;
