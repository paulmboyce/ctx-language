import React from "react";
import LanguageContext from "./context/LanguageContext";

class FieldClass extends React.Component {
	static contextType = LanguageContext;

	renderLabel = (lang) => {
		switch (lang) {
			case "PT":
				return "Nome";
			default:
				// EN
				return "Name";
		}
	};

	render() {
		return (
			<div>
				<label htmlFor="id-name">
					{this.renderLabel(this.context.language)}
				</label>
				<input id="id-name" type="text"></input>
			</div>
		);
	}
}

export default FieldClass;
