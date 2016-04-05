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
        default:
            return state;
    }
}
