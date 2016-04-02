import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            todo: {},
            todos: []
        };
    }

    addTodo() {
        this.setState({
            index: this.state.index + 1,
            todos: [
                ...this.state.todos,
                {
                    id: this.state.index,
                    text: this.state.todo.text
                }
            ],
            todo: {}
        });
    }

    textChanged(e) {
        this.setState({
            todo: {
                text: e.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.todo.text} onChange={this.textChanged.bind(this)} />
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map(todo => (
                            <li key={todo.id}>{todo.text}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Todo