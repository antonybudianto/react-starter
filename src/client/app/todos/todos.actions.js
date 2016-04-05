import ACTION_TYPES from './todos.action-types';

export const addTodo = ({ id, text }) => ({
    type: ACTION_TYPES.ADD_TODO,
    id, text
});
