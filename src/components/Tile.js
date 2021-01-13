import React, { useState } from "react";

const Tile = ({ tile }) => {
  const [showWebcam, setShowWebcam] = useState(false);
  const { type, room } = tile;

  const handleClick = (event) => {
    if(event.target.value.includes('seat')){
      setShowWebcam(!showWebcam)
    }
  }

  return (
    <div
      className={room ? `${room} ${type}` : type}
      onClick={(event) => {
        handleClick(event);
      }}
    ></div>
  );
};

export default Tile;
