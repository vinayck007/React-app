import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import Loader from './components/Loader';
import MovieForm from './components/MovieForm';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [retryInterval, setRetryInterval] = useState(null);
  const [error, setError] = useState(null);
  const [newMovie, setNewMovie] = useState({ title: '', openingText: '', releaseDate: '' });


  const retry = useCallback(() => {
    setRetryInterval(setInterval(fetchMoviesHandler, 5000));
  }, []);

  const cancelRetry = useCallback(() => {
    clearInterval(retryInterval);
    setRetryInterval(null);
    setError(null);
  }, [retryInterval]);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something Went Wrong! Retrying...');
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
      retry();
    } finally {
      setIsLoading(false);
    }
  }, [retry]);

  useEffect(() => {
    fetchMoviesHandler(); // Initial fetch
  }, [fetchMoviesHandler]);

  const addMovieHandler = (newMovieData) => {
    // Add the new movie to the list with a unique id (using timestamp)
    const newMovie = {
      id: Date.now(),
      title: newMovieData.title,
      openingText: newMovieData.openingText,
      releaseDate: newMovieData.releaseDate,
    };
  
    // Update the local state immediately
    setMovies((prevMovies) => [...prevMovies, newMovie]);

    console.log('Added Movie:', newMovie);

    setNewMovie({ title: '', openingText: '', releaseDate: '' });
  }
  

  return (
    <React.Fragment>
      <section>
      <MovieForm onAddMovie={addMovieHandler} />

        <button onClick={() => fetchMoviesHandler()}>
          Fetch Movies
        </button>
      </section>
      <section>
        {isLoading && <Loader />}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && movies.length === 0 && retryInterval && (
          <p>Retrying...</p>
        )}
        {!isLoading && movies.length === 0 && !error && !retryInterval && (
          <p>No Movies Found!</p>
        )}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {retryInterval && (
          <button onClick={cancelRetry} disabled={isLoading}>
            Cancel Retry
          </button>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
