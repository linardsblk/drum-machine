import React from 'react';
import DrumPad from './DrumPad';


export default class DrumPadContainer extends React.Component {
    constructor(props) {
        super(props);

        this.displayTextCallback = this.displayTextCallback.bind(this);
    }
    displayTextCallback = (textFromDrumPad) => {
        this.props.updateText(textFromDrumPad);
    };

    render() {
        let drumPads = this.props.bank.map(el => <DrumPad updateDisplayText={this.displayTextCallback} id={el.key} key={el.key} padValues={el}/>)

        return (
            <div id='drum-pad-container'>
                {drumPads}
            </div>
        )
    }
}