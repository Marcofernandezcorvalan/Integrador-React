import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
// import { Products } from "../../data/productsData";

export const ProductsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 95%;
	gap: 20px;
`;

const ProductsSection = () => {
	let Products = useSelector((state) => state.products.products);

	return (
		<>
			<ProductsContainer>
				{Object.entries(Products).map(([, products]) => {
					console.log(Products);
					return products.map((product) => {
						return <ProductCard {...product} key={product.id} />;
					});
				})}
			</ProductsContainer>
		</>
	);
};

export default ProductsSection;
