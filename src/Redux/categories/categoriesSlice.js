import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/categoriesData";

const INITIAL_STATE = {
	categories: Categories,
	pickedCategory: null,
};

export const sliceCategories = createSlice({
	name: "categories",
	initialState: INITIAL_STATE,
	reducers: {
		getCategories: (state) => {
			return state;
		},
		pickCategory: (state, action) => {
			return {
				...state,
				pickedCategory: action.payload !== state.pickedCategory ? action.payload : null,
			};
		},
	},
});

export const { getCategories, pickCategory } = sliceCategories.actions;
export default sliceCategories.reducer;
