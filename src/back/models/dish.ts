import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

export class Dish extends Model<InferAttributes<Dish>, InferCreationAttributes<Dish>> {
	declare value: number;
	declare weight: number;
	declare availableInStock: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

// TODO: deve herdar os atributos de Item
Dish.init(
	{
		value: {
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
		tableName: "dishes"
	}
);
