import React from "react";
import { LinkContainer } from "../Navbar";
import { BsCart2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../../Redux/carrito/carritoSlice";

const CartIcon = () => {
	const dispatch = useDispatch();
	return (
		<LinkContainer onClick={() => dispatch(toggleCart())}>
			<BsCart2 style={{ cursor: "pointer" }} />
		</LinkContainer>
	);
};

export default CartIcon;
