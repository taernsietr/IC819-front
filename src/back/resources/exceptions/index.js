const exceptions = {
	InvalidDataException(invalidData) {
		
		this.exceptionCode = "INVALID_DATA";
		this.title = "Dados Inválidos";
		this.message = invalidData ? `O campo ${invalidData} é inválido. Por favor preencha o campo corretamente.`: "Um ou mais dados são inválidos, por favor preencha os dados corretamente.";
	},

	EmptyDataException(emptyData) {
		this.exceptionCode = "EMPTY_DATA";
		this.title = "Dados Em Branco";
		this.message = emptyData ? `O campo ${emptyData} está vazio. Por favor preencha o campo.` : "Um ou mais dados estão em branco. Por favor preencha todos os dados requeridos.";
	}
};

// class ExecutionError extends Error {
// 	constructor() {
// 		const message = "auhdaihdi";
// 		super(message, );

// 		this.title = "dahiduhua";
// 	}
// }

// TODO: Criar um "super" para as exceptions
// class Exceptions {
// 	constructor() {
// 		this.
// 	}
// }


export default { ...exceptions };
