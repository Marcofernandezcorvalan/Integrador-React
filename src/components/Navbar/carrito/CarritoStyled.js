import { styled } from "styled-components";

export const CarritoCont = styled.div`
	position: absolute;
	top: 60px;
	right: 0;
	padding: 30px 20px;
	background: var(--secondbackground);
	display: flex;
	flex-direction: column;
	/* width: 250px; */
	gap: 20px;
	height: calc(100vh - 40px);

	overflow-y: scroll;
	/* display: none; */
	border-left: 1px solid var(--background);
	z-index: 1;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const CarritoTitle = styled.h2`
	color: var(--thirdtext);
	font-size: 20px;
	font-weight: 800;
	text-align: center;
	margin-bottom: 10px;
`;

export const CarritoCardsCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
`;

export const Divider = styled.span`
	margin-top: 20px;
	border: 2px solid var(--background);
`;

export const CarritoTotal = styled.div`
	display: flex;
	align-self: flex-end;
	& p {
		font-weight: 800;
	}
`;

export const ButtonCart = styled.button`
	color: var(--thirdtext);
	font-weight: 600;
	font-size: 15px;
	border: 1px solid rgb(71, 71, 71);
	width: 150px;
	text-align: center;
	border-radius: 4px;
	background-color: var(--background);
	padding: 3px 5px;
	align-self: center;
	cursor: pointer;
	&:hover {
		transform: scale(1.05);
		transition: all 0.3s ease;
	}
`;
