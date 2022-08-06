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
