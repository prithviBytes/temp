import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import Thumbnaillist from "../Components/Thumbnaillist";
import { VideoContext } from "../Context/VideoContext";
import "../Styles/SearchPage.css";

export default function SearchPage() {
  const [searchVideoString, setSearchVideoString] = useState("");
  const [searchedVideos, setSearchedVideos] = useState();
  const { setContextVideos } = useContext(VideoContext);
  const inputRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    setSearchVideoString(inputRef.current.value);
  }
  useEffect(() => {
    if (searchVideoString === "") {
      return;
    }
    (async function () {
      try {
        const response = await axios.get(
          `https://Video-Library-Backend.prithvibytes.repl.co/search?keyword=${searchVideoString}`
        );
        setSearchedVideos(response.data.videos);
        setContextVideos(response.data.videos);
      } catch (error) {
        setSearchedVideos(error);
      }
    })();
  }, [searchVideoString]);
  return (
    <div className="SearchPage">
      <form className="Search-box" onSubmit={handleSubmit}>
        <i onClick={handleSubmit} className="fas fa-search Search-box-icon"></i>
        <input
          ref={inputRef}
          placeholder="Songs, Movies, Sports.."
          className="Search-box-input"
        />
      </form>
      <Thumbnaillist videos={searchedVideos} />
    </div>
  );
}
