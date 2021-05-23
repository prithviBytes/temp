import { useState, useEffect } from "react";
import axios from "axios";
import ThumbnailList from "../Components/Thumbnaillist";
import "../Styles/Homepage.css";
export default function Homepage() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(
          "https://Video-Library-Backend.prithvibytes.repl.co/videos"
        );
        console.log(response);
        const videos = response.data.videos;
        setVideos(videos);
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
