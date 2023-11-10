import React, { useState } from 'react';

const ExpenseForm = () => {
  // State variables to hold form input values
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  // Function to handle form submission
  const submitHandler = (event) => {
    event.preventDefault(); 

    console.log('Title:', title);
    console.log('Amount:', amount);
    console.log('Location:', location);
    console.log('Date:', date);

  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Expense Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Expense Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;