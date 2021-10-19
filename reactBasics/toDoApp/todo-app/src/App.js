import React from 'react'
import './App.css';
import ToDoItem from './TodoItem'
import todosData from "./todoData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  
  render() {
  const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>)

  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
  }
}

export default App;
