const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
   
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
   
    default:
      return state;
  }
};

export default movieReducer;
