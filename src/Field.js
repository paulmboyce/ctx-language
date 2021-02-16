import { React } from "react";
import LanguageContext from "./context/LanguageContext";

import { MyConnector } from "./myredux/MyRedux";

const Field = (props) => {
	console.log("Rendering FIELD, with PROPS:  ", props);
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

function mapContextToProps(ctx) {
	console.log("mapContextToProps", ctx);
	return { color: ctx.color };
}
export default MyConnector({ mapContextToProps })(Field);
