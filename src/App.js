import React, {useState}  from 'react';
import './App.css';
import form from './components/form';
import Display from './components/Display';

function App() {

const [newTodo, setNewTodo] = useState("");
const [TodoItems, setTodoItems] = useState([]);

const addTodo = (Todo) => {
    setTodoItems([...TodoItems, Todo]);
    setNewTodo("");
}

const deleteTodo = (deletei) =>{
  const filteredTodos = TodoItems.filter((todo, i)) 
    return i !== deletei;
  }
  setTodoItems(filteredTodos);


  return (
    <div className="App">
      <Form addTodo={addTodo}/>
      <Display TodoItems={TodoItems} deleteTodo={deleteTodo}/>
     
    </div>
  );
  }

export default App;
