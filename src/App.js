import { useSelector } from 'react-redux';
import './App.css';

import Input from './components/Input/Input';
import TodoItem from './components/TodoItem/TodoItem';
import { selectTodoList } from './features/todoSlice';

const App = () => {
  const todoList = useSelector(selectTodoList);

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
