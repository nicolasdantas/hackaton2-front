import React from "react";
import Webcam from "react-webcam";
import './Webcam.scss'

const WebcamComponent = () => {
  const videoConstraints = {
    width: 320,
    height: 240,
  };

  return (
    <section className='webcam-wrapper'>
      <Webcam videoConstraints={videoConstraints} />
      <div className='second-webcam'>Second webcam</div>
    </section>
  );
};

export default WebcamComponent;
