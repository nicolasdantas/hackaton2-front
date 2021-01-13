import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContinuousSlider from "./VolumeSlider";
import "../style/Navbar.scss";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const logout = () => {
    //
  };

  const location = useLocation();

  const classes = useStyles();

  return (
    location.pathname !== "/" &&
    <nav className="navbar-wrapper">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              ༼ つ ◕◕ ༽つ TAKE MY ENERGY ༼ つ ◕◕ ༽つ
            </Typography>
            <div className="settings">
              <div className="slider">
                <ContinuousSlider />
              </div>
              <ExitToAppIcon
                onClick={() => logout()}
                style={{ cursor: "pointer" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}
