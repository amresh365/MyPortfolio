import React from "react";

const Header = () => {
  const aboutScrol = () => {
    window.scroll({
      top: "400",
      behavior: "smooth",
    });
  };
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-black">
        <ul class="nav justify-content-center ">
          <li class="nav-item">
            <div className="btn btn-secondary mx-2">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </div>
          </li>
          <li class="nav-item">
            <div className="btn btn-secondary mx-2" onClick={aboutScrol}>
              <a class="nav-link text-light" href="#">
                About
              </a>
            </div>
          </li>
          <li class="nav-item ">
            <div className="btn btn-secondary mx-2">
              <a class="nav-link text-light " href="#">
                Skills
              </a>
            </div>
          </li>
          <li class="nav-item ">
            <div className="btn btn-secondary mx-2">
              <a class="nav-link  color-light text-light" aria-disabled="false">
                Contact
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
