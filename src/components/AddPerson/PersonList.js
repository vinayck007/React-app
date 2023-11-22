import React from 'react';

import './PersonList.css';

const PersonList = ({ persons, onDeletePerson }) => {
  // Check if persons is undefined or null before mapping
  if (!persons || persons.length === 0) {
    return <p>No person found. Maybe add one?</p>;
  }

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} ({person.age} years old)
          <button onClick={() => onDeletePerson(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList