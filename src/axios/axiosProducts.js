import axios from "axios";
import { BASE_URL } from "../data/constants";
import { fetchProducts, fetchProductsError, fetchProductsLoading } from "../Redux/productos/productsSlice";

export const getProducts = async (dispatch) => {
	dispatch(fetchProductsLoading());
	try {
		const products = await axios.get(`${BASE_URL}products`);
		// console.log(products);
		const res = products.data;

		const response = Object.entries(res).map(([, prod]) => {
			return prod;
		});

		// const that = response.map(([, eso]) => {
		// 	return eso.map((esto) => {
		// 		return [esto];
		// 	});
		// });
		// console.log(response);
		if (response) {
			dispatch(fetchProducts(response));
		}

		return response;
	} catch (error) {
		console.log(error);
		dispatch(fetchProductsError("No se pudieron cargar los Productos"));
	}
};
