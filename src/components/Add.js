import React, { useState } from 'react';
import ResultCard from '../ResultCard';

export const Add = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`http://www.omdbapi.com/?apikey=9294e43&s=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True" && data.Search) {
          setSearch(data.Search);
        } else {
          setSearch([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
          {search.length > 0 && (
            <ul className="results">
              {search.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie}/>
                 
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
