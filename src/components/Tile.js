/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { LoginContext } from '../components/contexts/LoginContext';
import ImageAvatar from './Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const baseUrl = 'https://526037743aa4.ngrok.io/api';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Tile = ({
  tile,
  setShowWebcam,
  setStartGardenMusic,
  setShowWhiteboard,
  setShowMusic,
  setShowRecipe,
}) => {
  const { type, room } = tile;

  const { userLogged, setUserLogged } = useContext(LoginContext);

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  const handleClick = async (event) => {
    setShowWebcam(false);
    setShowWhiteboard(false);
    setShowMusic(false);
    setShowRecipe(false);
    // setStartGardenMusic(false);

    if (
      event.target.className.includes('space') &&
      event.target.className.includes('seat')
    ) {
      setShowWebcam(true);
    }
    if (event.target.className.includes('meeting')) {
      setShowWhiteboard(true);
    }
    if (
      event.target.className.includes('seat') ||
      event.target.className.includes('floor')
    ) {
      setStartGardenMusic(false);
    }

    if (event.target.className.includes('grass')) {
      setStartGardenMusic(true);
    }
    if (event.target.className.includes('rest_room')) {
      setShowMusic(true);
    }
    if (
      event.target.className.includes('cafeteria') &&
      event.target.className.includes('seat')
    ) {
      setShowRecipe(true);
    }

    const moveResult = await axios.get(
      `${baseUrl}/users/move/${userLogged.username}/${tile.coordX}/${tile.coordY}`
    );
    // ${userLogged.id}

    if (moveResult.data !== false) {
      setUserLogged({
        ...userLogged,
        coordX: tile.coordX, // coords of the current tile, which knows its coords in the tile state
        coordY: tile.coordY,
      });
    }
  };

  return (
    <>
      <div
        className={room ? `${room} ${type}` : type}
        title={
          room
            ? capitalizeFirstLetter(room.split('_').join(' '))
            : capitalizeFirstLetter(type.split('_').join(' '))
        }
        onClick={(event) => {
          handleClick(event);
        }}
      >
        {/* {type.includes('user') && (
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">{userLogged.username}</Typography>
                <img
                  src={userLogged.avatar}
                  style={{ width: "50px" }}
                  alt={userLogged.username}
                />
              </React.Fragment>
            }
          >
            <div>
              <ImageAvatar image={userLogged.avatar} />
            </div>
          </HtmlTooltip>
        )} */}
        {type.includes('user') && (
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color='inherit'>{tile.user.username}</Typography>
                <img
                  src={tile.user.avatar}
                  style={{ width: '50px' }}
                  alt={tile.user.username}
                />
              </React.Fragment>
            }
          >
            <div>
              <ImageAvatar image={tile.user.avatar} />
            </div>
          </HtmlTooltip>
        )}
      </div>
    </>
  );
};

export default Tile;
