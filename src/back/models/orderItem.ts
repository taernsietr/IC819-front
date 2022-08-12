import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

const Order = require("./order");
const Item = require("item");

class OrderItem extends Model<InferAttributes<OrderItem>, InferCreationAttributes<OrderItem>> {
	declare orderID: string;
	declare itemID: string;
	declare quantity: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

OrderItem.init(
	{
		orderID: {
			type: DataTypes.UUID,
			references: {
				model: Order,
				key: id
			}
		},
		itemID: {
			type: DataTypes.UUID,
			references: {
				model: Item,
				key: id
			}
		},
		quantity: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "orderItems"
	}
);
