import { createContext, useReducer } from "react";
import { playlistAction } from "../constants";

function addToPlaylist(state, playlistId, video) {
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
    (item) => item.id !== playlistId
  );
  console.log(filtered);
  return { ...state, [playlistId]: { ...state[playlistId], videos: filtered } };
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

export const PlaylistContext = createContext();

export function PlaylistContextProvider({ children }) {
  const initialPlaylist = {
    1: {
      name: "Watch later",
      videos: []
    },
    2: {
      name: "Liked Videos",
      videos: []
    },
    3: {
      name: "History",
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
