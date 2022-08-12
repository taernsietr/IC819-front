// import "./admController";
// import "./clientController";

// type userControllerType = {
//   admController: Object,
//   clientController: Object
// };

// const userController: userControllerType = {
// 	admController: {},
// 	clientController: {}
// };

// TODO: importar models
const { Client } = require("../../models/client");

type newUserType = {
  name: string,
  cpf: string,
	email: string,
	phone: string,
	passwordHash: string,
	// TODO: ver se vamos precisar 
	addressID: string, // TODO: ver como vamos guardar as IDs
	token: string // TODO: ver como definir o tipo do token
}

async function createClient (clientData: typeof Client ) {
	try {
		// TODO: verificar se nada é nulo
		Client.checkNull(clientData);
		
		// TODO: verificar se são válidos
	
		// TODO: criar hash de senha
		
		// TODO: criar usuário

	} catch (error) {
		// throw error;
	}
}

// TODO: sincronizar modelo -> await User.sync({ force: true });


const userController = {
	createClient,

};

export default userController;