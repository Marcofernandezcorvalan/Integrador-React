import React from "react";
import styled from "styled-components";
import OrderStatus from "../../UI/orderStatus/OrderStatus";

export const OrderCont = styled.div`
	display: flex;
	align-items: center;
	width: 330px;
	border-radius: 10px;
	padding: 20px 30px;
	cursor: pointer;
	background-color: var(--secondbackground);
	justify-content: space-between;
	@media screen (max-width: 470px) {
		width: 80%;
	}
`;

export const TitleCont = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.h3`
	font-size: 14px;
`;

export const Fecha = styled.p`
	font-size: 12px;
`;

export const OrderPrice = styled.span`
	font-weight: 600;
	font-size: 15px;
`;

const CardOrders = ({ createdAt, status, total, _id }) => {
	const formatDate = (date) => {
		const fecha = date?.split("T")[0];
		const fechaLegible = fecha?.split("-").reverse().join("/");
		const hora = date?.split("T")[1].split(".")[0];
		const horaLegible = hora?.split(":").slice(0, 2).join(":");
		return `${fechaLegible} ${horaLegible}`;
	};

	return (
		<>
			<OrderCont onClick={(e) => e.preventDefault()}>
				<OrderStatus status={status} />
				<TitleCont>
					<Title>ID: {_id.slice(0, 10)}</Title>
					<Fecha>Fecha {formatDate(createdAt)}hs</Fecha>
					<OrderPrice>U$D {total}</OrderPrice>
				</TitleCont>
			</OrderCont>
		</>
	);
};

export default CardOrders;
