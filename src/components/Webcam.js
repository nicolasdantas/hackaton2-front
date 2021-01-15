import React from 'react';
import '../style/Webcam.scss';
import Webcam from 'react-webcam';
import CloseIcon from '@material-ui/icons/Close';

const WebcamComponent = ({ showWebcam, setShowWebcam }) => {
  const videoConstraints = {
    width: 480,
    height: 360,
  };

  return (
    <section className='webcam-wrapper'>
      <div className='icon'>
        <CloseIcon onClick={() => setShowWebcam(false)} />
      </div>
      <div>
        <Webcam videoConstraints={videoConstraints} />
        <div className='second-webcam'></div>
      </div>
    </section>
  );
};

export default WebcamComponent;
