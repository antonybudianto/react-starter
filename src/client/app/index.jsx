import React from 'react';
import {render} from 'react-dom';

const App = ({ name }) =>
    <p> Hello React by {name}!</p>

render(<App name='Antony'/>, document.getElementById('app'));