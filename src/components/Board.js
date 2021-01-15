/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Board.scss";
import Tile from "./Tile";
import Webcam from "./Webcam";
import lodash from "lodash";
import GardenMusic from "./GardenMusic";
import BoardLoader from "./Loader";
import ConferenceRoom from "./ConferenceRoom";
import { useToasts } from "react-toast-notifications";
// import { MissedVideoCall } from "@material-ui/icons";
import Jukebox from "./jukebox";
// import { LoginContext } from '../components/contexts/LoginContext';

const baseUrl = "https://526037743aa4.ngrok.io/api";
const mercureServer = "http://2e3ccdecfa13.ngrok.io/.well-known/mercure";

// trying out mercure
const mercureUrl = new URL(mercureServer);
mercureUrl.searchParams.append("topic", "users");

const mapBoard = [];

const Board = () => {
  const [board, setBoard] = useState([]);
  const { addToast } = useToasts();

  const [boardWithUsers, setBoardWithUsers] = useState([]);

  const [users, setUsers] = useState([]);

  // handling special events
  const [showWebcam, setShowWebcam] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showWhiteboard, setShowWhiteboard] = useState(false);
  const eventSource = new EventSource(mercureUrl);

  const [startGardenMusic, setStartGardenMusic] = useState(false);

  eventSource.onmessage = (e) => {
    setUsers(JSON.parse(e.data));
  }; // setting users

  useEffect(async () => {
    await axios.get(baseUrl + "/users").then((res) => setUsers(res.data));
    addToast("Cliquez pour faire apparaitre vos collègues", {
      appearance: "success",
      autoDismiss: true,
    });
  }, []);

  useEffect(() => {
    // ici ça récupère la map
    axios.get(baseUrl + "/tiles").then((res) => {
      const newBoard = new Array(24).fill(null).map((value) => new Array(27));
      res.data.forEach((tile) => {
        newBoard[tile.coordY][tile.coordX] = tile;
      });
      setBoard(newBoard);
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let tile = board[i][j];
        mapBoard.push(
          <Tile
            key={"emptyMap" + tile.id}
            tile={tile}
            setShowWebcam={setShowWebcam}
            setStartGardenMusic={setStartGardenMusic}
            setShowWhiteboard={setShowWhiteboard}
            showWebcam={showWebcam}
            setShowMusic={setShowMusic}
          />
        );
      }
    }
  }, [board]);

  // add other users to the grid
  useEffect(() => {
    if (board.length > 0) {
      const newBoard = lodash.cloneDeep(board);

      users.forEach((user) => {
        if (user.coordY && user.coordX) {
          newBoard[user.coordY][user.coordX].type = "user";
          newBoard[user.coordY][user.coordX].user = user;
        }
      });

      setBoardWithUsers(newBoard);
    }
  }, [users, board]);

  useEffect(() => {
    if (boardWithUsers.length > 0) {
      mapBoard.length = 0;
      for (let i = 0; i < boardWithUsers.length; i++) {
        for (let j = 0; j < boardWithUsers[i].length; j++) {
          let tile = boardWithUsers[i][j];
          mapBoard.push(
            <Tile
              key={tile.id}
              tile={tile}
              setShowWebcam={setShowWebcam}
              showWebcam={showWebcam}
              setStartGardenMusic={setStartGardenMusic}
              setShowWhiteboard={setShowWhiteboard}
              setShowMusic={setShowMusic}
            />
          );
        }
      }
    }
  }, [boardWithUsers]);

  return board.length !== 0 ? (
    <>
      <div className="board-container">
        <div className="grid-container">{mapBoard}</div>
        {showWebcam && (
          <Webcam setShowWebcam={setShowWebcam} showWebcam={showWebcam} />
        )}
        {showMusic && <Jukebox />}
        {showWhiteboard && (
          <ConferenceRoom
            setShowWhiteboard={setShowWhiteboard}
            showWhiteboard={showWhiteboard}
          />
        )}

        <GardenMusic
          setPlaying={setStartGardenMusic}
          playing={startGardenMusic}
        />
      </div>
      {/* <section style={{ color: "white", textAlign: "center" }}>
        <h1>
          Welcome to your virtual office and discover the new teleworking with
          SimOffice !
        </h1>
        <h2>Want to relax ? Take a breath in the garden ... </h2>
        <h2>Some music ? Go to the rest rooms ! </h2>
        <h2>Need to draw something ? Sit down in the meeting room !</h2>
      </section> */}
    </>
  ) : (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <BoardLoader type="Circles" />
    </div>
  );
};

export default Board;
