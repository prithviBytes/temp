import "../Styles/SearchPage.css";

export default function SearchPage() {
  return (
    <div className="SearchPage">
      <form className="Search-box">
        <i className="fas fa-search Search-box-icon"></i>
        <input className="Search-box-input" />
      </form>
    </div>
  );
}
