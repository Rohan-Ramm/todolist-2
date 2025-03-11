import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"

function App() {
  //creates a todo variable and a setTodos function to dynamically update it
  const [todos,setTodos] = useState([])
  //creates a todovalue variable and a setTodoValue to dynamically update it
  const [todoValue, setTodoValue] = useState('')
  /**
   * Stores a list of todo objects in local storage as a value with the key 'todo'
   * @param {*} newList  the list that will be stored
   */
  function persistData(newList) {
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }
  /**
   * Adds an item to the todolist
   * @param {*} newTodo the new item to do
   */
  function handleAddTodos(newTodo) {
    const newTodolist = [...todos,newTodo]
    persistData(newTodolist)
    setTodos(newTodolist)
  }
  /**
   * Removes the value at the index passed in from the todo list
   * @param {*} index the index the value to be removed is at
   */
  function handleDeleteTodo(index) {
    const newTodolist = todos.filter((todo,todoIndex) =>{
      return todoIndex !== index
    })
    persistData(newTodolist)
    setTodos(newTodolist)
  }
  /**
   * Removes the value at the index passed in and then copies its text into the input receptacle to be changed
   * @param {*} index the index of the value to be changed
   */
  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index)
  }
  //react hook that runs as soon as the component starts up
  useEffect(() => {
    // if there is no local storage then exit immediately
    if(!localStorage) {
      return 
    }
    let localTodos = localStorage.getItem('todos')
    //if there is no list of todos found then exit immediately
    if (!localTodos) {
      return
    }
    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos //converts the stored string into the local todos object
    setTodos(localTodos) //uses the usestate to set the todos variable to the newly initalized local todos object
  }, [])
  /**
   * forms a facade for the code and puts it onto the frontend
   */
  return (
    <main>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos}/>
      <TodoList handleEditTodos = {handleEditTodos} todoValue = {todoValue} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </main>
  )
}

export default App
