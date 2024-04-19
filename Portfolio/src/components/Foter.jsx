import React from "react";

const Foter = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <div className="container-fluid bg-dark my-3">
      <foter className="footer text-light">
        <ul className="ul ">
          <li>ContectUs-amreshgupta365@gmail.com</li>
        </ul>
        <ul className="ul">
          <li>&copy; {date}</li>
        </ul>
      </foter>
    </div>
  );
};

export default Foter;
