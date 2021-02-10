import { React, useState } from "react";
import UserCreate from "./UserCreate";

function App() {
	const [lblName, setLblName] = useState("Name");
	const [lblSubmit, setLblSubmit] = useState("OK");
	return (
		<div>
			Select a language:
			<span>US</span>
			<span
				onClick={() => {
					setLblName("Nome");
					setLblSubmit("Esta Bem");
				}}
			>
				Portuguese
			</span>
			<UserCreate lblName={lblName} lblSubmit={lblSubmit} />
		</div>
	);
}

export default App;
