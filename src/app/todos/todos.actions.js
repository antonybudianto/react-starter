import ACTION_TYPES from './todos.action-types';

export const addTodo = ({ id, text }) => ({
    type: ACTION_TYPES.ADD_TODO,
    id, text
});

export const toggleTodo = ({ id }) => ({
    type: ACTION_TYPES.TOGGLE_TODO,
    id
});

export const changeFilter = (completed) => ({
    completed,
    type: ACTION_TYPES.FILTER_TODO
});
