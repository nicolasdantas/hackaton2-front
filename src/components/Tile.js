import React from "react";

const Tile = ({ tile }) => {
  const { type, room } = tile;
  return <div className={room ? `${room} ${type}` : type}></div>;
};

export default Tile;
