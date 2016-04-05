import React from 'react';
import Todo from './todo.component';

const Todolist = ({ todos }) => (
    <div className='todolist'>
        {
            todos.map(todo =>
                <Todo key={todo.id} text={todo.text}></Todo>
            )
        }
    </div>
)

export default Todolist;
