import { createContext, useContext, useReducer } from "react";
import { playlistAction } from "../constants";
import { FeedbackContext } from "./FeebackContext";

export const PlaylistContext = createContext();

export function PlaylistContextProvider({ children }) {
  const { feedbackDispatch } = useContext(FeedbackContext);
  function addToPlaylist(state, playlistId, video) {
    feedbackDispatch({
      type: "SHOW",
      payload: { text: `Added to ${state[playlistId].name}`, success: true }
    });
    return {
      ...state,
      [playlistId]: {
        ...state[playlistId],
        videos: [...state[playlistId].videos, video]
      }
    };
  }
  function removeFromPlayList(state, playlistId, video) {
    const filtered = state[playlistId].videos.filter(
      (item) => item.id !== video.id
    );
    feedbackDispatch({
      type: "SHOW",
      payload: {
        text: `Removed from ${state[playlistId].name}`,
        success: false
      }
    });
    return {
      ...state,
      [playlistId]: { ...state[playlistId], videos: filtered }
    };
  }
  function playlistReducer(state, action) {
    switch (action.type) {
      case playlistAction.ADD:
        return addToPlaylist(state, action.id, action.payload);
      case playlistAction.REMOVE:
        return removeFromPlayList(state, action.id, action.payload);
      default:
        return state;
    }
  }
  const initialPlaylist = {
    watchLater: {
      name: "Watch later",
      playlistId: 1,
      videos: []
    },
    liked: {
      name: "Liked Videos",
      playlistId: 2,
      videos: []
    },
    history: {
      name: "History",
      playlistId: 3,
      videos: []
    }
  };
  const [playlist, playlistDispatch] = useReducer(
    playlistReducer,
    initialPlaylist
  );
  const value = {
    playlist,
    playlistDispatch
  };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
}
