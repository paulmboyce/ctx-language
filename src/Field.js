import React from "react-dom";

const Field = ({ lblName }) => {
	return (
		<div className="<Field>">
			<label htmlFor="id-name">{lblName}</label>
			<input id="id-name" type="text"></input>
		</div>
	);
};

export default Field;
