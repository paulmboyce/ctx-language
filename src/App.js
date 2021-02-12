import { React, useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./context/LanguageContext";
import Field from "./FieldClass";
import Button from "./Button";

function App() {
	const [lang, setLang] = useState("EN");
	return (
		<LanguageContext.Provider value={{ language: lang }}>
			<div>
				<LanguageContext.Consumer>
					{({ language }) => {
						return (
							<div>
								Select a language:
								<span>{language}</span>
								<span
									onClick={() => {
										setLang("EN");
									}}
								>
									US
								</span>
								<span
									onClick={() => {
										setLang("PT");
									}}
								>
									Portuguese
								</span>
							</div>
						);
					}}
				</LanguageContext.Consumer>
				{(() => {
					return (
						<div>
							<Field />
							<Button />
						</div>
					);
				})()}
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
