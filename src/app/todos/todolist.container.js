import { connect } from 'react-redux';
import Todolist from './todolist.component';
import { toggleTodo, changeFilter } from './todos.actions';
import filterTodos from './reducers/filter-todos';
import ACTION_TYPES from './todos.action-types';

const mapState = (state) => {
    return {
        showCompleted: state.todoApp.filter.completed,
        todos: filterTodos(state.todoApp.todos, {
            type: ACTION_TYPES.FILTER_TODO,
            completed: state.todoApp.filter.completed
        })
    };
};

const VisibleTodolist = connect(
    mapState,
    {
        onTodoClick: toggleTodo,
        onChangeFilter: changeFilter
    }
)(Todolist);

export default VisibleTodolist;
