import React from "react";
import { styled } from "styled-components";
import contactUsImg from "../../assets/img/ContactUsImg.png";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import { ProductsCardButton } from "../Productos/ProductCardStyles";

export const ContactUsCont = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 60px;
	margin-top: 150px;
	margin-bottom: 100px;
	width: 95%;
`;
export const ContactUsTitle = styled.h2`
	font-size: 32px;
`;
export const ContactUsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: var(--secondbackground);
	padding: 20px;
	border-radius: 10px;
	gap: 50px;
`;
export const ContactUsImg = styled.img`
	border-radius: 10px;
	width: 40%;
`;

export const ContactUsActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 20px;
	width: 70%;
`;

export const ContactUsForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60%;
	gap: 10px;
`;

export const ContactUsFormInput = styled.input`
	padding: 10px;
	width: 50%;
	border-radius: 8px;
	background: var(--secondbackground);
	color: var(--text);
	border: 1px solid #9bd23d74;
	&::placeholder {
		color: var(--text);
	}
`;

export const ContactUsSocial = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 30%;
	gap: 10px;
`;

export const ContactUsSocialTitle = styled.h4`
	font-weight: 600;
`;

export const SocialCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60%;
	gap: 10px;
`;

export const SocialP = styled.p`
	color: var(--thirdtext);
	font-weight: 500;
	font-size: 15px;
	transition: all 0.3s ease;
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease;
		transform: scale(0.93);
	}
`;

export const SocialIcon = styled.div`
	width: 20%;
	/* border-radius: 10px; */
	align-items: center;
	align-self: flex-end;
`;

const ContactUs = () => {
	return (
		<>
			<ContactUsCont>
				<ContactUsTitle>Contactanos</ContactUsTitle>
				<ContactUsContainer>
					<ContactUsImg src={contactUsImg} alt="Ubicación" />
					<ContactUsActions>
						<ContactUsSocial>
							<ContactUsSocialTitle>Social</ContactUsSocialTitle>
							<SocialCont>
								<SocialP>Instagram</SocialP>
								<SocialIcon>
									<BsInstagram />
								</SocialIcon>
							</SocialCont>
							<SocialCont>
								<SocialP>Facebook</SocialP>
								<SocialIcon>
									<AiOutlineFacebook />
								</SocialIcon>
							</SocialCont>
							<SocialCont>
								<SocialP>Twitter</SocialP>
								<SocialIcon>
									<LuTwitter />
								</SocialIcon>
							</SocialCont>
						</ContactUsSocial>
						<ContactUsForm>
							<ContactUsSocialTitle>Support</ContactUsSocialTitle>
							<ContactUsFormInput type="text" placeholder="Name" />
							<ContactUsFormInput type="text" placeholder="Surname" />
							<ContactUsFormInput type="email" placeholder="Email" />
							<ProductsCardButton>Send</ProductsCardButton>
						</ContactUsForm>
					</ContactUsActions>
				</ContactUsContainer>
			</ContactUsCont>
		</>
	);
};

export default ContactUs;
