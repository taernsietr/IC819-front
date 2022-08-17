import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

const Item = require("./item");
const Delivery = require("./delivery");

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
	declare id: string;
	declare status: string;
	
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Order.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		status: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	},
	{
		sequelize,
		tableName: "orders"
	}
);

Order.belongsTo(Delivery);
Order.belongsToMany(Item, { through: "OrderItem" });
