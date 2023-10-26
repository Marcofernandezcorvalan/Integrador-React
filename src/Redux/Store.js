import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./productos/productsSlice";
import carritoReducer from "./carrito/carritoSlice";
import MenuHamburReducer from "./MenuHamburSlice/menuHamburSlice";
import userReducer from "./user/userSlice";
import ordersReducer from "./orders/ordersSlice";

const reducers = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
	carrito: carritoReducer,
	MenuHambur: MenuHamburReducer,
	user: userReducer,
	orders: ordersReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["carrito", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
