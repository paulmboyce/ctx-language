const colorReducer = (oldState = { color: "RED" }, action) => {
	if (action && action.type === "SET_COLOR") {
		return { color: action.payload };
	}
	return oldState;
};
const languageReducer = (oldState = { language: "EN" }, action) => {
	if (action && action.type === "SET_LANGUAGE") {
		return { language: action.payload };
	}
	return oldState;
};

export { languageReducer, colorReducer };
