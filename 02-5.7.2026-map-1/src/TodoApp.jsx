import { useState } from "react";
export default function TodoApp() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')
  
    function addTodo() {
      const newTodo = { id: Date.now(), text }
      setTodos([...todos, newTodo])
      setText('')
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
      }
    
    function handleSetText(e) {
      setText(e.target.value)
    }
  
    return (
      <div>
        <input value={text} onChange={handleSetText} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text} <button onClick={() => removeTodo(todo.id)}>Remove</button></li>
          ))}
        </ul>
      </div>
    )
  }