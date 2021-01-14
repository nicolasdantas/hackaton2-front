/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import '../style/Board.scss';
import Tile from './Tile';
import Webcam from './Webcam';
import GardenMusic from './GardenMusic';
import { LoginContext } from '../components/contexts/LoginContext';

const Board = () => {
  const [board, setBoard] = useState([]);
  const [boardWithUsers, setBoardWithUsers] = useState([]);
  const [
    boardWithUsersAndUserLogged,
    setBoardWithUsersAndUserLogged,
  ] = useState([]);
  const [users, setUsers] = useState([]);

  // handling special events
  const [showWebcam, setShowWebcam] = useState(false);
  const [startGardenMusic, setStartGardenMusic] = useState(false);

  const { userLogged } = useContext(LoginContext);

  useEffect(() => {
    axios
      .get('http://c86bd7d73c45.ngrok.io/api/users')
      .then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    axios
      .get('http://c86bd7d73c45.ngrok.io/api/tiles')
      .then((res) => setBoard(res.data));
  }, []);

  // map on the final array to create Tile components
  const mapOnBoard = () => {
    return boardWithUsersAndUserLogged.map((tile) => (
      <Tile
        key={tile.id}
        tile={tile}
        setShowWebcam={setShowWebcam}
        showWebcam={showWebcam}
        setStartGardenMusic={setStartGardenMusic}
      />
    ));
  };

  // add other users to the grid
  useEffect(() => {
    // initialise
    setBoardWithUsers([...board]);
    setBoardWithUsersAndUserLogged([...board]);

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < users.length; j++) {
        if (
          users[j].coordX === board[i].coordX &&
          users[j].coordY === board[i].coordY
        ) {
          setBoardWithUsers(
            board.map((obj) =>
              obj.id === board[i].id
                ? { ...obj, type: 'other-users', user: users[j] }
                : obj
            )
          );
        }
      }
    }
    mapOnBoard();
  }, [users, board]);

  // add user logged to the grid
  useEffect(() => {
    for (let i = 0; i < board.length; i++)
      if (
        board[i].coordX === userLogged.coordX &&
        board[i].coordY === userLogged.coordY
      ) {
        setBoardWithUsersAndUserLogged(
          boardWithUsers.map((obj) =>
            obj.id === boardWithUsers[i].id
              ? { ...obj, type: 'user-logged' }
              : obj
          )
        );
      }
  }, [userLogged, boardWithUsers]);

  return (
    <div className='board-container'>
      <div className='grid-container'>{mapOnBoard()}</div>
      {showWebcam && (
        <Webcam setShowWebcam={setShowWebcam} showWebcam={showWebcam} />
      )}

      <GardenMusic
        setPlaying={setStartGardenMusic}
        playing={startGardenMusic}
      />
    </div>
  );
};

export default Board;
