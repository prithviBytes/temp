import "../Styles/Thumbnail.css";
import moment from "moment";
import { playlistAction } from "../constants";
import { isObjectInArray, unitizeNumber } from "../helpers";
import { useContext } from "react";
import { PlaylistContext } from "../Context/PlaylistContext";
import { Link } from "react-router-dom";
import faker from "faker";
export default function Thumbnail({ video }) {
  const { playlist, playlistDispatch } = useContext(PlaylistContext);
  const handlePlayList = (playlistId) => {
    if (isObjectInArray(playlist[playlistId].videos, video.id)) {
      playlistDispatch({
        type: playlistAction.REMOVE,
        payload: video,
        id: playlistId
      });
    } else {
      playlistDispatch({
        type: playlistAction.ADD,
        payload: video,
        id: playlistId
      });
    }
  };
  return (
    <div className="Thumbnail-container">
      <Link style={{ textDecoration: "none" }} to={`/video/${video.id}`}>
        <img
          className="Thumbnail-image"
          src={video.images.high.url}
          alt="Thumbnail"
        />
      </Link>
      <div className="Thumbnail-details">
        <div className="Avatar-container">
          <img className="Avatar" src={faker.image.avatar()} alt="avatar" />
        </div>
        <div className="Video-info">
          <p className="Video-title">{video.title}</p>
          <p className="Video-owner">{video.channelTitle}</p>
          <div className="Video-Additional-details">
            <span>{unitizeNumber(video.views)}</span>&nbsp;&#xb7;&nbsp;
            <span>{moment(video.publishedAt).fromNow()}</span>
          </div>
        </div>
        <div className="Button-container">
          <i
            title="Like"
            onClick={() => handlePlayList("liked")}
            className="Thumbnail-icon far fa-heart"
          ></i>
          <i
            title="Add to watch later"
            onClick={() => handlePlayList("watchLater")}
            className="Thumbnail-icon far fa-clock"
          ></i>
          <i className="Thumbnail-icon fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
}
