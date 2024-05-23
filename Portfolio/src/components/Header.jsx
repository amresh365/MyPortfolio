import React from "react";

const Header = () => {
  const aboutScrol = () => {
    window.scroll({
      top: "400",
      behavior: "smooth",
    });
  };

  const SkillScrol = () => {
    window.scroll({
      top: "970",
      behavior: "smooth",
    });
  };

  const contactScrol = () => {
    window.scroll({
      top: "970",
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-black">
        <ul class="nav justify-content-center ">
          <li class="nav-item">
            <div className="mx-2">
              <a class="nav-link text-light" aria-current="page" href="#">
                Home
              </a>
            </div>
          </li>
          <li class="nav-item">
            <div className=" mx-2" onClick={aboutScrol}>
              <a class="nav-link text-light" href="#">
                About
              </a>
            </div>
          </li>
          <li class="nav-item ">
            <div className="mx-2" onClick={SkillScrol}>
              <a class="nav-link text-light " href="#">
                Skills
              </a>
            </div>
          </li>
          <li class="nav-item ">
            <div className="mx-2">
              <a class="nav-link text-light " href="#">
                Projects
              </a>
            </div>
          </li>
          <li class="nav-item ">
            <div className="mx-2">
              <a className="nav-link  color-light text-light contact">
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
