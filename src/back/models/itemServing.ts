import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

import { Item } from "./item";
import { Serving } from "./serving";

export class ItemServing extends Model<InferAttributes<ItemServing>, InferCreationAttributes<ItemServing>> {

}

ItemServing.init(
	{
		itemID: {
			type: DataTypes.UUID,
			references: {
				model: Item,
				key: id //  Item.id ?
			}
		},
		servingID: {
			type: DataTypes.UUID,
			references: {
				model: Serving,
				key: id
			}
		}
	},
	{
		sequelize,
		tableName: "itemServings"
	}
);
