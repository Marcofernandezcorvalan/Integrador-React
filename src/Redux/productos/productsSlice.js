import { createSlice } from "@reduxjs/toolkit";
// import { Products } from "../../data/productsData";

// const INITIAL_STATE = {
// 	products: Products,
// };

// export const sliceProducts = createSlice({
// 	name: "productos",
// 	initialState: INITIAL_STATE,
// 	reducers: {
// 		getProducts: (state) => {
// 			return state;
// 		},
// 	},
// });

const INITIAL_STATE = {
	products: null,
	loading: false,
	error: null,
};

export const sliceProducts = createSlice({
	name: "products",
	initialState: INITIAL_STATE,
	reducers: {
		fetchProductsError: (state = INITIAL_STATE, action) => {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		},
		fetchProducts: (state, action) => {
			return {
				...state,
				loading: false,
				error: null,
				products: [...action.payload],
			};
		},
		fetchProductsLoading: (state) => {
			return {
				...state,
				loading: true,
			};
		},
		clearError: (state) => {
			return {
				...state,
				error: null,
			};
		},
	},
});

// export const { getProducts } = sliceProducts.actions;
// export default sliceProducts.reducer;

export const { fetchProductsError, fetchProducts, fetchProductsLoading, clearError } = sliceProducts.actions;
export default sliceProducts.reducer;
