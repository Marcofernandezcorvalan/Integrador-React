import React from "react";
import styled from "styled-components";
import OrderStatus from "../../UI/orderStatus/OrderStatus";

export const OrderCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 400px;
	border-radius: 10px;
	padding: 10px;
	cursor: pointer;
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
				<TitleCont>
					<Title>ID: {_id.slice(0, 7)}</Title>
					<Fecha>Fecha{formatDate(createdAt)}hs</Fecha>
					<OrderPrice>{total}</OrderPrice>
				</TitleCont>
				<OrderStatus status={status} />
			</OrderCont>
		</>
	);
};

export default CardOrders;
