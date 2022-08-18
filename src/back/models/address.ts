import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

export class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
	declare id: string; // TODO: verificar se é o tipo correto para armazenar um UUIDV4 em TS | ver doc https://www.npmjs.com/package/uuidv4
	declare street: string;
	declare number: CreationOptional<string>;
	declare additionalInfo: CreationOptional<string>;
	declare district: string;
	declare city: string;
	declare postCode: string;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Address.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		street: { 
			type: DataTypes.STRING(32),
			allowNull: false
		},
		number: {
			type: DataTypes.STRING(4),
			allowNull: true // TODO: definir se casos em que o endereço não tem número devem conter isso explicitamente no campo Rua
		},
		additionalInfo: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		district: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		city: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		postCode: {
			type: DataTypes.STRING(7), // TODO: verificar tamanho
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize, 
		tableName: "adresses"
	}
);
