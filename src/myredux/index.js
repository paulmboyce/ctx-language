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

function dispatch(action, handleChange) {
	console.log("DISPATCHED: action: ", action);
	for (const prop in _STATE) {
		const oldState = _STATE[prop];
		_STATE[prop] = _REDUCERS[prop](oldState, action);
	}
	console.log("_STATE: (updated...):", _STATE);
	handleChange();
}

//const WrappedApp = wrapAppHoc(MyApp);

function MyRedux({ children }) {
	const appComponent = React.Children.only(children);
	console.log("wrappedComponent TYPE: ", appComponent.type);
	const WrappedApp = wrapAppHoc(appComponent.type);

	return (
		<div>
			<ColorContext.Provider value={{ color: _STATE.color }}>
				<LanguageContext.Provider value={{ language: _STATE.language }}>
					<WrappedApp />
				</LanguageContext.Provider>
			</ColorContext.Provider>
		</div>
	);
}

function wrapAppHoc(WrappedComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { refresh: false };
		}

		render() {
			console.log("Render wrapAppHoc...");

			return (
				<WrappedComponent
					{...this.props}
					handleChange={this.handleChange}
					dispatch={this.wrapDispatch}
					text="hello world"
					data={_STATE}
					language={_STATE.language}
					color={_STATE.color}
				/>
			);
		}

		handleChange = () => {
			console.log("CAlled handleChange...");
			this.setState({ refresh: !this.state.refresh });
		};

		wrapDispatch = (action) => {
			console.log("Called wrap dispatch with action: ", action);
			dispatch(action, this.handleChange);
		};
	};
}

function MyConnector() {
	return function wrapAndInjectProps(WrappedComponent) {
		return class ShouldRenderOnStateChange extends React.Component {
			constructor(props) {
				super(props);
				console.log("ShouldRenderOnStateChange PROPS: ", props);
				this.state = { data: _STATE };
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
												color={this.state.data.color}
												language={this.state.data.language}
												dispatch={dispatch}
												data={this.state.data}
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
