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
				<div>
					<span>Select a language:</span>
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
					<span> </span>
					<LanguageContext.Consumer>
						{(ctx) => {
							return (
								<span style={{ fontWeight: 700 }}>Showing: {ctx.language}</span>
							);
						}}
					</LanguageContext.Consumer>
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
		</LanguageContext.Provider>
	);
}

export default App;
