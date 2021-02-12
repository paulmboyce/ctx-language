import { React } from "react";
import useLanguageContext from "./hook/useLanguageContext";
const Button = () => {
	const ctx = useLanguageContext();
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
			<div role="button">{renderButtonText(ctx.language)}</div>
		</div>
	);
};

export default Button;
