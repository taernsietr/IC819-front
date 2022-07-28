const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
	declare id: string; // TODO: verificar se é o tipo correto para armazenar um UUIDV4 em TS
	declare street: string;
	declare number: string;
	declare additionalInfo: string;
	declare district: string;
	declare city: string;
	declare postCode: string;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Address.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		street: { 
			type: DataTypes.STRING(32),
			allowNull: false
		},
		number: {
			type: DataTypes.STRING(4),
			allowNull: false // TODO: definir se casos em que o endereço não tem número devem conter isso explicitamente no campo Rua
		},
		additionalInfo: {
			type: DataTypes.STRING(256),
			allowNull: true
		}
		district: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		city: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		postCode: {
			type: DataTypes.STRING(7), // TODO: verificar tamanho
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: "adresses"
	}
);
