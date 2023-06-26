import React from "react";
import {
	ProductsCardButton,
	ProductsCardP,
	ProductsCardSecondCont,
	ProductsCardTitle,
	ProductsCardsImg,
	ProductsContCards,
} from "./ProductCardStyles";

const ProductCard = () => {
	return (
		<>
			<ProductsContCards>
				<ProductsCardsImg src="../../assets/img/rtx4090.jpg" />
				<ProductsCardTitle>Rtx4090</ProductsCardTitle>
				<ProductsCardSecondCont>
					<ProductsCardP>U$D 1800</ProductsCardP>
					<ProductsCardButton>Buy</ProductsCardButton>
				</ProductsCardSecondCont>
			</ProductsContCards>
		</>
	);
};

export default ProductCard;
