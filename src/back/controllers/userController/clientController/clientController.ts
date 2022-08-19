import { Client, ClientModel } from "../../../models/client";
import type { ClientDataType } from "../../../resources/types";

import { Request, Response } from "express";

type createClientRequestType = {
	body: {
		data: ClientDataType
	}
}
// export interface responseType {
// 	message?: string;
// 	error?: string;
// }

// export type createResponseType  =  {
// 	message?: string;
// 	error?: "INVALID_DATA";
// }

// add req/res
async function createClient(req: createClientRequestType, res: Response) {
	try {
		const { data } = req.body;

		// validar os dados
		if (!Client.isNameValid(data?.name) || !Client.isCpfValid(data?.cpf) || !Client.isEmailValid(data?.email) || !Client.isPhoneNumberValid(data?.phone)) {
			res.status(401).send({
				code: "INVALID_DATA",
				
			});
		}

		const cpfAlreadyExists = await Client.getByCpf(data.cpf);

		if(cpfAlreadyExists.result instanceof ClientModel) {
			// cpf já cadastrado
		}

		if (!data?.passwordHash) {
			// enviar pro front que o hash está inválido
		}


		const newUser: ClientDataType = {
			name: "",
			cpf: "",
			email: "",
			phone: "",
			passwordHash: "",
			token: ""
		};

		// TODO: criar usuário
		Client.createClient(newUser);

		res.status(201).send({

		});

	} catch (e: any) {
		throw new Error(e);
	}
}


const userController = {
	createClient,

};

export default userController;
