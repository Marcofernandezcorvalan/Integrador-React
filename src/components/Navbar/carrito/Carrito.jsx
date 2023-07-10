import React from "react";
import { ButtonCart, CarritoCardsCont, CarritoCont, CarritoTitle, CarritoTotal, Divider } from "./CarritoStyled";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Carrito = () => {
	const hidden = useSelector((state) => state.carrito.hidden);

	return (
		<>
			<AnimatePresence>
				{!hidden && (
					<CarritoCont>
						<CarritoTitle>Tus Compras</CarritoTitle>
						<CarritoCardsCont></CarritoCardsCont>
						<Divider />
						<CarritoTotal></CarritoTotal>
						<ButtonCart>Buy</ButtonCart>
						<ButtonCart>Clean</ButtonCart>
					</CarritoCont>
				)}
			</AnimatePresence>
		</>
	);
};

export default Carrito;
