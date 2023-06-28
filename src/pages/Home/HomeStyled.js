import styled from "styled-components";
// Hero
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
// Benefits
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

export const BenefitsTitle = styled.h2`
	font-size: 32px;
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
// Products
export const Products = styled.section`
	margin-top: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	gap: 20px;
	margin-bottom: 100px;
	margin-top: 150px;
`;

export const ProductsTitle = styled.h2`
	font-size: 32px;
`;

export const ProductsCategoriesCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	gap: 20px;
	margin-bottom: 20px;
	.active {
		background: var(--secondarytext);
		color: var(--background);
		border: 1px solid var(--background);
		transition: all 0.3s ease;
	}
`;

export const ProductsCategory = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	padding: 5px;
	border-radius: 10px;
	width: 100px;
	font-weight: 600;
	background: var(--secondbackground);
	color: var(--thirdtext);
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
`;
