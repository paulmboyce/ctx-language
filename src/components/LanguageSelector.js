import React from "react";

import { MyConnector } from "../myredux";

const LanguageSelector = (props) => {
	console.log("LanguageSelector PROPS: ", props);
	return (
		<div className="ui segment inverted">
			<span>Select a language:</span>
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

export default MyConnector()(LanguageSelector);
