import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { VolumeContext } from "../components/contexts/VolumeContext";

const useStyles = makeStyles({
  root: {
    width: 200,
    color: "white",
  },
  slider: {
    color: "white",
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const {volume, handleChangeVolume} = useContext(VolumeContext)
console.log(volume)
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={volume*100} onChange={handleChangeVolume} aria-labelledby="continuous-slider" className={classes.slider} />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}