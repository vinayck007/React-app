import React, { useCallback, useState, useMemo } from "react";
import Button from './UI/Button/Button'
import DemoList from "./components/Demo/DemoList";
import classes from './App.module.css';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleOrderHandler = useCallback(() => {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  }, []);

  const initialItems = useMemo(() => [5, 6, 1, 9, 8], []);

  console.log('App Running');

  return (
    <div className={classes.app}>
      <DemoList title={listTitle} items={initialItems} isDescending={isDescending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleOrderHandler}>
        {isDescending ? 'Change to Ascending Order' : 'Change to Descending Order'}
      </Button>
    </div>
  );
}

export default App;
