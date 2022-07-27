const Sequelize = require ("sequelize");
const sequelize = new Sequelize("mariadb://root:mayana@localhost:3306/IC819");

class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
	declare id: string;
	declare name: string;
	declare cpf: string;
	declare email: string;
	declare phone: string;
	declare passwordHash: string;
	declare token: string;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
	declare id: string;
	declare status: string;
	
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

class Operator extends Model<InferAttributes<Operator>, InferCreationAttributes<Operator>> {
	declare id: string;
	declare operatorType: string

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

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

class Delivery extends Model<InferAttributes<Delivery>, InferCreationAttributes<Delivery>> {
	declare id: string;
	declare scheduleDatetime: Date;
	declare timeDelivered: Date;
	declare takeout: boolean;
	declare distance: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

class DeliveryCompany extends Model<InferAttributes<DeliveryCompany>, InferCreationAttributes<DeliveryCompany>> {
	declare id: string;
	declare name: string;
	declare fee: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

class OrderItem extends Model<InferAttributes<OrderItem>, InferCreationAttributes<OrderItem>> {
	declare quantity: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}


class MenuItem extends Model<InferAttributes<MenuItem>, InferCreationAttributes<MenuItem>> {

}

class ItemServing extends Model<InferAttributes<ItemServing>, InferCreationAttributes<ItemServing>> {

}

class OperatorOrder extends Model<InferAttributes<OperatorOrder>, InferCreationAttributes<OperatorOrder>> {

}

class Item extends Model<InferAttributes<Item>, InferCreationAttributes<Item>> {
	define id: string;
	define name: string;
	define description: string;
	define enabled: boolean;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

class Dish extends Model<InferAttributes<Dish>, InferCreationAttributes<Dish>> {
	define value: number;
	define weight: number;
	define availableInStock: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

class CustomizableDish extends Model<InferAttributes<CustomizableDish>, InferCreationAttributes<CustomizableDish>> {
	define id: string;
}

class Menu extends Model<InferAttributes<Menu>, InferCreationAttributes<Menu>> {
	define id: string;
	define description: string;
	define available: boolean;
	define startDateTime: Date;
	define endDateTime: Date;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

class Serving extends Model<InferAttributes<Serving>, InferCreationAttributes<Serving>> {
	define id: string;
	define name: string;
	define category: string;
	define pricePerWeight: number;
	define weight: number;
	define availableInStock: number;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
}

Client.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
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
		updatedAt: DataTypes.DATE
	},
	{
		sequelize,
		tableName: "clients"
	}
);

Order.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		status: {
			type: new DataTypes.STRING(32),
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	}
);

Operator.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		operatorType: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	}
);

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
	}
);

Delivery.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
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
	}
);

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
	}
);

OrderItem.init(
	{
		quantity: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		}
	}
);

MenuItems.init(
	{
	}
);

ItemServing.init(
	{
	}
);

OperatorOrder.init(
	{
	}
);

Item.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(256),
			allowNull: false,
		},
		enabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}
);

// TODO: deve herdar os atributos de Item
Dish.init(
	{
		value: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		weight: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		availableInStock: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		}
	}
);

// TODO: deve herdar os atributos de Item
CustomizableDish.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		}
	}
);

Menu.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		description: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		available: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		startDateTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		endDateTime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}
);

Serving.init(
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNUll: false
		},
		category: {
			type: DataTypes.STRING(128),
			allowNUll: false
		},
		pricePerWeight: {
			type: DataType.FLOAT,
			allowNull: false
		},
		weight: {
			type: DataType.FLOAT,
			allowNull: false
		},
		availableInStock: {
			type: DataType.INTEGER.UNSIGNED,
			allowNull: false
		}
	}
);
