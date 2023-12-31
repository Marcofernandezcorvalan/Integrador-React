import React from "react";
import { styled } from "styled-components";
import contactUsImg from "../../assets/img/ContactUsImg.png";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import { ProductsCardButton } from "../Productos/ProductCardStyles";
import Input from "../../UI/Input/Input";
import { Formik, Form as FormikForm } from "formik";
import { ContactUsValidationSchema } from "../../Formik/validationSchema";
import { ContactUsInitialValues } from "../../Formik/initialValues";

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
	padding: 10px;
	border-radius: 10px;
	gap: 50px;
	max-width: 1300px;
	@media screen and (max-width: 992px) {
		gap: 10px;
	}
	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 30px 10px;
	}
	@media screen and (max-width: 590px) {
		padding: 10px;
	}
	@media screen and (max-width: 420px) {
		width: 95%;
		padding: 15px;
	}
`;
export const ContactUsImg = styled.img`
	border-radius: 10px;
	width: 40%;
	@media screen and (max-width: 992px) {
		width: 45%;
	}
	@media screen and (max-width: 768px) {
		width: 75%;
		height: 300px;
	}
	@media screen and (max-width: 590px) {
		width: 100%;
	}
	@media screen and (max-width: 420px) {
		display: none;
	}
`;

export const ContactUsActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 20px;
	width: 70%;
	@media screen and (max-width: 992px) {
		gap: 10px;
	}
	@media screen and (max-width: 768px) {
		gap: 20px;
		width: 90%;
	}
	@media screen and (max-width: 590px) {
		width: 100%;
	}
	@media screen and (max-width: 420px) {
		flex-direction: column-reverse;
		gap: 30px;
	}
`;

export const ContactUsForm = styled(FormikForm)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 45%;
	gap: 5px;
	border-radius: 10px;
	background-color: var(--background);
	padding: 20px;
	@media screen and (max-width: 992px) {
		width: 60%;
	}
	@media screen and (max-width: 768px) {
		width: 45%;
	}
	@media screen and (max-width: 590px) {
		padding: 10px;
	}
	@media screen and (max-width: 420px) {
		width: 80%;
	}
	@media screen and (max-width: 380px) {
		width: 100%;
	}
`;

export const ContactUsFormInput = styled.input`
	padding: 10px;
	width: 50%;
	border-radius: 8px;
	background: var(--background);
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
	@media screen and (max-width: 768px) {
		width: 40%;
	}
	@media screen and (max-width: 420px) {
		width: 60%;
	}
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
	@media screen and (max-width: 420px) {
		justify-content: center;
	}
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
	@media screen and (max-width: 590px) {
		font-size: 12px;
	}
	@media screen and (max-width: 420px) {
		font-size: 15px;
	}
`;

export const SocialIcon = styled.div`
	width: 20%;
	/* border-radius: 10px; */
	align-items: center;
	align-self: flex-end;
	@media screen and (max-width: 590px) {
		font-size: 12px;
	}
	@media screen and (max-width: 420px) {
		font-size: 17px;
	}
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
						<Formik
							validationSchema={ContactUsValidationSchema}
							initialValues={ContactUsInitialValues}
							onSubmit={({ resetForm }) => resetForm()}
						>
							{({ errors }) => (
								<ContactUsForm>
									<ContactUsSocialTitle>Support</ContactUsSocialTitle>

									<Input as={ContactUsFormInput} isError={errors.name} type="text" placeholder="Name" name="name" />
									<Input
										as={ContactUsFormInput}
										isError={errors.cellphone}
										type="text"
										placeholder="Celular"
										name="cellphone"
									/>
									<Input as={ContactUsFormInput} isError={errors.email} type="text" placeholder="Email" name="email" />
									<ProductsCardButton>Send</ProductsCardButton>
								</ContactUsForm>
							)}
						</Formik>
					</ContactUsActions>
				</ContactUsContainer>
			</ContactUsCont>
		</>
	);
};

export default ContactUs;
