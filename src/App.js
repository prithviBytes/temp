import Navbar from "./Components/Navbar";
import Appbar from "./Components/Appbar";
import Snackbar from "./Components/Snackbar";
import Homepage from "./Pages/Homepage";
import Video from "./Pages/Video";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import SearchPage from "./Pages/SearchPage";
import PlaylistPage from "./Pages/PlaylistPage";
import PlaylistVideos from "./Pages/PlaylistVideos";
import { Routes, Route } from "react-router-dom";
import { PlaylistContextProvider } from "./Context/PlaylistContext";
import { FeedbackProvider } from "./Context/FeebackContext";
import { VideoProvider } from "./Context/VideoContext";
import Login from "./Pages/Login";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FeedbackProvider>
        <PlaylistContextProvider>
          <VideoProvider>
            <Navbar />
            <Appbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/video/:id" element={<Video />} />
              <ProtectedRoutes path="/playlist" element={<PlaylistPage />} />
              <Route path="/playlist/:id" element={<PlaylistVideos />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Snackbar />
          </VideoProvider>
        </PlaylistContextProvider>
      </FeedbackProvider>
    </div>
  );
}
