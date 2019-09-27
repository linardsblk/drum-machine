import React from 'react';
import DrumPadContainer from './components/DrumPadContainer';
require('purecss');



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    }
  }

  

  render() {
    return (
    <div id='drum-machine'>
      <DrumPadContainer/>
    </div>
    );
  }
}
