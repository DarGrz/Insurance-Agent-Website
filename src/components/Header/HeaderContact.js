import React from "react";
import "./HeaderContact.css";
import { MdContactPhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HeaderContact = () => {
  return (
    <div className="header-contact" id="contact">
      <div className="container header-container ">
        <div className="contact-container">
          <motion.div
            animate={{ rotate: [0, -10, 0, 0], scale: [1, 1.3, 1, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 9, delay: 1 }}
            className="contact-icon"
          >
            <a href="tel:+48 555 5555 55">
              <MdContactPhone />
            </a>
          </motion.div>
          <div className="contact">
            <a href="tel:+48 605 621 456">
              <p>ZADZWOŃ</p>
            </a>
          </div>
        </div>
        <div className="address-container">
          <motion.div
            animate={{ rotate: [0, -10, 0, 0], scale: [1, 1.3, 1, 1] }}
            transition={{ repeat: Infinity, delay: 3, repeatDelay: 9 }}
            className="gps-icon"
          >
            <a href="https://goo.gl/maps/YqidpKvJRofyxR8r7">
              <FaMapMarkerAlt />
            </a>
          </motion.div>
          <div className="address">
            <a href="https://goo.gl/maps/YqidpKvJRofyxR8r7">
              <p>NAWIGUJ</p>
            </a>
          </div>
        </div>
      </div>
      {/* <HeaderForm /> */}
    </div>
  );
};

export default HeaderContact;
