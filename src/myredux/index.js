import React from "react";

import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";
import { colorReducer, languageReducer } from "../reducer";

const _REDUCERS = {
	color: colorReducer,
	language: languageReducer,
};

const _STATE = initState();

function initState() {
	const state = {};
	for (const prop in _REDUCERS) {
		state[prop] = _REDUCERS[prop]();
	}
	return state;
}

function dispatch(action) {
	console.log("DISPATCHED: action: ", action);
	for (const prop in _STATE) {
		const oldState = _STATE[prop];
		_STATE[prop] = _REDUCERS[prop](oldState, action);
	}
	console.log("_STATE: (updated...):", _STATE);
}

function MyRedux({ children }) {
	return (
		<div>
			<ColorContext.Provider value={{ color: _STATE.color }}>
				<LanguageContext.Provider value={{ language: _STATE.language }}>
					<div>{children}</div>
				</LanguageContext.Provider>
			</ColorContext.Provider>
		</div>
	);
}

function MyConnector() {
	return function wrapAndInjectProps(WrappedComponent) {
		return class ShouldRenderOnStateChange extends React.Component {
			constructor(props) {
				super(props);
				console.log("ShouldRenderOnStateChange PROPS: ", props);
				this.state = _STATE;
			}

			render() {
				console.log("RENDER MY CONNECTOR:...", this.props);
				console.log("_STATE (in connector): ", this.state);
				return (
					<LanguageContext.Consumer>
						{(language) => {
							return (
								<ColorContext.Consumer>
									{(color) => {
										return (
											// NOTE: Very hard coded injection of props color and language :/
											<WrappedComponent
												{...this.props}
												{...this.state.color}
												{...this.state.language}
												dispatch={dispatch}
											/>
										);
									}}
								</ColorContext.Consumer>
							);
						}}
					</LanguageContext.Consumer>
				);
			}
		};
	};
}

export { MyRedux, MyConnector };
