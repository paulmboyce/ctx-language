import { React, useState } from "react";

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
			<label htmlFor="id-name">{lblName}</label>
			<input id="id-name" type="text"></input>
			<div role="button">{lblSubmit}</div>
		</div>
	);
}

export default App;
