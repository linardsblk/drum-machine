import React from "react";
import DrumPadContainer from "./components/DrumPadContainer";
import Display from "./components/Display";
import Controls from "./components/Controls";
import audioLibrary from "./audio_library";
import "./stylesheets/main.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		var storedVolume = 50;
		var storedSwitchOn = false;

		if (localStorage.getItem("volume")) {
			storedVolume = parseInt(localStorage.getItem("volume"));
		}
		if (localStorage.getItem("switchOn")) {
			storedSwitchOn = (localStorage.getItem("switchOn") === "true")
		}
		this.state = {
			bank: audioLibrary,
			displayText: "",
			switchOn: storedSwitchOn,
			volume: storedVolume
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
		this.updateDisplayText(`Power: ${!this.state.switchOn ? "On" : "Off"}`);
		localStorage.setItem("switchOn", !this.state.switchOn);
		this.setState({
			switchOn: !this.state.switchOn
		});
	};

	updateVolume = volumeLevel => {
		this.updateDisplayText(`Volume: ${volumeLevel}`);
		this.setState({
			volume: volumeLevel
		});
		localStorage.setItem("volume", volumeLevel);
	};

	render() {
		return (
			<div id="drum-machine">
				<Display displayText={this.state.displayText} />
				<Controls
					volumeLevel={this.state.volume}
					updateVolume={this.updateVolume}
					updateSwitch={this.updateSwitch}
					switchOn={this.state.switchOn}
				/>
				<DrumPadContainer
					volume={this.state.volume}
					switchOn={this.state.switchOn}
					updateText={this.updateDisplayText}
					bank={audioLibrary}
				/>
				<div id="made-by">
					Made by{" "}
					<a href="https://github.com/linardsblk/drum-machine">
						Linards
					</a>
				</div>
			</div>
		);
	}
}
