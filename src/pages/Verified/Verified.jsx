import React from "react";
import { ContGeneral, LoginCont, TitleGen } from "../Login/Login";
import { Form as FormikForm, Formik } from "formik";
import { ValidateInitialValues } from "../../Formik/initialValues";
import { ValidateValidationSchema } from "../../Formik/validationSchema";
import Input from "../../UI/Input/Input";
import styled from "styled-components";
import Submit from "../../UI/Submit/Submit";
import { isVerified } from "../../axios/axiosVerified";
import { useNavigate } from "react-router-dom";

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
	gap: 15px;
`;

export const Parraf = styled.small`
	font-size: 10px;
	color: gray;
`;

const Verified = () => {
	const navigate = useNavigate();

	return (
		<>
			<ContGeneral>
				<LoginCont>
					<TitleGen>Authorize</TitleGen>
					<Formik
						initialValues={ValidateInitialValues}
						validationSchema={ValidateValidationSchema}
						onSubmit={async (values, actions) => {
							const code = await isVerified(values.code);
							actions.resetForm();
							if (code) {
								navigate("/login");
							}
						}}
					>
						{({ errors }) => (
							<Form>
								<h2>Code</h2>
								<Parraf>su código se mandó a su e-mail</Parraf>
								<Input isError={errors.code} htmlFor="code" type="text" id="code" placeholder="Code" name="code" />
								<Submit>Send</Submit>
							</Form>
						)}
					</Formik>
				</LoginCont>
			</ContGeneral>
		</>
	);
};

export default Verified;
