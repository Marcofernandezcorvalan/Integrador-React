import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	hiddenMenu: true,
};

const MenuHamburSlice = createSlice({
	name: "MenuHambur",
	initialState: INITIAL_STATE,
	reducers: {
		toggleMenuHambur: (state) => {
			return {
				...state,
				hiddenMenu: !state.hiddenMenu,
			};
		},
	},
});

export const { toggleMenuHambur } = MenuHamburSlice.actions;

export default MenuHamburSlice.reducer;
