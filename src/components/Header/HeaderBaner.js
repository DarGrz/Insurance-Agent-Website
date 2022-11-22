import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBaner.css";
import { AiFillCar } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { GiLifeBar } from "react-icons/gi";

const HeaderBaner = () => {
  return (
    <div className="header-baner">
      <div className="container insurance-icons">
        <Link
          to="/Insurance-Agent-Website/mycar"
          style={{ color: "rgba(255,255,255,1)" }}
        >
          <AiFillCar className="car-icon" />
          <p>Mój samochód</p>
        </Link>
        <Link
          to="/Insurance-Agent-Website/"
          style={{ color: "rgba(255,255,255,1)" }}
        >
          <GiLifeBar className="lifebar-icon" />
          <p>Życie i zdrowie</p>
        </Link>
        <Link to="myhome" style={{ color: "rgba(255,255,255,1)" }}>
          <BsFillHouseFill className="house-icon" />
          <p>Mój dom</p>
        </Link>
        <Link to="myfirm" style={{ color: "rgba(255,255,255,1)" }}>
          <MdAddBusiness className="business-icon" />
          <p>Moja firma</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderBaner;
