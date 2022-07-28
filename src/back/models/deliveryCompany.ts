const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class DeliveryCompany extends Model<InferAttributes<DeliveryCompany>, InferCreationAttributes<DeliveryCompany>> {
	declare id: string;
	declare name: string;
	declare fee: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

DeliveryCompany.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false,
		},
		fee: {
			type: DataTypes.FLOAT,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: "deliveryCompanies"
	}
);

DeliveryCompany.hasMany(Delivery, { foreignKey: "id" });
