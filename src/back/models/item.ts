import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Order } from "./order";
import { Menu } from "./menu";
import { Serving } from "./serving";
export class Item extends Model<InferAttributes<Item>, InferCreationAttributes<Item>> {
	declare id: string;
	declare name: string;
	declare description: string;
	declare enabled: boolean;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Item.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(256),
			allowNull: false,
		},
		enabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "items"
	}
);

Item.belongsToMany(Order, { through: "OrderItem" });
Item.belongsToMany(Menu, { through: "MenuItem" });
Item.belongsToMany(Serving, { through: "ItemServing" });
