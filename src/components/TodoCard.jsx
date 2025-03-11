import React from 'react'
/**
 * This is the code for an individual card in the todo list
 * @param {*} props passes in all the functions and variables the todo card needs
 * @returns a todo list card 
 */
export default function TodoCard (props) {
    const {children,handleDeleteTodo,index, handleEditTodos} = props
    return (
        <li className='todoItem' >
        {children}  
        <div className='actionsContainer'>
            <button onClick={() => { // creates a button that calls handleEditTodos when clicked, has the pen icon
                handleEditTodos(index) 
            }}>
            <i className="fa-regular fa-pen-to-square"></i> 
            </button> 
            <button onClick={() => { // creates a button that calls handleDeleteTodos when clicked, has the trash can icon
                handleDeleteTodo(index)
            }}>
            <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
        </li>
    )
}