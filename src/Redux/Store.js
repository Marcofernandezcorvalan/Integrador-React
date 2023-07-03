import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/lib/persistStore";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./productos/productsSlice";

const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		products: productsReducer,
	},
});

export default store;
