import React, { useEffect } from "react";
import { ContGeneral, TitleGen } from "../Login/Login";
import styled from "styled-components";
import OrdersSection from "../../components/Compras/OrdersSection";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axiosOrders";
import { clearError, fetchOrdersFail } from "../../Redux/orders/ordersSlice";

const Orders = () => {
	const navigate = useNavigate();
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
			<ContGeneral style={{ gap: "40px" }}>
				<TitleGen>Tus Ordenes</TitleGen>
				<OrdersSection />
			</ContGeneral>
		</>
	);
};

export default Orders;
