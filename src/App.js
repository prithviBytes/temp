import Navbar from "./Components/Navbar";
import Appbar from "./Components/Appbar";
import Snackbar from "./Components/Snackbar";
import Homepage from "./Pages/Homepage";
import Video from "./Pages/Video";
import { Routes, Route } from "react-router-dom";
import { PlaylistContextProvider } from "./Context/PlaylistContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PlaylistContextProvider>
        <Navbar />
        <Appbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
        {/* <Snackbar /> */}
      </PlaylistContextProvider>
    </div>
  );
}
