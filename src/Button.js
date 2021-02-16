import { React } from "react";
import useGlobalContext from "./hook/useGlobalContext";
const Button = () => {
	const { language, color } = useGlobalContext();

	const renderButtonText = (lang) => {
		switch (lang) {
			case "PT":
				return "Esta Bem";

			default:
				//EN
				return "OK";
		}
	};
	const renderButtonColor = (color) => {
		switch (color) {
			case "BLUE":
				return "blue";
			default:
				return "grey";
		}
	};
	return (
		<div className="<Button>">
			<div role="button" style={{ color: color.color }}>
				{renderButtonText(language.language)}
			</div>
		</div>
	);
};

export default Button;
