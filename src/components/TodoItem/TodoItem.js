import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, name, done }) => {
  return (
    <div className="todoItem">
      <p>{name}</p>
    </div>
  );
};

export default TodoItem;
