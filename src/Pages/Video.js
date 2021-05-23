import "../Styles/Video.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import faker from "faker";
export default function Video() {
  const { id } = useParams();
  // const currentVideo = videos.find((video) => video.embedId === id);
  return (
    <div className="VideoPage">
      <div className="VideoPage-container">
        <div className="VideoPage-container-left">
          <div className="VideoPage-iframe-container">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="VideoPage-title">{currentVideo.snippet.title}</h2>
          <div className="VideoPage-info">
            <div className="VideoPage-stats">
              <span>1.1M views</span>&nbsp;&#xb7;&nbsp;
              <span>{moment(currentVideo.snippet.publishedAt).fromNow()}</span>
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
            <p className="VideoPage-owner">
              {currentVideo.snippet.channelTitle}
            </p>
          </div>
        </div>
        <div className="VideoPage-container-right">
          {videos
            .filter((video) => video.embedId !== currentVideo.embedId)
            .map((video) => (
              <div className="Thumbnail-horizontal">
                <img src={video.thumbnailImage} alt="" />
                <div className="Thumbnail-horizontal-content">
                  <h3 className="Thumbnail-horizontal-title">{video.title}</h3>
                  <p className="Thumbnail-horizontal-owner">{video.owner}</p>
                  <p className="Thumbnail-horizontal-stats">
                    {video.views}&nbsp;&#xb7;&nbsp;{video.age}
                  </p>
                </div>
              </div>
            ))}
          <div className="Thumbnail-horizontal">
            <img src={videos[0].thumbnailImage} alt="" />
            <div className="Thumbnail-horizontal-content">
              <h3 className="Thumbnail-horizontal-title">{videos[0].title}</h3>
              <p className="Thumbnail-horizontal-owner">{videos[0].owner}</p>
              <p className="Thumbnail-horizontal-stats">
                {videos[0].views}&nbsp;&#xb7;&nbsp;{videos[0].age}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
