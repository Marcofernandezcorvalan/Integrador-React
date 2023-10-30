import React, { useEffect } from "react";
import { TitleGen } from "../Login/Login";
import styled from "styled-components";
import OrdersSection from "../../components/Compras/OrdersSection";

import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axiosOrders";
import { clearError, fetchOrdersFail } from "../../Redux/orders/ordersSlice";

export const OrdersCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	@media screen and (max-width: 674px) {
		margin-top: 80px;
	}
`;

const Orders = () => {
	const { orders, error } = useSelector((state) => state.orders);
	const dispatch = useDispatch();
	const actualUser = useSelector((state) => state.user.actualUser);

	useEffect(() => {
		if (orders === null) {
			getOrders(dispatch, actualUser);
		}
		if (!actualUser?.token) {
			dispatch(fetchOrdersFail());
		} else {
			error && dispatch(clearError());
		}
	}, [actualUser?.token, orders, error]);

	return (
		<>
			<OrdersCont style={{ gap: "40px", height: "none" }}>
				<TitleGen>Tus Ordenes</TitleGen>
				<OrdersSection />
			</OrdersCont>
		</>
	);
};

export default Orders;
