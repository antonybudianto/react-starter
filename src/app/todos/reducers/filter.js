import ACTION_TYPES from '../todos.action-types';

export default function filter(
    state = {
        completed: true
    }, action) {
    switch (action.type) {
        case ACTION_TYPES.FILTER_TODO:
            return {
                completed: action.completed
            }
        default:
            return state;
    }
}
