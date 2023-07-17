import React from "react";
import styled from "styled-components";
import { ContGeneral, LoginFormButton, LoginFormInput, TitleGen } from "../Login/Login";
import { Form as FormikForm, Formik } from "formik";
import { LogRegInitialValues } from "../../Formik/initialValues";
import { LogRegValidationSchema } from "../../Formik/validationSchema";

import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { useNavigate } from "react-router-dom";

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

export const Form = styled(FormikForm)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background: var(--background);
	border-radius: 10px;
	height: 60%;
	width: 80%;
	padding: 10px;
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
						onSubmit={() => {
							navigate("/login");
						}}
					>
						{({ errors }) => (
							<Form>
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
