import React from 'react';
import Todo from './todo.component';

const Todolist = ({ todos, onTodoClick }) => (
    <div className='todolist'>
        {
            todos.map(todo =>
                <Todo onTodoClick={() => onTodoClick({id: todo.id})}
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}>
                </Todo>
            )
        }
    </div>
)

export default Todolist;
