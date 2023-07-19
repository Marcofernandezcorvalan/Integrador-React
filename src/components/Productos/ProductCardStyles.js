import styled from "styled-components";

export const ProductsContCards = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 250px;
	height: 230px;
	background-color: var(--secondbackground);
	gap: 10px;
	border-radius: 10px;
	padding: 5px;
	transition: all 0.3s ease;

	&:hover {
		transition: all 0.3s ease;
		transform: scale(1.1);
		/* z-index: 0; */
	}
	@media screen and (max-width: 550px) {
		width: 80%;
		height: 320px;
		padding: 15px 10px;
	}
	@media screen and (max-width: 420px) {
		width: 90%;
		height: 300px;
	}
`;

export const ProductsCardsImg = styled.img`
	width: 95%;
	height: 60%;
	border-radius: 10px;
	@media screen and (max-width: 550px) {
		width: 100%;
		height: 75%;
	}
`;

export const ProductsCardTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
	color: var(--thirdtext);
	@media screen and (max-width: 550px) {
		font-size: 15px;
	}
`;

export const ProductsCardSecondCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	@media screen and (max-width: 550px) {
		font-size: 12px;
	}
`;

export const ProductsCardP = styled.p`
	font-size: 13px;
	font-weight: 600;
`;

export const ProductsCardButton = styled.button`
	background-color: #0d0d0d;
	padding: 8px;
	border-radius: 10px;
	color: var(--thirdtext);
	font-weight: 600;
	transition: all 0.3s ease-in-out;
	border: 1px solid var(--thirdtext);
	width: 60px;
	height: 30px;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		background-color: var(--secondarytext);
		color: var(--background);
		transition: all 0.3s ease-in-out;
		font-weight: 600;
	}
`;
