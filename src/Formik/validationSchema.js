import * as Yup from "yup";

const Regex = /\d{10}$/;
const RegexForName = /^([^0-9]*)$/;

export const checkoutValidationSchema = Yup.object({
	name: Yup.string().trim().matches(RegexForName, "No se permiten Números").required("Complete este Campo"),
	cellphone: Yup.string().matches(Regex, "10 Caracteres Mínimo").required("Complete este Campo"),
	location: Yup.string().matches(RegexForName, "No se permiten Números").required("Complete este Campo"),
	address: Yup.string().required("Complete este Campo"),
});
