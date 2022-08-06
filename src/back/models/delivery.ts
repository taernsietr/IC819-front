class Delivery extends Model<InferAttributes<Delivery>, InferCreationAttributes<Delivery>> {
	declare id: string;
	declare scheduleDatetime: Date;
	declare timeDelivered: Date;
	declare takeout: boolean;
	declare distance: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Delivery.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		scheduledDatetime: { 
			type: DateTypes.DATE,
			allowNull: false
		},
		timeDelivered: { 
			type: DateTypes.DATE,
			allowNull: false
		},
		takeout: {
			type: DateTypes.BOOLEAN,
			allowNull: false
		}
		distance: {
			type: DateTypes.FLOAT,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: "deliveries"
	}
);

Delivery.hasMany(Order, { foreignKey: "id" });
