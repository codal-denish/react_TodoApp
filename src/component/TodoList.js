import React from 'react'
import Todo from './Todo';

function TodoList({ ptodos,psetTodos }) {
    return (
        <div>
            {ptodos.map((alltodos) => (
                <Todo text={alltodos.text}
                key={alltodos.id}
                pid={alltodos.id}
                palltodos={alltodos}
                ppsetTodos={psetTodos}
                pptodos={ptodos}
             />
            ))}
        </div>
    )
}

export default TodoList;
