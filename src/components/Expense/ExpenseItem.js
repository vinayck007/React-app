import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;

