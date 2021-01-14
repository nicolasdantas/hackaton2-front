/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { LoginContext } from "../components/contexts/LoginContext";
import ImageAvatar from "./Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Tile = ({ tile, setShowWebcam }) => {
  const { type, room } = tile;
  if (tile.type.includes("other-users")) {
  }
  const { userLogged, setUserLogged } = useContext(LoginContext);

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);

  const handleClick = (event) => {
    if (
      event.target.className.includes("seat") ||
      event.target.className.includes("grass")
    ) {
      setUserLogged({
        ...userLogged,
        coordX: tile.coordX,
        coordY: tile.coordY,
      });
    }
    if (
      event.target.className.includes("space") &&
      event.target.className.includes("seat")
    ) {
      setShowWebcam(true);
    }
  };

  const [coordX, setCoordX] = useState(tile.coordX);
  const [coordY, setCoordY] = useState(tile.coordY);

  return (
    <>
      <div
        className={room ? `${room} ${type}` : type}
        onClick={(event) => {
          handleClick(event);
        }}
      >
        {type.includes("user-logged") && (
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
        )}
        {type.includes("other-users") && (
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">{tile.user.username}</Typography>
                <img
                  src={tile.user.avatar}
                  style={{ width: "50px" }}
                  alt={tile.user.username}
                />
              </React.Fragment>
            }
          >
            <div>
              <ImageAvatar image={userLogged.avatar} />
            </div>
          </HtmlTooltip>
        )}
      </div>
    </>
  );
};

export default Tile;
