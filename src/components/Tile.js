/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { LoginContext } from "../components/contexts/LoginContext";

const Tile = ({ tile, setShowWebcam, showWebcam }) => {
  const { type, room } = tile;
  const { userLogged, setUserLogged } = useContext(LoginContext);

  const handleClick = (event) => {
    if (event.target.className.includes("seat") || event.target.className.includes("grass")) {
      setUserLogged({
        ...userLogged,
        coordX: tile.coordX,
        coordY: tile.coordY,
      });
    }
    if (
      event.target.className.includes("space") &&
      event.target.className.includes("seat")
    ) {
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
