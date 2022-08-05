const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class Serving extends Model<InferAttributes<Serving>, InferCreationAttributes<Serving>> {
	define id: string;
	define name: string;
	define category: string;
	define pricePerWeight: number;
	define weight: number;
	define availableInStock: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Serving.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNUll: false
		},
		category: {
			type: DataTypes.STRING(128),
			allowNUll: false
		},
		pricePerWeight: {
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
		tableName: "servings"
	}
);
