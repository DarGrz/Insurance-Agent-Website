import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderBaner.css";
import { motion } from "framer-motion";
import { AiFillCar } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { GiLifeBar } from "react-icons/gi";

const HeaderBaner = () => {
  return (
    <div className="header-baner" id="services">
      <div className="container insurance-icons">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <NavLink
            to="/Insurance-Agent-Website/mycar"
            activeclassname="active-link"
          >
            <AiFillCar className="car-icon" />
            <p>Mój samochód</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <NavLink to="/Insurance-Agent-Website/" activeclassname="active-link">
            <GiLifeBar className="lifebar-icon" />
            <p>Życie i zdrowie</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <NavLink
            to="/Insurance-Agent-Website/myhome"
            activeclassname="active-link"
          >
            <BsFillHouseFill className="house-icon" />
            <p>Mój dom</p>
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <NavLink
            to="/Insurance-Agent-Website/myfirm"
            activeclassname="active-link"
          >
            <MdAddBusiness className="business-icon" />
            <p>Moja firma</p>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderBaner;
