import { connect } from 'react-redux';
import Todolist from './todolist.component';

const mapState = (state) => {
    return {
        todos: state.todoApp.todos
    };
};

const mapDispatch = (dispatch) => {
    return {
    };
};

const VisibleTodolist = connect(
    mapState,
    mapDispatch
)(Todolist);

export default VisibleTodolist;
