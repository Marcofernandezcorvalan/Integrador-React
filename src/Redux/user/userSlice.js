import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	actualUser: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {
		setActualUser: (state, action) => {
			return {
				...state,
				actualUser: action.payload,
			};
		},
		logOut: (state) => {
			return {
				...state,
				actualUser: null,
			};
		},
	},
});

export const { setActualUser, logOut } = userSlice.actions;
export default userSlice.reducer;
