import React, { useState, useEffect } from 'react';
const url = 'http://streaming.tdiradio.com:8000/house.mp3';
const audio = new Audio(url);

// const useAudio = (url) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   }, [playing]);

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

const Player = ({ playing, setPlaying }) => {
  //   const [playing, toggle] = useAudio(url);

  //   const [audio] = useState(new Audio(url));
  //   const [playing, setPlaying] = useState(false); state in parent component

  // const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return (
    <div>
      {/* <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button> */}
    </div>
  );
};

export default Player;
