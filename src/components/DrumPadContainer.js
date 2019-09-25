import React from 'react';
import DrumPad from './DrumPad';

export default function DrumPadContainer(props) {
    return <div id='drum-pad-container'>
        <div className='pure-g'>
            <DrumPad action={props.play} text={'Q'}/>
            <DrumPad text={'W'}/>
            <DrumPad text={'E'}/>
        </div>
        <div className='pure-g'>
            <DrumPad text={'A'}/>
            <DrumPad text={'S'}/>
            <DrumPad text={'D'}/>
        </div>
        <div className='pure-g'>
            <DrumPad text={'Z'}/>
            <DrumPad text={'X'}/>
            <DrumPad text={'C'}/>
        </div>
      </div>
}