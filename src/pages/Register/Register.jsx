import React from "react";
import styled from "styled-components";
import { ContGeneral, LoginFormButton, LoginFormInput, TitleGen } from "../Login/Login";
import { Form as FormikForm, Formik } from "formik";
import { LogRegInitialValues } from "../../Formik/initialValues";
import { LogRegValidationSchema } from "../../Formik/validationSchema";

import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../axios/axiosUser";

export const RegisterCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 370px;
	height: 420px;
	background: var(--secondbackground);
	margin-top: 80px;
	margin-bottom: 100px;
	border-radius: 10px;
	gap: 30px;
	@media screen and (max-width: 420px) {
		width: 300px;
	}
`;

export const Form = styled(FormikForm)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background: var(--background);
	border-radius: 10px;
	height: 70%;
	width: 80%;
	padding: 15px;
`;

const Register = () => {
	const navigate = useNavigate();
	return (
		<>
			<ContGeneral>
				<RegisterCont>
					<TitleGen>Sign Up</TitleGen>
					<Formik
						initialValues={LogRegInitialValues}
						validationSchema={LogRegValidationSchema}
						onSubmit={async (values, actions) => {
							const user = await registerUser(values.name, values.email, values.password);
							actions.resetForm();
							console.log(user);
							if (user) {
								navigate("/login");
							}
						}}
					>
						{({ errors }) => (
							<Form>
								<Input isError={errors.name} placeholder="name" name="name" type="text" />
								<Input isError={errors.email} placeholder="email" name="email" type="text" />
								<Input isError={errors.password} placeholder="password" name="password" type="password" />
								<Submit>Sign Up</Submit>
							</Form>
						)}
					</Formik>
				</RegisterCont>
			</ContGeneral>
		</>
	);
};

export default Register;
