import React from "react";
import {
	ProductsCardButton,
	ProductsCardP,
	ProductsCardSecondCont,
	ProductsCardTitle,
	ProductsCardsImg,
	ProductsContCards,
} from "./ProductCardStyles";

const ProductCard = ({ img, name, precio }) => {
	return (
		<>
			<ProductsContCards>
				<ProductsCardsImg src={img} alt={name} />
				<ProductsCardTitle>{name}</ProductsCardTitle>
				<ProductsCardSecondCont>
					<ProductsCardP>U$D {precio}</ProductsCardP>
					<ProductsCardButton>Buy</ProductsCardButton>
				</ProductsCardSecondCont>
			</ProductsContCards>
		</>
	);
};

export default ProductCard;
