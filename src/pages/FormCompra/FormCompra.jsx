import React from "react";
import { styled } from "styled-components";
import FormConfirmar from "../../components/FormCompra/FormConfirmar";
import { useSelector } from "react-redux";

export const ContainerFormCompra = styled.div`
	display: flex;
	/* justify-content: space-between; */
	flex-wrap: wrap;
	padding: 30px;
`;

const FormCompra = () => {
	const { cartItems } = useSelector((state) => state.carrito);
	return (
		<>
			<ContainerFormCompra>
				<FormConfirmar cartItems={cartItems} />
			</ContainerFormCompra>
		</>
	);
};

export default FormCompra;