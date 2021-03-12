import './App.css';

import Input from './components/Input/Input';

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-todo-container"></div>
        <Input />
      </div>
    </div>
  );
};

export default App;
