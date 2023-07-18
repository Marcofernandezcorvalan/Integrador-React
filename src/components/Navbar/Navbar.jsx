import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import logo from "../../assets/img/LogoNvidiaTransp.png";
import CartIcon from "./carrito/CartIcon";
import Carrito from "./carrito/Carrito";
import MenuIcon from "./MenuHambur/MenuIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHambur } from "../../Redux/MenuHamburSlice/menuHamburSlice";

export const zoomAnimation = keyframes`

		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(0.8);
		}

		100% {
			transform: scale(1);
		}
`;

export const NavbarStyled = styled.header`
	display: flex;
	height: 50px;
	background: var(--secondbackground);
	justify-content: space-between;
	align-items: center;
	padding: 30px 30px;
	gap: 30px;
	top: 0;
	position: fixed;
	width: 100%;
	z-index: 1;
`;
export const ImgStyled = styled.img`
	height: 30px;
	animation: ${zoomAnimation} 3s infinite;
	cursor: pointer;
`;

export const LinkContainer = styled.ul`
	display: flex;
	align-items: center;
	gap: 30px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavLinkStyled = styled(NavLink)`
	color: var(--text);
	font-weight: 600;
	font-size: 15px;
	&.active {
		color: var(--thirdtext);
	}
`;

export const NavbarCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`;

export const MenuHamburContLinks = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		/* display: none; */
		position: absolute;
		margin-left: 0px;
		top: 50px;
		left: 70%;
		right: 5%;
		width: 30%;
		flex-direction: column;
		border-top: 0px;
		border-radius: 0px 0px 10px 10px;
		align-items: center;
		padding: 45px 30px;
		gap: 20px;
		z-index: 2;
		background-color: var(--secondbackground);
	}
`;

const Navbar = () => {
	const navigate = useNavigate();
	const hiddenMenu = useSelector((state) => state.MenuHambur.hiddenMenu);
	const dispatch = useDispatch();

	return (
		<>
			<NavbarStyled>
				<ImgStyled src={logo} alt="Nvidia Logo" onClick={() => navigate("/")} />
				<NavbarCont>
					<MenuIcon />

					<LinkContainer>
						<NavLinkStyled to="/">Home</NavLinkStyled>
						<NavLinkStyled to="/login">Login</NavLinkStyled>
						<NavLinkStyled to="/register">Register</NavLinkStyled>
					</LinkContainer>

					{!hiddenMenu && (
						<MenuHamburContLinks>
							<NavLinkStyled onClick={() => dispatch(toggleMenuHambur())} to="/">
								Home
							</NavLinkStyled>
							<NavLinkStyled onClick={() => dispatch(toggleMenuHambur())} to="/login">
								Login
							</NavLinkStyled>
							<NavLinkStyled onClick={() => dispatch(toggleMenuHambur())} to="/register">
								Register
							</NavLinkStyled>
						</MenuHamburContLinks>
					)}
					<CartIcon />
					<Carrito />
				</NavbarCont>
			</NavbarStyled>
		</>
	);
};

export default Navbar;
