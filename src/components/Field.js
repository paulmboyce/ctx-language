import { React } from "react";

import LanguageContext from "../context/LanguageContext";

const Field = () => {
	const renderLabel = (lang) => {
		switch (lang) {
			case "PT":
				return "Nome";
			default:
				// EN
				return "Name";
		}
	};
	return (
		<div className="field">
			<LanguageContext.Consumer>
				{(language) => {
					return <label htmlFor="id-name">{renderLabel(language)}:</label>;
				}}
			</LanguageContext.Consumer>
			<input id="id-name" type="text"></input>
		</div>
	);
};

export default Field;
