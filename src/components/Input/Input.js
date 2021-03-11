import React, { useState } from 'react';
import './Input.css';

const Input = () => {
  const [input, setInput] = useState('');

  const addTodo = () => {};

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChnage={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default Input;
