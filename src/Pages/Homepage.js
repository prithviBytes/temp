import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ThumbnailList from "../Components/Thumbnaillist";
import { VideoContext } from "../Context/VideoContext";
import "../Styles/Homepage.css";
export default function Homepage() {
  const [videos, setVideos] = useState([]);
  const { setContextVideos } = useContext(VideoContext);
  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(
          "https://Video-Library-Backend.prithvibytes.repl.co/videos"
        );
        const videos = response.data.videos;
        setVideos(videos);
        setContextVideos(videos);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVideos();
  }, []);
  return (
    <main className="Homepage">
      <ThumbnailList videos={videos} />
    </main>
  );
}
