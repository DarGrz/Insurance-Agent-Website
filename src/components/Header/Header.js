import React from "react";
import { motion } from "framer-motion";
// import banerImg from "../../images/office-space.jpg";
import banerVideo from "../../videos/Drapacze Chmur - 91744.mp4";
import portraitImage from "../../images/gabi-temporary.jpg";
import "./Header.css";
import HeaderBaner from "./HeaderBaner";
import HeaderContact from "./HeaderContact";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="baner-img">
          <video
            src={banerVideo}
            preload="none"
            alt="baner"
            autoPlay={true}
            muted
            type="video/mp4"
            load
          />
        </div>
        <div className="portrait-image container">
          <motion.div
            initial={{ opacity: 1, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, delay: 0.1 }}
          >
            <img src={portraitImage} alt="portrait" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="header-text-bg">
              <div className="header-text">
                <h1>Gabriela Ziaja</h1>
                <h5>AGENT UBEZPIECZENIOWY</h5>
                <h4>W ALLIANZ</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <HeaderContact />
      <HeaderBaner />
    </>
  );
};

export default Header;
