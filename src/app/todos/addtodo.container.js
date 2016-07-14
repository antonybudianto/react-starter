import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './todos.actions';

let index = 0;
let AddTodo = ({ dispatch }) => {
    let input;

    return (
      <div>
        <input ref={node => {
              input = node
        }} />
        <button onClick={() => {
            dispatch(addTodo({
                text: input.value,
                id: index++
            }))
        }}>Add Todo</button>
      </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo;