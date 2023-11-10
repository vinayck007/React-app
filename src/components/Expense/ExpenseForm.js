import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // State variables to hold form input values
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Function to handle form submission
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      location: enteredLocation,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Location</label>
          <input type='text' onChange={locationChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;