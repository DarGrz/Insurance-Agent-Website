import React from "react";
import { motion } from "framer-motion";
// import banerImg from "../../images/office-space.jpg";
import banerVideo from "../../videos/Drapacze Chmur - 91744.mp4";
import portraitImage from "../../images/gabi-temporary.jpg";
import "./Header.css";
import HeaderBaner from "./HeaderBaner";
import HeaderContact from "./HeaderContact";
import HeaderSlider from "./HeaderSlider";

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
          />
        </div>
        <div className="portrait-image container">
          <motion.div
            initial={{ opacity: 0.9, scale: 0.95 }}
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
              <motion.div
                // initial={{ x: 200 }}
                animate={{ x: [400, 0] }}
                transition={{ duration: 2, repeatDelay: 9, repeat: Infinity }}
              >
                <HeaderSlider reapeatDealay="9" parentDuration="2" />
              </motion.div>
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
