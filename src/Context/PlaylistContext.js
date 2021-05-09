import { createContext, useReducer, useState } from "react";
import { playlistAction } from "../constants";

function addToPlaylist(state, playlistName, video) {
  return { ...state, [playlistName]: [...state[playlistName], video] };
}
function removeFromPlayList(state, playlistName, video) {
  const filtered = state[playlistName].filter((item) => video.id !== item.id);
  return { ...state, [playlistName]: filtered };
}
function playlistReducer(state, action) {
  switch (action.type) {
    case playlistAction.ADD:
      return addToPlaylist(state, action.name, action.payload);
    case playlistAction.REMOVE:
      return removeFromPlayList(state, action.name, action.payload);
    default:
      return state;
  }
}

export const PlaylistContext = createContext();

export function PlaylistContextProvider({ children }) {
  const initialPlaylist = {
    watchLater: [],
    liked: [],
    history: []
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
