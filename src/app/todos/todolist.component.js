import React from 'react';
import Todo from './todo.component';

const Todolist = ({ allTodos, todos, showCompleted, onTodoClick, onChangeFilter}) => (
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
      <div><strong>{todos.length}</strong> current items.
        <strong> {allTodos.filter((todo) => todo.completed).length}</strong> completed items.
      { allTodos.length !== todos.length ?
        <span>
          <strong> {allTodos.length}</strong> total items.
        </span> : null
      }
      </div>
    </div>
  </div>
)

export default Todolist;
