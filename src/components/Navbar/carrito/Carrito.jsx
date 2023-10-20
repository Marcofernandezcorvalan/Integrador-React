import React from "react";
import { ButtonCart, CarritoCardsCont, CarritoCont, CarritoTitle, CarritoTotal, Divider } from "./CarritoStyled";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CarritoItem from "./CarritoItem";
import { useNavigate } from "react-router-dom";
import { clearCart, toggleCart } from "../../../Redux/carrito/carritoSlice";
import useRedirectNoUser from "../../Hooks/useRedirectNoUser";

const Carrito = () => {
	const hidden = useSelector((state) => state.carrito.hidden);
	const { cartItems } = useSelector((state) => state.carrito);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cartTotal = cartItems.reduce((acc, item) => {
		return acc + item.precio * item.quantity;
	}, 0);

	return (
		<>
			<AnimatePresence>
				{!hidden && (
					<CarritoCont>
						<CarritoTitle>Tus Compras</CarritoTitle>
						<CarritoCardsCont>
							{cartItems.length ? (
								cartItems.map((item) => {
									return <CarritoItem {...item} key={item.id} />;
								})
							) : (
								<p style={{ color: "rgba(183, 42, 42, 0.972)", fontSize: "12px" }}>No Hay productos en tu carrito</p>
							)}
						</CarritoCardsCont>
						<Divider />
						<CarritoTotal>{`U$D ${cartTotal}`}</CarritoTotal>
						<ButtonCart
							disabled={!cartItems.length}
							onClick={() => {
								navigate("/ConfirmarCompra");
								dispatch(toggleCart());
							}}
						>
							Buy
						</ButtonCart>
						<ButtonCart onClick={() => dispatch(clearCart())} disabled={!cartItems.length}>
							Clean
						</ButtonCart>
					</CarritoCont>
				)}
			</AnimatePresence>
		</>
	);
};

export default Carrito;
