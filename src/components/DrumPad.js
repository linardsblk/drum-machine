import React from 'react';

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
export default function DrumPad(props) {
    return  <button onClick={props.action} style={style} className="pure-u-1-3" id='drum-pad'>
                {props.text}
            </button>;
}