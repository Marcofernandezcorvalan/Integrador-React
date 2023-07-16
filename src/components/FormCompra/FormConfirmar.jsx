import React from "react";
import { styled } from "styled-components";
import { Form as FormikForm, Formik as FormikCont } from "formik";
import Input from "../../UI/Input/Input";
import { CheckoutInitialValues } from "../../Formik/initialValues";
import { checkoutValidationSchema } from "../../Formik/validationSchema";
import Submit from "../../UI/Submit/Submit";
import { useNavigate } from "react-router-dom";
import { ContGeneral } from "../../pages/Login/Login";

export const ContainerFormConfirmar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	gap: 20px;
	margin-bottom: 100px;
`;

export const TitleConfirm = styled.h2`
	font-size: 17px;
	font-weight: 700;
	width: 100%;
	margin-bottom: 30px;
`;

export const Form = styled(FormikForm)`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 20px;
	margin-bottom: 10px;
	justify-content: space-between;
`;

export const Formik = styled(FormikCont)`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const FormConfirmar = ({ cartItems }) => {
	const navigate = useNavigate();
	return (
		<>
			<ContGeneral>
				<ContainerFormConfirmar>
					<TitleConfirm>Complete los siguientes Campos:</TitleConfirm>
					<Formik
						initialValues={CheckoutInitialValues}
						validationSchema={checkoutValidationSchema}
						onSubmit={(values) => console.log(values)}
					>
						<Form>
							<Input htmlFor="nombre" type="text" id="name" placeholder="Su Nombre" name="name">
								Nombre:
							</Input>
							<Input htmlFor="celular" type="text" id="celular" placeholder="Número Personal" name="cellphone">
								Celular:
							</Input>
							<Input htmlFor="localidad" type="text" id="localidad" placeholder="Su Localidad" name="location">
								Localidad:
							</Input>
							<Input htmlFor="direccion" type="text" id="direccion" placeholder="Su Dirección" name="address">
								Dirección:
							</Input>
							<ButtonContainer>
								<Submit onClick={() => navigate("/Congrats")}>Confirmar</Submit>
							</ButtonContainer>
						</Form>
					</Formik>
				</ContainerFormConfirmar>
			</ContGeneral>
		</>
	);
};

export default FormConfirmar;
