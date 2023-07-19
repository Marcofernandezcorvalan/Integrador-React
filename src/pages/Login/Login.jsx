import { Formik, Form as FormikForm } from "formik";
import React from "react";
import styled from "styled-components";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { LogRegInitialValues } from "../../Formik/initialValues";
import { LogRegValidationSchema } from "../../Formik/validationSchema";
import { useNavigate } from "react-router-dom";

export const ContGeneral = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const LoginCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 400px;
	height: 400px;
	background: var(--secondbackground);
	margin-top: 80px;
	margin-bottom: 100px;
	border-radius: 10px;
	gap: 30px;
	padding: 10px;
	@media screen and (max-width: 420px) {
		width: 320px;
	}
`;

export const Form = styled(FormikForm)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background: var(--background);
	border-radius: 10px;
	height: 60%;
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
	margin-top: 20px;
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

export const TitleGen = styled.h3`
	font-size: 32px;
`;

const Login = () => {
	const navigate = useNavigate();
	return (
		<>
			<ContGeneral>
				<LoginCont>
					<TitleGen>Welcome Back</TitleGen>
					<Formik
						initialValues={LogRegInitialValues}
						validationSchema={LogRegValidationSchema}
						onSubmit={() => {
							navigate("/");
						}}
					>
						{(errors) => (
							<Form>
								<Input isError={errors.email} placeholder="email" name="email" type="text" />
								<Input isError={errors.password} placeholder="password" name="password" type="password" />
								<Submit>Login</Submit>
							</Form>
						)}
					</Formik>
				</LoginCont>
			</ContGeneral>
		</>
	);
};

export default Login;
