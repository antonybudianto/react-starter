import React from 'react';
import * as css from './todo.scss';

const Todo = ({ text, completed, onTodoClick }) => (
  <div
    onClick={onTodoClick}
    className={'todo ' + (completed ? 'completed' : '')}>
      {text}
  </div>
)

export default Todo;
