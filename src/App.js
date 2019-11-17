import React from "react";
import DrumPadContainer from "./components/DrumPadContainer";
import Display from "./components/Display";
import Controls from "./components/Controls";
import audioLibrary from "./audio_library";
import "./stylesheets/main.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bank: audioLibrary,
			displayText: "",
			switchOn: false
		};
		this.updateDisplayText = this.updateDisplayText.bind(this);
		this.updateSwitch = this.updateSwitch.bind(this);
	}

	updateDisplayText = text => {
		this.setState({
			displayText: text
		});

		setTimeout(
			() =>
				this.setState({
					displayText: ""
				}),
			1000
		);
	};

	updateSwitch = () => {
		this.setState({
			switchOn: !this.state.switchOn
		});
	};

	render() {
		return (
			<div id="drum-machine">
				<Display displayText={this.state.displayText} />
				<Controls updateSwitch={this.updateSwitch} />
				<DrumPadContainer
					switchOn={this.state.switchOn}
					updateText={this.updateDisplayText}
					bank={audioLibrary}
				/>
			</div>
		);
	}
}
