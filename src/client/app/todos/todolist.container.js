import { connect } from 'react-redux';
import Todolist from './todolist.component';
import { toggleTodo } from './todos.actions';

const mapState = (state) => {
    return {
        todos: state.todoApp.todos
    };
};

const mapDispatch = (dispatch) => {
    return {
        onTodoClick: (id) => dispatch(toggleTodo({ id }))
    };
};

const VisibleTodolist = connect(
    mapState,
    mapDispatch
)(Todolist);

export default VisibleTodolist;
