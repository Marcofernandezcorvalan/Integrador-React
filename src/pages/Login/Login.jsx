import React from "react";
import styled from "styled-components";

export const LoginCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 400px;
	height: 450px;
	background: var(--secondbackground);
	margin-top: 80px;
	margin-bottom: 100px;
	border-radius: 10px;
	gap: 30px;
	padding: 10px;
`;

export const LoginForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	background: var(--background);
	border-radius: 10px;
	height: 65%;
	width: 80%;
`;

export const LoginFormInput = styled.input`
	padding: 10px;
	border-radius: 8px;
	background: var(--secondbackground);
	color: var(--text);
	border: none;
	transition: all 0.3s ease;
	width: 80%;
`;

export const LoginFormButton = styled.button`
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

const Login = () => {
	return (
		<>
			<LoginCont onClick={(e) => e.preventDefault}>
				<h3 style={{ fontSize: "32px" }}>Wellcome Back</h3>
				<LoginForm>
					<LoginFormInput type="text" placeholder="Email" />
					<LoginFormInput type="text" placeholder="Password" />
					<LoginFormButton onClick={(e) => e.preventDefault}>Login</LoginFormButton>
				</LoginForm>
			</LoginCont>
		</>
	);
};

export default Login;
