import React, { useState, useEffect } from 'react';
import PersonList from './components/AddPerson/PersonList';
import PersonInput from './components/AddPerson/PersonInput';
import ErrorModal from './components/UI/ErrorModal';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState(null);
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredCollegeName, setEnteredCollegeName] = useState('');

  useEffect(() => {
    if (!enteredCollegeName) {
      showError("Please provide a college name.");
    } else {
      closeModal();
    }
  }, [enteredCollegeName]);

  const addPersonHandler = (enteredName, enteredAge, enteredCollegeName) => {
    // Validate if both name and age are provided
    if (!enteredName || !enteredAge) {
      // Handle case where either name or age is missing
      showError("Please provide both name and age.");
      return;
    }

    const name = enteredName.trim();
    const age = parseInt(enteredAge, 10);
    const college = enteredCollegeName.trim();

    // Validate if age is a positive number
    if (isNaN(age) || age < 0 || age > 120) {
      showError("Please enter a valid, positive age less than 120.");
      return;
    }

    // Validate if college name is provided
    if (!college) {
      showError("Please provide a college name.");
      return;
    }

    const newPerson = {
      name: name,
      age: age,
      college: college,
      id: Math.random().toString(),
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
        <PersonInput
          onAddPerson={(name, age, college) => addPersonHandler(name, age, college)}
          enteredName={enteredName}
          setEnteredName={setEnteredName}
          enteredAge={enteredAge}
          setEnteredAge={setEnteredAge}
          enteredCollegeName={enteredCollegeName}
          setEnteredCollegeName={setEnteredCollegeName}
        />
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
