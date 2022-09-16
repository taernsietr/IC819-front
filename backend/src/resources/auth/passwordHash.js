import CryptoJS from "crypto-js";
import * as dotenv from "dotenv";

dotenv.config();

function createPasswordHash(pw) {
	console.log(`secret = ${process.env.ENCRYPT_SECRET}`);

	const encryptedPw = CryptoJS.AES.encrypt(
		pw,
		process.env.ENCRYPT_SECRET,
	).toString();

	console.log(`[createPasswordHash] enc = ${encryptedPw}`);

	return encryptedPw;
}

function decryptData(encryptedData) {
	const bytes = CryptoJS.AES.decrypt(
		encryptedData,
		process.env.ENCRYPT_SECRET,
	);

	const originalData = bytes.toString(CryptoJS.enc.Utf8);
	console.log(`[decryptData] orginal = ${originalData}`);

	return originalData;
}

function comparePasswordHash(pass1, pass2) {
	if (!pass1 === pass2) {
		console.log("[comparePasswordHash] false");

		return false;
	}

	console.log("[comparePasswordHash] true");

	return true;
}

export {
	createPasswordHash,
	decryptData,
	comparePasswordHash,
};
