// autenticações
import generateAccessToken from "./auth/generateAccessToken";
import checkUserAuth from "./auth/checkUserAuth";

// validações
import cpfValidation from "./validations/cpfValidation";
import emailValidation from "./validations/emailValidation";
import phoneNumberValidation from "./validations/phoneNumberValidation";
import nameValidation from "./validations/nameValidation";

// mensagens
import errorMessages from "./messages/errorMessages";

// tipos
import t from "./types";

// exceptions
import e from "./exceptions";

export const auth = {
	generateAccessToken,
	...checkUserAuth,
};

export const validations = {
	emailValidation,
	phoneNumberValidation,
	cpfValidation,
	nameValidation,
};

export const messages = {
	...errorMessages,
};

export const exceptions = {...e};

export const types = {
	...t,
};
