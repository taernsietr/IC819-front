const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class MenuItem extends Model<InferAttributes<MenuItem>, InferCreationAttributes<MenuItem>> {

}

MenuItem.init(
	{
		menuID: {
			type: DataTypes.UUID,
			references: {
				model: Menu,
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
	},
	{
		sequelize,
		tableName: "menuItems"
	}
);
