import { useState } from 'react'
import List from './components/List'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    setTodos([...todos, {
      id: todos.length,
      name: e.target[0].value.trim(),
      done: false
    }]);
  };

  const handleDelete = (index) => {
    const filterTodos = todos.filter(todo => todo.id !== index);
    setTodos(filterTodos);
  }

  return (
    <>
      <div className="card">
        <AddTodo onHandleSubmit={onHandleSubmit} />
        <List todos={todos} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
