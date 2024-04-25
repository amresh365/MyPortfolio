import React from "react";
import Header from "../components/Header";
import Foter from "../components/Foter";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
const HomScreen = () => {
  return (
    <div className="bg-dark main">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Foter />
    </div>
  );
};

export default HomScreen;
