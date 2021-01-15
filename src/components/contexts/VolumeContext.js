import React, { createContext, useState } from "react";

export const VolumeContext = createContext();

export default function VolumeProvider({ children }) {
  const [volume, setVolume] = useState(0.5);

  const handleChangeVolume = (event, newValue) => {
    setVolume(newValue/100);
  };

  return (
    <VolumeContext.Provider value={{ volume, handleChangeVolume }}>
      {children}
    </VolumeContext.Provider>
  );
}
