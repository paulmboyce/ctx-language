import ColorContext from "./ColorContext";
import LanguageContext from "./LanguageContext";

const CtxDataStore = (props) => {
	return (
		<ColorContext.Provider value={props.color}>
			<LanguageContext.Provider value={props.language}>
				{props.children}
			</LanguageContext.Provider>
		</ColorContext.Provider>
	);
};

export default CtxDataStore;
