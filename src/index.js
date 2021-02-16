import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyRedux } from "./myredux/MyRedux";

ReactDOM.render(
	<MyRedux>
		<App />
	</MyRedux>,
	document.querySelector("#root")
);
