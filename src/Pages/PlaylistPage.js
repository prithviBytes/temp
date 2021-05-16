import "../Styles/PlaylistPage.css";
import PlaylistCard from "../Components/PlaylistCard";
import { useContext } from "react";
import { PlaylistContext } from "../Context/PlaylistContext";
export default function PlaylistPage() {
  const { playlist } = useContext(PlaylistContext);
  return (
    <div className="PlaylistPage">
      {Object.values(playlist).map((playlist) =>
        playlist.videos.length === 0 ? null : (
          <PlaylistCard playlist={playlist} />
        )
      )}
    </div>
  );
}
