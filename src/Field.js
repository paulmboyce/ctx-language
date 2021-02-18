import { React } from "react";
import { MyConnector } from "./myredux";

const Field = (props) => {
	console.log("FIELD/LABEL PROPS: ", props);

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
			<label htmlFor="id-name">{renderLabel(props.language.language)}</label>
			<input id="id-name" type="text"></input>
		</div>
	);
};

export default MyConnector()(Field);
