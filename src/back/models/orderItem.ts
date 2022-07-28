const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class OrderItem extends Model<InferAttributes<OrderItem>, InferCreationAttributes<OrderItem>> {
	declare quantity: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

OrderItem.init(
	{
		orderID: {
			type: DataTypes.UUID,
			references: {
				model: Order,
				key: id
			}
		},
		itemID: {
			type: DataTypes.UUID,
			references: {
				model: Item,
				key: id
			}
		},
		quantity: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: "orderItems"
	}
);
