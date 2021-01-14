import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Board.scss";
import Tile from "./Tile";
import Webcam from "./Webcam";

const Board = () => {
  const [board, setBoard] = useState([]);
  const [boardWithUsers, setBoardWithUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [showWebcam, setShowWebcam] = useState(false);

  useEffect(() => {
    axios
      .get("http://cca5886e1061.ngrok.io/api/users")
      .then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://cca5886e1061.ngrok.io/api/tiles")
      .then((res) => setBoard(res.data));
  }, []);

  useEffect(() => {
    mapOnBoard();
  }, []);

  const mapOnBoard = () => {
    return boardWithUsers.map((tile) => (
      <Tile
        key={tile.id}
        tile={tile}
        setShowWebcam={setShowWebcam}
        showWebcam={showWebcam}
      />
    ));
  };

  useEffect(() => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < users.length; j++) {
        if (
          users[j].coordX === board[i].coordX &&
          users[j].coordY === board[i].coordY
        ) {
          setBoardWithUsers(
            board.map((obj) =>
              obj.id === board[i].id ? { ...obj, type: "test" } : obj
            )
          );
        }
      }
    }
    mapOnBoard();
  }, [users, board]);

  return (
    <div className="board-container">
      <div className="grid-container">{mapOnBoard()}</div>
      {showWebcam && (
        <Webcam setShowWebcam={setShowWebcam} showWebcam={showWebcam} />
      )}
    </div>
  );
};

export default Board;
