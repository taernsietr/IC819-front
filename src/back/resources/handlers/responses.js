const resultResponse = {
	invalidDataResponse: {
		code: "INVALID_DATA",
		message: "Um ou mais dados inválidos",
	},

	emptyDataResponse: {
		code: "EMPTY_DATA",
		message: "Um ou mais dados em branco"
	},

	duplicatedUniqueDataResponse: {
		code: "DUPLICATED_UNIQUE_DATA",
		message: "O dado informado já está cadastrado."
	},

	successResponse: {
		code: "OK"
	},

	createdResponse: {
		code: "CREATED",
		message: "Os dados foram salvos com sucesso."
	}

};

export default resultResponse;