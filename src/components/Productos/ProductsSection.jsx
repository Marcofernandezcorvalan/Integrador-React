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
	let productos = useSelector((state) => state.products.products);
	const pickedCategory = useSelector((state) => state.categories.pickedCategory);

	if (pickedCategory) {
		productos = {
			[pickedCategory]: productos[pickedCategory],
		};
	}

	return (
		<>
			<ProductsContainer>
				{Object.entries(productos).map(([, graf]) => {
					return graf?.map((prod) => {
						return <ProductCard {...prod} key={prod.id} />;
					});
				})}
			</ProductsContainer>
		</>
	);
};

export default ProductsSection;
