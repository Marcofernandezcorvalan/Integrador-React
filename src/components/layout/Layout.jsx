import React, { useEffect } from "react";
import { LayoutStyled } from "./LayoutStyled";
import styled from "styled-components";
import Navbar, { ImgStyled } from "../Navbar/Navbar";
import logo from "../../assets/img/LogoNvidiaTransp.png";
import { useLocation } from "react-router-dom";

export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

export const FooterSyled = styled.footer`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	font-size: x-small;
	gap: 10px;
	font-weight: 600;
	padding: 30px;
	@media screen and (max-width: 550px) {
		padding: 10px;
		font-size: 12px;
	}
`;

export const PStyled = styled.p`
	font-size: 14px;
	@media screen and (max-width: 550px) {
		font-size: 11px;
	}
`;

export const UlStlyed = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	@media screen and (max-width: 550px) {
		font-size: 10px;
	}
	@media screen and (max-width: 420px) {
		font-size: 8px;
	}
`;

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<LayoutStyled>
				<Navbar />
				<ContentContainer>{children}</ContentContainer>
				<FooterSyled>
					<ImgStyled src={logo} alt="Nvidia Logo" />
					<PStyled>Copyright © 2022 NVIDIA Corporation</PStyled>
					<UlStlyed>
						<li>Terminos y Condiciones</li>
						<li>Política y Privacidad</li>
						<li>Marcas Registradas</li>
					</UlStlyed>
				</FooterSyled>
			</LayoutStyled>
		</>
	);
};

export default Layout;
