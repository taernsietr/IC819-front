// autenticações
import generateAccessToken from "./auth/generateAccessToken.js";
import checkUserAuth from "./auth/checkUserAuth.js";
import { comparePasswordHash, decryptData, createPasswordHash } from "./auth/passwordHash.js";

// validações
import cpfValidation from "./validations/cpfValidation.js";
import emailValidation from "./validations/emailValidation.js";
import phoneValidation from "./validations/phoneValidation.js";
import nameValidation from "./validations/nameValidation.js";

// padões de respostas
import codes from "./responseCodes/responseCodes.js";

export const auth = {
	generateAccessToken,
	// ...checkUserAuth,
	comparePasswordHash,
	decryptData,
	createPasswordHash,
};

export const validations = {
	emailValidation,
	phoneValidation,
	cpfValidation,
	nameValidation,
};

export const responseCodes = {
	...codes,
};
