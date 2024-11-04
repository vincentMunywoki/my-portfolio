// type rafce to convert navbar file to component.
import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
