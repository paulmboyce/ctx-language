import Field from "./Field";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import CtxDataStore from "../context/CtxDataStore";
import { useState } from "react";

function App(props) {
	const [color, setColor] = useState("RED");
	const [language, setLanguage] = useState("EN");

	const dispatchLanguageClick = (language, color) => {
		setColor(color);
		setLanguage(language);
	};

	return (
		<CtxDataStore color={color} language={language}>
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
		</CtxDataStore>
	);
}
export default App;
