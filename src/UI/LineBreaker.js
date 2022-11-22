import React from "react";

const LineBreaker = (props) => {
  return (
    <div className="line-breaker" style={{ padding: "10px" }}>
      <div
        className="container"
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "#E7ECEF",
          marginTop: "10%",
          marginBottom: "10%",
          padding: "0",
        }}
      >
        <h3>{props.text}</h3>
      </div>
    </div>
  );
};

export default LineBreaker;
