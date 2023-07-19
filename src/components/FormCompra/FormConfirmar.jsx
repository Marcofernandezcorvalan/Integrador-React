import React from "react";
import { styled } from "styled-components";
import { Form as FormikForm, Formik as FormikCont } from "formik";
import Input from "../../UI/Input/Input";
import { CheckoutInitialValues } from "../../Formik/initialValues";
import { checkoutValidationSchema } from "../../Formik/validationSchema";
import Submit from "../../UI/Submit/Submit";
import { useNavigate } from "react-router-dom";
import { ContGeneral } from "../../pages/Login/Login";
import { useDispatch } from "react-redux";
import { clearCart } from "../../Redux/carrito/carritoSlice";

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
	font-size: 23px;
	font-weight: 700;
	color: #8bbe33ef;
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
	const dispatch = useDispatch();
	return (
		<>
			<ContGeneral>
				<ContainerFormConfirmar>
					<TitleConfirm>Complete los siguientes Campos:</TitleConfirm>
					<Formik
						initialValues={CheckoutInitialValues}
						validationSchema={checkoutValidationSchema}
						onSubmit={({ resetForm }) => {
							dispatch(clearCart());
							navigate("/Congrats");
							resetForm();
						}}
					>
						{({ errors }) => (
							<Form>
								<Input isError={errors.name} htmlFor="nombre" type="text" id="name" placeholder="Su Nombre" name="name">
									Nombre:
								</Input>
								<Input
									isError={errors.cellphone}
									htmlFor="celular"
									type="text"
									id="celular"
									placeholder="Número Personal"
									name="cellphone"
								>
									Celular:
								</Input>
								<Input
									isError={errors.location}
									htmlFor="localidad"
									type="text"
									id="localidad"
									placeholder="Su Localidad"
									name="location"
								>
									Localidad:
								</Input>
								<Input
									isError={errors.address}
									htmlFor="direccion"
									type="text"
									id="direccion"
									placeholder="Su Dirección"
									name="address"
								>
									Dirección:
								</Input>
								<ButtonContainer>
									<Submit disabled={!cartItems.length}>Confirmar</Submit>
								</ButtonContainer>
							</Form>
						)}
					</Formik>
				</ContainerFormConfirmar>
			</ContGeneral>
		</>
	);
};

export default FormConfirmar;
