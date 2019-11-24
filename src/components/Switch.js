import React from "react";
var style;
export default class Switch extends React.Component {
	setStyle = () => {
		if (this.props.switchOn) {
			style = {
				float: "right",
				backgroundColor: "#4CAF50"
			};
		} else {
			style = {
				backgroundColor: "#776e65"
			};
		}
	};

	render() {
		this.setStyle();
		return (
			<div className="switch-wrap" onClick={this.props.updateSwitch}>
				<div style={style} className="switch"></div>
			</div>
		);
	}
}
