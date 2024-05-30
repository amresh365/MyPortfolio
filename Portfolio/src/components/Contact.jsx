import React from "react";

export const Contact = () => {
  return (
    <div className="text-light container">
      <div className="introd text-light">
        <button
          class="btn btn-dark d-flex align-items-center justify-contant-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <h5 className="connectUs">Connect with us</h5>
          <i class="fa-solid fa-handshake-simple"></i>
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <div class="collapse collapse-horizontal " id="collapseWidthExample">
          <div class="card card-body text-dark bg-dark collaps my-4">
            <ul className="contactlist text-dark">
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
        </div>
      </div>
      <div className="contact ">
        <div className="container d-flex justify-content-center">
          <h3 className="headings">Contact</h3>
        </div>
        <ul className="contactlist">
          <li>
            <a href="https://wa.me/919598920855" text="urlencodedtext">
              <i class="fa-brands fa-square-whatsapp logo"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/AmreshG365">
              <i class="fa-brands fa-telegram logo"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
