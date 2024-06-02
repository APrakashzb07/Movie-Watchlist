import React, { createContext, useReducer, useEffect } from "react";
import movieReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (imdbID) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: imdbID });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        moveToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
