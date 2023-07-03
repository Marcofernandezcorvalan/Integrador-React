import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/productsData";

const INITIAL_STATE = {
	products: Products,
};

export const sliceProducts = createSlice({
	name: "productos",
	initialState: INITIAL_STATE,
	reducers: {
		getProducts: (state) => {
			return state;
		},
	},
});

export const { getProducts } = sliceProducts.actions;
export default sliceProducts.reducer;
