class CustomizableDish extends Model<InferAttributes<CustomizableDish>, InferCreationAttributes<CustomizableDish>> {
	define id: string;
}

// TODO: deve herdar os atributos de Item
CustomizableDish.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		}
	},
	{
		sequelize,
		tableName: "customizableDishes"
	}
);
