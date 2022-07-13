import React, {useState} from 'react'

const form = (props) => {
    const {addTodo} = props;
    const [newTodo, setNewTodo] = useState("")
    const [TodoItems, setTodoItems] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(newTodo);
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
            <button>Add Me!!</button>
        </form>

    </div>
  )
}

export default form