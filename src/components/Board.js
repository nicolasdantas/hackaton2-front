import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Board.scss";
import Tile from './Tile'

const Board = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    axios
      .get("http://70da4d1824eb.ngrok.io/api/tiles")
      .then((res) => setBoard(res.data));
  }, []);

  return (
    <div className="board-container">
      <div className="grid-container">
        {board.map((tile) => <Tile tile={tile}/>)}
      </div>
    </div>
  );
};

export default Board;
