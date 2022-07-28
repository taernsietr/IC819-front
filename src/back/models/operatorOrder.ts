const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class OperatorOrder extends Model<InferAttributes<OperatorOrder>, InferCreationAttributes<OperatorOrder>> {

}

OperatorOrder.init(
	{
		operatorID: {
			type: DataTypes.UUID,
			references: {
				model: Operator,
				key: id
			}
		},
		orderID: {
			type: DataTypes.UUID,
			references: {
				model: Order,
				key: id
			}
		}
	},
	{
		sequelize,
		tableName: "operatorOrders"
	}
);
