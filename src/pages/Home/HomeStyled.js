import styled from "styled-components";
// Hero
export const HeroContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 410px;
	margin-top: 120px;
	margin-bottom: 100px;
	max-width: 1300px;
	padding: 10px;
	border-radius: 10px;
	@media screen and (max-width: 768px) {
		margin-top: 90px;
	}
	@media screen and (max-width: 590px) {
		margin-top: 50px;
	}
	@media screen and (max-width: 420px) {
		margin-top: 30px;
	}
`;

export const HeroImg = styled.img`
	/* height: 110%; */
	width: 75%;
	border-radius: 10px;
	@media screen and (max-width: 992px) {
		width: 85%;
	}
	@media screen and (max-width: 768px) {
		width: 95%;
	}
	@media screen and (max-width: 590px) {
		width: 100%;
	}
	@media screen and (max-width: 420px) {
		height: 250px;
	}
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
	@media screen and (max-width: 768px) {
		font-size: 35px;
	}
`;

export const BenefitsCont = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 50px;
	width: 95%;
	max-width: 1300px;
	@media screen and (max-width: 992px) {
		width: 100%;
	}
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
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
	@media screen and (max-width: 992px) {
		padding: 20px;
		width: 40%;
	}
	@media screen and (max-width: 768px) {
		width: 50%;
		height: 300px;
	}
	@media screen and (max-width: 590px) {
		width: 70%;
		padding: 20px 30px;
		height: 250px;
	}
	@media screen and (max-width: 420px) {
		width: 90%;
	}
`;

export const BenefitsCardTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	color: var(--thirdtext);
	font-size: 23px;
	@media screen and (max-width: 768px) {
		font-size: 25px;
	}
	@media screen and (max-width: 420px) {
		font-size: 20px;
	}
`;

export const BenefitsCardP = styled.p`
	font-size: 13px;
	color: var(--text);

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
	@media screen and (max-width: 590px) {
		font-size: 13px;
	}
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
	@media screen and (max-width: 768px) {
		font-size: 35px;
	}
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
