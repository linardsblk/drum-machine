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
			switchOn: false,
			volume: 50
		};
		this.updateDisplayText = this.updateDisplayText.bind(this);
		this.updateSwitch = this.updateSwitch.bind(this);
		this.updateVolume = this.updateVolume.bind(this);
	}

	updateDisplayText = (text, timeoutMs = 1000) => {
		this.setState({
			displayText: text
		});

		setTimeout(
			() =>
				this.setState({
					displayText: ""
				}),
			timeoutMs
		);
	};

	updateSwitch = () => {
    this.updateDisplayText(`Power: ${!this.state.switchOn ? 'On' : 'Off'}`)
		this.setState({
			switchOn: !this.state.switchOn
		});
	};

	updateVolume = volumeLevel => {
    this.updateDisplayText(`Volume: ${volumeLevel}`)
		this.setState({
			volume: volumeLevel
		});
	};

	render() {
		return (
			<div id="drum-machine">
				<Display displayText={this.state.displayText} />
				<Controls
					volumeLevel={this.state.volume}
					updateVolume={this.updateVolume}
          updateSwitch={this.updateSwitch}
				/>
				<DrumPadContainer
          volume={this.state.volume}
					switchOn={this.state.switchOn}
					updateText={this.updateDisplayText}
					bank={audioLibrary}
				/>
        <div id='made-by'>Made by <a href='https://github.com/linardsblk/drum-machine'>Linards</a></div>
			</div>
		);
	}
}
