import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../db";

export class Menu extends Model<InferAttributes<Menu>, InferCreationAttributes<Menu>> {
	declare id: string;
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
