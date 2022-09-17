import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [ todos, setTodos ] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = newTodo => {
    if ( newTodo !== "") {
      setTodos([...todos, {text: newTodo, complete: false}]);
    }
  };

  const toggleComplete: ToggleComplete = celectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === celectedTodo){
        return {...todo, complete: !todo.complete};
      }
      return todo;
    });
    setTodos(updatedTodos);
  }; 

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;
