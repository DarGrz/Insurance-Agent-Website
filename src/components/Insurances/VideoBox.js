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
    </div>
  );
};

export default VideoBox;
