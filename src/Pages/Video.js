import "../Styles/Video.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import faker from "faker";
import { VideoContext } from "../Context/VideoContext";
import { useContext } from "react";
export default function Video() {
  const { contextVideos } = useContext(VideoContext);
  const { id } = useParams();
  const currentVideo = contextVideos.find((video) => video.id === id);
  return (
    <div className="VideoPage">
      <div className="VideoPage-container">
        <div className="VideoPage-container-left">
          <div className="VideoPage-iframe-container">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideo.id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="VideoPage-title">{currentVideo.title}</h2>
          <div className="VideoPage-info">
            <div className="VideoPage-stats">
              <span>{currentVideo.views}</span>&nbsp;&#xb7;&nbsp;
              <span>{moment(currentVideo.publishedAt).fromNow()}</span>
            </div>
            <div className="VideoPage-actions">
              <span className="VideoPage-action-button">
                <i className="VideoPage-icon far fa-heart" />
                <span>Like</span>
              </span>
              <span className="VideoPage-action-button">
                <i className="VideoPage-icon far fa-clock" />
                <span>Later</span>
              </span>
              <span className="VideoPage-action-button">
                <i className="VideoPage-icon fas fa-plus" />
                <span>Save</span>
              </span>
            </div>
          </div>
          <div className="VideoPage-additional">
            <img
              className="VideoPage-avatar"
              src={faker.image.avatar()}
              alt=""
            />
            <p className="VideoPage-owner">{currentVideo.channelTitle}</p>
          </div>
        </div>
        <div className="VideoPage-container-right">
          {contextVideos
            .filter((video) => video.id !== currentVideo.id)
            .map((video) => (
              <div className="Thumbnail-horizontal">
                <img src={video.images.high.url} alt="" />
                <div className="Thumbnail-horizontal-content">
                  <h3 className="Thumbnail-horizontal-title">{video.title}</h3>
                  <p className="Thumbnail-horizontal-owner">
                    {video.channelTitle}
                  </p>
                  <p className="Thumbnail-horizontal-stats">
                    {video.views}&nbsp;&#xb7;&nbsp;
                    {moment(video.publishedAt).fromNow()}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
