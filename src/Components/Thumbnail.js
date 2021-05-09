import "../Styles/Thumbnail.css";
import { playlistAction } from "../constants";
import { isObjectInArray } from "../helpers";
import { useContext } from "react";
import { PlaylistContext } from "../Context/PlaylistContext";
import { Link } from "react-router-dom";
export default function Thumbnail({ video }) {
  const { playlist, playlistDispatch } = useContext(PlaylistContext);
  const isVideoInLiked = isObjectInArray(playlist.liked, video.id);
  const isVideoInWatchLater = isObjectInArray(playlist.watchLater, video.id);
  const handlePlayList = (playlistName) => {
    if (isVideoInWatchLater) {
      playlistDispatch({
        type: playlistAction.REMOVE,
        payload: video,
        name: playlistName
      });
    } else {
      playlistDispatch({
        type: playlistAction.ADD,
        payload: video,
        name: playlistName
      });
    }
  };
  return (
    <Link style={{ textDecoration: "none" }} to={`/video/${video.embedId}`}>
      <div className="Thumbnail-container">
        <img
          className="Thumbnail-image"
          src={video.thumbnailImage}
          alt="Thumbnail"
        />
        <div className="Thumbnail-details">
          <div className="Avatar-container">
            <img className="Avatar" src={video.avatar} alt="avatar" />
          </div>
          <div className="Video-info">
            <p className="Video-title">{video.title}</p>
            <p className="Video-owner">{video.owner}</p>
            <div className="Video-Additional-details">
              <span>{video.views}</span>&nbsp;&#xb7;&nbsp;
              <span>{video.age}</span>
            </div>
          </div>
          <div className="Button-container">
            <i title="Like" class="Thumbnail-icon far fa-heart"></i>
            <i
              onClick={() => handlePlayList("watchLater")}
              class="Thumbnail-icon far fa-clock"
            ></i>
            <i class="Thumbnail-icon fas fa-plus"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
