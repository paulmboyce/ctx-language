import React from "react";

import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

const _STORE = {
	language: LanguageContext,
	color: ColorContext,
};

function MyConnector() {
	return function wrapAndInjectProps(WrappedComponent) {
		return class extends React.Component {
			render = () => {
				return (
					<_STORE.language.Consumer>
						{(language) => {
							return (
								<_STORE.color.Consumer>
									{(color) => {
										return (
											// NOTE: Very hard coded injection of props color and language :/
											<WrappedComponent
												{...this.props}
												{...color}
												{...language}
											/>
										);
									}}
								</_STORE.color.Consumer>
							);
						}}
					</_STORE.language.Consumer>
				);
			};
		};
	};
}

export { MyConnector };
