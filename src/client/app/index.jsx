import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React by {this.props.name}!</p>;
  }
}

render(<App name='antony'/>, document.getElementById('app'));