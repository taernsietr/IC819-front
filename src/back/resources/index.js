
import cpfValidation from "./validations/cpfValidation";
import emailValidation from "./validations/emailValidation";
import phoneValidation from "./validations/phoneValidation";

import generateAccessToken from "./validations/generateAccessToken";

const resources = {
	emailValidation,
	phoneValidation,
	cpfValidation,
	generateAccessToken,
};

export default resources;