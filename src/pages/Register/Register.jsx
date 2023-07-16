import React from "react";
import styled from "styled-components";
import { ContGeneral, LoginFormButton, LoginFormInput, TitleGen } from "../Login/Login";

export const RegisterCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 370px;
	height: 400px;
	background: var(--secondbackground);
	margin-top: 80px;
	margin-bottom: 100px;
	border-radius: 10px;
	gap: 30px;
`;

export const RegisterForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	background: var(--background);
	border-radius: 10px;
	height: 60%;
	width: 80%;
	padding: 20px;
`;

const Register = () => {
	return (
		<>
			<ContGeneral>
				<RegisterCont>
					<TitleGen>Sign Up</TitleGen>
					<RegisterForm>
						<LoginFormInput type="email" placeholder="Email" />
						<LoginFormInput type="password" placeholder="Password" />
						<LoginFormButton>Sign Up</LoginFormButton>
					</RegisterForm>
				</RegisterCont>
			</ContGeneral>
		</>
	);
};

export default Register;
