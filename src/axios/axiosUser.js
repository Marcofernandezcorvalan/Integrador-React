import axios from "axios";
import { BASE_URL } from "../data/constants";

export const registerUser = async (name, email, password) => {
	try {
		const res = await axios.post(`${BASE_URL}auth/register`, {
			name,
			email,
			password,
		});

		return res.data;
	} catch (error) {
		console.log(error);
		return alert(error.response.data.errors.errors[0].msg);
	}
};

export const loginUser = async (email, password) => {
	try {
		const res = await axios.post(`${BASE_URL}auth/login`, {
			email,
			password,
		});

		return res.data;
	} catch (error) {
		// console.log(error);
		return alert(error.response.data.msg);
	}
};
