import React from "react";
import "../style/team.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    background:
      "url('https://www.wallpapertip.com/wmimgs/96-966354_plain-background-for-2d-game.jpg') no-repeat fixed center / cover",
    textAlign: "center",
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 35,
  },
  cards: {
    maxWidth: 500,
  },
  papers: {
    padding: 10,
    backgroundColor: "#ffc2b3",
    boxShadow: "0 1px 3px rgba(50,62,64,0.12), 0 1px 2px rgba(50,62,64,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow:
        "0 5px 60px rgba(50,62,64,0.50), 0 5px 30px rgba(50,62,64,0.44)",
    },
  },
  avatar: {
    maxWidth: "100%",
  },
  firstName: {
    fontSize: 30,
    color: "#D94D1A",
  },
  introduction: {
    fontSize: 20,
    color: "#323E40",
  },
});

const avatar = "https://pickaface.net/gallery/avatar/DW7165570eb49e179a.png";

export default function Team() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={5} justify="space-evenly">
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img className={classes.avatar} src={avatar} alt="Alex's portrait" />
          <h3 className={classes.firstName}>Alex</h3>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src={avatar}
            alt="Florian's portrait"
          />
          <h3 className={classes.firstName}>Florian</h3>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src={avatar}
            alt="Nicolas's portrait"
          />
          <h3 className={classes.firstName}>Nicolas</h3>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img className={classes.avatar} src={avatar} alt="Yoann's portrait" />
          <h3 className={classes.firstName}>Yoann</h3>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src={avatar}
            alt="Aymeric's portrait"
          />
          <h3 className={classes.firstName}>Aymeric</h3>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src={avatar}
            alt="Brieuc's portrait"
          />
          <h3 className={classes.firstName}>Brieuc</h3>
        </Paper>
      </Grid>
    </Grid>
  );
}
