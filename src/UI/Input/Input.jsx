import React from "react";
import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

export const Container = styled.div`
	display: flex;
	flex-direction: Column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 10px;
	gap: 10px;
`;
export const Label = styled.label`
	display: flex;
	flex-direction: column;
	width: 60%;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const ErrorMessageStyled = styled.span`
	padding: 5px;
	margin-top: 5px;
	color: rgba(255, 58, 58, 0.328);
`;

export const InputStyled = styled.input`
	border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
	padding: 10px;
	border-radius: 8px;
	background: var(--secondbackground);
	color: var(--text);
	border: none;
	transition: all 0.3s ease;
	width: 80%;
`;

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
	return (
		<>
			<Field name={name}>
				{({ field, form: { errors, touched } }) => (
					<Container>
						<Label htmlFor={htmlFor}>{children}</Label>
						<InputStyled
							{...field}
							type={type}
							id={id}
							placeholder={placeholder}
							// isError={errors[field.name] && touched[field.name]}
						/>
						<ErrorMessage name={field.name}>
							{(message) => {
								<ErrorMessageStyled>{message}</ErrorMessageStyled>;
							}}
						</ErrorMessage>
					</Container>
				)}
			</Field>
		</>
	);
};

export default Input;
