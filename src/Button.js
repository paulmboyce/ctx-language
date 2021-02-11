import { React } from "react";
import LanguageContext from "./context/LanguageContext";

const Button = () => {
	const renderLanguage = (lang) => {
		switch (lang) {
			case "PT":
				return "Esta Bem";

			default:
				//EN
				return "OK";
		}
	};
	return (
		<LanguageContext.Consumer>
			{({ language }) => (
				<div className="<Button>">
					<div role="button">{renderLanguage(language)}</div>
				</div>
			)}
		</LanguageContext.Consumer>
	);
};

export default Button;
