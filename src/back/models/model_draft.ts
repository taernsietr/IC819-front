const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
	declare id: number;
	declare name: string;
	declare cpf: string;
	declare email: string;
	declare phone: string;
	declare passwordHash: string;
	declare token: string;

	// Atributos de data/hora de criação e atualização não foram estabelecidos pelos modelos;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	// TODO: Relacionamento com Address(addressID)?
}

class Order extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
	declare id: number;
	declare status: string;
	
	// Atributos de data/hora de criação e atualização não foram estabelecidos pelos modelos;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	// TODO: Relacionamento com Client(addressID)?
	// TODO: Relacionamento com Address(addressID)?
}

class Operator extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
	declare id: number;
	declare operatorType: string

	// Atributos de data/hora de criação e atualização não foram estabelecidos pelos modelos;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Client.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: new DataTypes.STRING(128),
			allowNull: false
		},
		cpf: {
			type: new DataTypes.STRING(11),
			allowNull: false
		},
		phone: {
			type: new DataTypes.STRING(11),
			allowNull: false
		},
		passwordHash : {
			type: new DataTypes.STRING(512), // TODO: presumindo SHA512; confirmar tamanho necessário
			allowNull: false
		}
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	},
	{
		sequelize,
		tableName: "clients"
	}
);

Order.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true
		},
		status: {
			type: new DataTypes.STRING(
