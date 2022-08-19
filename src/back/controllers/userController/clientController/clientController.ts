// TODO: atualizar os paths para absolutos
import { Client, ClientModel } from "../../../models/client";

import type { ClientDataType } from "../../../resources/types";

import { handlers } from "../../../resources";

import { Response } from "express";

type createClientRequestType = {
	body: {
		data: ClientDataType
	}
}

async function createClient(req: createClientRequestType, res: Response) {
	try {
		const { data } = req.body;

		// validar os dados
		if (!Client.isNameValid(data?.name) || !Client.isCpfValid(data?.cpf) || !Client.isEmailValid(data?.email) || !Client.isPhoneNumberValid(data?.phone)) {
			res.status(401).send({
				code: handlers.invalidDataResponse.code,
				message: handlers.invalidDataResponse.message,
			});
		}

		// verificar se os dados que devem ser únicos já estão cadastrados
		const cpfAlreadyExists = await Client.getByCpf(data.cpf);
		const emailAlreadyExists = await Client.getByEmail(data.email);

		if (
			(cpfAlreadyExists.code !== handlers.successResponse.code && cpfAlreadyExists.result instanceof ClientModel) || 
			(emailAlreadyExists.code !== handlers.successResponse.code && emailAlreadyExists.result instanceof ClientModel)) {
			res.status(401).send({
				code: handlers.duplicatedUniqueDataResponse.code,
				message: handlers.duplicatedUniqueDataResponse.message,
			});
		}

		if (!data?.passwordHash) {
			// TODO: validação do passwordHash
			// enviar pro front que o hash está inválido
		}

		// TODO: criar token ? (criar no cadastro ou no login?)

		const newUser: ClientDataType = {
			...data,
			token: ""
		};

		const createdClient = await Client.createClient(newUser);
	
		res.status(201).send({
			code: handlers.createdResponse.code,
			message: handlers.createdResponse.message,
			result: createdClient,
		});

	} catch (e: any) {
		throw new Error(e);
	}
}


const userController = {
	createClient,
};

export default userController;
