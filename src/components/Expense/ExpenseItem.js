import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css';
import React from 'react';

const ExpenseItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
      <button onClick={deleteHandler}>Edit Amount</button>
    </Card>
  );
}

export default ExpenseItem;

