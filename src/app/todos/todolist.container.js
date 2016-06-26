import { connect } from 'react-redux';
import Todolist from './todolist.component';
import { toggleTodo, changeFilter } from './todos.actions';
import filterTodos from './reducers/filter-todos';

const mapState = (state) => ({
    showCompleted: state.todoApp.filter.completed,
    allTodos: state.todoApp.todos,
    todos: filterTodos(state.todoApp.todos,
        changeFilter(state.todoApp.filter.completed))
});

const VisibleTodolist = connect(
    mapState,
    {
        onTodoClick: toggleTodo,
        onChangeFilter: (ev) => changeFilter(ev.target.checked)
    }
)(Todolist);

export default VisibleTodolist;
