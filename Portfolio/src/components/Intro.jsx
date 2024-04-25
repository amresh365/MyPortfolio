import React from "react";

const MainContent = () => {
  return (
    <div className="introcontainer ">
      <div className="container about bg-black ">
        <div className="image">
          <img src="/public/myphoto.jpg" className="myimg" />
        </div>
        <div className="intro text-light">
          <h1>Amresh Gupta</h1>
          <h3> I am a Passinate FullStack Devloper</h3>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
