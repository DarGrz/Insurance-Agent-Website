import React, { useEffect, useState } from "react";
import "./HeaderSlider.css";

const HeaderSlider = (props) => {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(!slide);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return (
    <>
      {slide && (
        <div>
          <div className="header-text">
            <h1>Gabriela Ziaja</h1>
            <h5>AGENT UBEZPIECZENIOWY</h5>
            <h4>W ALLIANZ</h4>
          </div>
        </div>
      )}

      {!slide && (
        <div className="header-text">
          <h1 href="tel:571 777 777" style={{ color: "#fca311" }}>
            Zadzwoń
          </h1>
          <h5>Umów spotkanie</h5>
          <h4>Z ALLIANZ</h4>
        </div>
      )}
    </>
  );
};

export default HeaderSlider;
