import React from "react";
import { LayoutStyled } from "./LayoutStyled";
import styled from "styled-components";
import Navbar, { ImgStyled } from "../Navbar/Navbar";

export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: calc(100vh - 120px);
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
`;

export const UlStlyed = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const Layout = ({ children }) => {
	return (
		<>
			<LayoutStyled>
				<Navbar />
				<ContentContainer>{children}</ContentContainer>
				<FooterSyled>
					<ImgStyled src="../../../public/LogoNvidiaTransp.png" alt="Nvidia Logo" />
					<p>Copyright © 2022 NVIDIA Corporation</p>
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
