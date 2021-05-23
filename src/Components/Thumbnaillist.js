import Thumbnail from "./Thumbnail";
export default function ThumbnailList({ videos }) {
  return (
    <div className="ThumbnailList-container">
      {videos &&
        videos.map((video) => <Thumbnail key={video.id} video={video} />)}
    </div>
  );
}
