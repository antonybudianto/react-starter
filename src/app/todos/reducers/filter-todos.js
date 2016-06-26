import ACTION_TYPES from '../todos.action-types';

export default function filterTodos(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.FILTER_TODO:
            if (action.completed) {
                return state;
            }

            return state.filter(
                todo => todo.completed === action.completed
            );
        default:
            return state;
    }
}
