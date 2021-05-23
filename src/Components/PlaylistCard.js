import { NavLink } from "react-router-dom";

export default function PlaylistCard({ playlist }) {
  return (
    <div className="Playlist-card">
      <NavLink
        style={{ textDecoration: "none" }}
        to={`/playlist/${playlist.playlistId}`}
      >
        <div className="Images-container">
          {playlist.videos.slice(0, 6).map((video) => (
            <div className="Image-container-image">
              <img src={video.images.high.url} alt="" />
            </div>
          ))}
        </div>
        <div className="Playlist-details">
          <h3 className="Playlist-title">{playlist.name}</h3>
        </div>
      </NavLink>
    </div>
  );
}
