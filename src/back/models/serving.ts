import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { CustomizableDish } from "./customizableDish";

export class Serving extends Model<InferAttributes<Serving>, InferCreationAttributes<Serving>> {
	declare id: string;
	declare name: string;
	declare category: string;
	declare pricePerWeight: number;
	declare weight: number;
	declare availableInStock: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Serving.init(
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
		category: {
			type: DataTypes.STRING(128),
			allowNull: false
		},
		pricePerWeight: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		weight: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		availableInStock: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "servings"
	}
);

Serving.belongsToMany(CustomizableDish, { through: "ItemServing" });
