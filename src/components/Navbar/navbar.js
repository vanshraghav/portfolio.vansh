import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="./Logomain.webp" alt="hello guys" />
      <div className="desktopMenu">
        <Link
          className="desktopMenuListItem"
          to="root"
          smooth={true}
          duration={500} // Adjust the duration as needed
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          to="skills"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          to="Portfolio"
          smooth={true}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          className="desktopMenuListItem"
          to="contact-left"
          smooth={true}
          duration={500}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
