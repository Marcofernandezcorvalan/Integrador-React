import styled from "styled-components";

export const HeroContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 410px;
	margin-top: 80px;
	margin-bottom: 100px;
	max-width: 1200px;
	padding: 10px;
	border-radius: 10px;
`;

export const HeroImg = styled.img`
	height: 110%;
	border-radius: 10px;
`;

export const Benefits = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 110px;
	/* padding: 50px; */
	border-radius: 10px;
	gap: 60px;
	margin-bottom: 100px;
	width: 100%;
`;

export const BenefitsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	width: 95%;
`;

export const BenefitsContCards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	background-color: var(--secondbackground);
	padding: 20px 30px;
	border-radius: 10px;
	width: 30%;
	height: 250px;
`;

export const BenefitsCardTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	color: var(--thirdtext);
	font-size: 23px;
`;

export const BenefitsCardP = styled.p`
	font-size: 13px;
	color: var(--text);
`;
