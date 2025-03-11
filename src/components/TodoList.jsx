import React from 'react'
import TodoCard from './TodoCard'
/**
 * Returns a new list of todocards 
 * @param {*} props the list of items to put into the todo list and their indexes, plus everything the todocard object will need
 * @returns a todo list
 */
export default function TodoList(props) {
    const {todos} = props
    return (
        <ul className='main'>
            { todos.map((todo,todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
        })}
        </ul>
    )
}