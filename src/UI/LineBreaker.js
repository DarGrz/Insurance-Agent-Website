import React from "react";

const LineBreaker = (props) => {
  return (
    <div
      className="container"
      style={{
        height: "2px",
        width: "100%",
        backgroundColor: "#E7ECEF",
        marginTop: "10%",
        marginBottom: "20px",
        padding: "0 10px",
      }}
    >
      <h3>{props.text}</h3>
    </div>
  );
};

export default LineBreaker;
