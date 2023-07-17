import { ErrorMessage, Field } from "formik";
import React from "react";
import { styled } from "styled-components";
import { LoginFormInput } from "../../pages/Login/Login";

export const ErrorStyled = styled.small`
	color: red;
`;

const LogRegInput = (name, type, placeholder, isError) => {
	return (
		<>
			<Field name={name} type={type} placeholder={placeholder} error={isError} as={LoginFormInput} />
			<ErrorMessage name={name}>{(message) => <ErrorStyled>{message}</ErrorStyled>}</ErrorMessage>
		</>
	);
};
export default LogRegInput;
