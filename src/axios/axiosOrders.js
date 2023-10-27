import axios from "axios";
import { BASE_URL } from "../data/constants";
import { createOrdersFail, fetchOrders, fetchOrdersFail, fetchOrdersLoading } from "../Redux/orders/ordersSlice";

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

export const createOrders = async (order, dispatch, actualUser) => {
	try {
		const res = await axios.post(`${BASE_URL}orders`, order, {
			headers: {
				"x-token": actualUser.token,
			},
		});
		if (res) {
			getOrders(dispatch, actualUser);
		}
	} catch (error) {
		console.log(error);
		dispatch(createOrdersFail());
	}
};
