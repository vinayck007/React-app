import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state  => state.counter)
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'incrementBy2' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrementBy2' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.button}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
