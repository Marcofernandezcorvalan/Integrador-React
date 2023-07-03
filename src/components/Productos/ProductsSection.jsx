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
	max-width: 1300px;
`;

const ProductsSection = () => {
	let Products = useSelector((state) => state.products);

	return (
		<>
			<ProductsContainer>
				{Object.entries(Products).map(([, products]) => {
					// console.log(Products);
					return Array.isArray(products)
						? products.map((product) => {
								console.log(product);
								return <ProductCard {...product} key={product.id} />;
						  })
						: null;
				})}
			</ProductsContainer>
		</>
	);
};

export default ProductsSection;
