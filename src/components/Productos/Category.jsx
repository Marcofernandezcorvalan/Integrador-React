import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { pickCategory } from "../../Redux/categories/categoriesSlice";

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
	background-color: ${({ pick }) => (pick ? "var(--thirdtext)" : "var(--secondbackground)")};
	color: ${({ pick }) => (pick ? "var(--secondbackground)" : "var(--thirdtext)")};
	@media screen and (max-width: 550px) {
		font-size: 13px;
	}
	@media screen and (max-width: 420px) {
		width: 90px;
		font-size: 11px;
		padding: 5px;
	}
`;

export const CategoryTitle = styled.h4`
	font-size: 15px;
`;

const Category = ({ title, category }) => {
	const pickedCategory = useSelector((state) => state.categories.pickedCategory);
	const dispatch = useDispatch();

	return (
		<>
			<CategoryButton pick={category === pickedCategory} onClick={() => dispatch(pickCategory(category))}>
				{title}
			</CategoryButton>
		</>
	);
};

export default Category;
