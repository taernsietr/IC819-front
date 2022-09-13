/* eslint-disable @typescript-eslint/ban-types */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Order } from "./order";
import { Address } from "./address";

import { validations, handlers } from "../resources";

import type { ClientDataType, responseType } from "../resources/types";

export const Client = {
	isNameValid: (name: string) => {
		// validar nome
		if(name === null || !name) {
			return false;
		}
		
		name = name.trim();

		if (name === "") {
			return false;
		}

		if(!validations.nameValidation(name)) {
			return false;
		}

		return true;
	},

	isCpfValid: (cpf: string) => {
		// validar cpf
		if (cpf === null || !cpf) {
			return false;
		}

		cpf = cpf.trim();

		if (cpf === "") {
			return false;
		}

		if (!validations.cpfValidation(cpf)) {
			return false;
		}

		return true;
	},

	isEmailValid: (email: string) => {
		// validar email
		if (email === null || !email) {
			return false;
		}

		email = email.trim();

		if (email === "") {
			return false;
		}

		if (!validations.emailValidation(email)) {
			return false;
		}

		return true;
	},

	isPhoneNumberValid: (phoneNumber: string) => {
		// validar número de telefone
		if (phoneNumber === null || !phoneNumber) {
			return false;
		}

		phoneNumber = phoneNumber.trim();

		if (phoneNumber === "") {
			return false;
		}

		if (!validations.phoneNumberValidation(phoneNumber)) {
			return false;
		}

		return true;
	},

	isPasswordHashValid: (passHash: string) => {
		// TODO: verificar se o hash é válido
	},

	createClient: async (data: ClientDataType) => {
		const createdUser = await	ClientModel.create({
			name: data.name,
			cpf: data.cpf,
			email: data.email,
			phone: data.phone,
			passwordHash: data.passwordHash,
			token: data.token
		});

		// TODO: retornar apenas res = createdUser pra tratar lá no controller
		const res: responseType = {
			code: handlers.successResponse.code,
			result: createdUser,
		};

		return res;
	},

	getByCpf: async (cpf: string) => {
		const res: responseType = {
			code: "",
			message: null,
			result: null
		};

		if (!cpf || cpf == null ) {
			console.log("[getByCpf] cpf não existe ou é null"); 
			res.code = handlers.emptyDataResponse.code;
			res.message = handlers.emptyDataResponse.message;
			return res;
		}

		cpf = cpf.trim();
		
		if (!Client.isCpfValid(cpf)) {
			console.log("[getByCpf] cpf é inválido"); 
			res.code = handlers.invalidDataResponse.code;
			res.message = handlers.invalidDataResponse.message;
			return res;
		}
		
		console.log("[getByCpf] cpf é válido, vai procurar"); 

		const userFound = await ClientModel.findOne({
			where: { cpf: cpf }
		});

		res.result = userFound;
		res.code = handlers.successResponse.code;
		return res;
	},

	getByEmail: async (email: string) => {
		const res: responseType = {
			code: "",
			message: null,
			result: null
		};

		if (!email || email == null) {
			console.log("[getByEmail] email não existe ou é null");
			res.code = handlers.emptyDataResponse.code;
			res.message = handlers.emptyDataResponse.message;
			return res;
		}

		email = email.trim();

		if (!Client.isEmailValid(email)) {
			console.log("[getByEmail] email é inválido");
			res.code = handlers.invalidDataResponse.code;
			res.message = handlers.invalidDataResponse.message;
			return res;
		}

		console.log("[getByEmail] email é válido, vai procurar");

		const userFound = await ClientModel.findOne({
			where: { email: email }
		});

		res.result = userFound;
		res.code = handlers.successResponse.code;
		return res;
	},
};

export class ClientModel extends Model<InferAttributes<ClientModel>, InferCreationAttributes<ClientModel>> {
	declare id: any;
	declare name: string;
	declare cpf: string;
	declare email: string;
	declare phone: string;
	declare passwordHash: string;
	declare token: string;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

ClientModel.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false
		},
		cpf: {
			type: DataTypes.STRING(11),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(32), // TODO: confirmar tipo e tamanho
			allowNull: false
			// TODO: unique
		},
		phone: {
			type: DataTypes.STRING(11),
			allowNull: false
		},
		passwordHash : {
			type: DataTypes.STRING(512), // TODO: presumindo SHA512; confirmar tamanho necessário
			allowNull: false
		},
		token: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	},
	{
		sequelize,
		tableName: "clients"
	}
);

ClientModel.hasMany(Order, { foreignKey: "id" });
ClientModel.hasOne(Address, { foreignKey: "id" });

// exportar os tipos
export type { ClientDataType };
