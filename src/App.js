import { React, useState } from "react";
import LanguageContext from "./context/LanguageContext";
import ColorContext from "./context/ColorContext";
import Field from "./Field";
import Button from "./Button";

function App() {
	const [lang, setLang] = useState("EN");
	const [color, setColor] = useState("RED");
	return (
		<ColorContext.Provider value={{ color: color }}>
			<LanguageContext.Provider value={{ language: lang }}>
				<div>
					<div>
						<span>Select a language:</span>
						<span
							onClick={() => {
								setLang("EN");
								setColor("BLUE");
							}}
						>
							US
						</span>
						<span
							onClick={() => {
								setLang("PT");
								setColor("GREEN");
							}}
						>
							Portuguese
						</span>
						<span> </span>
						<LanguageContext.Consumer>
							{(ctx) => {
								return (
									<span style={{ fontWeight: 700 }}>
										Showing: {ctx.language}
									</span>
								);
							}}
						</LanguageContext.Consumer>
					</div>
					{(() => {
						return (
							<div>
								<Field name="blabla" />
								<Button />
							</div>
						);
					})()}
				</div>
			</LanguageContext.Provider>
		</ColorContext.Provider>
	);
}

export default App;
