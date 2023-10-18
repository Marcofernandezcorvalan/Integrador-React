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
	},
});

export const { setActualUser } = userSlice.actions;
export default userSlice.reducer;
