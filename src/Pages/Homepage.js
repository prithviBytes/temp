import ThumbnailList from "../Components/Thumbnaillist";
import { generateData } from "../seedData";
import "../Styles/Homepage.css";
export default function Homepage() {
  const data = generateData();
  return (
    <main className="Homepage">
      <ThumbnailList videoList={data} />
    </main>
  );
}
