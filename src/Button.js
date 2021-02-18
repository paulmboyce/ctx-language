import { React } from "react";

import { MyConnector } from "./myredux";

const Button = (props) => {
	//	console.log("BUTTON PROPS: ", props);
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
			<div role="button" style={{ color: props.color.color }}>
				{renderButtonText(props.language.language)}
			</div>
		</div>
	);
};

export default MyConnector()(Button);
