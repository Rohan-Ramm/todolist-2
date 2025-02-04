import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"

function App() {
  
  const [todos,setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }
  function handleAddTodos(newTodo) {
    const newTodolist = [...todos,newTodo]
    persistData(newTodolist)
    setTodos(newTodolist)
  }

  function handleDeleteTodo(index) {
    const newTodolist = todos.filter((todo,todoIndex) =>{
      return todoIndex !== index
    })
    persistData(newTodolist)
    setTodos(newTodolist)
  }
 
  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return 
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <main>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos}/>
      <TodoList handleEditTodos = {handleEditTodos} todoValue = {todoValue} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </main>
  )
}

export default App
