import React, { useState } from 'react';
import MovieCard from './MovieCard';

function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (event) => {
        event.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=8de257bc1c81f081807fb95847926557&language=en-US&query=${query}&page=1&include_adult=false`;

        if (query.trim() !== '')
            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
            } catch (err) {
                console.error(err);
            }
    };

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input
                    className="input"
                    type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </>
    );
}

export default SearchMovies;
