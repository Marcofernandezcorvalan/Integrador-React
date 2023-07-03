import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./assets/GlobalStyles.js";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyles />
			<App />
		</Provider>
	</React.StrictMode>
);
