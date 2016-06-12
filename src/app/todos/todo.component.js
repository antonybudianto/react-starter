import React from 'react';

const Todo = ({ text, completed, onTodoClick }) => (
    <div onClick={onTodoClick} className='todo'
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'gray' : 'black',
            cursor: 'pointer'
        }}>
        {text}
    </div>
)

export default Todo;
