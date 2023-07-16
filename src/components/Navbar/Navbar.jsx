import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import logo from "../../assets/img/LogoNvidiaTransp.png";
import CartIcon from "./carrito/CartIcon";
import Carrito from "./carrito/Carrito";

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
	padding: 30px 50px;
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

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			<NavbarStyled>
				<ImgStyled src={logo} alt="Nvidia Logo" onClick={() => navigate("/")} />
				<NavbarCont>
					<LinkContainer>
						<NavLinkStyled to="/">Home</NavLinkStyled>
						<NavLinkStyled to="/login">Login</NavLinkStyled>
						<NavLinkStyled to="/register">Register</NavLinkStyled>
					</LinkContainer>
					<CartIcon />
					<Carrito />
				</NavbarCont>
			</NavbarStyled>
		</>
	);
};

export default Navbar;
