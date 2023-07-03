import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/categoriesData";

const INITIAL_STATE = {
	categories: Categories,
};

export const sliceCategories = createSlice({
	name: "categories",
	initialState: INITIAL_STATE,
	reducers: {
		getCategories: (state) => {
			return state;
		},
	},
});

export const { getCategories } = sliceCategories.actions;
export default sliceCategories.reducer;
