import { React, useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./context/LanguageContext";
import Field from "./FieldClass";
import Button from "./Button";

function App() {
	const [language, setLanguage] = useState("EN");
	return (
		<LanguageContext.Provider value={{ language: language }}>
			<div>
				Select a language:
				<span
					onClick={() => {
						setLanguage("EN");
					}}
				>
					US
				</span>
				<span
					onClick={() => {
						setLanguage("PT");
					}}
				>
					Portuguese
				</span>
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
