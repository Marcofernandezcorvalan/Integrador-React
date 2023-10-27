import React from "react";
import { styled } from "styled-components";
import FormConfirmar from "../../components/FormCompra/FormConfirmar";
import { useSelector } from "react-redux";
import useRedirectNoUser from "../../components/Hooks/useRedirectNoUser";

export const ContainerFormCompra = styled.div`
	display: flex;
	/* justify-content: space-between; */
	flex-wrap: wrap;
	padding: 30px;
`;

const FormCompra = () => {
	const { cartItems } = useSelector((state) => state.carrito);
	useRedirectNoUser("/login");
	const cartTotal = cartItems.reduce((acc, item) => {
		return acc + item.precio * item.quantity;
	}, 0);
	return (
		<>
			<ContainerFormCompra>
				<FormConfirmar cartItems={cartItems} total={cartTotal} />
			</ContainerFormCompra>
		</>
	);
};

export default FormCompra;
