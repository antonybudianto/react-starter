import { connect } from 'react-redux';
import Todolist from './todolist.component';
import { toggleTodo } from './todos.actions';

const mapState = (state) => {
    return {
        todos: state.todoApp.todos
    };
};

const VisibleTodolist = connect(
    mapState,
    {
        onTodoClick: toggleTodo
    }
)(Todolist);

export default VisibleTodolist;
