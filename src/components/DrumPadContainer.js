import React from "react";
import DrumPad from "./DrumPad";

export default class DrumPadContainer extends React.Component {

	render() {
		let drumPads = this.props.bank.map(el => (
			<DrumPad
                volume={this.props.volume}
				switchOn={this.props.switchOn}
				updateText={this.props.updateText}
				id={el.key}
				key={el.key}
				padValues={el}
			/>
		));
		return <div id="drum-pad-container">{drumPads}</div>;
	}
}
