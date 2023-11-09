import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css';
import React, { useState } from 'react';

const ExpenseItem = (props) => {

  const [amount, setAmount] = useState(props.amount)

  const amountHandler = () => {
    setAmount('$100')
    console.log(amount)
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount}  location={props.location}   title={props.title} />
      <button onClick={amountHandler}>Edit Amount</button>
    </Card>
  );
}

export default ExpenseItem;

