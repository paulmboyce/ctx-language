import { React, useState } from "react";
import LanguageContext from "./context/LanguageContext";
import ColorContext from "./context/ColorContext";
import Field from "./Field";
import Button from "./Button";
import { MyConnector } from "./myredux";

function App(props) {
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
			</LanguageContext.Provider>
		</ColorContext.Provider>
	);
}

export default MyConnector()(App);
