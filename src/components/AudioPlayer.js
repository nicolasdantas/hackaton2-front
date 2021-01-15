import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";
import Select from "react-select";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { VolumeContext } from "../components/contexts/VolumeContext";

const AudioPlayer = () => {
  const [musicSelected, setMusicSelected] = useState("");
  const [play, setPlay] = useState(false);
  const {volume} = useContext(VolumeContext)

  const options = [
    { value: "chill", label: "Chill", url: "https://youtu.be/ujHcGRIXEzU" },
    { value: "rock", label: "Rock", url: "https://youtu.be/nwYAt3-IPHY" },
    { value: "trance", label: "Trance", url: "https://youtu.be/WYetg3AuLE4" },
    {
      value: "classic",
      label: "Classic",
      url: "https://www.youtube.com/watch?v=RVfNygw10NU",
    },
  ];

  return (
    <section
      style={{
        width: "35%",
        marginLeft: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white", textAlign: "center" }}>
        Choose a kind of music !
      </h1>
      <div style={{ marginBottom: "20px", width:'200px'}}>
        <Select
          options={options}
          onChange={(value) => setMusicSelected(value.url)}
        />
      </div>
      {musicSelected && (
        <>
          <div className="player" style={{ display: "none" }}>
            <ReactPlayer url={musicSelected} controls={true} playing={play} volume={volume} />
          </div>
          {play ? (
            <PauseIcon
              type="button"
              style={{ cursor: "pointer", color: "white" }}
              onClick={() => setPlay(!play)}
            />
          ) : (
            <PlayArrowIcon
              type="button"
              style={{ cursor: "pointer", color: "white" }}
              onClick={() => setPlay(!play)}
            />
          )}
        </>
      )}
    </section>
  );
};

export default AudioPlayer;
