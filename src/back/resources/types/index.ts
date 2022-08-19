export type ClientDataType = {
	name: string,
	cpf: string,
	email: string,
	phone: string,
	passwordHash: string,
	token: string
}

export type responseType = {
	message?: string | null,
	code?: string | null,
	result?: unknown,
}

// export type getByResultType = {
// 	result?: unknown,
// 	errorCode?:
// }