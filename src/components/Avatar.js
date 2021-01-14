import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatar({ image }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt={image} src={image} />
    </div>
  );
}
