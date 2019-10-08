import React from 'react';
import style from '../stylesheets/main.css';
/*const style = {
    fontSize: '100%',
    fontFamily: 'inherit',
    padding: '0',
    overflow: 'visible',

    backgroundColor: 'gray',
    width: '100px',
    height: '100px',
    margin: '1px',
    textAlign: 'center',
    border: '1px solid black'
}*/

export default class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleKeydown = this.handleKeydown.bind(this);
        this.playSound     = this.playSound.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeydown, false);
    };
    
      componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeydown, false);
    };
    
    handleKeydown = (event) =>  {
        if(event && event.keyCode && 
            event.keyCode === Number(this.props.padValues.keycode)) 
        {
            this.playSound();
            
        };
    };

    playSound = () => {
        const audio = document.getElementById(this.props.padValues.key);
        audio.currentTime = 0;
        var playPromise = audio.play();

        if(playPromise !== undefined) {
            playPromise.then(_ =>{
                playPromise.pause();
            })
            .catch(error => {});
        }
        this.props.updateDisplayText(this.props.padValues.text);
    };

    render() {
        return(
            <div className='drum-pad' onClick={this.playSound} id={this.props.padValues.source}>
                {this.props.padValues.key}
                <audio id={this.props.padValues.key} className='clip' src={this.props.padValues.source}></audio>
            </div>
        )
    }
}