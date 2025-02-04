import React from 'react'

export default function TodoCard (props) {
    const {children,handleDeleteTodo,index, handleEditTodos} = props
    return (
        <li className='todoItem' >
        {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                handleEditTodos(index)
            }}>
            <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
            <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
        </li>
    )
}