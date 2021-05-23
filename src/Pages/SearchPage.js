import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API } from "../constants";
import "../Styles/SearchPage.css";

export default function SearchPage() {
  const [searchVideoString, setSearchVideoString] = useState("");
  const [searchedVideos, setSearchedVideos] = useState();
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
        setSearchedVideos(response.data.data.items);
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
    </div>
  );
}
