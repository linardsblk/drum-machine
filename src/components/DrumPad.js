import React from 'react';
import {Howl} from 'howler';
import audioLibrary from '../audio_library';


//const bank = JSON.parse(audioLibrary);

const style = {
    fontSize: '100%',
    fontFamily: 'inherit',
    border: '0',
    padding: '0',
    overflow: 'visible',


    width: '100px',
    height: '100px',
    margin: '1px',
    textAlign: 'center'
}

export default class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        
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
            console.log(event.key);
            this.playSound(audioLibrary.filter(el => el.key === event.key).source);
        };
    }

    playSound = (source) => {
        var sound = new Howl({
            src: [source],
            volume: 1
        });
        sound.play();
    }

    render() {
        return(
                <button style={style} className="pure-u-1-3" id='drum-pad'>
                {this.props.text}
                </button>
        )
    }
}