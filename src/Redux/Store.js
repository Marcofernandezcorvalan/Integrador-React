import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./productos/productsSlice";

const reducers = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
