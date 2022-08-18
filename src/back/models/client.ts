/* eslint-disable @typescript-eslint/ban-types */
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Order } from "./order";
import { Address } from "./address";

// import exceptions from "../resources/exceptions";
// const { EmptyDataException, InvalidDataException } = exceptions;

type ClientDataType = {
	name: string,
	cpf: string,
	email: string,
	phone: string,
	passwordHash: string,
	addressID: string,
	token: string
}

export const Client = {
	isDataNull: (data: ClientDataType) => {
		let isNull = false;

		// verificar se os atributos esperados são nulos
		if (!data.name || !data.cpf || !data.email || !data.phone || !data.passwordHash || !data.token) {
			isNull = true;
		}

		console.log(`is null = ${isNull}`);

		return isNull;
	},

	isDataValid: (data: ClientDataType) => {
		let isValid = true;

		// verificar 

		isValid = false;

		// TODO: validação nome
		// TODO: validação cpf
		// TODO: validação email
		// TODO: validação telefoneunknown
		// TODO: validação senha
		console.log(`isValid = ${isValid}`);
		return isValid;
	},

	doesUniqueDataAlreadyExists: (data: { cpf: string; email: string; }) => {
		let alreadyExists = false;

		alreadyExists = true;

		console.log(`alreadyExists = ${alreadyExists}`);
		return alreadyExists;
	},

	createHashPassword: (data: string) => {
		const hash = "";
		// TODO: criar o hash da senha
		// a senha será criptografada no frontend?? pra não enviar nenhuma senha plain text
		// 		nas requisições?
		return hash;
	},

	createClient: (data: ClientDataType) => {
		// TODO: criar o usuário no BD

		// ClientModel.create(data) ?

		const user = {};
		return null;
	},

	getByCpf: async (cpf: string) => {
		let userFound = null;

		if (cpf && !cpf == null) {
			cpf = cpf.trim();

			// TODO: validar cpf no if
			if (cpf) {
				console.log("[getByCpf] cpf é válido, vai procurar"); 

				userFound = await ClientModel.findOne({
					where: { cpf: cpf }
				});

				return userFound;

			} else {
				throw InvalidDataException();
			}
		} else {
			throw EmptyDataException();
		}
	},

	getByEmail: async (email: string) => {
		let userFound = null;

		if (email && !email == null) {
			email = email.trim();

			// TODO: validar email no if
			if (email) {
				console.log("[getByEmail] email é válido, vai procurar"); 

				userFound = await ClientModel.findOne({
					where: { email: email }
				});

				return userFound;

			} else {
				throw InvalidDataException();
			}
		} else {
			throw EmptyDataException();
		}
	},
};

export class ClientModel extends Model<InferAttributes<ClientModel>, InferCreationAttributes<ClientModel>> {
	declare id: string;
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

// TODO: sincronizar modelo -> await ClientModel.sync({ force: true });

// exportar os tipos
export type { ClientDataType };
