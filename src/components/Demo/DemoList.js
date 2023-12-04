import React, { useMemo } from "react";
import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { title, items, isDescending } = props;

  const sortedList = useMemo(() => {
    console.log("Items Sorted");
    return isDescending
      ? [...items].sort((a, b) => b - a) // Descending order
      : [...items].sort((a, b) => a - b); // Ascending order
  }, [items, isDescending]);

  console.log('DemoList Running');

  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoList;
