import React from "react";
import Switch from "./Switch";
import Volume from "./Volume";

export default class Controls extends React.Component {
	render() {
		return (
			<div id="controls">
				<Switch
					switchOn={this.props.switchOn}
					updateSwitch={this.props.updateSwitch}
				/>
				<Volume
					volumeLevel={this.props.volumeLevel}
					updateVolume={this.props.updateVolume}
				/>
			</div>
		);
	}
}
