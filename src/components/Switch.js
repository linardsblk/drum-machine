import React from "react";

export default class Switch extends React.Component {
	render() {
		return (
			<label className="switch-wrap">
				<input type="checkbox" />
				<div className="switch" onClick={this.props.updateSwitch}></div>
			</label>
		);
	}
}
