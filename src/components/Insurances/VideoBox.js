import React from "react";

const VideoBox = (props) => {
  return (
    <div className="container insurance-video ">
      <video
        src={props.video}
        preload="none"
        alt="Car video"
        autoPlay={true}
        muted
        type="video/mp4"
        load
      />
      <div className="insurance-main-text">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default VideoBox;
