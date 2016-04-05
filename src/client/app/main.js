import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import mainApp from './reducers';
import App from './app';

let store = createStore(mainApp);

store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);