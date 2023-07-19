import React from "react";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../Redux/carrito/carritoSlice";
import { styled } from "styled-components";
import { toggleMenuHambur } from "../../../Redux/MenuHamburSlice/menuHamburSlice";

export const IconCont = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	font-weight: 600;
	@media screen and (max-width: 660px) {
		font-size: 18px;
	}
`;

const CartIcon = () => {
	const dispatch = useDispatch();
	const hiddenMenu = useSelector((state) => state.MenuHambur.hiddenMenu);

	return (
		<IconCont
			onClick={() => {
				if (hiddenMenu === false) {
					dispatch(toggleMenuHambur());
				}
				dispatch(toggleCart());
			}}
		>
			<BsCart2 style={{ cursor: "pointer" }} />
		</IconCont>
	);
};

export default CartIcon;
