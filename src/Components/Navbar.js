import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <div className="Brand-container">
          <i className="fab fa-artstation Brand-logo"></i>
          {/* <h2 className="Brand-name">Youtube</h2> */}
        </div>
        <div className="Navbar-navigation">
          <div className="Navbar-item">
            <i className="fas fa-home Navbar-item-logo"></i>
            <h4 className="Navbar-item-text">Home</h4>
          </div>
          <div className="Navbar-item">
            <i className="fas fa-compact-disc Navbar-item-logo"></i>
            <h4 className="Navbar-item-text">Your Library</h4>
          </div>
          <div className="Navbar-item">
            <i className="far fa-clock Navbar-item-logo"></i>
            <h4 className="Navbar-item-text">Watch Later</h4>
          </div>
        </div>
        <div className="Navbar-navigation">
          <div className="Navbar-item">
            <i className="fas fa-plus Navbar-item-logo"></i>
            <h4 className="Navbar-item-text">New Playlist</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}
