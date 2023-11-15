import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // State variables to hold form input values
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);


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

  //Function to handle Submission
  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      location: enteredLocation,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredLocation('')
    setEnteredAmount('')
    setEnteredDate('')
    setFormVisible(false);
    setFormSubmitted(true);

  };

  const showForm = () => {
    setFormVisible(true);
    setFormSubmitted(false);
  };

  return (
    <div className='new-expense__controls'>
      {!formVisible && !formSubmitted && (
        <button onClick={showForm}>Add New Expense</button>
      )}

      {formVisible && (
      <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Location</label>
          <input type='text'
            value={enteredLocation}
            onChange={locationChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
      )}

      {formSubmitted && (
        <p>Expense submitted! <button onClick={showForm}>Add Another Expense</button></p>
      )}
    </div>
  );
};

export default ExpenseForm;