// MoviesList.js
import React from 'react';
import styles from './MoviesList.module.css';  // Import styles as an object

const MovieItem = ({ movie, onDelete }) => {
  return (
    <li className={styles['movie-item']}>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.openingText}</p>
        <p>{movie.releaseDate}</p>
        <button className={styles['delete-button']} onClick={() => onDelete(movie.id)}>Delete Movie</button>
      </div>
    </li>
  );
};

const MoviesList = ({ movies, onDelete }) => {
  return (
    <ul className={styles['movies-list']}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default MoviesList;
