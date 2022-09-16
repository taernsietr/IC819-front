import {ClientDataType, ClientDataInput} from "../../types/types";  

export const filterInput = (clientData: ClientDataType) => {
	// Removendo qualquer tipo de espaço
	function cleanSpaceInputs(newClient: ClientDataType): ClientDataType{
		const name: string = newClient.name.trim().replace(/\s\s+/," ");
		const cpf: string = newClient.cpf.trim().replace(/\s\s+/,"");
		const email: string = newClient.email.trim().replace(/\s\s+/,"");
		const phone: string = newClient.phone.trim().replace(/\s\s+/,"");
		const passwordHash: string = newClient.passwordHash.trim().replace(/\s\s+/,"");
		const filterClient: ClientDataType = {
			name: name,
			cpf: cpf,
			email: email,
			phone: phone,
			passwordHash: passwordHash
		};
		return filterClient;
	} 

	const client = cleanSpaceInputs(clientData);

    function validateLength(newClient: ClientDataType): ClientDataInput {
		let validateInput: ClientDataInput = {name: false, cpf: false, email: false, phone: false, passwordHash: false};
		validateInput.name = filterLength(newClient.name);
		validateInput.cpf = filterLength(newClient.cpf);
		validateInput.email = filterLength(newClient.email);
		validateInput.phone = filterLength(newClient.phone);
		validateInput.passwordHash = filterLength(newClient.passwordHash);
		// for(let item in newClient) {
		// 	let field = newClient[item as keyof ClientDataType];
		// 	fieldValue = filterLength(field);
		// }
		return validateInput;
    }

	function filterLength(field:any): boolean{ 
        if(field.length > 100) {
            return true;
        } else return false;
    }

	const length = validateLength(client);
	return length;
};


// #Filtros input na página de cadastro

// Geral
// - Mais de dois espaços V
// - Mais de 100 caracteres (tirando email?)

// Campos
// - Nome não pode ser apenas composto de números (F filho do elon musk)
// - CPF não pode conter letras
// - E-mail tem que possuir @
// - Número não pode conter letras
// Senha não pode conter espaços 
// - Opção de ocultar senha