import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

const Operator = require("./operator");
const Order = require("./order");

class OperatorOrder extends Model<InferAttributes<OperatorOrder>, InferCreationAttributes<OperatorOrder>> {

}

OperatorOrder.init(
	{
		operatorID: {
			type: DataTypes.UUID,
			references: {
				model: Operator,
				key: id
			}
		},
		orderID: {
			type: DataTypes.UUID,
			references: {
				model: Order,
				key: id
			}
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "operatorOrders"
	}
);
