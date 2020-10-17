import React, { useState } from 'react';
import './stylesheet.css';
import Form from './component/Form';
import TodoList from './component/TodoList';

//import Main from './component/Main.js';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <div>Testing: {input} </div>
      <Form psetInput={setInput}
        pinput={input}
        ptodos={todos}
        psetTodos={setTodos} />
     <TodoList ptodos={todos}
     psetTodos={setTodos} />
    </div>
  );
}

export default App;
