import "../Styles/Navbar.css";
import { NavLink, Navlink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <div className="Brand-container">
          <i className="fas fa-cubes Brand-logo"></i>
          {/* <h2 className="Brand-name">Youtube</h2> */}
        </div>
        <div className="Navbar-navigation">
          <NavLink className="Navbar-navlink" to="/">
            <div className="Navbar-item">
              <i className="fas fa-home Navbar-item-logo"></i>
              <h4 className="Navbar-item-text">Home</h4>
            </div>
          </NavLink>
          <NavLink className="Navbar-navlink" to="/playlist">
            <div className="Navbar-item">
              <i className="fas fa-compact-disc Navbar-item-logo"></i>
              <h4 className="Navbar-item-text">Your Library</h4>
            </div>
          </NavLink>
          <NavLink className="Navbar-navlink" to="/playlist/1">
            <div className="Navbar-item">
              <i className="fas fa-search Navbar-item-logo"></i>
              <h4 className="Navbar-item-text">Search</h4>
            </div>
          </NavLink>
        </div>
        {/* <div className="Navbar-navigation">
          <div className="Navbar-item">
            <i className="fas fa-plus Navbar-item-logo"></i>
            <h4 className="Navbar-item-text">New Playlist</h4>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
