import Field from "./Field";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import CtxDataStore from "../context/CtxDataStore";

function App(props) {
	return (
		<CtxDataStore>
			<div className="ui container">
				<div className="ui segment">
					<LanguageSelector />
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
		</CtxDataStore>
	);
}
export default App;
