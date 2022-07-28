const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class Menu extends Model<InferAttributes<Menu>, InferCreationAttributes<Menu>> {
	define id: string;
	define description: string;
	define available: boolean;
	define startDateTime: Date;
	define endDateTime: Date;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Menu.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
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
		}
	},
	{
		sequelize,
		tableName: "menus"
	}
);
