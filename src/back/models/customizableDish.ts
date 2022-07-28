const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class CustomizableDish extends Model<InferAttributes<CustomizableDish>, InferCreationAttributes<CustomizableDish>> {
	define id: string;
}

// TODO: deve herdar os atributos de Item
CustomizableDish.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		}
	},
	{
		sequelize,
		tableName: "customizableDishes"
	}
);
