import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Delivery } from "./delivery";

export class DeliveryCompany extends Model<InferAttributes<DeliveryCompany>, InferCreationAttributes<DeliveryCompany>> {
	declare id: string;
	declare name: string;
	declare fee: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

DeliveryCompany.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false,
		},
		fee: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "deliveryCompanies"
	}
);

DeliveryCompany.hasMany(Delivery, { foreignKey: "id" });
