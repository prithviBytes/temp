import Thumbnail from "./Thumbnail";
export default function ThumbnailList({ videoList }) {
  return (
    <div className="ThumbnailList-container">
      {videoList.map((video) => (
        <Thumbnail key={video.id} video={video} />
      ))}
    </div>
  );
}
