import ExpenseItem from './components/Expense/ExpenseItem';
import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expense/Expenses'

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Shop'
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: 'Hyper Market'
    },
    {
      id: 'e3',
      title: 'Movie',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Theatre'
    },
    {
      id: 'e4',
      title: 'New York',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Travel'
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
      location={expense.location}
      onDelete={deleteExpenseHandler}
    />
  ));

  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
