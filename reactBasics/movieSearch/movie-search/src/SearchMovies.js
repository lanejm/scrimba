import React, { useState } from "react";
import "./index.css";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/movie/550?api_key=13deff31736bd356c9f629c0f2ac1169&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card" key={movie.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                  <small>RATING: {movie.vote_average}</small>
                </p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
