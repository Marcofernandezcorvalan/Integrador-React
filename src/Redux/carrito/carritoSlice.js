import { createSlice } from "@reduxjs/toolkit";
import { addProductToCart, removeProductToCart } from "./carritoUtils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const carritoSlice = createSlice({
	name: "cart",
	initialState: INITIAL_STATE,
	reducers: {
		addProduct: (state, action) => {
			return {
				...state,
				cartItems: addProductToCart(state.cartItems, action.payload),
			};
		},
		removeProduct: (state, action) => {
			return {
				...state,
				cartItems: removeProductToCart(state.cartItems, action.payload),
			};
		},
		clearCart: (state) => {
			return {
				...state,
				cartItems: [],
			};
		},
		toggleCart: (state) => {
			return {
				...state,
				hidden: !state.hidden,
			};
		},
	},
});

export const { addProduct, removeProduct, clearCart, toggleCart } = carritoSlice.actions;

export default carritoSlice.reducer;
