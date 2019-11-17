import React from "react";
import Switch from "./Switch";

export default class Controls extends React.Component {
	render() {
		return (
			<div id="controls">
				<Switch updateSwitch={this.props.updateSwitch} />
			</div>
		);
	}
}
