import React from "react";

export default class Volume extends React.Component {
    handleVolume = event => {
        this.props.updateVolume(event.target.value);
    }
	render() {
		return (
			<input className='volume-slider'
				onChange={this.handleVolume}
				type="range"
				min="0"
				max="100"
				value={this.props.volumeLevel}
			></input>
		);
	}
}
