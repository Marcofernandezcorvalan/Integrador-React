import React from "react";
import { styled } from "styled-components";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHambur } from "../../../Redux/MenuHamburSlice/menuHamburSlice";
import { toggleCart } from "../../../Redux/carrito/carritoSlice";

export const MenuIconCont = styled.div`
	@media screen and (max-width: 10000px) {
		display: none;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		cursor: pointer;
	}
`;

const MenuIcon = () => {
	const dispatch = useDispatch();
	const hidden = useSelector((state) => state.carrito.hidden);
	return (
		<MenuIconCont
			onClick={() => {
				if (hidden === false) {
					dispatch(toggleCart());
				}
				dispatch(toggleMenuHambur());
			}}
		>
			<BiMenu />
		</MenuIconCont>
	);
};

export default MenuIcon;
