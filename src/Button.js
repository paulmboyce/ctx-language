import { React } from "react";

import { MyConnector } from "./myredux";

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
		<div className="<Button>">
			<div role="button" style={{ color: props.color }}>
				{renderButtonText(props.language)}
			</div>
		</div>
	);
};

export default MyConnector()(Button);
