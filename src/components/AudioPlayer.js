import React, { useState } from "react";
import ReactPlayer from "react-player";
import Select from "react-select";

const AudioPlayer = () => {
  const [musicSelected, setMusicSelected] = useState("");

  console.log(musicSelected);

  const options = [
    { value: "chocolate", label: "Chocolate", url: "https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <section>
      <Select
        options={options}
        onChange={(value) => setMusicSelected(value.url)}
      />
      {musicSelected && <ReactPlayer url={musicSelected} />}
    </section>
  );
};

export default AudioPlayer;
