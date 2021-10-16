import './App.css';
import ToDoItem from './TodoItem'
import todosData from "./todoData"

function App() {
  const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>)

  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}

export default App;
