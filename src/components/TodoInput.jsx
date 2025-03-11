import React, { useState } from 'react'
/**
 * Allows the user to add a new value to the todo list
 * @param {*} props the functions handleAddTodos(adds todos to the todo list), todovalue to hold the new value, and setTodoValue to change the todoValue
 * @returns 
 */
export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props
    
    return (
        <header>
            <input value={todoValue} onChange={(e) =>{
                setTodoValue(e.target.value) //if the input value ever changes todovalue becomes that new value
            }}  
            placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue) //once the add button is clicked handleaddtodos is called on whatever value was in the input
                setTodoValue('')
            }}> Add </button>
        </header>
    )
}