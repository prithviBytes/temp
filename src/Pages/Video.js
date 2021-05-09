import "../Styles/Video.css";
import { useParams } from "react-router-dom";

export default function Video() {
  const { id } = useParams();
  console.log(id);
  return <>Hey there</>;
}
