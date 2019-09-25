import React from 'react';
import DrumPadContainer from './components/DrumPadContainer';
import {Howl} from 'howler';
require('purecss');



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    }

    this.handleKeydown = this.handleKeydown.bind(this);
    this.playSound     = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keyPress", this.handleKeydown, false);
  }

  handleKeydown = (event) =>  {
    if(event) {
      this.setState({
        key: event.key
      });
    }
    this.playSound();
  }

  playSound = () => {
    var sound = new Howl({
      src: ['/audio/808-OpenHiHats10.wav'],
      volume: 1
    });
    
    sound.play();
  }

  render() {
    return (
    <div id='drum-machine'>
      <DrumPadContainer play={this.playSound}/>
    </div>
    );
  }
}
