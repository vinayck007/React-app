// MovieForm.js
import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({ title: '', openingText: '', releaseDate: '' });

  const addMovieHandler = (event) => {
    event.preventDefault();

    // Validate input before adding the movie
    if (newMovie.title.trim() === '' || newMovie.openingText.trim() === '' || newMovie.releaseDate.trim() === '') {
      alert('Please enter title, opening text, and release date.');
      return;
    }

    // Pass the new movie data to the parent component
    onAddMovie({
      title: newMovie.title,
      openingText: newMovie.openingText,
      releaseDate: newMovie.releaseDate,
    });

    // Clear the form after adding the movie
    setNewMovie({ title: '', openingText: '', releaseDate: '' });
  };

  return (
    <form onSubmit={addMovieHandler}>
      <label>
        Title:
        <input
          type="text"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
      </label>
      <label>
        Opening Text:
        <input
          type="text"
          value={newMovie.openingText}
          onChange={(e) => setNewMovie({ ...newMovie, openingText: e.target.value })}
        />
      </label>
      <label>
        Release Date:
        <input
          type="date"
          value={newMovie.releaseDate}
          onChange={(e) => setNewMovie({ ...newMovie, releaseDate: e.target.value })}
        />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
