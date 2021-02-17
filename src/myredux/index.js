import React from "react";

import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

const _STORE = {
	language: LanguageContext, // multiple just to show we only extract a subset of state in any component
	language2: LanguageContext,
	color: ColorContext,
	color2: ColorContext,
};

function MyRedux({ children }) {
	//console.log("MyRedux store...", store);
	//	console.log("MyRedux _STORE...", _STORE);
	return children;
}

function MyConnector({ mapContextToProps }) {
	return function (WrappedComponent) {
		return class extends React.Component {
			renderWrapped = (language) => {
				const consumer = _STORE.color;
				return (
					<consumer.Consumer>
						{(color) => {
							return (
								<WrappedComponent {...this.props} {...color} {...language} />
							);
						}}
					</consumer.Consumer>
				);
			};

			render = () => {
				return (
					<_STORE.language.Consumer>
						{(language) => {
							return this.renderWrapped(language);
						}}
					</_STORE.language.Consumer>
				);
			};
		};
	};
}

export { MyRedux, MyConnector };
