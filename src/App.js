import React, { useState, useEffect } from 'react';
import MoviesList from './components/MoviesList';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [error, setError] = useState(null);
  const [fetchClicked, setFetchClicked] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong ... Retrying...');
      }

      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));

      setMovies(transformedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError(error.message);
      setIsRetrying(true);

      setTimeout(() => {
        setIsRetrying(false);
        fetchMoviesHandler();
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (fetchClicked) {
      fetchMoviesHandler();
      setFetchClicked(false);
    }
  }, [fetchClicked]);

  return (
    <React.Fragment>
      <section>
        <button onClick={() => setFetchClicked(true)} disabled={isRetrying}>
          Fetch Movies
        </button>
      </section>
      <section>
        {isLoading && <Loader />}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && movies.length === 0 && !error && !isRetrying && (
          <p>No Movies Found!</p>
        )}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
