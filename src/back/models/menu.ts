import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Item } from "./item";

export class Menu extends Model<InferAttributes<Menu>, InferCreationAttributes<Menu>> {
	declare id: string;
	declare name: string;
	declare description: string;
	declare available: boolean;
	declare startDateTime: Date;
	declare endDateTime: Date;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Menu.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		available: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		startDateTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		endDateTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "menus"
	}
);

Menu.belongsToMany(Item, { through: "MenuItems" }); 
