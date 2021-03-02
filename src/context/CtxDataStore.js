import { React, useState } from "react";

import ColorContext from "./ColorContext";
import LanguageContext from "./LanguageContext";

const CtxDataStore = (props) => {
	const [color, setColor] = useState("RED");
	const [language, setLanguage] = useState("EN");

	return (
		<ColorContext.Provider value={{ color, setColor }}>
			<LanguageContext.Provider value={{ language, setLanguage }}>
				{props.children}
			</LanguageContext.Provider>
		</ColorContext.Provider>
	);
};

export default CtxDataStore;
