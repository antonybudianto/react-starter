import React from 'react';
import VisibleTodolist from './todos/todolist.container';
import AddTodo from './todos/addtodo.container';

const App = (props) => (
    <div>
        <p> Hello React!</p>
        <AddTodo />
        <VisibleTodolist />
    </div>
);

export default App