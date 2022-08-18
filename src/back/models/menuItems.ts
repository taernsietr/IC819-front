import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Menu } from "./menu";
import { Item } from "./item";
export class MenuItem extends Model<InferAttributes<MenuItem>, InferCreationAttributes<MenuItem>> {

}

MenuItem.init(
	{
		menuID: {
			type: DataTypes.UUID,
			references: {
				model: Menu,
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
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "menuItems"
	}
);
