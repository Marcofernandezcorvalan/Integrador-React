import React from "react";
import {
	Benefits,
	BenefitsCardP,
	BenefitsCardTitle,
	BenefitsCont,
	BenefitsContCards,
	BenefitsTitle,
	HeroContainer,
	HeroImg,
	Products,
	ProductsCategoriesCont,
	ProductsCategory,
	ProductsTitle,
} from "./HomeStyled";
import Portada from "../../assets/img/rtx-portada.jpg";
import { AiOutlinePaperClip } from "react-icons/ai";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import ProductsSection from "../../components/Productos/ProductsSection";
import ContactUs from "../../components/ContactUs/ContactUs";
import ProductsCategories from "../../components/Productos/ProductsCategories";

const Home = () => {
	return (
		<>
			{/* Hero */}
			<HeroContainer>
				<HeroImg src={Portada} alt="rtx portada" />
			</HeroContainer>
			{/* Benefits */}
			<Benefits>
				<BenefitsTitle>Beneficios</BenefitsTitle>
				<BenefitsCont>
					<BenefitsContCards>
						<BenefitsCardTitle>
							<AiOutlinePaperClip />
							<h3>Garantía</h3>
						</BenefitsCardTitle>
						<BenefitsCardP style={{ textAlign: "justify" }}>
							Unos de nuestros beneficios es la garantía asegurada en cada compra de unos de nuestros productos. Esta
							garantía puede llegar a variar entre uno u dos años, dependiendo el producto que usted elija.
						</BenefitsCardP>
					</BenefitsContCards>
					<BenefitsContCards>
						<BenefitsCardTitle>
							<CiBookmarkCheck />
							<h3>Calidad</h3>
						</BenefitsCardTitle>
						<BenefitsCardP style={{ textAlign: "justify" }}>
							La calidad de cada uno de nuestros componentes son premium. Gracias a esto, nuestros productos son de
							altísima calidad, lo que hace que se logre una duración de muchos años y que por supuesto nuestros
							productos no te fallen.
						</BenefitsCardP>
					</BenefitsContCards>
					<BenefitsContCards>
						<BenefitsCardTitle>
							<FaRegStar />
							<h3>Experiencia</h3>
						</BenefitsCardTitle>
						<BenefitsCardP style={{ textAlign: "justify" }}>
							La experiencia al comprar y al utilizar nuestros productos es de las mejores, no dicho por nosotros...
							sino por nuestros clientes, que gracias a las valoraciones que nos dejan en cada una de sus compras, lo
							sabemos.
						</BenefitsCardP>
					</BenefitsContCards>
				</BenefitsCont>
			</Benefits>
			{/* Products  */}
			<Products>
				<ProductsTitle>Productos</ProductsTitle>
				<ProductsCategories />
				<ProductsSection />
			</Products>
			{/* ContactUs */}
			<ContactUs />
		</>
	);
};

export default Home;
