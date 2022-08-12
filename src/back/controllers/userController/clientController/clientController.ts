import C from "../../../models/client";
import type { ClientType, ClientDataType, userClientType} from "../../../models/client";

// descontruir o objeto C, pra n ter que acessar "C.Client.isDataNull()" por exemplo
const { Client, ClientModel } = C;

async function createClient(clientData: ClientDataType ) {
	try {
		// TODO: verificar se nada é nulo
		Client.isDataNull(clientData);
		
		// TODO: verificar se são válidos
		Client.isDataValid(clientData);

		// TODO: verificar se os dados únicos não existem no bd
		Client.doesUniqueDataAlreadyExists({ cpf: clientData.cpf, email: clientData.email });

		// TODO: criar hash de senha
		const hash = "";

		const newUser: userClientType = {
			name: "",
			cpf: "",
			email: "",
			phone: "",
			passwordHash: "",
			addressID: "",
			token: ""
		};

		// TODO: criar usuário
		Client.createUser(newUser); // ver se o front já vai mandar o hash ou não

	} catch (error) {
		// throw error;
	}
}

const userController = {
	createClient,

};

export default userController;
