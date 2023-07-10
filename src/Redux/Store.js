import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./productos/productsSlice";
import carritoReducer from "./carrito/carritoSlice";

const reducers = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
	carrito: carritoReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["carrito"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
