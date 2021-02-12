import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

function useLanguageContext() {
	return useContext(LanguageContext);
}

export default useLanguageContext;
