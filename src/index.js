import ReactDOM from "react-dom";
import App from "./App";
import { MyRedux } from "./myredux";

ReactDOM.render(
	<MyRedux>
		<App />
	</MyRedux>,
	document.querySelector("#root")
);
