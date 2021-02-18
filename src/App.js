import { React, useState } from "react";
import Field from "./Field";
import Button from "./Button";

import { MyConnector } from "./myredux";

function App(props) {
	console.log("APP PROPS: ", props);
	const [refresh, setRefresh] = useState(false);

	const handleChange = () => {
		console.log("CAlled handleChange...");
		setRefresh(!refresh);
	};

	return (
		<div>
			<div>
				<span>Select a language:</span>
				<span
					onClick={() => {
						props.dispatch(
							{ type: "SET_LANGUAGE", payload: "EN" },
							handleChange
						);
						props.dispatch(
							{ type: "SET_COLOR", payload: "BLUE" },
							handleChange
						);
					}}
				>
					US
				</span>
				<span
					onClick={() => {
						props.dispatch(
							{ type: "SET_LANGUAGE", payload: "PT" },
							handleChange
						);
						props.dispatch(
							{ type: "SET_COLOR", payload: "GREEN" },
							handleChange
						);
					}}
				>
					Portuguese
				</span>
				<span> </span>
				<span style={{ fontWeight: 700 }}>
					Showing: {props.language.language}
				</span>
			</div>
			{(() => {
				return (
					<div>
						<Field />
						<Button />
					</div>
				);
			})()}
		</div>
	);
}

export default MyConnector()(App);
