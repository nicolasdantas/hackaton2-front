import React, { useState } from "react";
import Webcam from "./Webcam";
import "../style/Board.scss";

const Board = () => {
  const [showWebcam, isShowWebcam] = useState(false);
  return (
    <div className="board-container">
      <div className="grid-container">
        <div className="tile" onClick={() => isShowWebcam(!showWebcam)}>
          X
        </div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
        <div className="tile">X</div>
      </div>
      {showWebcam && <Webcam />}
    </div>
  );
};

export default Board;
