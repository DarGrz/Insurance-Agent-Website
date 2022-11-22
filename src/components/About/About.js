import React from "react";
import Image from "../../images/smart.webp";
import "./About.css";

const About = () => {
  return (
    <div className="about-container " id="about">
      <div className="container">
        <h2>Trochę o mnie ;)</h2>
      </div>
      <div className="container">
        <div className="side-a">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ratione nam, iure enim ea molestias voluptas quam repellat aperiam
            quae error quis expedita non dolores quidem. Sint ad error at.
          </p>
        </div>
        <div className="side-b">
          <img src={Image} alt="smart" />
        </div>
      </div>
    </div>
  );
};

export default About;
