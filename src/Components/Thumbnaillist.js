import Thumbnail from "./Thumbnail";
import { useContext } from "react";
import { VideoContext } from "../Context/VideoContext";
export default function ThumbnailList({ videos }) {
  return (
    <div className="ThumbnailList-container">
      {videos.map((video) => (
        <Thumbnail key={video.id} video={video} />
      ))}
    </div>
  );
}
