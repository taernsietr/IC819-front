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
