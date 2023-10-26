import axios from "axios";
import { BASE_URL } from "../data/constants";
import { fetchOrders, fetchOrdersFail, fetchOrdersLoading } from "../Redux/orders/ordersSlice";

export const getOrders = async (dispatch, actualUser) => {
	dispatch(fetchOrdersLoading());

	try {
		const orders = await axios.get(`${BASE_URL}orders`, {
			headers: {
				"x-token": actualUser.token,
			},
		});

		if (orders) {
			dispatch(fetchOrders(orders.data.data));
		}
	} catch (error) {
		console.log(error);
		dispatch(fetchOrdersFail("Para tener ordenes necesita estar registrado."));
	}
};
