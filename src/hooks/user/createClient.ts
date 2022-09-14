import { ClientDataType } from "../../types/types";
import axios from "axios";
import { AES } from 'crypto-ts';
// import dotenv from "dotenv";

// dotenv.config();


const customAxios = axios.create({ baseURL: "http://192.168.3.14:8080/"});

function createPasswordHash(pw: string) {
	console.log(`secret = ${process.env.ENCRYPT_SECRET}`);
	const secret = process.env.ENCRYPT_SECRET;

	const encryptedPw = AES.encrypt(
		pw,
		"0!95hw6b-4c6eo^@y@vvtcf!z#439@=fj%&k&(ocu0q$8y%v"
	).toString();

	console.log(`[createPasswordHash] enc = ${encryptedPw}`);

	return encryptedPw;
}


export const createClient = async (clientData: ClientDataType) => {
	let newClient: ClientDataType = clientData;
	const passwordHash = createPasswordHash(newClient.passwordHash);
	newClient.passwordHash = passwordHash;

	try {
		const response = await customAxios.post("/cliente/cadastrar", newClient);
	    console.log(response);
	} catch(error) {
	    console.log(error);
	}
}

	

