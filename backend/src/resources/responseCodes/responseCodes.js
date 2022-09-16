const responseCodes = {
	// erros desconhecidos
	unknownInternalError: "INTERNAL_ERROR",

	// respostas esperadas/conhecidas
	success: "OK",
	created: "CREATED",
	invalidData: "INVALID_DATA",
	emptyData: "EMPTY_DATA",
	duplicatedUniqueData: {
		cpf: "DUPLICATED_CPF",
		email: "DUPLICATED_EMAIL",
	},
};

export default responseCodes;
