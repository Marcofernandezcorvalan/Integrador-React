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

const ProductCard = ({ img, name, price, id }) => {
	const dispatch = useDispatch();

	return (
		<>
			<ProductsContCards>
				<ProductsCardsImg src={img} alt={name} />
				<ProductsCardTitle>{name}</ProductsCardTitle>
				<ProductsCardSecondCont>
					<ProductsCardP>U$D {price}</ProductsCardP>
					<ProductsCardButton onClick={() => dispatch(addProduct({ img, name, price, id }))}>Buy</ProductsCardButton>
				</ProductsCardSecondCont>
			</ProductsContCards>
		</>
	);
};

export default ProductCard;
