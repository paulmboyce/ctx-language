import React from "react";

const LanguageSelector = (props) => {
	return (
		<div className="ui segment inverted">
			<span>Select a language: </span>
			<button
				className="ui button inverted"
				onClick={() => props.onLanguageChange("EN", "BLUE")}
			>
				US
			</button>
			<button
				className="ui button inverted"
				onClick={() => props.onLanguageChange("PT", "GREEN")}
			>
				Portuguese
			</button>
			<br /> <span style={{ fontWeight: 700 }}>Showing: {props.language}</span>
		</div>
	);
};

export default LanguageSelector;
