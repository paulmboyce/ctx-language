import { React, useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./context/LanguageContext";

function App() {
	const [language, setLanguage] = useState("EN");
	return (
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
			<LanguageContext.Provider value={{ language: language }}>
				<UserCreate />
			</LanguageContext.Provider>
		</div>
	);
}

export default App;
