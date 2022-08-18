import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Item } from "./item";

export class CustomizableDish extends Model<InferAttributes<CustomizableDish>, InferCreationAttributes<CustomizableDish>> {
	declare id: string;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

// TODO: deve herdar os atributos de Item
CustomizableDish.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	},
	{
		sequelize,
		tableName: "customizableDishes"
	}
);

CustomizableDish.hasOne(Item, { foreignKey: "id" }); 
