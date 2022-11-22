import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderBaner.css";
import { AiFillCar } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { GiLifeBar } from "react-icons/gi";

const HeaderBaner = () => {
  return (
    <div className="header-baner" id="services">
      <div className="container insurance-icons">
        <NavLink
          to="/Insurance-Agent-Website/mycar"
          activeClassName="active-link"
        >
          <AiFillCar className="car-icon" />
          <p>Mój samochód</p>
        </NavLink>
        <NavLink to="/Insurance-Agent-Website/" activeClassName="active-link">
          <GiLifeBar className="lifebar-icon" />
          <p>Życie i zdrowie</p>
        </NavLink>
        <NavLink
          to="/Insurance-Agent-Website/myhome"
          activeClassName="active-link"
        >
          <BsFillHouseFill className="house-icon" />
          <p>Mój dom</p>
        </NavLink>
        <NavLink
          to="/Insurance-Agent-Website/myfirm"
          activeClassName="active-link"
        >
          <MdAddBusiness className="business-icon" />
          <p>Moja firma</p>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderBaner;
