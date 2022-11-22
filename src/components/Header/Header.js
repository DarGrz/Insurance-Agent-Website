import React from "react";
import banerImg from "../../images/office-space.jpg";
import portraitImage from "../../images/gabi-temporary.jpg";
import "./Header.css";
import HeaderBaner from "./HeaderBaner";
import HeaderContact from "./HeaderContact";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="baner-img">
          <img src={banerImg} alt="baner" />
        </div>
        <div className="portrait-image container">
          <img src={portraitImage} alt="portrait" />
          <div className="header-text-bg">
            <div className="header-text">
              <h1>Gabriela Ziaja</h1>
              <h5>AGENT UBEZPIECZENIOWY</h5>
              <h4>W ALLIANZ</h4>
            </div>
          </div>
        </div>
      </div>
      <HeaderContact />
      <HeaderBaner />
    </>
  );
};

export default Header;
