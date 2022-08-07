import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class Dish extends Model<InferAttributes<Dish>, InferCreationAttributes<Dish>> {
	define value: number;
	define weight: number;
	define availableInStock: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

// TODO: deve herdar os atributos de Item
Dish.init(
	{
		value: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		weight: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		availableInStock: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: "dishes"
	}
);
