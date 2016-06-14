import { combineReducers } from 'redux';
import todoApp from '../todos/reducers';

const mainApp = combineReducers({
    todoApp
});

export default mainApp;