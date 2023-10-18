import * as Yup from "yup";

const Regex = /\d{10}$/;
const RegexForName = /^([^0-9]*)$/;
const RegexOnlyNum = /^[0-9]+$/;
const RegexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const RegexPassw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const checkoutValidationSchema = Yup.object({
	name: Yup.string().trim().matches(RegexForName, "No se permiten Números").required("Complete este Campo"),
	cellphone: Yup.string()
		.matches(RegexOnlyNum, "Solo Números")
		.matches(Regex, "10 Caracteres Mínimo")
		.required("Complete este Campo"),
	location: Yup.string().trim().matches(RegexForName, "No se permiten Números").required("Complete este Campo"),
	address: Yup.string().trim().required("Complete este Campo"),
});

export const LogRegValidationSchema = Yup.object({
	name: Yup.string().trim().matches(RegexForName, "No se permiten Números").required("Complete este Campo"),
	email: Yup.string().matches(RegexMail, "Escriba su E-mail").required("Complete este Campo"),
	password: Yup.string()
		.min(8, "Mínimo 8 Caracteres")
		.matches(RegexPassw, "Una Mayúscula y Un Número")
		.required("Complete este Campo"),
});

export const LoginValidationSchema = Yup.object({
	email: Yup.string().matches(RegexMail, "Escriba su E-mail").required("Complete este Campo"),
	password: Yup.string()
		.min(8, "Mínimo 8 Caracteres")
		.matches(RegexPassw, "Una Mayúscula y Un Número")
		.required("Complete este Campo"),
});

export const ContactUsValidationSchema = Yup.object({
	email: Yup.string().matches(RegexMail, "Escriba su E-mail").required("Complete este Campo"),
	name: Yup.string().trim().matches(RegexForName, "No se permiten Números").required("Complete este Campo"),
	cellphone: Yup.string()
		.matches(RegexOnlyNum, "Solo Números")
		.matches(Regex, "10 Caracteres Mínimo")
		.required("Complete este Campo"),
});
