import { React } from "react";

import { MyConnector } from "../myredux";

const Button = (props) => {
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
		<div
			className="ui button"
			role="button"
			style={{ backgroundColor: props.color, color: "white" }}
		>
			{renderButtonText(props.language)}
		</div>
	);
};

export default MyConnector()(Button);
