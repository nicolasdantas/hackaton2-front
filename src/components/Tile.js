import React, { useState } from "react";

const Tile = ({ tile, setShowWebcam, showWebcam }) => {
  const { type, room } = tile;

  const handleClick = (event) => {
    if (event.target.className.includes("space")) {
      setShowWebcam(true);
    }
  };

  const [coordX, setCoordX] = useState(tile.coordX);
  const [coordY, setCoordY] = useState(tile.coordY);

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
