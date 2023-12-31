import React from "react";
import { styled } from "styled-components";
import { ContGeneral } from "../Login/Login";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--thirdtext);
	font-size: 250px;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		font-size: 100px;
	}
`;

export const TitleCongrats = styled.h2`
	font-size: 20px;
	font-weight: 600;
	@media screen and (max-width: 768px) {
		font-size: 15px;
	}
`;

const Congrats = () => {
	const navigate = useNavigate();
	return (
		<>
			<ContGeneral>
				<IconContainer onClick={() => navigate("/compras")}>
					<AiOutlineCheckCircle />
				</IconContainer>
				<TitleCongrats>Disfrute su Compra!!!</TitleCongrats>
			</ContGeneral>
		</>
	);
};

export default Congrats;
