import * as Yup from "yup";

const Regex = /\d{10}$/;
const RegexForName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

export const checkoutValidationSchema = Yup.object({
	name: Yup.string().trim().required("Complete Este Campo"),
	cellphone: Yup.string().required("Complete este Campo"),
	location: Yup.string().required("Complete este Campo"),
	address: Yup.string().required("Complete este Campo"),
});
