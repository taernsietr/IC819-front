import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Order } from "./order";

export class Delivery extends Model<InferAttributes<Delivery>, InferCreationAttributes<Delivery>> {
	declare id: string;
	declare scheduledDatetime: Date;
	declare timeDelivered: Date;
	declare takeout: boolean;
	declare distance: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Delivery.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		scheduledDatetime: { 
			type: DataTypes.DATE,
			allowNull: false
		},
		timeDelivered: { 
			type: DataTypes.DATE,
			allowNull: false
		},
		takeout: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		distance: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "deliveries"
	}
);

Delivery.hasMany(Order, { foreignKey: "id" });
