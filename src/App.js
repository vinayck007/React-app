// App.js
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

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://react-movie-765ec-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something Went Wrong! Retrying...');
      }

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch('https://react-movie-765ec-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to add the movie');
      }

      const data = await response.json();
      const newMovieWithId = { id: data.name, ...movie };

      setMovies((prevMovies) => [...prevMovies, newMovieWithId]);

      console.log('Added Movie:', newMovieWithId);

      setNewMovie({ title: '', openingText: '', releaseDate: '' });
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const deleteMovieHandler = async (movieId) => {
    try {
      const response = await fetch(`https://react-movie-765ec-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${movieId}.json`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the movie');
      }

      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));

      console.log('Deleted Movie:', movieId);
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <React.Fragment>
      <section>
        <MovieForm onAddMovie={addMovieHandler} />

        <button onClick={() => fetchMoviesHandler()}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <Loader />}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && movies.length === 0 && retryInterval && <p>Retrying...</p>}
        {!isLoading && movies.length === 0 && !error && !retryInterval && (
          <p>No Movies Found!</p>
        )}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} onDelete={deleteMovieHandler} />}
      </section>
    </React.Fragment>
  );
}

export default App;
