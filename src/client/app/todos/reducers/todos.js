import ACTION_TYPES from '../todos.action-types';

export default function todos(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case ACTION_TYPES.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }

                return todo;
            })
        default:
            return state;
    }
}
