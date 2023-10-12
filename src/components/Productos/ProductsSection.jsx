import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../axios/axiosProducts";
import { clearError } from "../../Redux/productos/productsSlice";
// import { Products } from "../../data/productsData";

export const ProductsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 95%;
	gap: 20px;
	max-width: 1300px;
	@media screen and (max-width: 550px) {
		width: 90%;
		flex-direction: column;
	}
	@media screen and (max-width: 420px) {
		width: 95%;
	}
`;

const ProductsSection = () => {
	// let productos = useSelector((state) => state.products.products);
	const pickedCategory = useSelector((state) => state.categories.pickedCategory);
	let { products, error } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!products) {
			getProducts(dispatch);
		} else {
			error && clearError();
		}
	}, [products, error]);

	// const filterByCategory = (card) => {
	// 	if (card.category === pickedCategory) {
	// 		return card;
	// 	}
	// };

	// const prodByCategory = products.filter(filterByCategory);
	// console.log(prodByCategory);

	if (pickedCategory) {
		const filterByCategory = (card) => {
			if (card.category === pickedCategory) {
				return card;
			}
		};
		const prodByCategory = products.filter(filterByCategory);
		products = prodByCategory;
	}
	return (
		<>
			<ProductsContainer>
				{products
					? products?.map((products) => {
							return <ProductCard {...products} key={products.id} />;
					  })
					: error}
			</ProductsContainer>
		</>
	);
};

export default ProductsSection;
