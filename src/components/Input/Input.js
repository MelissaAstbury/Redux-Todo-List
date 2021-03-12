import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Input.css';

import saveTodo from '../../features/todoSlice';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`adding ${input}`);
    dispatch(
      saveTodo({
        id: Date.now(),
        item: input,
        done: false,
      })
    );
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default Input;
