import React, { useState } from "react";
import ReactPlayer from "react-player";
import Select from "react-select";

const AudioPlayer = () => {
  const [musicSelected, setMusicSelected] = useState("");

  console.log(musicSelected);

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
    <section style={{ width: "35%" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Choose a kind of music !
      </h1>
      <div style={{ marginBottom: "20px" }}>
        <Select
          options={options}
          onChange={(value) => setMusicSelected(value.url)}
        />
      </div>
      {musicSelected && <ReactPlayer url={musicSelected} controls={true} />}
    </section>
  );
};

export default AudioPlayer;
