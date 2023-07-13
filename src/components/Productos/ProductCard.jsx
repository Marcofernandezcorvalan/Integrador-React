import React from "react";
import {
	ProductsCardButton,
	ProductsCardP,
	ProductsCardSecondCont,
	ProductsCardTitle,
	ProductsCardsImg,
	ProductsContCards,
} from "./ProductCardStyles";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/carrito/carritoSlice";

const ProductCard = ({ img, name, precio, id }) => {
	const dispatch = useDispatch();

	return (
		<>
			<ProductsContCards>
				<ProductsCardsImg src={img} alt={name} />
				<ProductsCardTitle>{name}</ProductsCardTitle>
				<ProductsCardSecondCont>
					<ProductsCardP>U$D {precio}</ProductsCardP>
					<ProductsCardButton onClick={() => dispatch(addProduct({ img, name, precio, id }))}>Buy</ProductsCardButton>
				</ProductsCardSecondCont>
			</ProductsContCards>
		</>
	);
};

export default ProductCard;
