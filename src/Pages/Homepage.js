import Thumbnail from "../Components/Thumbnail";
import { generateData } from "../seedData";
import "../Styles/Homepage.css";
export default function Homepage() {
  const data = generateData();
  return (
    <main className="Homepage">
      <div className="ThumbnailList-container">
        {data.map((video) => (
          <Thumbnail key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
}
