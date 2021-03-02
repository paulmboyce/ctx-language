const ColorReducer = (oldState = "RED", action) => {
	if (action && action.type === "SET_COLOR") {
		return action.payload;
	}
	return oldState;
};
const LanguageReducer = (oldState = "EN", action) => {
	if (action && action.type === "SET_LANGUAGE") {
		return action.payload;
	}
	return oldState;
};

export { LanguageReducer, ColorReducer };
