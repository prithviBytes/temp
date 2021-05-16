import ThumbnailList from "../Components/Thumbnaillist";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PlaylistContext } from "../Context/PlaylistContext";
export default function PlaylistVideos() {
  const { id } = useParams();
  const { playlist } = useContext(PlaylistContext);
  const currentPlaylist = playlist[id].videos;
  return (
    <>
      <ThumbnailList videoList={currentPlaylist} />
    </>
  );
}
