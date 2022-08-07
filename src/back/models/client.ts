import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
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

Client.init(
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

Client.hasMany(Order, { foreignKey: "id" });
Client.hasOne(Address, { foreignKey: "id" });