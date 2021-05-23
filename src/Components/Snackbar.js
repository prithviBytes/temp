import "../Styles/Snackbar.css";
import { FeedbackContext } from "../Context/FeebackContext";
import { useContext } from "react";
export default function Snackbar() {
  const { state, feedbackDispatch } = useContext(FeedbackContext);
  const style = {
    borderLeft: `5px solid ${
      state.success ? "rgb(0, 184, 96)" : "rgb(208, 40, 56)"
    }`,
    color: state.success ? "rgb(0, 184, 96)" : "rgb(208, 40, 56)"
  };
  return (
    <div
      style={style}
      className={`Snackbar ${
        state.isOpen ? "Snackbar-visible" : "Snackbar-hidden"
      }`}
    >
      <p>{state.text}</p>
      <button onClick={() => feedbackDispatch({ type: "HIDE" })}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}
