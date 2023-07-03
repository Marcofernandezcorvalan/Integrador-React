import React from "react";
import styled from "styled-components";

export const CategoryButton = styled.div`
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

export const CategoryTitle = styled.h4`
	font-size: 15px;
`;

const Category = ({ title }) => {
	return (
		<>
			<CategoryButton>{title}</CategoryButton>
		</>
	);
};

export default Category;
