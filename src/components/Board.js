/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import '../style/Board.scss';
import Tile from './Tile';
import Webcam from './Webcam';
import { LoginContext } from '../components/contexts/LoginContext';

// trying out mercure
const mercureUrl = new URL('http://2e3ccdecfa13.ngrok.io/.well-known/mercure');
mercureUrl.searchParams.append('topic', 'users');

const eventSource = new EventSource(mercureUrl);

const Board = () => {
  const [board, setBoard] = useState([]);
  const [boardWithUsers, setBoardWithUsers] = useState([]);
  // const [
  //   boardWithUsersAndUserLogged,
  //   setBoardWithUsersAndUserLogged,
  // ] = useState([]);
  const [users, setUsers] = useState([]);
  const [showWebcam, setShowWebcam] = useState(false);

  const { userLogged } = useContext(LoginContext);

  eventSource.onmessage = (e) => {
    console.log(JSON.parse(e.data));
    setUsers(JSON.parse(e.data));
  }; // setting users

  useEffect(() => {
    // ici ça récupère la map
    axios
      .get('https://526037743aa4.ngrok.io/api/tiles')
      .then((res) => setBoard(res.data));
  }, []);

  // map on the final array to create Tile components
  const mapOnBoard = () => {
    console.log(users);
    return boardWithUsers.map((tile) => (
      <Tile
        key={tile.id}
        tile={tile}
        setShowWebcam={setShowWebcam}
        showWebcam={showWebcam}
      />
    ));
  };

  // add other users to the grid
  useEffect(() => {
    // initialise
    if (boardWithUsers.length === 0) {
      setBoardWithUsers([...board]);
    }

    // setBoardWithUsersAndUserLogged([...board]);

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < users.length; j++) {
        if (
          users[j].coordX === board[i].coordX &&
          users[j].coordY === board[i].coordY
        ) {
          setBoardWithUsers(
            board.map((obj) =>
              obj.id === board[i].id
                ? { ...obj, type: 'user', user: users[j] }
                : obj
            )
          );
        }
      }
    }
  }, [users, board]);

  useEffect(() => {
    console.log('useEffect 2', boardWithUsers);
    mapOnBoard();
  }, [boardWithUsers]);

  // add user logged to the grid
  // useEffect(() => {
  //   for (let i = 0; i < board.length; i++)
  //     if (
  //       board[i].coordX === userLogged.coordX &&
  //       board[i].coordY === userLogged.coordY
  //     ) {
  //       setBoardWithUsersAndUserLogged(
  //         boardWithUsers.map((obj) =>
  //           obj.id === boardWithUsers[i].id
  //             ? { ...obj, type: 'user-logged' }
  //             : obj
  //         )
  //       );
  //     }
  // }, [userLogged, boardWithUsers]);

  return (
    <div className='board-container'>
      <div className='grid-container'>{mapOnBoard()}</div>
      {showWebcam && (
        <Webcam setShowWebcam={setShowWebcam} showWebcam={showWebcam} />
      )}
    </div>
  );
};

export default Board;
