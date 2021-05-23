import { createContext, useState } from "react";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [contextVideos, setContextVideos] = useState([]);
  const value = {
    contextVideos,
    setContextVideos
  };
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}
