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
		<div>
			<label htmlFor="id-name">
				<LanguageContext.Consumer>
					{(ctx) => renderLabel(ctx.language)}
				</LanguageContext.Consumer>
			</label>
			<input id="id-name" type="text"></input>
		</div>
	);
};

export default Field;
