const exceptions = {
	InvalidDataException() {
		this.code = "INVALID_DATA";
		this.title = "Dados Inválidos";
		this.message = "Um ou mais dados são inválidos.";
	},

	EmptyDataException() {
		this.code = "EMPTY_DATA";
		this.title = "Dados Em Branco";
		this.message = "Um ou mais dados estão em branco. Por favor preencha todos os dados requeridos.";
	}

};

export default exceptions;