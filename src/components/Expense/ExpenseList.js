import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {

  if(props.items.length === 0) {
    return <h2 className='expense-list__fallback'>Nothing to show here!</h2>
  }

  else if(props.items.length === 1) {
  return(
    <><ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          location={expense.location}
          amount={expense.amount}
          date={expense.date} />
      ))}
    </ul><ul className="expense-list">
        <h2 className="expense-list__fallback">Only single Expense here. Please add more...</h2>
      </ul></>
  ) 
  }

  else {
    return(
      <ul className="expense-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            location={expense.location}
            amount={expense.amount}
            date={expense.date} />
        ))}
      </ul>
    )
  }
}

export default ExpenseList