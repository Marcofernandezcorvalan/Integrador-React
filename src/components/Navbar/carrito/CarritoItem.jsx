import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addProduct, removeProduct } from "../../../Redux/carrito/carritoSlice";

export const CartItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
	border-radius: 10px;
	width: 250px;
	background: var(--background);
	padding: 10px;
`;

export const ItemImg = styled.img`
	width: 95%;
	border-radius: 10px;
`;

export const ItemInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 95%;
	text-align: center;
`;

export const ItemTitle = styled.h3`
	font-size: 12px;
	font-weight: 800;
	color: var(--thirdtext);
`;

export const ItemPrecio = styled.span`
	font-size: 11px;
	font-weight: 800;
`;

export const ItemCantidad = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	font-size: 10px;
`;

export const CantidadNum = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2px 10px;
	border-radius: 5px;
	font-weight: 800;
	font-size: 12px;
`;

export const RestSum = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--thirdtext);
	border-radius: 5px;
	cursor: pointer;
	font-size: 10px;
	width: 20px;
	color: var(--background);
	&:hover {
		transform: scale(1.1);
		transition: all 0.3s ease;
	}
`;

const CarritoItem = ({ img, name, price, id, quantity }) => {
	const dispatch = useDispatch();

	return (
		<>
			<CartItem>
				<ItemImg src={img} alt={name} />
				<ItemInfo>
					<ItemTitle>{name}</ItemTitle>
					<ItemPrecio>{`U$D ${price}`}</ItemPrecio>
				</ItemInfo>
				<ItemCantidad>
					<RestSum onClick={() => dispatch(removeProduct(id))}>-</RestSum>
					<CantidadNum>{quantity}</CantidadNum>
					<RestSum onClick={() => dispatch(addProduct({ img, name, price, id, quantity }))}>+</RestSum>
				</ItemCantidad>
			</CartItem>
		</>
	);
};

export default CarritoItem;
