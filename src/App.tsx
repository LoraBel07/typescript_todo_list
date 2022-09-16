import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';

function App() {
  const [ todos, setTodos ] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = newTodo => {
    if ( newTodo !== "") {
      setTodos([...todos, {text: newTodo, complete: false}]);
    }
  }
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
