import { React } from "react";
import LanguageContext from "./context/LanguageContext";

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
		<LanguageContext.Consumer>
			{function ({ language }) {
				return (
					<div>
						<label htmlFor="id-name">{renderLabel(language)}</label>
						<input id="id-name" type="text"></input>
					</div>
				);
			}}
		</LanguageContext.Consumer>
	);
};

export default Field;
