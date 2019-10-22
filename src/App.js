import React from 'react';
import DrumPadContainer from './components/DrumPadContainer';
import Display from './components/Display';
import audioLibrary from './audio_library';
import './stylesheets/main.css';
require('purecss');




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: audioLibrary,
      displayText: ""
    }
    this.updateDisplayText = this.updateDisplayText.bind(this);
  }

  updateDisplayText = (text)=> {
    this.setState({
      displayText: text
    });

    setTimeout(() => this.setState({
      displayText: ""
  }), 1000);
  }

  render() {
    return (
    <div id='drum-machine'>
      <Display displayText={this.state.displayText}/>
      <DrumPadContainer updateText={this.updateDisplayText} bank={audioLibrary}/>
    </div>
    );
  }
}
