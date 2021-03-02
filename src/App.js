import Field from "./Field";
import Button from "./Button";

function App(props) {
	return (
		<div className="ui container">
			<div className="ui segment">
				<div className="ui segment inverted">
					<span>Select a language:</span>
					<button
						className="ui button inverted"
						onClick={() => {
							props.dispatch({ type: "SET_LANGUAGE", payload: "EN" });
							props.dispatch({ type: "SET_COLOR", payload: "BLUE" });
						}}
					>
						US
					</button>
					<button
						className="ui button inverted"
						onClick={() => {
							props.dispatch({ type: "SET_LANGUAGE", payload: "PT" });
							props.dispatch({ type: "SET_COLOR", payload: "GREEN" });
						}}
					>
						Portuguese
					</button>
					<br />{" "}
					<span style={{ fontWeight: 700 }}>Showing: {props.language}</span>
				</div>
				{(() => {
					return (
						<div className="ui form segment">
							<Field />
							<br />
							<Button />
						</div>
					);
				})()}
			</div>
		</div>
	);
}
export default App;
