import React from "react";

export const Contact = () => {
  return (
    <div className="text-light container">
      <div className="introd text-light">
        <h3>Connect with us</h3>
        <i class="fa-solid fa-handshake-simple"></i>
      </div>

      <ul className="contactlist">
        <li>
          <a href="https://www.linkedin.com/in/amresh-gupta-737154239">
            <i class="fa-brands fa-linkedin logo"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/amresh365">
            <i class="fa-brands fa-github logo"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AmreshG5656">
            <i class="fa-brands fa-square-x-twitter logo"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/amreshg_365/?hl=en">
            <i class="fa-brands fa-instagram logo"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
