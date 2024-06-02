import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "./context/GlobalState";

const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    
    watchlist,
    
  } = useContext(GlobalContext);

  // Check if the movie is already in the watchlist
  let storedMovie = watchlist.find(o => o.imdbID === movie.imdbID);

  

  // Disable the button if the movie is already in the watchlist
  const watchlistDisabled = storedMovie
  ? true
  : false;



  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img
            src={movie.Poster}
            alt={`${movie.Title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.Year}</Moment>
          </h4>
        </div>
        <div className="controls">
          <button className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}>
            Add to Watchlist
          </button>

           
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
