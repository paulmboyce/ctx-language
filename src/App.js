import Field from "./Field";
import Button from "./Button";

function App(props) {
	return (
		<div>
			<div>
				<span>Select a language:</span>
				<span
					onClick={() => {
						props.dispatch({ type: "SET_LANGUAGE", payload: "EN" });
						props.dispatch({ type: "SET_COLOR", payload: "BLUE" });
					}}
				>
					US
				</span>
				<span
					onClick={() => {
						props.dispatch({ type: "SET_LANGUAGE", payload: "PT" });
						props.dispatch({ type: "SET_COLOR", payload: "GREEN" });
					}}
				>
					Portuguese
				</span>
				<span> </span>
				<span style={{ fontWeight: 700 }}>Showing: {props.language}</span>
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
export default App;
