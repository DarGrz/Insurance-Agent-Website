import React from "react";
import { motion } from "framer-motion";
import Image from "../../images/smart.webp";
import "./About.css";

const About = () => {
  return (
    <div className="about-container " id="about">
      <div className="container">
        <h2>Trochę o mnie ;)</h2>
      </div>
      <div className="container">
        <motion.div
          className="side-a"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ratione nam, iure enim ea molestias voluptas quam repellat aperiam
            quae error quis expedita non dolores quidem. Sint ad error at.
          </p>
        </motion.div>

        <motion.div
          className="side-b"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={Image} alt="smart" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
