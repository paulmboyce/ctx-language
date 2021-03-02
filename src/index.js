import ReactDOM from "react-dom";
import MyApp from "../src/components/App";
import { MyRedux } from "./myredux";

ReactDOM.render(
	<MyRedux>
		<MyApp />
	</MyRedux>,
	document.querySelector("#root")
);
