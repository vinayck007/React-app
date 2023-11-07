import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 4, 30)
  const expenseTitle = 'Bike Insurance'
  const expenseAmount = 124.00
  const locationOfExpenditure = 'Hotel'

  return (
    <div className="expense-item">  
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__description">
        <h2>{locationOfExpenditure}</h2>
      <div className="expense-item__amount">{expenseAmount}</div>
    </div>
    </div>
    </div>
  )
  }

export default ExpenseItem