import React from 'react';
import Todo from './todo.component';

const Todolist = ({ todos, showCompleted, onTodoClick, onChangeFilter}) => (
    <div className='todolist'>
        <label>
            <input
                type="checkbox"
                defaultChecked={showCompleted}
                onClick={onChangeFilter}
            /> Show completed
        </label>
        <div>
        {
            todos.map(todo =>
                <Todo
                    key={todo.id}
                    onTodoClick={() => onTodoClick(todo)}
                    text={todo.text}
                    completed={todo.completed}
                    >
                </Todo>
            )
        }
        </div>
    </div>
)

export default Todolist;
