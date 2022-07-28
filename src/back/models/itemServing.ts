const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class ItemServing extends Model<InferAttributes<ItemServing>, InferCreationAttributes<ItemServing>> {

}

ItemServing.init(
	{
		itemID: {
			type: DataTypes.UUID,
			references: {
				model: Item,
				key: id
			}
		},
		servingID: {
			type: DataTypes.UUID,
			references: {
				model: Serving,
				key: id
			}
		}
	},
	{
		sequelize,
		tableName: "itemServings"
	}
);
