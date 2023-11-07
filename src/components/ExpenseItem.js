import './ExpenseItem.css'

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">  
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__description">
        <h2>{props.location}</h2>
      <div className="expense-item__amount">{props.amount}</div>
    </div>
    </div>
    </div>
  )
  }

export default ExpenseItem