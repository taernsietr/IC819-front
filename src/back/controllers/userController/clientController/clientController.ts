import { Client } from "../../../models/client";

import type { ClientDataType} from "../../../models/client";

import exceptions from "../../../resources/exceptions";
const { EmptyDataException, InvalidDataException } = exceptions;

// add req/res
async function createClient(clientData: ClientDataType ) {
	try {
		// TODO: verificar se nada é nulo
		if (Client.isDataNull(clientData)) {
			// throw  
			
		}
		
		// TODO: verificar se são válidos
		Client.isDataValid(clientData);

		// TODO: verificar se os dados únicos não existem no bd
		Client.doesUniqueDataAlreadyExists({ cpf: clientData.cpf, email: clientData.email });

		const newUser: ClientDataType = {
			name: "",
			cpf: "",
			email: "",
			phone: "",
			passwordHash: "",
			addressID: "",
			token: ""
		};

		// TODO: criar usuário
		Client.createClient(newUser);

	} catch (error) {
		// throw error;
	}
}

const userController = {
	createClient,

};

export default userController;
