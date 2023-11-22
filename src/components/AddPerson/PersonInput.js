import React, { useState } from 'react';
import './PersonInput.css';

const PersonInput = ({ onAddPerson }) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    onAddPerson(enteredName, enteredAge);

    // Clear the input fields after submitting
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={(e) => setEnteredAge(e.target.value)}
        />
      </div>
      <button type="submit">Add Person</button>
    </form>
  );
};


export default PersonInput;
