import React from "react";
import classes from "./InsuranceCard.module.css";

const InsuranceCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`} style={props.style}>
      <p>&#x2714;&nbsp;</p>
      <p>{props.text}</p>
      {props.children}
    </div>
  );
};

export default InsuranceCard;
