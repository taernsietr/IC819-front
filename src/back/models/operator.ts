import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class Operator extends Model<InferAttributes<Operator>, InferCreationAttributes<Operator>> {
	declare id: string;
	declare operatorType: string

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Operator.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		operatorType: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	},
	{
		sequelize,
		tableName: "operators"
	}
);
