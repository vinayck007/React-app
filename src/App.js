import ExpenseItem from './components/Expense/ExpenseItem';
import React, { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: 'Shop'
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: 'Hyper Market'
    },
    {
      id: 'e3',
      title: 'Movie',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: 'Theatre'
    },
    {
      id: 'e4',
      title: 'New York',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: 'Travel'
    },
  ]);

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const expenseItems = expenses.map((expense) => (
    <ExpenseItem
      id={expense.id} 
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.locationOfExpenditure}
      onDelete={deleteExpenseHandler}
    />
  ));

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseItems}
    </div>
  );
};

export default App;
