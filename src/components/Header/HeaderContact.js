import React from "react";
import "./HeaderContact.css";
import { MdContactPhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeaderContact = () => {
  return (
    <div className="header-contact">
      <div className="container header-container ">
        <div className="contact-container">
          <div className="contact-icon">
            <a href="tel:+48 555 5555 55">
              <MdContactPhone />
            </a>
          </div>
          <div className="contact">
            <p>
              <a href="tel:+48 555 5555 55">+48 555 5555 55</a>
            </p>
            <p>
              <a href="mailto: mail@address.pl">adres@email.pl</a>
            </p>
          </div>
        </div>
        <div className="address-container">
          <div className="gps-icon">
            <a href="https://goo.gl/maps/YqidpKvJRofyxR8r7">
              <FaMapMarkerAlt />
            </a>
          </div>
          <div className="address">
            <a href="https://goo.gl/maps/YqidpKvJRofyxR8r7">
              <p>Tarnów 32-444</p>
              <p>Równoległa 6a</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
