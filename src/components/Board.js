import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Board.scss";
import Tile from './Tile'

const Board = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    axios
      .get("http://a59935c6e010.ngrok.io/api/tiles")
      .then((res) => setBoard(res.data));
  }, []);

  return (
    <div className="board-container">
      <div className="grid-container">
        {board.map((tile) => <Tile tile/>)}
      </div>
    </div>
  );
};

export default Board;
