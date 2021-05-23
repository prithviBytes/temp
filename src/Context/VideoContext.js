import axios from "axios";

const { createContext, useEffect, useState } = require("react");

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [videoApiError, setVideoApiError] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://Video-Library-Backend.prithvibytes.repl.co/videos"
        );
        setVideoApiError(response.data.success);
        if (response.data.success) {
          setVideos(response.data.videos);
        }
      } catch (error) {
        setVideoApiError(true);
      }
    })();
  }, []);
  const value = {
    videoApiError,
    videos
  };
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}
