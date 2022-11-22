import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { navLinks } from "./navbar-items";
import Logo from "./navbar-items";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      newValue = window.pageYOffset;

      //Subtract the two and conclude
      if (oldValue - newValue < 0) {
        setShow(false);
      } else if (oldValue - newValue > 0) {
        setShow(true);
      }

      // Update the old value
      oldValue = newValue;
    });
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`navbar ${!show && "hide"}`}>
      <nav>
        <ul>
          <li className="logo">
            <img src={Logo} alt="logo" />
          </li>
        </ul>
        <ul className={`nav-links ${nav && "active"}`} onClick={toggleNav}>
          {navLinks.map((link) => (
            <li key={link.tag}>
              <a href={link.tag}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className={`toggle-nav ${nav && "active"}`} onClick={toggleNav}>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
