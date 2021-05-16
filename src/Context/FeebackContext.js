import { createContext, useEffect, useReducer } from "react";

const inititalState = {
  text: "",
  isOpen: false,
  success: true
};

function FeedbackReducer(state, action) {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        isOpen: true,
        text: action.payload.text,
        success: action.payload.success
      };
    case "HIDE":
      return inititalState;
    default:
      return state;
  }
}

export const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [state, feedbackDispatch] = useReducer(FeedbackReducer, inititalState);
  useEffect(() => {
    const timer = setTimeout(() => {
      feedbackDispatch({ type: "HIDE" });
    }, 5000);
  }, [state]);
  const value = {
    state,
    feedbackDispatch
  };
  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}
