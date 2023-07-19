import React from "react";
import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

export const Container = styled.div`
	display: flex;
	flex-direction: Column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 5px;
`;
export const Label = styled.label`
	display: flex;
	flex-direction: column;
	width: 60%;
	justify-content: flex-start;
	align-items: flex-start;
	font-weight: 600;
	@media screen and (max-width: 488px) {
		font-size: 12px;
	}
`;

export const ErrorMessageStyled = styled.span`
	/* padding: 5px; */

	/* margin-top: 5px; */
	color: #ff0000b4;
	font-size: 10px;
	align-items: center;
`;

export const InputStyled = styled.input`
	padding: 10px;
	border-radius: 8px;
	background: var(--secondbackground);
	color: var(--text);
	transition: all 0.3s ease;
	width: 100%;
	border: ${({ error }) => (error ? "1px solid #ff00008b" : "none")};
`;

const Input = ({ children, htmlFor, type, id, placeholder, name, isError }) => {
	return (
		<>
			<Container>
				<Label htmlFor={htmlFor}>{children}</Label>
				<Field name={name} id={id} type={type} error={isError} placeholder={placeholder} as={InputStyled} />
				<ErrorMessage name={name}>{(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}</ErrorMessage>
			</Container>
		</>
	);
};

export default Input;
