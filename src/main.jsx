import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./assets/GlobalStyles.js";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import { persistor } from "./Redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<GlobalStyles />
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
