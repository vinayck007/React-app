import React, { useState } from 'react';
import PersonList from './components/AddPerson/PersonList';
import PersonInput from './components/AddPerson/PersonInput';
import ErrorModal from './components/UI/ErrorModal';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState(null);

  const addPersonHandler = (enteredName, enteredAge) => {
    // Validate if both name and age are provided
    if (!enteredName || !enteredAge) {
      // Handle case where either name or age is missing
      showError("Please provide both name and age.");
      return;
    }

    const name = enteredName.trim();
    const age = parseInt(enteredAge, 10);

    // Validate if age is a positive number
    if (isNaN(age) || age < 0 || age > 120) {
      showError("Please enter a valid, positive age less than 120.");
      return;
    }

    const newPerson = {
      name: name,
      age: age,
      id: Math.random().toString(), // A simple way to generate a unique ID
    };

    setPersons((prevPersons) => [...prevPersons, newPerson]);
    showSuccess("Person details added successfully!");
  };

  const deletePersonHandler = (personId) => {
    setPersons((prevPersons) => {
      const updatedPersons = prevPersons.filter((person) => person.id !== personId);
      return updatedPersons;
    });
  };

  const showError = (message) => {
    setError({ type: 'error', message: message });
  };

  const showSuccess = (message) => {
    setError({ type: 'success', message: message });
  };

  const closeModal = () => {
    setError(null);
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No person found. Maybe add one?</p>
  );

  if (persons.length > 0) {
    content = (
      <PersonList persons={persons} onDeletePerson={deletePersonHandler} />
    );
  }

  return (
    <div>
      <section id="person-form">
        <PersonInput onAddPerson={addPersonHandler} />
      </section>
      <section id="person">
        {content}
      </section>
      {error && (
        <ErrorModal
          message={error.message}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
