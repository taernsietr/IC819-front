const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
	declare id: string;
	declare status: string;
	
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Order.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		status: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	},
	{
		sequelize,
		tableName: "orders"
	}
);

Order.belongsToMany(Item, { through: "OrderItem" });