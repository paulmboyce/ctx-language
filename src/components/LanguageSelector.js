import React from "react";

import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const LanguageSelector = (props) => {
	return (
		<LanguageContext.Consumer>
			{({ setLanguage }) => {
				return (
					<ColorContext.Consumer>
						{({ setColor }) => {
							return (
								<div className="ui segment inverted">
									<span>Select a language: </span>
									<button
										className="ui button inverted"
										onClick={() => {
											setLanguage("EN");
											setColor("BLUE");
										}}
									>
										US
									</button>
									<button
										className="ui button inverted"
										onClick={() => {
											setLanguage("PT");
											setColor("GREEN");
										}}
									>
										Portuguese
									</button>
									<br />{" "}
									<span style={{ fontWeight: 700 }}>
										Showing: {props.language}
									</span>
								</div>
							);
						}}
					</ColorContext.Consumer>
				);
			}}
		</LanguageContext.Consumer>
	);
};

export default LanguageSelector;
