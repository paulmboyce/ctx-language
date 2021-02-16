import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

function useGlobalContext() {
	return {
		language: useContext(LanguageContext),
		color: useContext(ColorContext),
	};
}

export default useGlobalContext;
