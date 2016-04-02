import React from 'react';
import Todo from './todo';

const App = ({ name }) => (
    <div>
        <p> Hello React by {name}!</p>
        <Todo />
    </div>
);

export default App