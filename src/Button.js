import { React, useContext } from "react";
import LanguageContext from "./context/LanguageContext";

const Button = () => {
	const { language } = useContext(LanguageContext);
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
		<div className="<Button>">
			<div role="button">{renderButtonText(language)}</div>
		</div>
	);
};

export default Button;
