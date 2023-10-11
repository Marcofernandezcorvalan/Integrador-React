import axios from "axios";
import { BASE_URL } from "../data/constants";
import { fetchProducts, fetchProductsError, fetchProductsLoading } from "../Redux/productos/productsSlice";

export const getProducts = async (dispatch) => {
	dispatch(fetchProductsLoading());
	try {
		const products = await axios.get(`${BASE_URL}products`);
		if (products) {
			dispatch(fetchProducts(products));
		}
		products.JSON.parse();
		return products.data;
	} catch (error) {
		console.log(error);
		dispatch(fetchProductsError("No se pudieron cargar los Productos"));
	}
};
