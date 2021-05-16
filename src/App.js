import Navbar from "./Components/Navbar";
import Appbar from "./Components/Appbar";
import Snackbar from "./Components/Snackbar";
import Homepage from "./Pages/Homepage";
import Video from "./Pages/Video";
import PlaylistPage from "./Pages/PlaylistPage";
import PlaylistVideos from "./Pages/PlaylistVideos";
import { Routes, Route } from "react-router-dom";
import { PlaylistContextProvider } from "./Context/PlaylistContext";
import { FeedbackProvider } from "./Context/FeebackContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FeedbackProvider>
        <PlaylistContextProvider>
          <Navbar />
          <Appbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/playlist" element={<PlaylistPage />} />
            <Route path="/playlist/:id" element={<PlaylistVideos />} />
          </Routes>
          <Snackbar />
        </PlaylistContextProvider>
      </FeedbackProvider>
    </div>
  );
}
