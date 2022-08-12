import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

const Item = require("./item");
const Serving = require("./serving");

class ItemServing extends Model<InferAttributes<ItemServing>, InferCreationAttributes<ItemServing>> {

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
