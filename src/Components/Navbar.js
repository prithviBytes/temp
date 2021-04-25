import { useState } from "react";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(true);
  const toggleNavbar = () => {
    setOpen((state) => !state);
  };
  return (
    <nav className={`Navbar ${isOpen ? "" : "Navbar-shrink"}`}>
      <div className="Navbar-container">
        <div
          className={`Brand-container ${
            !isOpen ? "Brand-container-shrink" : null
          }`}
        >
          <i className="fab fa-artstation Brand-logo"></i>
          <h2 className={`Brand-name ${isOpen ? "" : "hidden"}`}>Youtube</h2>
        </div>
        <div
          className={`Navbar-navigation ${
            !isOpen ? "Navbar-navigation-shrink" : null
          }`}
        >
          <div
            className={`Navbar-item ${!isOpen ? "Navbar-item-shrink" : null}`}
          >
            <i
              className={`fas fa-home Navbar-item-logo ${
                !isOpen ? "Navbar-item-logo-shrink" : null
              }`}
            ></i>
            <h4
              className={`Navbar-item-text ${
                !isOpen ? "Navbar-item-text-shrink" : null
              }`}
            >
              Home
            </h4>
          </div>
          <div
            className={`Navbar-item ${!isOpen ? "Navbar-item-shrink" : null}`}
          >
            <i
              className={`fas fa-compact-disc Navbar-item-logo ${
                !isOpen ? "Navbar-item-logo-shrink" : null
              }`}
            ></i>
            <h4
              className={`Navbar-item-text ${
                !isOpen ? "Navbar-item-text-shrink" : null
              }`}
            >
              Your Library
            </h4>
          </div>
          <div
            className={`Navbar-item ${!isOpen ? "Navbar-item-shrink" : null}`}
          >
            <i
              className={`far fa-clock Navbar-item-logo ${
                !isOpen ? "Navbar-item-logo-shrink" : null
              }`}
            ></i>
            <h4
              className={`Navbar-item-text ${
                !isOpen ? "Navbar-item-text-shrink" : null
              }`}
            >
              Watch Later
            </h4>
          </div>
        </div>
        <div
          className={`Navbar-navigation ${
            !isOpen ? "Navbar-navigation-shrink" : null
          }`}
        >
          <div
            className={`Navbar-item ${!isOpen ? "Navbar-item-shrink" : null}`}
          >
            <i
              className={`fas fa-plus Navbar-item-logo ${
                !isOpen ? "Navbar-item-logo-shrink" : null
              }`}
            ></i>
            <h4
              className={`Navbar-item-text ${
                !isOpen ? "Navbar-item-text-shrink" : null
              }`}
            >
              New Playlist
            </h4>
          </div>
        </div>
      </div>
      <i
        onClick={toggleNavbar}
        className={`far fa-arrow-alt-circle-left Navbar-toggler ${
          isOpen ? "" : "rotate-180"
        }`}
      ></i>
    </nav>
  );
}
