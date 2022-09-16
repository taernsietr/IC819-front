import Sequelize from "sequelize";
import db from "../db.js";
import { validations } from "../resources/index.js";

// TODO: sequelize
export const ClientModel = {};

export const Client = {
	createClient: async (data) => {
		const createdUser = await	ClientModel.create({
			name: data.name,
			cpf: data.cpf,
			email: data.email,
			phone: data.phone,
			passwordHash: data.passwordHash,
			token: data.token,
		});

		return createdUser;
	},

	getByCpf: async (cpf) => {
		const res = {
			code: "",
			message: null,
			result: null,
		};

		if (!cpf || cpf == null) {
			console.log("[getByCpf] cpf não existe ou é null");
			res.code = "EMPTY_DATA";
			return res;
		}

		cpf = cpf.trim();

		if (!validations.cpfValidation(cpf)) {
			console.log("[getByCpf] cpf é inválido");
			res.code = "INVALID_DATA";
			return res;
		}

		console.log("[getByCpf] cpf é válido, vai procurar");

		const userFound = await ClientModel.findOne({
			where: { cpf },
		});

		res.result = userFound;
		res.code = "OK";
		return res;
	},

	getByEmail: async (email) => {
		const res = {
			code: "",
			message: null,
			result: null,
		};

		if (!email || email == null) {
			console.log("[getByEmail] email não existe ou é null");
			res.code = "EMPTY_DATA";
			return res;
		}

		email = email.trim();

		if (!validations.emailValidation(email)) {
			console.log("[getByEmail] email é inválido");
			res.code = "INVALID_DATA";
			return res;
		}

		console.log("[getByEmail] email é válido, vai procurar");

		const userFound = await ClientModel.findOne({
			where: { email },
		});

		res.result = userFound;
		res.code = "OK";
		return res;
	},
};
