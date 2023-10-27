import React from "react";
import { styled } from "styled-components";
import { Form as FormikForm, Formik as FormikCont } from "formik";
import Input from "../../UI/Input/Input";
import { CheckoutInitialValues } from "../../Formik/initialValues";
import { checkoutValidationSchema } from "../../Formik/validationSchema";
import Submit from "../../UI/Submit/Submit";
import { useNavigate } from "react-router-dom";
import { ContGeneral } from "../../pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/carrito/carritoSlice";
import { createOrders } from "../../axios/axiosOrders";

export const ContainerFormConfirmar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	gap: 20px;
	@media screen and (max-width: 488px) {
		gap: 0px;
	}
`;

export const TitleConfirm = styled.h2`
	font-size: 23px;
	font-weight: 700;
	color: #8bbe33ef;
	margin-bottom: 30px;
	@media screen and (max-width: 480px) {
		font-size: 15px;
	}
`;

export const Form = styled(FormikForm)`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 20px;

	justify-content: space-between;
	@media screen and (max-width: 488px) {
		flex-direction: column;
		width: 100%;
		padding: 0px;
	}
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

const FormConfirmar = ({ total }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { actualUser } = useSelector((state) => state.user);
	const { cartItems } = useSelector((state) => state.carrito);
	return (
		<>
			<ContGeneral>
				<ContainerFormConfirmar>
					<TitleConfirm>Complete los siguientes Campos:</TitleConfirm>
					<Formik
						initialValues={CheckoutInitialValues}
						validationSchema={checkoutValidationSchema}
						onSubmit={async (values) => {
							const orderData = {
								items: cartItems,
								total,
								shippingDetails: {
									...values,
								},
							};

							try {
								await createOrders(orderData, dispatch, actualUser);
								navigate("/Congrats");
								dispatch(clearCart());
							} catch (error) {
								console.log(error);
								return alert("Error al crear la orden.");
							}
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
									{/* items.length?  */}
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
