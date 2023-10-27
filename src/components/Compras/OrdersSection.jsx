import React from "react";
import styled from "styled-components";
import CardOrders from "./CardOrders";
import { useSelector } from "react-redux";

export const OrdersSectionCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1300px;
	gap: 20px;
`;

export const ContLoad = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--thirdtext);
	font-weight: 800;
	font-size: 16px;
`;

const OrdersSection = () => {
	const { loading, error, orders } = useSelector((state) => state.orders);

	if (loading && !orders) {
		return <ContLoad>Loading</ContLoad>;
	}
	if (error) {
		return <h2 style={{ textAlign: "center", color: "darkred" }}>{error}</h2>;
	}

	return (
		<>
			<OrdersSectionCont>
				{orders?.length ? (
					orders.map((order) => {
						return <CardOrders {...order} key={order._id} />;
					})
				) : (
					<h3 style={{ color: "var(--thirdtext)" }}>Hacé tu pedido!</h3>
				)}
			</OrdersSectionCont>
		</>
	);
};

export default OrdersSection;
