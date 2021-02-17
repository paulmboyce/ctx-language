import { React } from "react";
import LanguageContext from "./context/LanguageContext";
import { MyConnector } from "./myredux";

const Field = (props) => {
	console.log("Field PROPS: ", props);

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

function mapContextToProps(ctxState) {
	console.log("mapContextToProps", ctxState.color._currentValue);

	return { color: ctxState.color, lang: ctxState.language };
}
export default MyConnector({ mapContextToProps })(Field);
