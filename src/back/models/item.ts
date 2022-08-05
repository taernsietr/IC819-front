const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class Item extends Model<InferAttributes<Item>, InferCreationAttributes<Item>> {
	define id: string;
	define name: string;
	define description: string;
	define enabled: boolean;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Item.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(256),
			allowNull: false,
		},
		enabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: "items"
	}
);

Item.belongsToMany(Order, { through: "OrderItem" });
Item.belongsToMany(Menu, { through: "MenuItem" });
Item.belongsToMany(Serving, { through: "ItemServing" });
