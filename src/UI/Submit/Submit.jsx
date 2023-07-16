import React from "react";
import { styled } from "styled-components";

export const SubmitStyled = styled.button`
	margin-top: 35px;
	color: var(--background);
	background-color: #76b900;
	padding: 5px 10px 5px 10px;
	border-radius: 10px;
	font-weight: 600;
	transition: all 0.3s ease;
	border: none;
	cursor: pointer;
	&:hover {
		color: var(--secondarytext);
		background-color: var(--secondbackground);
		transform: scale(1.1);
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
	}
`;

const Submit = ({ children, onClick }) => {
	return (
		<>
			<SubmitStyled type="submit" onClick={onClick}>
				{children}
			</SubmitStyled>
		</>
	);
};

export default Submit;
