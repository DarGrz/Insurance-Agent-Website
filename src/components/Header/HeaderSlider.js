import React, { useEffect, useState } from "react";
import AllianzLogo from "../../images/alliazn-logo.png";

const Info = (
  <div className="header-text">
    <h1>Gabriela Ziaja</h1>
    <h5>AGENT UBEZPIECZENIOWY</h5>
    <h4>W ALLIANZ</h4>
  </div>
);

const call = (
  <div className="header-text">
    <h1 href="tel:571 777 777" style={{ color: "#fca311" }}>
      Zadzwoń
    </h1>
    <h5>Umów spotkanie</h5>
    <h4>W ALLIANZ</h4>
  </div>
);

const HeaderSlider = (props) => {
  const duration =
    (parseInt(props.parentDuration) + parseInt(props.reapeatDealay)) * 1000;

  const [slide, setSlide] = useState(Info);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === Info) {
        setSlide(call);
      } else {
        setSlide(Info);
      }
    }, duration - 1);

    return () => clearInterval(interval);
  }, [slide, duration]);
  return <div>{slide}</div>;
};

export default HeaderSlider;
