import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Category from "./Category";

export const ProductsCategoriesCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	gap: 20px;
	margin-bottom: 20px;
	.active {
		background: var(--secondarytext);
		color: var(--background);
		border: 1px solid var(--background);
		transition: all 0.3s ease;
	}
`;

export const ProductsCategory = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	padding: 5px;
	border-radius: 10px;
	width: 100px;
	font-weight: 600;
	background: var(--secondbackground);
	color: var(--thirdtext);
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
`;

const ProductsCategories = () => {
	const categories = useSelector((state) => state.categories.categories);

	return (
		<>
			<ProductsCategoriesCont>
				{categories.map((category) => {
					return <Category {...category} key={category.id} />;
				})}
				{/* <ProductsCategory className="active">All</ProductsCategory>
				<ProductsCategory>Expensive</ProductsCategory>
				<ProductsCategory>Accessible</ProductsCategory>
				<ProductsCategory>Economic</ProductsCategory> */}
			</ProductsCategoriesCont>
		</>
	);
};

export default ProductsCategories;
