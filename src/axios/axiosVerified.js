import axios from "axios";
import { BASE_URL } from "../data/constants";

export const isVerified = async (code) => {
	try {
		const res = await axios.patch(`${BASE_URL}auth/verified`, {
			code,
		});

		return res.data;
	} catch (error) {
		// console.log(error);
		return alert(error.response.data.msg);
	}
};
