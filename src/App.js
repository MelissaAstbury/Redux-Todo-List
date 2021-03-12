import React, { useState } from 'react';
import './App.css';

import Input from './components/Input/Input';
import TodoItem from './components/TodoItem/TodoItem';

const App = () => {
  const [todoList] = useState([
    {
      id: 86544368,
      item: 'todo1',
      done: false,
    },
    {
      id: 865742368,
      item: 'todo2',
      done: true,
    },
  ]);
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-todo-container">
          {todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                name={item.item}
                done={item.done}
              />
            );
          })}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
