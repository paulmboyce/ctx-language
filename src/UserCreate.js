import { React } from "react-dom";

import Field from "./Field";
import Button from "./Button";

const UserCreate = ({ lblName, lblSubmit }) => {
	return (
		<div>
			<Field lblName={lblName} />
			<Button lblSubmit={lblSubmit} />
		</div>
	);
};

export default UserCreate;
