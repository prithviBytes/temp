import Navbar from "./Components/Navbar";
// import AppBar from "./Components/Appbar";
import Thumbnail from "./Components/Thumbnail";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ marginLeft: "250px" }}>{/* <Thumbnail /> */}</main>
    </div>
  );
}
