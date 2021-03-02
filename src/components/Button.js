import { React } from "react";

import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const Button = () => {
	const renderButtonText = (lang) => {
		switch (lang) {
			case "PT":
				return "Esta Bem";

			default:
				//EN
				return "OK";
		}
	};

	return (
		<ColorContext.Consumer>
			{(color) => {
				return (
					<div
						className="ui button"
						role="button"
						style={{ backgroundColor: color, color: "white" }}
					>
						<LanguageContext.Consumer>
							{(language) => renderButtonText(language)}
						</LanguageContext.Consumer>
					</div>
				);
			}}
		</ColorContext.Consumer>
	);
};

export default Button;
