import React from "react";

import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";
import { ColorReducer, LanguageReducer } from "../reducer";

const _REDUCERS = {
	color: ColorReducer,
	language: LanguageReducer,
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
	console.log("DISPATCH: action: ", action);
	for (const prop in _STATE) {
		const oldState = _STATE[prop];
		_STATE[prop] = _REDUCERS[prop](oldState, action);
	}
	console.log("UPDATED _STATE as:", _STATE);
	handleChange();
}

function MyRedux({ children }) {
	const appComponent = React.Children.only(children);
	const WrappedApp = wrapAppHoc(appComponent.type);
	console.log(
		"rendering MyRedux to push new state to Providers... _STATE >>",
		_STATE
	);
	return (
		<div>
			<WrappedApp />
		</div>
	);
}

function wrapAppHoc(WrappedComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { refresh: false, data: _STATE };
		}

		render() {
			console.log("REFRESHED: Rendering wrapAppHoc, with state: ", this.state);
			return (
				<ColorContext.Provider value={this.state.data.color}>
					<LanguageContext.Provider value={this.state.data.language}>
						<WrappedComponent
							{...this.props}
							handleChange={this.handleChange}
							dispatch={this.wrapDispatch}
							data={_STATE}
							language={_STATE.language}
							color={_STATE.color}
						/>
					</LanguageContext.Provider>
				</ColorContext.Provider>
			);
		}

		handleChange = () => {
			this.setState({ data: _STATE });
			this.setState({ refresh: !this.state.refresh });
		};

		wrapDispatch = (action) => {
			dispatch(action, this.handleChange);
		};
	};
}

function MyConnector() {
	return function wrapAndInjectProps(WrappedComponent) {
		return class ShouldRenderOnStateChange extends React.Component {
			constructor(props) {
				super(props);
				this.state = { data: _STATE };
			}

			render() {
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
												color={color}
												language={language}
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
