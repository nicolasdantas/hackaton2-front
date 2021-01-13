import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Board.scss";
import Tile from "./Tile";
import Webcam from "./Webcam";

const Board = () => {
  const [board, setBoard] = useState([]);
  const [showWebcam, setShowWebcam] = useState(false);

  useEffect(() => {
    axios
      .get("http://70da4d1824eb.ngrok.io/api/tiles")
      .then((res) => setBoard(res.data));
  }, []);

  return (
    <div className="board-container">
      <div className="grid-container">
        {board.map((tile) => (
          <Tile
            tile={tile}
            setShowWebcam={setShowWebcam}
            showWebcam={showWebcam}
          />
        ))}
      </div>
      {showWebcam && (
        <Webcam setShowWebcam={setShowWebcam} showWebcam={showWebcam} />
      )}
    </div>
  );
};

export default Board;
