import React from 'react';

import './PersonelDetails.css';

const Person = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="person-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default Person;