import React from "react";
import pdf from "../pdf/Amresh'sResume.pdf";
const Home = () => {
  return (
    <div className="introcontainer ">
      {" "}
      <div className="intro text-light">
        <h3 className="intro-animate"> I am a Passinate Frontend Devloper</h3>
        <a href="pdf" download="resume.pdf" className="download">
          Download Resume
        </a>
      </div>
      <div className="image">
        <img src="/public/myphoto2.jpg" className="myimg" />
      </div>
    </div>
  );
};

export default Home;
