import Field from "./Field";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";

function App(props) {
	const dispatchLanguageClick = (language, color) => {
		props.dispatch({ type: "SET_LANGUAGE", payload: language });
		props.dispatch({ type: "SET_COLOR", payload: color });
	};

	return (
		<div className="ui container">
			<div className="ui segment">
				<LanguageSelector onLanguageChange={dispatchLanguageClick} />
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
